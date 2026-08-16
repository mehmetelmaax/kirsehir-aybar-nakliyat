const fs = require('fs');
const path = require('path');

const images = ['arac-filosu', 'ekip', 'asansor-kurulum', 'marangozluk', 'paketleme-detay'];

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
      if (content.includes(img)) {
        refs[img].push(path.relative('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat', filePath));
      }
    });
  }
});

console.log('Image references in src folder:');
console.log(refs);
