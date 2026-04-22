import React from 'react'
import { Nav } from 'react-bootstrap'
import { useCart } from '../../Contexts/CartContext'
import { PiShoppingCart } from "react-icons/pi";


const CardWidget = () => {
  const { products } = useCart()  
  return (
    <Nav.Link href="#cart"><PiShoppingCart /> Carrito ({products.length})</Nav.Link>
  )
}

export default CardWidget