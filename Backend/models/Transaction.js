const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
  amount: Number,
  interestRate: Number,
  startDate: Date,
  paidAmount: { type: Number, default: 0 }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
