export function findParent(element, lookupFn) {
    const parentEl = element.parentElement;
    if (!parentEl) return;
    if (lookupFn(parentEl)) return parentEl;

    return findParent(parentEl, lookupFn);
}

export function findParentAll(element, lookupFn) {
    const matches = [];
    let parentEl = element.parentElement;
    while(parentEl) {
        if (lookupFn(parentEl)) {
            matches.push(parentEl);
        }
        parentEl = element.parentElement;
    }

    return matches;
}

export function queryParent(element, selector) {
    return findParent(element, el => el.matches(selector));
}

export function queryParentAll(element, selector) {
    return findParentAll(element, el => el.matches(selector));
}

const cachedQueries = {};
export function cachedQueryAll(selector) {
    if (!cachedQueries.hasOwnProperty(selector)) {
        const els = document.querySelectorAll(selector);
        if (els.length) {
            cachedQueries[selector] = els;
        }
    }
    return cachedQueries[selector];
}