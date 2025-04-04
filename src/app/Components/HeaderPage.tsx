"use client";

import React, { useState } from "react";
import Image from "next/image";
import PromotionAlert from "@/app/Components/PromotionAlert";
import SearchInput from "@/app/Components/SearchInput";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CardFlutuant from "@/app/Components/CardFlutuant";

export default function HeaderPage() {
  const cartItemCount = 7; // Exemplo de quantidade de itens no carrinho
  const [hoverMenu, setHoverMenu] = useState(false); // estado de hover

  const departments = [
    "Eletrônicos",
    "Roupas",
    "Alimentos",
    "Livros",
    "Brinquedos",
    "Esportes",
    "Beleza",
    "Automóveis",
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* PromotionAlert */}
      <PromotionAlert
        message={
          <>
            Ganhe <span className="bg-purple-500 px-1 rounded">R$10,00</span> de
            desconto no seu primeiro pedido. Utilize o cupom{" "}
            <span className="italic font-extralight">DESCONTO10</span>
          </>
        }
      />
      <div className="mb-4"></div>

      <section className="MenuSection relative w-full">
        {/* ===================== VERSÃO MOBILE ===================== */}
        {/* Aparece somente em telas menores que "sm" */}
        <div className="flex flex-col sm:hidden p-3 bg-white">
          {/* Linha com [Menu, Logo, Carrinho] */}
          <div className="flex items-center justify-between w-full">
            {/* Botão/Menu */}
            <div className="flex items-center gap-2">
              <MenuIcon className="text-black" style={{ fontSize: 28 }} />
              <span className="text-base font-medium text-black">Menu</span>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </div>

            {/* Ícone de carrinho */}
            <div className="relative">
              <LocalGroceryStoreOutlinedIcon
                className="text-black"
                style={{ fontSize: 28 }}
              />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>

          {/* Campo de pesquisa ocupando toda a largura abaixo */}
          <div className="mt-3">
            <SearchInput />
          </div>
        </div>

        {/* ===================== VERSÃO DESKTOP ===================== */}
        {/* Aparece somente em telas "sm" ou maiores */}
        <div className="hidden sm:flex flex-col items-center justify-center h-full p-3 mt-2">
          {/* Linha superior com Logo, Pesquisa e Carrinho */}
          <div className="flex flex-row items-center justify-center w-full">
            {/* Logo */}
            <div className="flex items-center pr-12">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-9 w-auto"
              />
            </div>

            {/* Input de pesquisa */}
            <div className="w-full max-w-2xl">
              <SearchInput />
            </div>

            {/* Ícone de perfil com texto */}
            <div className="flex items-center gap-6 pl-120">
              <div className="flex items-center gap-2">
                <PermIdentityOutlinedIcon
                  className="text-blue-600"
                  style={{ fontSize: 32 }}
                />
                <span className="text-sm font-medium text-black">
                  Olá, <br />
                  Nome Cliente!
                </span>
              </div>

              {/* Ícone de carrinho com bolinha */}
              <div className="relative">
                <LocalGroceryStoreOutlinedIcon
                  className="text-black"
                  style={{ fontSize: 31 }}
                />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Menu Hamburguer + Departamentos + CardFlutuant */}
          <div
            className="relative flex flex-row items-center justify-center w-full mt-4 gap-26"
            onMouseEnter={() => setHoverMenu(true)}
            onMouseLeave={() => setHoverMenu(false)}
          >
            {/* Menu Hamburguer */}
            <div className="flex items-center gap-2 cursor-pointer text-black hover:text-blue-600 focus:text-blue-600">
              <MenuIcon style={{ fontSize: 24 }} />
              <span className="text-xl font-medium">Todas as categorias</span>
            </div>

            {/* Departamentos */}
            <ul className="flex flex-row items-center gap-22">
              {departments.map((department, index) => (
                <li
                  key={index}
                  className="text-xl font-medium text-gray-700 cursor-pointer hover:text-blue-600 focus:text-blue-600"
                >
                  {department}
                </li>
              ))}
            </ul>

            {/* CardFlutuant flutuante */}
            {hoverMenu && (
              <div className="absolute top-full z-40 pl-45 pr-45">
                <CardFlutuant />
              </div>
            )}
          </div>
        </div>
      </section>
    </header>
  );
}
