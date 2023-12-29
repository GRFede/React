import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio/Inicio'
import CardWidget from './Components/CardWidget/CardWidget'


const App = () => {
  return (
    <BrowserRouter>
    
    <NavBar/>

    <Routes>

    <Route path= '/' element ={<Inicio/>}/>

    <Route path= '/cart' element ={<CardWidget/>}/>

    <Route exact path= '/categorias/:categoriaId' element ={<ItemListContainer/>}/>

    <Route exact path= '/producto/:id' element ={<ItemDetailContainer/>}/>
    

    </Routes>
    </BrowserRouter>
  )
}

export default App