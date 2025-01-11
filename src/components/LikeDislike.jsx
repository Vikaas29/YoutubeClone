import { useState } from "react";
export function LikeDislike(){
    const [liked,setLiked]=useState("/UI/like.png");
    const [dislike,setDisliked]=useState("/UI/dislike.png");

    function likeClicked(){
        if(liked=="/UI/like.png"){
            setLiked("/UI/yesLiked.png");
            setDisliked("/UI/dislike.png");
        }
        else{
            setLiked("/UI/like.png");
        }
    }
    function dislikeClicked(){

        if(dislike=="/UI/dislike.png"){
        setDisliked("/UI/dislikes.png");
        setLiked("/UI/like.png");
        }
        else{
            setDisliked("/UI/dislike.png");
        }
    }
    return (<>
    <div className="flex justify-center items-center border border-white bg-gray-500 rounded-[50px] p-[5px] lg:w-[150px]">
        <img src={liked} alt=""  className=" w-[40px]" onClick={likeClicked}/>
        <div className="border border-white h-[30px] "></div>
        <img src={dislike} alt="" className=" w-[40px]" onClick={dislikeClicked} />
    </div>
    </>)
}