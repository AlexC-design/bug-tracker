const express = require("express");
const router = express.Router();

const User = require("../../models/User");
const Project = require("../../models/Project");

//descr   Create a user
router.post("/", async (req, res) => {
  const existingUser = await User.find({ googleId: req.body.googleId });

  if (existingUser.length) {
    return res.json(existingUser[0]);
  } else {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email ? req.body.email : "none",
      googleId: req.body.googleId ? req.body.googleId : "guest"
    });
    newUser.save().then(user => res.json(user));
  }
});

//descr   Get users by id
router.get("/project:projectId", (req, res) => {
  Project.findById(req.params.projectId).then(project => {
    User.find(
      {
        _id: { $in: project.projectMembers.map(member => member.userId) }
      },
      (err, users) => res.json(users)
    );
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
