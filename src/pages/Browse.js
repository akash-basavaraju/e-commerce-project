import React from "react";
import ProductImg from "../static/product_img.png";

export default function Login({ usePage }) {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          cursor: "pointer",
          display: "flex",
        }}
      >
        <img src={ProductImg} alt="product_img" width="100" />
        <div style={{ margin: "13px", marginLeft: "25px" }}>
          <div>Product 1</div>
          <div>
            product subject, product subject, product subject, product subject.
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          cursor: "pointer",
          display: "flex",
        }}
      >
        <img src={ProductImg} alt="product_img" width="100" />
        <div style={{ margin: "13px", marginLeft: "25px" }}>
          <div>Product 1</div>
          <div>
            product subject, product subject, product subject, product subject.
          </div>
        </div>
      </div>
    </div>
  );
}
