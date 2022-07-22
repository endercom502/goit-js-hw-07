import { galleryItems } from './gallery-items.js';
// Change code below this line
galleryItems.forEach(array => {
    const ulId = document.querySelector(".gallery");
     const arrayLink = `${galleryItems.map((item) => `<li><img src=${item.preview} alt=${item.description}/></li>`)}`;
       let sum = 0;
       sum += ulId.insertAdjacentHTML("afterbegin", arrayLink);
         
   });
console.log(galleryItems);
