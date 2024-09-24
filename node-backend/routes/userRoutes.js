import express from "express";

import {
  getAllUsers,
  getUserByEmail,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/email/:email").get(getUserByEmail);

router.route("/").get(getAllUsers).post(createUser);

export default router;
