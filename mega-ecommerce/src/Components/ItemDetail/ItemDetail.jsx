
function ItemDetail({ product }) {
  if (!product) {
    return null
  }

  const inStock = product.stock > 0
  const priceLabel = `$${product.price}`

  return (
    <section className='detail'>
      <div className='detail__media'>
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>
      <div className='detail__info'>
        <span className='detail__category'>{product.category}</span>
        <h2>{product.name}</h2>
        <p className='detail__price'>{priceLabel}</p>
        <p className={`detail__stock ${inStock ? "" : "is-empty"}`}>
          {inStock ? `Stock: ${product.stock}` : "Sin stock"}
        </p>
        <p className='detail__description'>{product.description}</p>
        <div className='detail__actions'>
          <button className='detail__cta' disabled={!inStock}>
            {inStock ? "Agregar al carrito" : "No disponible"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail
