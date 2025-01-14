import { useState, useEffect } from "react";
import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { VideoCard } from "./videoCard";

export function AdminPage(){

    const [data,setData]=useState(null);

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
        <Header></Header>
        <Navigation></Navigation>
       <div className="w-[100%] h-[100vh] flex justify-center items-center">
       <img src="/UI/loading.png" alt="" className="loading" />
       </div>
        </>)
    }

    if(data)
    return (<>
        <Header></Header>
        <Navigation></Navigation>
        <div className="m-10">
            <div className="flex m-10 ml-[10%] ">
                <div className="rounded-[500px] overflow-hidden w-[100px] h-[100px]">
                    <img src="/UI/mainadmin.jpg" alt="" className="w-[100px] h-[100px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-3xl font-semibold">Vikas Yadav</div>
                    <div className="font-bold text-gray-400">1k Subs</div>
                    <div className="border p-2 rounded-r-[50px] rounded-l-[50px] bg-gray-600 font-bold text-l cursor-pointer m-2">Subscribe</div>
                </div>
            </div>
            <div className="border "></div>
            <div>
                <div className="m-10 text-2xl">Uploads : </div>
                <div className="flex flex-wrap justify-center items-center">
                    {data.map((e)=>{return <VideoCard d={e} key={e._id}></VideoCard>})}
                </div>
            </div>
        </div>
    </>)
}