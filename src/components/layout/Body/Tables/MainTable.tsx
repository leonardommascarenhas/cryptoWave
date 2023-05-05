import React from "react";
import Item from "./Item";

const MainTable = () => {
  return (
    <div className="overflow-x-scroll">
      <table className="table-fixed [&_tr>:first-child]:sticky [&_tr>:first-child]:left-0 [&_tr>:first-child]:z-10">
        <thead>
          <tr>
            <th className="bg-white p-3">name</th>
            <th className="">Price</th>
            <th className="">1h%</th>
            <th className="">24h%</th>
            <th className="">7d%</th>
            <th className="">Market</th>
            <th className="">Volume(24h)</th>
            <th className="">Circulating</th>
            <th className="">Circulating</th>
            <th className="">Circulating</th>
            <th className="">Circulating</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default MainTable;
