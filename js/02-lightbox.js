import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const arrayLink = galleryElements(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", arrayLink);

function galleryElements(pictureList) {
  return pictureList
    .map(({ preview, original, description }) => {
      return `
   <a class="gallery__item" href="${original}" onclick="return: false;">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on("shown.simplelightbox", function (event) {
  gallery.setCaption(event.target.firstChild.nextSibling, "100%");
});
gallery.on("changed.simplelightbox", function (event) {
  gallery.setCaption(event.target.firstChild.nextSibling.alt, "100%");
});
