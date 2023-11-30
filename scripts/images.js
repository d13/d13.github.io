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

const imageOptimize = async () => {
  const files = await globby(['assets/media/**/*.{png,jpg,jpeg}']);
  const promises = files.map(async file => {
    const optimized = file.replace('media', 'media-opt').replace(/\.(png|jpg|jpeg)$/, '.webp');
    const optimizedBuffer = await sharp(file).toFormat('webp', { lossless: true }).toBuffer();
    await createFileAndDirectories(optimized, optimizedBuffer);
  });
  await Promise.all(promises);
};

await imageOptimize();
console.log('Images optimized');
