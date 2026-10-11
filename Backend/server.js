const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/account", require("./routes/account"));
app.use("/api/transaction", require("./routes/transaction"));

app.get("/", (req, res) => {
  res.send("Interest Calculator Backend Running");
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
