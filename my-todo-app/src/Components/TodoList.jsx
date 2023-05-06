import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default TodoList;