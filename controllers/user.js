const { validationResult } = require("express-validator");
const User = require("../models/User");
var mongoXlsx = require("mongo-xlsx");
exports.saveUser = (req, res) => {
  //validation check
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  //   Register user into DB
  const user = new User(req.body); //req.body coming from middleware body-parser
  //it is a big object coming from front end carrying all the user ino

  //using save method
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save user into Database",
      });
    }
    // if user is saved then
    res.json({
      id: user._id,
      name: user.name,
      email: user.email, //TODO: left for verification of email
      mobile: user.mobile,
    });
  });
};

//get all user name
exports.getUsers = (req, res) => {
  User.find({})
    .select("name")
    .exec((err, allUsers) => {
      if (err) {
        return res.status(400).json({
          error: "No users found",
        });
      }
      res.json(allUsers);
    });
};

//saving XLS file
exports.getAllUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: "No users found",
      });
    }
    res.json(users);
    const model = mongoXlsx.buildDynamicModel(users);
    mongoXlsx.mongoData2Xlsx(users, model, (err, data) => {
      if (err) {
        res.status(400).json({
          error: "Internal error, Unable to create file",
        });
      }

      console.log("File saved at:", data.fullPath);
    });
  });
};
