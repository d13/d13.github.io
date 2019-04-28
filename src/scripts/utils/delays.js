export function debounceFrame(func) {
    let timer;
    return function() {
        const scope = this;
        const args = arguments;

        if (timer) cancelAnimationFrame(timer);

        timer = requestAnimationFrame(() => {
            func.apply(scope, args);
        });
    };
}

export function debounce(func, time) {
    let timer;
    return function() {
        const scope = this;
        const args = arguments;

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(scope, args);
        }, time);
    };
}

export function throttle(func, time) {
    let wait;
    return function() {
        if (wait) return;

        func().apply(this, arguments);
        wait = true;

        setTimeout(() => {
            wait = false;
        }, time);
    };
}