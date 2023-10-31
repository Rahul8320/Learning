import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(balances);
  });

  next();
});

let balances = {}; // -> { "upi1": 500, "upi2": 500 };
let allowances = {}; // -> { "upi1": { "upi2": 200}, "upi2": { "upi1": 100} };
let accounts = {}; // -> {"upi1": "pin", "upi2": "pin" };

// create endpoint for create new account
app.post("/create", (req, res) => {
  const { upi, pin } = req.body;

  if (accounts[upi]) {
    return res.status(400).json("Account already exists!");
  }

  accounts[upi] = pin;
  balances[upi] = 500;

  // console.log(balances);
  return res
    .status(201)
    .json(`Account for ${upi} created with balance 500 tokens.`);
});

// transfer endpoint
app.post("/transfer", (req, res) => {
  const { fromUpi, toUpi, amount, pin } = req.body;

  if (!accounts[fromUpi] || !accounts[toUpi]) {
    return res.status(400).json("Account doesn't exists!");
  }

  if (accounts[fromUpi] !== pin) {
    return res.status(400).json("Invalid pin!");
  }

  if (balances[fromUpi] < amount || amount < 0) {
    return res.status(400).json("Insufficient funds!");
  }

  balances[fromUpi] -= amount;
  balances[toUpi] += amount;

  // console.log(balances);
  return res
    .status(200)
    .json(`Transferred ${amount} tokens from ${fromUpi} to ${toUpi}`);
});

app.listen(port, () => {
  console.log("NodeJS Token Server is running.....");
});
