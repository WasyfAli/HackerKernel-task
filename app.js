const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// var nodemailer = require("nodemailer");
// const path = require("path");

const port = process.env.PORT || 5000;

const user = require("./routes/user");
const task = require("./routes/task");

//DataBase Connection......!
const mongoURI = require("./config/keys").mongoUri;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //keep database session alive
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => console.log(err));

//use of MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
// app.use("/api", userRoutes);
app.use("/api", user);
app.use("/api", task);

//Starting a SERVER
app.listen(port, () => console.log(`Server is running at port ${port}`));
