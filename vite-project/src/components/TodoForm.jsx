function TodoForm() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your task..."
        className="flex-1 rounded-lg border bg-white p-3"
      />

      <button className="rounded-lg bg-blue-600 px-5 py-3 text-white">
        Add
      </button>
    </div>
  );
}

export default TodoForm;