import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export function Navigation(){

    const navigate=useNavigate();

    const Nav=useSelector((store)=>store.NavBar.value);
    console.log(Nav)

    // console.log(useOutletContext);
    // const {navVisibility,videoFilter}=useOutletContext();
    let v=Nav;

    return(<>
    <div className={`${v} min-w-[150px] h-[100vh] absolute bg-black`}>
        <div className="flex justify-start items-center m-[20px] cursor-pointer" onClick={()=>{navigate("/")}}>
            <img src="/UI/home.png" alt="" className="w-[30px]" /> Home
        </div>
        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/shorts.png" alt="" className="w-[30px]" /> Shorts
        </div>
        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/subscriptions.png" alt="" className="w-[30px]" /> Subscriptions
        </div>

        <div className="border"></div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/history.png" alt="" className="w-[30px]" /> History
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/trending.png" alt="" className="w-[30px]" /> Trending
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/music.png" alt="" className="w-[30px]" /> Music
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/movies.png" alt="" className="w-[30px]" />Movies
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/gaming.png" alt="" className="w-[30px]" />Gaming
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/sports.png" alt="" className="w-[30px]" />Sports
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/shopping.png" alt="" className="w-[30px]" />Shopping
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/studio.png" alt="" className="w-[30px]" />Studio
        </div>

        <div className="border"></div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/settings.png" alt="" className="w-[30px]" />Settings
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/report.png" alt="" className="w-[30px]" />Report
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/help.png" alt="" className="w-[30px]" />Help
        </div>

        <div className="flex justify-start items-center m-[20px]">
            <img src="/UI/feedback.png" alt="" className="w-[30px]" />Feedback
        </div>

    </div>
    </>)
}