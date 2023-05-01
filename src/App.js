import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import Order from "./pages/Order";
import Header from "./shared/components/header";
import { PAGES } from "./shared/constants";

function App() {
  const usePage = useState(PAGES.LOGIN);
  const useCartProducts = useState([]);
  const useUserAuth = useState();

  console.log(usePage[0]);
  const getPageToRender = () => {
    switch (usePage[0]) {
      case PAGES.LOGIN: {
        return <Login usePage={usePage} useUserAuth={useUserAuth} />;
      }
      case PAGES.BROWSE: {
        return <Browse usePage={usePage} useCartProducts={useCartProducts} />;
      }
      case PAGES.ORDER: {
        return <Order usePage={usePage} useCartProducts={useCartProducts} />;
      }
      default: {
        return <div>No Page Selected</div>;
      }
    }
  };

  return (
    <div className="App">
      <Header
        usePage={usePage}
        useCartProducts={useCartProducts}
        useUserAuth={useUserAuth}
      />
      <div style={{ padding: "10px" }}>{getPageToRender()}</div>
    </div>
  );
}

export default App;
