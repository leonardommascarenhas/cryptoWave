import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiPodium } from "react-icons/gi";
import { TbTextPlus } from "react-icons/tb";
import { BsListUl, BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import Logo from "../assets/Logo";
import NestedList from "./NestedList";

interface Props {
  toggleMenu: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu = ({ toggleMenu, setIsActive }: Props) => {
  const [animateClass, setAnimate] = useState<string>("animation-none");
  const criptoMoedasList = [
    { icon: GiPodium, title: "Ranking", iconStyle: "bg-blue-500 pb-1" },
    { icon: TbTextPlus, title: "Adicionado Recentemente", iconStyle: "bg-blue-500", iconSize: 18 },
    { icon: BsGraphUpArrow, title: "Maiores Vencedores", iconStyle: "bg-green-500", iconSize: 15 },
    { icon: BsGraphDownArrow, title: "Maiores Perdas", iconStyle: "bg-red-500", iconSize: 15 },
  ];

  const exchanges = [];

  useEffect(() => {
    if (toggleMenu) {
      setAnimate("animate-leftRight");
    }
    if (animateClass != "animation-none" && !toggleMenu) {
      setAnimate("animate-rightLeft");
    }
  }, [toggleMenu]);

  return (
    <nav
      className={`w-full h-full fixed top-0 left-0 z-20  bg-gray-100 text-lg font-roboto font-medium ${animateClass} fill-mode-forwards`}
    >
      <div className="flex justify-between py-1 pl-1 pr-6 bg-white border-b">
        <Logo />
        <button onClick={() => setIsActive(!toggleMenu)}>
          <AiOutlineClose />
        </button>
      </div>
      <ul>
        <NestedList title={"Criptomoedas"} nestedItems={criptoMoedasList} />
        <NestedList title={"Criptomoedas"} nestedItems={criptoMoedasList} />
        <NestedList title={"Criptomoedas"} nestedItems={criptoMoedasList} />
        <NestedList title={"Criptomoedas"} nestedItems={criptoMoedasList} />
        <NestedList title={"Criptomoedas"} nestedItems={criptoMoedasList} />
      </ul>
    </nav>
  );
};

export default Menu;
