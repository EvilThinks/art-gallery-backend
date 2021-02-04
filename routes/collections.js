const { Router } = require("express");
const router = Router();
const Collection = require("../models/Collection");

router.get("/", async (req, res, next) => {
  console.log("collections");
  try {
    const collectionData = await Collection.find();
    res.status(200).json(collectionData);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

module.exports = router;
