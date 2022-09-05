const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
//     userId:{
//   type:mongoose.Types.ObjectId,
//     },
    name:{
        type:String,
        required:true,
        min:3,
        max:50,
        default:""
    },
    DOB:{
        type:String,
       
    },
    Bio:{
        type:String,
        required:true,
        max:50,
       
    },

    


},
{
    timestamps:true
}
)

module.exports=mongoose.model("artists",userSchema)