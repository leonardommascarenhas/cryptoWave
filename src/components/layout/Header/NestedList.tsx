import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface NestedItem {
  icon: IconType;
  title: string;
  iconStyle?: string;
  iconSize?: number;
}

interface Props {
  title: string;
  nestedItems: NestedItem[];
  linkOfNestedItem?: string;
}

const NestedList = ({ title, nestedItems, linkOfNestedItem }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="border-b lg:border-none px-6 py-3">
      <div
        className={`flex justify-between items-center cursor-pointer ${isActive ? "text-blue-500" : ""}`}
        onClick={toggleActive}
      >
        {title}
        <AiOutlineDown
          className={`-mt-0.5 transition-transform duration-150 ease-in-out ${
            isActive ? "transform rotate-180" : ""
          }`}
        />
      </div>
      <ul
        className={`overflow-hidden transition-all duration-75 ease-in-out ${
          isActive ? "max-h-96" : "max-h-0"
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
