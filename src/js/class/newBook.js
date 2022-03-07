export default class NewBook  {
  constructor() {
    this.title = '';
    this.author = '';
    this.genres = '';
    this.rating = '';
  };

  setTitle(newTitle) {
    this.title = newTitle;
  };

  setAuthor(newAuthor) {
    this.author = newAuthor;
  };

  setGenres(newGenres) {
    this.genres = newGenres;
  };

  setRating(newRating) {
    this.rating = newRating;
  }

  getTitle() {
    return this.title;
  };

  getAuthor() {
    return this.author;
  };

  getGenres() {
    return this.genres;
  };

  getRating() {
    return this.rating;
  }

  getBook() {
    return {
      title: this.title,
      author: this.author,
      genres: [this.genres],
      rating: this.rating
    }
  }

};