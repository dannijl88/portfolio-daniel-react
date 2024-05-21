import React from "react";

export const Contacto = () => {
  return (
    <div className="w-11/12 mx-auto my-40 md:w-96 p-4 md:mx-auto rounded-xl bg-[#192640] dark:bg-white dark:shadow-lg">
      <h2
        id="contacto"
        className="text-center text-white dark:text-slate-700 text-3xl"
      >
        CONTACTO
      </h2>
      <form
        className="md:w-80 mx-auto mt-10"
        method="POST"
        action="mailto:dannijl88web@gmail.com"
      >
        <input
          className="md:w-full w-full border-2 border-indigo-500 bg-transparent rounded-md pl-2 text-xl text-white dark:text-slate-500"
          placeholder="Nombre"
          type="text"
          name="nombre"
          required="required"
          maxLength="20"
          minLength="1"
        />
        <input
          className="md:w-full w-full border-2 border-indigo-500 bg-transparent rounded-md mt-4 pl-2 text-xl text-white dark:text-slate-500"
          placeholder="Apellidos"
          type="text"
          name="nombre"
          required="required"
          maxLength="40"
          minLength="1"
        />
        <input
          className="md:w-full w-full my-4 border-2 border-indigo-500 bg-transparent rounded-md pl-2 text-xl text-white dark:text-slate-500"
          placeholder="Email"
          type="text"
          name="email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          required="required"
          maxLength="40"
          minLength="1"
        />
        <textarea
          className="md:w-full w-full border-2 border-indigo-500 bg-transparent rounded-md pl-2 text-xl text-white dark:text-slate-500"
          placeholder="Mensaje"
          name="textarea"
          required="required"
          maxLength="255"
          minLength="1"
        ></textarea>
        <input
          className="block mt-4 w-20 border-2 border-indigo-500 mx-auto text-white dark:text-slate-700 rounded-md text-xl hover:bg-indigo-500 cursor-pointer transition-all duration-300"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};
