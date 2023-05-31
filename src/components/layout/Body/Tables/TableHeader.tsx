import React from "react";

interface Props {
  handleSort: (key: string) => void;
}

const TableHeader = ({ handleSort }: Props) => {
  return (
    <thead>
      <tr className="py-4 [&>*]:py-4 [&>*:first-child]:pl-6 [&>*:last-child]:pr-3 [&>*]:border-b [&>*]:border-gray-700 [&>*]:cursor-pointer">
        <th className="text-left border-b border-gray-700" onClick={() => handleSort("name")}>
          Name
        </th>
        <th onClick={() => handleSort("current_price")}>Price</th>
        <th onClick={() => handleSort("price_change_percentage_1h_in_currency")}>1h%</th>
        <th onClick={() => handleSort("price_change_percentage_24h_in_currency")}>24h%</th>
        <th onClick={() => handleSort("price_change_percentage_7d_in_currency")}>7d%</th>
        <th onClick={() => handleSort("market_cap")}>Market Cap</th>
        <th onClick={() => handleSort("market_cap_change_24h")}>Volume(24h)</th>
        <th onClick={() => handleSort("total_supply")}>Circulating Supply</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
