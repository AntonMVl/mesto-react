export function PopupWithForm({
    title,
    name,
    buttonText,
    isOpen,
    onClose,
    children,
}) {
    return (
        <section
            className={`popup popup_type_${name} ${
                isOpen ? "popup_opened" : ""
            }`}
        >
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close"
                    onClick={onClose}
                ></button>
                <form
                    className="popup__form"
                    name={`${name}-container`}
                    method="post"
                    noValidate
                >
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button
                        type="submit"
                        className="popup__input-button"
                        onClick={onClose}
                    >
                        {buttonText}
                    </button>
                </form>
            </div>
        </section>
    );
}
