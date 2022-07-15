import { Tag } from "antd";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import {
  GET_TASK_DETAL_SAGA,
  UPDATE_TASK_STATUS_SAGA,
} from "../../redux/contants/TaskTypeConstant";

export default function ContentMain(props) {
  const dispatch = useDispatch();
  const { projectDetail } = props;
  const handleDragEnd = (result) => {
    let { projectId, taskId } = JSON.parse(result.draggableId); //Lay ra chuoi sau moi lan draggable
    let { destination, source } = result;
    if (!destination) {
      return;
    } else if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    // Goi Api cap nhat lai status
    dispatch({
      type: UPDATE_TASK_STATUS_SAGA,
      taskStatusUpdate: {
        taskId: taskId,
        statusId: destination.droppableId,
        projectId: projectId,
      },
    });
  };
  const renderCardTaskList = () => {
    return (
      <DragDropContext onDragEnd={handleDragEnd}>
        {projectDetail.lstTask?.map((taskListDetail, index) => {
          return (
            <Droppable droppableId={taskListDetail.statusId}>
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    key={index}
                    className="card pb-2"
                    style={{ width: "20rem", height: "auto" }}
                  >
                    <div className="card-header font-weight-bold">
                      {taskListDetail.statusName}
                    </div>
                    <ul className="list-group list-group-flush">
                      {taskListDetail.lstTaskDeTail.map((task, index) => {
                        return (
                          <Draggable
                            key={task.taskId.toString()}
                            index={index}
                            draggableId={JSON.stringify({
                              projectId: task.projectId,
                              taskId: task.taskId,
                            })}
                          >
                            {(provided) => {
                              return (
                                <li
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  key={index}
                                  className="list-group-item"
                                  data-toggle="modal"
                                  data-target="#infoModal"
                                  onClick={() => {
                                    dispatch({
                                      type: GET_TASK_DETAL_SAGA,
                                      idTask: task.taskId,
                                    });
                                  }}
                                >
                                  <p className="font-weight-bold">{task.taskName}</p>
                                  <div className="block" style={{ display: "flex" }}>
                                    <div className="block-left">
                                      {task.priorityTask.priority === "High" ? (
                                        <Tag color="red">
                                          {task.priorityTask.priority}
                                        </Tag>
                                      ) : (
                                          <Tag color="cyan">
                                            {task.priorityTask.priority}
                                          </Tag>
                                        ) && task.priorityTask.priority === "Medium" ? (
                                        <Tag color="blue">
                                          {task.priorityTask.priority}
                                        </Tag>
                                      ) : (
                                        <Tag color="green">
                                          {task.priorityTask.priority}
                                        </Tag>
                                      )}
                                    </div>
                                    <div className="block-right">
                                      <div
                                        className="avatar-group"
                                        style={{ display: "flex" }}
                                      >
                                        {task.assigness.map((member, index) => {
                                          return (
                                            <div className="avatar" key={index}>
                                              <img
                                                src={member.avatar}
                                                alt={member.avatar}
                                              />
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    );
  };
  return (
    <div className="content" style={{ display: "flex" }}>
      {renderCardTaskList()}
    </div>
  );
}
