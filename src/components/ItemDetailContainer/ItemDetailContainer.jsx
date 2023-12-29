import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams()

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

 const productoFiltrado = productos.find((producto) => producto.id == id)
 
  return (
    <div>
        <ItemDetail
        product= {productoFiltrado}
        />
    </div>
  )
}

export default ItemDetailContainer