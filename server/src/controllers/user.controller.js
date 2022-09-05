const express = require("express");
const User = require("../models/User.model");

const router = express.Router();

//create a user

router.post("/", async (req, res) => {
  //console.log(req.body)
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (e) {
    res.status(500).json({ status: e.message });
  }
});

//get a user

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    res.send({ users });
  } catch (e) {
    res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
