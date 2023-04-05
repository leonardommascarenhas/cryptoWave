import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import Logo from "./assets/Logo";
import MenuUL from "./assets/MenuUL/MenuUL";
import ThemeToggle from "../Buttons&Selects/ThemeToggle";
import CurrencySelect from "../Buttons&Selects/CurrencySelect";

interface Props {
  toggleMenu: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu = ({ toggleMenu, setIsActive }: Props) => {
  const [animateClass, setAnimate] = useState<string>("animation-none");

  useEffect(() => {
    if (toggleMenu) {
      setAnimate("animate-leftRight");
    }
    if (animateClass != "animation-none" && !toggleMenu) {
      setAnimate("animate-rightLeft");
    }
  }, [toggleMenu]);

  return (
    <div
      className={`-translate-x-full min-h-screen flex flex-col items-center w-full absolute top-0 left-0 z-50 bg-gray-100 text-lg font-roboto font-medium ${animateClass} lg:animate-rightLeft lg:hidden fill-mode-forwards dark:bg-dark-650`}
    >
      <div className="w-full flex justify-between py-1 pl-1 pr-6 border-b">
        <Logo />
        <button onClick={() => setIsActive(!toggleMenu)} className="text-white">
          <AiOutlineClose />
        </button>
      </div>
      <MenuUL />
      <div className="my-4 px-4 w-full h-8 flex items-center gap-3">
        <div className="relative">
          <CurrencySelect />
        </div>
        <ThemeToggle />
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/leonardommascarenhas">
          <AiOutlineGithub className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-moura-b315a4154/">
          <BsLinkedin className="social-icon" />
        </a>
        <a href="https://www.instagram.com/leonardommascarenhas/">
          <AiOutlineInstagram className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
