import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { ImagePopup } from './ImagePopup';
import { ProfilePopup } from './ProfilePopup';
import { AddPlacePopup } from './AddPlacePopup';
import { AvatarPopup } from './AvatarPopup';
import { ConfirmPopup } from './ConfirmPopup';
import { api } from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App(props) {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [deleteCard, setDeleteCard] = useState('');

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
        addEventListenerByDocument();
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
        addEventListenerByDocument();
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
        addEventListenerByDocument();
    }

    function handleCardClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard(card);
        addEventListenerByDocument();
    }

    function handleConfirmPopupClick(cardId) {
        setDeleteCard(cardId);
        setConfirmPopupOpen(true);
        addEventListenerByDocument();
    }

    const closeAllPopups = useCallback(() => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsImagePopupOpen(false);
        setConfirmPopupOpen(false);
        setSelectedCard({});
    }, []);

    const closePopupByEscape = useCallback(
        (e) => {
            if (e.key === 'Escape') {
                closeAllPopups();
                document.removeEventListener('keydown', closePopupByEscape);
            }
        },
        [closeAllPopups]
    );

    function addEventListenerByDocument() {
        document.addEventListener('keydown', closePopupByEscape);
    }

    const closePopupByOverlay = useCallback(
        (e) => {
            if (
                e.target.classList.contains('popup_opened') ||
                e.target.classList.contains('popup__close')
            ) {
                closeAllPopups();
            }
        },
        [closeAllPopups]
    );

    useEffect(() => {
        Promise.all([api.getUser(), api.getCards()])
            .then(([userData, cardsData]) => {
                setCurrentUser(userData);
                setCards(cardsData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleUpdateUser({ name, about }) {
        api.updateProfileInfo(name, about)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleDeleteCardSubmit(e) {
        e.preventDefault();
        api.deleteCard(deleteCard).then(() => {
            setCards(
                cards.filter((card) => {
                    return card._id !== deleteCard;
                })
            );
        });
        closeAllPopups();
    }

    function handleUpdateAvatar({ avatar }) {
        api.updateAvatar(avatar)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleAddPlaceSubmit({ name, link }) {
        api.addCard(name, link)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((error) => {
                console.log(error);
            });
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
                            cards={cards}
                            onDeleteCardClick={handleConfirmPopupClick}
                        />
                    </div>
                    <Footer />
                    <ProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        onClickOverlay={closePopupByOverlay}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateCards={handleAddPlaceSubmit}
                        onClickOverlay={closePopupByOverlay}
                    />
                    <AvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                        onClickOverlay={closePopupByOverlay}
                    />
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                        isOpen={isImagePopupOpen}
                        onClickOverlay={closePopupByOverlay}
                    />
                    <ConfirmPopup
                        onClose={closeAllPopups}
                        isOpen={confirmPopupOpen}
                        onSubmit={handleDeleteCardSubmit}
                        onClickOverlay={closePopupByOverlay}
                    />
                </div>
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
