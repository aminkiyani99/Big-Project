import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import second from "./Components/Footer/Footer";
import Footer from "./Components/Footer/Footer";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="man" />} />
          <Route path="/womens" element={<ShopCategory />} category="woman" />
          <Route path="/kids" element={<ShopCategory />} category="kid" />
          <Route path="product" element={<ProductPage />} />
          <Route path=":productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
