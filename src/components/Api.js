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

// const urlConfig = {
//     url: "https://nomoreparties.co/v1/plus-cohort-25",
//     headers: {
//       authorization: " ff0c419c-b263-4e53-89d6-32ebce7b0b06",
//       "Content-Type": "application/json",
//     }
   
//   }
  
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
  
  export { getUsers, getCard }