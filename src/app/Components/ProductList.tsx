import React from "react";
import ProductCard from "./ProductCard";

const mockProducts = [
  {
    id: 1,
    imageUrl: "/2j0a2073 1.svg",
    isNew: true,
    title: "Produto Exemplo 1",
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
    title: "Produto Exemplo 2",
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
    title: "Produto Exemplo 3",
    originalPrice: 79.9,
    discountPrice: 59.9,
    discountPercentage: 20,
    installmentPrice: 7.9,
    installmentCount: 6,
  },
  // Adicione mais produtos se necessário
];

const ProductList: React.FC = () => {
  return (
    <section className="my-8">
      {/* Cabeçalho da seção */}
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-xl font-bold">Lançamentos</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm">
          Ver mais
        </a>
      </div>

      {/* Lista de produtos (horizontal scroll simples) */}
      <div className="overflow-x-auto px-4">
        <div className="flex space-x-4">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              isNew={product.isNew}
              title={product.title}
              originalPrice={product.originalPrice}
              discountPrice={product.discountPrice}
              discountPercentage={product.discountPercentage}
              installmentPrice={product.installmentPrice}
              installmentCount={product.installmentCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
