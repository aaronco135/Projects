const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({

  userId: {  type: String,  required : true },
  type: {  type: String , enum: ["buy", "sell"] },
  indice: {  type: String ,  required : true  },
  amount: { type: Number ,  required : true },
  usd_price: {  type: Number ,  required : true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
