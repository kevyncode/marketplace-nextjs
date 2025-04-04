"use client";
import React from "react";
import Image from "next/image";

const InfoProduct: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8 p-6 mt-20">
      {/* Imagem grande */}
      <div className="w-full md:w-1/2 overflow-hidden mb-4 md:mb-0 bg-[#C2C2C2] h-[600px] flex items-center justify-center">
        <Image
          src="/Free_Mug_Mockup_2.svg" // Caminho correto para a imagem na pasta public
          alt="Imagem do Produto"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Texto à direita */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-left">LOREM IPSUM</h2>
        <p className="text-lg text-gray-700 mb-6 text-left">
          Duis consectetur metus nec lacus auctor dignissim. Mauris vitae
          finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur
          volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra
          magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor
          tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla
          magna consequat interdum. Fusce sagittis elit a libero commodo egestas
          efficitur id augue.
        </p>
        <p className="text-lg text-gray-700 text-left">
          Duis consectetur metus nec lacus auctor dignissim. Mauris vitae
          finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur
          volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra
          magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor
          tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla
          magna consequat interdum. Fusce sagittis elit a libero commodo egestas
          efficitur id augue.
        </p>
      </div>
    </div>
  );
};

export default InfoProduct;
