const fs = require('fs');
const path = require('path');

function run() {
  const logFile = 'C:\\Users\\mehme\\.gemini\\antigravity\\brain\\3e340fdb-073f-48eb-a2ea-95384fd4f852\\.system_generated\\logs\\transcript.jsonl';
  if (!fs.existsSync(logFile)) {
    console.log('Log file not found');
    return;
  }
  
  const content = fs.readFileSync(logFile, 'utf8');
  const lines = content.split('\n');
  const mediaFiles = new Set();
  
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      const text = JSON.stringify(obj);
      const matches = text.match(/media_\d+\.[a-zA-Z]+/g);
      if (matches) {
        for (const m of matches) {
          mediaFiles.add(m);
        }
      }
    } catch (e) {
      // ignore
    }
  }
  
  console.log('All media files referenced in transcript:');
  console.log(Array.from(mediaFiles));
}

run();
