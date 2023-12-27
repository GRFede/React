import { React, useState } from 'react'
import { Alert, Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState (0)

    const mostrarMensaje = () => { 
      Alert (`Se agregaron al carrito ${contador} unidades`)}

    const Sumar = () => {
      if(contador < 10){
        setContador (contador + 1)
      }
    }
    const Restar = () => {
      if(contador > 0){
        setContador (contador - 1)
      }
    }
    
  return (
  
    <div>
        <Button colorScheme='teal'  onClick={Sumar}>
          +
        </Button>
        <Button onClick={mostrarMensaje}>
          Agregar al carrito {contador}
        </Button>
        <Button colorScheme='teal'  onClick={Restar}>
          -
        </Button>
    </div>
  )
}

export default ItemCount