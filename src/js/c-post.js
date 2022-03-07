import { refs } from './refs';
// import bookTemplate from '../template/book.hbs';
import NewBook from './class/newBook';

const BASE_URL = 'http://localhost:7777';

const newBook = new NewBook();

function collectBookInfo() {
  newBook.setTitle(refs.postTitleInput.value);
  newBook.setAuthor(refs.postAuthorInput.value);
  newBook.setGenres(refs.postGenresInput.value);
  newBook.setRating(refs.postRatingInput.value);
};

async function fetchNewNewBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };
  const response = await fetch(`${BASE_URL}/books`, options);
  return response.json();
};

refs.postSubmitBtn.addEventListener('click', newBookPost)

async function newBookPost() {
  const form = [refs.postRatingInput, refs.postAuthorInput, refs.postGenresInput, refs.postTitleInput];
  await collectBookInfo();
  await fetchNewNewBook(newBook.getBook())
    .then((book) => {
      console.log(book);
      // refs.getContainer.innerHTML = bookTemplate(book)
    })
    .catch(error => console.log(error))
    .finally(() => {
      for (let el of form) {
        el.value = '';
      }
    });
};
