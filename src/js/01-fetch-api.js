import '../css/style.css';
import pokemonCardTpl from '../template/pokemon-card.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getRefs from './refs';
import API from './api-service';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
  event.preventDefault(); // only works with tag <form>

  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;

    API.fetchPokemon(searchQuery)
    .then(pokemonCardmark)
    .catch(onFetchError)
    .finally(() => form.reset());
};


function pokemonCardmark(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.container.innerHTML = markup;
};



function onFetchError(error) {
  console.log('This is catch!!!');
  console.log(error);
  Notify.failure('Sorry, we did not find your pokemon');
}

const pictureUrl = 'https://pixabay.com/api/everything?q=porn';

const option = {
  headers: {
    key: '24446633-b389c41e2d0894dd8f6fd2fd1'
  },
};


// fetch(pictureUrl, option)
//   .then(r => r.json())
//   .then(console.log);

fetch('https://pixabay.com/api/?key=24446633-b389c41e2d0894dd8f6fd2fd1&q=porn&image_type=photo')
  .then(r => r.json())
  .then(console.log);
