import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../src/shared/api/api.ts');

let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('@ts-nocheck')) {
    content = content.replace('/* eslint-disable */', '/* eslint-disable */\n// @ts-nocheck');
    fs.writeFileSync(filePath, content);
    console.log('✅ Added @ts-nocheck to api.ts');
} else {
    console.log('ℹ️  @ts-nocheck already exists in api.ts');
}
