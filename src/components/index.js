import '../styles/index.css';
import { openPopup, closePopup, listenerKeydown, closeItemPopipList } from './modal';
import { createCard} from './card'
import { enableValidation} from './validate';
import { initialCards, valid  } from './utils';
// import { urlConfig  } from './Api';

const popupProfile = document.querySelector('#popup-profile'); 
const popapList = document.querySelectorAll('.popup');
const mestoPopup = document.querySelector('#popup-mesto');
const imgPopup = document.querySelector('#popup-img');
const editButton = document.querySelector('#edit-button');
const buttonMesto = document.querySelector('#buttom__mesto');
const elements = document.querySelector('.elements');
const closeButton = document.querySelectorAll('#close'); 
const mestoName = mestoPopup.querySelector('#name-mesto-input');
const formElement = document.querySelector('#form__mesto');
const mestoLink = formElement.querySelector('#url-mesto-input');
const nameInput =  document.querySelector('#name-input');
const hobbyInput = document.querySelector('#description-input'); 
const profileName = document.querySelector('.profile__info_name');
const profileHobby = document.querySelector('.profile__info_hobby');
const popupBigImg = document.querySelector('.popup__img');
const popupBigName = document.querySelector('.popup__name');
const profileForm = document.querySelector('#form__name');
const mestoForm = document.querySelector('#form__mesto');
const inputList = document.querySelectorAll('.popup__item')
const sambitMesto = document.querySelector('#submitMesto')
const saveSambitProfile = document.querySelector('#submit')




const urlConfig = {
  url: "https://nomoreparties.co/v1/plus-cohort-25",
  headers: {
    authorization: " ff0c419c-b263-4e53-89d6-32ebce7b0b06",
    "Content-Type": "application/json",
  }
 
}

function tt (){
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-25/users/me ', {
  headers: {
    // method: 'POST',
    authorization: 'ff0c419c-b263-4e53-89d6-32ebce7b0b06',
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 
}
tt()






























// fetch("https://nomoreparties.co/v1/plus-cohort-25", {
//   headers: {
//   authorization: "ff0c419c-b263-4e53-89d6-32ebce7b0b06"
//   // "Content-Type": "application/json",
//   }
// })
//   .then((res) =>{
//     if (res.ok) {
//           return res.json();
//     }
//     })
//     .then((data) => { 
//       console.log(data)
//     })
    // .reject(()=>{
    //   console.log(`Ошибка: ${res.status}`)
    // })

  // } else {
    // return Promise.reject(`Ошибка: ${res.status}`);)
// function onResponse(res) {
//   // if (res.ok) {
//     return res.json();
//   // } else {
//     return Promise.reject(`Ошибка: ${res.status}`);
// //   }
// // }

// function tt() {
//  return fetch(`.${urlConfig.url}`, `.${urlConfig.headers}`)
//  .then(res => res.json)
//  .then(data =>{
//   console.log(data.res)
//   Promise.reject(`Ошибка: ${res.status}`)

//  })
// }

// tt()


















editButton.addEventListener('click', function(){ 
  openPopup(popupProfile);
  nameInput.value = profileName.textContent
  hobbyInput.value = profileHobby.textContent
  listenerKeydown()
  clearingButton(saveSambitProfile)
});




function clearingButton (buttonSambit){
 if (buttonSambit.disabled = true) {
    buttonSambit.classList.remove('popup__button_inactive');
    buttonSambit.disabled = false;
  }
}

buttonMesto.addEventListener('click', function(){
openPopup(mestoPopup);
mestoName.value = '';
mestoLink.value = ''; 
listenerKeydown()
sambitMesto.classList.add("popup__button_inactive");
sambitMesto.setAttribute("disabled", true);
});


closeButton.forEach(function(item){
  item.addEventListener('click', function(){
    closeItemPopipList(popapList)
  });
});

popapList.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
});

initialCards.forEach(function(el) { 
  elements.append(createCard(el.link, el.name));
});

closeButton.forEach(function(item){
  item.addEventListener('click', function(){
    closeItemPopipList(popapList)
  });
});

// function vilidator(){
  enableValidation(valid)
// }

  profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
      profileHobby.textContent = hobbyInput.value;
   closePopup(popupProfile);
  }); 

  mestoForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    elements.prepend(createCard(mestoLink.value, mestoName.value));
    closePopup(mestoPopup)
  });

  export {popapList, imgPopup, popupBigImg, popupBigName}




///валидация при открытие 
// поменять класс ошибки 
//
///
///

