const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const host1 = "https://www.w3cplus.com";
const host2 = "http://cdn.w3cplus.com";

const article = {
  // "/canvas/drawing-text.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/draw-dashed-and-dotted-lines.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/canvas-states.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/drawing-rectangular.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/draw-lines.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/canvas-drawing-function.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/canvas-line-style.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/drawing-arrow.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/custom-of-coordinate-transformation.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/drawing-regular-polygons.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/drawing-curve.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  "/canvas/introduction-to-prepare.html": {
    csses: [
      '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
      '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
      '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
      '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
      '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
    ],
  },
  // "/canvas/drawing-arc-and-circle.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/canvas-coordinate-system.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
  // "/canvas/transformation-coordinates.html": {
  //   csses: [
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all">',
  //     '<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all">',
  //     '<link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css">',
  //   ],
  // },
};

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
    // headless: false,
  });

  let taskCount = Object.keys(article).length;
  for (const path in article) {
    const page = await browser.newPage();
    const csses = article[path].csses.join("").replace("\n", "");
    const fileName = path.split("/")[path.split("/").length - 1];
    await page.setDefaultNavigationTimeout(0);
    await page.goto(`${host2}${path}`);
    const content = await page.content();
    const $ = cheerio.load(content);
    $("head").append(csses);
    fs.writeFileSync(
      "./output/htmls/" + fileName,
      ('<!DOCTYPE html><html lang="zh-cn">' + $(":root").html() + "</html>").replace(/"\/sites/g, '"'+ host1+'/sites').replace(/\"\/\//g,'"https://')
    );
    taskCount--;
    if (taskCount === 0) {
      console.log("任务已完成");
    }
  }
})();
