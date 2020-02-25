const express = require("express");
const router = express.Router();

const Guest = require("../../models/Guest");

//route   POST api/guests
//descr   Create a guest
router.post("/", (req, res) => {
  const newGuest = new Guest({
    guest_name: req.body.guest_name
  });

  newGuest.save().then(guest => res.json(guest));
});

module.exports = router;
