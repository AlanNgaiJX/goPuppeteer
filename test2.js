var cheerio = require('cheerio');

const $ = cheerio.load('<html><head></head><body><ul id="fruits"><li>1</li><li>2</li></ul><ul id="others"><li>1</li><li>2</li></ul></body></html>');

console.log(cheerio.load('<div></div>')("div").html($("#fruits")).html());