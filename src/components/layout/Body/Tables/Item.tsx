import React from "react";

interface Props {
  name: string;
  price: number;
  hourPercentage: number;
  dayPercentage: number;
  weekPercentage: number;
}

const Item = ({ name, price, hourPercentage, dayPercentage, weekPercentage }: Props) => {
  return <div>Item</div>;
};

export default Item;
