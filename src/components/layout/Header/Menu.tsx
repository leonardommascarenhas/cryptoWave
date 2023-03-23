import { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";

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
    <nav
      className={`-translate-x-full fixed top-0 left-0 w-full h-full z-20 bg-blue-500 ${animateClass} fill-mode-forwards`}
    >
      <ul>
        <li>TESTEEEEEE</li>
        <li>TESTEEEEEE</li>
        <li>TESTEEEEEE</li>
        <li>TESTEEEEEE</li>
        <li>TESTEEEEEE</li>
      </ul>
      <button onClick={() => setIsActive(!toggleMenu)}>
        <AiOutlineClose />
      </button>
    </nav>
  );
};

export default Menu;
