import { useState } from "react";

function TodoItem({ todo, deleteTodo, setTodos }) {
  const [completed, setCompleted] = useState(todo.completed);

  function toggleTodo() {
    setCompleted(!completed);

    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id
          ? { ...item, completed: !completed }
          : item
      )
    );
  }

  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleTodo}
        />

        <span className={completed ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </div>

      <button
        onClick={deleteTodo}
        className="text-red-500"
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;