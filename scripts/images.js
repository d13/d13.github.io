import sharp from 'sharp';
import { globby } from 'globby';
import { existsSync } from 'fs';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';
import { dir } from 'console';

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
    const optimized = file.replace(dir, `${dir}-opt`).replace(/\.(png|jpg|jpeg)$/, `.${ext}`);
    const optimizedBuffer = await sharp(file).toFormat(ext, { lossless: true }).toBuffer();
    await createFileAndDirectories(optimized, optimizedBuffer);
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
