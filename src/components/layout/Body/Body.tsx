import React from "react";
import MainTable from "./Tables/MainTable";
import CardsDisplay from "./Cards/CardBase";

const Body = () => {
  return (
    <main className="px-4">
      <CardsDisplay />
      <MainTable />
    </main>
  );
};

export default Body;
