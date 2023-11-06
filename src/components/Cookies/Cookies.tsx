import React, { useState } from "react";
import { fontProps } from "../Interfaces/Interfaces";

const Cookies: React.FC<fontProps> = (fontProps) => {
  const [showCookie, setShowCookie] = useState(true);
  const toggleCookies = () => {
    setShowCookie(false);
  };

  const displayCookies = showCookie ? "block" : "hidden";

  return (
    <div
      className={`bg-cookie_gray pl-5 text-center pt-5 ${displayCookies} ${fontProps.font}`}
    >
      <div className="inline-block w-6 h-6 pt-1">
        <picture>
          <source
            srcSet="./src/assets/img/icons/cookie.svg"
            media="(min-width: 600px)"
          />
          <img
            className="site-logo w-52"
            src="./src/assets/img/icons/cookie.svg"
          />
        </picture>
      </div>
      <div className="inline-block pl-5">
        <p className="text-white">
          Nuestro sitio web utiliza cookies, tanto propias como de terceros.
          Puedes obtener más información en nuestra{" "}
          <a href="" className="text-green-700">
            política de cookies
          </a>
        </p>
      </div>
      <div className="py-2.5">
        <button
          className="border border-white w-fit text-center py-1.5 px-5 text-white rounded-3xl hover:border-dark_gray hover:text-dark_gray"
          onClick={toggleCookies}
        >
          Aceptar y continuar navegando
        </button>
      </div>
    </div>
  );
};
export default Cookies;
