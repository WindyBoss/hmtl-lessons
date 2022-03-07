import '../css/common.css';
import NewsApiService from './news-service';
import {refs} from './components/refs';
import LoadMoreBtn from './components/load-more-btn';
import acticleTemplate from '../templates/articles.hbs';

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true
});


refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
  e.preventDefault();


  newsApiService.query = e.currentTarget.elements.query.value;
  if (newsApiService.query === '') {
    return alert('Text something normal');
  };

  loadMoreBtn.show();
  newsApiService.resetPage();
  clearArticleContainer();
  fetchArticles();
};


function onLoadMore() {
  fetchArticles();
};

function fetchArticles() {
  loadMoreBtn.disabled();
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function clearArticleContainer() {
  refs.articlesContainer.innerHTML = '';
};

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', acticleTemplate(articles))
};