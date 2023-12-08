
import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { Box } from '@chakra-ui/react'

const App = () => {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
    </div>
  )
}

export default App