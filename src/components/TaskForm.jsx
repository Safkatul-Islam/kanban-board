import { useState, useRef } from "react";

function TaskForm({ onAddTask }) {
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
        inputRef.current?.focus();
        return;
    }

    const newTaskObj = {
      id: Date.now(),
      title: title,
      status: status,
    };

    onAddTask(newTaskObj);

    setTitle("");
    setStatus("todo");

    inputRef.current?.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="title"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
