const fs = require('fs');
const path = require('path');

function run() {
  const brainDir = 'C:\\Users\\mehme\\.gemini\\antigravity\\brain';
  if (!fs.existsSync(brainDir)) {
    console.log('Brain directory not found');
    return;
  }
  
  const conversations = fs.readdirSync(brainDir);
  for (const conv of conversations) {
    const uploadDir = path.join(brainDir, conv, '.user_uploaded');
    if (fs.existsSync(uploadDir)) {
      const files = fs.readdirSync(uploadDir);
      if (files.length > 0) {
        console.log(`\nConversation ID: ${conv}`);
        for (const file of files) {
          const filePath = path.join(uploadDir, file);
          console.log(`  File: ${file} | Size: ${fs.statSync(filePath).size} bytes`);
        }
      }
    }
  }
}

run();
