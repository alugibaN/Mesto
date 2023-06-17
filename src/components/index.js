import '../styles/index.css';
import { openPopup, closePopup, closeItemPopipList} from './modal';
import { createCard} from './card'
import { enableValidation, inactiveButton, activeButton, clenerForm} from './validate';
import { valid, initialCards } from './utils';
// import { getUsers, getCard } from './Api';


const popupProfile = document.querySelector('#popup-profile'); 
const popapList = document.querySelectorAll('.popup');
const mestoPopup = document.querySelector('#popup-mesto');
const imgPopup = document.querySelector('#popup-img');
const editButton = document.querySelector('#edit-button');
const buttonMesto = document.querySelector('#buttom__mesto');
const elements = document.querySelector('.elements');
const buttonCloseList = document.querySelectorAll('#close'); 
const inputNameFormMesto = document.querySelector('#name-mesto-input');
const inputLinkFormMesto = document.querySelector('#url-mesto-input');
const inputNameFormProfile =  document.querySelector('#name-input');
const inputHobbyFormProfile = document.querySelector('#description-input'); 
const profileName = document.querySelector('.profile__info_name');
const profileHobby = document.querySelector('.profile__info_hobby');
// const popupBigImg = document.querySelector('.popup__img');
// const popupBigName = document.querySelector('.popup__name');
const profileForm = document.querySelector('#form__name');
const mestoForm = document.querySelector('#form__mesto');
const sambitMesto = document.querySelector('#submitMesto')
const popupFormSabmitEditProfile  = document.querySelector('#submit')
// const profileAvatar = document.querySelector('.profile__avatar')

editButton.addEventListener('click', function(){ 
  openPopup(popupProfile);
  inputNameFormProfile.value = profileName.textContent
  inputHobbyFormProfile.value = profileHobby.textContent
  clenerForm(popupProfile, valid)
  activeButton(popupFormSabmitEditProfile, valid)
});

buttonMesto.addEventListener('click', function(){
  openPopup(mestoPopup);
  inputNameFormMesto.value = '';
  inputLinkFormMesto.value = ''; 
  clenerForm(mestoPopup, valid)
  inactiveButton(popupFormSabmitEditProfile, valid)
});


buttonCloseList.forEach(function(item){
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

mestoForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    elements.prepend(createCard(inputLinkFormMesto.value, inputNameFormMesto.value));
    closePopup(mestoPopup)
  });

initialCards.forEach(function(el) { 
  elements.append(createCard(el.link, el.name));
});
  
profileForm.addEventListener('submit', (evt) =>{
  evt.preventDefault(); 
  profileName.textContent = inputNameFormProfile.value;
    profileHobby.textContent = inputHobbyFormProfile.value;
 closePopup(popupProfile);
}); 

enableValidation(valid)

console.log(profileForm.closest('.popup__opened'))
  export {popapList, imgPopup, inputNameFormProfile, inputHobbyFormProfile}


  // const spanList = Array.from(popupProfile.querySelectorAll('.popup__input-error'));
  // console.log(spanList)

















































































































// console.log(getCard())


// const tt = new Promise((resolve, reject)=>{
//   resolve(getUsers())  
// })
// tt.then(user => {
//   // console.log(user)
//   profileName.textContent = user.name;
//   profileHobby.textContent = user.about;
//   profileAvatar.textContent = user.avatar;
// })
// tt.catch((error) => console.log(`Ошибка: ${error}`))




// Promise.all([getUsers(), getCard()])
// .then(([user, initialCards])=>{
//   profileName.textContent = user.name;
//   profileHobby.textContent = user.about;
//   profileAvatar.textContent = user.avatar;
//   initialCards.forEach((arrayElement) => {
//     // const card = createCard(arrayElement.link, arrayElement.name);
//     elements.append(createCard(arrayElement.link, arrayElement.name));
//   })
// })
// .catch((error) => console.log(`Ошибка: ${error}`))