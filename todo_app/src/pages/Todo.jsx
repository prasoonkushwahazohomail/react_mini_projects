import { useState } from "react";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  };

  return (
    <div className="p-4 w-[700px] mx-auto bg-gray-100 rounded-xl">
      <h1 className="text-2xl font-bold text-center text-indigo-800">
        Todo App
      </h1>
      <div className="pb-10">
        <div className="flex items-center justify-center mt-10">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              placeholder="Add a new task..."
              className="border border-gray-400 rounded p-2 w-[400px]"
            />
            <button
              type="submit"
              className="py-2 cursor-pointer px-4 bg-indigo-600 ml-[10px] rounded text-white"
            >
              Add Todo
            </button>
          </form>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`mt-2 w-[90%] p-1 bg-white mx-auto rounded flex justify-between items-center`}
            >
              <span style={{textDecoration: todo.completed? "line-through":"none", color:todo.completed? "red":""}}>
                {todo.text}
                <div>{todo.completed}</div>
              </span>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 cursor-pointer px-4 py-1 rounded text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
