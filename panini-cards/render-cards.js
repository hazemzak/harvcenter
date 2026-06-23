const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const outDir = path.resolve(__dirname, 'rendered');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1600, deviceScaleFactor: 0.5 });

  // Render card fronts from download.html
  const downloadPath = 'file:///' + path.resolve(__dirname, 'download.html').replace(/\\/g, '/');
  await page.goto(downloadPath, { waitUntil: 'networkidle0', timeout: 30000 });

  const cardIds = await page.$$eval('.card', els => els.map(el => el.id));
  console.log('Found ' + cardIds.length + ' cards');

  for (const id of cardIds) {
    const card = await page.$('#' + id);
    if (!card) continue;
    const box = await card.boundingBox();
    if (!box) continue;
    const name = id.replace('card-', '');
    await page.screenshot({
      path: path.join(outDir, name + '.png'),
      type: 'png',
      clip: { x: box.x, y: box.y, width: box.width, height: box.height }
    });
    console.log('  Rendered: ' + name + '.png');
  }

  // Render card back
  const backPath = 'file:///' + path.resolve(__dirname, 'card-back.html').replace(/\\/g, '/');
  await page.goto(backPath, { waitUntil: 'networkidle0', timeout: 30000 });
  const backEl = await page.$('.card-back');
  if (backEl) {
    const box = await backEl.boundingBox();
    await page.screenshot({
      path: path.join(outDir, 'card-back.png'),
      type: 'png',
      clip: { x: box.x, y: box.y, width: box.width, height: box.height }
    });
    console.log('  Rendered: card-back.png');
  }

  await browser.close();
  console.log('Done! All cards in: ' + outDir);
})();
