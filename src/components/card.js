
import { imgPopup} from './index'
import { openPopup } from './modal';
 
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
   content.remove()
  });
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

export { createCard}

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