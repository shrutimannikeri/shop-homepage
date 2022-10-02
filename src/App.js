import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar,faCartShopping,faTrash } from '@fortawesome/free-solid-svg-icons'
import {PRODUCT_LIST} from './PRODUCT_LIST'
import { Modal, Button, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import { createContext, useState, useContext } from "react";
import Navbar from 'react-bootstrap/Navbar'
const productCtx=createContext()


function App() {
  
  const [cart, setCart] = useState([])
  return (

    <div className="App">
      <productCtx.Provider value={[cart,setCart]}>
      <Shophome />
      </productCtx.Provider>
    </div>
  );
}
function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand>Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

        <Navbar.Collapse id="responsive-navbar-nav"  >
        
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#shop/3.1">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#shop/3.2">
                product list
              </NavDropdown.Item>
              <NavDropdown.Item href="#shop/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         <Nav>
           <Addtocart />
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}
function Header() {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
      </div>
    </header>
  );
}


function Shophome(){
  return(
    <div><Navbars />
    <Header />
    <ProductList />
    </div>
  )
}
function ProductList() {
  const [productlist, setProductlist] = useState(PRODUCT_LIST)
    return (
      <section className="py-5">
      <div className="container">
          <div className="row row-cols-md-3 row-cols-xl-4 justify-content-center"> 
          
        {productlist.map((item,index)=>(
          <Product productitem={item} key ={index}/>
        ))}
        </div>
        </div>
      </section>
    )
  }


function Product({productitem}){
  const [cart,setCart]=useContext(productCtx)
 
  const inCart=true

  const addTocart=(item)=>{
    item.inCart=inCart
    item.quantityInCart=1

setCart([...cart,item])
   console.log(cart)
     }
  return(
        <div className="col mb-5">
                <div className="card h-100">
                    
                    <div className="badge bg-dark text-white position-absolute sale-item">Sale</div>
                 
                    <img className="card-img-top" src={productitem.image} alt="..." />
                  
                    <div className="card-body p-4">
                        <div className="text-center">
                          
                            <h5 className="fw-bolder">{productitem.name}</h5>
                            
                            $  {productitem.price}
                        </div>
                    </div>
                   
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">{cart.find((el)=>{return el.id===productitem.id}) ?<span className="iteminCart">Item In Cart</span> :  <button className="btn btn-outline-dark mt-auto" onClick={()=>addTocart(productitem)}>Add to cart</button> }</div>
                    </div>
                </div>
            </div>
  )
}
export function Addtocart(){
  const [cart,setCart]=useContext(productCtx)
  const [show,setShow]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(cart)

const removeItem=(id)=>{
  console.log(id)

  setCart([...cart.filter((el => el.id !== id))])
}
  return(
    <div className="d-flex">
   
  
    <Button  className="btn btn-outline-dark addcart " onClick={cart.length>0 ? handleShow: null}>
    <FontAwesomeIcon icon={faCartShopping} />
        Cart  
  <span className="badge bg-dark text-white ms-1 rounded-pill">
    
  {cart.length}
  </span>
</Button>


 
<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title> Your Shopping Cart</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  {cart.length === 0 ?
  <h3>Your Shoping cart is empty</h3>
  :
  <table className="table table-image">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Qty</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,ind)=>(
               <tr key={ind}>
               <td className="w-25">
                 <img src={item.image}/>
                </td>
               <td className="detail-item"><p className="titlename">{item.name}</p>
               <p className="prices"><label>Price : </label>${item.price}</p>
               <p className="qty"><label>Quantity : </label>{item.quantityInCart}</p>
               </td>
               
               <td>
               <Button className="btn btn-outline-dark removeitem" onClick={()=>removeItem(item.id)}>
               <FontAwesomeIcon icon={faTrash} />
               </Button>
                 
               </td>
             </tr>
            ))}
           
          </tbody>
        </table>
         }
        <div className="d-flex justify-content-end">
          <h5>Total: <span className="price text-success">$
          {
            cart.reduce((prev,curr)=>{
              return Number(prev)+Number(curr.price)
              },0)

          }</span></h5>
        </div>
  </Modal.Body>
  <Modal.Footer>
   
  </Modal.Footer>
</Modal>

</div>
  )
}


export default App;
