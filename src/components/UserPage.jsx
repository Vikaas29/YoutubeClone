import { useEffect, useState } from "react";
import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { useNavigate } from "react-router-dom";
import { VideoCard } from "./videoCard";


export function UserPage(){

    const navigate=useNavigate();
    const [reload,setReload]=useState(true);

    const flag=true;


    const userName= localStorage.getItem("channelName");
    const email=localStorage.getItem("email");

    async function handleDelete() {
        const choice=confirm("are you sure you want to delete the channel");

       

        if(choice==true)
        {
            const saveUser=await fetch("https://youtube-backend-nexn.onrender.com/deletechannel",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email:email,
                })
            });
    
            const message=await saveUser.json();
           
    
    
            if(message.message=="Channel deleted")
            {
                localStorage.setItem("channelName","");
                setTimeout(()=>{
                navigate("/");
            },1000);
        }
        }
    }
    function handleAddVideo(){
        navigate("/addvideo");
    }

    const [data,setData]=useState(null);
    useEffect(()=>{
        async function retrieve(){
            const response=await fetch("https://youtube-backend-nexn.onrender.com/videos");
            const result= await response.json();   
            setData(result);
        }
        retrieve();
    },[reload]);



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
                    <img src="/UI/loggedUser.png" alt="" className="w-[100px] h-[100px]" />
                </div>
                <div className="flex flex-col justify-center items-start ">
                    <div className="text-3xl font-semibold ml-[20px]">{userName}</div>
                    <div className="font-bold text-gray-400 ml-[20px]">0 Subs</div>
                    <div className="flex flex-col md:flex-row md:gap-5">
                    <div className=" text-center border p-2 rounded-r-[50px] rounded-l-[50px] bg-gray-600 font-bold text-l cursor-pointer m-2">Subscribe</div>
                    <div onClick={handleAddVideo} className="text-center border p-2 rounded-r-[50px] rounded-l-[50px] bg-cyan-600 font-bold text-l cursor-pointer m-2 w-[100px]">Add Video</div>
                    <div onClick={handleDelete} className="text-center border p-2 rounded-r-[50px] rounded-l-[50px] bg-red-600 font-bold text-l cursor-pointer m-2">Delete Channel</div>
                    </div>
                </div>
            </div>
            <div className="border "></div>
            <div className="">

                <div className="m-10 text-2xl">Uploads : </div>
                <div className="flex flex-wrap justify-center items-center">
                    {data.filter(e=>e.owner==userName).map((e)=>{return <VideoCard d={e} flag={flag} reload={reload} setReload={setReload} key={e._id}></VideoCard>})}
                </div>
                
            </div>
        </div>
    </>)

}