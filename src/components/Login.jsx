import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Navigation } from "./navigationMenu";

export function Login(){

    const navigate=useNavigate();

    const [email,setEmail]=useState();
    
    const [password,setPassword]=useState();

    async function login(e){
        e.preventDefault();

        if(!email.includes("@") || !email.includes(".com")){
            alert("enter email correctly");
            return;
        }

        if(!email || !password){
            alert("all fields are necessary");
            return;
        }

        const saveUser=await fetch("https://youtube-backend-nexn.onrender.com/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email:email,
                password:password
            })
        });

        const message=await saveUser.json();
        
        if(message.User){
            localStorage.setItem("userName",message.User.userName);
            localStorage.setItem("email",message.User.email);
            localStorage.setItem("token",message.token);
            localStorage.setItem("channelName",message.User.channelName);
        }
        alert(message.message);


        if(message.message=="Login Successfull")
        {
            setTimeout(()=>{
            navigate("/");
        },1000);
    }

    }

    return (<>
    <Header></Header>
    <Navigation></Navigation>
    
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <form action="" className=" border border-white rounded-lg w-[50%] p-[5%] flex flex-col gap-10 justify-center items-center">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="w-[70%] text-xl p-[5px] rounded-lg text-black" />
            
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" className="w-[70%] text-xl p-[5px] rounded-lg text-black"/>

            <button type="submit" onClick={(e)=>{login(e)}} className="border border-red-600 bg-red-600 font-bold w-[70%] text-xl p-[5px] rounded-lg">Submit</button>
            <div>
             Don't have a account? <span className="text-red-600 font-bold cursor-pointer" onClick={()=>{navigate("/signup")}}>Sign up here</span>
            </div>
        </form>

        
    </div>
    </>)
}