const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtauth } = require("../lib/jwtlib");
const router = require("express").Router();
const Teacher = require("../Models/teacherModel");

// validate input data using Joi
const registerSchema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
  password_two: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

router.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check for confirm password and password are same
  if (req.body.password != req.body.password_two) {
    return res
      .status(400)
      .send("Password and Confirm password does not match.");
  }

  //check if the teacher is allready in the db
  const emailExists = await Teacher.findOne({ email: req.body.emial });
  if (emailExists) return res.status(400).send("Emial allready exists");

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // create new teacher
  const teacher = new Teacher({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  teacher.save((err) => {
    if (err) {
      res.json({ message: err.message, type: "danger" });
    } else {
      req.session.message = {
        type: "success",
        message: "Teacher register successfully!",
      };
      res.redirect("/auth/login");
    }
  });
});

router.post("/login", async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await Teacher.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("Email or password is wrong");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or password is wrong");

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });

  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 1000,
    })
    .status(200)
    .redirect("/dashboard");
});

router.get("/logout", jwtauth, (req, res) => {
  req.user = {};

  return res.clearCookie("access_token").status(200).redirect("/");
});

router.get("/login", (req, res) => {
  res.render("Auth/login");
});

router.get("/signup", (req, res) => {
  res.render("Auth/signup");
});

module.exports = router;
