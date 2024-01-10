const ENDPOINT = 'https://newsapi.org/v2/everything';
const KEY_API = '1bfb956be4624deab8ea82acf099560b';

function getNews(query) {
  const url = `${ENDPOINT}?apiKey=${KEY_API}&q=${query}`;

  return fetch(url).then(response => response.json());
}

export default { getNews };
