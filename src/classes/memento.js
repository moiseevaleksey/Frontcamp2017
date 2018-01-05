import Application from './application';

const originator = {
    store: function(val) {
        return new Application(val);
    },
    restore: function(app) {
        return app.fakeField;
    }
};

class Caretaker {
    constructor() {
        this.values = [];
    }

    addMemento(app) {
        this.values.push(app);
    }

    getMemento(index) {
        return this.values[index];
    }
}

export { originator, Caretaker };