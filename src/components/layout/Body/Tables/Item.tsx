import React from "react";

interface Props {
  icon: string;
  name: string;
  price: number;
  hourPercentage: number;
  dayPercentage: number;
  weekPercentage: number;
  circulatingSupply: number;
}

const Item = ({
  icon,
  name,
  price,
  hourPercentage,
  dayPercentage,
  weekPercentage,
  circulatingSupply,
}: Props) => {
  return (
    <tr>
      <td>
        <img src={icon} />
        {name}
      </td>
      <td>{price}</td>
      <td>{hourPercentage}</td>
      <td>{dayPercentage}</td>
      <td>{weekPercentage}</td>
      <td>{circulatingSupply}</td>
    </tr>
  );
};

export default Item;
