class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getMovies() {
    return fetch(this._url, {
      headers: this._headers,
    }).then(this.checkResult);
  }

  checkResult = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default moviesApi;
