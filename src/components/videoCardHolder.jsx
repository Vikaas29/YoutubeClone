import { useEffect, useState } from "react";
import { VideoCard } from "./videoCard";
import { useSelector } from "react-redux";

export function VideoCardHolder(){

    const filter=useSelector((store)=>store.Filter.value);

    const [data,setData]=useState(null);
    const [genre,setGenre]=useState("");

    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://youtube-backend-nexn.onrender.com/videos");
            const result= await response.json();   
            setData(result);
        }
        retrieve();
    },[]);


    if(!data){
        return (<>
       <div className="w-[100%] h-[100vh] flex justify-center items-center">
       <img src="/UI/loading.png" alt="" className="loading" />
       </div>
        </>)
    }

    if(data)
   { return (<>
        <div className="flex flex-col">
        <div className="flex gap-5 ml-[20px] overflow-auto justify-center items-center">
            <div onClick={()=>{setGenre("")}} className=" hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-[500px] p-[10px] text-center ">All</div>
            <div onClick={()=>{setGenre("comedy")}} className="hover:bg-red-600  cursor-pointer border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] text-center ">Comedy</div>
            <div onClick={()=>{setGenre("coding")}} className="hover:bg-red-600  cursor-pointer border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] text-center ">Coding</div>
            <div onClick={()=>{setGenre("music")}} className="hover:bg-red-600  cursor-pointer border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] text-center ">Music</div>
            <div onClick={()=>{setGenre("educational")}} className="hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] text-center ">Educational</div>
            <div onClick={()=>{setGenre("")}} className="hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] text-center ">Gaming</div>
            <div onClick={()=>{setGenre("")}} className="hover:bg-red-600 cursor-pointer border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] text-center ">Retro</div>
        </div>
            
        <div className="flex justify-center items-center flex-wrap">
        {data.filter(e=>{return e.genre.includes(genre)}).filter(e=>{return e.title.toLowerCase().includes(filter.toLowerCase())}).map((e)=>{return <VideoCard d={e} key={e._id}></VideoCard>})}
        </div>
        </div>
    </>)}
}