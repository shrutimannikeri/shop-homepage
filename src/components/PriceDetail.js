import React from "react";


export function PriceDetail({ price, discount }) {

  const totalprice = Number(price);
  const discountedPrice = Math.round(
    totalprice * (1 - discount / 100)
  );
  return (
    <div className="price-container">
      {discount > 0 ? (
        <span className="price-discount"> $ {totalprice} </span>
      ) : null}
      <span className="price-price"> $ {discountedPrice} </span>

    </div>
  );
}
