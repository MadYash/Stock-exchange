const url = "mongodb://localhost:27017/codinova";
const mongoose = require("mongoose");
const connection = async () => {
  await mongoose
    .connect(url)
    .then(async () => {
      console.log("Connected to MongoDB");
    })
    .catch(() => {
      console.error(`Error connecting to mongoDB`);
    });
};

module.exports = connection;
