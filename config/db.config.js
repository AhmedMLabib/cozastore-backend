const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb://alabib55565:YdNeWr3MqJcVH0n6@cluster0-shard-00-00.2ztmi.mongodb.net:27017,cluster0-shard-00-01.2ztmi.mongodb.net:27017,cluster0-shard-00-02.2ztmi.mongodb.net:27017/?ssl=true&replicaSet=atlas-10u1no-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
  );
};

module.exports = connectDB;
