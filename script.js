const popupProfile = document.querySelector('#popup-profile'); 
const popapList = document.querySelectorAll('.popup');
const mestoPopup = document.querySelector('#popup-mesto');
const imgPopup = document.querySelector('#popup-img');
const editButton = document.querySelector('#edit-button');
const buttonMesto = document.querySelector('#buttom__mesto');
const elements = document.querySelector('.elements');
const closeButton = document.querySelectorAll('#close'); 
const like = document.querySelectorAll('.element__like');
const template = document.querySelector('#mesto-template').content;
const mestoName = mestoPopup.querySelector('#name-mesto-input');
// const formElement = document.querySelector('#form__mesto');
const formElement = document.querySelector('#form__mesto');
const mestoLink = formElement.querySelector('#url-mesto-input');
// const formElement = document.querySelector('#popup-profile');
const nameInput =  document.querySelector('#name-input');
const hobbyInput = document.querySelector('#description-input'); 
const profileName = document.querySelector('.profile__info_name');
const profileHobby = document.querySelector('.profile__info_hobby');
const popupBigImg = document.querySelector('.popup__img');
const popupBigName = document.querySelector('.popup__name');
const forms = document.querySelectorAll('.popup__form');
const profileForm = document.querySelector('#form__name');
const mestoForm = document.querySelector('#form__mesto');
const initialCards = [
  {
    name: 'Карачаевск',
    link: 'img/img_karachaevsk.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Ключевской вулкан, Камчатка',
    link: 'img/img_vulkan.jpg'
  },
  {
    name: 'Воттоваара, Карелия',
    link: 'img/img_vottovaara.jpg'
  },
  {
    name: 'Зуб дракона, Западный Саян',
    link: 'img/img_tooth.jpg'
  }
]; 

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;       //
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active'); ///
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
  const buttonElement = formElement.querySelector('.popup__button');

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);   
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup__form'))
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });
  // const fieldsetList = Array.from(formElement.querySelectorAll('.popup__input'));
  // fieldsetList.forEach((fieldSet) => {
  //   setEventListeners(fieldSet);
  // }); 
    setEventListeners(formElement);
}); 
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
  })
}
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
        buttonElement.disabled = true;
    buttonElement.classList.add('popup__button_inactive');
  } else {
        // иначе сделай кнопку активной
        buttonElement.disabled = false;
    buttonElement.classList.remove('.popup__button_inactive');
  }
};


enableValidation()











































































function openPopup (el){
  el.classList.add('popup__opened');
  
};
 
function closePopup (el){
el.classList.remove('popup__opened');
};

function removeTextFormMesto(){
  mestoName.value = '';
  mestoLink.value = ''; 
}

function closeEscape (evt){
  if(evt.key === 'Escape'){
    closeItemPopipList(popapList)
  
  }
}
function closeItemPopipList(popup) {
  popup.forEach(function(item){
    closePopup(item)
    document.removeEventListener('keydown', closeEscape)
  })
}

function listenerKeydown(){
  document.addEventListener('keydown', closeEscape)
}

document.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup')){
    closeItemPopipList(popapList)
  }
})

function saveNameFormProfile(){
  nameInput.value = profileName.textContent
  hobbyInput.value = profileHobby.textContent
}

editButton.addEventListener('click', function(){ 
      openPopup(popupProfile);
      saveNameFormProfile()
      listenerKeydown()
      
  });

buttonMesto.addEventListener('click', function(){
    openPopup(mestoPopup);
    removeTextFormMesto()
    listenerKeydown()
});


closeButton.forEach(function(item){
  item.addEventListener('click', function(){
    closeItemPopipList(popapList)
  });
});

function editPopupProfile(evt) {  
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileHobby.textContent = hobbyInput.value;
   closePopup(popupProfile);
}

initialCards.forEach(function(el) { 
  elements.append(createCard(el.link, el.name));
});


function createCard(linkValue, nameValue) { // создание карточки с местом
    const content = template.querySelector('.element').cloneNode(true); 
    content.querySelector('.element__img').src = linkValue;
    content.querySelector('.element__img').alt = nameValue;
    content.querySelector('.element__appellation').textContent = nameValue;
    content.querySelector('.element__like').addEventListener('click', function(evt){
      evt.target.classList.toggle('element__like_active');
    });
    content.querySelector('.element__delet').addEventListener('click', function(evt){
      evt.target.closest('#element').remove();
    });
    content.querySelector('.element__img').addEventListener('click', function(evt){
          const imgSrc = evt.target.getAttribute('src');
          const nameAlt = evt.target.alt;
          popupBigImg.setAttribute('src', imgSrc);
          popupBigName.textContent = nameAlt;
          imgPopup.classList.add('popup__opened');
          listenerKeydown
    });
    return content;
}
function addCard (evt){
    evt.preventDefault();
    elements.prepend(createCard(mestoLink.value, mestoName.value));
    closePopup(mestoPopup)
}

  document.removeEventListener('keydown', closeEscape)
  profileForm.addEventListener('submit', editPopupProfile); // отправка формы  изменения данных профиля
  mestoForm.addEventListener('submit', addCard); // отправка формы для добавление карточки 



  























































































































//закрытие форм и изображений 
// if(closePopup.length > 0) {
//     for (let i = 0; i < closePopup.length; i++){
//         const el = closePopup[i];
//         el.addEventListener('click', function() {
//           popupProfile.classList.remove('popup__opened');
//             mestoPopup.classList.remove('popup__opened');
//             imgPopup.classList.remove('popup__opened');

//             nameInput.value = profileName.textContent
//             hobbyInput.value = profileHobby.textContent
//             mestoName.value = '';
//             mestoLink.value = '';  
            
//         })
//     } 
//    }

   // elements.addEventListener('click', function(evt) {  // лайки которые работают
//     if(evt.target.classList.contains('element__like')){
//       evt.target.classList.toggle('element__like_active')
//     }
// });
// const elmentsLike = document.querySelectorAll('.element__like') // лайки 
// elmentsLike.forEach(function(item){
//   item.addEventListener('click', function(evt){
//     evt.target.classList.toggle('element__like_active')
//   })
// })



// elements.addEventListener('click', function(evt){ // Не должно работать но работает: Удаление карточек 
//     if (evt.target.classList.contains('element__delet')){
//         evt.target.closest('#element').remove();
//     }
//   })


  // elements.addEventListener('click', function(evt,) { // Открытие большой картинки 
  //   const textt = evt.target
  //   if (textt.closest('.element__img')){
  //     const imgSrc = evt.target.getAttribute('src');
  //     const nameNe = evt.target.alt
  //     popupBigImg.setAttribute('src', imgSrc)
  //     popupBigName.textContent = nameNe
  //     imgPopup.classList.add('popup__opened')
  //   }
  //  }) 
  // initialCards.forEach(function(el) {    /// добавление карточек на страницу 
//   const content = template.querySelector('.element').cloneNode(true); 
//   content.querySelector('.element__img').src = el.link;
//   content.querySelector('.element__appellation').textContent = el.name; 
//   content.querySelector('.element__img').alt = el.name;
  
//   elements.append(content);
// })