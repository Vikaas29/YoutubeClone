import { useEffect, useState } from "react";
import { VideoCard } from "./videoCard";
import { useSelector } from "react-redux";

export function VideoCardHolder(){

    const filter=useSelector((store)=>store.Filter.value);

    const [data,setData]=useState(null);
    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://youtube-backend-nexn.onrender.com/videos");
            const result= await response.json();   
            setData(result);
        }
        retrieve();
    },[]);

    // console.log(data);


    if(!data){
        return (<>
       <div className="w-[100%] h-[100vh] flex justify-center items-center">
       <img src="/UI/loading.png" alt="" className="loading" />
       </div>
        </>)
    }

    if(data)
   { return (<>
    
    <div className="flex justify-center items-center flex-wrap">
    {data.filter(e=>{return e.title.toLowerCase().includes(filter.toLowerCase())}).map((e)=>{return <VideoCard d={e} key={e._id}></VideoCard>})}
    </div>
    </>)}
}