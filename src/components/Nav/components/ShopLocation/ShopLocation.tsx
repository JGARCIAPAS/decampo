import React, { useState } from "react";

const ShopLocation = () => {
  const [showCityTooltip, setShowCityTooltip] = useState(false);
  const showTooltip = () => {
    setShowCityTooltip(!showCityTooltip);
  };
  const showCities = showCityTooltip ? "block" : "hidden";
  const [mainCity, setMainCity] = useState("Ciudad Meseta");
  const cityOne = "Ciudad Meseta";
  const cityTwo = "Ciudad Leudal";
  const cityThree = "Ciudad Cántara";
  const toggleCityOne = () => {
    setMainCity(cityOne);
  };
  const toggleCityTwo = () => {
    setMainCity(cityTwo);
  };
  const toggleCityThree = () => {
    setMainCity(cityThree);
  };

  return (
    <div
      className="shop-location basis-1/6 flex flex-basis gap-1 cursor-pointer relative"
      onClick={showTooltip}
    >
      <picture className="w-10">
        <source />
        <img src="./src/assets/img/icons/pointer.svg" />
      </picture>
      <div className="text-sm">
        <div>Tienda de</div>
        <div className="font-bold flex flex-basis">
          <span className="">{mainCity}</span>
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
      <div
        className={`${showCities} absolute bg-white top-[60px] w-[250px] shadow-md text-sm font-sanamedium`}
      >
        {mainCity == "Ciudad Meseta" ? (
          <></>
        ) : (
          <div
            className="hover:bg-slate-200 p-2.5 border-b-2 border-slate-300"
            onClick={toggleCityOne}
          >
            <ul>
              <li className="font-bold">{cityOne}</li>
              <li>Horario</li>
              <li>Todos los dí­as de 09:00 a 22:00 H.</li>
            </ul>
          </div>
        )}
        {mainCity == "Ciudad Leudal" ? (
          <></>
        ) : (
          <div
            className="hover:bg-slate-200 p-2.5 border-b-2 border-slate-300"
            onClick={toggleCityTwo}
          >
            <ul>
              <li className="font-bold">{cityTwo}</li>
              <li>Horario</li>
              <li>Todos los dí­as de 09:00 a 22:00 H.</li>
            </ul>
          </div>
        )}
        {mainCity == "Ciudad Cántara" ? (
          <></>
        ) : (
          <div className="hover:bg-slate-200 p-2.5" onClick={toggleCityThree}>
            <ul>
              <li className="font-bold">{cityThree}</li>
              <li>Horario</li>
              <li>Todos los dí­as de 09:00 a 22:00 H.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShopLocation;
