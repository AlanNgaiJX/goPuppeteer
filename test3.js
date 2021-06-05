const cheerio = require('cheerio');
const str = `<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`;

const $ = cheerio.load(str);
// $('li').map((index, item)=>{
//   console.log($.html(item));
// })


console.log($('.paywall-reset').length);