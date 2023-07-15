import React from 'react';

export function ConfirmPopup({ onClose, isOpen, onSubmit, onClickOverlay }) {
    return (
        <>
            <section
                className={`popup popup_type_delete-confirmed ${
                    isOpen ? 'popup_opened' : ''
                }`}
                onClick={onClickOverlay}
            >
                <div className="popup__container popup__container_type_delete-confirmed">
                    <button
                        type="button"
                        className="popup__close"
                        onClick={onClose}
                    ></button>
                    <h2 className="popup__title popup__title_type_confirmation">
                        Вы уверены?
                    </h2>
                    <button
                        type="submit"
                        className="popup__input-button popup__input-button_type_confirmation"
                        onClick={onSubmit}
                    >
                        Да
                    </button>
                </div>
            </section>
        </>
    );
}
