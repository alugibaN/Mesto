import '../styles/index.css';
import { openPopup, closePopup, closeItemPopipList} from './modal';
import { addCard} from './card'
import { enableValidation, inactiveButton, activeButton, clenerForm} from './validate';
import { valid } from './utils';
import { getUsers, getCard, editPatchUser, deletePost, addPutLike, deleteLike, createCardsPost, patchAvatar } from './Api';


const popupProfile = document.querySelector('#popup-profile'); 
const popapList = document.querySelectorAll('.popup');
const popupAvatar = document.querySelector('#popup-avatar-edit')
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
const inputAvatar = document.querySelector('#url-avatar-input')
const profileName = document.querySelector('.profile__info_name');
const profileHobby = document.querySelector('.profile__info_hobby');
// const popupBigImg = document.querySelector('.popup__img');
// const popupBigName = document.querySelector('.popup__name');
const profileForm = document.querySelector('#form__name');
const mestoForm = document.querySelector('#form__mesto');
const avatarForm =document.querySelector('#form__avatar')
const popupFormSabmitEditMesto = document.querySelector('#submitMesto')
const popupFormSabmitEditProfile  = document.querySelector('#submit')
const popupFormSabmitEditAvatar = document.querySelector('#buttonEditAvatar')
const profileAvatar = document.querySelector('.profile__avatar')


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
  inactiveButton(popupFormSabmitEditMesto , valid)
});

profileAvatar.addEventListener('click', function(){
  openPopup(popupAvatar)
  inputAvatar.value = ''; 
  clenerForm(popupAvatar, valid)
  inactiveButton(popupFormSabmitEditMesto , valid)
  
})
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

function editProfile (evt){
  evt.preventDefault(); 
  profileName.textContent = inputNameFormProfile.value;
  profileHobby.textContent = inputHobbyFormProfile.value;
  closePopup(popupProfile);
    return editPatchUser(inputNameFormProfile.value, inputHobbyFormProfile.value)
};

profileForm.addEventListener('submit', editProfile); 

// данные профиля и карточки 
Promise.all([getUsers(), getCard()])
.then(([user, initialCards])=>{
  profileName.textContent = user.name;
  profileHobby.textContent = user.about;
  profileAvatar.textContent = user.avatar;
  initialCards.forEach((el) => {
    const card ={
       cardInfo: el, 
       userId: user._id, 
       user: user._id,
       likes:  el.likes, 
       cardId: el._id,
       link:el.link, 
       name: el.name,
       notMyId: el.owner._id
      };
    addCard(elements, card)
  })
})
.catch((error) => console.log(`Ошибка: ${error}`))

const handleDeleteCard = (cardId, element) => {
  deletePost(cardId).then(() => {
    element.remove();
  })
  .catch((err) => {
      console.log(err);
  });
};

function  EditStatusLike (id, element, likeCounter){
  if (element.classList.contains("element__like_active")) {
    deleteLike(id)
      .then((result) => {
        element.classList.remove("element__like_active")
        likeCounter.textContent = result.likes.length;
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  } else {
    addPutLike(id)
      .then((result) => {
        element.classList.add("element__like_active");
        likeCounter.textContent = result.likes.length;
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
}
}



function tt(evt){
    evt.preventDefault();
    const obj = { link: inputLinkFormMesto.value, name: inputNameFormMesto.value }
      return fetch('https://nomoreparties.co/v1/plus-cohort-25/cards', {
        method: 'POST',
        headers: {  
          authorization: " ff0c419c-b263-4e53-89d6-32ebce7b0b06",
          "Content-Type": "application/json",
    },
        body: JSON.stringify(obj)
      })
      .then (res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
      })
      .then(data => {
        console.log(data)
  
        addCard(elements, obj);
        closePopup(mestoPopup);
      })
      .catch((err) => {
        console.log(err);
       });
    }
          mestoForm.addEventListener('submit', tt);

// function createAvatar(evt){
//   evt.preventDefault();
//   return patchAvatar(inputAvatar.value)
//   .then (result => {
//     console.log(result)
//     profileAvatar.src = inputAvatar.value
//   })
//   .catch((err) => {
//     console.log(err);
//    })
// }

function createAvatar(evt) {
  evt.preventDefault();

  function callFunction(date) {
    return patchAvatar({link: inputAvatar.value})
      .then((date) => {
        profileAvatar.src = date.link;
        closePopup(popupAvatar);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // handleSubmit(callFunction, event)
}
avatarForm.addEventListener('submit', createAvatar)
enableValidation(valid)
export {popapList, imgPopup, inputNameFormProfile, inputHobbyFormProfile, elements, handleDeleteCard, EditStatusLike}