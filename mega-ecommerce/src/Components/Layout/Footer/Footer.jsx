import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="mt-3">
          <Col className="text-center">
            <p>Sitio desarrollado con React JS por Pablo David Benitez a través del curso de CoderHouse</p>
          </Col>
        </Row>
        <Row className="">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} CoderHouse</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer