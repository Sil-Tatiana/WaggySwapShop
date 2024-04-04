import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.mjs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

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
