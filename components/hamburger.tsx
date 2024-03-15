import { Dispatch, SetStateAction } from "react";
import { MainNav } from "./main-nav";
import Link from "next/link";

interface HamburgerMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ open, setOpen }) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ${
          open ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-0 w-full h-full bg-[#f5eedc] z-50 transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4"
        >
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left rotate-[42deg]"></div>
            <div className="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left -rotate-[42deg]"></div>
          </div>
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          <MainNav className="flex flex-col gap-3 space-x-0 text-xl font-bold" />
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
    </div>
  );
};

export default HamburgerMenu;
