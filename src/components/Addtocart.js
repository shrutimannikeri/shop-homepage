import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  Button
} from "react-bootstrap";
import { useState, useContext } from "react";
import { productCtx } from "../App";


export function Addtocart() {
  const [cart, setCart] = useContext(productCtx);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const removeItem = (id) => {

    setCart([...cart.filter((el) => el.id !== id)]);
  };
  return (
    <div className="d-flex">
      <Button
        className="btn btn-outline-dark addcart "
        onClick={cart.length > 0 ? handleShow : null}
      >
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
          {cart.length === 0 ? (
            <h3>Your Shoping cart is empty</h3>
          ) : (
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
                {cart.map((item, ind) => (
                  <tr key={ind}>
                    <td className="w-25">
                      <img src={item.image} alt="not loaded" />
                    </td>
                    <td className="detail-item">
                      <p className="titlename">{item.name}</p>
                      <p className="prices">
                        <label>Price : </label>
                        $ {item.discount > 0 ? Math.round(
                          item.price * (1 - item.discount / 100)
                        ) : item.price}
                      </p>
                      <p className="qty">
                        <label>Quantity : </label>
                        {item.quantityInCart}
                      </p>
                    </td>

                    <td>
                      <Button
                        className="btn btn-outline-dark removeitem"
                        onClick={() => removeItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="d-flex justify-content-end">
            <h5>
              Total:{" "}
              <span className="price text-success">
                $
                {cart.reduce((prev, curr) => {
                  const disprice = Math.round(
                    Number(curr.price) * (1 - Number(curr.discount) / 100)
                  );
                  return Number(prev) + (curr.discount > 0 ? disprice : Number(curr.price));
                }, 0)}
              </span>
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
