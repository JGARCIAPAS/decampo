import React, { useState } from "react";

const Nav = () => {
  const [lol, setLol] = useState("sashay away");
  console.log(lol);
  const loli = () => {
    setLol("Santay you stay");
  };
  console.log(lol);
  return (
    <div className="nav">
      <div className="main-nav flex flex-row gap-16 pt-5 pb-2 w-9/12 mx-auto basis-1/6 font-sanamedium">
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
        <div className="header-content flex flex-row basis-5/6">
          <div className="site-search basis-3/4 mr-3 relative block">
            <span className="absolute top-3 left-0 flex items-center pl-2">
              <img
                className="h-5 w-5 fill-slate-300"
                src="./src/assets/img/icons/search.svg"
              />
            </span>
            <input
              className="border border-dark_gray border-solid rounded-sm text-base py-2.5 pl-12 pr-10 w-full"
              placeholder="¿Qué estás buscando? leche Mu-Mu, pociones, MT,..."
            />
          </div>
          <div
            className="shop-location basis-1/6 flex flex-basis gap-1 cursor-pointer"
            onClick={loli}
          >
            <picture className="w-10">
              <source />
              <img src="./src/assets/img/icons/pointer.svg" />
            </picture>
            <div className="text-sm">
              <div>Tienda de</div>
              <div className="font-bold flex flex-basis">
                <span className="">Ciudad Meseta</span>{" "}
                {/* cuidad leudal y Ciudad Cántara */}
                <span className="inset-y-0 right-0 flex items-center pl-1 pb-1.5">
                  <img
                    className="h-3 w-3 fill-slate-300"
                    src="./src/assets/img/icons/arrow_down.svg"
                  />
                </span>
              </div>
              <div className="text-green-600 hover:underline-offset-1 hover:underline">
                Cambiar tienda
              </div>
            </div>
          </div>
          <div className="cart-box  border border-dark_gray pt-2.5 px-4 flex flex-basis gap-2">
            <picture className="w-7 h-7">
              <source
                srcSet="./src/assets/img/icons/chart.svg"
                media="(min-width: 600px)"
              />
              <img src="./src/assets/img/icons/chart.svg" />
            </picture>
            <div className="bg-slate-300 rounded-full text-white text-center font-bold mt-1 w-6 h-6 py-px py-1">
              10
            </div>
            <div className="flex flex-basis mt-1">
              <span className="font-bold">120</span>
              <img
                className="w-3 h-3 mt-1.5"
                src="./src/assets/img/icons/pokedollar.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="subnav bg-red">
        <div className="w-9/12 mx-auto grid grid-cols-9">
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            ingredientes
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            pokeballs
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            medicinas
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            vitaminas
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            objetos batalla
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            mt
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            objetos evolutivos
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            fundas
          </div>
          <div className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4">
            otros
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
