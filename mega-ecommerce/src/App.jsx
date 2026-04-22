import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './Components/NavBar/MyNavBar';
import { Container } from 'react-bootstrap';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <MyNavBar />
            <Container>
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
                <Route exact path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
