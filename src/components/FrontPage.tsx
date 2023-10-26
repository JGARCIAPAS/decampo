import React from "react";
import Bids from "./Bids/Bids";
const FrontPage = () => {
  return (
    <div className="mt-5 w-9/12 mx-auto">
      <div className="bg-cyan-600  px-2.5 py-3 text-center">
        <span className="inline align-middle text-white uppercase font-bebas_neueregular text-3xl ml-5 ">
          Por cada compra de 10 pokeballs llevate una honor ball ¡Gratis!
        </span>
        <img
          className="w-8 inline ml-3"
          src="./src/assets/img/productos/pokeballs/honorball.png"
        />
      </div>
      <Bids />
      <div className="flex justify-between mt-5">
        <div className="w-60">
          <h4 className="text-center font-sanabook text-xl font-bold">
            Los mejores precios también en la web
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="./src/assets/img/icons/lechonk.svg"
          />
        </div>
        <div className="w-60">
          <h4 className="text-center font-sanabook text-xl font-bold">
            Todo el surtido de la tienda en un click
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="./src/assets/img/icons/mobile.svg"
          />
        </div>
        <div className="w-60">
          <h4 className="text-center font-sanabook text-xl font-bold">
            Recoge tu compra como y cuando quieras
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="./src/assets/img/icons/pokecenter.svg"
          />
        </div>
        <div className="w-60">
          <h4 className="text-center font-sanabook text-xl font-bold">
            Devolución gratis en tienda o centro pokémon
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="./src/assets/img/icons/sentbox.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default FrontPage;
