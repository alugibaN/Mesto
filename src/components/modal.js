 import { popapList } from "./index";
 function openPopup (el){
  el.classList.add('popup__opened');
};


function closePopup (el){
  el.classList.remove('popup__opened');
  };

function closeEscape (evt){
  if(evt.key === 'Escape'){
    closeItemPopipList(popapList)
    document.removeEventListener('keydown', closeEscape)
  }
}
function closeItemPopipList(popup) {
  popup.forEach(function(item){
    closePopup(item)
  })
}

function listenerKeydown(){
  document.addEventListener('keydown', closeEscape)
}
export {openPopup, closePopup, listenerKeydown, closeItemPopipList}







