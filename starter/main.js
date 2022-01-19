var likeCounter = 0;

function likeThisPost(article) {
	console.log(article);

	likeCounter += 1;

	var likeCounterElement = document.getElementById('like-count');

	likeCounterElement.innerHTML = 'Likes: ' + likeCounter;
}
