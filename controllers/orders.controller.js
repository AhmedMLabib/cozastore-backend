const orderModel = require("../models/orders.model");
const productModel = require("../models/product.model");
const userModel = require("../models/user.model");
exports.addOrder = async (req, res) => {
  try {
    const order = await orderModel.create(req.body);
    for (let prod of order.products) {
      const product = await productModel.findOneAndUpdate(
        { _id: prod._id },
        { $inc: { countInStock: -prod.count } },
        { new: true }
      );
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(201).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrdersById = async (req, res) => {
  try {
    const id = req.body.id;
    const user = await userModel.findOne({ _id: id });
    const orders = await orderModel.find({ userId: user._id });
    res.status(201).json(orders);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

exports.changeStatus = async (req, res) => {
  try {
    const order = await orderModel.findOneAndUpdate(
      { _id: req.body.id },
      { $set: { status: req.body.status } },
      { new: true }
    );
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
