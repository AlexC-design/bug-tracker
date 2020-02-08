const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");

const app = express();

app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connect"))
  .catch(err => console.log(err));

app.use("/api/users", users);

app.listen(5000, () => console.log("Server started on port 5000"));
