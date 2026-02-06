import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";

function TaskBoard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [
      { id: 1, title: "Learn React", status: "todo" },
      { id: 2, title: "Practice State", status: "doing" },
      { id: 3, title: "Master JS", status: "done" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [draggedTaskId, setDraggedTaskId] = useState(null);

  const columns = ["todo", "doing", "done"];

  const handleDrop = (event, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === draggedTaskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const onAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div className="board">
      <TaskForm onAddTask={onAddTask} />

      <div className="columns-wrapper">
        {columns.map((column) => (
          <div
            className={column}
            key={column}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, column)}
          >
            <h2>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>
            {tasks.filter((task) => task.status === column).length === 0 ? (
              <p
                style={{
                  textAlign: "center",
                  color: "#999",
                  marginTop: "2rem",
                }}
              >
                No Tasks
              </p>
            ) : (
              tasks
                .filter((task) => task.status === column)
                .map((task) => (
                  <div
                    key={task.id}
                    className="task-title"
                    draggable={true}
                    onDragStart={(e) => setDraggedTaskId(task.id)}
                  >
                    {task.title}
                  </div>
                ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
