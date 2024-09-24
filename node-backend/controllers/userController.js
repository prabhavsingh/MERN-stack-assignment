import User from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      statu: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    // console.log(req.params);
    const user = await User.findOne({ email: req.params.email });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log(req.body.body);

    const name = req.body.body.name;
    const email = req.body.body.email;
    const age = parseInt(req.body.body.age);
    console.log(name, email, age);

    const newUser = await User.create({ name, email, age });
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
