import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "Shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("Mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Man
          </Link>
          {menu === "Mens" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("Woman");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            womens
          </Link>
          {menu === "Woman" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "Kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="cart-icon" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
