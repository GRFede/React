import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio/Inicio'


const App = () => {
  return (
    <BrowserRouter>
    
    <NavBar/>

    <Routes>

    <Route exact path= '/' element ={<Inicio/>}/>
    <Route exact path= '/productos' element ={<ItemListContainer/>}/>
    <Route exact path= '/Detallesdeproductos' element ={<ItemDetailContainer/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App