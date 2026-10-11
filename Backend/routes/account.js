const express = require("express");
const Account = require("../models/Account");
const auth = require("../middleware/auth");

const router = express.Router();

// Add account
router.post("/", auth, async (req, res) => {
  const acc = await Account.create({
    userId: req.user.id,
    name: req.body.name,
    contact: req.body.contact,
    type: req.body.type
  });
  res.json(acc);
});

// Get accounts
router.get("/", auth, async (req, res) => {
  const accs = await Account.find({ userId: req.user.id });
  res.json(accs);
});

module.exports = router;
