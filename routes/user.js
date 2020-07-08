const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { saveUser, getUsers, getAllUsers } = require("../controllers/user");

router.post(
  "/user",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name should be atleast 3 Characters"),
    check("email").isEmail().withMessage("Email is required"),
    check("Mobile")
      .isLength({ max: 12 })
      .withMessage(
        "Mobile Number cannot be less than 12 digits(Includin Country code)"
      ),
  ],
  saveUser
);

router.get("/users", getUsers);
router.get("/allUsers", getAllUsers);

module.exports = router;
