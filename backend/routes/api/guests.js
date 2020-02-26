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

//route   GET api/guests
//descr   Get all guests
router.get("/", (req, res) => {
  Guest.find().then(guest => res.json(guest));
});

//route   DELETE api/guests
//descr   Delete a guest
router.delete("/:id", (req, res) => {
  Guest.findById(req.params.id)
    .then(guest => guest.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
