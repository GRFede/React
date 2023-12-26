import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      
      <NavBar/>
      <ItemListContainer greeting={"Bievenidos a mi ecommer"}/>

    </div>
  )
}

export default App