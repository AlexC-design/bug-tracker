const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  taskSeverity: {
    type: String,
    required: true
  },
  taskSummary: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String,
    required: true
  },
  taskEnvironment: {
    type: String,
    required: true
  },
  taskCreator: {
    _id: { type: String, required: true },
    name: { type: String, required: true }
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("task", TaskSchema);
