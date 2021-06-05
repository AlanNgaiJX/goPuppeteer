const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const host1 = "https://www.w3cplus.com";
const host2 = "http://cdn.w3cplus.com";

const articleList = [
  "/canvas/introduction-to-prepare.html",
  "/canvas/canvas-coordinate-system.html",
  "/canvas/canvas-coordinate-system.html",
  "/canvas/draw-lines.html",
  "/canvas/draw-dashed-and-dotted-lines.html",
  "/canvas/canvas-line-style.html",
  "/canvas/canvas-states.html",
  "/canvas/drawing-rectangular.html",
  "/canvas/drawing-arc-and-circle.html",
  "/canvas/drawing-arrow.html",
  "/canvas/drawing-curve.html",
  "/canvas/drawing-regular-polygons.html",
  "/canvas/transformation-coordinates.html",
  "/canvas/custom-of-coordinate-transformation.html",
  "/canvas/canvas-drawing-function.html",
  "/canvas/drawing-text.html",
];

const map = {};

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
    headless: false,
  });
  let task = articleList.length;
  articleList.forEach(async (articleItem) => {
    const page = await browser.newPage();
    await page.goto(`${host1}${articleItem}`);
    const content = await page.content();
    const $ = cheerio.load(content);
    const csses = [];
    const result = $("link")
      .filter((index, item) => {
        return item.attribs.href && item.attribs.href.includes(".css");
      })
      .map((index, item) => {
        csses.push($.html(item))
      });
      map[articleItem] = {};
      map[articleItem].csses = csses;
      task--;
      if (task === 0) {
        console.log("任务完成");
        fs.writeFileSync('./output/article.txt',JSON.stringify(map));
      }
  });
})();
