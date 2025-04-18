const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    costumerName: String,
    userId: String,
    status: String,
    totalPrice: Number,
    products: Object,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("orders", orderSchema);
