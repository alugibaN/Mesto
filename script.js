const popup = document.querySelector('#popup-profile'); 
const mestoPopup = document.querySelector('#popup-mesto');
const imgPopup = document.querySelector('#popup-img')
const openPopup = document.querySelector('#edit-button');
const buttonMesto = document.querySelector('#buttom__mesto');
const elements = document.querySelector('.elements');
// const element = document.querySelectoraAll('.element')
const like = document.querySelectorAll('.element__like');
const template = document.querySelector('#mesto-template').content;
const mestoName = document.querySelector('#name-mesto');
const mestoLink = document.querySelector('#add-mesto');
const nameInput = document.querySelector('#name'); // данные строки name
const hobbyInput = document.querySelector('#description'); // данные строки hobby
const profileName = document.querySelector('.profile__info_name');
const profileHobby = document.querySelector('.profile__info_hobby');
const popupBigImg = document.querySelector('.popup__img')
const elementImg = document.querySelectorAll('.element__img')
const popupBigName = document.querySelector('.popup__name')
const nameNeme = document.querySelectorAll('.element__appellation')
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

initialCards.forEach(function(el) {    /// добавление карточек на страницу 
    const content = template.querySelector('.element').cloneNode(true); 
    content.querySelector('.element__img').src = el.link;
    content.querySelector('.element__appellation').textContent = el.name; 
    elements.append(content);
})

openPopup.addEventListener('click', function(){ //Открытие формы изменения данных
    popup.classList.add('popup__opened');
});

buttonMesto.addEventListener('click', function(){
    mestoPopup.classList.add('popup__opened');
});

const closePopup = document.querySelectorAll('#close'); //закрытие форм и изображений 
if(closePopup.length > 0) {
    for (let i = 0; i < closePopup.length; i++){
        const el = closePopup[i];
        el.addEventListener('click', function() {
            popup.classList.remove('popup__opened');
            mestoPopup.classList.remove('popup__opened');
            imgPopup.classList.remove('popup__opened');
        })
    } 
   }


function handleFormSubmit(evt) {  //функция добаления изменений в данные профиля 
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileHobby.textContent = hobbyInput.value;
    popup.classList.remove('popup__opened');
    nameInput.value = profileName.textContent
    hobbyInput.value = profileHobby.textContent
}

function createCard(linkValue, nameValue) { // создание карточки с местом
    const content = template.querySelector('.element').cloneNode(true); 
    content.querySelector('.element__img').src = linkValue ;
    content.querySelector('.element__appellation').textContent = nameValue;
    return content 
}
function addCard (evt){ /// добавлением карточки с местом 
    evt.preventDefault();
    elements.prepend(createCard(mestoLink.value, mestoName.value));
    mestoPopup.classList.remove('popup__opened');
    mestoName.value = '';
    mestoLink.value = '';
}

elements.addEventListener('click', function(evt) {  // лайки которые работают
    if (evt.target.classList.contains('element__like')){
      evt.target.classList.toggle('element__like_active')
    }
});

elements.addEventListener('click', function(evt){ // Не должно работать но работает: Удаление карточек 
    if (evt.target.classList.contains('element__delet')){
        evt.target.closest('#element').remove();
    }
  })

  elements.addEventListener('click', function(evt) { // Открытие большой картинки 
    if (evt.target.classList.contains('element__img')){
      const imgSrc = evt.target.getAttribute('src');
      const nameNe = evt.target.textContent
      popupBigImg.setAttribute('src', imgSrc)
      popupBigName.textContent = nameNe
      // openBigPopup(popupBigName)
      imgPopup.classList.add('popup__opened')
    }
   }) 

  // console.log(ele)
  
  // function openBigPopup(el) {
  //   nameNeme.forEach(function(){
  //     el.textContent = nameNeme.textContent
  //     })
  //   }
  

 

   popup.addEventListener('submit', handleFormSubmit); // отправка формы  изменения данных профиля
   mestoPopup.addEventListener('submit', addCard); // отправка формы для добавление карточки 

