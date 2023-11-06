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
import { useState } from "react";

function App() {
  const [font, setFont] = useState("font-sanamedium");
  const esp = () => {
    setFont("font-sanamedium");
  };
  const pal = () => {
    setFont("font-thraex");
  };
  return (
    <>
      <div className="bg-gradient-to-r from-purple-700 via-[#f7556b] to-red px-12 py-4 text-center">
        <button className="px-16 font-sanamedium font-bold" onClick={esp}>
          <p>Español</p>
        </button>
        <button className="px-16 font-thraex font-bold" onClick={pal}>
          <p>Paldeano</p>
        </button>
      </div>
      <Cookies font={font} />
      <Nav font={font} />
      <Routes>
        <Route path="/" element={<FrontPage font={font} />} />
        <Route path="/:category" element={<ProductList font={font} />} />
      </Routes>
      <Footer font={font} />
    </>
  );
}

export default App;
