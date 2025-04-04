import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-4xl">
      {/* Input de pesquisa */}
      <input
        type="text"
        placeholder="Digite aqui o que você procura"
        className="w-full h-12 pl-4 pr-10 text-sm border border-gray-300 rounded-[10px] placeholder-black bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
      />
      {/* Ícone no lado direito */}
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <SearchIcon className="text-black" />
      </div>
    </div>
  );
}
