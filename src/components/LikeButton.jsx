import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import likeImage from "../images/icons/Vector.svg";


export function LikeButton(card){
    const currentUser = useContext(CurrentUserContext);
    const [isLike, setIsLike] = useState(false)
    const [likeArray, setLikeArray] = useState(card.likes.length)

    useEffect(()=>{
        setIsLike(card.likes.some(i => i._id === currentUser._id))
    },[card.likes, currentUser._id])

    // const isLiked = card.likes.some(i => i._id === currentUser._id);


    return (
        <>
        <button type="button" className="content__link" >
                        <img
                            className={`content__like-img`}
                            src={likeImage}
                            alt="Лайк"
                        />
                    </button>
                    <p className="content__like-box">{likeArray}</p>
        </>
    )
}

// ${isLike && 'content__like-img_type_active'}