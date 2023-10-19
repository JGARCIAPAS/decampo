import React, { useState } from "react";

const ShopLocation = () => {
  const [lol, setLol] = useState("sashay away");
  console.log(lol);
  const loli = () => {
    setLol("Santay you stay");
  };
  console.log(lol);
  return (
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
  );
};
export default ShopLocation;
