import mongoose from "mongoose";

// schema model for each registered user
const userSchema = mongoose.Schema({
    "userName":{type:String,required:true},
    "email":{type:String,required:true,unique:true},
    "password":{type:String,required:true},
    "channelName":{type:String,default:""}
});

const user =mongoose.model("youtubeUser",userSchema);

export default user;