
export function ImagePopup({card, onClose}) {
    return (
        <section className={`popup popup_color_background-dark popup_type_open-img ${card ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={onClose}></button>
                <img src={card.link ? card.link : "#"} alt="" className="popup__image"/>
                <h2 className="popup__image-title"></h2>
            </div>
        </section>
    )
    
}