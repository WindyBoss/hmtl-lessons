const API_KEY = '53f3626803f54b22815a7a5db463110c';
const BASE_URL = 'https://newsapi.org/v2/';
   const options = {
      headers: {
        authorization: API_KEY,
      },
    };


export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
    fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  incrementPage() {
    this.page += 1;
    console.log(this.page)
  }

  resetPage() {
    this.page = 1;
  }
}

