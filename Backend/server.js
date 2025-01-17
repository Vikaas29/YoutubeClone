import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";
import { commentRoutes } from "./routes/commentRoutes.js";
import { videoRoutes } from "./routes/videoRoutes.js";
import cors from 'cors';
import { channelRoutes } from "./routes/channelRoutes.js";


const app=new express();

const router= express.Router();

// mongoose DB connection point
mongoose.connect("mongodb+srv://vikas4644:apWXIcyNSSz8ZxgR@cluster0.dmpcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const db=mongoose.connection;

// to be displayed in case of successfull connection
db.on("open",()=>{
    console.log("connection success");
});

// to be displayed in case of unsuccessfull connection
db.on("error",()=>{
    console.log("connection unsuccess");
});

// local port server
app.listen(4000,()=>{
    console.log("server is running at port 4000");
});

app.use(cors());
app.use(express.json());

userRoutes(app);

commentRoutes(app);

videoRoutes(app);

channelRoutes(app);