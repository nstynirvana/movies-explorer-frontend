class Api {
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

    //   Получаем все сохраненные фильмы пользователя
    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._getHeaders(),
    })
            .then(this._checkResponse)
    }

    // Добавляем новый фильм
    addNewMovie(country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify({country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                thumbnail,
                movieId,
                nameRU,
                nameEN,})
        })
            .then(this._checkResponse)
    }

    //Удаляем фильм
    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: this._getHeaders(),
        })
            .then(this._checkResponse)
    }
}

const api = new Api({
    url: 'https://api.movies.savinova.nomoredomains.monster',
});

export default api;
