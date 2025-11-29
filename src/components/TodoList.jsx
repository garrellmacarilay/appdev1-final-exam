import TodoItem from "./TodoItem";

function TodoList({ todos, savedTheme }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} savedTheme={savedTheme} />
      ))}
    </ul>
  );
}

export default TodoList
