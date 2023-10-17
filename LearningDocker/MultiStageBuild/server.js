import express from "express";

import { jokes } from "./jokes.js";

// create a new instance of express
const app = express();

// add middleware for log all request data to console
app.use((req, res, next) => {
  console.log(
    `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${
      req.method
    } ${req.url}`
  );
  next();
});

// defult get routes
app.get("/", (req, res) => {
  res.send("Server is ready to serve! multistage build is done");
});

app.get("/docker", (req,res) => {
  res.send("Let's test the dev environment! working well buddy!");
});

// add get jokes routes
app.get("/jokes", (req, res) => {
  res.send(jokes);
});

// define server port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
