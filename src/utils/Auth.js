  class Auth {
    constructor(setting) {
        this._url = setting.url;
        this._headers = setting.headers;
    }

    // Проверяем результат запроса к серверу
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    //регистрация
    register(name, email, password) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        },
            body: JSON.stringify({ name, email, password })
        })
            .then(this._checkResponse)
    };

    //аутентификация
    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        },
            body: JSON.stringify({ email, password })
        })
            .then(this._checkResponse)
    };

}

const api = new Auth({
  url: "http://localhost:3000"
});

export default api;
