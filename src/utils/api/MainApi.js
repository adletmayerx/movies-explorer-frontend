class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then(this.checkResult);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this.checkResult);
  }

  logOut() {
    return fetch(`${this._url}/signout`, {
      method: "DELETE",
      credentials: "include",
    }).then(this.checkResult);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
    }).then(this.checkResult);
  }

  updateUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this.checkResult);
  }

  // films

  saveMovie(
    nameRU,
    nameEN,
    description,
    director,
    country,
    year,
    duration,
    image,
    trailerLink,
    thumbnail,
    movieId
  ) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameRU,
        nameEN,
        description,
        director,
        country,
        year,
        duration,
        image: `https://api.nomoreparties.co/${image}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co/${thumbnail}`,
        movieId,
      }),
    }).then(this.checkResult);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: "include",
    }).then(this.checkResult);
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
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

const mainApi = new MainApi({
  url: "https://api.movies-sadrtdinov.nomoredomains.xyz",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mainApi;
