import { useCart } from '../../../Contexts/CartContext'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from '../../../services/firebase'

import { useRef, useState } from 'react'
import Loader from '../../Layout/Loader/Loader'
import { Alert, Button, Col, Form, FormGroup, Row } from 'react-bootstrap'

const Checkout = () => {
    const [loading, setLoading] = useState(false)    
    const [loadingMessage, setLoadingMessage] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const { Cart, getTotal, clearCart } = useCart();
    const refName = useRef();
    const refApellido = useRef();
    const refEmail = useRef();
    const refTelefono = useRef();

    const total = getTotal()

    const validarFormulario = () => {
        let errores = false;

        if (refName.current.value === ""){
            setErrorMessage("Por favor ingrese su nombre");
            errores = true;
        }

        if (refApellido.current.value === ""){
            setErrorMessage("Por favor ingrese su apellido");
            errores = true;
        }

        if (refEmail.current.value === ""){
            setErrorMessage("Por favor ingrese su email");
            errores = true;
        }

        if (refTelefono.current.value === ""){
            setErrorMessage("Por favor ingrese su telefono");
            errores = true;
        }

        if (errores){
            setError(true);
            return false;
        }else{
            return true;
        }
    }
 
    const createOrder = async () => {
        debugger;
        if (validarFormulario() === true){
            setLoading(true)
            setLoadingMessage("Generando orden...")
            try {
                const objOrder = {
                    buyer: {
                        firstName: refName.current.value,
                        lastName: refApellido.current.value,
                        phone: refTelefono.current.value,
                        email: refEmail.current.value
                    }, 
                    items: Cart,
                    total,
                    date: new Date()
                }

                const ids = Cart.map((item)=> item.id)

                const productRef = collection(db, "products");

                const productsAddedFromFirestore = await getDocs(
                    query(productRef, where(documentId(), "in", ids)))
                    
                    const { docs } = productsAddedFromFirestore;

                    const outOfStock = []
                    const batch = writeBatch(db)

                    docs.forEach((doc)=>{
                        const dataDoc = doc.data()
                        const stockDB = dataDoc.stock

                        const productAddedToCart = Cart.find((prod) => prod.id === doc.id)
                        const productQuantity = productAddedToCart?.quantity;

                        if(stockDB >= productQuantity){
                            batch.update(doc.ref, {stock: stockDB - productQuantity})
                        }else {
                            outOfStock.push({id: doc.id, ...dataDoc})
                        }
                    })

                    if(outOfStock.length === 0){
                        await batch.commit()

                        const orderRef = collection(db, "orders")
                        const orderAdded = await addDoc(orderRef, objOrder);
                        console.log(`El id de su orden es ${orderAdded.id}`);
                        // limpiar el carrito
                        
                        setOrderCreated(true)
                        clearCart()
                    }else {
                        // falta logica de compra o encargo de productos
                        console.log("Hay productos que estan fuera de stock")
                    }
            }catch(error){
                setErrorMessage(error.message);
                setError(true)
            }finally {
                setLoading(false)
            }
        }
    }

    if(orderCreated){
        return <h1>La orden fue creada correctamente</h1>
    }

    if (Cart.length === 0){
        return <h1>No hay items en el carrito</h1>
    }

  return (
    <>
      {loading && (
             <Loader visible={loading} message={loadingMessage} />
          )}
      <h1 className="text-center text-primary mb-3 ">Finalizar compra</h1>
      <Row className="">
        <Col md={6} className="">
          {/* formulario */}
          <h4 className='mb-3 text-success' >Ingrese sus datos</h4>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control ref={refName} id="txtName"  type="text" placeholder="" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control ref={refApellido}  type="text" placeholder="" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control ref={refEmail}  type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control ref={refTelefono}  type="text" placeholder="" />
          </Form.Group>
        </Col>   
        <Col md={6} className="">
            <h4 className='mb-3 text-success' >Detalle de su compra</h4>
            <table className="table table-striped" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {Cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>$ {item.price}</td>
                            <td>{item.quantity}</td>
                            <td>$ {item.price * item.quantity}</td>
                        </tr>
                    ))}    
                </tbody>
            </table>       
            <div className="d-flex justify-content-center p-3 mt-3" >
                <h2>Total: $ {total}</h2>
            </div>
      </Col>         
      </Row>
      {error && (
            <Row>
                <Col className='mb-3 mt-3' >
                    <Alert variant='warning' dismissible >{errorMessage}</Alert>
                </Col>
            </Row>
        )
      }
      <Row className="d-flex justify-content-center mt-3 mb-3">
        <Col md={12} className="d-flex justify-content-center">
            <Button variant="primary" onClick={createOrder}>
            Generar Orden
            </Button>
        </Col>   
      </Row>
      <div>
      </div>
    </>
  );
}

export default Checkout