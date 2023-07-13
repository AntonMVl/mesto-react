import likeImage from "../images/icons/Vector.svg";
import deleteImage from "../images/icons/Delete.svg";
import { useContext } from "react";
import CurrentUserContext from '../contexts/CurrentUserContext'


export function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick () {
        onCardDelete(card._id)
    }

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = ( 
        `content__like-img ${isLiked && 'content__like-img_type_active'}` 
    );; 

    return (
        <li className="content__box">
            <img
                className="content__image"
                name="image"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            <div className="content__info">
                <h2 className="content__title">{card.name}</h2>
                <div className="content__like-bar">
                    <button type="button" className="content__link" >
                        <img
                            className={cardLikeButtonClassName}
                            src={likeImage}
                            alt="Лайк"
                            onClick={[handleLikeClick, handleDeleteClick]}
                        />
                    </button>
                    <p className="content__like-box">{card.likes.length}</p>
                </div>
            </div>
            {isOwn && <button className="content__delete-button">
                <img
                    src={deleteImage}
                    alt="Удаление"
                    className="content__delete-button-icon"
                />
            </button>}
        </li>
    );
}
