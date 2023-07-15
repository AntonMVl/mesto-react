import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import likeImage from '../images/icons/Vector.svg';
import { api } from '../utils/Api';

export function LikeButton({ card }) {
    const currentUser = useContext(CurrentUserContext);
    const [isLike, setIsLike] = useState(false);
    const [likeArray, setLikeArray] = useState(card.likes.length);

    useEffect(() => {
        setIsLike(card.likes.some((i) => i._id === currentUser._id));
    }, [card.likes, currentUser._id]);

    function handleLike() {
        if (isLike) {
            api.deleteLike(card._id)
                .then((data) => {
                    setIsLike(false);
                    setLikeArray(data.likes.length);
                })
                .catch((err) =>
                    console.error(`Ошибка при сбросе лайка ${err}`)
                );
        } else {
            api.addLike(card._id)
                .then((data) => {
                    setIsLike(true);
                    setLikeArray(data.likes.length);
                })
                .catch((err) =>
                    console.error(`Ошибка при добавлении лайка ${err}`)
                );
        }
    }

    return (
        <>
            <button
                type="button"
                className="content__link"
                onClick={handleLike}
            >
                <img
                    className={`content__like-img ${
                        isLike && 'content__like-img_type_active'
                    }`}
                    src={likeImage}
                    alt="Лайк"
                />
            </button>
            <p className="content__like-box">{likeArray}</p>
        </>
    );
}
