import { PopupWithForm } from "./PopupWithForm";

export function ProfilePopup(props) {
    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="user-info"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <fieldset className="popup__form-input-container">
                <fieldset className="popup__input-container">
                    <input
                        id="name"
                        type="text"
                        className="popup__form-input popup__form-input_add_name"
                        autoComplete="off"
                        required
                        minLength="2"
                        maxLength="40"
                        name="name"
                        placeholder="Введите Ваше имя"
                    />
                    <span id="error-name" className="popup__error"></span>
                </fieldset>
                <fieldset className="popup__input-container">
                    <input
                        id="job"
                        type="text"
                        className="popup__form-input popup__form-input_add_job"
                        autoComplete="off"
                        required
                        minLength="2"
                        maxLength="200"
                        name="job"
                        placeholder="Введите Ваш род занятий"
                    />
                    <span id="error-job" className="popup__error"></span>
                </fieldset>
            </fieldset>
        </PopupWithForm>
    );
}
