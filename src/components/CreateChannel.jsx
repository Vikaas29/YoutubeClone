import { useState } from "react";
import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { useNavigate } from "react-router-dom";

export function CreateChannel(){

    const navigate=useNavigate();

    const [name,setName]=useState("");
    const [handle,setHandle]=useState("");
    const JWT=localStorage.getItem("jwt");

    const email=localStorage.getItem("email");

    async function channelCreation(e) {
        e.preventDefault();

        if(name=="" || handle==""){alert("input cant be empty"); return}

        const saveUser=await fetch("https://youtube-backend-nexn.onrender.com/createchannel",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "authorization": `JWT ${JWT}`
            },
            body: JSON.stringify({
                email:email,
                channelName:name
            })
        });

        const message=await saveUser.json();


        if(message.message=="Channel created")
        {
            localStorage.setItem("channelName",name);
            setTimeout(()=>{
            navigate("/userpage");
        },1000);
    }
        
    }
    

    return (<>
    <Header></Header>
    <Navigation></Navigation>
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
        
        <form action="" className=" border border-white rounded-lg w-[50%] p-[5%] flex flex-col gap-10 justify-center items-center">
            
            <div className="text-2xl font-bold"> Create your Channel</div>

            <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Channel Name" className="w-[70%] text-xl p-[5px] rounded-lg text-black" />
            
            <input type="text"  placeholder="Channel Handle" onChange={(e)=>{setHandle(e.target.value)}} className="w-[70%] text-xl p-[5px] rounded-lg text-black"/>

            <button type="submit" onClick={(e)=>{channelCreation(e)}} className="border border-red-600 bg-red-600 font-bold w-[70%] text-xl p-[5px] rounded-lg">Submit</button>
           
        </form>

        
    </div>
    </>)
}

export default CreateChannel;