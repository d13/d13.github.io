/* global document, window */
import { litToStyleSheet } from './system/lit-to-stylesheet';
import * as sharedStyles from './styles/shared.css';
import { onReady } from './system/events';
import './components/heros/hero-image';
import './components/icons/icon-library';

const styles = litToStyleSheet(...Object.values(sharedStyles));
document.adoptedStyleSheets.push(...styles);

let lastScrollTop = 0;
let heroFlipEl: HTMLElement | null = null;
function handleScrollPosition(isInit = false) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (!isInit) {
    const direction = scrollTop > lastScrollTop ? 'down' : 'up';
    if (Math.abs(scrollTop - lastScrollTop) > 5) {
      document.body.dataset.scrollDirection = direction;
    }
    lastScrollTop = scrollTop;
  }

  heroFlipEl ??= document.getElementById('hero-subgroup');
  const checkTop = heroFlipEl?.getBoundingClientRect().top ?? 0;

  const pastHero = checkTop < 1 ? 'true' : 'false';
  document.body.dataset.pastHero = pastHero;
}

onReady(document, () => {
  handleScrollPosition(true);
});

document.addEventListener(
  'scroll',
  () => {
    handleScrollPosition();
  },
  {
    passive: true,
  },
);
