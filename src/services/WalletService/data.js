export default {
  balance: {
    btc: 0.5,
    usd: 22.776,
  },
  currencies: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      icon: require("../../../assets/images/cryptos/btc.svg"),
      color: "#f7931a",
      price: 44589.1,
      amount: 0.5,
    },

    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      icon: require("../../../assets/images/cryptos/eth.svg"),
      color: "#8C8C8C",
      price: 3120.1,
      amount: 6,
    },
  ],
  weekEarning: 5000,
  todayEarning: 300,
  earningHistory: [
    50, 10, 40, 95, -4, -24, 85, 2, 35, 53, -53, 24, 50, -20, -80,
  ],
};
