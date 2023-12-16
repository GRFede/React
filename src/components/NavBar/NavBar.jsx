import React from 'react'
import logo from '../../Img/logo-GR.png'
import './navBar.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import CardWidget from './CardWidget/CardWidget'

const NavBar = () => {

  return (
    <nav className='navbar'>
      
      <a href="#" className='enlace'><img className='logo' src={logo} alt="" /><h1>GRShop</h1></a>
      <Menu>  
        <MenuButton as={Button} >
          Categoria
        </MenuButton>
        <MenuList>
          <MenuItem> Hogar</MenuItem>
          <MenuItem> Musica</MenuItem>
          <MenuItem> Deporte</MenuItem>
        </MenuList>
      </Menu>
      <CardWidget/>    
    </nav>
  )
}

export default NavBar