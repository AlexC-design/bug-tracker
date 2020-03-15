const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task_name: {
    type: String,
    required: true
  },
  task_severity: {
    type: String,
    required: true
  },
  task_summary: {
    type: String,
    required: true
  },
  task_description: {
    type: String,
    required: true
  },
  task_environment: {
    type: String,
    required: true
  },
  task_creator: {
    _id: { type: String, required: true },
    name: { type: String, required: true }
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("task", TaskSchema);
