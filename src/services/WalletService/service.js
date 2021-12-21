import baseAPI from "../index";
import data from "./data";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default class WalletService {
  static getData = async () => {
    // Simulate network
    await delay(300);

    return {
      data: {
        balance: data.balance,
        currencies: data.currencies,
        weekEarning: data.weekEarning,
        todayEarning: data.todayEarning,
        earningHistory: data.earningHistory,
      },
    };
  };
}
