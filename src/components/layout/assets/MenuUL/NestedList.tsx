import { useEffect, useState, useRef } from "react";
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
  const node = useRef<HTMLLIElement>(null);

  const toggleActive = () => {
    if (window.innerWidth < 1024) setIsActive(!isActive);
  };

  const handleClick = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <li
      className="relative group flex flex-col py-3 px-6 lg:h-full lg:justify-center lg:items-center border-b border-gray-700 lg:border-none dark:text-white cursor-pointer"
      ref={node}
    >
      <div
        className={`lg:group flex justify-between items-center cursor-pointer lg:hover:text-blue-500 ${
          isActive ? "text-blue-500" : ""
        }`}
        onClick={toggleActive}
      >
        {title}
        <div className="lg:hidden">
          <AiOutlineDown
            className={`-mt-0.5 transition-transform duration-150 ease-in-out ${
              isActive ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className="hidden group-hover:block absolute -bottom-0 arrow-up  border-b-gray-50 dark:border-b-dark-700"></div>
      <ul
        className={`relative overflow-hidden lg:flex lg:flex-col lg:items-center lg:absolute lg:top-16 lg:bg-white lg:z-30 group-hover:lg:h-auto lg:shadow-md transition-all duration-75 ease-in-out dark:lg:bg-dark-800  ${
          isActive ? "h-auto" : "h-0"
        }`}
      >
        {nestedItems.map(({ title, icon: Icon, iconStyle, iconSize }) => (
          <li
            className="hidden group-hover:flex items-center w-full gap-4 py-4 lg:px-6 hover:bg-gray-200 dark:hover:bg-gray-600"
            key={title}
          >
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
