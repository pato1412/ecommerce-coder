import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

const CartContext = createContext()


export function CartProvider({children}) {
    const [products, setProducts] = useState([])
    const [categoryId, setCategory] = useState(null)

    const addProducto = (product) => {
        setProducts([...products, product])
    }

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const handleSelectProduct = (product) => {
        console.log("Producto seleccionado", product)
    }

    const value = {
        products,
        setProducts,
        addProducto,
        removeProduct,
        handleSelectProduct,
        categoryId,
        setCategory            
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

