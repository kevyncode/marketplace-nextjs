import React from "react";
import Image from "next/image";

type ProductCardProps = {
  imageUrl: string;
  isNew?: boolean;
  title: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
  installmentPrice: number;
  installmentCount: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  isNew = false,
  title,
  originalPrice,
  discountPrice,
  discountPercentage,
  installmentPrice,
  installmentCount,
}) => {
  return (
    <div className="w-60 rounded-xl border border-gray-200 bg-white p-4 flex flex-col relative">
      {/* Selo "Novo" */}
      {isNew && (
        <span className="absolute top-2 left-2 bg-[#00264E] text-white text-xs font-bold px-2 py-1 rounded z-10">
          NOVO
        </span>
      )}

      {/* Imagem do produto utilizando next/image */}
      <div className="mb-3 w-40 h-40 relative mx-auto">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* Título */}
      <h3 className="text-sm font-semibold text-start mb-2">{title}</h3>

      {/* Preço original e desconto */}
      <div className="flex flex-col items-start mb-2">
        <span className="text-gray-500 line-through text-sm">
          R${originalPrice.toFixed(2)}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">
            R${discountPrice.toFixed(2)}
          </span>
          <span className="text-green-600 text-sm font-semibold mb-3.5">
            ({discountPercentage}% OFF)
          </span>
        </div>
      </div>

      {/* Parcelamento */}
      <p className="text-xs text-gray-500">
        ou em até {installmentCount}x R${installmentPrice.toFixed(2)}
      </p>

      {/* Botão "Comprar" */}
      <button
        type="button"
        className="mt-4 w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Comprar
      </button>
    </div>
  );
};

export default ProductCard;
