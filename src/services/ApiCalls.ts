import axios from "axios";

export const getTrendingCoins = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/search/trending");
  return res.data.coins.splice(0, 3);
};

export const getExchangeRates = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/exchange_rates");
  return res.data;
};

export const getCoinData = async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=desc&sort_by=price_change_percentage_24h&per_page=500&page=1"
  );
  console.log(res.data)
  return res.data.sort(
    (a: any, b: any) => b.price_change_percentage_24h - a.price_change_percentage_24h
  );
};

export const getGlobalCoinData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/global/");
    return res.data
};
