import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={
          <>
            <Header />
            <Products />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
