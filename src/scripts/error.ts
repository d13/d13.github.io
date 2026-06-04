import { litToStyleSheet } from './system/lit-to-stylesheet';
import * as sharedStyles from './styles/shared.css';

const styles = litToStyleSheet(...Object.values(sharedStyles));
document.adoptedStyleSheets.push(...styles);

// Defer custom-element registration so shared styles are adopted first.
setTimeout(() => {
  void import('./components/heros/error-image');
});
