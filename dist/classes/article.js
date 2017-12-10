'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
    function Article(source, _ref) {
        var author = _ref.author,
            title = _ref.title,
            description = _ref.description,
            url = _ref.url,
            urlToImage = _ref.urlToImage,
            publishedAt = _ref.publishedAt;

        _classCallCheck(this, Article);

        this.source = source;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = new Date(publishedAt);
    }

    _createClass(Article, [{
        key: 'getDomElement',
        value: function getDomElement() {
            var article = document.createElement('div');
            var header = document.createElement('h3');
            var description = document.createElement('p');
            var linkToArticle = document.createElement('a');
            var date = document.createElement('span');
            var img = document.createElement('img');

            article.className = this.source;
            article.classList.add('article');
            article.setAttribute('timestamp', this.publishedAt.valueOf());
            header.innerHTML = this.title;
            description.innerHTML = this.description;
            linkToArticle.href = this.url;
            linkToArticle.innerHTML = 'Readt details at the ' + this.source;
            date.innerHTML = this.publishedAt.toLocaleDateString();
            img.src = this.urlToImage;

            article.appendChild(img);
            article.appendChild(header);
            article.appendChild(description);
            article.appendChild(date);
            article.appendChild(linkToArticle);

            return article;
        }
    }]);

    return Article;
}();