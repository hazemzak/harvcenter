const puppeteer = require('puppeteer');
const path = require('path');

const file = process.argv[2] || 'free-german-course.html';
const outName = file.replace('.html', '.png');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1600, deviceScaleFactor: 1 });

  const filePath = 'file:///' + path.resolve(__dirname, file).replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });

  const post = await page.$('.post');
  const box = await post.boundingBox();
  await page.screenshot({
    path: path.resolve(__dirname, outName),
    type: 'png',
    clip: { x: box.x, y: box.y, width: box.width, height: box.height }
  });
  console.log('Rendered: ' + outName + ' (' + box.width + 'x' + box.height + ')');

  await browser.close();
})();
