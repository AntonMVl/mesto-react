import React, { useContext, useState, useEffect } from "react";
import { PopupWithForm } from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export function ProfilePopup({isOpen, onClose, onUpdateUser, onClickOverlay}) {
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleChangeName(evt) {
        setName(evt.target.value)
    }

    function handleChangeJob(evt) {
        setDescription(evt.target.value)
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    } 

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="user-info"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            onClickOverlay={onClickOverlay}
        >
            <fieldset className="popup__form-input-container">
                <fieldset className="popup__input-container">
                    <input
                        id="name"
                        type="text"
                        className='popup__form-input popup__form-input_add_name'
                        autoComplete="off"
                        required
                        minLength="2"
                        maxLength="40"
                        name="userName"
                        placeholder="Введите Ваше имя"
                        onChange={handleChangeName}
                    />
                    <span id="error-name" className="popup__error"></span>
                </fieldset>
                <fieldset className="popup__input-container">
                    <input
                        id="job"
                        type="text"
                        className='popup__form-input popup__form-input_add_job'
                        autoComplete="off"
                        required
                        minLength="2"
                        maxLength="200"
                        name="job"
                        placeholder="Введите Ваш род занятий"
                        onChange={handleChangeJob}
                    />
                    <span id="error-job" className="popup__error"></span>
                </fieldset>
            </fieldset>
        </PopupWithForm>
    );
}
