import TodoList from "./TodoList";
import "./categories.css"

function Categories(props) {
  return (
    <div className="categories">
      <h1>Todo List</h1>
      <div className="categories-wrapper">
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
      <input placeholder="Add new category"/>
    </div>
  )
}

export default Categories;