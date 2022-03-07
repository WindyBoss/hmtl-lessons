import '../css/common.css';
import { refs } from './refs';
import bookTemplate from '../template/book.hbs';

const BASE_URL = 'http://localhost:7777';

refs.getbtn.addEventListener('click', onSubmitClick)


async function onSubmitClick(e) {
  e.preventDefault();
  const book = await fetchBookById(refs.getInput.value);
  refs.getContainer.innerHTML = await bookTemplate(book);
  refs.getInput.value = '';
};

async function fetchBookById(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  return response.json();
};




