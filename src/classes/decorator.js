const incRating = article => {
	const raiting = article.raiting();
	article.raiting = () => raiting + 1; 
};

export default incRating;