const express = require("express");
const User = require("../models/User.model");
//const { route } = require("./auth")
const SongsModel = require("../models/Songs.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newSong = await SongsModel.create({
      Name: req.body.songname,
      DateofRelease: req.body.releaseDate,
      Cover: req.body.picture,
      artist:req.body.artists,
      artist_id:req.body.artist_id,
      rating:req.body.rating
    });

    return res.status(200).json({
      newSong,
      message: "a new song added",
    });
  } catch (err) {
    return res.status(403).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const songs = await  SongsModel.find().populate("artist_id").sort({rating:-1}).limit(10)

    return res.status(201).json({songs})

   
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;
