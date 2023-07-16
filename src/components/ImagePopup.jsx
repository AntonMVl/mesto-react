import { Popup } from './Popup';

export function ImagePopup({
    card,
    onClose,
    isOpen,
    classValue,
    isAnyPopupOpen,
}) {
    return (
        <Popup
            classValue={classValue}
            isOpen={isOpen}
            onClose={onClose}
            isAnyPopupOpen={isAnyPopupOpen}
        >
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close"
                    onClick={onClose}
                ></button>
                <img
                    alt={card.name ? card.name : '#'}
                    src={card.link ? card.link : '#'}
                    className="popup__image"
                />
                <h2 className="popup__image-title">{card.name}</h2>
            </div>
        </Popup>
    );
}
