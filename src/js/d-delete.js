import { refs } from './refs';

const BASE_URL = 'http://localhost:7777';


async function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/books/${bookId}`, options)
  return await response.json();
}

async function onBtnClick() {
  await removeBook(refs.deleteInput.value);
  refs.deleteInput.value = '';
}
refs.deleteBtn.addEventListener('click', onBtnClick);