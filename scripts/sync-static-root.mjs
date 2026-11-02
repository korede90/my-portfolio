import fs from 'fs';
import path from 'path';

// Copy built dist assets to root so GitHub Pages (configured for branch: main / root)
// and Vercel both serve the compiled production bundle seamlessly.
const root = process.cwd();
const distDir = path.join(root, 'dist');

if (fs.existsSync(distDir)) {
  fs.cpSync(path.join(distDir, 'index.html'), path.join(root, 'index.html'), { force: true });
  if (fs.existsSync(path.join(distDir, 'assets'))) {
    fs.rmSync(path.join(root, 'assets'), { recursive: true, force: true });
    fs.cpSync(path.join(distDir, 'assets'), path.join(root, 'assets'), { recursive: true, force: true });
  }
  if (fs.existsSync(path.join(distDir, 'images'))) {
    fs.rmSync(path.join(root, 'images'), { recursive: true, force: true });
    fs.cpSync(path.join(distDir, 'images'), path.join(root, 'images'), { recursive: true, force: true });
  }
  if (fs.existsSync(path.join(distDir, 'favicon.svg'))) {
    fs.cpSync(path.join(distDir, 'favicon.svg'), path.join(root, 'favicon.svg'), { force: true });
  }
  fs.writeFileSync(path.join(root, '.nojekyll'), '');
}
