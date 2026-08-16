const fs = require('fs');
const path = require('path');

const images = ['arac-filosu.jpg', 'ekip.jpg', 'asansor-kurulum.jpg', 'marangozluk.jpg', 'paketleme-detay.jpg'];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const refs = {};
images.forEach(img => refs[img] = []);

walkDir('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat\\src', (filePath) => {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx', '.css'].includes(ext)) {
    const content = fs.readFileSync(filePath, 'utf8');
    images.forEach(img => {
      // Check for the image filename without the extension, or with it
      const base = img.split('.')[0];
      if (content.includes(base)) {
        refs[img].push(path.relative('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat', filePath));
      }
    });
  }
});

console.log('Precise image base references in src:');
console.log(refs);
