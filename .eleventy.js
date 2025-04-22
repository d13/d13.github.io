import esbuild from 'esbuild';
import tsc from 'esbuild-plugin-tsc';
import Image from '@11ty/eleventy-img';
import path from 'path';
import { getFaviconIcons } from './utils/icons.js';
import * as lightningcss from 'lightningcss';

const outputDir = 'docs';

// Simplified favicon configuration
const faviconConfig = {
  source: 'src/media/branding/logo-square.png',
  outputDir: `${outputDir}/img/favicon`,
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
  eleventyConfig.addPassthroughCopy({ 'src/favicon.ico': 'favicon.ico' });

  if (isDev) {
  // Watch for changes
  eleventyConfig.addWatchTarget('src/**/*');
  }

  // Process CSS with LightningCSS
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {
      // Only process CSS files in the styles directory
      if (!inputPath.includes('/styles/')) {
        return;
      }

      return async () => {
        try {
          const { code } = lightningcss.transform({
            code: Buffer.from(inputContent),
            minify: isProd,
            sourceMap: isDev,
            targets: {
              // Support modern browsers with CSS features like:
              // - CSS nesting
              // - color-mix()
              // - :where() selector
              // - @layer
              // - calc() with pow()
              browsers: ['last 2 years', 'not dead', '> 0.5%'],
            },
            drafts: {
              nesting: true,
              customMedia: true,
            },
          });
          return code.toString();
        } catch (error) {
          console.error('CSS Processing Error:', error);
          return inputContent; // Return original content on error
        }
      };
    },
  });

  // Process TypeScript with esbuild
  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/js/*.ts'],
      bundle: true,
      outdir: `${outputDir}/js`,
      splitting: true,
      chunkNames: 'chunks/[name]-[hash]',
      format: 'esm',
      minify: isProd,
      sourcemap: isDev,
      legalComments: 'external',
      plugins: [
        tsc({
          force: false,
        }),
      ],
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
    async function (src, alt, sizes = '100vw', widths = [300, 600, 900, 1200], formats = ['webp']) {
      if (!src.startsWith('./')) {
        // For non-relative paths, prepend the src directory
        src = `./src/${src}`;
      }

      let metadata = await Image(src, {
        widths: widths,
        formats: formats,
        outputDir: `${outputDir}/img/`,
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
      output: outputDir,
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    templateFormats: ['html', 'njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: '/',
    cleanOutput: true,
  };
}
