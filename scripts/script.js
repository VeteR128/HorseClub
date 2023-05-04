const headerlinks = document.querySelectorAll(".header__link");
const footerLinks = document.querySelectorAll(".footer__link");
const popupLinks = document.querySelectorAll(".popup__link");
const popup = document.querySelector(".popup");
const openButton = document.querySelector(".header__button-menu");
const closeButton = document.querySelector(".popup__close");
const horseLeftButton = document.querySelector(".horse__left");
const horseRightButton = document.querySelector(".horse__right");
const horseCards = document.querySelector(".horse__cards");
const horseElement = ".horse__card";
const commentRightButton = document.querySelector(".comments__right");
const commentLeftButton = document.querySelector(".comments__left");
const commentsElement = ".comments__card";
const commentCards = document.querySelector(".comments__cards");

class slider {
  constructor(card, left, right, elements) {
    this._cards = card;
    this._elements = elements;
    this._leftButton = left;
    this._rightButton = right;
  }
  setEventListeners() {
    this._leftButton.addEventListener("click", (e) => {
      e.preventDefault();
      this._appendleft();
    });
    this._rightButton.addEventListener("click", (e) => {
      e.preventDefault();
      this._appendright();
    });
  }
  _appendleft() {
    const element = this._cards.querySelectorAll(this._elements);
    console.log(element);
    this._cards.append(element[0].cloneNode(true));
    console.log(element.length);
    element[0].remove();
  }
  _appendright() {
    const element = this._cards.querySelectorAll(this._elements);
    console.log(element);
    this._cards.prepend(element[element.length - 1].cloneNode(true));
    console.log(element.length);
    element[element.length - 1].remove();
  }
}
const horseSlider = new slider(
  horseCards,
  horseLeftButton,
  horseRightButton,
  horseElement
);

horseSlider.setEventListeners();
const commentSlider = new slider(
  commentCards,
  commentLeftButton,
  commentRightButton,
  commentsElement
);
commentSlider.setEventListeners();
class openAndClose {
  constructor(openButton, closeButton, item) {
    this._openButton = openButton;
    this._closeButton = closeButton;
    this._item = item;
  }
  setEventListeners() {
    this._openButton.addEventListener("click", () => {
      this._openAndClose();
    });
    this._closeButton.addEventListener("click", () => {
      this._openAndClose();
    });
    this._item.addEventListener("click", (e) => {
      if (!e.target.classList.contains("active")) {
        this._item.classList.remove("active");
      }
    });
  }
  _close() {
    this._item.classList.remove("active");
  }

  _openAndClose() {
    this._item.classList.toggle("active");
  }
}
class scrollLink {
  constructor(links) {
    this._links = links;
  }
  setEventListeners() {
    for (let link of this._links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        this._scroll(id);
      });
    }
  }
  _scroll(id) {
    document
      .querySelector("" + id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const scrollHeaderLinks = new scrollLink(headerlinks);
scrollHeaderLinks.setEventListeners();
const scrollFooterLinks = new scrollLink(footerLinks);
scrollFooterLinks.setEventListeners();
const scrollPopupLinks = new scrollLink(popupLinks);
scrollPopupLinks.setEventListeners();
const openAndClosePopup = new openAndClose(openButton, closeButton, popup);
openAndClosePopup.setEventListeners();
