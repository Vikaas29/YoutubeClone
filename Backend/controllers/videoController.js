import video from "../models/videoModel.js";


// controller to get all video data
export async function getVideos(req,res) {
    res.send(await video.find());
}

// controller to increase like in a video data
export async function increaseLikes(req,res) {
    
    const {id}=req.body;

    await video.updateOne({"videoId":id},{$inc : {likes: 1}})

    res.send("updation successfull");
}

// controller to decrease like in a video data
export async function decreaseLikes(req,res) {
    
    const {id}=req.body;

   await video.updateOne({"videoId":id},{$inc : {likes: -1}});

   res.send("updation successfull");

}

// controller to add video
export async function addVideo(req,res){
    try{const{videoId,url,title,thumbnail,description,genre,owner}=req.body;

        const newVideo= new video({
            videoId: videoId,
            url:url,
            title:title,
            thumbnail:thumbnail,
            description:description,
            genre:genre,
            owner:owner
        });

        await newVideo.save();
      

      res.status(201).json({"message":"video added"});}
      catch(err){
        res.status(400).json({"message":err});
      }
}

// controller to delete video
export async function deleteVideo(req,res){
    try{const{id}=req.body

    await video.deleteOne({_id:id});

    res.status(200).json({message:"video deleted"});}
    catch(err){
        res.status(400).json({"message":err});
      }
}