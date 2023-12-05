import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductData from "../ProductData.json";
import { fontProps } from "./Interfaces/Interfaces";
import Modal from "./Modal/Modal";

interface Product {
  img: string;
  nombre: string;
  precio: number;
  fabricante: string;
  detalle: string;
}

const ProductList: React.FC<fontProps> = (fontProps) => {
  const { category } = useParams();
  const formattedCategory = category?.replace("_", " ");
  const [categoryData, setCategoryData] = useState<Record<string, Product>>({});
  useEffect(() => {
    if (formattedCategory && ProductData[formattedCategory]) {
      setCategoryData(ProductData[formattedCategory]);
    }
  }, [formattedCategory]);
  console.log(categoryData);

  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };
  const openModal = modal ? "block" : "hidden";

  return (
    <div className={`w-9/12 mx-auto ${fontProps.font}`}>
      <div className="breadcrumbs pt-2.5">
        <Link className="cursor-pokepointer" to="/">
          Inicio
        </Link>
        {" > "}
        <Link className="cursor-pokepointer" to={`/${category}`}>
          {formattedCategory}
        </Link>
      </div>
      <div className="bg-slate-300 my-5">
        {Object.keys(categoryData).length} productos disponibles
      </div>
      <div>
        {categoryData && Object.keys(categoryData).length > 0 ? (
          <ul className="grid gap-4 grid-cols-6">
            {Object.keys(categoryData).map((item) => {
              const product = categoryData[item];
              return (
                <li className="border border-slate-300 p-2.5" key={item}>
                  <img
                    className="w-[130px] mx-auto mb-5"
                    src={`src/assets/img/productos/${product.img}`}
                    alt={product.nombre}
                  />
                  <h3 className="text-sm font-bold">{product.nombre}</h3>
                  <h4 className="text-sm text-slate-500 uppercase">
                    {product.fabricante}
                  </h4>
                  <p className="text-xs">Unidad</p>
                  <p className="flex border border-red w-fit px-5 py-2.5">
                    <span className="first-letter:text-2xl font-bold text-red">
                      {product.precio}
                    </span>
                    <img
                      className="w-3 h-3 mt-3 ml-1"
                      src="src/assets/img/icons/pokedollar_red.svg"
                    />
                  </p>
                  <div className="mt-2.5 flex justify-between">
                    <img
                      className=""
                      src="src/assets/img/icons/heart.svg"
                      alt="fav"
                    />

                    <p
                      className="bg-red text-white font-bold w-fit py-1.5 px-6 rounded-3xl text-sm"
                      onClick={showModal}
                    >
                      Comprar
                    </p>
                    {/* TODO: MODAL TO THE PRODUCT */}
                    <div className={openModal}>
                      <Modal />
                    </div>
                  </div>
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
