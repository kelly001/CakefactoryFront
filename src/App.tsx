import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/UI/Header";
import Welcome from "./components/Pages/Welcome"
import Products from "./components/Pages/Products"
import ProductDetailPage from "./components/Pages/ProductDetailPage"

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productCode" element={<ProductDetailPage />}/>
      </Routes>
    </div>
  );
}

export default App;
