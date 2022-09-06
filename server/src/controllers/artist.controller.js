const express = require("express");

const router = express.Router();
const path = require("path");

const ArtistModel = require("../models/Artist.model");

//create an artist

router.get("/", async (req, res) => {
  try {
    const artists = await ArtistModel.find()
      .populate("song_id")
      .sort({createdAt: -1 } )
      .limit(10);
      

    return res.status(201).json({ artists });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newArtist = await ArtistModel.create({
      name: req.body.artistname,
      DOB: req.body.dob,
      Bio: req.body.bio,
      song_id: req.body.song_id,
    });

    return res.status(200).json({
      newArtist,
      message: "a new artist added",
    });
  } catch (err) {
    return res.status(403).json(err);
  }
});

module.exports = router;
