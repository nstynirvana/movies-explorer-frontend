class MainApi {
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

    _getHeaders() {
        return {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        };
      }

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
  
    // Получаем данные пользователя
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._getHeaders(),
        })
            .then(this._checkResponse)
    }

    // Редактируем данные пользователя
    editUserInfo({ name, email}) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({ name, email})
        })
            .then(this._checkResponse)
    }

    //проверка токена
    getContent(token) {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        })
            .then(this._checkResponse)
    }
}

const api = new MainApi({
    url: "http://localhost:3000"
});

export default api;
