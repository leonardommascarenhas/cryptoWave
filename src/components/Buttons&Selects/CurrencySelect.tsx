import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";

const CurrencySelect = () => {
  const { currency, setCurrency, setCurrencySymbol } = useContext(AppContext);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    switch (currency) {
      case "usd":
        setCurrencySymbol("$");
        break;
      case "eur":
        setCurrencySymbol("€");
        break;
      case "brl":
      default:
        setCurrencySymbol("R$");
        break;
    }
  }, [currency]);

  return (
    <div>
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="brl">BRL</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
      </select>
    </div>
  );
};

export default CurrencySelect;
