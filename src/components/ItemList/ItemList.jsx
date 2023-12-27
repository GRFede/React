import React from 'react'
import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemList = ({ producto }) => {
  return (
    <>
        <div>
          { producto.map ((p) => {
                return(
                    <Item
                    key={p.id}
                    titulo={p.titulo}
                    />)})}
        </div>
        <div>
          { producto.map ((q) => {
                return(
                  <ItemDetail
                    key={q.id}
                    titulo={q.titulo}
                    descripcion={q.descripcion}
                    precio={q.precio}
                    />
                )
            })
          } 
        </div>
    </>
  )
}

export default ItemList