import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './Components/NavBar/MyNavBar';
import { Container } from 'react-bootstrap';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

  const handleSelectProduct = (product) => {
    console.log("Producto seleccionado", product)
  }

  return (
    <>
      <MyNavBar />
      <Container>
        <ItemListContainer greetings='Listado de productos' onSelectProduct={handleSelectProduct} />
      </Container>
    </>
  )
}

export default App
