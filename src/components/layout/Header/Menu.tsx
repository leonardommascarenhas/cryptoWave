import { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import { FaUser, FaHome, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/Logo";
import NestedList from "./NestedList";

interface Props {
  toggleMenu: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu = ({ toggleMenu, setIsActive }: Props) => {
  const [animateClass, setAnimate] = useState<string>("animation-none");
  const nestedItems = [
    { icon: <FaUser />, title: "User Profile" },
    { icon: <FaHome />, title: "Home Page" },
    { icon: <FaEnvelope />, title: "Contact Us" },
  ];

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
      <div className="flex justify-between p-1 bg-white border-b">
        <Logo />
        <button onClick={() => setIsActive(!toggleMenu)}>
          <AiOutlineClose />
        </button>
      </div>
      <ul>
        <NestedList title={"Criptomoedas"} nestedItems={nestedItems} />
      </ul>
    </nav>
  );
};

export default Menu;
