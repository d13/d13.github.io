import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default class {
  async data() {
    return {
      permalink: '/styles/index.css',
      eleventyExcludeFromCollections: true,
    };
  }

  async render() {
    // Read the CSS file directly
    const cssPath = path.join(__dirname, '../../styles/index.css');
    return fs.readFileSync(cssPath, 'utf8');
  }
}
