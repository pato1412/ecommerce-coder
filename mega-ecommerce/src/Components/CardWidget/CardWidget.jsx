import React from 'react'
import { Nav } from 'react-bootstrap'
import { useCart } from '../../Contexts/CartContext'
import { PiShoppingCart } from "react-icons/pi";
import { Link } from 'react-router-dom'

const CardWidget = () => {
  const { Cart } = useCart()  
  return (
    <Link to="/cart">
        <PiShoppingCart /> Carrito ({Cart.length})
    </Link>
  )
}

export default CardWidget