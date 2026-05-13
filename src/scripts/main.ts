import { litToStyleSheet } from './system/lit-to-stylesheet';
import * as sharedStyles from './styles/shared.css';
import { watchHeroPosition } from './utils/hero-watcher';

const styles = litToStyleSheet(...Object.values(sharedStyles));
document.adoptedStyleSheets.push(...styles);

watchHeroPosition('hero');

// Defer custom-element registration so shared styles are adopted first.
setTimeout(() => {
  void import('./components/heros/hero-image');
  void import('./components/icons/icon-library');
});
