export default class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(subsciber => {
        });
    }

    broadcast(data) {
        this.observers.forEach(sub => {
            sub(data)
        });
    }
}