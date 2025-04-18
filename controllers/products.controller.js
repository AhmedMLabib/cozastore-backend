const productsModel = require("../models/product.model");
const fs = require("fs");

exports.createProduct = async (req, res) => {
  try {
    const imagePath = req.file.filename;
    const product = await productsModel.create({
      ...req.body,
      imageURL: imagePath,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const user = await productsModel.findOne({ _id: req.body.id });
    fs.unlinkSync(`images/${user.imageURL}`);

    const delProduct = await productsModel
      .deleteOne({ _id: req.body.id })
      .then((result) => {
        res.status(202).json({ result });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.changeStatus = async (req, res) => {
  try {
    const product = await productsModel.findOneAndUpdate(
      { _id: req.body.id },
      { $set: { isActive: req.body.isActive } },
      { new: true }
    );
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
