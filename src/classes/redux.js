const createStore = reducer => {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = listner => {
        listeners.push(listner);
    };

    const unsubscribe = listener => {
        listeners = listeners.filter(lstnr => lstnr !== listener);
    };

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(
            listener => listener()
        );
    };

    dispatch({});

    return {getState, dispatch, subscribe, unsubscribe};
};

export default createStore;