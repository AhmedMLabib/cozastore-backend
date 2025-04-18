const jwt = require("jsonwebtoken");
const secretKey =
  "(/hnn=O?I!Flc0U.EM7i6I-vQ-_-X(W:p+S>C4cL9jspjg}[U6l^/oQD.C4zYw0";

exports.createToken = (data) => {
  return jwt.sign(data, secretKey, { expiresIn: "1h" });
};

exports.authMW = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(402).json({ error: "access denied token missing" });
    }
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
