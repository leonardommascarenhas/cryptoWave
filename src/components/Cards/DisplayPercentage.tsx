import React from "react";
import { BsTriangleFill } from "react-icons/bs";

interface Props {
  num: number;
}

const DisplayPercentage = ({ num }: Props) => {
  return (
    <div className={`flex items-center gap-1 ${num > 0 ? "text-green-600" : "text-red-700"} font-bold`}>
      <BsTriangleFill size={7} className={num > 0 ? "" : "rotate-180"} />
      {num.toFixed(2)}
    </div>
  );
};

export default DisplayPercentage;
