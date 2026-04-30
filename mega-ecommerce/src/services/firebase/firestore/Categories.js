
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import {db} from '../index'


export const getCategories = () => {
    const categoriesCollection = collection(db, "categories");
    const categoriesQuery = query(categoriesCollection, orderBy("categoryId", "asc"));

    return getDocs(categoriesQuery)
        .then((querySnapshot)=>{
            const CategoriesAdapted = querySnapshot.docs.map((doc)=>{
                return CategoryAdapterFromFirebase(doc)
            })
            return CategoriesAdapted;
        })
        .catch((error)=>{
            return error
        })
};


export const CategoryAdapterFromFirebase = ( doc ) => {
    const data = doc.data()

    return {
        id: doc.id,
        categoryId: data.categoryId,
        categoryName: data.categoryName
    }
}
