import { createChannel, deleteChannel } from "../controllers/channelController.js";
import { checkLogin } from "../middleware/checkLogin.js";

// routes for all channel related actions
export function channelRoutes(app){

    app.put("/createchannel",checkLogin,createChannel);
    
    app.put("/deletechannel",checkLogin,deleteChannel);

}