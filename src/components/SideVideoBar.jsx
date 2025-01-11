export function SideVideoBar(props){

    const e=props.data;

return (<>
        <div  className="w-[100%] m-[30px] flex">
            <img src={`/${e.thumbnail}`} alt="" className="w-[50%] cursor-pointer rounded-md" onClick={()=>{navigate(`/video/${e.videoId}`)}}/>

            <div className="flex flex-col justify-center items-start text-sm m-[10px] gap-[10px]">
                <div className="cursor-pointer font-bold" onClick={()=>{navigate(`/video/${e.videoId}`)}}>{e.title}</div>
                <div className="flex flex-col justify-start items-start font-semibold text-gray-400">
                    
                    <div>VIKAS YADAV</div>
                    
                    <div className="flex">
                        <div>{e.views} views</div>
                        <pre>   </pre>
                        <div>{e.uploadDate}</div>
                    </div>
                </div>
            </div>
        </div>
</>)
}