"use client";
import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-[#E7E7EA] w-full h-[510px] flex justify-center items-center">
      {/* Imagens centralizadas lado a lado */}
      <Image
        src="/Rectangle 10.svg"
        alt="Imagem 1"
        width={685}
        height={490}
        className="mx-2"
      />
      <Image
        src="/Grupo 4806.svg"
        alt="Imagem 2"
        width={577}
        height={225}
        className="mx-2"
      />
    </div>
  );
}
