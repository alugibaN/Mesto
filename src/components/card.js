
import { imgPopup, removeCard, handleDeleteCard, EditStatusLike } from './index';
import { openPopup } from './modal';
import {createCardsPost} from './Api'
 
 function createCard(obj) { // создание карточки с местом
 const {link, name} = obj
  const{ user, likes, cardId, notMyId} = obj
  const template = document.querySelector('#mesto-template').content;
  const content = template.querySelector('.element').cloneNode(true); 
  const likeCounter = content.querySelector('.element__counter-value');
  const like =content.querySelector('.element__like')
  content.querySelector('.element__img').src = link;
  content.querySelector('.element__img').alt = name;
  content.querySelector('.element__appellation').textContent = name;
  content.querySelector('.element__like').addEventListener('click', function(evt){
    EditStatusLike(cardId, like, likeCounter)
    // evt.target.classList.toggle('element__like_active');
  });
  likeCounter.textContent = Array.isArray(likes) && likes.length > 0 ? likes.length : "";
  content.querySelector('.element__delet').addEventListener('click', function(evt){ 
    handleDeleteCard(cardId, content)
   });
  
  const deleteButton = content.querySelector('.element__delet');
  if (notMyId !== user) {
    deleteButton.remove();
  } 
 
  content.querySelector('.element__img').addEventListener('click', function(evt){
    const imgSrc = evt.target.getAttribute('src');
    const nameAlt = evt.target.alt;
    const popupBigImg = document.querySelector('.popup__img');
    const popupBigName = document.querySelector('.popup__name');
    popupBigImg.setAttribute('src', imgSrc);
    popupBigName.textContent = nameAlt;
    openPopup(imgPopup);
  });
  return content;
}
function addCard (container, user){
  container.prepend(createCard(user))

}




export { createCard, addCard}

// cards ={
//   templateElementId: '#mesto-template',
//   clonElementTemplateSelector: '.element',
//   templateElementImg: '.element__img',
//   templateElementName: '.element__appellation',
//   elementLike: '.element__like',
//   elementLikeActive: 'element__like_active',
//   popupBigImg: '.popup__img',
//   popupBigName: 'popup__name',
//   popupOpenedSelector: 
// }
// 






























































// import { imgPopup, removeCard, elements} from './index';
// import { openPopup } from './modal';
// import {createCardsPost} from './Api'
 
//  function createCard(card, userId, user, likes, cardId) { // создание карточки с местом
//  const {name, link} = card
//   const template = document.querySelector('#mesto-template').content;
//   const content = template.querySelector('.element').cloneNode(true); 
//   content.querySelector('.element__img').src = link;
//   content.querySelector('.element__img').alt = name;
//   content.querySelector('.element__appellation').textContent = name;
//   content.querySelector('.element__like').addEventListener('click', function(evt){
//     evt.target.classList.toggle('element__like_active');
//   });
//   // const deleteButton = content.querySelector('.element__delet');
//   // function ttppkk(){   
//   //    removeCard(card._id, content);
//   // }
//   // if (userId !== user) {
//   //   cardDeleteButton.remove();
//   // } else {
//   //   deleteButton.addEventListener("click", () => removeCard(cardId, deleteButton));
//   // }
 
//   // const likeNumber = cardElement.querySelector(".element__numder");
//   // likeNumber.textContent = Array.isArray(likes) && likes.length > 0 ? likes.length : "0";
//   // const liki = content.querySelector('.element__like');
//   // if (Array.isArray(likes) && likes.find((item) => item._id === user)) {
//   //   liki.classList.add('element__like_active');
//   // }
//   //   content.querySelector('.element__delet').addEventListener('click', function(evt){
//   //  content.remove()
//   // });
//   content.querySelector('.element__img').addEventListener('click', function(evt){
//     const imgSrc = evt.target.getAttribute('src');
//     const nameAlt = evt.target.alt;
//     const popupBigImg = document.querySelector('.popup__img');
//     const popupBigName = document.querySelector('.popup__name');
//     popupBigImg.setAttribute('src', imgSrc);
//     popupBigName.textContent = nameAlt;
//     openPopup(imgPopup);
//   });
//   // cardDeleteButton.addEventListener('click', () => {
//   //   ttppkk(cardInfo, cardElement);
//   // });

//   // // likeCards.addEventListener("click", () => toggleButtonLike(cardId, likeCards));
//   // cardImage.addEventListener("click", () => openPopupPic(cardInfo));
//   return content;
// }



// function addCard (card, userId, user, likes, cardId){
//   elements.prepend(createCard(card, userId, user, likes, cardId))

// }




// export { createCard, addCard}

// // cards ={
// //   templateElementId: '#mesto-template',
// //   clonElementTemplateSelector: '.element',
// //   templateElementImg: '.element__img',
// //   templateElementName: '.element__appellation',
// //   elementLike: '.element__like',
// //   elementLikeActive: 'element__like_active',
// //   popupBigImg: '.popup__img',
// //   popupBigName: 'popup__name',
// //   popupOpenedSelector: 
// // }
// // 