class MainApi {
  constructor(hostRequest) {
    this._hostRequest = hostRequest;
  }

  _checkResponse = async (response) => {
    if (!response.ok) {
      const data = await response.json();
      /*throw new Error(data.message)*/
      return Promise.reject(data.message)
    }

    return response.json()
  }

  //1. Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(this._hostRequest + '/users/me', {
      credentials: 'include',
    })
    .then(res => this._checkResponse(res))
  }

  //2. Редактирование профиля
  updateUserInfo({ email, name }) {
    return fetch(this._hostRequest + '/users/me', {
      credentials: 'include',
      method: 'PATCH',
      body: JSON.stringify({ email, name }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._checkResponse(res))
  }

  //3. Загрузка фильмов с моего Api
  getSavedMovies() {
    return fetch(this._hostRequest + '/movies', {
      credentials: 'include',
    })
    .then(res => this._checkResponse(res))
  }

  //4. Сохранение фильма
  /*createNewMovie({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId }) {*/
  createNewMovie(paramsMovie) {
    return fetch(this._hostRequest + "/movies", {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(paramsMovie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._checkResponse(res))
  }

  //5. Удаление сохранённого фильма по id
  deleteMovie(id) {
    console.log(id)
    return fetch(this._hostRequest + '/movies/_' + id, {
      credentials: 'include',
      method: 'DELETE'
    })
    .then(res => this._checkResponse(res))
  }
}

export const mainApi = new MainApi('http://localhost:3003');

