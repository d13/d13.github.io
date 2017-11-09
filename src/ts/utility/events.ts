import { queryParentSelector } from "./ancestors";

export function on(element: Element | Document | Window, type: any, listener: (e: Event) => any, capture?: boolean, thisArg?: any) {
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

function copyEvent(e: Event): Event {
    return new Event(e.type, {
        bubbles: e.bubbles,
        cancelable: e.cancelable
    });
}

export function delegate(element: Element | Document, type: any, selector: string, listener: (e: Event) => any, capture?: boolean, thisArg?: any) {
    if (thisArg) {
        listener = listener.bind(thisArg);
    }

    let delegateListener = function(e: Event) {
        let targetEl = e.target as HTMLElement;

        const matches = (el: HTMLElement) => el.matches(selector);

        if (matches(targetEl)) {
            listener(e);
        } else {
            let parentTarget = queryParentSelector(targetEl, selector) as HTMLElement;
            if (parentTarget) {
                const newEvent = copyEvent(e);
                e.preventDefault();
                e.stopImmediatePropagation();
                parentTarget.dispatchEvent(newEvent);
            }
        }
    };

    return on(element, type, delegateListener, capture, thisArg);
}