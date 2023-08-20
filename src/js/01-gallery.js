import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const galleryArray = galleryItems.map(item => {
  const galleryElement = document.createElement('li');
  const imageContent = `<a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
  
       />
     </a>`;
  galleryElement.insertAdjacentHTML('afterbegin', imageContent);
  return galleryElement;
});

gallery.append(...galleryArray);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
