import {useState} from 'react'

const Todo = () => {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(newTodo)
  }

  return (
    <div className="p-4 w-[700px] mx-auto bg-gray-100 rounded-xl">
        <h1 className="text-2xl font-bold text-center text-indigo-800">Todo App</h1>
        <div className="flex items-center justify-center mt-10">
            <form onSubmit={handleSubmit} className="flex items-center">
                <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} type="text" placeholder="Add a new task..." className="border border-gray-400 rounded p-2 w-[400px]" />
                <button type="submit" className="py-2 px-4 bg-indigo-600 ml-[10px] rounded text-white" >Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default Todo