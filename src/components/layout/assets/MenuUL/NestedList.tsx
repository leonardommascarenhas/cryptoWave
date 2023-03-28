import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface NestedItem {
  icon: IconType;
  title: string;
  iconStyle?: string;
  iconSize?: number;
  linkOfNestedItem?: string;
}

interface Props {
  title: string;
  nestedItems: NestedItem[];
}

const NestedList = ({ title, nestedItems }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActive = () => {
    if (window.innerWidth < 1024) setIsActive(!isActive);
  };

  return (
    <li className="relative group flex flex-col items-center border-b lg:border-none px-6 py-3">
      <div
        className={`lg:group flex justify-between items-center cursor-pointer lg:hover:text-blue-500 ${
          isActive ? "text-blue-500" : ""
        }`}
        onClick={toggleActive}
      >
        {title}
        <div className="lg:hidden">
          <AiOutlineDown
            className={` -mt-0.5 transition-transform duration-150 ease-in-out ${
              isActive ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className="arrow-up"></div>
      <ul
        className={`relative overflow-hidden lg:flex lg:flex-col lg:items-center lg:absolute lg:top-12 lg:bg-white lg:z-30 group-hover:lg:h-auto lg:shadow-2xl transition-all duration-75 ease-in-out before: ${
          isActive ? "h-auto" : "h-0"
        }`}
      >
        {nestedItems.map(({ title, icon: Icon, iconStyle, iconSize }) => (
          <li className="flex items-center w-full gap-4 my-4 px-6" key={title}>
            <div className={`menu-icon ${iconStyle}`}>
              <Icon size={iconSize} />
            </div>
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NestedList;
