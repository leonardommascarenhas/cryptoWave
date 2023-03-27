import React from "react";
import { GiPodium } from "react-icons/gi";
import { TbTextPlus } from "react-icons/tb";
import { BsListUl, BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import NestedList from "./NestedList";

const MenuUL = () => {
  const criptoMoedasList = [
    { icon: GiPodium, title: "Ranking", iconStyle: "bg-blue-500 pb-1" },
    { icon: TbTextPlus, title: "Adicionado Recentemente", iconStyle: "bg-blue-500", iconSize: 18 },
    { icon: BsGraphUpArrow, title: "Maiores Vencedores", iconStyle: "bg-green-500", iconSize: 15 },
    { icon: BsGraphDownArrow, title: "Maiores Perdas", iconStyle: "bg-red-500", iconSize: 15 },
  ];
  return (
    <ul className="hidden lg:flex gap-5">
      <NestedList title="Criptomoedas" nestedItems={criptoMoedasList} />
      <NestedList title="Criptomoedas" nestedItems={criptoMoedasList} />
      <NestedList title="Criptomoedas" nestedItems={criptoMoedasList} />
    </ul>
  );
};

export default MenuUL;
