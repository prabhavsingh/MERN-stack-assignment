import Blog from "../model/blogModel.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      statu: "success",
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const newBLog = await Blog.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        blog: newBLog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "No blog found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findbyIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({
        status: "fail",
        message: "No blog found with that ID",
      });
    }
    res.status(200).json({
      statu: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
