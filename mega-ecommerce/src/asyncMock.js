const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celular",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "samsung s21",
    price: 800,
    category: "celular",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "4",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "5",
    name: "iphone 14",
    price: 1300,
    category: "celular",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 12,
    description: "Descripcion de Iphone 14",
  },
  {
    id: "6",
    name: "xiaomi redmi note 12",
    price: 520,
    category: "celular",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 20,
    description: "Descripcion de Xiaomi Redmi Note 12",
  },
  {
    id: "7",
    name: "motorola edge 30",
    price: 640,
    category: "celular",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 8,
    description: "Descripcion de Motorola Edge 30",
  },
  {
    id: "8",
    name: "ipad 10a generacion",
    price: 1100,
    category: "tablet",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 9,
    description: "Descripcion de iPad 10a generacion",
  },
  {
    id: "9",
    name: "samsung galaxy tab s8",
    price: 1150,
    category: "tablet",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 6,
    description: "Descripcion de Galaxy Tab S8",
  },
  {
    id: "10",
    name: "lenovo yoga 7",
    price: 1450,
    category: "computer",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 5,
    description: "Descripcion de Lenovo Yoga 7",
  },
  {
    id: "11",
    name: "macbook air m2",
    price: 1700,
    category: "computer",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 4,
    description: "Descripcion de MacBook Air M2",
  },
  {
    id: "12",
    name: "dell inspiron 15",
    price: 980,
    category: "computer",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 10,
    description: "Descripcion de Dell Inspiron 15",
  },
  {
    id: "13",
    name: "samsung galaxy a54",
    price: 620,
    category: "celular",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 18,
    description: "Descripcion de Galaxy A54",
  },
  {
    id: "14",
    name: "ipad mini 6",
    price: 900,
    category: "tablet",
    img: "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large_2x.jpg",
    stock: 7,
    description: "Descripcion de iPad Mini 6",
  },
];


export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === categoryId))
        }, 2000)
    })
}

export const getProductoById = (productId) => {
    return new Promise((resolve)=> {
        setTimeout( () => {
            resolve(products.find((prod)=> prod.id === productId))
        }, 2000)
    })
}
