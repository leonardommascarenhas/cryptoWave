import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import Select from "react-select";

const CurrencySelect = () => {
  const { currency, setCurrency, setCurrencySymbol } = useContext(AppContext);

  const handleCurrencyChange = (selectedOption: any, actionMeta: any) => {
    setCurrency(selectedOption.value);
  };

  const options = [
    { value: "brl", label: "BRL" },
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
  ];

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
    <div className="flex-grow lg:grow-0">
      <Select
        value={{ value: currency, label: currency.toUpperCase() }}
        options={options}
        onChange={handleCurrencyChange}
        menuPlacement="bottom"
        menuPosition="absolute"
      />
    </div>
  );
};

export default CurrencySelect;
