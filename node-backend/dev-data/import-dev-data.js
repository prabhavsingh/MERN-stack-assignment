import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import User from "../model/userModel.js";
import { configDotenv } from "dotenv";

configDotenv();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful"))
  .catch((error) => console.log(error.message));

function generateRandomUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 80 }),
  };
}

const importDummyUserData = async () => {
  try {
    const users = Array.from({ length: 10 }, generateRandomUser);
    await User.create(users);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteDummyUserData = async () => {
  try {
    await User.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importDummyUserData();
} else if (process.argv[2] === "--delete") {
  deleteDummyUserData();
}

console.log(process.argv);
