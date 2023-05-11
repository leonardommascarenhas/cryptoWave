import axios from "axios";

export const getTrendingCoins = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
  return res.data.coins.splice(0, 3);
};

export const getExchangeRates = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/exchange_rates");
  return res.data;
};

export const getCoinData = async (currency:any) => {
  const res = await axios.get(
   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
  );
  return res.data
};

export const getGlobalCoinData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/global/");
    return res.data
};
