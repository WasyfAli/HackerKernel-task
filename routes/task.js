const express = require("express");
const router = express.Router();

const { saveTask } = require("../controllers/task");

router.post("/task", saveTask);

module.exports = router;
