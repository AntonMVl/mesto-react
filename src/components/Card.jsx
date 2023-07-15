import deleteImage from '../images/icons/Delete.svg';
import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { LikeButton } from './LikeButton';

export function Card({ card, onCardClick, onDeleteCardClick }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    function handleClick() {
        onCardClick(card);
    }

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
                    <LikeButton card={card} />
                </div>
            </div>
            {isOwn && (
                <button
                    className="content__delete-button"
                    onClick={() => onDeleteCardClick(card._id)}
                >
                    <img
                        src={deleteImage}
                        alt="Удаление"
                        className="content__delete-button-icon"
                    />
                </button>
            )}
        </li>
    );
}
