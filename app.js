const express = require("express");
const connectDB = require("./config/db.config");
const userRouter = require("./Routes/user.router");
const productRouter = require("./Routes/product.router");
const orderRouter = require("./Routes/orders.router");
const messageRouter = require("./Routes/message.router");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
app.use(cors({ origin: "https://ahmedmlabib.github.io/cozastore-frontend/" }));
app.use(express.json());

app.use("/images", express.static("./images"));

connectDB();
app.use("/user", userRouter);
app.use("/products", productRouter);

app.use("/orders", orderRouter);

app.use("/message", messageRouter);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
