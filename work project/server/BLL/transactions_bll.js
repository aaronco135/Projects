const trsc_dal = require("../DAL/transactions_dal");
const user_dal = require("../DAL/user_dal");

const Get_all_user_market_order = async (userId) => {
  try {
    const transactions = await trsc_dal.GetTransactionsById(userId);
    return transactions;
  } catch (error) {
    console.error("failed to get transactions", error);
    throw new Error("failed to get transactions");
  }
};

const Create_market_order = async (order) => {
  try {
    const { userId, type, indice, usd_price, amount } = order;  

    // 1. save  transaction
    const savedTransaction = await trsc_dal.AddTransactionToUser(order);

    // 2. recover user
    const user = await user_dal.get_user_data_by_id(userId);
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    // 3. check and update the balances
    const coinKey = indice.toLowerCase(); // 'btc' ou 'eth'
    const currentUsdt = user.balances.usdt || 0;
    const currentCoin = user.balances[coinKey] || 0;

    if (type === 'buy') {

      const totalCost = amount; 
      const receivedCoinAmount = totalCost / usd_price;
    
      if (currentUsdt < totalCost) {
        throw new Error("Fonds USDT insuffisants");
      }
    
      // update balances
      user.balances.usdt -= totalCost;
      user.balances[coinKey] = currentCoin + receivedCoinAmount;
    
    } else if (type === 'sell') {
      const totalUsdt = amount; 
      const cryptoToSell = totalUsdt / usd_price; 
    
      if (currentCoin < cryptoToSell) {
        throw new Error(`Funds ${coinKey.toUpperCase()} isnt enough. you have ${currentCoin}, you need to sell ${cryptoToSell.toFixed(6)}`);
      }
    
      user.balances[coinKey] = currentCoin - cryptoToSell;
      user.balances.usdt = currentUsdt + totalUsdt;
    
      console.log(`sold : -${cryptoToSell.toFixed(8)} ${coinKey.toUpperCase()} | +${totalUsdt} USDT`);
    }
     else {
      throw new Error("Type of order is wrong !");
    }
    

    console.log("user updated !", user);
    await user_dal.update_user(user);

    return "Transaction successfull.";

  } catch (error) {
    console.error("error by creating order :", error);
    throw error;
  }
};

module.exports = { Get_all_user_market_order, Create_market_order };
