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
  const [font, setFont] = useState("font-thraex");
  const esp = () => {
    setFont("font-sanamedium");
  };
  const pal = () => {
    setFont("font-thraex");
  };
  return (
    <div className="cursor-pokecursor">
      <div className="bg-gradient-to-r from-purple-700 via-[#f7556b] to-red px-12 py-4 text-center fixed w-full top-0 z-10">
        <button
          className="px-16 font-sanamedium font-bold border-2 border-yellow-500 mr-3.5 rounded-md cursor-pokepointer"
          onClick={esp}
        >
          <p className="text-shadow-default  text-purple-700 p-1.5">Español</p>
        </button>
        <button
          className="px-16 font-thraex font-bold border-2 border-yellow-500 rounded-md cursor-pokepointer"
          onClick={pal}
        >
          <p className="text-shadow-default text-red px-1.5 pt-2 pb-1">
            Paldeano
          </p>
        </button>
      </div>
      <div className="mt-[72px]">
        <Cookies font={font} />
        <Nav font={font} />
        <Routes>
          <Route path="/decampo/" element={<FrontPage font={font} />} />
          <Route
            path="/decampo/:category"
            element={<ProductList font={font} />}
          />
        </Routes>
        <Footer font={font} />
      </div>
    </div>
  );
}

export default App;
