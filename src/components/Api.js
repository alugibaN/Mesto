const urlConfig = {
  url: "http://localhost:3001",
  headers: {
    authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3ODI4OTllNWMxZTk3ZGRkMjQ4ZTkiLCJpYXQiOjE3MjQzNTExNjYsImV4cCI6MTcyNDk1NTk2Nn0.f25b3ikUVVG5UoWDU4PrTv6MFEAlESr7t0HYuqIr9SE",
    "Content-Type": "application/json",
  },
};

function onResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
//Получение данных о пользователе с сервера
async function getUsers() {
  return fetch(`${urlConfig.url}/users/me`, {
    headers: urlConfig.headers,
  }).then(onResponse);
}
//получение карточек с сервера
async function getCard() {
  return fetch(`${urlConfig.url}/cards`, {
    headers: urlConfig.headers,
  }).then(onResponse);
}
//Изменение данных
async function editPatchUser(obj) {
  return fetch(`${urlConfig.url}/users/me`, {
    method: "PATCH",
    headers: urlConfig.headers,
    body: JSON.stringify(obj),
  }).then(onResponse);
}
//Удаление карточки
async function deletePost(cardId) {
  return fetch(`${urlConfig.url}/cards/${cardId}`, {
    method: "DELETE",
    headers: urlConfig.headers,
  }).then(onResponse);
}
//Добавление лайков
async function addPutLike(_id) {
  return fetch(`${urlConfig.url}/cards/likes/${_id}`, {
    method: "PUT",
    headers: urlConfig.headers,
  }).then(onResponse);
}
//Удаление лайков
async function deleteLike(_id) {
  return fetch(`${urlConfig.url}/cards/likes/${_id}`, {
    method: "DELETE",
    headers: urlConfig.headers,
  }).then(onResponse);
}
//Добавление карточек
async function createCardsPost(obj) {
  return fetch(`${urlConfig.url}/cards`, {
    method: "POST",
    headers: urlConfig.headers,
    body: JSON.stringify(obj),
  }).then(onResponse);
}

// Смена аватара
async function patchAvatar(linkAvatar) {
  return fetch(`${urlConfig.url}/users/me/avatar`, {
    method: "PATCH",
    headers: urlConfig.headers,
    body: JSON.stringify(linkAvatar),
  }).then(onResponse);
}

export {
  getUsers,
  getCard,
  editPatchUser,
  patchAvatar,
  createCardsPost,
  deletePost,
  addPutLike,
  deleteLike,
};
