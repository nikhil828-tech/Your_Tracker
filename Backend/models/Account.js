const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  contact: String,
  type: { type: String, enum: ["investor", "customer"] }
});

module.exports = mongoose.model("Account", AccountSchema);
