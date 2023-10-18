const jwt = require("jsonwebtoken");
const Teacher = require("../Models/teacherModel");
require("dotenv").config();
const _ = require("lodash");

let verifyToken = (token, next) => {
  try {
    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    return { ...decoded, expired: false };
  } catch (err) {
    if (err) {
      if (err.name === "TokenExpiredError") {
        var decoded = jwt.decode(token);
        if (decoded) {
          return { ...decoded, expired: true };
        } else return false;
      } else return false;
    }
  }
};

let tokenValidation = async (req, res, next) => {
  let token = req.cookies.access_token;
  if (token) {
    req.token = token;
    try {
      const decodedToken = verifyToken(req.token, next);
      // console.log(decodedToken);
      if (!decodedToken) {
        console.log("Unauthorized User");
        return res.redirect("/auth/login");
      } else if (decodedToken.expired) {
        let decoded = jwt.decode(token);

        let user = await Teacher.findOne({
          _id: decoded._id,
        });

        user.token = jwt.sign(
          {
            id: user._id,
          },
          process.env.TOKEN_SECRET,
          {
            expiresIn: "1h",
          }
        );
        req.user = { user, userType: decoded.userType };
        next();
      } else {
        let user = await Teacher.findOne({
          _id: decodedToken._id,
        });
        user.token = req.token;
        req.user = user;
        // console.log("user : ", user);
        next();
      }
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: "Error with your token",
      });
    }
  } else {
    console.log("Not a Valid User");
    return res.redirect("/auth/login");
  }
};

module.exports.jwtauth = tokenValidation;
