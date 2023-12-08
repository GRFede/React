import React from 'react'
import CardWidget from './CardWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  //Flex,
  //Spacer,
} from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div>
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
      
      <CardWidget>

      </CardWidget>

    </div>
  )
}

export default NavBar