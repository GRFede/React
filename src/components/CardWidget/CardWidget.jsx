import card from '../../img/carrito.png'
import './cardWidget.css'

const CardWidget = () => {
  return (
     <div className='carro'>
       <a href="#"><img className='logocard' src={card} alt="imagen del carrito" />0</a>
       
       </div>
   ) 
 }

export default CardWidget