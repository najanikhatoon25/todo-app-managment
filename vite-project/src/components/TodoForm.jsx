import { useState } from "react";

function TodoForm({ setTodos }) {
  const [task, setTask] = useState("");

  function addTodo() {
    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 rounded-lg border bg-white p-3"
      />

      <button
        onClick={addTodo}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;