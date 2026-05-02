import { Image, Row, Col, Badge } from "react-bootstrap"
import { useCart } from "../../../Contexts/CartContext"
import "./ItemDetail.css"
import { useState } from "react"
import { Alert } from "react-bootstrap"

function ItemDetail({ product }) {
  if (!product) {
    return null
  }

  const [show, setShow] = useState(false);
  const inStock = product.stock > 0
  const priceLabel = `$${product.price}`
  const { addProduct } = useCart()

  const handleAdd = (item) => {
    setShow(true); 
    addProduct(item)
    setTimeout(() => {
      setShow(false);
    }, 4000);
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
        {show && (
          <Alert className="mt-3" variant="success" onClose={() => setShow(false)} dismissible>
            Producto agregado al carrito
          </Alert>
        )}
      </Col>
    </Row>
  )
}

export default ItemDetail
