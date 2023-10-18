// imports required packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const apiRoutes = require("./routes/api-routes");
const authRoutes = require("./routes/auth-routes");
const { logger } = require("./customLogger");

// creating our app
const app = express();
const PORT = process.env.PORT || 5000;

// connect to Mongodb
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log(`Connected to MongoDb Database!`));

// Space for midddlwares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logger);

// caching disabled for every route
app.use(function (req, res, next) {
  res.set(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  next();
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
  })
);

app.use(cookieParser());

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.use("/uploads", express.static("uploads"));

// set favicon
app.use("/favicon.ico", express.static("./uploads/image_1675068356805_mj.jpg"));

// set template engine
app.set("view engine", "ejs");

// Use  routes in the App
app.use("/", apiRoutes);
app.use("/auth/", authRoutes);

// This route will handle all the requests that are
// not handled by any other route handler. In
// this handler we will redirect the user to
// an error page with NOT FOUND message and status
// code as 404 (HTTP status code for NOT found)
app.all("*", (req, res) => {
  res.status(404).render("404Page");
});

// listen the server
app.listen(PORT, () => {
  console.log(`Server is listening at  http://localhost:${PORT}`);
});
