import React, { use, useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/firebase/firestore/Products'

function ItemDetailContainer({ }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const productId = useParams().productId

  useEffect(() => {
    setLoading(true)
    getProductById(productId)
      .then((res) => {
        setProduct(res || null)
      })
      .catch((err) => {
        console.log("Error al obtener el producto", err)
        setProduct(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  return (
    <div className='catalog mt-4'>
      {loading ? (
        <div className='status'>Cargando producto...</div>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <div className='status'>Producto no encontrado</div>
      )}
    </div>
  )
}

export default ItemDetailContainer
