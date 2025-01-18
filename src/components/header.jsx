import { useState } from "react";
import { Navigation } from "./navigationMenu";
import { VideoCardHolder } from "./videoCardHolder";
import { Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeState } from "../utils/NavBarSlice.js";
import { changeFilterState } from "../utils/FilterSlice.js";
import { useNavigate } from "react-router-dom";

export function Header(){
    
    const userName= localStorage.getItem("userName");
    const email=localStorage.getItem("email");
    const channelName=localStorage.getItem("channelName")

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [visibility,setVisibility]=useState("hidden");
    const [text,setText]=useState("");

    function setFilter(){
        dispatch(changeFilterState(text));
    }

    function setUserVisibility(){
        if(visibility=="hidden")
            {
                setVisibility("block")
            }
        else 
        setVisibility("hidden");
    }

    function setNav(){
        dispatch(changeState());
    }

    return (<>

    <header className="flex justify-center items-center m-[10px]">
    <div className="flex justify-start items-center w-[15%]">
        <div className="w-[40px] min-w-[40px]" onClick={setNav}>
            <img src="/UI/hamburger.png" alt="menu" className="w-[40px] " />
        </div>
        <div  onClick={()=>{navigate("/"),dispatch(changeFilterState(""));}} className="hidden sm:flex ml-6 justify-center items-center cursor-pointer  ">
            <img src="/UI/youtubeLogo.png" alt="" className=" w-[20px] sm:w-[30px] md:w-[40px]"/>
            <h1 className="flex justify-center items-center text-[15px] md:text-[25px]  h-[40px]">YouTube</h1>
        </div>
    </div>
    <div className="w-[60%] sm:w-[70%] flex justify-center content-center ">
        <div className="w-[100%] flex justify-center content-center ">
            <input type="text" className="bg-black border border-white w-[150px] sm:w-[50%] h-[40px] rounded-l-[50px] p-4" onChange={(e)=>{
                setText(e.target.value),dispatch(changeFilterState(text));;
            }} placeholder="Search"/>
            <button onClick={()=>{setFilter(); navigate("/")} } className="hover:bg-gray-700 border border-white bg-slate-500 w-[50px] h-[40px]  flex justify-center content-center rounded-r-[50px] ">
                <img src="/UI/search.png" alt="search" className="w-[35px] " />
            </button>
        </div>
    </div>
    <div className="w-[15%] flex justify-end items-center">
        
        { !userName && (<div onClick={()=>{navigate("/login")}} className=" cursor-pointer flex justify-center items-center  p-[2px] w-[100px] ">
            <img src="/UI/user.png" alt="" className="h-[40px]" /> 
            <div className="flex justify-center items-center ">Sign In</div>
        </div>)}

        

        {userName && (<><div className="flex justify-center items-center border border-white rounded-full" onClick={setUserVisibility}>
            <img src="/UI/loggedUser.png" alt="" className="w-[40px]" />
        </div>

        <div className={`${visibility} absolute border bg-black border-white top-[60px] p-[10px] rounded-md gap-3 `}>
            <div className="flex flex-col justify-center items-center">
                <div className="flex  justify-center items-center">
                    <img src="/UI/loggedUser.png" alt="userImage" className="w-[40px]"/> 
                    <div>
                        <div>{userName}</div>
                        <div>{email}</div>
                     </div>
                </div>
                
            </div>
            <div className="border h-[1px]"></div>
            <div className="flex justify-start items-center">
                {channelName=="" && (<span onClick={()=>{navigate("/createchannel"); setUserVisibility()}} className="cursor-pointer text-red-600">Create channel</span>)}
                {channelName!="" && (<span onClick={()=>{navigate("/userpage"); setUserVisibility()}} className="cursor-pointer text-blue-700">view your channel</span>)}
            </div>
            <div className="border h-[1px] w-[100%]"></div>
            <div className="flex justify-start items-center">
               <img src="/UI/googleaccounts.png" alt="" className="w-[20px]"/> Google Account
            </div>
            <div className="border h-[1px]"></div>
            <div className="flex justify-start items-center">
               <img src="/UI/accounts.png" alt="" className="w-[20px]"  /> Switch Account
            </div>
            <div className="border h-[1px]"></div>
            <div className="flex justify-start items-center">
                <img src="/UI/studio.png" alt=""className="w-[20px]" /> Youtube Studio
            </div>
            <div className="border h-[1px]"></div>
            <div onClick={()=>{localStorage.clear(); navigate("/")}} className="cursor-pointer flex justify-start items-center text-red-600">
                <img src="/UI/logout.png" alt=""  className="w-[20px]"/>  Logout
            </div>
        </div> </>)}
    </div>
    </header>
    
    </>);
}