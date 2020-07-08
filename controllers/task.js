const Task = require("../models/Task");
// const User = require("../models/User");
const formidable = require("formidable");

exports.saveTask = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with data",
      });
    }
    //destructure the fields
    const { user_to_assign_task, name, type } = fields;
    if (!user_to_assign_task || !name || !type) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }

    let task = new Task(fields);

    //save to DB
    task.save((err, task) => {
      if (err) {
        // res.status(400).json({
        //   error: "Saving in database failed",
        // });
        console.log(err);
      }
      res.json(task);
    });
  });
};

// //   Register task into DB
// const task = new Task(req.body);
// //using save method
// task.save((err, task) => {
//   if (err) {
//     return res.status(400).json({
//       error: "Not able to save task into Database",
//     });
//   }

//   res.json({
//     id: task._id,
//     user_to_assign_task: task.user_to_assign_task,
//     task_name: task.task_name,
//     task_type: task.task_type,
//   });
// });
