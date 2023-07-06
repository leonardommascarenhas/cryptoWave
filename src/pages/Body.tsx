import {useContext} from "react";
import MainTable from "../components/layout/Body/Tables/MainTable";
import CardsDisplay from "../components/layout/Body/Cards/CardBase";
import { QueryContext } from "../App";


const Body = () => {
  const {coinData} = useContext(QueryContext)

  return (
    <main className="flex flex-col items-center justify-center bg-gray-200 dark:bg-dark-800 dark:text-white">
      <CardsDisplay />
      <MainTable coinData={coinData}/>
    </main>
  );
};

export default Body;
