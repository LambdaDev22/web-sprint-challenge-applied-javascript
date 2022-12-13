const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const articleCard = document.createElement('div');
  const articleHeadline = document.createElement('div');
  const articleAuthor = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const articleAuthorName = document.createElement('span');

  articleCard.classList.add('card');
  articleHeadline.classList.add('headline');
  articleAuthor.classList.add('author');
  imgContainer.classList.add('img-container');

  articleHeadline.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  articleAuthorName.textContent = article.authorName;

  articleCard.appendChild(articleHeadline);
  articleCard.appendChild(articleAuthor);
  articleAuthor.appendChild(imgContainer);
  articleAuthor.appendChild(articleAuthorName);
  imgContainer.appendChild(authorImg);

  console.log(articleCard);
  return articleCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

axios.get('http://localhost:5001/api/articles')
.then(res => {
  console.log(res.data.articles);
  for (let i = 0; i < res.data.articles.javascript.length; i++) {
    document.querySelector(selector).appendChild(Card(res.data.articles.javascript[i]))
  };
  for (let i = 0; i < res.data.articles.bootstrap.length; i++) {
    document.querySelector(selector).appendChild(Card(res.data.articles.bootstrap[i]))
  };
  for (let i = 0; i < res.data.articles.technology.length; i++) {
    document.querySelector(selector).appendChild(Card(res.data.articles.technology[i]))
  };
  for (let i = 0; i < res.data.articles.jquery.length; i++) {
    document.querySelector(selector).appendChild(Card(res.data.articles.jquery[i]))
  };
  for (let i = 0; i < res.data.articles.node.length; i++) {
    document.querySelector(selector).appendChild(Card(res.data.articles.node[i]))
  };
})
.catch(err => {
  console.error(err);
})

}

export { Card, cardAppender }
