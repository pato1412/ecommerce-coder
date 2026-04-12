import { Card, Button } from "react-bootstrap"

function Item({ product, onSelect }) {
  const inStock = product.stock > 0

  return (
    <Card className="text-center" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} alt={product.name} loading="lazy" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
        <Card.Text>Precio: ${product.price.toFixed(2)}</Card.Text>
        <Card.Text>Stock: {inStock ? `Stock: ${product.stock}` : "Sin stock"}</Card.Text>
        <Button variant="primary" onClick={() => onSelect && onSelect(product.id)} >Ver detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default Item
