import { ListItem, Typography } from "@material-tailwind/react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';

function Todo({ todoIndex, title, isDone, onDoneTodo, onDeleteTodo }) {
  return (
    <ListItem className="flex justify-between hover:bg-deep-purple-100">
      {isDone ?
        <Typography className='line-through'>
          {title}
        </Typography>
        :
        <Typography>
          {title}
        </Typography>
      }
      <div>
        <DoneIcon onClick={() => onDoneTodo(todoIndex)} />
        <DeleteForeverIcon onClick={() => onDeleteTodo(todoIndex)}/>
      </div>
    </ListItem>
  )
}

export default Todo