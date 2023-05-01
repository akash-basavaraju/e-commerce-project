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
        Available Products
      </div>
      {products.map(({ id, productImg, productName, productSubject }) => {
        return (
          <div
            style={{
              margin: "20px",
              cursor: "pointer",
              display: "flex",
            }}
            onClick={() => {
              const index = useCartProducts[0].findIndex(
                ({ id: fId }) => fId === id
              );
              if (index === -1) {
                useCartProducts[1]([...useCartProducts[0], id]);
              }
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
    </div>
  );
}
