import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl">

        <h1 className="mb-6 text-3xl font-bold">
          Todo Management
        </h1>

        <TodoForm setTodos={setTodos} />

        <div className="my-4 flex gap-2">
          <button onClick={() => setFilter("all")}>
            All
          </button>

          <button onClick={() => setFilter("active")}>
            Active
          </button>

          <button onClick={() => setFilter("completed")}>
            Completed
          </button>
        </div>

        <TodoList
          todos={todos}
          setTodos={setTodos}
          filter={filter}
        />

      </div>
    </div>
  );
}

export default App;