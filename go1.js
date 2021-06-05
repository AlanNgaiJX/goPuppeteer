const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: {width: 1920, height: 1080},
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("http://www.baidu.com");
  await page.screenshot({
    path: "C:\\Users\\alanngai\\Desktop\\alan\\goPuppeteer\\output\\screenshot.png",
  });
  // await browser.close();
})();
