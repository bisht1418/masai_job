const express = require("express");
const { connectDB } = require("./db");
const { jobRouter } = require("./Router/JobRouter.router");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/job", jobRouter);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to masai job" });
});

app.listen(port, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  console.log("Connected to the port :", port);
});
