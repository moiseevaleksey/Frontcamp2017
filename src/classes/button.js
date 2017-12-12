export default class Button {
    constructor() {
        this.text = 'Load News';
    }

    proceed() {
        require.ensure([], (require) => {
            const Application = require('./application').default;

            let app = new Application();
            app.loadSources();
        });
    }

    hide() {
        this.style.display = 'none';
    }

    init() {
        var btn = document.createElement('button')
        var buttonText = document.createTextNode('Show News');
        btn.id = 'btn';
        btn.appendChild(buttonText);

        btn.addEventListener('click', this.proceed);
        btn.addEventListener('click', this.hide.bind(btn));

        document.body.appendChild(btn);
    }
}