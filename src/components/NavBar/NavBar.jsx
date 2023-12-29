import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import logo from '../../Img/logo-GR.png'
import "./navBar.css"
import {Menu,MenuButton,MenuList,MenuItem,Button,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (

    <nav className='navbar'>

        <a href="/" className='enlace'><img className='logo' src={logo} alt="" /><h1>GRShop</h1></a>
        <Link to={"/"}>
        <p>Este es el incio de mi negocio</p>
        </Link>
        <Menu>  
        <MenuButton as={Button} >
        Categorias
        </MenuButton>
        <MenuList> 
        <Link to = {"/categorias/A"}>
        <MenuItem> Categoria A </MenuItem>
        </Link>
        <Link to = {"/categorias/B"}>
        <MenuItem> Categorias B</MenuItem>
        </Link>
        <Link to = {"/categorias/C"}> 
        <MenuItem> Categorias C</MenuItem>
        </Link>
        </MenuList>
        </Menu> 
        <Link to = {"/cart"}> 
        <CardWidget/>
        </Link>


    </nav>
  )
}

export default NavBar