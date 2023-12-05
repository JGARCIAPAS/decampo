import React, { useEffect, useState } from "react";
import { Item } from "../Interfaces/Interfaces";

interface BidsProps {
  bidItems: Item[];
}

const Bids: React.FC<BidsProps> = (BidsProps) => {
  return (
    <div>
      <div className="text-red uppercase text-center border-b border-b-slate-300 text-3xl tracking-widest mt-5 mb-3">
        lo mas vendido
      </div>
      <div className="carousel relative  justify-center overflow-hidden">
        <div className="carousel-container flex px-10 justify-between">
          {BidsProps.bidItems.map((item, index) =>
            item ? (
              <div key={index} className="carousel-slide p-2.5 w-57">
                <img
                  className="w-[130px] mx-auto mb-5"
                  src={`img/productos/${item?.img}`}
                  alt={item?.nombre}
                />
                <h3 className="text-sm font-bold">{item?.nombre}</h3>
                <h4 className="text-sm text-slate-500 uppercase">
                  {item?.fabricante}
                </h4>
                <p className="text-xs">Unidad</p>
                <div className="flex pt-2.5">
                  <p className="flex border border-red w-fit px-2.5 py-1">
                    <span className="first-letter:text-2xl font-bold text-red">
                      {item?.precio}
                    </span>
                    <img
                      className="w-3 h-3 mt-3 ml-1"
                      src="blob/main/img/icons/pokedollar_red.svg"
                    />
                  </p>
                  <div className="ml-5">
                    {/* TODO: MODAL TO THE PRODUCT */}
                    <p className="bg-red w-fit rounded-full p-3">
                      <img
                        className="w-5"
                        src="blob/main/img/icons/chart_white.svg"
                        alt="fav"
                      />
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Bids;
