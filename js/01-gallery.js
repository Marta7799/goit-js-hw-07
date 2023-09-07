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
