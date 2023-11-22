import API from './api.js';

const form = document.getElementById('form');
const articlesList = document.getElementById('articlesWrapper');
const loadingEL = document.getElementById('loading');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = form.elements.news.value.trim();
  if (inputValue === '') {
    alert('Please, write something');
    return;
  }
  loadData(inputValue);
});

function loadData(searchTerm) {
  showElement(loadingEL);
  hideElement(articlesList);

  API.getNews(searchTerm)
    .then(data => {
      const { articles } = data;
      if (articles?.length === 0) {
        hideElement(loadingEL);
        showElement(articlesList);
        updateArticlesList('<h3>Articles not found</h3>');
        throw new Error('No data');
      }

      return createMarkup(articles);
    })
    .then(markup => {
      updateArticlesList(markup);
      hideElement(loadingEL);
      showElement(articlesList);
    })
    .catch(error => alert(error))
    .finally(() => form.reset());
}

function createMarkup(articles) {
  const markup = articles
    .map(article => {
      const { author, title, description, url, urlToImage } = article;
      return `
      <div class="article-card">
        <h2 class="article-title">${title}</h2>
        <h3 class="article-author">${author || 'Anonym'}</h3>
        <img src=${urlToImage} class="article-img">
        <p class="article-description">${description}</p>
        <a href=${url} class="article-link" target="_blank">Read more</a>
      </div>
    `;
    })
    .join('');
  return markup;
}

function updateArticlesList(markup) {
  articlesList.innerHTML = markup;
}

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}
