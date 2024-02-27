import sharp from 'sharp';
import { globby } from 'globby';
import { existsSync } from 'fs';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

const createFileAndDirectories = async (file, buffer) => {
  const dir = dirname(file);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
  return writeFile(file, buffer);
};

const imageOptimize = async (dir, ext) => {
  const files = await globby([`assets/${dir}/**/*.{png,jpg,jpeg}`]);
  const promises = files.map(async file => {
    let sharpFile = sharp(file);
    if (file.includes('/portfolio/')) {
      const metadata = await sharpFile.metadata();
      if (metadata.width > 672) {
        sharpFile = sharpFile.resize({
          width: 672,
          // height: Math.floor(672 * (metadata.height / metadata.width)),
          fit: 'contain',
        });
      }
    }
    const optimizedBuffer = await sharpFile.toFormat(ext, { lossless: true }).toBuffer();
    const optimizedFile = file.replace(dir, `${dir}-opt`).replace(/\.(png|jpg|jpeg)$/, `.${ext}`);
    await createFileAndDirectories(optimizedFile, optimizedBuffer);
  });
  await Promise.all(promises);
};

await Promise.all(
  [
    ['media', 'webp'],
    ['favicon', 'png'],
  ].map(([dir, ext]) => imageOptimize(dir, ext)),
);
console.log('Images optimized');
