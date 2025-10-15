// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1>GreenHouse Co.</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  );
}

export default Header;
