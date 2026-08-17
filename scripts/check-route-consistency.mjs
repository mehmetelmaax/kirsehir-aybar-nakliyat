import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/lib/routes-data.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Split the file by route entries
const routeBlocks = content.split(/\n\s{2}'kirsehir-/);

let errorsCount = 0;

for (let i = 1; i < routeBlocks.length; i++) {
  const block = routeBlocks[i];
  
  // Extract distanceKm
  const distanceMatch = block.match(/distanceKm:\s*(\d+)/);
  if (!distanceMatch) {
    console.error(`Error: Could not find distanceKm in block ${i}`);
    errorsCount++;
    continue;
  }
  const distanceKm = parseInt(distanceMatch[1], 10);
  
  // Extract slug
  const slugMatch = block.match(/slug:\s*'([^']+)'/);
  const slug = slugMatch ? slugMatch[1] : `block-${i}`;
  
  console.log(`Checking route: ${slug} (Distance: ${distanceKm} km)`);
  
  // Search for any numbers preceding "kilometre" or "km" in the block
  const regex = /(\d+)\s*(?:kilometre|km)/gi;
  let match;
  let hasCheckedAny = false;
  
  while ((match = regex.exec(block)) !== null) {
    const num = parseInt(match[1], 10);
    hasCheckedAny = true;
    if (num !== distanceKm) {
      console.error(`  [ERROR] Mismatch in ${slug}: Found "${match[0]}" but distanceKm is ${distanceKm}`);
      errorsCount++;
    } else {
      console.log(`  [OK] Found "${match[0]}" matches distanceKm (${distanceKm})`);
    }
  }

  if (!hasCheckedAny) {
    console.warn(`  [WARN] No distance references (kilometre/km) found in text for ${slug}`);
  }
}

if (errorsCount > 0) {
  console.error(`\nConsistency check failed with ${errorsCount} mismatch(es).`);
  process.exit(1);
} else {
  console.log('\nAll route distances are consistent!');
  process.exit(0);
}
