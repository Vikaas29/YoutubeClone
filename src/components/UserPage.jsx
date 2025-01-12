import { Header } from "./header";
import { Navigation } from "./navigationMenu";


export function UserPage(){

    const userName= localStorage.getItem("userName");

    return (<>
        <Header></Header>
        <Navigation></Navigation>
        <div className="m-10">
            <div className="flex m-10 ml-[10%] ">
                <div className="rounded-[500px] overflow-hidden w-[100px] h-[100px]">
                    <img src="/UI/loggedUser.png" alt="" className="w-[100px] h-[100px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-3xl font-semibold">{userName}</div>
                    <div className="font-bold text-gray-400">0 Subs</div>
                    <div className="border p-2 rounded-r-[50px] rounded-l-[50px] bg-gray-600 font-bold text-l cursor-pointer m-2">Subscribe</div>
                </div>
            </div>
            <div className="border "></div>
            <div>
                <div className="m-10 text-2xl">Uploads : </div>
                
            </div>
        </div>
    </>)

}