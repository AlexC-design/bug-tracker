const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  guestName: {
    type: String,
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Guest = mongoose.model("guest", GuestSchema);
