const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'shell',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1550, deviceScaleFactor: 1 });
  const filePath = path.resolve(__dirname, '../post-teaser.html');
  await page.goto('file:///' + filePath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 2000));
  const el = await page.$('.post');
  await el.screenshot({ path: path.resolve(__dirname, '../post-teaser.png'), type: 'png' });
  await browser.close();
  console.log('Done!');
})();
