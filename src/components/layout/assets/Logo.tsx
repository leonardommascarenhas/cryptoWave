import React from "react";
import { GiBigWave } from "react-icons/gi";

const Logo = () => {
  return (
    <div>
      <a className="flex items-center font-roboto font-semibold text-lg cursor-pointer ">
        <GiBigWave className="text-blue-500 h-14 w-14 px-1.5 py-2 mb-1 rounded-full" />
        CryptoNami
      </a>
    </div>
  );
};

export default Logo;
