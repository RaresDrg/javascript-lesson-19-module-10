const ENDPOINT = 'https://newsapi.org/v2/everything';
const KEY_API = 'c16730bd019e47b49168e3f2670f55aa';

function getNews(query) {
  return fetch(`${ENDPOINT}?apiKey=${KEY_API}&q=${query}`).then(response =>
    response.json()
  );
}

export default { getNews };
