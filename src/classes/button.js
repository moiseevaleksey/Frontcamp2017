function Button() {
}

function LoadNewsButton() {
    Button.call(this); 
}

LoadNewsButton.prototype = Object.create(Button.prototype);
LoadNewsButton.prototype.constructor = LoadNewsButton;

LoadNewsButton.prototype.proceed = () => {
    require.ensure([], (require) => {
        const Factory = require('./factory').default;

        const app = new Factory('Application');
        app.loadSources();
    });
};

LoadNewsButton.prototype.hide = () => {
    this.style.display = 'none';
};

LoadNewsButton.prototype.init = () => {
    console.log(this);
    const btn = document.createElement('button')
    const buttonText = document.createTextNode('Load News');
    btn.id = 'btn';
    btn.appendChild(buttonText);

    btn.addEventListener('click', this.proceed);
    btn.addEventListener('click', this.hide);

    document.body.appendChild(btn);
};

export default LoadNewsButton;