import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { CartProvider } from "./pages/shop/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <MainPage />
      </CartProvider>
    </div>
  );
}

export default App;
