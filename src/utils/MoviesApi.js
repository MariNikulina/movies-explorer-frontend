export const getMoviesFromBeatfilm = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
    })
};
