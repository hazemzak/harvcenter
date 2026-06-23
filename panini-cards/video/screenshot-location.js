const puppeteer = require('puppeteer-core');
const path = require('path');
const designs = [
  { file: 'cover-photo.html', name: 'harv-cover-2027.png', sel: '.cover' },
  { file: 'post-02-enrollment.html', name: 'harv-enrollment-2027.png', sel: '.post' },
];
(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: 'shell', args: ['--no-sandbox'] });
  for (const d of designs) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1800, height: 1600, deviceScaleFactor: 1 });
    const fp = path.resolve(__dirname, '../../designs', d.file);
    await page.goto('file:///' + fp.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 2000));
    const el = await page.$(d.sel);
    await el.screenshot({ path: path.resolve(__dirname, '../../deploy/designs/downloads', d.name), type: 'png' });
    console.log(d.name + ' done');
    await page.close();
  }
  await browser.close();
})();
