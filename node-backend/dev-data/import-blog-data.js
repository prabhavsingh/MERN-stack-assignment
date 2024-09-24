import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import Blog from "../model/blogModel.js";
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

function generateRandomBlog() {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author: faker.person.fullName(),
    profession: faker.person.jobTitle(),
    createdAt: faker.date.past(),
    tags: faker.helpers.arrayElements([
      "tech",
      "life",
      "travel",
      "food",
      "education",
    ]),
    likes: faker.number.int({ min: 1, max: 1000 }),
  };
}
console.log(generateRandomBlog());

const imporDummyBlogtData = async () => {
  try {
    const blogs = Array.from({ length: 10 }, generateRandomBlog);
    await Blog.create(blogs);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteDummyBlogData = async () => {
  try {
    await Blog.deleteMany();
    console.log("Data successfully deleted!");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

if (process.argv[2] === "--import") {
  imporDummyBlogtData();
} else if (process.argv[2] === "--delete") {
  deleteDummyBlogData();
}
