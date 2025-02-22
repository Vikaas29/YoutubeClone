import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoCard } from "./videoCard";
import { useNavigate } from "react-router-dom";
import { SideVideoBar } from "./SideVideoBar";
import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { LikeDislike } from "./LikeDislike";
import { Comments } from "./Comments";

export function VideoPlayerPage(){
    const navigate=useNavigate();
    const params=useParams();
    const id=params.id;
    let videoData;

    

    const [data,setData]=useState(null);
    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://youtube-backend-nexn.onrender.com/videos");
            const result= await response.json();   
            setData(result);

        }
        retrieve();
    },[]);



    if(data){
        videoData=data.find(e=>e.videoId==id);
    }

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
    <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-start items-center w-[100vw] lg:w-[70vw] ">
            <div className="videoPart flex flex-col justify-center items-center m-[2%] w-[100%]">
                <iframe className=" border border-white rounded-md w-[80%] h-[60vw] lg:w-[80%] lg:h-[70vh]" src={`${videoData.url}?autoplay=1&cc_load_policy=1`} allowFullScreen></iframe>
                <div className="flex flex-col justify-start items-start w-[80%] m-[20px]">
                    <div className="text-2xl">{videoData.title}</div>
                    <div className="m-[10px] flex flex-col-reverse lg:flex-row">
                        <div className="flex justify-start items-center lg:w-[50%]">
                        {!videoData.owner && (<div onClick={()=>{navigate("/mainadmin")}} className=" cursor-pointer rounded-[500px] overflow-hidden w-[40px] h-[40px] mr-[10px]">
                         <img src="/UI/mainadmin.jpg" alt="" className="w-[40px] h-[40px]" />
                        </div>)}
                        {videoData.owner && (<div onClick={()=>{navigate("/mainadmin")}} className=" cursor-pointer rounded-[500px] overflow-hidden w-[40px] h-[40px] mr-[10px]">
                         <img src="/UI/loggedUser.png" alt="" className="w-[40px] h-[40px]" />
                        </div>)}
                            {!videoData.owner && (<div onClick={()=>{navigate("/mainadmin")}} className="text-xl font-bold cursor-pointer">Vikas Yadav</div>)}
                            {videoData.owner && (<div onClick={()=>{navigate("/mainadmin")}} className="text-xl font-bold cursor-pointer">{videoData.owner}</div>)}
                            <div className="ml-[40px] border border-white bg-white p-[5px] rounded-[50px] font-semibold text-black">Subscribe</div>
                        </div>
                        <div className="m-[10px] lg:w-[50%] flex gap-[20px] lg:justify-end lg:items-end">
                            <LikeDislike data={videoData}></LikeDislike>
                            <div className="border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] w-[100px] text-center font-bold hover:bg-red-600 flex justify-center items-center"> <img src="/UI/share.png" alt="" className="w-[20px]" />Share</div>
                            <div className="border border-gray-600 bg-gray-600 rounded-[50px] p-[10px] w-[140px] text-center font-bold hover:bg-red-600 flex justify-center items-center"><img src="/UI/download.png" alt="" className="w-[20px]" /> Download</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" border border-gray-600 bg-gray-600 p-5 rounded-lg m-[2%] w-[80%]">
                {videoData.description}
            </div>
            <div className="commentPart w-[100%]">
                <Comments id={videoData.videoId}></Comments>
            </div>

        </div>
        <div className="flex flex-row flex-wrap justify-center items-center lg:flex-col lg:flex-nowrap  lg:justify-end lg:items-end w-[100vw] lg:w-[30vw] ">
            {data.map((e)=>{ return <SideVideoBar data={e}  key={e.videoId} ></SideVideoBar> })}
        </div>
    </div>
    </>);
}

export default VideoPlayerPage;