import express from "express";
import key from "./config/keys";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const db = key;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connect"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server started on portn 5000"));
