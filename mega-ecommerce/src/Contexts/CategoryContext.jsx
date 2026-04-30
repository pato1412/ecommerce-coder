import { createContext, useContext, useState, useEffect } from "react";

const CategoryContext = createContext()

export function CategoryProvider({children}) {
    const [categoryId, setCategory] = useState(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {
    }, []);

    const value = {
        categoryId,
        setCategory,
        categories,
        setCategories
    }

    return (
      <CategoryContext.Provider value={value}>
        {children}
      </CategoryContext.Provider>
    );
}

export function useCategory() {
    return useContext(CategoryContext)
}

