"use client";

import Image from "next/image";
import { MainNav } from "./main-nav";
import { useState } from "react";
import HamburgerMenu from "./hamburger";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 bg-[#f5eedc]">
      <div className="flex h-20 items-center md:px-10 px-4 justify-between max-[650px]:justify-center relative">
        <div className="max-[650px]:hidden">
          <MainNav className="text-base" />
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="h-20 w-auto object-cover"
          />
        </div>
        <div className="max-[650px]:hidden">
          <Link href="#" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-auto px-3 py-2 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Contact Us</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>
      </div>
      <div className="absolute top-4 right-2 min-[650px]:hidden">
        <button className="relative group" onClick={() => setOpen(true)}>
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#d9d1b6]">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-black h-[2px] w-7"></div>
              <div className="bg-black h-[2px] w-1/2 rounded"></div>
              <div className="bg-black h-[2px] w-7"></div>
            </div>
          </div>
        </button>
      </div>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
