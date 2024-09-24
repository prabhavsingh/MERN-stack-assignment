import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
    required: [true, "must have tag"],
  },
  likes: {
    type: Number,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
