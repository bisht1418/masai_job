const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  company: String,
  postedAt: String,
  city: String,
  location: String,
  role: String,
  level: String,
  contract: String,
  position: String,
  language: String,
});

const jobModel = model("job", jobSchema);
module.exports = { jobModel };
