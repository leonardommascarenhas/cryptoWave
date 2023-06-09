import { GiBigWave } from "react-icons/gi";

const Logo = () => {
  return (
    <div>
      <a className="flex items-center font-semibold text-lg cursor-pointer ">
        <GiBigWave className="text-blue-500 h-14 w-14 px-1.5 py-2 mb-1 rounded-full" />
        <span className="dark:text-white">CryptoNami</span>
      </a>
    </div>
  );
};

export default Logo;
