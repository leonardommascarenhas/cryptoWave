import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

interface NestedItem {
  icon: React.ReactNode;
  title: string;
}

interface Props {
  title: string;
  nestedItems: NestedItem[];
  linkOfNestedItem?: string;
}

const NestedList = ({ title, nestedItems, linkOfNestedItem }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <li className=" border-b lg:border-none p-4">
      <div className="flex justify-between items-center">
        {title}
        <AiOutlineDown className="-mt-0.5" />
      </div>
      <ul>
        {nestedItems.map((item) => (
          <li className="flex" key={item.title}>
            {item.icon} <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NestedList;
