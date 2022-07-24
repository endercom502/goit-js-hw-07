import { galleryItems } from './gallery-items.js';
// Change code below this line

    const ulId = document.querySelector(".gallery");
     const arrayLink = `${galleryItems.map((item) => `<div><img src=${item.preview} alt=${item.description}/></div>`)}`;
       let sum = 0;
       sum += ulId.insertAdjacentHTML("afterbegin", arrayLink);
         
   
console.log(galleryItems);
