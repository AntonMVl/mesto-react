import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ImagePopup } from "./ImagePopup";
import { ProfilePopup } from "./ProfilePopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { AvatarPopup } from "./AvatarPopup";
import { api } from "../utils/Api";
import CurrentUserContext from '../contexts/CurrentUserContext'


function App(props) {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        api.getUser()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsImagePopupOpen(false);
        setSelectedCard({});
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="body">
                    <div className="page">
                        <Header />
                        <Main
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onCardClick={handleCardClick}
                        />
                    </div>
                    <Footer />
                    <ProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                    />
                    <AvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                    />
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                        isOpen={isImagePopupOpen}
                    />
                </div>
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
