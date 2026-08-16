const fs = require('fs');
const path = require('path');

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

const urls = [];

walkDir('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat', (filePath) => {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx', '.json', '.html'].includes(ext)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/https?:\/\/[^\s"'`]+/g);
    if (matches) {
      for (const url of matches) {
        // Clean URL from punctuation at the end
        const cleanUrl = url.replace(/[.,;:)\]'"]+$/, '');
        if (
          !cleanUrl.includes('kirsehiraybarnakliyat.com.tr') &&
          !cleanUrl.includes('schema.org') &&
          !cleanUrl.includes('wa.me') &&
          !cleanUrl.includes('google') &&
          !cleanUrl.includes('w3.org') &&
          !cleanUrl.includes('vercel') &&
          !cleanUrl.includes('nextjs') &&
          !cleanUrl.includes('reactjs') &&
          !cleanUrl.includes('tailwindcss') &&
          !cleanUrl.includes('lucide') &&
          !cleanUrl.includes('growbdijital.com')
        ) {
          urls.push({ file: path.basename(filePath), url: cleanUrl });
        }
      }
    }
  }
});

console.log('Other URLs in codebase:');
console.log(urls);
