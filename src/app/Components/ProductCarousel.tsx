"use client";

import React from "react";
import Slider from "react-slick";
import ProductCard from "@/app/Components/ProductCard"; // Importando o componente ProductCard

// Tipos de Props para personalizar se quiser
type Product = {
  id: number;
  imageUrl: string;
  isNew?: boolean;
  title: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
  installmentPrice: number;
  installmentCount: number;
};

const mockProducts: Product[] = [
  {
    id: 1,
    imageUrl: "/2j0a2073 1.svg",
    isNew: true,
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elt",
    originalPrice: 79.9,
    discountPrice: 59.9,
    discountPercentage: 20,
    installmentPrice: 7.9,
    installmentCount: 6,
  },
  {
    id: 2,
    imageUrl: "/2j0a2073 1.svg",
    isNew: true,
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elt",
    originalPrice: 79.9,
    discountPrice: 59.9,
    discountPercentage: 20,
    installmentPrice: 7.9,
    installmentCount: 6,
  },
  {
    id: 3,
    imageUrl: "/2j0a2073 1.svg",
    isNew: true,
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elt",
    originalPrice: 79.9,
    discountPrice: 59.9,
    discountPercentage: 20,
    installmentPrice: 7.9,
    installmentCount: 6,
  },
  {
    id: 4,
    imageUrl: "/2j0a2073 1.svg",
    isNew: true,
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elt",
    originalPrice: 79.9,
    discountPrice: 59.9,
    discountPercentage: 20,
    installmentPrice: 7.9,
    installmentCount: 6,
  },
  {
    id: 5,
    imageUrl: "/2j0a2073 1.svg",
    isNew: true,
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elt",
    originalPrice: 79.9,
    discountPrice: 59.9,
    discountPercentage: 20,
    installmentPrice: 7.9,
    installmentCount: 6,
  },
  {
    id: 6,
    imageUrl: "/2j0a2073 1.svg",
    isNew: true,
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elt",
    originalPrice: 79.9,
    discountPrice: 59.9,
    discountPercentage: 20,
    installmentPrice: 7.9,
    installmentCount: 6,
  },
  // Adicione quantos quiser...
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-next`}
      style={{ ...style, display: "block", right: "10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow slick-prev`}
      style={{ ...style, display: "block", left: "10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

const ProductCarousel: React.FC = () => {
  // Configurações do carrossel
  const settings = {
    dots: true, // bolinhas de navegação embaixo
    infinite: false, // se quiser que o slider seja infinito, coloque true
    speed: 500,
    slidesToShow: 5, // quantos cards aparecem por vez
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // em telas menores que 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // em telas menores que 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // em telas menores que 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full my-8">
      {/* Cabeçalho da seção */}
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-xl font-bold">Lançamentos</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm">
          Ver mais
        </a>
      </div>

      {/* Slider com os produtos */}
      <div className="px-4">
        <Slider {...settings}>
          {mockProducts.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard
                imageUrl={product.imageUrl}
                isNew={product.isNew}
                title={product.title}
                originalPrice={product.originalPrice}
                discountPrice={product.discountPrice}
                discountPercentage={product.discountPercentage}
                installmentPrice={product.installmentPrice}
                installmentCount={product.installmentCount}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCarousel;
