import { useContext } from "react";
import { ThemeContext } from "../../App";

const CurrencySelect = () => {
  const { currency, setCurrency } = useContext(ThemeContext);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <select value={currency} onChange={handleCurrencyChange}>
      <option value="brl">BRL</option>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
    </select>
  );
};

export default CurrencySelect;
