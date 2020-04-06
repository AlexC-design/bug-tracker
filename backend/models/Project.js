const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tasks = require("../models/Task");
const TaskSchema = Tasks.TaskSchema;

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true
  },
  projectMembers: {
    type: Array,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  tasks: {
    High: [TaskSchema],
    Medium: [TaskSchema],
    Low: [TaskSchema],
    Trivial: [TaskSchema],
    Unassigned: [TaskSchema]
  }
});

module.exports = Project = mongoose.model("project", ProjectSchema);
