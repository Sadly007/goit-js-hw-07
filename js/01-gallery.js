// import { galleryItems } from './gallery-items.js'

// console.log(galleryItems)
// // Change code below this line

// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryItem = document.createElement('div')
// 	galleryItem.className = 'gallery__item'
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
//     galleryImage.className = 'gallery__image'
//     galleryImage.src = element.preview;
//     galleryImage.setAttribute('data-source', element.original)
//     galleryImage.alt = element.description;

// 	galleryItem.append(galleryLink)
// 	galleryLink.append(galleryImage)
// 	items.push(galleryItem)
// })

// gallery.append(...items)

// gallery.addEventListener('click', e => {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
// 		return
// 	}

//     const selectedImage = e.target.getAttribute('data-source')

//     const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">
// `)

//     instance.show()
    
//     gallery.addEventListener('keydown', e => {
// 		if (e.key === 'Escape') {
// 			instance.close()
// 		}
// 	})
// })


////////////////////////////////////////////////
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

mainGalery.addEventListener("click", selectImg);

function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
        <img
    src="${event.target.dataset.source}" height="600px" width="800px"  /> 
    </div>`);
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", (event) => {
        console.log("hey");
      });
    }
  });
}