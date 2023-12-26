import React from 'react'
import "./itemListContainer.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div className="item">
        <p>{greeting}</p>
    </div>
  )
}


export default ItemListContainer