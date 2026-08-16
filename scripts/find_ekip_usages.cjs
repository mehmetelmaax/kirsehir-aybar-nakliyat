const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat\\src\\app\\hakkimizda\\page.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('ekip')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
