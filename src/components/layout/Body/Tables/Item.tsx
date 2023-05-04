import React from "react";

interface Props {
  id: number;
  name: string;
  price: number;
  hourPercentage: number;
  dayPercentage: number;
  weekPercentage: number;
}

const Item = ({ id, name, price, hourPercentage, dayPercentage, weekPercentage }: Props) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{hourPercentage}</td>
      <td>{dayPercentage}</td>
      <td>{weekPercentage}</td>
    </tr>
  );
};

export default Item;
