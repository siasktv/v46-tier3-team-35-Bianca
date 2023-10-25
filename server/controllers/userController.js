const User = require("../models/user");

// test route
const test = (req, res) => {
  res.status(200).json({ message: "test successfully." });
};

// create user
const createUser = async (req, res) => {
  console.log('[From POST handler]', req.body)
  try {
    const user = await User.create(req.body);
    console.log(user);
  } catch (error) {
    res.status(400).json(error)
    console.log(error);
  }
}

module.exports = {
  test, createUser
};
