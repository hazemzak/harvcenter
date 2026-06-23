const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DESIGNS_DIR = path.resolve(__dirname, '../../designs');
const OUTPUT_DIR = path.resolve(__dirname, '../../deploy/designs/downloads');

const designs = [
  { file: 'cover-photo.html', name: 'harv-cover-2027.png', width: 1640, height: 624, selector: '.cover' },
  { file: 'post-01-teacher-card.html', name: 'harv-teacher-card.png', width: 1080, height: 1350, selector: '.post' },
  { file: 'post-02-enrollment.html', name: 'harv-enrollment-2027.png', width: 1080, height: 1350, selector: '.post' },
  { file: 'post-03-qr-code.html', name: 'harv-qr-code.png', width: 1080, height: 1080, selector: '.post' },
];

(async () => {
  const fs = require('fs');
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'shell',
    args: ['--no-sandbox', '--disable-gpu'],
  });

  for (const d of designs) {
    console.log(`Rendering ${d.file} → ${d.name}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: d.width + 200, height: d.height + 200, deviceScaleFactor: 1 });

    const filePath = path.join(DESIGNS_DIR, d.file);
    await page.goto('file:///' + filePath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 2000));

    const outPath = path.join(OUTPUT_DIR, d.name);
    const el = await page.$(d.selector);

    if (el) {
      await el.screenshot({ path: outPath, type: 'png' });
      console.log(`  → ${outPath} (element screenshot)`);
    } else {
      console.log(`  ! Selector "${d.selector}" not found, using clip`);
      await page.screenshot({ path: outPath, type: 'png', clip: { x: 0, y: 0, width: d.width, height: d.height } });
    }

    await page.close();
  }

  await browser.close();
  console.log('Done!');
})();
