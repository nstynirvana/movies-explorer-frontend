class MoviesApi {
  constructor(setting) {
    this._url = setting.url;
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
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };
  }
  
  //   Получаем все сохраненные фильмы пользователя
  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  // Добавляем новый фильм
  addNewMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then(this._checkResponse);
  }

  //Удаляем фильм
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }
}

const api = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default api;
