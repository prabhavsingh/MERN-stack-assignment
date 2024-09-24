import express from "express";

import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllBlogs)
  .post(createBlog)
  .patch(updateBlog)
  .delete(deleteBlog);

export default router;
