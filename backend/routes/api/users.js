const express = require("express");
const router = express.Router();

const User = require("../../models/User");

//route   POST api/users
//descr   Create an user
//access  Public
router.post("/", (req, res) => {
  res.send("register");
});

module.exports = router;
