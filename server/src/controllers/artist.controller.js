const express=require('express')

const router=express.Router()
const path  = require("path")

const ArtistModel = require('../models/Artist.model')

//create an artist

router.get("/", async (req, res) => {
    try {
      const artists = await  ArtistModel.find({}).sort({rating:-1}).limit(10)
  
      return res.status(201).json({artists})
  
     
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

router.post("/", async(req, res)=>{
    try{
        
       
        const newArtist= await ArtistModel.create({
            Name:req.body.Name,
          DOB:req.body.DOB,
          Bio:req.body.Bio  
        })
    

    
        return res.status(200).json({
            newArtist,message:"a new artist added"
        })

    }catch(err){
        return res.status(403).json(err)
    }
})

module.exports=router