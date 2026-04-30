import React, { use, useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useCart } from '../../Contexts/CartContext'
import { useParams } from 'react-router-dom'
import { useCategory } from '../../Contexts/CategoryContext'
import { getCategories } from '../../services/firebase/firestore/Categories'
import Loader from '../Loader/Loader'

function ItemListContainer() {
    const [loading, setLoading] = useState(true)
    const [MessageLoading, setMessageLoading] = useState('')
    const [products, setProducts] = useState([])
    const {Cart, setCart} = useCart();
    const {categoryId, setCategory, setCategories} = useCategory();
    const paramsCategoryId = useParams().categoryId;

    useEffect(()=>{
      getCategories()
        .then((res)=>{
            //Obtengo el listado de categorías desde Firebase y lo guardo en el contexto para que esté disponible en toda la aplicación
            console.log("Categorías obtenidas desde Firebase:", res);
            setCategories(res);
        })
        .catch((err)=>{
            console.log("Error al obtener las categorías", err);
        });
    }, []);

    useEffect(()=>{
        setLoading(true)
        setMessageLoading('Cargando productos...')
        // Obtener el categoryId de los parámetros de la URL     
        if (paramsCategoryId) {
            console.log("Category ID desde URL:", paramsCategoryId);
            setCategory(paramsCategoryId)
        }else{
            // Si no hay categoryId en la URL, se resetea el estado de categoría en el contexto
            setCategory(null)
        }

        const asyncFunction = paramsCategoryId ? getProductsByCategory :  getProducts
        asyncFunction(paramsCategoryId)  
        .then((res)=>{
            setProducts(res)
        })
        .catch((err)=>{
            console.log("Error al obtener los productos", err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[paramsCategoryId])

    return (
    <section className='catalog'>
      <header className='catalog__header'>
        <h2>{(categoryId) ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      </header>
      {loading 
        ? (
          <Loader visible={loading} message={MessageLoading} />
        ) : products.length === 0 ? (
          <h4 className='status'>No hay productos disponibles </h4>
        ) : (
          <ItemList products={products} />
        )
      }
    </section>
  )
}

export default ItemListContainer
