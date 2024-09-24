import express from "express";

import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
app.use(express.json({ limit: "10kb" }));

app.use(cors());

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

export default app;
