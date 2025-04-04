"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm w-full">
      {/* Container principal */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Linha superior: 4 colunas */}
        <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-4">
          {/* Coluna 1 - Logo e Redes Sociais */}
          <div>
            {/* Logo Avanti */}
            <Image
              src="/Frame 14.svg" // Substitua pelo caminho correto do logo
              alt="Logo Avanti"
              width={120}
              height={40}
              className="mb-4"
            />
            <div className="flex items-center space-x-4">
              {/* Ícone Facebook */}
              <a href="#" aria-label="Facebook">
                <Image
                  src="/Frame 41.svg" // Substitua pelo caminho correto do ícone
                  alt="Facebook"
                  width={126}
                  height={26}
                />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Institucional */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nossas Lojas
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacidade e Segurança
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Canal de ajuda */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Canal de ajuda</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Seja Parceiro
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Frete e Entrega
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Formas de Pagamento
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Atendimento */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Atendimento</h3>
            <p className="mb-1">Telefone: (99) 1234-5678</p>
            <p className="mb-1">E-mail: exemplo@exemplo.com.br</p>
            <p className="mb-1 font-semibold">Horário de atendimento:</p>
            <p className="mb-1">Segunda a Sexta: 09h às 20h</p>
            <p>Domingos e feriados: 09h às 14h</p>
          </div>
        </div>

        {/* Linha inferior: Grupo de ícones */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Image
            src="/Grupo 10397.svg" // Substitua pelo caminho correto do ícone
            alt="Visa"
            width={545}
            height={24}
          />
        </div>
      </div>
      <div className="bg-white text-center px-130 py-8">
        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 mt-4">
          <Image
            src="/Grupo 9962.svg" // Substitua pelo caminho correto do ícone
            alt="Visa"
            width={295}
            height={32}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
