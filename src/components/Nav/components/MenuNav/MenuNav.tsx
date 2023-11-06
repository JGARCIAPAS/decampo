import React from "react";
import { Link } from "react-router-dom";

import ProductData from "../../../../ProductData.json";

const MenuNav = () => {
  const categories = Object.keys(ProductData);
  return (
    <div className="subnav bg-red">
      <div className="w-9/12 mx-auto grid grid-cols-9">
        {categories.map((category) => (
          <div
            key={category}
            className="py-5 text-white text-center font-bold border-red border-b-4 hover:border-white hover:border-b-4 transition-colors"
          >
            <Link
              className="cursor-pokepointer"
              to={category.replace(/\s/g, "_")}
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MenuNav;
