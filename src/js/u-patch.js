import { refs } from './refs';

const BASE_URL = 'http://localhost:7777';



class BookUpdate {
  constructor() {
    this.updateTitle = '';
    this.updateName = '';
  }

  setUpdateTitle(newBookUpdateTitle) {
      this.updateTitle = newBookUpdateTitle;
  }

  setUpdateName(newBookUpdateName) {
    this.updateName = newBookUpdateName;
  }

  updateBook() {
    return {
      [this.updateTitle]: this.updateName,
    };
  };
};

const bookUpdate = new BookUpdate();

async function setBookUpdate(e) {
  await collectData();
  const bookId = Number(refs.putchInput.value);
  try {
    await updateBookById(bookUpdate.updateBook(), bookId);
  } catch (error) {
    console.log(error);
  }

  refs.putchInput.value = '';
};

function collectData() {
  bookUpdate.setUpdateTitle(refs.putchSelect.value);
  bookUpdate.setUpdateName(refs.putchInputText.value);
}

async function updateBookById(update, bookId) {
    const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };
  const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
  return response.json();
};



refs.putchSubmitBtn.addEventListener('click', setBookUpdate)