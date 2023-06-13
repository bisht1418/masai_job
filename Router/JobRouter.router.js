const express = require("express");
const { jobModel } = require("../Model/JobData.model");
const jobRouter = express.Router();

jobRouter.post("/jobdata", async (req, res) => {
  try {
    const jobData = new jobModel({ ...req.body });
    await jobData.save();
    res.json({ message: "Sucessfully Added", data: jobData });
  } catch (error) {
    res.json({ error: error });
  }
});

jobRouter.get("/", async (req, res) => {
  try {
    const jobData = await jobModel.find({});
    res.json({ data: jobData });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = { jobRouter };
