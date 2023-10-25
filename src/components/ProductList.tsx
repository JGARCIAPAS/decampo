import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProductData from "../ProductData.json";

interface Product {
  img: string;
  nombre: string;
  precio: number;
}

const ProductList = () => {
  const { category } = useParams();
  const formattedCategory = category?.replace("_", " ");
  const [categoryData, setCategoryData] = useState<Record<string, Product>>({});
  useEffect(() => {
    if (formattedCategory && ProductData[formattedCategory]) {
      setCategoryData(ProductData[formattedCategory]);
    }
  }, [formattedCategory]);
  console.log(categoryData);
  return (
    <div className="w-9/12 mx-auto ">
      <div className="breadcrumbs pt-2.5">
        <Link to="/">Inicio</Link>
        {">"}
        <Link to={`/${category}`}>{formattedCategory}</Link>
      </div>
      <div className="bg-slate-300 my-5">100 productos </div>
      <div>
        {categoryData && Object.keys(categoryData).length > 0 ? (
          <ul className="grid gap-4 grid-cols-5">
            {Object.keys(categoryData).map((item) => {
              const product = categoryData[item];
              return (
                <li className="border border-slate-300 p-2.5" key={item}>
                  <img
                    className="w-[130px] mx-auto"
                    src={`./src/assets/img/productos/${category}/${product.img}`}
                    alt={product.nombre}
                  />
                  <h3>{product.nombre}</h3>
                  <p>Unidad</p>
                  <p className="flex border border-red">
                    <span className="first-letter:text-xl">
                      {product.precio}
                    </span>
                    <img
                      className="w-3 h-3 mt-1.5"
                      src="./src/assets/img/icons/pokedollar.svg"
                    />
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No hay artículos disponibles</p>
        )}
      </div>
    </div>
  );
};
export default ProductList;
