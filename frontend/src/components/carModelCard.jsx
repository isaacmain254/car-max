import React from "react";
import Image from "next/image";


export const CarModelCard = ({ src, alt, model, total }) => {
  return (
    <div className="lg:w-64 mx-3 border border-slate-300 rounded-md">
      <div className="w-64 h-52 rounded-md overflow-hidden">
        <Image
          src={src}
          width={256}
          height={224}
          alt={alt}
          className="object-cover"
        />
      </div>
      <p className="font-bold text-lg pb-2 pt-4  px-1 text-center">{model}</p>
      <p className="font-light text-sm px-1 text-center">{total} vehicles</p>
    </div>
  );
};
