import React from "react";
import { PRODUCT_LIST } from "../PRODUCT_LIST";
import { useState } from "react";
import { Product } from "./Product";

export function ProductList() {
  const [productlist, setProductlist] = useState(PRODUCT_LIST);
  return (
    <section className="py-5">
      <div className="container">
        <div className="row row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productlist.map((item, index) => (
            <Product productitem={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
