import React from "react";
import { Tarjeta } from "./Tarjeta";
import iconoDark from "../assets/svg/on-button-svgrepo-com.svg";
import iconoSun from "../assets/svg/sun-svgrepo-com.svg";
import { useTheme } from "../hooks/useTheme";
import { useMenu } from "../hooks/useMenu";

export const Header = () => {
  const { changeTheme } = useTheme();
  const { showMenu } = useMenu();

  return (
    <header className="md:h-screen">
      <nav
        id="inicio"
        className="flex items-center justify-between flex-wrap bg-[#192640] dark:bg-white shadow-md p-6"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <p className="text-4xl font-bold text-white dark:text-slate-700">
            <span className="text-5xl text-indigo-500">D</span>aniel
          </p>
        </div>
        <div className="block lg:hidden">
          <button
            id="boton"
            onClick={showMenu}
            className="flex items-center px-3 py-2 rounded text-white dark:text-slate-500 hover:bg-indigo-500 dark:hover:text-white transition-colors"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div id="menu" className="w-full block flex-grow lg:flex lg:w-auto">
          <div className="text-sm lg:flex-grow text-center lg:text-right lg:mr-20">
            <a
              href="#inicio"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 lg:mr-14 text-2xl text-white dark:text-slate-700 dark:hover:text-indigo-500 hover:text-indigo-500 transition-all duration-300"
              alt="Enlace a inicio"
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 lg:mr-14 text-2xl text-white dark:text-slate-700 dark:hover:text-indigo-500 hover:text-indigo-500 transition-all duration-300"
              alt="Enlace a proyectos"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="block mt-4 lg:inline-block lg:mt-0 text-2xl text-white dark:text-slate-700 dark:hover:text-indigo-500 hover:text-indigo-500 transition-all duration-300"
              alt="Enlace a contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Cambiar tema */}
      <div className="w-8 md:w-10 pl-1 flex flex-col absolute bg-indigo-400 top-1/2 hover:bg-indigo-700 dark:bg-white dark:shadow-lg gap-1 z-20 rounded transition-colors dark:hover:bg-indigo-200">
        <img 
          className="w-6 md:w-8 h-10 md:h-12" 
          alt="Cambiar tema" 
          src={iconoSun}>
          </img>
        <img
          className="w-6 md:w-8 h-10 md:h-12 mr-6 hover:cursor-pointer"
          onClick={changeTheme}
          src={iconoDark}
          alt="Cambiar tema"
        ></img>
      </div>
      <Tarjeta />
    </header>
  );
};
