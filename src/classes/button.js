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

    vypilitsa() {
        const baton = document.getElementById('btn');
        baton.style.display = 'none';
    }
}