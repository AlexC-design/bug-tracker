const express = require("express");
const router = express.Router();

const User = require("../../models/User");

//route   GET api/users
//descr   Get all users
//access  Public
router.get("/", (req, res) => {
  User.find()
    .sort({ firstName: 1 })
    .then(users => res.json(users));
});

//route   POST api/users
//descr   Create new user
//access  Public
router.post("/", (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName
  });

  newUser.save().then(user => res.json(user));
});

//route   DELETE api/users
//descr   Delete an user
//access  Public
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
