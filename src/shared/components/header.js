import React from "react";
import { PAGES } from "../constants";

export default function Header({ usePage, useCartProducts }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 0px",
        width: "100%",
        boxSizing: "border-box",
        justifyContent: "space-between",
        background: "#a6e1a6",
        alignItems: "center",
      }}
    >
      <div style={{ paddingLeft: "5px" }}>E Commerce App</div>
      <div style={{ display: "flex", color: "blue" }}>
        <div
          style={{ padding: "7px", cursor: "pointer" }}
          onClick={() => {
            usePage[1](PAGES.LOGIN);
          }}
        >
          Login/Register
        </div>
        <div
          style={{ padding: "7px", cursor: "pointer" }}
          onClick={() => {
            debugger;
            usePage[1](PAGES.BROWSE);
          }}
        >
          Browse Products
        </div>
        <div
          style={{ padding: "7px", cursor: "pointer" }}
          onClick={() => {
            usePage[1](PAGES.ORDER);
          }}
        >
          Cart({useCartProducts[0].length})
        </div>
      </div>
    </div>
  );
}
