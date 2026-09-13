import TodoForm from "./components/TodoForm"
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl">
        
        <h1 className="mb-6 text-3xl font-bold">
          Todo Management
        </h1>
        <TodoForm/>

      </div>
    </div>
  )
}

export default App