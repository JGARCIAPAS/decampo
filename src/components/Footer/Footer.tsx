import React from "react";
import { fontProps } from "../Interfaces/Interfaces";
const Footer: React.FC<fontProps> = (fontProps) => {
  return (
    <div className={fontProps.font}>
      <div className="bg-footer_light_gray border-t border-gray-300 mt-5">
        <div className="py-5 w-9/12 mx-auto grid grid-cols-2">
          <div>
            <img
              className="w-7 h-7 inline-block mr-2.5"
              src="src/assets/img/icons/facebook.png"
            />
            <img
              className="w-7 h-7 inline-block mr-2.5"
              src="src/assets/img/icons/twitter.webp"
            />
            <img
              className="w-7 h-7 inline-block mr-2.5"
              src="src/assets/img/icons/youtube.png"
            />
            <img
              className="w-7 h-7 inline-block mr-2.5"
              src="src/assets/img/icons/social_ig.png"
            />
            <img
              className="w-7 h-7 inline-block mr-2.5"
              src="src/assets/img/icons/mail.webp"
            />
          </div>
          <div className="text-right">
            <span className="inline-block mr-2.5 ">Apps gratuitas</span>
            <img
              className="inline-block mr-2.5"
              src="src/assets/img/icons/iOS.png"
            />
            <img
              className="inline-block"
              src="src/assets/img/icons/android.webp"
            />
          </div>
        </div>
      </div>
      <div className="bg-cookie_gray">
        <div className="w-9/12 mx-auto ">
          <div className="grid grid-cols-5 border-b border-gray-500 pt-5 pb-4">
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Atención al cliente
              </h2>
              <ul className="block">
                <li className="text-white text-sm">Decampo Ciudad Meseta</li>
                <li className="text-white text-sm">00 000 00 00</li>
                <li className="text-white text-sm">
                  Todos los dí­as de 09:00 a 22:00 H.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Medios de pago
              </h2>
              <div className="block">
                <img
                  className="p-0.5 bg-gray-700 w-12 inline"
                  alt="Puntos de batalla"
                  src="src/assets/img/icons/bp.png"
                />
                <img
                  className="p-0.5 bg-gray-700 w-12 inline"
                  alt="Puntos de liga"
                  src="src/assets/img/icons/lp.png"
                />
                <img
                  className="p-0.5 bg-gray-700 w-12 inline"
                  alt="Tarjeta de puntos de batalla Sinnoh"
                  src="src/assets/img/icons/bpcard.png"
                />
              </div>
            </div>
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Certificados
              </h2>
              <ul className="block">
                <li className="text-white text-sm">Accesibilidad</li>
              </ul>
            </div>
            <div></div>
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Otros links de interés
              </h2>
              <ul className="block">
                <li className="text-white text-sm">Web Proveedores</li>
                <li className="text-white text-sm">Franquicias Decampo</li>
                <li className="text-white text-sm">
                  Guía Comercio Electrónico Seguro
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-5 border-b border-gray-500 pb-7 pt-7">
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Comercio electrónico
              </h2>
              <ul className="block">
                <li className="text-white text-sm">Preguntas más frecuentes</li>
                <li className="text-white text-sm">Modalidades de entrega</li>
                <li className="text-white text-sm">Horarios</li>
                <li className="text-white text-sm">Métodos de pago</li>
                <li className="text-white text-sm">Política de privacidad</li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Decampo retail Paldea
              </h2>
              <ul className="block">
                <li className="text-white text-sm">¿Quiénes somos?</li>
                <li className="text-white text-sm">
                  Canal de denuncias de ética
                </li>
                <li className="text-white text-sm">Productos Decampo</li>
                <li className="text-white text-sm">Trabaja con nosotros</li>
                <li className="text-white text-sm">Nuestra Actividad</li>
                <li className="text-white text-sm">
                  Sugerencias y reclamaciones
                </li>
                <li className="text-white text-sm">Nuestros compromisos</li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Comunidad Decampo
              </h2>
              <ul className="block">
                <li className="text-white text-sm">En bandeja</li>
                <li className="text-white  text-sm">Tendencias</li>
                <li className="text-white text-sm">Como en casa</li>
                <li className="text-white text-sm">Tech fans</li>
                <li className="text-white text-sm">Productos Decampo</li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Servicios
              </h2>
              <ul className="block">
                <li className="text-white text-sm">Tarjeta Decampo</li>
                <li className="text-white text-sm">Tarjeta regalo</li>
                <li className="text-white text-sm">Club infantil</li>
                <li className="text-white text-sm">Club Joven Team</li>
                <li className="text-white text-sm">Centros Pokémon</li>
                <li className="text-white text-sm">Wifi Gratis</li>
                <li className="text-white text-sm">App Decampo</li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-500 text-lg font-bold mb-1">
                Nuestras tiendas
              </h2>
              <ul className="block">
                <li className="text-white text-sm">Busca tu tienda</li>
                <li className="text-white text-sm">
                  Recogida de residuos eléctricos
                </li>
                <li className="text-white text-sm">Accesibilidad en tiendas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-5 text-sm">
          <a className="text-white px-6">Aviso legal</a>
          <a className="text-white px-6">Política de cookies</a>
          <a className="text-white px-6">Condiciones generales de venta</a>
          <a className="text-white px-6">Politica de privacidad</a>
          <a className="text-gray-500 block py-4 block">
            © Decampo S.A. Todos los derechos reservados
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
