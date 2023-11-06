import React from "react";

const ShoppingCart = () => {
  return (
    <div className="cart-box  border border-slate-300 pt-2.5 px-4 flex flex-basis gap-2 max-h-12 rounded cursor-pokepointer">
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
  );
};
export default ShoppingCart;
