import React from "react";
import Image from "next/image";
import Logo from "@/images/Carmax.svg";

export const Footer = () => {
  return (
    <div className="w-full bg-slate-600">
      <div className="w-10/12 grid">
        <div className="w-28 h-14">
          <Image src={Logo} alt="carMax logo" />
        </div>
      </div>
    </div>
  );
};
