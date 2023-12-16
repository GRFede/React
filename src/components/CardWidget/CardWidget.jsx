import card from '../../img/carrito.png'
import './cardWidget.css'
import { useState } from 'react'

const CardWidget = () => {
  const [contador, setContador] = useState (0)
  return (
     <div className='carro'>
       <a href="#"><img className='logocard' src={card} alt="imagen del carrito" /></a>
       <h1>{contador}</h1>
       <button onClick={() => setContador (contador + 1)}>+</button>
       <button onClick={() => setContador (contador - 1)}>-</button>
       </div>
   ) 
 }

export default CardWidget