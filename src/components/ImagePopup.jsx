export function ImagePopup({ card, onClose, isOpen, onClickOverlay }) {
    return (
        <section
            className={`popup popup_color_background-dark popup_type_open-img ${
                isOpen ? 'popup_opened' : ''
            }`}
            onClick={onClickOverlay}
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
        </section>
    );
}
