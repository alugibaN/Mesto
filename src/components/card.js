import { listenerKeydown, listenerclickClouse } from './modal';
import { imgPopup, popupBigImg, popupBigName} from './index'
 
 function createCard(linkValue, nameValue) { // создание карточки с местом
  const template = document.querySelector('#mesto-template').content;
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
    listenerKeydown()
  });
  return content;
}

export { createCard}


