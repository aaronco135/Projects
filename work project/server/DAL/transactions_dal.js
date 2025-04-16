const transactions_model = require('../models/transaction_model');

 // get  trsc by userId
const GetTransactionsById = (id) => transactions_model.find({userId : id});

// add a trsc to user DB
const AddTransactionToUser = async (trsc) => {
  try {
    const savedTransaction = await transactions_model.create(trsc);
    return savedTransaction;
  } catch (error) {
    console.error('issue by creating an order :', error);
    throw error;
  }
};

module.exports = {
  GetTransactionsById,
  AddTransactionToUser,
};
