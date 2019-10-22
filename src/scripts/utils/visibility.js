import { on, once } from './events';
import { debounceFrame } from './delays';

/* global Promise */
export function observeVisibility(items, doOnce) {
  if (!items || !items.length) return { off: () => { } };

  const observer = new IntersectionObserver((entries) => {
    //console.log('IntersectionObserver 2', entries);
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //console.log('is Intersecting', entry);
        entry.target.classList.add('is-in-view');
        if (doOnce) {
          observer.unobserve(entry.target);
        }
      } else {
        //console.log('not Intersecting', entry);
        entry.target.classList.remove('is-in-view');
      }
    });
  }, { threshold: 0.5 });

  if (items && items.length) {
    for (let i = 0; i < items.length; i++) {
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

const isInView = el => el.classList.contains('is-in-view');

function detectVisibility(items, doOnce) {
  return Promise.all(items.map(el => {
    return new Promise((resolve) => {
      if (doOnce && isInView(el)) {
        //console.log('This probably should not happen');
        resolve();
        return;
      }

      if (el.classList.contains('is-animating')) {
        resolve();
        return;
      }

      if (!elementIsVisible(el)) {
        el.classList.remove('is-in-view');
        resolve();
      } else if (!isInView(el)) {
        once(el, 'animationend', () => {
          el.classList.remove('is-animating');
          resolve();
        });
        el.classList.add('is-animating', 'is-in-view');
      } else {
        resolve();
      }
    });
  }));
}

const listenerQueue = {};
function detectAnimationVisibility() {
  //console.log('detectAnimationVisibility');

  Object.keys(listenerQueue).forEach(key => {
    const _ = listenerQueue[key];

    const p = detectVisibility(_.items, _.once)

    if (_.once) {
      p.then(() => {
        _.items = _.items.filter(el => !isInView(el));

        if (!_.items.length && listenerQueue[key]) {
          //console.log(key, 'has none left');
          delete listenerQueue[key];
        }
      });
    }
  });
}

const debouncedDetectAnimationVisibility = debounceFrame(() => {
  detectAnimationVisibility();
});

let activeVisibility;
function listenOnChanges() {
  if (!activeVisibility) {
    const events = [
      on(window, 'resize', () => {
        //console.log('resize');
        vpW = window.innerWidth;
        vpH = window.innerHeight;
        debouncedDetectAnimationVisibility();
      }),
      on(window, 'scroll', () => {
        //console.log('scroll');
        debouncedDetectAnimationVisibility();
      })
    ];

    debouncedDetectAnimationVisibility();

    activeVisibility = {
      off: () => {
        events.forEach(_ => _.off());
      }
    };
  }

  return activeVisibility;
}

export function monitorVisibility(selector, doOnce) {
  if (!listenerQueue.hasOwnProperty(selector)) {
    const els = Array.prototype.slice.call(document.querySelectorAll(selector));
    if (els && els.length) {
      listenerQueue[selector] = {
        items: els,
        once: doOnce || false
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
