import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3 fixed w-full superpuesto">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              
              Landing Page D.A.D

            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

             {/* <Link
                smooth
                spy
                to="inicio"
              >
                <span className="ml-2 text-white text-xl">
                  Inicio
                </span>
              </Link>*/}

              <Link
                smooth
                spy
                to="perfil"
              >
                <span className="ml-2 text-white text-xl">
                  Perfil
                </span>
              </Link>

              <Link
                smooth
                spy
                to="estudios"
              >
                <span className="ml-2 text-white text-xl">
                  Estudios
                </span>
              </Link>

              <Link
                smooth
                spy
                to="experiencia"
              >
                <span className="ml-2 text-white text-xl">
                  Experiencia
                </span>
              </Link>

              <Link
                smooth
                spy
                to="portafolio"
              >
                <span className="ml-2 text-white text-xl">
                  Portafolio
                </span>
              </Link>

              <Link
                smooth
                spy
                to="contacto"
              >
                <span className="ml-2 text-white text-xl">
                  Contacto
                </span>
              </Link>

              <Link
                smooth
                spy
                to="HDV"
              >
                <span className="ml-2 text-white text-xl">
                  Hoja de Vida
                </span>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
