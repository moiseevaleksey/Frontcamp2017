import addEventListener from './facade';
import EventObserver from './observer';

const observer = new EventObserver();

const showMsgToConsole = (text) => {
    console.log(text);
};

observer.subscribe(showMsgToConsole);

function Button(text) {
}

Button.prototype.proceed = function () {
    require.ensure([], (require) => {
        const Factory = require('./factory').default;

        const app = new Factory('Application');
        app.loadSources();
        observer.broadcast('Articles have been loaded');
    });
};

Button.prototype.hide = function () {
    this.style.display = 'none';
};

Button.prototype.init = function () {
    const btn = document.createElement('button');
    const buttonText = document.createTextNode(this.text);
    btn.id = 'btn';
    btn.appendChild(buttonText);

    addEventListener(btn, 'click', this.proceed);
    addEventListener(btn, 'click', this.hide.bind(btn));
    
    document.body.appendChild(btn);
};

function LoadNewsButton(text) {
    this.text = text;
}

LoadNewsButton.prototype = Object.create(Button.prototype);
LoadNewsButton.prototype.constructor = LoadNewsButton;


export default LoadNewsButton;