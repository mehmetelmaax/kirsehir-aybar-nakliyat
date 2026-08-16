const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'img');

async function run() {
  console.log('Starting faaliyet images rename & optimization inside project...');
  
  for (let i = 1; i <= 7; i++) {
    const oldName = `adana-nakliyat-faaliyet-${i}.jpeg`;
    const newName = `kirsehir-nakliyat-faaliyet-${i}.jpeg`;
    
    const oldPath = path.join(imgDir, oldName);
    const newPath = path.join(imgDir, newName);
    
    if (fs.existsSync(oldPath)) {
      console.log(`Processing: ${oldName} -> ${newName}`);
      
      // Load, resize to width 1000px, compress to 75% quality, and save
      await sharp(oldPath)
        .resize({ width: 1000, withoutEnlargement: true })
        .jpeg({ quality: 75 })
        .toFile(newPath);
      
      const newSize = fs.statSync(newPath).size;
      console.log(`Optimized file size: ${(newSize / 1024).toFixed(1)} KB`);
      
      // Delete old file
      fs.unlinkSync(oldPath);
      console.log(`Deleted old file: ${oldName}`);
    } else {
      console.log(`File not found: ${oldName}`);
    }
  }
  
  console.log('Faaliyet images processing completed.');
}

run().catch(err => {
  console.error('Error during image processing:', err);
});
