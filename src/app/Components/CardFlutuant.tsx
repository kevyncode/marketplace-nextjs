"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Função auxiliar para dividir um array em "n" pedaços (ex.: 3 colunas)
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

type Department = {
  name: string;
  categories: string[];
};

export default function CardFlutuant() {
  // Lista de departamentos, cada um com suas categorias
  const departments: Department[] = [
    {
      name: "Eletrônicos",
      categories: [
        "Celulares",
        "TVs",
        "Notebooks",
        "Tablets",
        "Câmeras",
        "Video Games",
        "Acessórios",
        "Áudio",
        "Smartwatches",
        "Drones",
        "Impressoras",
        "Monitores",
        "Headsets",
        "Redes",
        "Automação",
      ],
    },
    {
      name: "Roupas",
      categories: [
        "Masculino",
        "Feminino",
        "Infantil",
        "Calçados",
        "Acessórios",
        "Moda Praia",
        "Moda Íntima",
        "Bolsas",
        "Chapéus",
        "Jaquetas",
        "Camisas",
        "Pijamas",
        "Saias",
        "Vestidos",
      ],
    },
    {
      name: "Alimentos",
      categories: [
        "Congelados",
        "Frios",
        "Bebidas",
        "Cereais",
        "Lanches",
        "Carnes",
        "Grãos",
        "Hortifrúti",
        "Doces",
        "Biscoitos",
        "Molhos",
        "Temperos",
        "Massas",
        "Bebidas Quentes",
      ],
    },
    {
      name: "Livros",
      categories: [
        "Ficção",
        "Não-Ficção",
        "Romance",
        "Suspense",
        "Terror",
        "Biografias",
        "HQs",
        "Mangás",
        "Autoajuda",
        "Educação",
        "Infantil",
        "Literatura Nacional",
        "Literatura Estrangeira",
        "Arte",
        "Ciência",
      ],
    },
  ];

  // Estado que armazena o índice do departamento sobre o qual estamos passando o mouse
  const [hoveredDeptIndex, setHoveredDeptIndex] = useState<number | null>(null);

  // Se algum departamento estiver "hovered", pegamos as categorias dele; caso contrário, array vazio
  const hoveredCategories =
    hoveredDeptIndex !== null ? departments[hoveredDeptIndex].categories : [];

  // Dividimos as categorias em 3 colunas (cada coluna com até 5 itens).
  const categoryChunks = chunkArray(hoveredCategories, 5);

  return (
    <div className="bg-white shadow-md p-6 w-full border border-gray-300">
      {/* Grid de 5 colunas:
          1) Departamentos
          2) Coluna de Categorias
          3) Coluna de Categorias
          4) Coluna de Categorias
          5) Imagem Promo */}
      <div className="grid grid-cols-5 gap-8">
        {/* Coluna 1: Departamentos */}
        <div
          onMouseLeave={() => setHoveredDeptIndex(null)} // Quando o mouse sai da coluna de departamentos, limpamos o hovered
        >
          <h2 className="text-black font-bold mb-4">Departamento</h2>
          <ul className="space-y-3 text-gray-700">
            {departments.map((dept, index) => (
              <li
                key={dept.name}
                className="flex items-center cursor-pointer hover:text-blue-600"
                onMouseEnter={() => setHoveredDeptIndex(index)}
              >
                <span>{dept.name}</span>
                <ArrowForwardIosIcon className="ml-2 text-xs" />
              </li>
            ))}
          </ul>
        </div>

        {/* Colunas 2, 3 e 4: Categorias do departamento selecionado */}
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex}>
            <h2 className="text-black font-bold mb-4">Categoria</h2>
            <ul className="space-y-3 text-gray-700">
              {categoryChunks[colIndex]?.map((cat, i) => (
                <li key={i} className="cursor-pointer hover:text-blue-600">
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Coluna 5: Imagem promocional / Destaque */}
        <div className="relative">
          <Image
            src="/Grupo 21641.svg" // Caminho atualizado para a nova imagem
            alt="Imagem promocional"
            width={280}
            height={280}
            className="object-cover w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}
