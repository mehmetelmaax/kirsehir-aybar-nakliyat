const fs = require('fs');
const path = require('path');

const targetDomain = 'https://kirsehiraybarnakliyat.com.tr';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}

const mismatches = [];

walkDir('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat', (filePath) => {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(ext)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Look for domains containing "aybar" that don't match kirsehiraybarnakliyat.com.tr
    const matches = content.match(/https?:\/\/[^\s"'`]+/g);
    if (matches) {
      for (const url of matches) {
        if (url.includes('aybar') && !url.includes('kirsehiraybarnakliyat.com.tr') && !url.includes('growb')) {
          mismatches.push({ file: filePath, url });
        }
      }
    }
  }
});

console.log('Mismatched domains containing "aybar":');
console.log(mismatches);
