'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Source = function () {
    function Source(_ref) {
        var category = _ref.category,
            country = _ref.country,
            description = _ref.description,
            id = _ref.id,
            language = _ref.language,
            name = _ref.name,
            url = _ref.url;

        _classCallCheck(this, Source);

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

    _createClass(Source, [{
        key: 'loadArticles',
        value: function loadArticles() {
            var _this = this;

            fetch(this.articlesUrl + '&source=' + this.id).then(function (response) {
                return response.json();
            }).then(function (data) {
                var articleList = document.getElementById('article-list');

                _this.articles = data.articles.map(function (article) {
                    return new Article(_this.name, article);
                });
                _this.updateArticleList();
            });
        }
    }, {
        key: 'getDomElement',
        value: function getDomElement() {
            var srcName = this.name;
            var checkbox = document.createElement('input');
            var name = document.createElement('span');
            var source = document.createElement('label');

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
    }, {
        key: 'changeSourceVisibility',
        value: function changeSourceVisibility() {
            this.visible = !this.visible;
            this.updateArticleList();
        }
    }, {
        key: 'updateArticleList',
        value: function updateArticleList() {
            var articleList = document.getElementById('article-list');

            if (this.visible) {
                this.articles.map(function (article) {
                    var artDom = article.getDomElement();
                    articleList.appendChild(artDom);
                });
            } else {
                while (articleList.getElementsByClassName(this.name).length > 0) {
                    var article = document.getElementsByClassName(this.name)[0];
                    articleList.removeChild(article);
                }
            }
        }
    }]);

    return Source;
}();