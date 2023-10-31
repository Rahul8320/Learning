import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// middleware to log balances.
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(balances);
    console.log(allowances);
    console.log(accounts);
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
    return res.status(404).json("Account doesn't exists!");
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

// approved endpoint
app.post("/approve", (req, res) => {
  const { ownerId, spenderId, amount, pin } = req.body;

  if (!accounts[ownerId]) {
    return res.status(404).json("Account doesn't exists!");
  }

  if (accounts[ownerId] !== pin) {
    return res.status(400).json("Invalid pin!");
  }

  if (!allowances[ownerId]) {
    allowances[ownerId] = {};
  }

  allowances[ownerId][spenderId] = amount;
  res
    .status(200)
    .json(
      `${ownerId} has approved ${spenderId} to spend ${amount} tokens on their behalf.`
    );
});

// transfer from allowances.
app.post("/transferFrom", (req, res) => {
  const { fromUpiId, toUpiId, spenderId, amount, pin } = req.body;

  if (!accounts[fromUpiId] || !accounts[toUpiId]) {
    return res.status(404).json("Account doesn't exist!");
  }

  if (accounts[fromUpiId] !== pin) {
    return res.status(400).json("Invalid pin!");
  }

  const allowedAmount =
    allowances[fromUpiId] && allowances[fromUpiId][spenderId];

  if (!allowedAmount || allowedAmount < amount) {
    return res.status(400).json("Insufficient allowance!");
  }
  if (balances[fromUpiId] < amount || amount < 0) {
    return res.status(400).json("Insufficient funds!");
  }

  balances[fromUpiId] -= amount;
  balances[toUpiId] += amount;
  allowances[fromUpiId][spenderId] -= amount;

  res
    .status(200)
    .json(
      `${spenderId} transferred ${amount} tokens from ${fromUpiId} to ${toUpiId}`
    );
});

// check balance
app.post("/balance", (req, res) => {
  const { upi, pin } = req.body;

  if (!accounts[upi]) {
    return res.status(404).json("Account not found!");
  }

  if (accounts[upi] !== pin) {
    return res.status(400).json("Invalid pin!");
  }

  const balance = balances[upi];
  res.status(200).json(`Balance of ${upi}: ${balance}`);
});

app.listen(port, () => {
  console.log("NodeJS Token Server is running.....");
});
