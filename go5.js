// 获取每篇文章的 css
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const map = require("./articleMap");
const host1 = "https://www.w3cplus.com";

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
  });
  const totalTask = Object.keys(map).length;
  let taskCount = 0;
  for (const url in map) {
    const page = await browser.newPage();
    console.log(`${host1}${url}`);

    await page.setDefaultNavigationTimeout(0);
    await page.goto(`${host1}${url}`, {
      waitUntil: "domcontentloaded",
    });
    const content = await page.content();
    await page.close();
    const $ = cheerio.load(content);
    const csses = [];

    const result = $("link")
      .filter((index, item) => {
        return item.attribs.href && item.attribs.href.includes(".css");
      })
      .map((index, item) => {
        csses.push($.html(item));
      });
    map[url].csses = csses.join("");
    taskCount++;
    console.log(Math.round((taskCount / totalTask) * 100) + "%");
    fs.writeFileSync("./output/articleMapCsses.json", JSON.stringify(map));
    if (taskCount === totalTask) {
      console.log("任务完成");
    }
  }
})();
