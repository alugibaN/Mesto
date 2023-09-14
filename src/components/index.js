import '../styles/index.css';
import { openPopup, closePopup, closeItemPopipList} from './modal';
import { addCard} from './card'
import { enableValidation, inactiveButton, activeButton, clenerForm} from './validate';
import { valid, loadingAdd } from './utils';
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
const profileForm = document.querySelector('#form__name');
const mestoForm = document.querySelector('#form__mesto');
const avatarForm =document.querySelector('#form__avatar')
const popupFormSabmitEditMesto = document.querySelector('#submitMesto')
const popupFormSabmitEditProfile  = document.querySelector('#submit')
const popupFormSabmitEditAvatar = document.querySelector('#submitAvatar')
const profileAvatar = document.querySelector('.profile__avatar')

//открытие окнам изменени я данных профиля 
editButton.addEventListener('click', function(){ 
  openPopup(popupProfile);
  inputNameFormProfile.value = profileName.textContent
  inputHobbyFormProfile.value = profileHobby.textContent
  clenerForm(popupProfile, valid)
  activeButton(popupFormSabmitEditProfile, valid)
  

});

//открытие окна добавления карточки
buttonMesto.addEventListener('click', function(){
  openPopup(mestoPopup);
  inputNameFormMesto.value = '';
  inputLinkFormMesto.value = ''; 
  clenerForm(mestoPopup, valid)
  inactiveButton(popupFormSabmitEditMesto , valid)

});

// открытие окна изменения аватарки 
profileAvatar.addEventListener('click', function(){
  openPopup(popupAvatar)
  inputAvatar.value = ''; 
  clenerForm(popupAvatar, valid)
  inactiveButton(popupFormSabmitEditMesto , valid)

})

//закрытие окон 
buttonCloseList.forEach(function(item){
  item.addEventListener('click', function(){
    closeItemPopipList(popapList)
  });
});

//закрытие окна нажатием на фон 
popapList.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (c) {
      closePopup(popup);
    }
  });
});

//изменение данных 
function editProfile (evt){
  evt.preventDefault(); 
  loadingAdd({ buttonElement: popupFormSabmitEditProfile, text: 'Сохраняем...', disabled: true });
  const profile = {name:inputNameFormProfile.value, about: inputHobbyFormProfile.value}
  return editPatchUser(profile)

  .then((data)=>{
    profileName.textContent = data.name;
    profileHobby.textContent = data.about;
    closePopup(popupProfile);
  })
  .catch((error) => console.log(`Ошибка: ${error}`))
  .finally(() => {
    loadingAdd({ buttonElement: popupFormSabmitEditProfile, text: 'Сохранить', disabled: false })
  });
}


profileForm.addEventListener('submit', editProfile); 

// данные профиля и карточки 
Promise.all([getUsers(), getCard()])
.then(([user, initialCards])=>{
  profileName.textContent = user.name;
  profileHobby.textContent = user.about;
  profileAvatar.textContent = user.avatar;
  profileAvatar.src = user.avatar
  initialCards.forEach((el) => {
    // console.log(user)
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
      // console.log(el)
    addCard(elements, card)
  })
})
.catch((error) => console.log(`Ошибка: ${error}`))
 
//удаление карточки 
const handleDeleteCard = (cardId, element) => {
  deletePost(cardId).then(() => {
    element.remove();
  })
  .catch((err) => {
      console.log(err);
  });
};

//добавления лайков 
function  editStatusLike (id, element, likeCounter){
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

// добавление карточки 
function addPost(evt){
  evt.preventDefault();
  loadingAdd({ buttonElement: popupFormSabmitEditMesto, text: 'Сохраняем...', disabled: true });

    const obj = { link: inputLinkFormMesto.value, name: inputNameFormMesto.value }
    return createCardsPost(obj)
      .then(data => {
        const card = {
          name: data.name ,
          link: data.link,
          likes: data.likes,
          user: data.owner._id,
          cardId: data._id,
          notMyId: data.owner._id
        }
      addCard(elements, card);
      closePopup(mestoPopup);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
          loadingAdd({ buttonElement: popupFormSabmitEditMesto, text: 'Добавить', disabled: false });

      }); 
    }
          mestoForm.addEventListener('submit', addPost);

 //   изменения автара 
function createAvatar(evt) {
  evt.preventDefault();
  loadingAdd({ buttonElement: popupFormSabmitEditAvatar, text: 'Сохраняем...', disabled: true });
  return patchAvatar({avatar: inputAvatar.value})
    .then((data) => {
      console.log(data)
      profileAvatar.src = data.avatar
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.error(err);
    }) 
    .finally(() => {
      loadingAdd({ buttonElement: popupFormSabmitEditAvatar, text: 'Сохранить', disabled: false });
    }); 

}

avatarForm.addEventListener('submit', createAvatar)

enableValidation(valid)

export {popapList, imgPopup, inputNameFormProfile, inputHobbyFormProfile, elements, handleDeleteCard, editStatusLike}







