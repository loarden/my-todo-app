import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div>
      <h2>Categories</h2>
      <TodoItem />
      <TodoItem />
      <input placeholder="Add new todo"/>
    </div>
  )
}

export default TodoList;