import React from "react";
import { Link } from "react-router-dom";
import ShopLocation from "./components/ShopLocation/ShopLocation";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import MenuNav from "./components/MenuNav/MenuNav";

const Nav = () => {
  return (
    <div className="nav">
      <div className="main-nav flex flex-row gap-16 pt-5 pb-2 w-9/12 mx-auto basis-1/6 font-sanamedium">
        <Link to="/">
          <picture className="site-logo w-52">
            <source
              srcSet="./src/assets/img/logos/decampo_alt.svg"
              media="(min-width: 600px)"
            />
            <img
              className="site-logo w-52"
              src="./src/assets/img/logos/decampo_alt.svg"
            />
          </picture>
        </Link>
        <div className="header-content flex flex-row basis-5/6">
          <div className="site-search basis-3/4 mr-3 relative block">
            <span className="absolute top-3 left-0 flex items-center pl-2">
              <img
                className="h-5 w-5 fill-slate-300"
                src="./src/assets/img/icons/search.svg"
              />
            </span>
            <input
              className="border border-dark_gray border-solid rounded text-base py-2.5 pl-12 pr-10 w-full"
              placeholder="¿Qué estás buscando? leche Mu-Mu, pociones, MT,..."
            />
          </div>
          <ShopLocation />
          <ShoppingCart />
        </div>
      </div>
      <MenuNav />
    </div>
  );
};
export default Nav;
