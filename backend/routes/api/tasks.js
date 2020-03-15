const express = require("express");
const router = express.Router();

const Task = require("../../models/Task");

//route   GET api/tasks
//descr   Get all tasks
router.get("/", (req, res) => {
  Task.find()
    .sort({ creation_date: -1 })
    .then(tasks => res.json(tasks));
});

// //route   GET api/projects/:id
// //descr   Get a project by ID
// router.get("/:id", (req, res) => {
//   Project.findById(req.params.id).then(project => {
//     res.json(project);
//   });
// });

//route   POST api/tasks
//descr   Create new task
router.post("/", (req, res) => {
  const newTask = new Task({
    ...req.body
  });

  newTask.save().then(task => res.json(task));
});

//   newProject.save().then(project => res.json(project));
// });

// //route   DELETE api/projects
// //descr   Delete a project
// router.delete("/:id", (req, res) => {
//   Project.findById(req.params.id)
//     .then(project => project.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ sucess: false }));
// });

module.exports = router;
