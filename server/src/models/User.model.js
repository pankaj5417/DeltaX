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
    email:{
        type:String,
       
    },
    },
{
    timestamps:true
}
)

module.exports=mongoose.model("users",userSchema)