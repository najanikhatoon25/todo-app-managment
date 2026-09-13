function TodoStats({ todos }) {
  const total = todos.length;

  const completed = todos.filter((todo) => todo.completed).length;

  const active = total - completed;

  return (
    <div className="mt-6 rounded-lg bg-white p-4 shadow">
      <div className="flex justify-between text-gray-600">
        <span>Total: {total}</span>
        <span>Active: {active}</span>
        <span>Completed: {completed}</span>
      </div>
    </div>
  );
}

export default TodoStats;