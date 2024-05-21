import React from "react";
import logoHtml from "../assets/svg/html.svg";
import logoCss from "../assets/svg/css.svg";
import logoJavaScript from "../assets/svg/javascript.svg";
import logoReact from "../assets/svg/react.svg";
import logoTailwind from "../assets/svg/tailwind.svg";
import logoWordpress from "../assets/img/Wordpress.png";
import logoGit from "../assets/svg/git.svg";
import logoGitHub from "../assets/svg/github.svg";
import fotoMedicina from "../assets/img/medicinatradicionalchina.webp";
import fotoMedicinaReact from "../assets/img/medicina-react.webp";
import fotoResumenes from "../assets/img/proyecto_resumenes.webp";
import fotoGlitter from "../assets/img/foto-glitter.webp";
import fotoClase from "../assets/img/proyectoclase.webp";
import { TarjetaProyecto } from "./TarjetaProyecto";

export const Proyectos = () => {
  return (
    <section className="bg-[#192640] dark:bg-white flex flex-wrap justify-center px-10 pb-10">
      <div>
        <div>
          <h3
            id="proyectos"
            className="text-white text-center text-3xl font-semibold mt-20 dark:text-slate-700"
          >
            PROYECTOS
          </h3>
          <div className="flex flex-wrap gap-10 mt-10 px-4">
            <TarjetaProyecto
              foto={fotoMedicina}
              titulo="Medicina Tradicional China"
              texto="Web de negocio de mi localidad sobre terapias de medicina china construida con Wordpress."
              enlace="https://www.medicinatradicionalchina.net"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoWordpress}
            />
            <TarjetaProyecto
              foto={fotoGlitter}
              titulo="Tuli Glitter Bar"
              texto="web de servicios de glitter bar para bodas, construida con Wordpress."
              enlace="https://www.tuli-beauty-glam.es"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoWordpress}
            />
            <TarjetaProyecto
              foto={fotoMedicinaReact}
              titulo="Medicina China con React"
              texto="La misma web de Medicina China construida con React para practicar con el Router, estados, props etc."
              enlace="https://mtc-react.pruebasdani.online/"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoReact}
              icono3={logoTailwind}
            />
            <TarjetaProyecto
              foto={fotoResumenes}
              titulo="Web Resúmenes"
              texto="Web de resúmenes de libros construida con HTML, CSS y JavaScript."
              enlace="#"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoGit}
            />
            <TarjetaProyecto
              foto={fotoClase}
              titulo="Proyecto del curso"
              texto="Proyecto de curso sobre web de astronomia construido con HTML, CSS, Y JavaScript."
              enlace="#"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoGit}
            />
          </div>
        </div>
        <h2 className="text-white text-2xl text-center mt-20 mb-6 dark:text-slate-700">
          TECNOLOGIAS
        </h2>
        <div className="flex gap-12 flex-wrap justify-center mb-20 p-6 dark:shadow-xl">
          <div>
            <img className="w-11 h-12 select-none m-auto" src={logoHtml}></img>
            <span className="text-white dark:text-slate-700">HTML</span>
          </div>
          <div>
            <img className="w-11 h-12 select-none m-auto" src={logoCss}></img>
            <span className="text-white ml-1 dark:text-slate-700">CSS</span>
          </div>
          <div>
            <img
              className="w-11 h-12 select-none m-auto"
              src={logoJavaScript}
            ></img>
            <span className="text-white dark:text-slate-700">JavaScript</span>
          </div>
          <div>
            <img className="w-11 h-12 select-none m-auto" src={logoReact}></img>
            <span className="text-white ml-1 dark:text-slate-700">React</span>
          </div>
          <div>
            <img
              className="w-11 h-12 select-none m-auto"
              src={logoTailwind}
            ></img>
            <span className="text-white dark:text-slate-700">Tailwind</span>
          </div>
          <div>
            <img
              className="w-11 h-12 select-none m-auto"
              src={logoWordpress}
            ></img>
            <span className="text-white dark:text-slate-700">Wordpress</span>
          </div>
          <div>
            <img className="w-11 h-12 select-none m-auto" src={logoGit}></img>
            <span className="text-white ml-2 dark:text-slate-700">Git</span>
          </div>
          <div>
            <img
              className="w-11 h-12 select-none m-auto"
              src={logoGitHub}
            ></img>
            <span className="text-white dark:text-slate-700">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};
