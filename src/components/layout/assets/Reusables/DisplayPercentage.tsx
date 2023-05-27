import { BsTriangleFill } from "react-icons/bs";

interface Props {
  num?: number;
}

const DisplayPercentage = ({ num = 0 }: Props) => {
  return (
    <>
      {num !== null ? (
        <div
          className={`flex items-center justify-end gap-1 ${
            num == 0 ? "dark:text-white" : num > 0 ? "text-green-600" : "text-red-700"
          } font-bold`}
        >
          <BsTriangleFill size={7} className={num == 0 ? "hidden" : num > 0 ? "" : "rotate-180"} />
          {num?.toFixed(2)}
        </div>
      ) : (
        <span className="text-gray-500">0</span>
      )}
    </>
  );
};

export default DisplayPercentage;
