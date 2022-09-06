const express = require("express");
const cors = require('cors')
const path=require("path")
const userRoute=require("../src/controllers/user.controller")
const songRoute=require("../src/controllers/song.controller")
const artistRoute=require("../src/controllers/artist.controller")
const upload=require("../upload")
const url = 'http://localhost:5000';

const app = express();

app.use(express.json());



app.use(cors())


app.use("/images",express.static(path.join(__dirname,"..","public/images")))
app.use(express.static(path.join(__dirname, "/client/build")))
app.use("/users",userRoute)
app.use("/songs",songRoute)
app.use('/artists',artistRoute)
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/client/build','index.html'))
})


app.post('/upload', upload.single("file"),  async(req, res)=> {
  if(!req.file) 
        return res.status(404).json("File not found");
        console.log("file",req.file)
    
    const imageUrl = `${url}/images/${req.file.filename}`;
    // const imageUrl=req.file.filename

    res.status(200).json(imageUrl);  
})



module.exports = app;
