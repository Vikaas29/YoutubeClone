import { useState } from "react";
export function LikeDislike(props){
    const [liked,setLiked]=useState("/UI/like.png");
    const [dislike,setDisliked]=useState("/UI/dislike.png");
    const [like,setLike]=useState(0);

    // function to handle all actions related to like
    function likeClicked(){
        if(liked=="/UI/like.png"){
            setLiked("/UI/yesLiked.png");
            setDisliked("/UI/dislike.png");
            setLike(1);
        }
        else{
            setLiked("/UI/like.png");
            setLike(0);
        }
        
    }

    // function to handle all actions related to dislike
    function dislikeClicked(){

        if(dislike=="/UI/dislike.png"){
        setDisliked("/UI/dislikes.png");
        setLiked("/UI/like.png");
        setLike(0);
        }
        else{
            setDisliked("/UI/dislike.png");
        }
    }
    return (<>
    <div className="flex justify-center items-center border border-white bg-gray-500 rounded-[50px] p-[5px] lg:w-[150px]">
        <div className="flex justify-center items-end">
        <img src={liked} alt=""  className=" w-[40px]" onClick={likeClicked}/>
        <div className="text-gray-700 font-semibold">{props.data.likes+like}</div>
        </div>
        <div className="border border-white h-[30px] "></div>
        <img src={dislike} alt="" className=" w-[40px]" onClick={dislikeClicked} />
    </div>
    </>)
}