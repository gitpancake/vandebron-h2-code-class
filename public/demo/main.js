var likesArticleOne = 0;
var likesArticleTwo = 0;

function likeArticleOne() {
  likesArticleOne = likesArticleOne + 1;

  var counter = document.getElementById("likesCounterArticleOne");

  counter.innerHTML = likesArticleOne;
}

function likeArticleTwo() {
  likesArticleTwo = likesArticleTwo + 1;

  var counter = document.getElementById("likesCounterArticleTwo");

  counter.innerHTML = likesArticleTwo;
}
