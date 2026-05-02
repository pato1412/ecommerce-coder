import React from 'react'
import { Nav, Badge, Button } from 'react-bootstrap'
import { useCart } from '../../../Contexts/CartContext';
import { PiShoppingCart } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import CartBar from '../CartBar/CartBar';

const CartWidget = () => {
  const { Cart } = useCart()  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="position-relative">
        <PiShoppingCart size={24} />
        {Cart.length > 0 && (
          <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
            {Cart.length}
          </Badge>
        )}
      </Button>
      <CartBar show={show} handleClose={handleClose} />
    </>
  )
}

export default CartWidget