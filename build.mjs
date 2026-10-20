import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const sourcePath = new URL('./doc/uzbekistan_book_manuscript_v2.0.md', import.meta.url);
const outputPath = new URL('./content.generated.js', import.meta.url);
const manuscript = readFileSync(sourcePath, 'utf8');
const hash = createHash('sha256').update(manuscript, 'utf8').digest('hex');
writeFileSync(outputPath, `/* Generated from doc/uzbekistan_book_manuscript_v2.0.md. Do not edit by hand. SHA-256: ${hash} */\nwindow.TRAVEL_MANUSCRIPT = ${JSON.stringify(manuscript)};\n`, 'utf8');
process.stdout.write(`Generated content.generated.js from the unchanged manuscript (${hash}).\n`);
