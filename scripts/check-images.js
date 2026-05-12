const sharp = require('sharp');
const path = require('path');

const files = [
  'portrait-desktop.webp',
  'portrait-tablet.webp',
  'portrait-mobile.webp',
];

async function main() {
  for (const f of files) {
    const p = path.join(__dirname, '../public', f);
    const meta = await sharp(p).metadata();
    const size = require('fs').statSync(p).size;
    console.log(f, meta.width + 'x' + meta.height, Math.round(size/1024) + 'KB', 'hasAlpha:', meta.hasAlpha);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
