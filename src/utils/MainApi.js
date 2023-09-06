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
  }

  _getHeaders() {
    return {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }

  // Получаем данные пользователя
  getUserInfo() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  // Редактируем данные пользователя
  editUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }

  //проверка токена
  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  // Добавляем новый фильм

  addNewMovie(movie) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameEN: movie.nameEN,
        nameRU: movie.nameRU,
      }),
    }).then(this.__checkResponse);
  }

  //Получаем сохраненные фильмы
  getSavedMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this.__checkResponse);
  }

  //Удаляем фильм
  deleteMovie(movieId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }
}

const api = new MainApi({
  url: "http://localhost:3000",
});

export default api;
