import React from "react";
import { GiBigWave, GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex items-center px-4 py-2 border-b-2 justify-between">
      <div>
        <a className="flex items-center font-roboto font-semibold text-lg">
          <GiBigWave className="text-blue-500 h-14 w-14 px-1.5 py-2 mb-1 rounded-full" />
          CryptoWave
        </a>
      </div>
      <div className="flex gap-4">
        <BsSearch />
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
