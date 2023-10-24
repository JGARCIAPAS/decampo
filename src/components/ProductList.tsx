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
      <div className="breadcrumbs">
        <Link to="/">Inicio</Link>
        {">"}
        <Link to={`/${category}`}>{formattedCategory}</Link>
      </div>
      <div>
        {categoryData && Object.keys(categoryData).length > 0 ? (
          <ul>
            {Object.keys(categoryData).map((item) => {
              const product = categoryData[item];
              return (
                <li key={item}>
                  <h3>{product.nombre}</h3>
                  <img src={product.img} alt={product.nombre} />
                  <p>Precio: {product.precio}</p>
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
