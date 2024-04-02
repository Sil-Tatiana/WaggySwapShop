const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const db = process.env.DB_CONNECTION.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(db)
  .then(() => console.log("You are now connected to Mongo DB"))
  .catch((error) => console.log(error));
