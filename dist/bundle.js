/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_application__ = __webpack_require__(2);


let app = new __WEBPACK_IMPORTED_MODULE_0__classes_application__["a" /* default */]();

app.loadSources();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source__ = __webpack_require__(3);


class Application {
    constructor() {
        this.sourcesListUrl = 'https://newsapi.org/v1/sources?country=us';
        this.sourceList = [];
    }

    loadSources() {
        fetch(this.sourcesListUrl).then(response => {
            return response.json();
        }).then(data => {
            this.sourceList = data.sources.map(src => new __WEBPACK_IMPORTED_MODULE_0__source__["a" /* default */](src));
            this.sourceList.map(src => src.loadArticles());
            this.renderSourceList();
        });
    }

    renderSourceList() {
        this.sourceList.map(src => {
            const divSourceList = document.getElementById('source-list');
            divSourceList.appendChild(src.getDomElement());
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Application;
;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article__ = __webpack_require__(4);


class Source {
    constructor({ category, country, description, id, language, name, url }) {
        this.category = category;
        this.country = country;
        this.description = description;
        this.id = id;
        this.language = language;
        this.name = name;
        this.url = url;
        this.articles = [];
        this.apiKey = '79bcf63b008145a5913ed908010d69ea';
        this.articlesUrl = 'https://newsapi.org/v1/articles' + '?apiKey=' + this.apiKey;
        this.visible = false;
    }

    loadArticles() {
        fetch(this.articlesUrl + '&source=' + this.id).then(response => {
            return response.json();
        }).then(data => {
            const articleList = document.getElementById('article-list');

            this.articles = data.articles.map(article => new __WEBPACK_IMPORTED_MODULE_0__article__["a" /* default */](this.name, article));
            this.updateArticleList();
        });
    }

    getDomElement() {
        const srcName = this.name;
        const checkbox = document.createElement('input');
        const name = document.createElement('span');
        const source = document.createElement('label');

        source.className = 'source';
        source.id = this.id;
        checkbox.type = 'checkbox';
        checkbox.className = 'src-chbx';
        checkbox.onclick = this.changeSourceVisibility.bind(this);
        checkbox.id = this.id;
        name.innerHTML = this.name;
        source.appendChild(checkbox);
        source.appendChild(name);

        return source;
    }

    changeSourceVisibility() {
        this.visible = !this.visible;
        this.updateArticleList();
    }

    updateArticleList() {
        const articleList = document.getElementById('article-list');

        if (this.visible) {
            this.articles.map(article => {
                const artDom = article.getDomElement();
                articleList.appendChild(artDom);
            });
        } else {
            while (articleList.getElementsByClassName(this.name).length > 0) {
                const article = document.getElementsByClassName(this.name)[0];
                articleList.removeChild(article);
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Source;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Article {
    constructor(source, { author, title, description, url, urlToImage, publishedAt }) {
        this.source = source;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = new Date(publishedAt);
    }

    getDomElement() {
        let article = document.createElement('div');
        let header = document.createElement('h3');
        let description = document.createElement('p');
        let linkToArticle = document.createElement('a');
        let date = document.createElement('span');
        let img = document.createElement('img');

        article.className = this.source;
        article.classList.add('article');
        article.setAttribute('timestamp', this.publishedAt.valueOf());
        header.innerHTML = this.title;
        description.innerHTML = this.description;
        linkToArticle.href = this.url;
        linkToArticle.innerHTML = `Readt details at the ${this.source}`;
        date.innerHTML = this.publishedAt.toLocaleDateString();
        img.src = this.urlToImage;

        article.appendChild(img);
        article.appendChild(header);
        article.appendChild(description);
        article.appendChild(date);
        article.appendChild(linkToArticle);

        return article;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Article;


/***/ })
/******/ ]);