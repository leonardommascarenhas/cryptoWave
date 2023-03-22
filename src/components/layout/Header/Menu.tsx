import React from "react";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";

interface Props {
  toggleMenu: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu = ({ toggleMenu, setIsActive }: Props) => {
  return (
    <>
      {toggleMenu ? (
        <nav className="fixed top-0 left-0 w-full h-full z-20 bg-blue-500">
          <ul>
            <li>TESTEEEEEE</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button onClick={() => setIsActive(!toggleMenu)}>
            <AiOutlineClose />
          </button>
        </nav>
      ) : null}
    </>
  );
};

export default Menu;
