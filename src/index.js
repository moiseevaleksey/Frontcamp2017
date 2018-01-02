import LoadNewsButton from './classes/button';
import './style.css';
import incRating from './classes/decorator';
import Article from './classes/article';

// const showNewsButton = new LoadNewsButton();
// showNewsButton.init();

const art = new Article('qwe', { 
    author : 'aut', 
    title : 'title', 
    description: 'description', 
    url: 'url', 
    urlToImage : 'urlToImage',
    publishedAt : 'publishedAt' 
    });

incRating(art); 

console.log(art.raiting());