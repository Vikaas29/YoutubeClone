
import { login, registerUser } from "../controllers/userController.js";

// routes for all user related data
export function userRoutes(app){

    app.post("/register",registerUser);
    
    app.post("/login",login);

}