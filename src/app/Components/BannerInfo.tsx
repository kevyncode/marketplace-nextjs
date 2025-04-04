"use client";
import React from "react";
import Image from "next/image";

const BannerInfo: React.FC = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Imagem de fundo */}
      <Image
        src="/image.svg" // Substitua pelo caminho correto da imagem
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Faixa azul com texto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-blue-600 bg-opacity-80 w-full py-4 px-6 text-center">
          <h2 className="text-white text-2xl md:text-4xl">
            Entre em contato conosco e verifique a disponibilidade para sua
            região!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
