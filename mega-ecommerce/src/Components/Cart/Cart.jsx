import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../Contexts/CartContext'
import CartItem from '../CartItem/CartItem'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';

const CartBar = ({show, handleClose}) => {      
    const { Cart, clearCart } = useCart();
    const total = Cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const navigate = useNavigate()    

    const handleFinalizar = () => {
      navigate("/checkout");
      handleClose()
    }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}  placement="end">
        {(Cart.length === 0) ? (
          <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>No hay items en el carrito</Offcanvas.Title>
          </Offcanvas.Header>
          </>
        ) : (
          <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {Cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <h3 style={{ textAlign: "center" }}>Total: $ {total}</h3>
            <div className="d-flex justify-content-center ">
              <Button variant="outline-secondary" onClick={clearCart} className="me-3"  >
                Limpiar Carrito
              </Button>
              <Button variant="outline-primary" onClick={handleFinalizar} >
                Finalizar Compra
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
        </>
      )}
      </Offcanvas>
    </>
  );

}

export default CartBar