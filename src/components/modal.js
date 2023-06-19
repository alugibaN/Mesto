
 function openPopup (el){
  el.classList.add('popup__opened');
  document.addEventListener('keydown', closeEscape)
};


function closePopup (el){
  el.classList.remove('popup__opened');
  document.removeEventListener('keydown', closeEscape)
  };

function closeEscape (evt){
  if(evt.key === 'Escape'){
   const popupOpened = document.querySelector('.popup__opened')
   closePopup(popupOpened)
  }
}
function closeItemPopipList(popup) {
  popup.forEach(function(item){
    closePopup(item)
  })
}

export {openPopup, closePopup, closeItemPopipList}







