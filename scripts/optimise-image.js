const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT = path.join(__dirname, '../public/20260208_112650.png');
const OUT_DIR = path.join(__dirname, '../public');

async function main() {
  const meta = await sharp(INPUT).metadata();
  console.log('Original:', meta.width, 'x', meta.height, 'format:', meta.format);

  // Crop to subject area: 15%–85% wide, top 72% of height
  // Subject is near top-center (objectPosition: 54% 5%)
  const cropLeft = Math.round(meta.width * 0.15);
  const cropWidth = Math.round(meta.width * 0.70);
  const cropHeight = Math.round(meta.height * 0.72);

  const extract = { left: cropLeft, top: 0, width: cropWidth, height: cropHeight };

  // Desktop: 900px wide, quality 85 — premium sharpness for retina hero column
  await sharp(INPUT)
    .extract(extract)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 85, effort: 5 })
    .toFile(path.join(OUT_DIR, 'portrait-desktop.webp'));

  const d = fs.statSync(path.join(OUT_DIR, 'portrait-desktop.webp'));
  console.log('Desktop WebP:', Math.round(d.size / 1024), 'KB');

  // Tablet: 600px wide, quality 80
  await sharp(INPUT)
    .extract(extract)
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(path.join(OUT_DIR, 'portrait-tablet.webp'));

  const t = fs.statSync(path.join(OUT_DIR, 'portrait-tablet.webp'));
  console.log('Tablet WebP:', Math.round(t.size / 1024), 'KB');

  // Mobile: 480px wide, quality 76
  await sharp(INPUT)
    .extract(extract)
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(path.join(OUT_DIR, 'portrait-mobile.webp'));

  const m = fs.statSync(path.join(OUT_DIR, 'portrait-mobile.webp'));
  console.log('Mobile WebP:', Math.round(m.size / 1024), 'KB');

  console.log('Done.');
}

main().catch(e => { console.error(e); process.exit(1); });
