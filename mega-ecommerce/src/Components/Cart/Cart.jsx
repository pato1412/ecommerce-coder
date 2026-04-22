import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Contexts/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { Cart } = useCart();
    const total = Cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    console.log(total)

    if(Cart.length === 0){
        return <h1>No hay items en el carrito</h1>
    }
  return (
    <div>
      {Cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3 style={{ textAlign: "center" }}>Total: $ {total}</h3>
      <div className="d-flex justify-content-center ">
        <button className="btn btn-warning">Limpiar Carrito</button>
        <Link to="/checkout" className="btn btn-info">
          Checkout
        </Link>
      </div>
    </div>
  );

}

export default Cart