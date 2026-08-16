const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function inspect() {
  const dir = 'C:\\Users\\mehme\\.gemini\\antigravity\\brain\\3e340fdb-073f-48eb-a2ea-95384fd4f852\\.user_uploaded';
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      console.log(`File: ${file} | Format: ${metadata.format} | Size: ${metadata.width}x${metadata.height} | Bytes: ${fs.statSync(filePath).size}`);
    } catch (e) {
      console.log(`File: ${file} | Error: ${e.message}`);
    }
  }
}

inspect();
