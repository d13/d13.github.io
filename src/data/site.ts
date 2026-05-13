/**
 * Site-wide metadata. Locked positioning copy lives in route components,
 * not here — this file is for chrome, contact, and identity only.
 */
export const site = {
  title: 'Keith Daulton | Engineering Leader',
  description: 'Engineering leader, design technologist, and front-end engineer. Independent practice at D13.',
  keywords:
    'engineering leader, design technology, design systems, front end, user experience, web components, GitLens, portfolio',
  url: 'https://d13.github.io',
  author: 'Keith Daulton',
  buildYear: new Date().getFullYear(),
  themeColor: '#ffffff',
  og: {
    defaultImage: '/media/social/og-image.png',
  },
} as const;

export type SiteConfig = typeof site;
