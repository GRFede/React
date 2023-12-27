import React, { useEffect, useState } from 'react'
import DataPresentaciones from './DataPresentaciones'

const DataContainer = () => {
//Logica: siempre se escribe antes del return

const getproductos = async () => {
    const response = await fetch (`https://fakestoreapi.com/products`)
    const data = await response.json()
    return data

  }

const [productos, setproductos] = useState ([])

console.log(productos)

useEffect(() => {
    getproductos().then((product) => setproductos(product))
}, [])

  return (
    <div>
        {
            productos.map((p)=>{
                return(
                    <DataPresentaciones
                    key={p.id}
                    titulo={p.title}
                    descripcion={p.description}
                    precio={p.price}
                    />
                )
            })
        }
    </div>
  )
}

export default DataContainer