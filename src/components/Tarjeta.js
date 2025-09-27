import React from "react";
import fotodani from "../assets/img/fotoyohd.jpg";
import curriculum from "../assets/pdf/curriculum_web.pdf";
import { Typewriter } from 'react-simple-typewriter';

export const Tarjeta = () => {
  return (
    <div className="mx-auto flex flex-row flex-wrap md:gap-20 w-4/5 mt-10 md:mt-40 justify-center">
      <img
        className="w-9/12 md:w-96 mb-4 rounded-xl border-2 border-indigo-500"
        src={fotodani}
        alt="Foto de Daniel"
      ></img>
      <div className="max-w-md p-4 text-justify">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-indigo-500 font-semibold my-4">
          <Typewriter
            words={['Hola, soy Daniel', 'Desarrollador Web']}
            loop={0}              // 0 = infinito
            cursor
            cursorStyle="|"
            typeSpeed={100}       // velocidad de escritura
            deleteSpeed={50}      // velocidad de borrado
            delaySpeed={1500}     // pausa antes de borrar
          />
        </h1>
        <p className="text-xl md:text-2xl text-white dark:text-slate-700">
          Me complace darte la bienvenida a mi portfolio. Me gusta crear páginas que no solo funcionen, sino que transmitan claridad y estilo. Cada proyecto es para mí un reto y una oportunidad de mejorar, buscando siempre un equilibrio entre lo técnico y lo creativo.
          Aquí encontrarás una muestra de lo que hago, con trabajos que tienen su propia personalidad y la intención constante de seguir avanzando en cada nueva idea.
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <a
            className="text-4xl text-indigo-500 hover:scale-125 transition-all duration-300"
            href="https://www.instagram.com/dannijl88"
            target="_blank"
            alt="Enlace a mi Instagram"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            className="text-4xl text-indigo-500 hover:scale-125 transition-all duration-300"
            href="https://www.linkedin.com/in/daniel-juan-lician-705900266/"
            target="_blank"
            alt="Enlace a mi LinkedIn"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            className="text-4xl text-indigo-500 hover:scale-125 transition-all duration-300"
            href="https://github.com/dannijl88"
            target="_blank"
            alt="Enlace a mi GitHub"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <a
          className="bg-indigo-500 block w-1/2 h-8 hover:bg-indigo-600 transition-all duration-300 text-xl text-white text-center mx-auto mt-4 rounded-md"
          href={curriculum}
          target="_blank"
          alt="Enlace a mi Curriculum"
        >
          Currículum
        </a>
      </div>
    </div>
  );
};
