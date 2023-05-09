import React from "react";
import MainTable from "./Tables/MainTable";
import CardsDisplay from "./Cards/CardBase";

const Body = () => {
  return (
    <main className="px-4 dark:bg-dark-650 dark:text-white">
      <CardsDisplay />
      <MainTable />
    </main>
  );
};

export default Body;
