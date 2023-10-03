"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Logo from "@/images/Carmax.svg";

// navigation link
const navlink = [
  {
    id: "new",
    title: "New cars",
    href: "#",
  },
  {
    id: "used",
    title: "Used cars",
    href: "#",
  },
  {
    id: "auction",
    title: "Auction",
    href: "#",
  },
  {
    id: "sell",
    title: "Sell cars",
    href: "#",
  },
  {
    id: "local",
    title: "Local dealers",
    href: "#",
  },
  {
    id: "support",
    title: "Support",
    href: "#",
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("New cars");
  const handleNavlinkCkick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header>
      <nav className="flex mx-auto h-16 lg:pr-5 items-center justify-between relative border-b border-slate-200">
        {/* <div className="flex  w-36 h-14 overflow-hidden"> */}
        <Link href="#" className="w-36">
          <Image
            src={Logo}
            alt="carMax logo"
          />
        </Link>
        {/* </div> */}
        {/* mobile toggle icons */}
        <div className="lg:hidden flex pr-5">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
        {/* navigation links  */}
        <div className="hidden lg:inline-flex gap-x-5">
          {navlink.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              className={`text-base font-semibold leading-6 text-gray-900n 
                ${active === nav.title ? "text-blue-600" : ""} 
              `}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link
            href="#"
            className="inline-flex items-center gap-1 py-1 px-2 text-base font-semibold leading-7 text-white bg-blue-600 rounded "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AccountCircleIcon />
            Sign Up
          </Link>
        </div>
      </nav>

      {/* mobile navigation  */}
      <div
        className={`lg:hidden absolute w-full bg-gray-100 justify-center items-center text-left py-2
        ${mobileMenuOpen ? "flex flex-col z-50" : "hidden"}
        `}
      >
        <div className="flex flex-col">
          {navlink.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              className="text-lg font-medium leading-6 text-gray-800  py-2 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="">
          <Link
            href="#"
            className="inline-flex items-center gap-1 py-2 px-5 text-base font-semibold leading-7 text-white bg-blue-600 rounded "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AccountCircleIcon />
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};
