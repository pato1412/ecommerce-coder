import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({
  greetings = "Explorar productos",
  categoryId = null,
  onSelectProduct
}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    setLoading(true)
    const asyncFunction = categoryId ? getProductsByCategory :  getProducts
    asyncFunction(categoryId)  
    .then((res)=>{
        console.log(res)
        setProducts(res)
      })
      .catch((err)=>{
        console.log("Error al obtener los productos", err)
      })
      .finally(()=>{
        setLoading(false)
        console.log("fin de la peticion")
      })
  },[categoryId])


  return (
    <section className='catalog'>
      <header className='catalog__header'>
        <h2>{greetings}</h2>
      </header>
      {loading 
        ? (
          <div className='status'>Cargando productos....</div>)
        : products.length === 0 ? (
          <div className='status'>No hay productos disponibles </div>
        ) : (
          <ItemList products={products} onSelectProduct={onSelectProduct} />
        )
      }


    </section>
  )
}

export default ItemListContainer
