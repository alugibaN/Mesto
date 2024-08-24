const urlConfig = {
  url: "https://api.nabigula.mesto.nomorepartiesco.ru",
  headers: {
    authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NThkODgxMTE2MDg3M2ZkMTNhMzgiLCJpYXQiOjE3MjQ0ODQ4MDgsImV4cCI6MTcyNTA4OTYwOH0.FR5hKP3Sq9cnapsXSKDe4SwhREJZWpY1bZOHJkrnlBk",
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
  return fetch(`${urlConfig.url}/cards/${_id}/likes`, {
    method: "PUT",
    headers: urlConfig.headers,
  }).then(onResponse);
}
//Удаление лайков
async function deleteLike(_id) {
  return fetch(`${urlConfig.url}/cards/${_id}/likes`, {
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
