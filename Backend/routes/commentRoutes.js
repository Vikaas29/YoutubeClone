import { deletComment, editComment, getComment, saveComment } from "../controllers/commentController.js";
import { checkLogin } from "../middleware/checkLogin.js";

// routes for all comments related actions
export function commentRoutes(app){

    app.get("/comment",getComment)

    app.post("/comment",checkLogin,saveComment);

    app.put("/comment",checkLogin,editComment);

    app.delete("/comment",checkLogin,deletComment);
    
}