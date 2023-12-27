import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import logo from '../../Img/logo-GR.png'
import "./navBar.css"
import {Menu,MenuButton,MenuList,MenuItem,Button,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (

    <nav className='navbar'>

        <a href="" className='enlace'><img className='logo' src={logo} alt="" /><h1>GRShop</h1></a>


        <Menu>  
        <MenuButton as={Button} >
        Categoria
        </MenuButton>
        <MenuList> 
        <Link to = {"/"}>
        <MenuItem> Inicio </MenuItem>
        </Link>
        <Link to = {"/productos"}>
        <MenuItem> Productos</MenuItem>
        </Link>
        <Link to = {"/Detallesdeproductos"}> 
        <MenuItem> Detalles de productos</MenuItem>
        </Link>
        </MenuList>
        </Menu> 

        <CardWidget/>


    </nav>
  )
}

export default NavBar