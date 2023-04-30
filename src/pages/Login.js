import React from "react";

export default function Login({ usePage }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <div>
        <div style={{ margin: "10px" }}>
          username: <input />
        </div>
        <div style={{ margin: "10px" }}>
          password: <input />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button>Submit</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
