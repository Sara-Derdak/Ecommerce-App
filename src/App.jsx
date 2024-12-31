import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import "./App.css"; 
import Footer from "./Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  // Ajouter un produit ou augmenter sa quantité
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Diminuer la quantité ou retirer le produit
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  return (
    <Router>
      <header className="header">
        <Link to="/" className="logo">
          Shopstor
        </Link>
        <Link to="/cart" className="cartLink">
          Panier ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Link>
      </header>
      <Routes>
        {/* <Route
          path="/"
          element={<ProductsPage addToCart={addToCart} />}
        /> */}
        <Route
          path="/cart"
          element={<CartPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
        />
      </Routes>
      <ProductsPage addToCart={addToCart} />
      <Footer /> 
    </Router>
  );
};

export default App;
