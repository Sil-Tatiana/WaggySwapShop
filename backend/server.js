const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
const path = require("path");

dotenv.config(
  {
    path: path.resolve(__dirname, "../.env"),
  }
);

const db = process.env.DB_CONNECTION.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(db)
  .then(() => console.log("You are now connected to Mongo DB"))
  .catch((error) => console.log(error));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
