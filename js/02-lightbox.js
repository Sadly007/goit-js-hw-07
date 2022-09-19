// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
// 	galleryImage.className = 'gallery__image'
// 	galleryImage.src = element.preview
// 	galleryImage.setAttribute('title', element.description)
// 	galleryImage.alt = element.description

// 	galleryLink.append(galleryImage)
// 	items.push(galleryLink)
// })
// gallery.append(...items)

// new SimpleLightbox('.gallery a' , {
//     captionDelay: 250
// })
////////////////////////////////////////////////////////////////
import { galleryItems } from "./gallery-items.js";
// Change code below this line
let galeryList = "";
galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  galeryList =
    galeryList +
    `<div class="gallery__item"><a class="gallery__link" href="${original}"> <img class="gallery__image"
    src="${preview}" data-source="${original}" alt="${description}" /> </a> </div>`;
});
const mainGalery = document.querySelector(".gallery");
mainGalery.insertAdjacentHTML("afterbegin", galeryList);
console.log(galleryItems);

const gallery = new SimpleLightbox('.gallery a',
{
  captionsData:"alt",
  captionDelay:250,
});