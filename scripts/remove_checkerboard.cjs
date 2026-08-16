const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeBackground(inputPath, outputPath) {
  console.log(`Processing: ${inputPath} -> ${outputPath}`);
  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    return;
  }
  
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  
  const pixelCount = info.width * info.height;
  const outputBuffer = Buffer.alloc(pixelCount * 4);
  
  for (let i = 0; i < pixelCount; i++) {
    const srcIndex = i * info.channels;
    const destIndex = i * 4;
    
    const r = data[srcIndex];
    const g = data[srcIndex+1];
    const b = data[srcIndex+2];
    const a = info.channels === 4 ? data[srcIndex+3] : 255;
    
    // Checkerboard color detection:
    // Gray is defined as R, G, B values being close to each other.
    // White: R, G, B > 235
    // Gray Grid: R, G, B values within 12 of each other and between 165 and 235
    const isWhite = r > 235 && g > 235 && b > 235;
    const isGrayGrid = Math.abs(r - g) < 12 && Math.abs(g - b) < 12 && Math.abs(r - b) < 12 && r > 165 && r < 235;
    
    if (isWhite || isGrayGrid) {
      outputBuffer[destIndex] = 255;
      outputBuffer[destIndex+1] = 255;
      outputBuffer[destIndex+2] = 255;
      outputBuffer[destIndex+3] = 0; // Make transparent
    } else {
      outputBuffer[destIndex] = r;
      outputBuffer[destIndex+1] = g;
      outputBuffer[destIndex+2] = b;
      outputBuffer[destIndex+3] = a;
    }
  }
  
  await sharp(outputBuffer, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);
  
  console.log(`Success: Background removed and saved as transparent PNG at ${outputPath}`);
}

async function run() {
  const uploadDir = 'C:\\Users\\mehme\\.gemini\\antigravity\\brain\\3e340fdb-073f-48eb-a2ea-95384fd4f852\\.user_uploaded';
  const targetDir = 'C:\\Users\\mehme\\.gemini\\antigravity\\scratch\\kirsehir-aybar-nakliyat\\public\\img';
  
  // Horizontal logo: media_1786789550924.png
  await removeBackground(
    path.join(uploadDir, 'media_1786789550924.png'),
    path.join(targetDir, 'logo.png')
  );
  
  // Square logo: media_1786789550975.jpg
  await removeBackground(
    path.join(uploadDir, 'media_1786789550975.jpg'),
    path.join(targetDir, 'icon.png')
  );
}

run().catch(console.error);
