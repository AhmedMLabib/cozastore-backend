const express = require("express");
const router = express.Router();
const auth = require("../utility/auth");
const messageController = require("../controllers/message.controller");
router.post("/", messageController.createMessage);
router.get("/", auth.authMW, messageController.getMessages);
module.exports = router;
