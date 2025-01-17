import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OneComment } from "./OneComment";

export function Comments(props){

    const navigate=useNavigate();

    const userName= localStorage.getItem("userName");
    const email=localStorage.getItem("email");
    const JWT=localStorage.getItem("jwt");

    const [comment,setComment]=useState("");

    const [reload,setReload]=useState(true);
    

    const id=props.id;

    const [data,setData]=useState(null);
    // use effect to fetch comment data
    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://youtube-backend-nexn.onrender.com/comment");
            const result= await response.json();   
            setData(result);

        }
        retrieve();
    },[reload]);

    // function to handle adding of a comment to videos
    async function handleSubmitComment(){
        if(comment==""){return}

        const saveUser=await fetch("https://youtube-backend-nexn.onrender.com/comment",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization": `JWT ${JWT}`
            },
            body: JSON.stringify({
                "userName":userName,
                "email":email,
                "commentData":comment,
                "videoId":id
            })
        });
        const message=await saveUser.json();
        setComment("");
        setReload(!reload);
    }

    

    async function handleEdit(){

    }

    return(<div className="flex flex-col justify-center items-center gap-5">

        {!userName && (<div onClick={()=>{navigate("/login")}} className="cursor-pointer border border-gray-600 bg-gray-600 p-3 text-2xl text-red-600 font-bold rounded-lg">
            Login to Comment
        </div>)}

        {userName && (<div className="flex flex-col gap-[5px]  justify-center items-center">
            <textarea value={comment} onChange={(e)=>{setComment(e.target.value)}} name="" id="" className="w-[300px] rounded-xl p-[10px] text-black" placeholder="Type your mind here"></textarea>
            <button onClick={handleSubmitComment} className="border border-red-600 bg-red-600 rounded-lg font-extrabold text-xl p-[5px] w-[150px]" >Comment</button>
        </div>)}

        {data && data.filter(e=>id==e.videoId).map(e=>{
            return (<OneComment key={e._id} data={{setReload,e,reload}}></OneComment>
            )})
        }

        
    </div>)
}