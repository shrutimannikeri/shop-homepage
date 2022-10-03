import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Badge,
} from "react-bootstrap";
import { createContext, useState } from "react";
import { Header } from "./components/Header";
import { Navbars } from "./components/Navbars";
import { ProductList } from "./components/ProductList";
export const productCtx = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <productCtx.Provider value={[cart, setCart]}>
        <Shophome />
      </productCtx.Provider>
    </div>
  );
}
function Shophome() {
  return (
    <div>
      <Navbars />
      <Header />
      <ProductList />
    </div>
  );
}
export default App;
