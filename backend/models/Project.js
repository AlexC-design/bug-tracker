const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  project_name: {
    type: String,
    required: true
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("project", ProjectSchema);
