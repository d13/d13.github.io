import '../styles/styles.scss';

import { scrollY } from './utility/animation';
import { on, delegate, debounce } from './utility/events';

let bodyScrollTop = 0;
function onScroll(e: Event) {
    const newScrollTop = document.documentElement.scrollTop;

    console.log(e);

    if (newScrollTop !== 0 && newScrollTop > bodyScrollTop) {
        document.body.classList.add('is-advancing');
    } else {
        document.body.classList.remove('is-advancing');
    }

    bodyScrollTop = newScrollTop;
}

on(window, 'scroll', debounce(onScroll, 100), false);

delegate(document, 'click', 'a[data-inpage]', (e) => {
    //console.log(e);
    const linkEl = e.target as HTMLAnchorElement;
    console.log(linkEl);
    if (linkEl) {
        e.preventDefault();
        console.log(linkEl.hash);

        let scrollTop;
        if (linkEl.hash === '' || linkEl.hash === '#top' || linkEl.hash === '#') {
            scrollTop = 0;
        } else {
            const targetEl = document.querySelector(linkEl.hash) as HTMLElement;
            if (targetEl) {
                scrollTop = targetEl.offsetTop;
            }
        }

        if (scrollTop !== undefined) {
            scrollY(document.documentElement, scrollTop);
        }
    }
}, false);

