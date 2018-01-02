const addEvent = (elem, type, func) => {
    if (window.addEventListener) {
        elem.addEventListener(type, func, false);
    } else {
        elem.attachEvent('on' + type, func); // ie6-10
    }
}

export default addEvent;