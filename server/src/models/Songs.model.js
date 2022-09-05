const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    //     userId:{
    //   type:mongoose.Types.ObjectId,
    //     },
    Name: {
      type: String,
      required: false,
      min: 3,
      max: 50,
      default: "",
    },
    DateofRelease: {
      type: String,
    },
    Cover: {
      type: String,
      required: false,
      max: 50,
    },
    artist:{
       type:String
    },
    artist_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"artists"
    }],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required:false,

      ref: "user",

    //   required: true,
    },

    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("songs", userSchema);
