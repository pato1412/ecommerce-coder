import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

const CartContext = createContext()


export function CartProvider({children}) {
    const [Cart, setCart] = useState(() => {
        try {
            const savedCart = Cookies.get('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Error loading cart from cookie:', error);
            return [];
        }
    })
    const [categoryId, setCategory] = useState(null)

    useEffect(() => {
        Cookies.set('cart', JSON.stringify(Cart));
    }, [Cart]);

    const addProduct = (product) => {
        /* 1. Verificar si el producto ya está en el carrito */
        if (Cart.some(item => item.id === product.id)) {
            setCart(Cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
            return
        }else { 
            setCart([...Cart, {...product, quantity: 1}])
        }
    }

    const removeProduct = (id) => {
        setCart(Cart.filter(product => product.id !== id))
    }

    const value = {
        Cart,
        setCart,
        addProduct,
        removeProduct,
        categoryId,
        setCategory            
    }

    const getTotal = () => {
        return Cart.reduce((total, product) => total + product.price * product.quantity, 0)
    }

    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext)
}

