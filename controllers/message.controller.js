const messageModel = require("../models/messages.model");
exports.createMessage = async (req, res) => {
  try {
    message = await messageModel.create(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getMessages = async (req, res) => {
  try {
    const messages = await messageModel.find();
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
