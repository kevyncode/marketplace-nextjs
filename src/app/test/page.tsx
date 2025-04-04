import React from "react";
import HeaderPage from "@/app/Components/HeaderPage";
import Banner from "@/app/Components/Banner";
import ProductCarousel from "@/app/Components/ProductCarousel";
import InfoProduct from "@/app/Components/InfoProduct";
import InfoProduct2 from "@/app/Components/InfoProduct2"; // Importação do novo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Seção Cabeçalho Fixa */}
      <div className="fixed top-0 left-0 w-full z-50">
        <HeaderPage />
      </div>

      {/* Espaçamento para compensar o cabeçalho fixo */}
      <div className="h-[130px]" />

      {/* Conteúdo Principal */}
      <section className="ContentSection">
        {/* Banner no topo da seção principal */}
        <div className="flex justify-center">
          <Banner />
        </div>

        {/* Carrossel de produtos centralizado abaixo do banner */}
        <div className="flex justify-center mt-6">
          <div className="w-full max-w-7xl">
            <ProductCarousel />

            <InfoProduct />
          </div>
        </div>

        <div
          className="w-full flex justify-center items-center mt-6 bg-[#DEDEDE]"
          style={{ height: "567px" }}
        >
          {/* Novo Banner */}
          <InfoProduct2 />
        </div>

        <div className="flex justify-center mt-6">
          <InfoProduct />
        </div>

        {/* Restante do conteúdo */}
        <div className="p-6"></div>
      </section>
    </main>
  );
}
