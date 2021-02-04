const Collection = require("./models/Collection");
const config = require("config");
const mongoose = require("mongoose");

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
  Collection.insertMany(seedCollections(50));
};

start();
const seedCollections = (cnt) => {
  const result = [];
  for (let i = 0; i < cnt; i++) {
    result.push({
      imageUrl: randomBetweenArray([
        "http://placehold.it/365x270/42526b",
        "http://placehold.it/365x500/838c3f",
        "http://placehold.it/365x320/8f3c47",
      ]),
      path: "collections/as3dasd" + i,
      title: "qweqwe" + i,
      author: "qweqweqweqw",
      period: randomBetweenArray(["past", "current", "upcoming"]),
      artist: randomBetweenArray(["1", "2", "3", "4", "5"]),
    });
  }
  return result;
};
const randomBetweenArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
