import { Box, AppBar, Toolbar, Typography, InputBase, Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';


function Navbar({onAddNew}) {
  const [value, setValue] = useState('')

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: '40ch',
    },
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
      },
    },
  }));

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const handleAddNew = () => {
    if(value.length === 0) {
      return
    }
    onAddNew([{ title: value }])
  }

  return (
    <Box maxWidth='lg' sx={{ flexGrow: 1, margin: '0 auto' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MY TODO
          </Typography>
          <Search>
            <StyledInputBase
              type='text'
              onChange={changeHandler}
              value={value}
              placeholder="Add New Category"
            />
          </Search>
          <IconButton
            onClick={handleAddNew}
          >
            <AddIcon
              sx={{ color: 'white', width: '30px', height: '30px' }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar