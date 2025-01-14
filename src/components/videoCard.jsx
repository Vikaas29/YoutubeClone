import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function VideoCard(props){

    const navigate=useNavigate();

    async function handleVideoDelete(){
        const deleteUser=await fetch("https://youtube-backend-nexn.onrender.com/deletevideo",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id:props.d._id
            })
        });
        const message=await deleteUser.json();
        props.setReload(!props.reload);
    }
    
    return(<>

        <div className="w-[400px] m-[30px]">
            <img src={`${props.d.thumbnail}`} alt="" className="w-[400px] cursor-pointer" onClick={()=>{navigate(`/video/${props.d.videoId}`)}}/>

            <div className="cursor-pointer" onClick={()=>{navigate(`/video/${props.d.videoId}`)}}>{props.d.title}</div>

            <div className="flex justify-start items-center">
                <div onClick={()=>{navigate("/mainadmin")}} className=" cursor-pointer rounded-[500px] overflow-hidden w-[30px] h-[30px] mr-[10px]">
                    {!props.d.owner &&(<img src="/UI/mainadmin.jpg" alt="" className="w-[30px] h-[30px]" />)}
                    {props.d.owner &&(<img src="/UI/loggedUser.png" alt="" className="w-[30px] h-[30px]" />)}
                </div>
                {!props.d.owner && (<div onClick={()=>{navigate("/mainadmin")}} className="cursor-pointer">VIKAS YADAV</div>)}
                {props.d.owner && (<div onClick={()=>{navigate("/userpage")}} className="cursor-pointer">{props.d.owner}</div>)}
                <pre>   </pre>
                <div>{props.d.views} views</div>
                <pre>   </pre>
                <div>{props.d.uploadDate}</div>
                {props.flag && (<div onClick={handleVideoDelete} className="ml-[10px] border border-red-600 bg-red-600 rounded-lg cursor-pointer"> Delete</div>)}
            </div>
        </div>
    </>)
}