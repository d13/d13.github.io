import esbuild from 'esbuild';
import Image from '@11ty/eleventy-img';
import path from 'path';
import { getFaviconIcons } from './utils/icons.js';

// Simplified favicon configuration
const faviconConfig = {
  source: 'src/media/branding/logo-square.png',
  outputDir: '_site/img/favicon',
  urlPath: '/img/favicon',

  icons: getFaviconIcons(),
};

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @returns {import('@11ty/eleventy').EleventyConfig}
 */
export default function (eleventyConfig) {
  const isProd = (process.env.NODE_ENV ?? 'development') === 'production';
  const isDev = !isProd;

  // Copy static assets
  eleventyConfig.addPassthroughCopy({ 'src/media': 'media' });
  eleventyConfig.addPassthroughCopy({ 'src/meta': 'meta' });
  eleventyConfig.addPassthroughCopy({ 'src/styles/**/*.css': 'styles' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon.ico': 'favicon.ico' });

  // Watch for changes
  eleventyConfig.addWatchTarget('src/**/*');

  // Process CSS
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {
      // Only process CSS files in the styles directory
      if (!inputPath.includes('/styles/')) {
        return;
      }

      return async () => {
        return inputContent;
      };
    },
  });

  // Process TypeScript with esbuild
  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/js/index.ts'],
      bundle: true,
      outfile: '_site/js/bundle.js',
      format: 'esm',
      minify: isProd,
      sourcemap: isDev,
      target: 'es2020',
    });
  });

  // Handle views directory
  eleventyConfig.addCollection('pages', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/views/**/*.njk');
  });

  // Generate favicons
  eleventyConfig.on('eleventy.before', async () => {
    console.log('Generating production favicons...');
    const startTime = Date.now();

    for (const icon of faviconConfig.icons) {
      await Image(faviconConfig.source, {
        widths: [icon.size],
        formats: [icon.format],
        outputDir: faviconConfig.outputDir,
        filenameFormat: () => icon.src,
      });
    }

    console.log(`Favicons generated in ${(Date.now() - startTime) / 1000}s`);
  });

  // Favicon shortcode to include the appropriate links in the head
  eleventyConfig.addShortcode('favicon', function () {
    const links = faviconConfig.icons.map(icon => {
      return `<link rel="${icon.rel}" type="${icon.type}" sizes="${icon.sizes}" href="${faviconConfig.urlPath}/${icon.src}" />`;
    });

    return links.join('\n');
  });

  // Image shortcode for optimized images
  eleventyConfig.addAsyncShortcode(
    'image',
    async function (src, alt, sizes = '100vw', widths = [300, 600, 900, 1200], formats = ['webp', 'jpeg']) {
      if (!src.startsWith('./')) {
        // For non-relative paths, prepend the src directory
        src = `./src/${src}`;
      }

      let metadata = await Image(src, {
        widths: widths,
        formats: formats,
        outputDir: './_site/img/',
        urlPath: '/img/',
        filenameFormat: function (id, src, width, format) {
          const extension = path.extname(src);
          const name = path.basename(src, extension);
          return `${name}-${width}w.${format}`;
        },
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
      };

      return Image.generateHTML(metadata, imageAttributes);
    },
  );

  // Base config
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    templateFormats: ['html', 'njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: '/',
  };
}
