import React, { use, useEffect, useState } from 'react'
import { getProductoById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer({ }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const productId = useParams().productId

  useEffect(() => {
    setLoading(true)
    getProductoById(productId)
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
    <section>
      {loading ? (
        <div className='status'>Cargando producto...</div>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <div className='status'>Producto no encontrado</div>
      )}
    </section>
  )
}

export default ItemDetailContainer
