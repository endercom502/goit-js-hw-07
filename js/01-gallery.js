import { galleryItems } from "./gallery-items.js";
<----------------gallery--------------->
const galleryContainer = document.querySelector(".gallery");
const arrayLink = galleryElements(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", arrayLink);
galleryContainer.addEventListener("click", onModalPictureClick);

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
}

console.log(galleryItems);
