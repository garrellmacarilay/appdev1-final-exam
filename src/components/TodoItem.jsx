import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo } from "../features/todos/todosSlice"

function TodoItem ({ todo, savedTheme }) {
  const dispatch = useDispatch()

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleDelete = (e) => {
    const todoDiv = e.target.closest('.todo')
    todoDiv.classList.add('fall')
    
    todoDiv.addEventListener('transitionend', function() {
      dispatch(deleteTodo(todo.id))
    })
  }
  
  return (
    <div className={`todo ${savedTheme}-todo ${todo.completed ? 'completed' : ''}`}>
      <li className="todo-item">
        {todo.title}
      </li>
      
      <button
        onClick={toggleComplete}
        className={`check-btn ${savedTheme}-button`}
      >
        <i className="fas fa-check"></i>
      </button>
      
      <button
        onClick={handleDelete}
        className={`delete-btn ${savedTheme}-button`}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default TodoItem
