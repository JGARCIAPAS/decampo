/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
//import './App.css'

import { Routes, Route } from "react-router-dom";

import Cookies from "./components/Cookies/Cookies";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import FrontPage from "./components/FrontPage";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Cookies />
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/:category" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
