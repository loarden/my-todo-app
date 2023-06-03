import { Container } from "@mui/material"
import "./App.css"
import Categories from "./Components/Categories"
import Navbar from "./Components/Navbar"
import { useState } from "react"

function App() {
  const [categories, setCategories] = useState([])

  const handlewAddNew = (response) => {
    setCategories([...categories, ...response])
  }

  return (
    <>
      <Navbar
        onAddNew={handlewAddNew}
      />
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '3em', 
          marginTop: '2em' 
        }}>
        {categories ? [...categories].reverse().map((categorie, index) => {
          return (
            <Categories
              key={index}
              title={categorie.title}
            />
          )
        }) : ''}
      </Container>
    </>
  )
}

export default App
