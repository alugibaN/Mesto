import {
  imgPopup,
  handleDeleteCard,
  editStatusLike,
} from "./index";
import { openPopup } from "./modal";
import { createCardsPost } from "./Api";

function createCard(obj) {
  // создание карточки с местом
  const { link, name, user, likes, cardId, notMyId } = obj;
  const template = document.querySelector("#mesto-template").content;
  const content = template.querySelector(".element").cloneNode(true);
  const likeCounter = content.querySelector(".element__counter-value");
  const like = content.querySelector(".element__like");
  content.querySelector(".element__img").src = link;
  content.querySelector(".element__img").alt = name;
  content.querySelector(".element__appellation").textContent = name;
  content
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      editStatusLike(cardId, like, likeCounter);
    });
  likeCounter.textContent =
    Array.isArray(likes) && likes.length > 0 ? likes.length : "";
  content
    .querySelector(".element__delet")
    .addEventListener("click", function (evt) {
      handleDeleteCard(cardId, content);
    });

  const deleteButton = content.querySelector(".element__delet");
  if (notMyId !== user) {
    deleteButton.remove();
  }

  content
    .querySelector(".element__img")
    .addEventListener("click", function (evt) {
      const imgSrc = evt.target.getAttribute("src");
      const nameAlt = evt.target.alt;
      const popupBigImg = document.querySelector(".popup__img");
      const popupBigName = document.querySelector(".popup__name");
      popupBigImg.setAttribute("src", imgSrc);
      popupBigName.textContent = nameAlt;
      openPopup(imgPopup);
    });
  return content;
}
function addCard(container, user) {
  container.prepend(createCard(user));
}
export { createCard, addCard };
