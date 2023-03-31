import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../assets/Logo";
import MenuUL from "../assets/MenuUL/MenuUL";
import ThemeToggle from "../../Buttons&Selects/ThemeToggle";

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
      className={`-translate-x-full w-full min-h-full fixed top-0 left-0 z-50 bg-gray-100 text-lg font-roboto font-medium ${animateClass} lg:animate-rightLeft lg:hidden fill-mode-forwards dark:bg-dark-650`}
    >
      <div className="flex justify-between py-1 pl-1 pr-6 border-b">
        <Logo />
        <button onClick={() => setIsActive(!toggleMenu)}>
          <AiOutlineClose />
        </button>
      </div>
      <MenuUL />
      <ThemeToggle />
    </div>
  );
};

export default Menu;
