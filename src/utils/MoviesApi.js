class MovieApi {
  constructor() {
    this._baseURL = 'https://api.nomoreparties.co/beatfilm-movies'
  }

  searchFilm() {
    return fetch(this._baseURL)
      .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }
}


export const movieapi = new MovieApi()