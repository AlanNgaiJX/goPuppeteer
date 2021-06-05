// 获取文章列表
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const targetURL = "https://www.w3cplus.com/blogs-lists";

const map = {};
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(targetURL);
  const content = await page.content();
  const $ = cheerio.load(content);
  const articleListDom = $(
    ".view-blogs-lists > .view-content >.item-list> ul > li > div >span> a"
  ).map((index, item) => {
    map[item.attribs.href] = {
      href: item.attribs.href,
      title: item.children[0].data,
    };
  });
  fs.writeFileSync(
    "./output/articleMap.json",
    JSON.stringify(map, null, 4)
  );
  console.log("任务完成");
})();
