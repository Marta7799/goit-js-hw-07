import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery__item";
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;
  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("data-source", element.original);
  galleryImage.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
  items.push(galleryItem);
});

gallery.append(...items);

gallery.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.dataset.source;

  const imageWindow = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600" >
`);

  imageWindow.show();

  gallery.addEventListener("keydown", onEsc);
  function onEsc(e) {
    if (e.key === "Escape") {
      imageWindow.close();
      gallery.removeEventListener("keydown", onEsc);
    }
  }
}

// const gallery = document.querySelector(".gallery");

// galleryItems.forEach((picture) => {
//   gallery.insertAdjacentHTML(
//     "beforeend",
//     `<li>
//         <div class="gallery__item">
//           <a class="gallery__link" href="${picture.original}">
//             <img
//               class="gallery__image"
//               src="${picture.preview}"
//               data-source="${picture.original}"
//               alt="${picture.description}"
//             />
//           </a>
//         </div>
//       </li>`
//   );
// });

// for (let i = 0; i < galleryItems.length; i += 1) {
//   let imgDiv = gallery.childNodes[i].firstElementChild;
//   imgDiv.style.height = "100%";
// }

// const selectImage = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const selectedImg = event.target.dataset.source;
//   const instance = basicLightbox.create(
//     `
//     <img src="${selectedImg}">`
//   );
//   instance.show();

//   const close = (event) => {
//     if (event.code === "Escape") {
//       instance.close();
//       document.removeEventListener("keydown", close);
//     }
//   };
//   document.addEventListener("keydown", close);
// };

// gallery.addEventListener("click", selectImage);
