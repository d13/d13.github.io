import { litToStyleSheet } from './system/lit-to-stylesheet';
import * as sharedStyles from './styles/shared.css';
import { watchHeroPosition } from './utils/hero-watcher';
// import './components/heros/error-image';
// import './components/icons/icon-library';

const styles = litToStyleSheet(...Object.values(sharedStyles));
document.adoptedStyleSheets.push(...styles);

watchHeroPosition('hero-subgroup');

setTimeout(() => {
  void import('./components/heros/error-image');
  void import('./components/icons/icon-library');
});
