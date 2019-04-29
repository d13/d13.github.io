import { on } from './events';
import { debounceFrame } from './delays';

export function observeVisibility(items, once) {
    if (!items || !items.length) return { off: () => {} };

    const observer = new IntersectionObserver((entries) => {
        console.log('IntersectionObserver 2', entries);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('is Intersecting', entry);
                entry.target.classList.add('is-in-view');
                if (once) {
                    observer.unobserve(entry.target);
                }
            } else {
                console.log('not Intersecting', entry);
                entry.target.classList.remove('is-in-view');
            }
        });
    }, {
        threshold: 0.5
    });

    if (items && items.length) {
        for (let i=0; i < items.length; i++) {
            observer.observe(items[i]);
        }
    }

    return {
        off: () => {
            observer.disconnect();
        }
    };
}

let vpW = window.innerWidth;
let vpH = window.innerHeight;
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

function detectVisibility(items, once) {
    items.forEach(el => {
        if (once && el.classList.contains('is-in-view')) {
            return;
        }

        if (elementIsVisible(el)) {
            el.classList.add('is-in-view');
        } else {
            el.classList.remove('is-in-view');
        }
    });
}

const listenerQueue = {};
function detectAnimationVisibility() {
    console.log('detectAnimationVisibility');

    Object.keys(listenerQueue).map(key => listenerQueue[key]).forEach(_ => {
        detectVisibility(_.items, _.once);
    });
}

const debouncedDetectAnimationVisibility = debounceFrame(() => {
    detectAnimationVisibility();
});

let activeVisibility;
function listenOnChanges() {
    if (!activeVisibility) {
        let events = [
            on(window, 'resize', () => {
                console.log('resize');
                vpW = window.innerWidth;
                vpH = window.innerHeight;
                debouncedDetectAnimationVisibility();
            }),
            on(window, 'scroll', () => {
                console.log('scroll');
                debouncedDetectAnimationVisibility();
            })
        ];

        activeVisibility = {
            off: () => {
                events.forEach(_ => _.off());
            }
        };
    }

    return activeVisibility;
}

export function monitorVisibility(selector, once) {
    if (!listenerQueue.hasOwnProperty(selector)) {
        const els = document.querySelectorAll(selector);
        if (els && els.length) {
            listenerQueue[selector] = {
                items: els,
                once: once || false
            };
            listenOnChanges();
        }
    }

    return {
        off: function() {
            activeVisibility && activeVisibility.off();
        }
    };
}