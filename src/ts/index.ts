import '../styles/styles.scss';

import { scrollY } from './utility/animation';
import { delegate } from './utility/events';

let bodyScrollTop = 0;
function onScroll(e: Event) {
    const newScrollTop = document.documentElement.scrollTop;

    if (newScrollTop !== 0 && newScrollTop > bodyScrollTop) {
        document.body.classList.add('is-advancing');
    } else {
        document.body.classList.remove('is-advancing');
    }

    bodyScrollTop = newScrollTop;
}

let scrollTimer: number;
window.addEventListener('scroll', (e) => {
    if (scrollTimer) clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
        onScroll(e);
    }, 100);
}, false);

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

