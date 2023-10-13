import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Product from './Product';
import Order from './Order';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="order" element={<Order />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
