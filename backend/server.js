const express = require("express");
const mongoose = require("mongoose");

const projects = require("./routes/api/projects");

const app = express();

app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connect"))
  .catch(err => console.log(err));

app.use("/api/projects", projects);

app.listen(5000, () => console.log("Server started on port 5000"));
