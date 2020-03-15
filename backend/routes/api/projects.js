const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");

//route   GET api/projects
//descr   Get all projects
router.get("/", (req, res) => {
  Project.find()
    .sort({ creation_date: -1 })
    .then(projects => res.json(projects));
});

//route   GET api/projects/:id
//descr   Get a project by ID
router.get("/:id", (req, res) => {
  Project.findById(req.params.id).then(project => {
    res.json(project);
  });
});

//route   POST api/projects
//descr   Create new project
router.post("/", (req, res) => {
  const newProject = new Project({
    project_name: req.body.project_name
  });

  newProject.save().then(project => res.json(project));
});

//route   DELETE api/projects
//descr   Delete a project
router.delete("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
