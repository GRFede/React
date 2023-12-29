import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {
  return (
        <div>
          { productos.map ((product) => {
                return(
                    <Item
                    key={product.id}
                    titulo={product.titulo}
                    id={product.id}
                    />)})}
        </div>
  )
}

export default ItemList