import React from "react";

const MenuNav = () => {
  return (
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
  );
};
export default MenuNav;
