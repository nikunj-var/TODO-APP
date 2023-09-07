const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);
const todo = require("./models/todo");
app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
});
app.listen(3001, () => console.log("server started at 3001"));
