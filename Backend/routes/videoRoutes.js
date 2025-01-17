import { addVideo, decreaseLikes, deleteVideo, getVideos, increaseLikes } from "../controllers/videoController.js";

// routes for all video related actions
export function videoRoutes(app){
    app.get("/videos",getVideos);

    app.put("/uplike",increaseLikes);

    app.put("/downlike",decreaseLikes);

    app.post("/addvideo",addVideo);

    app.delete("/deletevideo",deleteVideo);
}