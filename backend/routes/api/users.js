const express = require("express");
const router = express.Router();

const User = require("../../models/User");
const Project = require("../../models/Project");

//descr   Create a user
router.post("/", async (req, res) => {
  //check if user exists
  const existingUser = await User.find({ googleId: req.body.googleId });

  //create user if it doesn't exist
  if (existingUser.length) {
    return res.json(existingUser[0]);
  } else {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email ? req.body.email : "none",
      googleId: req.body.googleId ? req.body.googleId : "guest"
    });
    newUser.save().then(user => {
      //create example project
      Project.findById("5e9327ecb9e0a31b4c630800").then(project => {
        const newProject = new Project({
          projectName: project.projectName
        });

        newProject.projectMembers = project.projectMembers.map(user => ({
          userId: user.userId,
          isAdmin: false
        }));
        newProject.projectMembers.push({ userId: user._id, isAdmin: true });
        newProject.tasks = project.tasks;

        //add new project to user
        newProject.save().then(project => {
          user.projects.push(project._id.toString());
          user.save().then(user => res.json(user));
        });
      });
    });
  }
});

//descr   Get project's users
router.get("/project:projectId", (req, res) => {
  Project.findById(req.params.projectId).then(project => {
    User.find({
      _id: { $in: project.projectMembers.map(member => member.userId) }
    })
      .sort({ email: -1 })
      .then(users => res.json(users));
  });
});

//descr   Get all users
router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

//descr   Delete all guests
router.get("/guests", (req, res) => {
  User.find({ googleId: "guest" }).then(users => res.json(users));
});

//descr   Delete a user
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
