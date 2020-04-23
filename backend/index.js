const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());
app.options("*", cors());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connect"))
  .catch(err => console.log(err));

app.use("/api/projects", require("./routes/api/projects"));
app.use("/api/users", require("./routes/api/users"));
// app.use("/login", require("./routes/login/login"));

app.get("/", (req, res) => {
  res.send("TEST");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
