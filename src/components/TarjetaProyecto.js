import React from "react";
import PropTypes from "prop-types";

export const TarjetaProyecto = ({
  foto,
  titulo,
  texto,
  enlace,
  icono,
  icono1,
  icono2,
  icono3,
}) => {
  return (
    <article className="w-11/12 md:w-3/12 m-auto flex flex-wrap gap-10">
      <div className="w-80 p-4 border-2 bg-[#111827] border-indigo-500 dark:border-none dark:shadow-xl rounded-xl overflow-hidden dark:bg-slate-200">
        <a href={enlace}>
          <img
            className="w-full h-[225px] border-2 dark:border-none hover:cursor-pointer border-indigo-500 rounded-md"
            src={foto}
            title={titulo}
            alt={titulo}
          ></img>
        </a>
        <h3 className="text-xl font-bold text-indigo-500 text-center mt-2">
          {titulo}
        </h3>
        <p className="text-white dark:text-slate-700 text-sm text-center my-2">
          {texto}
        </p>
        <div className="flex gap-6 justify-center mt-4">
          <img className="w-6" src={icono}></img>
          <img className="w-6" src={icono1}></img>
          <img className="w-6" src={icono2}></img>
          <img className="w-6" src={icono3}></img>
        </div>
      </div>
    </article>
  );
};

TarjetaProyecto.propTypes = {
  foto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  enlace: PropTypes.string.isRequired,
};
