export const BASE_URL = 'http://localhost:3003';

export const checkResponse = async (response) => {

  if (!response.ok) {
    const data = await response.json();
    console.log(data.message)
    throw new Error(data.message);
    /*return Promise.reject(data.message)*/
  }

  return response.json()
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, password})
  })
  .then(res => checkResponse(res))
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
    .then(res => checkResponse(res))
}

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(res => checkResponse(res))
}

//проверить токен и получить данные пользователя
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(res => checkResponse(res))
}
