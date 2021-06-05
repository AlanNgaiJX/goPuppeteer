// 获取每篇文字的 html 并 融入可用的 css
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const map = require("./articleMap");
const host1 = "https://www.w3cplus.com";
const host2 = "http://cdn.w3cplus.com";

const { start, end } = process.env;
let mapList = [];
for (const url in map) {
  mapList.push(map[url]);
}
mapList = mapList.slice(start, end);

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
  });
  const totalTask = end - start;
  let taskCount = 0;
  const needPay = [];
  // mapList.forEach(async (article) => {
  //   const page = await browser.newPage();
  //   const csses = article.csses.replace(/\\/g, "");
  //   console.log(`${host1}${article.href}`);
  //   const fileName =
  //     article.href.split("/")[article.href.split("/").length - 1];

  //   await page.setDefaultNavigationTimeout(0);
  //   await page.goto(`${host2}${article.href}`, {
  //     waitUntil: "domcontentloaded",
  //   });
  //   const content = await page.content();
  //   await page.close();
  //   const $ = cheerio.load(content);

  //   if ($(".paywall-reset").length) {
  //     //需付费
  //     needPay.push(article.href);
  //   } else {
  //     // 免费
  //     $("head").append(csses);
  //     fs.writeFileSync(
  //       "./output/htmls/" + fileName,
  //       ('<!DOCTYPE html><html lang="zh-cn">' + $(":root").html() + "</html>")
  //         .replace(/"\/sites/g, '"' + host1 + "/sites")
  //         .replace(/\"\/\//g, '"https://')
  //     );
  //   }

  //   taskCount++;
  //   console.log(Math.round((taskCount / totalTask) * 100) + "%");
  //   if (taskCount === totalTask) {
  //     console.log(`${start}-${end} 任务完成`);
  //     // 保存需要付费的文章链接
  //     fs.writeFileSync(
  //       `./output/needPay/${start}-${end} .json`,
  //       JSON.stringify(needPay)
  //     );
  //     browser.close();
  //   }
  // });
  for (const article of mapList) {
    const page = await browser.newPage();
    const csses = article.csses.replace(/\\/g, "");
    console.log(`${host1}${article.href}`);
    const fileName =
      article.href.split("/")[article.href.split("/").length - 1];

    await page.setDefaultNavigationTimeout(0);
    await page.goto(`${host2}${article.href}`, {
      waitUntil: "domcontentloaded",
    });
    const content = await page.content();
    await page.close();
    const $ = cheerio.load(content);

    if ($(".paywall-reset").length) {
      //需付费
      needPay.push(article.href);
    } else {
      // 免费
      $("head").append(csses);
      fs.writeFileSync(
        "./output/htmls/" + fileName,
        ('<!DOCTYPE html><html lang="zh-cn">' + $(":root").html() + "</html>")
          .replace(/"\/sites/g, '"' + host1 + "/sites")
          .replace(/\"\/\//g, '"https://')
      );
    }

    taskCount++;
    console.log(Math.round((taskCount / totalTask) * 100) + "%");
    if (taskCount === totalTask) {
      console.log(`${start}-${end} 任务完成`);
      // 保存需要付费的文章链接
      fs.writeFileSync(
        `./output/needPay/${start}-${end} .json`,
        JSON.stringify(needPay)
      );
      browser.close();
    }
  }
})();
