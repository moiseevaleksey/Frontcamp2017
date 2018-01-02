import addEventListener from './facade';
import EventObserver from './observer';
import createStore from './redux';

// Redux
const initialState = {
    sourcesVisibility : false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_SOURCE_VISIBILITY':
            const sourcesVisibility = !state.sourcesVisibility;
            return {
                sourcesVisibility : sourcesVisibility
            };
        default:
            return state
    }
 };

const store = createStore(reducer);

const hideShowNewsButton = () => {
    const btn = document.getElementById('btn');
    if (btn) {
        btn.style.display = 'none';
    }
};

store.subscribe(hideShowNewsButton);



//=============

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
    store.dispatch({'type' : 'SWITCH_SOURCE_VISIBILITY'});
};

Button.prototype.init = function () {
    const btn = document.createElement('button');
    const buttonText = document.createTextNode(this.text);
    btn.id = 'btn';
    btn.appendChild(buttonText);

    addEventListener(btn, 'click', this.proceed);
    addEventListener(btn, 'click', this.hide);
    
    document.body.appendChild(btn);
};

function LoadNewsButton(text) {
    this.text = text;
}

LoadNewsButton.prototype = Object.create(Button.prototype);
LoadNewsButton.prototype.constructor = LoadNewsButton;

export default LoadNewsButton;



