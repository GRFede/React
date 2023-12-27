import React from 'react'
import "./itemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

const productos = [
  { id: 1, titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000 },
  { id: 2, titulo: "Producto B", descripcion: "descripcion de producto B", precio: 2000 },
  { id: 3, titulo: "Producto C", descripcion: "descripcion de producto C", precio: 3000 }
]
//Promesa que en 3seg se muestran los productos
const mostrarproductos= new Promise((resolve, reject) => {

  if(productos.length > 0) {
    setTimeout(() => {
      resolve(productos)}, 3000)
  } else {
    reject("No se obtuvieron productos")
  }
})

mostrarproductos
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })


  return (
    <div className="item">
      <ItemList producto={productos}/>
      
    </div>
  )
}


export default ItemListContainer