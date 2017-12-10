'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application() {
        _classCallCheck(this, Application);

        this.sourcesListUrl = 'https://newsapi.org/v1/sources?country=us';
        this.sourceList = [];
    }

    _createClass(Application, [{
        key: 'loadSources',
        value: function loadSources() {
            var _this = this;

            fetch(this.sourcesListUrl).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this.sourceList = data.sources.map(function (src) {
                    return new Source(src);
                });
                _this.sourceList.map(function (src) {
                    return src.loadArticles();
                });
                _this.renderSourceList();
            });
        }
    }, {
        key: 'renderSourceList',
        value: function renderSourceList() {
            this.sourceList.map(function (src) {
                var divSourceList = document.getElementById('source-list');
                divSourceList.appendChild(src.getDomElement());
            });
        }
    }]);

    return Application;
}();