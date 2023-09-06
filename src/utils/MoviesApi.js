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

}

const api = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default api;
