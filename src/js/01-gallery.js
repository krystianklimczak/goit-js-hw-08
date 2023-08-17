import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryArray = [];

galleryItems.forEach(img => {
  const galleryElement = document.createElement('li');
  //   galleryElement.classList.add('gallery__item');
  const imageContent = `
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
      
    />
  </a>
`;
  galleryElement.insertAdjacentHTML('afterbegin', imageContent);
  galleryArray.push(galleryElement);
});

gallery.append(...galleryArray);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
