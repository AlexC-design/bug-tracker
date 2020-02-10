const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");

//route   GET api/projects
//descr   Get all projects
//access  Public
router.get("/", (req, res) => {
  Project.find().then(projects => res.json(projects));
});

//route   POST api/projects
//descr   Create new project
//access  Public
router.post("/", (req, res) => {
  const newProject = new Project({
    projectName: req.body.projectName
  });

  newProject.save().then(project => res.json(project));
});

//route   DELETE api/projects
//descr   Delete a project
//access  Public
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
