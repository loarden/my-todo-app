import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import { useState } from 'react';

function NavigatonBar({ onAddNew }) {
  const [value, setValue] = useState('')

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const handleAddNew = () => {
    if (value.length === 0) {
      return
    }
    onAddNew(value)
    setValue('')
  }

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-3 mt-2 sticky">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography
          variant="h6"
          className="mr-4 ml-2 py-1.5 hidden md:block"
        >
          Todo App
        </Typography>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            value={value}
            onChange={changeHandler}
            type="text"
            color="purple"
            label="Add new category..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button color="purple" onClick={handleAddNew} size="sm" className="!absolute right-1 top-1 rounded">
            AddNew
          </Button>
        </div>
      </div>
    </Navbar>
  )
}

export default NavigatonBar