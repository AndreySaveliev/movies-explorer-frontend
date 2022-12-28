import Footer from "../components/Footer/Footer";

class mainApi {
  constructor() {
    // this.baseUrl = 'https://api.cinemafinder.nomoredomains.club';
    this.baseUrl = 'http://localhost:5000';
  }

  signup(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email,
        name: name
      })
    }).then(this._checkResponse);
  }

  signin(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    }).then(this._checkResponse);
  }

  signout() {
    return fetch(`${this.baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
    }).then(this._checkResponse)
  }

  checkMe(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      }
    })
    .then(this._checkResponse)
  }

  changeUserData(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
    .then(this._checkResponse)
  }

  like(movie, token) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.id
      })
    })
    .then(this._checkResponse)
  }

  getUsersSavFilms(token) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      // headers: {
      //   'Authorization': `Bearer ${token}`
      // }
    })
    .then(this._checkResponse)
  }

  unlike(id) {
    return fetch(`${this.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }
}

export const Api = new mainApi();
