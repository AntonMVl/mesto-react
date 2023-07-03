import React, { useState } from 'react';
import '../index.css';
import { Header } from './Header';
import {Main} from './Main';
import {Footer} from './Footer';
import {ImagePopup} from './ImagePopup';
import { ProfilePopup } from './ProfilePopup';
import { AddPlacePopup } from './AddPlacePopup';
import { AvatarPopup } from './AvatarPopup';



function App(props) {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);

    function handleEditProfileClick () {
        setIsEditProfilePopupOpen(true);
    }
    
    function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true)
    }

    function handleCardClick (card){
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(false);
    }

    return (
        <>
            <body className="body">
                <div className="page">
                    <Header />
                    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
                </div>
                <Footer />
                <ProfilePopup isOpen={isEditProfilePopupOpen} onClose ={closeAllPopups}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose ={closeAllPopups}/>
                <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose ={closeAllPopups}/>
                <ImagePopup card={selectedCard} onClose ={closeAllPopups}/>
            </body>
        </>
    );
}

export default App;
