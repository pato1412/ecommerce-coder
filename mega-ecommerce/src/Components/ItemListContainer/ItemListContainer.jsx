import React, { use, useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useCart } from '../../Contexts/CartContext'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {Cart, setCart,  categoryId, setCategory} = useCart();
    const params = useParams();


    useEffect(()=>{
        setLoading(true)

        // Obtener el categoryId de los parámetros de la URL     
        if (params.categoryId) {
            console.log("Category ID desde URL:", params.categoryId);
            setCategory(params.categoryId)
        }

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
        })
    },[categoryId])

    return (
    <section className='catalog'>
      <header className='catalog__header'>
        <h2>{(categoryId) ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      </header>
      {loading 
        ? (
          <div className='status'>Cargando productos....</div>)
        : products.length === 0 ? (
          <div className='status'>No hay productos disponibles </div>
        ) : (
          <ItemList products={products} />
        )
      }
    </section>
  )
}

export default ItemListContainer
