import mongoose from "mongoose";

// schema for video data
const userSchema = mongoose.Schema({
    videoId: String,
    url:String,
    title: String,
    thumbnail: String,
    description: String,
    views: {type:Number,default:0},
    likes: {type:Number,default:0},
    uploadDate: {type:String,default:"Today"},
    genre:String,
    owner:{type:String,default:""}
});

const video =mongoose.model("youtubeVideos",userSchema);

export default video;