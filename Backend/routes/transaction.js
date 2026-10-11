const express = require("express");
const Transaction = require("../models/Transaction");
const auth = require("../middleware/auth");

const router = express.Router();

// Add transaction
router.post("/", auth, async (req, res) => {
  const t = await Transaction.create(req.body);
  res.json(t);
});

// Get transactions by account
router.get("/:accountId", auth, async (req, res) => {
  const tx = await Transaction.find({ accountId: req.params.accountId });
  res.json(tx);
});

module.exports = router;
