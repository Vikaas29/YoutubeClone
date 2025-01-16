import { useNavigate } from "react-router-dom"

export function Error(){

    const navigate=useNavigate()

    return (<>

    
    <main className="flex flex-col justify-center items-center gap-[50px] m-[50px]" >
        <p className="text-4xl">404......Page Not Found</p>
        <div>
            <div onClick={()=>{navigate("/")}} className="text-3xl border border-red-700 bg-red-600 text-black font-semibold p-[10px] rounded-xl cursor-pointer">Home</div>
        </div>
    </main>
    </>)
}