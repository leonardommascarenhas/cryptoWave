import React from "react";
import { GiBigWave } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {
  return (
    <header className="flex items-center px-2 py-2 border-b justify-between">
      <div>
        <a className="flex items-center font-roboto font-semibold text-lg cursor-pointer ">
          <GiBigWave className="text-blue-500 h-14 w-14 px-1.5 py-2 mb-1 rounded-full" />
          CryptoWave
        </a>
      </div>
      <div className="flex items-center gap-4">
        <HiMagnifyingGlass className="header-icon" />
        <AiOutlineLogin className="header-icon" />
        <RxHamburgerMenu className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
