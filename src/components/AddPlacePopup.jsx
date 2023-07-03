import { PopupWithForm } from "./PopupWithForm";

export function AddPlacePopup(props) {
    return(
        <PopupWithForm title="Новое место" name="add-img" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose}>
            <fieldset className="popup__form-input-container">
                <fieldset className="popup__input-container">
                    <input id ="place" type="text" className="popup__form-input popup__form-input_card_name" autocomplete="off" required minlength="2" maxlength="30" name="name" placeholder="Название"/>
                    <span id="error-place" className="popup__error"></span>
                </fieldset>
                <fieldset className="popup__input-container">
                    <input id ="url" type="url" className="popup__form-input popup__form-input_card_url" autocomplete="off" required name="link" placeholder="Ссылка на картинку"/>
                    <span id="error-url" className="popup__error"></span>
                </fieldset>
            </fieldset>
        </PopupWithForm>
    )
}