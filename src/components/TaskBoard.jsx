import { useState } from "react";

function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", status: "todo" },
    { id: 2, title: "Practice State", status: "doing" },
    { id: 3, title: "Master JS", status: "done" },
  ]);

  return (
    <div className="board">
      <div className="todo">
        <h2>Todo</h2>
        {tasks
          .filter((task) => task.status === "todo")
          .map((task) => (
            <div key={task.id} className="task-title">{task.title}</div>
          ))}
      </div>
      <div className="doing">
        <h2>Doing</h2>
        {tasks
          .filter((task) => task.status === "doing")
          .map((task) => (
            <div key={task.id} className="task-title">{task.title}</div>
          ))}
      </div>
      <div className="done">
        <h2>Done</h2>
        {tasks
          .filter((task) => task.status === "done")
          .map((task) => (
            <div key={task.id} className="task-title">{task.title}</div>
          ))}
      </div>
    </div>
  );
}

export default TaskBoard;
