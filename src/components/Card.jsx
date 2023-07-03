import likeImage from "../images/icons/Vector.svg";
import deleteImage from "../images/icons/Delete.svg";

export function Card({ card, onCardClick }) {
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
                    <button type="button" className="content__link ">
                        <img
                            className="content__like-img"
                            src={likeImage}
                            alt="Лайк"
                        />
                    </button>
                    <p className="content__like-box">{card.likes.length}</p>
                </div>
            </div>
            <button className="content__delete-button">
                <img
                    src={deleteImage}
                    alt="Удаление"
                    className="content__delete-button-icon"
                />
            </button>
        </li>
    );
}
