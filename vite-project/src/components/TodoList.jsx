
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="mt-6 space-y-3">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;