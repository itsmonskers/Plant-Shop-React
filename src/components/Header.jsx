import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // ✅ make sure this path is correct!

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">GreenHouse Co.</h1>
      <nav className="nav-links">
        <Link to="/products" className="nav-btn">Products</Link>
        <Link to="/cart" className="nav-btn">Cart 🛒</Link>
      </nav>
    </header>
  );
};

export default Header;
