!function(){var n={getNews:function(n){var t="".concat("https://newsapi.org/v2/everything","?apiKey=").concat("1bfb956be4624deab8ea82acf099560b","&q=").concat(n);return fetch(t).then((function(n){return n.json()}))}},t=document.getElementById("form"),e=document.getElementById("articlesWrapper"),a=document.getElementById("loading");function c(n){e.innerHTML=n}function r(n){n.classList.remove("hidden")}function i(n){n.classList.add("hidden")}t.addEventListener("submit",(function(o){o.preventDefault();var l,s=t.elements.news.value.trim();""!==s?(l=s,r(a),i(e),n.getNews(l).then((function(n){var t=n.articles;if(0===(null==t?void 0:t.length))throw i(a),r(e),c("<h3>Articles not found</h3>"),new Error("No data");return function(n){return n.map((function(n){var t=n.author,e=n.title,a=n.description,c=n.url,r=n.urlToImage;return'\n      <div class="article-card">\n        <h2 class="article-title">'.concat(e,'</h2>\n        <h3 class="article-author">').concat(t||"Anonym","</h3>\n        <img src=").concat(r,' class="article-img">\n        <p class="article-description">').concat(a,"</p>\n        <a href=").concat(c,' class="article-link" target="_blank">Read more</a>\n      </div>\n    ')})).join("")}(t)})).then((function(n){c(n),i(a),r(e)})).catch((function(n){return alert(n)})).finally((function(){return t.reset()}))):alert("Please, write something")}))}();
//# sourceMappingURL=01-example-1.46b280ad.js.map