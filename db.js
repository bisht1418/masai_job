const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bishtnrj1418:neeraj@cluster0.iwr83wo.mongodb.net/masai_job?retryWrites=true&w=majority"
    );
    console.log("Connected to the Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
