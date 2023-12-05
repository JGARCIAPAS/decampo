import React from "react";
import Bids from "./Bids/Bids";
import ProductData from "../ProductData.json";
import { fontProps } from "./Interfaces/Interfaces";

const getRandomItem = (typeItem: Object) => {
  const keys = Object.keys(typeItem);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return typeItem[randomKey];
};
const BidItems = [
  getRandomItem(ProductData.Ingredientes),
  getRandomItem(ProductData.Pokeballs),
  getRandomItem(ProductData.Medicinas),
  getRandomItem(ProductData.Vitaminas),
  getRandomItem(ProductData["Objetos batalla"]),
  getRandomItem(ProductData["Objetos evolutivos"]),
  getRandomItem(ProductData.MT),
  getRandomItem(ProductData.Fundas),
  getRandomItem(ProductData.Otros),
];

const FrontPage: React.FC<fontProps> = (fontProps) => {
  return (
    <div className={`mt-5 w-9/12 mx-auto ${fontProps.font}`}>
      <div className="bg-cyan-600  px-2.5 py-3 text-center">
        <span className="inline align-middle text-white uppercase text-3xl ml-5 ">
          Por cada compra de 10 pokeballs llevate una honor ball ¡Gratis!
        </span>
        <img
          className="w-8 inline ml-3"
          src="src/assets/img/productos/pokeballs/honorball.png"
        />
      </div>
      {fontProps.font == "font-thraex" ? (
        <img className="mt-5" src="src/assets/img/banners/03_pald.png" />
      ) : (
        <img className="mt-5" src="src/assets/img/banners/03_es.png" />
      )}

      <Bids bidItems={BidItems} />
      <div className="flex justify-between mt-5">
        <div className="w-60">
          <h4 className="text-center text-xl font-bold">
            Los mejores precios también en la web
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="src/assets/img/icons/lechonk.svg"
          />
        </div>
        <div className="w-60">
          <h4 className="text-center  text-xl font-bold">
            Todo el surtido de la tienda en un click
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="src/assets/img/icons/mobile.svg"
          />
        </div>
        <div className="w-60">
          <h4 className="text-center  text-xl font-bold">
            Recoge tu compra como y cuando quieras
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="src/assets/img/icons/pokecenter.svg"
          />
        </div>
        <div className="w-60">
          <h4 className="text-center  text-xl font-bold">
            Devolución gratis en tienda o centro pokémon
          </h4>
          <img
            className="h-20 mx-auto mt-2.5"
            src="src/assets/img/icons/sentbox.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default FrontPage;
