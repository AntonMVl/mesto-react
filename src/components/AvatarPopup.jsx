import { PopupWithForm } from "./PopupWithForm";

export function AvatarPopup(props) {
    return (
        <PopupWithForm
            title="Обновить аватар"
            name="change-avatar"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <fieldset className="popup__form-input-container">
                <fieldset className="popup__input-container">
                    <input
                        id="avatar"
                        type="url"
                        className="popup__form-input popup__form-input_avatar-name"
                        autoComplete="off"
                        required
                        name="avatar"
                        placeholder="Ссылка на аватар"
                    />
                    <span id="error-avatar" className="popup__error"></span>
                </fieldset>
            </fieldset>
        </PopupWithForm>
    );
}
