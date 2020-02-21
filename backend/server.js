const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connect"))
  .catch(err => console.log(err));

app.use("/api/projects", require("./routes/api/projects"));
app.use("/api/users", require("./routes/api/users"));
// app.use("/login", require("./routes/login/login"));

app.listen(5000, () => console.log("Server started on port 5000"));
