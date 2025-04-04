"use client";
import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
      {/* Título */}
      <h2 className="text-center text-3xl font-normal text-black mb-8">
        Cadastre-se na nossa{" "}
        <span className="text-blue-600 font-semibold">newsletter</span>
      </h2>

      {/* Container Cinza */}
      <div className="mt-8 w-full max-w-7xl bg-gray-200 rounded-md p-12 flex items-center justify-between gap-8">
        {/* Campo Nome */}
        <input
          type="text"
          placeholder="Digite seu nome"
          className="w-80 py-4 px-6 rounded-lg border border-gray-300 text-base text-gray-700 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Campo E-mail */}
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="w-80 py-4 px-6 rounded-lg border border-gray-300 text-base text-gray-700 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Checkbox + Label */}
        <label className="flex items-center gap-4 text-base text-gray-700">
          <input
            type="checkbox"
            className="h-6 w-6 accent-blue-600 rounded-full focus:outline-none"
          />
          <span>
            Estou de acordo com a{" "}
            <a href="#" className="text-blue-600 underline">
              Política de Privacidade
            </a>
          </span>
        </label>

        {/* Botão de Cadastro */}
        <button
          type="button"
          className="bg-blue-600 text-white text-base font-semibold py-4 px-10 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Cadastrar
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
