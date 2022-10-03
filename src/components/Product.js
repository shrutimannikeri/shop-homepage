import React from "react";
import { useContext } from "react";
import { productCtx } from "../App";
import { Rating } from "./Rating";
import { PriceDetail } from "./PriceDetail";

export function Product({ productitem }) {
  const [cart, setCart] = useContext(productCtx);

  const inCart = true;

  const addTocart = (item) => {
    item.inCart = inCart;
    item.quantityInCart = 1;

    setCart([...cart, item]);
    console.log(cart);
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute sale-item">
          Sale
        </div>

        <img className="card-img-top" src={productitem.image} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{productitem.name}</h5>{" "}
            <PriceDetail price={productitem.price} discount={productitem.discount} />
          </div>
          <Rating rating={productitem.rating} />
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {cart.find((el) => {
              return el.id === productitem.id;
            }) ? (
              <span className="iteminCart">Item In Cart</span>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => addTocart(productitem)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
