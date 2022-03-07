import colors from './colors.json';
import '../css/common.css';
import '../css/colorpicker.css';
import colorCardTpl from '../templates/color-card.hbs';
// import colorCardsTpl from '../templates/color-cards.hbs';

console.log(colorCardTpl(colors[0])); // -> console.log, which call the template function

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);


function createColorCardMarkup(colors) {
    return colorCardTpl(colors); // -> this is the callback of template function 
        
}

function onPaletteContainerClick(e) {
    console.log(e.target.dataset.hex);
    console.log(e.currentTarget);


      const parentColorCard = e.target.closest('.color-card');
    setBodyBgColor(e.target.dataset.hex);
    removeActiveCardClass();
    addActiveCardClass(parentColorCard);
}

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
    card.classList.add('is-active');
}