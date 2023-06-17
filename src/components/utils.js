

// import profileAvatar from './img/image.jpg';
// import buttonInfoProfile from './img/Vector.svg';
// import buttonAddMesto from './img/button.svg';
// import buttomDeletMesto from './img/delet.svg';
// import buttomlike from './img/img__like.svg';
// import buttomLikeActiv from './img/img__like_active.svg';
// import buttomCloseIcon from './img/close_icon.svg';
// import bigButtonAddMesto from './img/img__plus_big.svg';

// const whoIsTheGoat = [
//   // меняем исходные пути на переменные
//   { name: 'profile avatar', image: profileAvatar  },
//   { name: 'buttonInfo profile', link: buttonInfoProfile },
//   { name: 'button add mesto', link: buttonAddMesto },
//   { name: ' big button add mesto', link: bigButtonAddMesto },
//   { name: 'buttom delet mesto', link:  buttomDeletMesto},
//   { name: 'buttom like', link: buttomlike },
//   { name: 'buttom like activ', link: buttomLikeActiv },
//   { name: 'buttom close icon', link: buttomCloseIcon  },
// ]; 

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  const valid = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    spanSelector: '.popup__input-error'
  }

// const cards ={
//   templateElementId: '#mesto-template',
//   clonElementTemplate: '.element',
//   templateElementImg: '.element__img',
//   templateElementName: '.element__appellation',
//   elementLike: '.element__like',
//   elementLikeActive: 'element__like_active',
//   elementDelet: '.element__delet',
//   popupBigImg: '.popup__img',
//   popupBigName: '.popup__name',
//   popupOpenedSelector: 'popup__opened'
// }
  
  export { valid, initialCards }