import React, { useEffect, useState } from "react";
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
        Available Products
      </div>
      {products.map(({ id, image, name, description }) => {
        return (
          <div
            style={{
              margin: "20px",
              cursor: "pointer",
              display: "flex",
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "10px",
            }}
            onClick={() => {
              const index = useCartProducts[0].findIndex((fId) => fId === id);
              if (index === -1) {
                useCartProducts[1]([...useCartProducts[0], id]);
              }
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
    </div>
  );
}
