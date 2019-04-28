import { debounceFrame } from "./utils/delays";

let lazyQueries = {};
function lazyQueryAll(selector) {
    if (!lazyQueries.hasOwnProperty(selector)) {
        const els = document.querySelectorAll(selector);
        if (els.length) {
            lazyQueries[selector] = els;
        }
    }
    return lazyQueries[selector];
}

let vpW = window.innerWidth;
let vpH = window.innerHeight;
window.addEventListener('resize', debounceFrame(() => {
    console.log('resize');
    vpW = window.innerWidth;
    vpH = window.innerHeight;
}), false);

function elementIsVisible(el) {
    // FIXME: performance issue, cache this somewhere
    const rect = el.getBoundingClientRect();
    if (rect.top <= -rect.height || rect.top >= vpH) {
        return false;
    }

    if (rect.left <= -rect.width || rect.left >= vpW) {
        return false;
    }

    return true;
}

function detectVisibility(selector, once) {
    let selections = lazyQueryAll(selector);
    selections.forEach(el => {
        if (elementIsVisible(el)) {
            el.classList.add('is-in-view');
        } else if (!once) {
            el.classList.remove('is-in-view');
        }
    });
}

function detectAnimationVisibility() {
    detectVisibility('.h-vp-in');
    detectVisibility('.h-vp-in-once', true);
}

const debouncedDetectAnimationVisibility = debounceFrame(() => {
    detectAnimationVisibility();
});

window.addEventListener('scroll', e => {
    console.log('scrolling');
    debouncedDetectAnimationVisibility();
}, false);

document.addEventListener('DOMContentLoaded', e => {
    debouncedDetectAnimationVisibility();
}, false);