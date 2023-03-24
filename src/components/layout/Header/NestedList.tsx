import { useState } from "react";
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
  return (
    <li className=" border-b lg:border-none px-6">
      <div className="flex justify-between items-center">
        {title}
        <AiOutlineDown className="-mt-0.5" />
      </div>
      <ul className="mt-4">
        {nestedItems.map(({ title, icon: Icon, iconStyle, iconSize }) => (
          <li className="flex items-center my-3" key={title}>
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
