import React from 'react'
import { useCart } from "../../Contexts/CartContext"
import { Button, Col, Row } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({id, name, quantity, price, img}) => {
  const { removeProduct } = useCart();
  const handleRemove = (id) => {
    removeProduct(id)
  }
  return (
    <Row className="mb-3">
      <Col xs={12} md={6}>
        <img src={img} alt={name} className="img-fluid rounded" /> 
      </Col>
      <Col xs={12} md={6}>
        <h5 className="text-center1">{name}</h5>
        <section className="ContainerItemCartItem">
          <p className="ItemCartItem">Cantidad: {quantity}</p>
          <p className="ItemCartItem">Precio x unidad: $ {price}</p>
        </section>
        <p className="InfoCartItem">Subtotal: $ {price * quantity}</p>
        <Button variant="outline-danger" onClick={() => handleRemove(id)} className="mt-2">
          <FaTrash /> Eliminar
        </Button>
      </Col> 
    </Row>
  );
}


export default CartItem