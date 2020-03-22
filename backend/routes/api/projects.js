const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");
const Tasks = require("../../models/Task");
const Task = Tasks.TaskModel;

//descr   Get all projects
router.get("/", (req, res) => {
  Project.find()
    .sort({ creationDate: -1 })
    .then(projects => res.json(projects));
});

//descr   Get a project by ID
router.get("/:id", (req, res) => {
  Project.findById(req.params.id).then(project => {
    res.json(project);
  });
});

//descr   Create new project
router.post("/", (req, res) => {
  const newProject = new Project({
    projectName: req.body.projectName
  });

  newProject.save().then(project => res.json(project));
});

//descr   Delete a project
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

//descr   Add task in project
router.put("/:projectId", (req, res) => {
  const newTask = new Task({
    ...req.body
  });

  Project.findById(req.params.projectId).then(project => {
    project.tasks[`${req.body.taskSeverity}`].push(newTask);
    console.log({ project });
    project.save().then(project => {
      console.log(project);
      return res.json(project.tasks);
    });
  });
});

//descr   Get task
router.get("/:id/task:taskId", (req, res) => {
  Task.findById(req.params.taskId).then(task => {
    console.log(task);
    res.json(task);
  });
});

module.exports = router;
