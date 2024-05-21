import React from "react";
import arrowUp from "../assets/svg/up-arrow-svgrepo-com.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#192640] dark:bg-slate-100 flex flex-wrap flex-col md:flex-row h-20 border-t-2 border-indigo-500 flex items-center justify-evenly mt-10">
      <p className=" flex text-center text-white dark:text-slate-700 md:text-2xl">
        Developed by DanielJuan &copy;
      </p>
      <div>
        <div className="flex gap-3">
          <a
            className="text-3xl md:text-4xl text-indigo-500 hover:scale-125 transition-all duration-300"
            href="https://www.instagram.com/dannijl88"
            target="_blank"
            alt="Enlace a Instagram"

          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            className="text-3xl md:text-4xl text-indigo-500 hover:scale-125 transition-all duration-300"
            href="https://www.linkedin.com/in/daniel-juan-lician-705900266/"
            target="_blank"
            alt="Enlace a LinkedIn"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            className="text-3xl md:text-4xl text-indigo-500 hover:scale-125 transition-all duration-300"
            href="https://github.com/dannijl88"
            target="_blank"
            alt="Enlace a GitHub"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
      <div>
        <a href="#inicio">
          <img className="w-8 h-8 rounded bg-indigo-500" title="Enlace a inicio" src={arrowUp} alt="Enlace a inicio" />
        </a>
      </div>
    </footer>
  );
};
