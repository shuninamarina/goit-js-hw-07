import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class = "gallery__item">
    <a class = "gallery__link" href= "${original}">
    <img  
    class = "gallery__image" 
    data-source = "${original}" 
    src = ${preview} 
    alt = "${description}">
    </a>
    </li>
    `;
  })
  .join("");

gallery.addEventListener("click", openModalWindow);

function openModalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const imageModal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="auto">`,
    {
      onShow: () => window.addEventListener("keydown", onEscape),
      onClose: () => window.removeEventListener("keydown", onEscape),
    }
  );

  function onEscape(event) {
    if (event.code === "Escape") {
      imageModal.close();
    }
  }
  imageModal.show();
}
