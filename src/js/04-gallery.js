import '../css/common.css';
import '../css/gallery.css';
import countries from './countries.json';
import itemsTemplate from '../templates/gallery-items.hbs';

const galleryRef = document.querySelector('.js-gallery');
console.log(galleryRef);
const markup = itemsTemplate(countries);
console.log(markup);




galleryRef.insertAdjacentHTML('beforeend', markup);