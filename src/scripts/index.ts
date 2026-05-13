import { litToStyleSheet } from './system/lit-to-stylesheet';
import * as sharedStyles from './styles/shared.css';
import { watchHeroPosition } from './utils/hero-watcher';
// import './components/heros/hero-image';
// import './components/icons/icon-library';

const styles = litToStyleSheet(...Object.values(sharedStyles));
document.adoptedStyleSheets.push(...styles);

watchHeroPosition('hero-subgroup');

// defer loading web components after styles are loaded
setTimeout(() => {
  void import('./components/heros/hero-image');
  void import('./components/icons/icon-library');
});
