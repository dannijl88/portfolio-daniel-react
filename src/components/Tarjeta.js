import React from "react";
import fotodani from "../assets/img/foto-dani-recortada.webp";
import curriculum from "../assets/pdf/curriculum-daniel.pdf";

export const Tarjeta = () => {
  return (
    <div className="mx-auto flex flex-row flex-wrap md:gap-20 w-4/5 mt-10 md:mt-40 justify-center">
      <img
        className="w-9/12 md:w-80 mb-4 rounded-xl border-2 border-indigo-500"
        src={fotodani}
        alt="Foto de Daniel"
      ></img>
      <div className="max-w-md p-4 text-justify">
        <h1 className="text-3xl text-white dark:text-slate-700">
          Hola, soy Daniel Juan
        </h1>
        <h2 className="text-5xl text-indigo-500 font-semibold my-2">
          Frontend Developer
        </h2>
        <p className="text-1xl text-white dark:text-slate-700">
          Me complace darte la bienvenida a mi portfolio. Soy un apasionado del
          desarrollo web con un deseo innato de crear, aprender y compartir. Mi
          viaje en el desarrollo web comenzó hace 2 años y desde entonces he
          tenido el privilegio de trabajar en una amplia variedad de proyectos
          emocionantes y desafiantes.
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
