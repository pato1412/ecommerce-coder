import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './Components/Layout/NavBar/MyNavBar';
import { Container } from 'react-bootstrap';
import ItemListContainer from './Components/products/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext';
import ItemDetailContainer from './Components/products/ItemDetailContainer/ItemDetailContainer';
import NotFound from './Components/Pages/NotFound/NotFound';
import { CategoryProvider, useCategory } from './Contexts/CategoryContext';
import { use, useEffect } from 'react';
import Footer from './Components/Layout/Footer/Footer';
import Checkout from './Components/Pages/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <CategoryProvider >
            <MyNavBar />
            <Container className='main-container mt-3 mb-3' style={{ minHeight: '70vh' }}>
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
            <Footer />
          </CategoryProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
