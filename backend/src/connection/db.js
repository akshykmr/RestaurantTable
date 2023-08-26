require("dotenv").config();

const mongoose = require("mongoose");

dbUrl = process.env.DB_URL;

const mongooseConnection = () => {
  return mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb is connected");
    })
    .catch((error) => {
      console.log("Connection Failed", error);
    });
};

module.exports = mongooseConnection;
