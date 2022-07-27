import { galleryItems } from "./gallery-items.js";
// <----------------gallery--------------->
const galleryContainer = document.querySelector(".gallery");
const arrayLink = galleryElements(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", arrayLink);
galleryContainer.addEventListener("click", modalWindow);

function galleryElements(pictureList) {
  return pictureList
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="return false;">
    <img 
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>
    `;
    })
    .join("");

  // <--------------modal----------->
}
function modalWindow(event) {
  filterClicks(event);
  modalCreate(event);
}

function filterClicks(event) {
  const modalActive = event.target.classList.contains("active__modal");
  if (!modalActive) {
    return;
  }
}

function modalCreate(event) {
  const modalOpen = basicLightbox.create(
    `<img width="100%" height="100%" id="modal-window" src=${event.target.dataset.source}>`
  );
  galleryContainer.onclick = modalOpen.show();
}
// console.log(galleryItems);
