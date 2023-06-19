const urlConfig = {
  url: "https://nomoreparties.co/v1/plus-cohort-25",
  headers: {
    authorization: " ff0c419c-b263-4e53-89d6-32ebce7b0b06",
    "Content-Type": "application/json",
  }
 
}

function onResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
  function getUsers (){
    return fetch (`${urlConfig.url}/users/me`, {
        headers: urlConfig.headers
    })
    .then(onResponse)
  }
  function getCard () {
    return fetch (`${urlConfig.url}/cards`, {
        headers: urlConfig.headers
    })
    .then(onResponse)
  }

function editPatchUser (nameProfile, aboutProfile) {
  fetch(`${urlConfig.url}/users/me`, {
    method: 'PATCH',
    headers: urlConfig.headers,
    body: JSON.stringify({
      name: nameProfile,
      about: aboutProfile
    })
  })
  .then(onResponse)
}
function createCardsPost (obj) {
   fetch(`${urlConfig.url}/cards`, {
    method: 'POST',
    headers: urlConfig.headers,
    body: JSON.stringify(obj)
  })
  .then(onResponse)
}

function deletePost(cardId){
  return fetch(`${urlConfig.url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: urlConfig.headers,
  })
  .then(onResponse)
}
function addPutLike (_id){
  return fetch(`${urlConfig.url}/cards/likes/${_id}`, {
    method: 'PUT',
    headers: urlConfig.headers,
  })
  .then(onResponse)
}

  function deleteLike (_id){
    return fetch(`${urlConfig.url}/cards/likes/${_id}`, {
      method: 'DELETE',
      headers: urlConfig.headers,
    })
    .then(onResponse)
  }

function patchAvatar(obj){
    return fetch(`${urlConfig.url}/users/me/avatar`, {
      method: "PATCH",
      headers: urlConfig.headers,
      body: JSON.stringify(obj),
    })
      .then(onResponse)
  };

export { getUsers, getCard, editPatchUser, patchAvatar, createCardsPost, deletePost, addPutLike, deleteLike }






















































































     //   return fetch('https://nomoreparties.co/v1/plus-cohort-25/cards', {
      //     method: 'POST',
      //     headers: {  
      //       authorization: " ff0c419c-b263-4e53-89d6-32ebce7b0b06",
      //       "Content-Type": "application/json",
      // },
      //     body: JSON.stringify(obj)
      //   })
      //   .then (res => {
      // if (res.ok) {
      //   return res.json();
      // } else {
      //   return Promise.reject(`Ошибка: ${res.status}`);
      // }
      //   })

// function tt(evt){
//   evt.preventDefault();
//   const obj = { link: inputLinkFormMesto.value, name: inputNameFormMesto.value }
//   //   return fetch('https://nomoreparties.co/v1/plus-cohort-25/cards', {
//   //     method: 'POST',
//   //     headers: {  
//   //       authorization: " ff0c419c-b263-4e53-89d6-32ebce7b0b06",
//   //       "Content-Type": "application/json",
//   // },
//   //     body: JSON.stringify(obj)
//   //   })
//   //   .then (res => {
//   // if (res.ok) {
//   //   return res.json();
//   // } else {
//   //   return Promise.reject(`Ошибка: ${res.status}`);
//   // }
//     // })
//     .then(data => {
//       console.log(data)

//       addCard(elements, obj);
//       closePopup(mestoPopup);
//     })
//     .catch((err) => {
//       console.log(err);
//      });
//   }

// // function deletPost () {
// //   return fetch(`${urlConfig.url}/cards`, {
// //     method: 'DELETE',
// //     headers: urlConfig.url,
    
// //   })
// //   // .then(onResponse)
// //   .then (res => {
// // if (res.ok) {
// //   return res.json()
// // }
// // })
// // .then(user =>{
//   console.log(getCard())
// // })
// // }
