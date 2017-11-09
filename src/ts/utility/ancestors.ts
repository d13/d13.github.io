export function findParent(element: Element, lookupFn: Function): Element {
    let parentEl = element.parentElement;
    if (!parentEl) return undefined;
    if (lookupFn(parentEl)) return parentEl;

    return findParent(parentEl, lookupFn);
}

export function findParentAll(element: Element, lookupFn: Function): Element[] {
    let parentEl = element.parentElement;
    if (!parentEl) return [];

    let matches = [];
    while(parentEl) {
        if (lookupFn(parentEl)) {
            matches.push(parentEl);
        }
        parentEl = element.parentElement;
    }

    return matches;
}

export function queryParentSelector(element: Element, selector: string) {
    return findParent(element, (el: Element) => el.matches(selector));
}

export function queryParentSelectorAll(element: Element, selector: string) {
    return findParentAll(element, (el: Element)  => el.matches(selector));
}