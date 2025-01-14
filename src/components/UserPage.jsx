import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { useNavigate } from "react-router-dom";


export function UserPage(){

    const navigate=useNavigate();

    const userName= localStorage.getItem("channelName");
    const email=localStorage.getItem("email");

    async function handleDelete() {
        const choice=confirm("are you sure you want to delete the channel");

        if(choice==true);
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
                    <div className="flex  gap-5">
                    <div className="border p-2 rounded-r-[50px] rounded-l-[50px] bg-gray-600 font-bold text-l cursor-pointer m-2">Subscribe</div>
                    <div onClick={handleDelete} className="border p-2 rounded-r-[50px] rounded-l-[50px] bg-red-600 font-bold text-l cursor-pointer m-2">Delete Channel</div>
                    </div>
                </div>
            </div>
            <div className="border "></div>
            <div>
                <div className="m-10 text-2xl">Uploads : </div>
                
            </div>
        </div>
    </>)

}