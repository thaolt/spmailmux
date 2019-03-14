const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/app/.apt/usr/bin/google-chrome'
  });
  const page = await browser.newPage();
  await page.goto('https://thaole.me');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

