import { useNavigate } from "react-router-dom";

export function VideoCard(props){

    const navigate=useNavigate();
    
    return(<>

        <div className="w-[400px] m-[30px]">
            <img src={`${props.d.thumbnail}`} alt="" className="w-[400px] cursor-pointer" onClick={()=>{navigate(`/video/${props.d.videoId}`)}}/>

            <div className="cursor-pointer" onClick={()=>{navigate(`/video/${props.d.videoId}`)}}>{props.d.title}</div>

            <div className="flex justify-start items-center">
                <div onClick={()=>{navigate("/mainadmin")}} className=" cursor-pointer rounded-[500px] overflow-hidden w-[30px] h-[30px] mr-[10px]">
                    <img src="/UI/mainadmin.jpg" alt="" className="w-[30px] h-[30px]" />
                </div>
                <div onClick={()=>{navigate("/mainadmin")}} className="cursor-pointer">VIKAS YADAV</div>
                <pre>   </pre>
                <div>{props.d.views} views</div>
                <pre>   </pre>
                <div>{props.d.uploadDate}</div>
            </div>
        </div>
    </>)
}