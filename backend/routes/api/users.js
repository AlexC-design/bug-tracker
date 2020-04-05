const express = require("express");
const router = express.Router();

const User = require("../../models/User");

//route   POST api/users
//descr   Create a user
router.post("/", (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email ? req.body.email : 'none'
  });
  newUser.save().then(user => res.json(user));
});

//route   GET api/users
//descr   Get all users
router.get("/", (req, res) => {
  User.find()
    .sort({ registerDate: -1 })
    .then(user => res.json(user));
});

//route   DELETE api/users
//descr   Delete a user
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
