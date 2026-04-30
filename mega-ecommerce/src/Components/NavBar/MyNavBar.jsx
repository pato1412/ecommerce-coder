import { Container, Nav, Navbar } from 'react-bootstrap'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'
import { useCategory } from '../../Contexts/CategoryContext'

const MyNavBar = () => {
  const {categories } = useCategory();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="/logo.png" alt="Mega E-commerce" style={{ width: '100px', height: 'auto' }} />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {( categories.map((category) => (
              <Nav.Link to={`/category/${category.categoryName}`} key={category.id} as={Link} >
                  {category.categoryName}
              </Nav.Link>
            ))) } 
          </Nav>
          <Nav className="ml-auto"> 
            <CardWidget />            
          </Nav>
        </Container>
      </Navbar>    
    </>
  )
}

export default MyNavBar