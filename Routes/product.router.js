const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const upload = require("../multer/multer");
const auth = require("../utility/auth");
router.get("/", productsController.getProducts);
router.post(
  "/",
  auth.authMW,
  upload.single("image"),
  productsController.createProduct
);

router.post("/delete", auth.authMW, productsController.deleteById);

router.patch("/", auth.authMW, productsController.changeStatus);

module.exports = router;
