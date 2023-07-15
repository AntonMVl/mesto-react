class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
        this._authorization = headers.authorization;
    }

    _checkingResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkingResponse);
    }

    getUser() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkingResponse);
    }

    addCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link }),
        }).then(this._checkingResponse);
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkingResponse);
    }

    updateProfileInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        }).then(this._checkingResponse);
    }

    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkingResponse);
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            },
        }).then(this._checkingResponse);
    }

    updateAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data,
            }),
        }).then(this._checkingResponse);
    }
}

export const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-68',
    headers: {
        authorization: 'b7287a4d-f4a8-45dd-a78c-ae9beeed02d9',
        'Content-Type': 'application/json',
    },
});
