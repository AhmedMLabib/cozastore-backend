const mongoose = require("mongoose");

const message = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("message", message);
