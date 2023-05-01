import React, { useState } from "react";
import { PAGES } from "../shared/constants";
import service from "../shared/service";

export default function Login({ usePage, useUserAuth }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setRegister] = useState(false);

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
        {isRegister && (
          <>
            <div style={{ margin: "10px" }}>
              name:{" "}
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              Email:{" "}
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
              />
            </div>
          </>
        )}
        <div style={{ margin: "10px" }}>
          username:{" "}
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          password:{" "}
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button
            onClick={async () => {
              setRegister(false);
              try {
                await service.login({ username, password });
                // const index = users.findIndex(({ username: fUsername }) => {
                //   return username === fUsername;
                // });
                // if (index === -1) {
                //   alert("User does not exist");
                // } else if (users[index].password === password) {
                //   useUserAuth[1](true);
                //   usePage[1](PAGES.BROWSE);
                //   alert("Login Successfull");
                // } else {
                //   alert("Wrong password");
                // }
              } catch (err) {
                alert("Something went wrong in login!");
              }
              // useUserAuth[1](true);
              // usePage[1](PAGES.BROWSE);
            }}
          >
            Login
          </button>
          <button
            onClick={async () => {
              setRegister(true);
              if (
                username !== "" &&
                password !== "" &&
                name !== "" &&
                email !== ""
              ) {
                try {
                  await service.saveUser({ username, password });
                  setUsername("");
                  setPassword("");
                  alert("Registerd, Please login!");
                } catch (err) {
                  alert("Something went wrong in register!");
                }
              } else {
                alert("Enter name, email, user name and password.");
              }
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
