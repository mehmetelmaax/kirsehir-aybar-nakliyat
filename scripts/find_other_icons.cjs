const fs = require('fs');
const path = require('path');

const scratchDir = path.join(__dirname, '..', '..');

const projects = fs.readdirSync(scratchDir).filter(name => {
  return fs.statSync(path.join(scratchDir, name)).isDirectory() && name !== 'kirsehir-aybar-nakliyat';
});

projects.forEach(proj => {
  const p1 = path.join(scratchDir, proj, 'src', 'app', 'icon.png');
  const p2 = path.join(scratchDir, proj, 'public', 'icon.png');
  const p3 = path.join(scratchDir, proj, 'public', 'img', 'logo.png');

  if (fs.existsSync(p1)) {
    console.log(`Found app icon in ${proj}: ${fs.statSync(p1).size} bytes`);
  }
  if (fs.existsSync(p2)) {
    console.log(`Found public icon in ${proj}: ${fs.statSync(p2).size} bytes`);
  }
  if (fs.existsSync(p3)) {
    console.log(`Found logo in ${proj}: ${fs.statSync(p3).size} bytes`);
  }
});
