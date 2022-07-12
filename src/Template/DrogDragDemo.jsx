import React, { useState } from "react";
import _ from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function DrogDragDemo() {
  const [state, setState] = useState({
    toDo: {
      id: "toDo",
      items: [
        {
          id: "1",
          taskName: "Task 1",
        },
        {
          id: "2",
          taskName: "Task 2",
        },
        {
          id: "3",
          taskName: "Task 3",
        },
      ],
    },
    inProgress: {
      id: "inProgress",
      items: [
        { id: "4", taskName: "Task 4" },
        { id: "5", taskName: "Task 5" },
        { id: "6", taskName: "Task 6" },
      ],
    },
    done: {
      id: "Done",
      items: [
        { id: "7", taskName: "Task 7" },
        { id: "8", taskName: "Task 8" },
        { id: "9", taskName: "Task 9" },
      ],
    },
  });
  const handleDragEnd = (result) => {
    let { destination, source } = result;
    if (!destination) {
      return;
    } else if (
      destination.index === source.index &&
      destination.droppableId === source.draggableId
    ) {
      return;
    }
    // Tao ra 1 Tag drag
    let itemCopy = { ...state[source.droppableId].items[source.index] };
    console.log(itemCopy);
    let dropSource = state[source.droppableId].items.findIndex(
      (item) => item.id !== itemCopy.id
    );
    state[source.droppableId].items.splice(dropSource, 1);
    console.log("dropSource", dropSource);
    // Droppable tha vao
    let dropDestination = state[destination.droppableId].items;
    console.log("destination", dropDestination);

    setState(state);
  };
  return (
    <div className="container">
      <h3 className="demoDragDrop text-xl">Demo Drag Drop</h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="row">
          {_.map(state, (statusTask, index) => {
            return (
              <Droppable droppableId={statusTask.id} key={index}>
                {(provided) => {
                  return (
                    <div className="col-4">
                      <div
                        className="bg-dark p-4"
                        key={index}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {statusTask.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} index={index} draggableId={item.id}>
                              {(provided) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="mt-2 p-4 bg-white text-center"
                                    key={index}
                                  >
                                    {item.taskName}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}
