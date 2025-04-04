"use client";
import React from "react";
import Image from "next/image";

const InfoProduct2: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
      {/* Texto e ícones à esquerda */}
      <div
        className="flex flex-col items-center justify-center rounded-lg p-6"
        style={{ width: "476px", height: "567px" }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">LOREM IPSUM</h2>

        <div className="flex gap-6 mb-6 justify-center items-center">
          <Image
            src="/Circulo e Icone.svg"
            alt="Ícone 1"
            width={90}
            height={90}
          />
          <p className="text-base text-gray-700 leading-relaxed">
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
        </div>

        <div className="flex gap-6 mb-6 justify-center items-center">
          <Image
            src="/Circulo e Icone.svg"
            alt="Ícone 2"
            width={90}
            height={90}
          />
          <p className="text-base text-gray-700 leading-relaxed">
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
        </div>

        <div className="flex gap-6 mb-6 justify-center items-center">
          <Image
            src="/Circulo e Icone.svg"
            alt="Ícone 3"
            width={90}
            height={90}
          />
          <p className="text-base text-gray-700 leading-relaxed">
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </p>
        </div>
      </div>

      {/* Imagem à direita */}
      <div className="md:w-2/3 flex items-center justify-center">
        <Image
          src="/segundo banner.svg"
          alt="Imagem do Banner"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default InfoProduct2;
