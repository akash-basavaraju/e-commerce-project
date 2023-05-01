import React, { useState, useEffect } from "react";
import Service from "../shared/service";

export default function Login({ usePage, useCartProducts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await Service.getProducts());
    };

    getProducts();
  }, []);

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
        .map(({ id, image, name, description }) => {
          return (
            <div
              style={{
                margin: "20px 100px",
                display: "flex",
                border: "1px solid gray",
                borderRadius: "10px",
                padding: "10px",
              }}
              onClick={() => {
                useCartProducts[1]([...useCartProducts[0], id]);
              }}
            >
              <img src={image} alt="product_img" width="100" />
              <div style={{ margin: "13px", marginLeft: "25px" }}>
                <div>{name}</div>
                <div>{description}</div>
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
