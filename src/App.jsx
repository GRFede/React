
import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { Box } from '@chakra-ui/react'

const App = () => {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
    <Box bg='tomato' w='100%' p={4} color='white'>
    This is the Box
    </Box>
    </div>
  )
}

export default App