import { sharedStyles } from './styles/shared.css';
import { litToStyleSheet } from './utils/stylesheets';

document.adoptedStyleSheets = [...litToStyleSheet(sharedStyles)];
