import React from "react";
import Item from "./Item";

const MainTable = () => {
  return (
    <table className="dark:text-white">
      <colgroup></colgroup>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>1h%</th>
          <th>24h%</th>
          <th>7d%</th>
          <th>Market cap</th>
          <th>Volume(24h)</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default MainTable;
