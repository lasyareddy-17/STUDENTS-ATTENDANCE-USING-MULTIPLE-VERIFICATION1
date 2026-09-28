let mongoose=require("mongoose");
let taskSchema=mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    taskdesc:{
        type:String,
        required:true
    },
    assingedTo:{
        type:mongoose.Schema.Types.ObjectId,
    }
})