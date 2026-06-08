import PropTypes from "prop-types";
import logoGitHub from "../assets/svg/github.svg";

export const TarjetaProyecto = ({
  foto,
  titulo,
  texto,
  enlace,
  enlaceGithub,
  icono,
  icono1,
  icono2,
  icono3
}) => {
  return (
    <article className="w-full md:w-[400px] m-auto flex flex-wrap">
      <div className="w-full md:w-[400px] p-4 border-2 bg-primary border-indigo-500 dark:border-none dark:shadow-xl rounded-xl overflow-hidden dark:bg-slate-200 m-auto">
        <a href={enlace}>
          <img
            className="w-full h-[225px] border-2 dark:border-none hover:cursor-pointer border-indigo-500 rounded-md"
            src={foto}
            title={titulo}
            alt={titulo}
          ></img>
        </a>
        <h3 className="text-3xl font-bold text-indigo-500 text-center mt-2">
          {titulo}
        </h3>
        <p className="text-white dark:text-slate-700 text-lg text-center my-2">
          {texto}
        </p>
        <div className="flex gap-6 justify-center mt-4">
          <img className="w-6" src={icono}></img>
          <img className="w-6" src={icono1}></img>
          <img className="w-6" src={icono2}></img>
          <img className="w-6" src={icono3}></img>
        </div>
        <div className="flex justify-center gap-6">
          <a href={enlace} target="__blank"  className="w-24 p-2 rounded-md bg-indigo-500 text-lg mt-4 text-white dark:text-slate-700 hover:cursor-pointer text-center">Demo
          </a>
          <a href={enlaceGithub} target="__blank" className="w-24 p-2 rounded-md bg-indigo-500 text-lg mt-4 text-white dark:text-slate-700 hover:cursor-pointer">Ver código
          </a>
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
