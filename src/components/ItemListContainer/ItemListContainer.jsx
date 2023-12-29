import React from 'react'
import "./itemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

const {categoriaId} = useParams()

const productos = [
  { id: 1, titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000 , categoria: "A" },
  { id: 2, titulo: "Producto B", descripcion: "descripcion de producto B", precio: 2000 , categoria: "A" },
  { id: 3, titulo: "Producto C", descripcion: "descripcion de producto C", precio: 3000 , categoria: "A" },
  { id: 4, titulo: "Producto D", descripcion: "descripcion de producto D", precio: 4000 , categoria: "A" },
  { id: 5, titulo: "Producto F", descripcion: "descripcion de producto F", precio: 5000 , categoria: "B" },
  { id: 6, titulo: "Producto G", descripcion: "descripcion de producto G", precio: 6000 , categoria: "B" },
  { id: 7, titulo: "Producto H", descripcion: "descripcion de producto H", precio: 7000 , categoria: "B" },
  { id: 8, titulo: "Producto I", descripcion: "descripcion de producto I", precio: 8000 , categoria: "C" },
  { id: 9, titulo: "Producto J", descripcion: "descripcion de producto J", precio: 9000 , categoria: "C" },
  { id: 10, titulo: "Producto K", descripcion: "descripcion de producto K", precio: 10000 , categoria: "C" },
  { id: 11, titulo: "Producto L", descripcion: "descripcion de producto L", precio: 20000 , categoria: "C" },
  { id: 12, titulo: "Producto M", descripcion: "descripcion de producto M", precio: 30000 , categoria: "C" }
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


    const productosFiltrados = productos.filter((producto)=> producto.categoria == categoriaId)


  return (
    <div className="item">
      {
       // Esto es un ternario pero que no lo voy a utilizar porque la estructura de mi paguina la voy a configurar con una paguina inicial que quitaria el filtrtado.
       //categoriaId ? <ItemList productos={productosFiltrados}/> : <ItemList productos={productos}/>
      }
      <ItemList productos={productosFiltrados}/>
    </div>
  )
}


export default ItemListContainer