import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./componentes/Navbar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './app.css'

const App = () => {
  return (
    <>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element ={<ItemListContainer/>}></Route>
          <Route path="/categoria/id:Categoria" element ={ItemListContainer}/>
          <Route path="/item/id:Item" element={ItemDetailContainer}/>
        </Routes>
        </BrowserRouter> 
        {

        }

    </>
  )
}

export default App