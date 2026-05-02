import { Col, Row } from "react-bootstrap"
import Item from "../Item/Item.jsx"

function ItemList({ products}) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4" >
      {products.map((product)=>(
        <Col key={product.id}>  
          <Item 
            product={product}
          />
        </Col>
      ))}
    </Row>
  )
}

export default ItemList
