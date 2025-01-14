import { Input } from "postcss";
import { useEffect, useState } from "react";


export function OneComment(prop){

    

    const {setReload,e,reload}=prop.data;
    const userName= localStorage.getItem("userName");
    const email=localStorage.getItem("email");

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(e.commentData);
    const [initialLoad,setInitialLoad]=useState(true);

    useEffect(()=>{
        if(initialLoad==false)
        {handleSaveEdit()}
        else
        setInitialLoad(false)
    },[text])

    async function handleDelete(commentId){
        const deleteUser=await fetch("https://youtube-backend-nexn.onrender.com/comment",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id:commentId
            })
        });
        const message=await deleteUser.json();
        setReload(!reload);
    }

    function handleEdit(){
        setIsEditing(true);
    }
    async function handleSaveEdit(){
        if(text==""){alert("comment cant be empty"); return;}

        const updateComment=await fetch("https://youtube-backend-nexn.onrender.com/comment",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "commentData":text,
                "id":e._id
            })
        });
        const message=await updateComment.json();
       
        if(message.message=="comment updated")
        {setIsEditing(false);
        setReload(!reload);}

    }
    return(<><div key={Math.random()} className=" relative flex gap-5 border border-gray-400 bg-gray-400 justify-start items-center w-[60%] rounded-xl">
    <div className="w-[80%] flex gap-5 justify-start items-center ">
    <div className="flex gap-2 border border-gray-600 w-fit p-[5px] rounded-xl bg-gray-600">
        <img src="/UI/loggedUser.png" alt="" className="w-[30px]" />
        <div>{e.userName}</div>
    </div>
    {!isEditing &&<div className="text-black">{e.commentData}</div>}
    {isEditing && <input type="text" id="edit" defaultValue={text} onBlur={async(e)=>{await setText(e.target.value);}} className="text-black rounded-lg p-[2px]" />}
    </div>
    {email!=e.userEmail && <div className="right-5 text-gray-800 ">a while ago</div>}
    {email==e.userEmail && <div>
        {!isEditing && <div className="cursor-pointer text-purple-700 font-semibold" onClick={handleEdit}>Edit</div>}
        {isEditing && <div className="cursor-pointer text-purple-700 font-semibold" onClick={()=>{handleSaveEdit()}}>Save</div>}
        <div onClick={()=>{handleDelete(e._id)}} className="cursor-pointer text-red-700 font-semibold">Delete</div>
    </div>}
    

</div>
    </>)
}