import { api } from "../utils/Api";
import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import buttonUserNameImage from "../images/icons/Vector.png";
import buttonAddNewImage from "../images/icons/plus.png";

export function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUser()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((error) => {
                console.log(error);
            });

        api.getCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <img className="profile__image" src={userAvatar} alt="Аватар" />
                <button
                    className="profile__image-button"
                    type="button"
                    onClick={onEditAvatar}
                ></button>
                <div className="profile__user-info">
                    <div className="profile__input-info">
                        <h1 className="profile__name">{userName}</h1>
                        <button
                            type="button"
                            onClick={onEditProfile}
                            className="profile__editing-button link"
                        >
                            <img
                                className="profile__editing-img"
                                src={buttonUserNameImage}
                                alt="Редактирование профиля"
                            />
                        </button>
                    </div>
                    <p className="profile__job-title">{userDescription}</p>
                </div>
                <button
                    type="button"
                    onClick={onAddPlace}
                    className="profile__content-button link"
                >
                    <img
                        className="profile__content-img"
                        src={buttonAddNewImage}
                        alt="Кнопка добавления контента"
                    />
                </button>
            </section>
            <section className="content">
                <ul className="content__box-list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}
