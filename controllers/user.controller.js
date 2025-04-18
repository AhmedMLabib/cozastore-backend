const userModel = require("../models/user.model");
const hashing = require("../utility/hashing");
const auth = require("../utility/auth");
exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, address, password, userType } = req.body;
    const hashedPassword = await hashing.hashPassword(password);
    const user = await userModel.create({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      userType,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    const customers = users.filter((customer) => customer.userType === "user");
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const isMatch = await hashing.compare(password, user.password);
      if (isMatch) {
        const token = auth.createToken({
          id: user._id,
          userType: user.userType,
          name: user.name,
        });
        res.status(200).json({ "access token": token });
      } else {
        res.status(400).json({ "not found": "password is not correct" });
      }
    } else {
      res.status(400).json({ "not found": "email not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
