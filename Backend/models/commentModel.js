import mongoose from "mongoose";

// schema model for comments
const userSchema = mongoose.Schema({
    "commentData":{type:String},
    "userName":{type:String},
    "userEmail":{type:String},
    "videoId":{type:String}
});

const comment =mongoose.model("youtubeComments",userSchema);

export default comment;