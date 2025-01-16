import { useState } from "react";
import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { useNavigate } from "react-router-dom";

export function AddVideo(){
    
    const navigate=useNavigate();

    
    const [videoId,setVideoId]=useState("");
    const [title,setTitle]=useState("");
    const [url,setUrl]=useState("");
    const [thumbnail,setThumbnail]=useState("");
    const [description,setDescription]=useState("");
    const [genre,setGenre]=useState("");
    
    const owner=localStorage.getItem("channelName");


    async function submit(e){
        e.preventDefault();

        if(videoId==""||title==""||url==""||thumbnail==""||description==""||genre=="")
            {alert("feilds cannot be empty");return}

        if(videoId.includes(" ")){alert("video ID cannot have a 'Space'"); return}

        const saveUser=await fetch("https://youtube-backend-nexn.onrender.com/addvideo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                videoId:videoId,
                title:title,
                url:url,
                thumbnail:thumbnail,
                description:description,
                genre:genre,
                owner:owner

            })
        });

        const message=await saveUser.json();

        if(message.message=="video added")
        {
            
            setTimeout(()=>{
            navigate("/userpage");
        },1000);
    }
    }

    return(<>
    <Header></Header>
    <Navigation></Navigation>
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <form action="" className=" border border-white rounded-lg w-[50%] p-[5%] flex flex-col gap-10 justify-center items-center">
            <input type="text" onChange={(e)=>{setVideoId(e.target.value)}} placeholder="Video ID" className="w-[70%] text-xl p-[5px] rounded-lg text-black" />
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" className="w-[70%] text-xl p-[5px] rounded-lg text-black" />
            <input type="text" onChange={(e)=>{setUrl(e.target.value)}} placeholder="Enter Video URL" className="w-[70%] text-xl p-[5px] rounded-lg text-black"/>
            <input type="text" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" className="w-[70%] text-xl p-[5px] rounded-lg text-black"/>
            <input type="text" onChange={(e)=>{setThumbnail(e.target.value)}} placeholder="Enter Thumbnail URL" className="w-[70%] text-xl p-[5px] rounded-lg text-black"/>
            <input type="text" onChange={(e)=>{setGenre(e.target.value)}} placeholder="Genre" className="w-[70%] text-xl p-[5px] rounded-lg text-black"/>

            <button type="submit" onClick={(e)=>{submit(e)}} className="border border-red-600 bg-red-600 font-bold w-[70%] text-xl p-[5px] rounded-lg">Submit</button>
           
        </form>

        
    </div>
    </>)
}

export default AddVideo;