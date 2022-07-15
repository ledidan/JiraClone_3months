import React, { useRef, useState } from "react";
import "./DragTag.css";
import { useSpring, animated } from "react-spring";
const defaultValue = [
  { id: 0, taskName: "Task 1" },
  { id: 1, taskName: "Task 2" },
  { id: 2, taskName: "Task 3" },
  { id: 3, taskName: "Task 4" },
  { id: 4, taskName: "Task 5" },
];

export default function DemoDrapDrop(props) {
  const [taskList, setTaskList] = useState(defaultValue);
  const start = useRef({});
  const tagDragEnter = useRef({});
  // Animated
  const [propsSpring, set, stop] = useSpring(() => ({
    from: { bottom: -25 },
    to: { bottom: 0 },
    config: { duration: 250 },
    reset: true,
  }));
  const handleDragStart = (e, task, index) => {
    console.log("indexStart", task);
    start.current = task;
  };

  const hangdleDragEnter = (e, task, index) => {
    // Luu lai gia tri cua task duoc keo ngang qua
    tagDragEnter.current = { ...task };
    const taskListUpDate = [...taskList];
    let indexStart = taskListUpDate.findIndex((item) => item.id === start.current.id);
    let indexEnd = taskListUpDate.findIndex((item) => item.id === task.id);
    let tem = taskListUpDate[indexStart];
    console.log("tem", tem);
    taskListUpDate[indexStart] = taskListUpDate[indexEnd];
    console.log("Start -> end", taskListUpDate[indexStart]);
    taskListUpDate[indexEnd] = tem;
    console.log("end -> start", taskListUpDate[indexStart]);
    setTaskList(taskListUpDate);
  };

  const hangdleDragEnd = (e) => {};

  return (
    <div
      className="container"
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      onDrop={(e) => {
        start.current = "";
        setTaskList([...taskList]);
      }}
    >
      <div className="text-center display-4">Task list</div>
      <div className="row">
        <div className="col-2"></div>
        <div className="bg-dark p-5 col-4">
          {taskList.map((item, index) => {
            let cssDragTag = item.id === start.current.id ? "dragTag" : "";
            if (item.id === tagDragEnter.current.id) {
              return (
                <animated.div
                  style={{
                    position: "relative",
                    bottom: propsSpring.bottom.interpolate((numBottom) => `${numBottom}px`),
                  }}
                  draggable="true"
                  onDragStart={(e) => {
                    handleDragStart(e, item, index);
                  }}
                  onDragEnter={(e) => {
                    hangdleDragEnter(e, item, index);
                  }}
                  onDragEnd={(e) => {
                    hangdleDragEnd(e);
                  }}
                  key={index}
                  className={`bg-success text-white m-3 p-3`}
                >
                  {item.taskName}
                </animated.div>
              );
            }
            return (
              <div
                draggable="true"
                onDragStart={(e) => {
                  handleDragStart(e, item, index);
                }}
                onDragEnter={(e) => {
                  hangdleDragEnter(e, item, index);
                }}
                onDragEnd={(e) => {
                  hangdleDragEnd(e);
                }}
                key={index}
                className={`bg-success text-white m-3 p-3 ${cssDragTag}`}
              >
                {item.taskName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
