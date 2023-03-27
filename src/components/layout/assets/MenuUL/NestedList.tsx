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
    setIsActive(!isActive);
  };

  return (
    <li className="relative flex flex-col border-b lg:border-none px-6 py-3">
      <div
        className={`flex justify-between items-center cursor-pointer lg:hover:text-blue-500 ${
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
      <ul
        className={`absolute top-8 z-50 transition-all duration-75 ease-in-out bg-white ${
          isActive ? "h-auto" : "h-0 overflow-hidden lg:max-h-96"
        }`}
      >
        {nestedItems.map(({ title, icon: Icon, iconStyle, iconSize }) => (
          <li className="flex items-center gap-4 my-6" key={title}>
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
