const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../utility/auth");
router.get("/", auth.authMW, userController.getUsers);
router.post("/register", userController.createUser);
router.post("/login", userController.login);
module.exports = router;
