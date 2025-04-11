import { getFaviconIcons } from '../../utils/icons.js';

export default function () {
  const icons = getFaviconIcons(true);

  return {
    // Site metadata
    title: 'Keith Daulton | Design Technologist, User Experience Engineer, Technical Leader',
    description: 'Principal front-end web developer and designer, Keith Daulton.',
    keywords:
      'front-end, design technology, design systems, front end, ui, ux, user experience, user interface, javascript, portfolio, responsive, web, developer, designer',
    url: 'https://d13.github.io',
    author: 'Keith Daulton',
    buildYear: new Date().getFullYear(),

    // Open Graph defaults
    og: {
      defaultImage: 'media/social/og-image.png',
    },

    // Web manifest data
    manifest: {
      name: 'Keith Daulton | Design Technologist, User Experience Engineer, Technical Leader',
      shortName: 'Keith Daulton',
      themeColor: '#ffffff',
      backgroundColor: '#ffffff',
      display: 'standalone',
      startUrl: './index.html',
      icons: icons,
    },
  };
}
