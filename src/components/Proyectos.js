import React from "react";
import logoHtml from "../assets/svg/html.svg";
import logoCss from "../assets/svg/css.svg";
import logoJavaScript from "../assets/svg/javascript.svg";
import logoReact from "../assets/svg/react.svg";
import logoPhp from "../assets/img/php.png";
import logoSql from "../assets/img/mysql.webp";
import logoJava from "../assets/img/java.png";
import logoTailwind from "../assets/svg/tailwind.svg";
import logoWordpress from "../assets/img/Wordpress.png";
import logoGit from "../assets/svg/git.svg";
import logoGitHub from "../assets/svg/github.svg";
import logoTypescript from "../assets/svg/Typescript_logo_2020.svg.png";
import fotoLobeya from "../assets/img/fotolobeya.png";
import fotoMedicinaReact from "../assets/img/medicina-react.webp";
import fotoCodelen from "../assets/img/Captura de pantalla 2025-09-27 114303.png";
import fotoGlitter from "../assets/img/foto-glitter.webp";
import fotoHappy from "../assets/img/Captura de pantalla 2025-09-27 114418.png";
import fotoCalculadora from "../assets/img/calculadora.png";
import fotoTienda from "../assets/img/tiendaonline.png";
import fotoClima from "../assets/img/app-clima.webp";
import fotoRecetas from "../assets/img/app-recetas.jpg"
import fotoPeliculas from "../assets/img/app-peliculas.png"
import fotoTareas from "../assets/img/taskflow.png"
import fotoSpace from "../assets/img/space-explorer.png"
import logoSpring from "../assets/img/logo-spring.png"
import { TarjetaProyecto } from "./TarjetaProyecto";

export const Proyectos = () => {
  return (
    <section className="bg-secondary max-w-[1500px] m-auto dark:bg-white flex flex-wrap justify-center md:px-2 pb-10 rounded-xl">
      <div>
        <div>
          <h3
            id="proyectos"
            className="text-white text-center text-3xl md:text-5xl font-semibold mt-20 dark:text-slate-700"
          >
            PROYECTOS
          </h3>
          <div className="flex flex-wrap gap-10 mt-10 px-4 m-auto">
            <TarjetaProyecto
              foto={fotoSpace}
              titulo="SpaceExplorer"
              texto="App de exploración espacial que consume APIs reales de la NASA. Muestra la imagen astronómica del día, fotos del satélite DSCOVR, asteroides cercanos a la Tierra y una galería de imágenes históricas con buscador."
              enlace="https://space-explorer-livid.vercel.app"
              enlaceGithub="https://github.com/dannijl88/space-explorer"
              icono={logoReact}
              icono1={logoTypescript}
              icono2={logoCss}
              icono3={logoGit}
            />
            <TarjetaProyecto
              foto={fotoTareas}
              titulo="TaskFlow"
              texto="Aplicación de gestión de tareas desarrollada con React y TypeScript. Incluye autenticación simulada con rutas protegidas, CRUD completo con edición inline, estado global mediante Context API y hooks personalizados, filtrado de tareas por estado y tests con Vitest y React Testing Library."
              enlace="https://task-flow-sooty-pi.vercel.app/login"
              enlaceGithub="https://github.com/dannijl88/taskflow"
              icono={logoReact}
              icono1={logoTypescript}
              icono2={logoCss}
              icono3={logoGit}
            />
            <TarjetaProyecto
              foto={fotoRecetas}
              titulo="DevRecipes"
              texto="Plataforma completa de gestión de recetas donde los usuarios pueden registrarse, iniciar sesión, publicar sus propias recetas y explorar las de otros. Todo con autenticación segura mediante JWT para que cada usuario solo pueda editar y eliminar sus propias recetas."
              enlace="https://github.com/dannijl88/recetas-app"
              enlaceGithub="https://github.com/dannijl88/recetas-app"
              icono={logoSpring}
              icono1={logoTailwind}
              icono2={logoReact}
              icono3={logoJava}
            />
            <TarjetaProyecto
              foto={fotoPeliculas}
              titulo="DevMovies"
              texto="Plataforma de películas que consume la API de TMDB para mostrar información actualizada en tiempo real. El backend actúa como intermediario entre el frontend y la API externa, exponiendo sus propios endpoints REST."
              enlace="https://github.com/dannijl88/movies-app"
              enlaceGithub="https://github.com/dannijl88/movies-app"
              icono={logoSpring}
              icono1={logoTailwind}
              icono2={logoReact}
              icono3={logoJava}
            />
            <TarjetaProyecto
              foto={fotoClima}
              titulo="App Clima React"
              texto="Aplicación web interactiva que muestra información meteorológica en tiempo real. Creada con React, Tailwind y TypeScript para practicar componentes reutilizables y diseño responsive."
              enlace="https://apptiempo.medicinatradicionalchina.net/"
              enlaceGithub="https://github.com/dannijl88/app-clima-react"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoTypescript}
              icono3={logoReact}
            />
            <TarjetaProyecto
              foto={fotoCalculadora}
              titulo="Calculadora JS"
              texto="Calculadora interactiva desarrollada en JavaScript que permite realizar operaciones básicas con resultados inmediatos. Incluye manejo de eventos y actualización dinámica de la pantalla."
              enlace="https://calculadora-js.medicinatradicionalchina.net/"
              enlaceGithub="https://github.com/dannijl88/Calculadora-JavaScript"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
            />
            <TarjetaProyecto
              foto={fotoTienda}
              titulo="Tienda online PHP"
              texto="Tienda online realizada siguiendo el curso de Víctor Robles, implementando PHP y MySQL con el patrón MVC. Permite gestionar productos, usuarios y pedidos, y sirve para aprender la estructura y organización de proyectos en MVC."
              enlace="https://github.com/dannijl88/Tienda-online-PHP"
              enlaceGithub="https://github.com/dannijl88/Tienda-online-PHP"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoPhp}
              icono3={logoSql}
            />
            
            <TarjetaProyecto
              foto={fotoMedicinaReact}
              titulo="Medicina China"
              texto="Versión desarrollada en React y Tailwind de un proyecto previamente hecho en WordPress. El objetivo fue trasladar la estructura a un entorno más flexible y moderno, mejorando rendimiento y personalización."
              enlace="https://github.com/dannijl88/medicina-tradicional-china"
              enlaceGithub="https://github.com/dannijl88/medicina-tradicional-china"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoReact}
              icono3={logoTailwind}
            />
            <TarjetaProyecto
              foto={fotoCodelen}
              titulo="Codelen"
              texto="Proyecto más completo en WordPress donde integré funcionalidades personalizadas con JavaScript. Destaca por un diseño más elaborado y dinámico."
              enlace="https://codelen.es/"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoWordpress}
            />
            <TarjetaProyecto
              foto={fotoLobeya}
              titulo="Lobeya"
              texto="Página web para una empresa de reformas, desarrollada en WordPress con un diseño sencillo y funcional para mostrar servicios y facilitar el contacto de clientes."
              enlace="https://lobeya.es"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoWordpress}
            />
            <TarjetaProyecto
              foto={fotoGlitter}
              titulo="Tuli Glitter Bar"
              texto="Página web en WordPress para un servicio de glitter bar en bodas y eventos, con un diseño visual atractivo y orientado a transmitir la esencia creativa del servicio."
              enlace="https://www.tuli-beauty-glam.es"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoWordpress}
            />
            <TarjetaProyecto
              foto={fotoHappy}
              titulo="Happy Snoozers"
              texto="Sitio web en WordPress con enfoque en la presentación de contenidos de forma clara y amigable, priorizando la facilidad de navegación."
              enlace="https://happy-snoozers.com/"
              icono={logoHtml}
              icono1={logoCss}
              icono2={logoJavaScript}
              icono3={logoWordpress}
            />
            
          </div>
        </div>
        <h2 className="text-white text-3xl md:text-5xl text-center mt-20 mb-6 dark:text-slate-700">
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
            <img className="w-11 h-12 select-none m-auto" src={logoJava}></img>
            <span className="text-white ml-1 dark:text-slate-700">Java</span>
          </div>
          <div>
            <img className="w-11 h-12 select-none m-auto" src={logoSpring}></img>
            <span className="text-white ml-1 dark:text-slate-700">Spring Boot</span>
          </div>
          <div>
            <img className="w-11 h-12 select-none m-auto" src={logoSql}></img>
            <span className="text-white ml-1 dark:text-slate-700">MySQL</span>
          </div>
          <div>
            <img className="w-11 h-12 select-none m-auto" src={logoTypescript}></img>
            <span className="text-white ml-1 dark:text-slate-700">Typescript</span>
          </div>
          <div>
            <img
              className="w-11 h-12 select-none m-auto"
              src={logoTailwind}
            ></img>
            <span className="text-white dark:text-slate-700">Tailwind</span>
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
