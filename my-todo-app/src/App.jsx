import Categories from "./Components/Categories"
import NavigationBar from "./Components/NavigationBar"
import {  useCallback, useEffect, useState } from "react"

function App() {
  const [categories, setCategories] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('categories'))
    return storage || []
  })
  
  const handlewAddNew = (response) => {
    setCategories([...categories, ...[{title: response, todos: []}]])
  }

  const handleDone = (categoryIndex, todoIndex) => {
    const clone = structuredClone(categories)
    const isDone = clone[categoryIndex].todos[todoIndex].isDone
    clone[categoryIndex].todos[todoIndex].isDone = !isDone
    setCategories(clone)
  }

  const handleDelete = (categoryIndex, todoIndex) => {
    const clone = structuredClone(categories)
    clone[categoryIndex].todos.splice(todoIndex, 1)
    setCategories(clone)
  }

  const handleDeleteCategory = (categoryIndex) => {
    const clone = structuredClone(categories);
    clone.splice(categoryIndex, 1)
    setCategories(clone)
  }

  const handleAddTodo = (text, index) => {
    if(text.length === 0){
      return
    }
    const clone = structuredClone(categories);
    clone[index].todos.push({ text: text, isDone: false });
    setCategories(clone);
  }

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories))
  }, [categories])

  return (
    <>
      <NavigationBar
        onAddNew={handlewAddNew}
      />
      <div className="max-w-screen-xl my-4 mx-auto grid justify-items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 items-start">
        <>
          {categories ? categories.map((category, index) => <Categories
                key={index}
                categoryIndex={index}
                title={category.title}
                todos={category.todos}
                isDone={category.isDone}
                onAddTodo={(text) => handleAddTodo(text, index)}
                onDoneTodo={handleDone}
                onDeleteTodo={handleDelete}
                onDeleteCategory={handleDeleteCategory}
              />
            ) : ''}
        </>
      </div>
    </>
  )
}

export default App
