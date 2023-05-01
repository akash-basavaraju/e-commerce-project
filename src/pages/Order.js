import React, { useState } from "react";
import Service from "../shared/service";

export default function Login({ usePage, useCartProducts }) {
  const [products] = useState(() => Service.getProducts());

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Your Cart
      </div>
      {products
        .filter(({ id }) => {
          return useCartProducts[0].includes(id);
        })
        .map(({ id, productImg, productName, productSubject }) => {
          return (
            <div
              style={{
                margin: "20px 100px",
                cursor: "pointer",
                display: "flex",
              }}
              onClick={() => {
                useCartProducts[1]([...useCartProducts[0], id]);
              }}
            >
              <img src={productImg} alt="product_img" width="100" />
              <div style={{ margin: "13px", marginLeft: "25px" }}>
                <div>{productName}</div>
                <div>{productSubject}</div>
              </div>
            </div>
          );
        })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
        }}
      >
        <button
          onClick={() => {
            useCartProducts[1]([]);
          }}
        >
          Clear Cart
        </button>
        <button>Pay & Order</button>
      </div>
    </div>
  );
}
