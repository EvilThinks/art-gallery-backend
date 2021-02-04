const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const collectionsRouter = require("./routes/collections");

const app = express();

const PORT = config.get("port") || 5000;

app.use("/api/collections", collectionsRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("mongo_uri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.log("db error");
    process.exit(1);
  }
};

app.listen(PORT, () => {
  console.log(`listenoing on${PORT}`);
});

start();
