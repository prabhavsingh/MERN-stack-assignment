import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  age: {
    type: Number,
    required: [true, "Please provide your age"],
    min: [0, "Please provide a valid age"],
    max: [150, "Please provide a valid age"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
