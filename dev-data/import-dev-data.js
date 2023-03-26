const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Emotion = require("./../models/emotionsModel");

dotenv.config({ path: "./../config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const emotionsData = JSON.parse(
  fs.readFileSync(`${__dirname}/advice.json`, "utf8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Emotion.create(emotionsData);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Emotion.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
