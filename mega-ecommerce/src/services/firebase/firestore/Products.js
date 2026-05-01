
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import {db} from '../index'


export const getProducts = () => {
    const productsCollection = collection(db, "products");
    const productsQuery = query(productsCollection, orderBy("name", "asc"));

    return getDocs(productsQuery)
        .then((querySnapshot)=>{
            const ProductsAdapted = querySnapshot.docs.map((doc)=>{
                return ProductAdapterFromFirebase(doc)
            })
            return ProductsAdapted;
        })
        .catch((error)=>{
            return error
        })
};

export const getProductsByCategory = (categoryId) => {
    const productsCollection = query(collection(db, "products"), where("category", "==", categoryId))

    return getDocs(productsCollection)
        .then((querySnapshot)=>{
            const productAdapted = querySnapshot.docs.map((doc)=>{
                return ProductAdapterFromFirebase(doc)
            })
            return productAdapted;
        })
        .catch((error)=>{
            return error
        })
};
export const getProductById = (itemId)=>{
    const productDoc = doc(db, "products", itemId)

    return getDoc(productDoc)
    .then((queryDocumentSnapshot)=>{
        const productAdapted = ProductAdapterFromFirebase(queryDocumentSnapshot);
        return productAdapted
    })
    .catch((error)=>{
        return error
    })
}


export const ProductAdapterFromFirebase = ( doc ) => {
    const data = doc.data()

    return {
        id: doc.id,
        name: data.name,
        category: data.category,
        img: data.img,
        price: data.price,
        stock: data.stock,
        description: data.description
    }
}
