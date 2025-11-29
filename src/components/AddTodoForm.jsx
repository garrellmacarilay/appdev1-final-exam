import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"

function AddTodoForm ({ savedTheme }) {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault()
    if (title.trim() === "") {
      alert("You must write something!")
      return
    }
    dispatch(addTodo(title))
    setTitle("")
  }

  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task."
        className={`todo-input ${savedTheme}-input`}
      />
      <button 
        type="submit"
        onClick={handleAdd}
        className={`todo-btn ${savedTheme}-button`}
      >
        I Got This!
      </button>
    </form>
  )
}

export default AddTodoForm
