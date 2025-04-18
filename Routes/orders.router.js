const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders.controller");
const auth = require("../utility/auth");
router.post("/", auth.authMW, orderController.addOrder);

router.get("/", auth.authMW, orderController.getOrders);
router.post("/order", auth.authMW, orderController.getOrdersById);
router.patch("/", auth.authMW, orderController.changeStatus);
module.exports = router;
