const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat\\public\\img';

const prefixList = ['arac-filosu', 'ekip', 'asansor-kurulum', 'marangozluk', 'paketleme-detay'];

fs.readdirSync(targetDir).forEach(file => {
  const matchesPrefix = prefixList.some(prefix => {
    // Exact match for name e.g. ekip.jpg or ekip-640.webp
    return file === `${prefix}.jpg` || file.startsWith(`${prefix}-`);
  });

  if (matchesPrefix) {
    const fullPath = path.join(targetDir, file);
    console.log(`Deleting: ${file}`);
    fs.unlinkSync(fullPath);
  }
});

console.log('Legacy image cleanup complete!');
