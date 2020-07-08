//Will handle this schema using form-data
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const taskSchema = new Schema(
  {
    user_to_assign_task: {
      //THis refrence fetch all the user from the User Schema
      type: ObjectId,
      ref: "User",
      // required: true,
    },
    name: {
      type: String,
      required: true, //Databse will see for this always
      maxlength: 32,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
