const fs = require('fs');
const path = require('path');

const imgPatterns = ['/img/arac-filosu', '/img/ekip', '/img/asansor-kurulum', '/img/marangozluk', '/img/paketleme-detay'];

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
imgPatterns.forEach(pattern => refs[pattern] = []);

walkDir('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat\\src', (filePath) => {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx', '.css'].includes(ext)) {
    const content = fs.readFileSync(filePath, 'utf8');
    imgPatterns.forEach(pattern => {
      if (content.includes(pattern)) {
        refs[pattern].push(path.relative('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat', filePath));
      }
    });
  }
});

console.log('Img path references:');
console.log(refs);
