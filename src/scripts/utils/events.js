export function on(element, type, listener, thisArg, capture) {
    capture || (capture = false);

    if (thisArg) {
        listener = listener.bind(thisArg);
    }

    element.addEventListener(type, listener, capture);

    return {
        off: function() {
            element.removeEventListener(type, listener, capture);
        }
    };
}