const express = require("express");
const router = express.Router();

const Tasks = require("../../models/Task");
const Task = Tasks.TaskModel;

//descr   Get all tasks
router.get("/", (req, res) => {
  Task.find()
    .sort({ creation_date: -1 })
    .then(tasks => res.json(tasks));
});

//descr   Get a task by ID
router.get("/:id", (req, res) => {
  Task.findById(req.params.id).then(task => {
    res.json(task);
  });
});

//descr   Create new task
// router.post("/", (req, res) => {
//   const newTask = new Task({
//     ...req.body
//   });

//   newTask.save().then(task => res.json(task));
// });

//   newProject.save().then(project => res.json(project));
// });

// //descr   Delete a project
// router.delete("/:id", (req, res) => {
//   Project.findById(req.params.id)
//     .then(project => project.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ sucess: false }));
// });

module.exports = router;
