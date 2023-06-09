import React from "react";
import MainTable from "./Tables/MainTable";
import CardsDisplay from "./Cards/CardBase";

const Body = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-200 dark:bg-dark-800 dark:text-white">
      <CardsDisplay />
      <MainTable />
    </main>
  );
};

export default Body;
