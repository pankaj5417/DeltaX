const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
//     userId:{
//   type:mongoose.Types.ObjectId,
//     },
    Name:{
        type:String,
        required:true,
        min:3,
        max:50,
        default:""
    },
    DateofRelease:{
        type:String,
       
    },
    Cover:{
        type:String,
        required:true,
        max:50,
       
    },
    user_id:{

        type: mongoose.Schema.Types.ObjectId,

        ref: "user",

        required: true,
    },

        rating:{
            type:Number
        }
    
    


},
{
    timestamps:true
}
)

module.exports=mongoose.model("songs",userSchema)