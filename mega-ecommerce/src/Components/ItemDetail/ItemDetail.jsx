import { Image, Row, Col, Badge } from "react-bootstrap"
import { useCart } from "../../Contexts/CartContext"
import "./ItemDetail.css"

function ItemDetail({ product }) {
  if (!product) {
    return null
  }

  const inStock = product.stock > 0
  const priceLabel = `$${product.price}`
  const { addProduct } = useCart()

  const handleAdd = (item) => {
    //console.log("Agregando al carrito", item)
    alert(`Agregando al carrito: ${item.name}`) 
    addProduct(item)
  }

  return (
    <Row className="mb-4">
      <Col xs={12} md={6}>
        <Image src={product.img} alt={product.name} loading="lazy" thumbnail fluid />
      </Col>
      <Col xs={12} md={6}>
        <div className="item-detail-container">
          <div className="category-container">
            <h5 className="text-muted"  >{product.category}</h5>
          </div>
          <h1 className="mb-4">{product.name}</h1>
          <p>{product.description}</p> 
          <h3 className="text-success mb-4">${product.price.toFixed(2)}</h3>
          <p style={{fontSize:"1.3rem"}} className={` ${inStock ? "" : "text-danger"}`}>
            <Badge bg="secondary">{inStock ? `Stock: ${product.stock}` : "Sin stock"}</Badge>
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" disabled={!inStock} onClick={() => handleAdd(product)}>
              {inStock ? "Agregar al carrito" : "No disponible"}
            </button>
          </div>     
        </div>
      </Col>
    </Row>
  )
}

export default ItemDetail
