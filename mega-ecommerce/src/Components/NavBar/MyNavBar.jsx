import { Container, Nav, Navbar } from 'react-bootstrap'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'
const MyNavBar = () => {
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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