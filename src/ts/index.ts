import '../styles/styles.scss';

import { scrollY } from './utility/animation';
import { on, delegate, debounce } from './utility/events';

//let bodyScrollTop = 0;
function onScroll(e: Event) {
    // const newScrollTop = document.documentElement.scrollTop;
    //
    // //console.log(e);
    //
    // if (newScrollTop !== 0 && newScrollTop > bodyScrollTop) {
    //     document.body.classList.add('is-advancing');
    // } else {
    //     document.body.classList.remove('is-advancing');
    // }
    //
    // bodyScrollTop = newScrollTop;
}

function scrollTo(hash: string) {
    let scrollTop;
    if (hash === '' || hash === '#top' || hash === '#') {
        scrollTop = 0;
    } else {
        const targetEl = document.querySelector(hash) as HTMLElement;
        if (targetEl) {
            scrollTop = targetEl.offsetTop;
        }
    }

    if (scrollTop === undefined) {
        return Promise.reject(`Missing scrollTop for ${hash}.`);
    }

    return scrollY(document.documentElement, scrollTop);
}

on(window, 'scroll', debounce(onScroll, 100), false);

// FIXME: this would simpler as a hashchange event - [data-inpage]
delegate(document, 'click', 'a[href*="#"]', (e) => {
    //console.log(e);
    const linkEl = e.target as HTMLAnchorElement;
    console.log(linkEl);
    if (linkEl) {
        e.preventDefault();
        console.log(linkEl.hash);
        scrollTo(linkEl.hash).then(() => {
            document.location.hash = linkEl.hash;
        }).catch(e => {});
    }
}, false);

