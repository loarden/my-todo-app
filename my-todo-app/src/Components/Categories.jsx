import { Card, CardBody, Typography, Input, List, IconButton } from "@material-tailwind/react"
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { cloneElement, useState } from "react";
import Todo from "./Todo";


function Categories({ categoryIndex, title, todos, onAddTodo, onDoneTodo, onDeleteTodo, onDeleteCategory }) {
  const [todoInput, setTodoInput] = useState('')

  return (
    <Card className="max-w-sm w-11/12">
      <CardBody className="flex flex-col">
        <div className="flex justify-between">
          <Typography variant='h5' className='border-b-1'>
            {title}
          </Typography>
          <ClearIcon className="cursor-pointer" onClick={() => onDeleteCategory(categoryIndex)} />
        </div>
        <div className="w-full py-2 border-b-2 border-gray-400 relative">
          <Input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} color="purple" label="Add new todo" />
          <IconButton color="purple" onClick={() => {
            onAddTodo(todoInput)
            setTodoInput('')
          }} variant="text" className="!absolute right-0 top-2">
            <AddIcon/>
          </IconButton>
        </div>
        <List className="mt-4 p-0 w-full">
          {todos.map((todo, index) => cloneElement(<Todo
            key={index}
            todoIndex={index}
            title={todo.text}
            isDone={todo.isDone}
            onDoneTodo={(todoIndex) => onDoneTodo(categoryIndex, todoIndex)}
            onDeleteTodo={(todoIndex) => onDeleteTodo(categoryIndex, todoIndex)}
          />
          ))}
        </List>
      </CardBody>
    </Card>
  )
}

export default Categories