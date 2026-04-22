import { Card, Button } from "react-bootstrap"
import { useCart } from "../../Contexts/CartContext"
import { Link } from "react-router-dom";

function Item({ product}) {
  const inStock = product.stock > 0
 
  return (
    <Card className="text-center" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} alt={product.name} loading="lazy" thumbnail   />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
        <Card.Text>Precio: ${product.price.toFixed(2)}</Card.Text>
        <Card.Text>Stock: {inStock ? `Stock: ${product.stock}` : "Sin stock"}</Card.Text>
        <Link to={`/detail/${product.id}`} className="btn btn-secondary ms-2">Ver detalle</Link>
      </Card.Body>
    </Card>
  )
}

export default Item
