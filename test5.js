// console.log('src="//xxx" href="//xxx"'.replace(/\"\/\//g,'"https://')
// );

console.log(`<!DOCTYPE html><html lang="zh-cn"><head profile="http://www.w3.org/1999/xhtml/vocab">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="shortcut icon" href="https://www.w3cplus.com/sites/all/themes/w3cplusV2/favicon.ico" type="image/vnd.microsoft.icon">
<meta content="Canvas学习：绘制文本" about="/canvas/drawing-text.html" property="dc:title">
<meta name="description" content="前面的课程我们学习的都是如何在Canvas中绘制图形，但很多时候，除了绘制图形之外还有很多情景要同文本打交道。不过在Canvas中到目前为止只提供了一些必备的基本功能，例如文本的描边与填充，向Canvas之中放置文本，以及用像素为单位来计算任意字符串的宽度等。接下来的内容，我们就来了解在Canvas中怎么绘制文本以及一些基本的操作。">
<meta name="keywords" content="前端,Canvas, Canvas学习,教程">
<meta name="generator" content="Drupal 7 (http://drupal.org)">
<link rel="canonical" href="https://www.w3cplus.com/canvas/drawing-text.html">
<link rel="shortlink" href="https://www.w3cplus.com/node/2125">
<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta itemprop="name" content="W3cplus">
<meta itemprop="image" content="//www.w3cplus.com/w3cplus-logo.jpg">
<meta name="baidu-site-verification" content="ftyq813qEZgpw9nb">
<meta name="applicable-device" content="pc,mobile">
<title>Canvas学习：绘制文本_Canvas, Canvas学习 教程_w3cplus</title>
<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_pbm0lsQQJ7A7WCCIMgxLho6mI_kBNgznNUWmTWcnfoE.css" media="all">
<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all">
<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_rJUBdT2SlFgltMk5Co8MLf3X-CyFSvQlj5MDgaVsYZY.css" media="all">
<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_FjWdtfD_8xCqMqEyh4qy1A62uDPO85_OPMib7A_q1TM.css" media="all">
<script src="//hm.baidu.com/hm.js?177319b798978621f83845b12c86fa29" type="text/javascript"></script><script src="//hm.baidu.com/hm.js?177319b798978621f83845b12c86fa29"></script><script type="text/javascript" src="https://www.w3cplus.com/sites/all/modules/contrib/respondjs/lib/respond.min.js?ozezct"></script>
<script type="text/javascript" src="https://www.w3cplus.com/sites/default/files/js/js_oCVMDTeSNt-_QxknevWyf6yO5OzmME3AhRz3ggZgNtg.js"></script>
<script type="text/javascript" src="https://www.w3cplus.com/sites/default/files/js/js_DRdrb2tCPgWulBWFR9WDynUyFjHHZr2LpGZqMSx5sYo.js"></script>
<script type="text/javascript" src="https://www.w3cplus.com/sites/default/files/js/js_aFpEO8xgepFmYR6MVDl2VWX8tfLcSmPIQGq5kCnaxRk.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"w3cplusV2","theme_token":"XStodYv2_QyuVmssaq5drhSd0x1ZS5D4jkitE70y_9I","js":{"0":1,"modules\/statistics\/statistics.js":1,"sites\/all\/modules\/contrib\/respondjs\/lib\/respond.min.js":1,"sites\/all\/modules\/contrib\/jquery_update\/replace\/jquery\/1.10\/jquery.min.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"public:\/\/languages\/zh-hans_Oq970VelHN9fa2F_FV03LgDp5jSIv3m9KbI0_jJ9cjM.js":1,"sites\/all\/modules\/contrib\/custom_search\/js\/custom_search.js":1,"sites\/all\/modules\/contrib\/baidu_analytics\/baidu_analytics.js":1,"sites\/all\/modules\/contrib\/disqus\/disqus.js":1,"sites\/all\/themes\/w3cplusV2\/js\/highlight.pack.js":1,"sites\/all\/themes\/w3cplusV2\/js\/main.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/contrib\/views\/css\/views.css":1,"sites\/all\/modules\/contrib\/ckeditor\/ckeditor.css":1,"sites\/all\/modules\/contrib\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/contrib\/custom_search\/custom_search.css":1,"sites\/all\/themes\/w3cplusV2\/css\/style.css":1}},"custom_search":{"form_target":"_self","solr":0},"baidu_analytics":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls|xml|z|zip"},"disqus":{"domain":"w3cplus","url":"https:\/\/www.w3cplus.com\/canvas\/drawing-text.html","title":"Canvas\u5b66\u4e60\uff1a\u7ed8\u5236\u6587\u672c","identifier":"node\/2125","developer":1,"language":"zh-hans"},"statistics":{"data":{"nid":"2125"},"url":"\/modules\/statistics\/statistics.php"}});
//--><!]]>
</script>
<!-- w3cplus.com Baidu tongji analytics -->
<script>
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?177319b798978621f83845b12c86fa29";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();
</script>
<link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css" media="all"><link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_hYCLW089C9S9sP3ZYkuG6R-Q5ZHbEhblZBFjwZ_bE_I.css" media="all"><link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_W_jVXC7gZD8ENo3AHIwFL3Mih90k_Go_X3-i_hfyj2c.css" media="all"><link type="text/css" rel="stylesheet" href="https://www.w3cplus.com/sites/default/files/css/css_tBUPsCAp-7X-hfttAlbSjVX4GwxPg2CTjuVZ08g8Ufc.css" media="all"><link rel="stylesheet" type="text/css" href="https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css"></head>
<body class="html not-front not-logged-in one-sidebar sidebar-second page-node page-node- page-node-2125 node-type-blog featured">
<div id="skip-link">
  <a href="#main-content" class="element-invisible element-focusable">跳转到主要内容</a>
</div>
  <div id="header" role="header">
<div class="container">
  <h1 id="logo">
    <a href="/" title="记述前端那些事,引领web前沿,打造精品css3教程" id="site_name">w3cplus</a>
  </h1>
  <div class="toggle-topbar menu-icon" id="pull">
    <a href="#"><span>Menu</span></a>
  </div>
  <div class="toogle-topbar-content" id="pull-menu">
            <ul class="menu clearfix"><li class="first leaf"><a href="/CSS3" title="">CSS3</a></li>
<li class="leaf"><a href="/JavaScript" title="JavaScript">JavaScript</a></li>
<li class="leaf"><a href="/blog/react" title="React">React</a></li>
<li class="leaf"><a href="/blog/vue" title="Vue">Vue</a></li>
<li class="leaf"><a href="/mobile" title="">Mobile</a></li>
<li class="leaf"><a href="/blog/tags/302.html" title="Sass教程">Sass</a></li>
<li class="leaf"><a href="/blog/translations" title="译文">译文</a></li>
<li class="leaf"><a href="/svg-tutorial" title="SVG">SVG</a></li>
<li class="leaf"><a href="http://fe.apelearn.com/?utm_source=w3cplus&amp;utm_medium=banner&amp;utm_campaign=w3cplus" title="视频教程">视频教程</a></li>
<li class="leaf"><a href="/tags" title="标签云">标签云</a></li>
<li class="last leaf"><a href="/rss.xml" title="RSS">RSS</a></li>
</ul>        <!-- /#main-menu -->
        </div>
</div>
</div>

<div id="branding" role="branding">
  <div class="container">
      <div class="region region-branding">
  <div id="block-block-44" class="block block-block">

  
<div class="content">
  <div class="ct-ad-article-wrapper" id="content-ad1" style="margin:0;padding:0;">
<div class="ct-ad-article">
  <div class="bsap">
   <a href="http://www.yidengxuetang.com/recruit/" target="_blank">
    <img src="/sites/default/files/blogs/2017/1712/zhijia.png">
   </a>
  </div>
</div>
</div>  </div>
</div>
</div>
  </div>
</div> 

<div id="page" role="page">
<div class="container">
  
  <div class="col-main">
    <div class="main-wrap">
      
                  <div class="region region-featured">
  <div id="block-block-50" class="block block-block">

  
<div class="content">
  <div class="ct-ad-article-wrapper" id="content-ad1">
<div class="ct-ad-article">
  <div class="bsap">
   <a href="http://web.tanzhouedu.com/index/keCourse.html?from=w3cplus" target="_blank">
    <img src="/sites/default/files/blogs/2017/1707/dwad960-90.png">
   </a>
  </div>
</div>
</div>  </div>
</div>
</div>
              
      <div class="page-inner">
                    <div id="breadcrumb" role="breadcrumb">
            <h2 class="element-invisible">你在这里</h2><div class="breadcrumb"><a href="/">首页</a> » <a href="/blog">博客</a> » <a href="/blogs/airen">Airen的博客</a></div>            </div>
        
        
        <a id="main-content"></a>
                              <h1 class="title" id="page-title">
            Canvas学习：绘制文本            </h1>
        
                  
                              <div class="region region-content">
  <div id="block-system-main" class="block block-system">

  
<div class="content">
  <div id="node-2125" class="node node-blog node-promoted node-full clearfix" about="/canvas/drawing-text.html" typeof="sioc:Post sioct:BlogPost">

<div class="node-header">
            <div class="submitted">
        作者：<span>大漠</span>          日期：<span>2017-04-21</span>          点击：<span>1213</span>        </div>
          <div class="tags">
      <div class="field field-name-field-blog-tag field-type-taxonomy-term-reference field-label-hidden"><div class="field-items"><div class="field-item even"><a href="/blog/tags/604.html" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Canvas</a></div><div class="field-item odd"><a href="/blog/tags/616.html" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Canvas学习</a></div></div></div>      </div>
</div>

    <div id="node-top" class="node-top">
    <div id="block-block-38" class="block block-block">

  
<div class="content">
  <div class="ct-ad-article-wrapper" id="content-ad">
<div class="ct-ad-article">
  <div class="bsap">
   <a href="http://www.miaov.com/index.php/example/exampleList" target="_blank">
    <img src="/sites/default/files/blogs/2017/1711/WechatIMG83.jpeg" width="960" height="90">
   </a>
  </div>
</div>
</div>
<div>
<blockquote>
<p>编辑推荐：使用 <a href="https://coding.net" target="_blank">Coding.net</a>  搭建静态博客，自定义域名，全站 HTTPS 加密，自动实时部署， <a href="https://coding.net/pages" target="_blank">立即托管您的网站</a>！</p>
</blockquote>
</div>
</div>
</div>
  </div>

<div class="body-content clearfix">
  <div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><p>前面的课程我们学习的都是如何在Canvas中绘制图形，但很多时候，除了绘制图形之外还有很多情景要同文本打交道。不过在Canvas中到目前为止只提供了一些必备的基本功能，例如文本的描边与填充，向Canvas之中放置文本，以及用像素为单位来计算任意字符串的宽度等。接下来的内容，我们就来了解在Canvas中怎么绘制文本以及一些基本的操作。</p>

<p>Canvas的绘图环境对象提供了两种方法来渲染文本：</p>

<ul>
<li><code>fillText(text, x, y, [maxWidth])</code>：绘制填充文本</li>
<li><code>strokeText(text, x, y, [maxWidth])</code>：绘制描边文本</li>
</ul>

<p>在Canvas中同样提供了类似CSS的一些<code>font</code>属性，用来修饰在Canvas中绘制的文本，比如:</p>

<ul>
<li><code>font = value</code>：用来修饰绘制文本的样式，类似于CSS中的<code>font</code></li>
<li><code>textAlign = value</code>：文本对齐设置</li>
<li><code>textBaseline = value</code>： 文本基线对齐设置</li>
<li><code>direction = value</code>： 文本方向的设置</li>
</ul>

<p>除此之外，很多时候我们还需要对已绘制文本宽度的度量，在Canvas中提供了一个<code>measureText(text)</code>方法，该方法所返回的对象中，包含一个名为<code>width</code>的属性，它的值代表你传递给该方法的文本所占据的宽度。</p>

<p>在接下来的内容，我们将详细的针对上述内容做相关的阐述。</p>

<h2>文本的填充和描边</h2>

<p>在Canvas中的<code>CanvasRenderingContext2D</code>对象提供了两个方法来绘制文本：<code>fillText()</code>和<code>strokeText()</code>方法。先来看<code>fillText()</code>方法。</p>

<p><code>fillText()</code>方法用来绘制填充文本，其语法如下：</p>

<pre><code>ctx.fillText(text, x, y, [maxWidth])
</code></pre>

<p><code>fillText()</code>方法接受四个参数：</p>

<ul>
<li><code>text</code>：需要绘制的文本内容</li>
<li><code>x</code>：指定绘制文本在Canvas画布中起始位置的<code>x</code>轴坐标点</li>
<li><code>y</code>：指定绘制文本在Canvas画布中起始位置的<code>y</code>轴坐标点</li>
<li><code>maxWidth</code>：指定绘制文本的最大宽度</li>
</ul>

<p>来看个简单的示例：</p>

<pre><code>var text = 'Hello! W3cplus.com !'; // 需要绘制的文本内容
ctx.fillStyle = '#f90'; // 文本颜色
ctx.textAlign = 'center'; // 文本对齐方式  
ctx.font = '48px Airal'; // 文本字号、字体

ctx.fillText(text, w / 2, h / 2);
</code></pre>

<p>效果如下：</p>

<p><a href="//codepen.io/airen/full/mmPJqB/"><img src="/sites/default/files/blogs/2017/1704/canvas-14-1.png" alt=""></a></p>

<p><em>可以<a href="//codepen.io/airen/full/mmPJqB">点击这里</a>在CodePen上查看Demo效果</em>。</p>

<p>在绘制文本时，同样可以使用<code>fillStyle</code>属性来设置填充文本的颜色。另外，上面的示例，我们只用了其中三个参数，并没有使用<code>maxWidth</code>参数。在<code>fillText()</code>方法中，这个参数是可选参数。这个参数的主要功能是用来控制绘制文本的最大宽度。如果绘制的文本内容超过了<code>maxWidth</code>的宽度的时候，将会压缩文本，让绘制的文本宽度和<code>maxWidth</code>值一样。</p>

<p>来个小示例：</p>

<pre><code>var text = 'Hello! W3cplus.com !';
ctx.fillStyle = '#f90';
ctx.textAlign = 'center';

ctx.font = '48px Airal';

ctx.fillText(text, w / 2, h / 2 - 50, 200);
ctx.fillText(text, w / 2, h / 2 + 50);
</code></pre>

<p>效果如下：</p>

<p><a href="//codepen.io/airen/full/JNXdVW/"><img src="/sites/default/files/blogs/2017/1704/canvas-14-2.png" alt=""></a></p>

<p><em>可以<a href="//codepen.io/airen/full/JNXdVW">点击这里</a>在CodePen上查看Demo效果</em>。</p>

<p>上示中，绘制的第一个文本，设置了<code>maxWidth</code>，而第二个文本并未设置<code>maxWidth</code>。通过<code>ctx.measureText(text).width)</code>可以得出未设置<code>maxWidth</code>的值是<code>474</code>，也就是说文本<code>Hello! W3cplus.com!</code>从<code>474</code>压缩到了<code>200</code>。</p>

<p>上面介绍的是<code>fillText()</code>绘制填充文本，在Canvas中还可以通过<code>strokeText()</code>方法来绘制描边文本。该方法具有的参数和使用方法与<code>fillText()</code>一样，只是最终在Canvas中渲染的效果不一样。比如将上示中的<code>fillText()</code>换成<code>strokeText()</code>，同时将<code>fillStyle</code>换成<code>strokeStyle</code>：</p>

<pre><code>var text = 'Hello! W3cplus.com !';
ctx.strokeStyle = '#f90';
ctx.textAlign = 'center';

ctx.font = '48px Airal';

ctx.strokeText(text, w / 2, h / 2 - 50, 200);
ctx.strokeText(text, w / 2, h / 2 + 50);
</code></pre>

<p>最终效果如下：</p>

<p><a href="//codepen.io/airen/full/EmKVbv"><img src="/sites/default/files/blogs/2017/1704/canvas-14-3.png" alt=""></a></p>

<p><em>可以<a href="//codepen.io/airen/full/EmKVbv">点击这里</a>在CodePen上查看Demo效果</em>。</p>

<p>在实际中，我们可以同时使用<code>fillText()</code>和<code>strokeText()</code>方法绘制一个具有填充的边框的文本，这也是我们最常见的描边文本，但它们的起始位置应该在同一个点：</p>

<pre><code>var text = 'Hello! W3cplus.com !';
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'red';
ctx.lineWidth = 2;
ctx.textAlign = 'center';    
ctx.font = '48px Airal';

ctx.fillText(text, w / 2, h / 2);
ctx.strokeText(text, w / 2, h / 2);
</code></pre>

<p>最终效果如下：</p>

<p><a href="//codepen.io/airen/full/MmyaBJ/"><img src="/sites/default/files/blogs/2017/1704/canvas-14-4.png" alt=""></a></p>

<p><em>可以<a href="//codepen.io/airen/full/MmyaBJ/">点击这里</a>在CodePen上查看Demo效果</em>。</p>

<p>为了便于更灵活的使用<code>fillText()</code>和<code>strokeText()</code>绘制文本，可以将其封装成一个函数，比如<code>drawText()</code>：</p>

<pre><code>// @param {Object} ctx - CanvasRenderingContext2D
// @param {String} text - 绘制文本的内容
// @param {Number} x - 绘制文本起始点x轴坐标
// @param {Number} y - 绘制文本起始点y轴坐标
// @param {Boolean} isFill - 是否填充，true绘制填充文本，false绘制描边文本
// @param {Boolean} isMaxWidth - 是否设置文本最大宽度, true设置最大宽度， false不设置最大宽度
// @param {String} color - 绘制文本颜色
// @param {Number} maxWidth - 文本最大宽度
function drawText(ctx, text, x, y, isFill, isMaxWidth, color, maxWidth) {
  if (isFill) {
  ctx.fillStyle = color;
      if (isMaxWidth) {
      ctx.fillText(text, x, y, maxWidth);
      } else {
      ctx.fillText(text, x, y);
      }
  } else {
  ctx.strokeStyle = color;
  if (isMaxWidth) {
      ctx.strokeText(text, x, y, maxWidth);
  } else {
      ctx.strokeText(text, x, y);
  }
  }
}
</code></pre>

<p>使用的时候，像下面这样调用即可：</p>

<pre><code>drawText(ctx, 'W3cplus.com', w / 2, 40, true, false, 'blue');
drawText(ctx, 'W3cplus.com', w / 2, 80, true, true, 'blue', 100);
</code></pre>

<div style="margin-bottom: 20px;"><iframe id="RVrPdB" src="//codepen.io/airen/embed/RVrPdB?height=400&amp;theme-id=0&amp;slug-hash=RVrPdB&amp;default-tab=result&amp;user=airen" scrolling="no" frameborder="0" height="400" allowtransparency="true" allowfullscreen="true" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

<h2>设置文本样式</h2>

<p>在上面的示例中，我们看到了代码中有<code>ctx.font</code>属性的使用。其实在Canvas中，可以通过绘图环境对象的<code>font</code>属性，来设置绘制在Canvas之中的文本所采用的字型。该属性是一个CSS3格式的字型字符串，它和<a href="//developer.mozilla.org/zh-CN/docs/Web/CSS/font">CSS <code>font</code></a>属性相同的语法，默认的字型是<code>10px sans-serif</code>。</p>

<p>Canvas中<code>font</code>属性的各个分量如下表所示：</p>

<table>
<thead>
<tr>
<th>字型属性分量</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>font-style</code></td>
<td>可以取如下三个值：<code>normal</code>、<code>italic</code>和<code>oblique</code></td>
</tr>
<tr>
<td><code>font-variant</code></td>
<td>可以取这两个值：<code>normal</code>和<code>small-caps</code></td>
</tr>
<tr>
<td><code>font-weight</code></td>
<td>决定该字型的字符笔画粗细，可取如下值：<code>normal</code>、<code>lighter</code>、<code>bold</code>和<code>bolder</code>，也可以采用对应的数值，比如<code>normal</code>对应的是<code>400</code></td>
</tr>
<tr>
<td><code>font-size</code></td>
<td>字型的大小，可以使用关键词<code>xx-small</code>、<code>x-small</code>、<code>small</code>、<code>medium</code>、<code>large</code>、<code>x-large</code>、<code>xx-large</code>、<code>smaller</code>、<code>larger</code>；也可以使用具体的带有长度单位的数值，比如<code>20px</code></td>
</tr>
<tr>
<td><code>line-height</code></td>
<td>浏览器会将该属性强制设置为其默认值<code>normal</code>，如果你设置了该值，浏览器会忽略你所设定的值</td>
</tr>
<tr>
<td><code>font-family</code></td>
<td>设置字体</td>
</tr>
</tbody>
</table>

<blockquote>
<p><strong>通过CSS3与Canvas来指定字型属性时的区别：</strong>绘制环境对象的<code>font</code>属性也支持CSS3格式的字型语法，除了样式语法所特有的属性，例如<code>inherit</code>或<code>initial</code>等。如果你不巧刚好用到了<code>inherit</code>或<code>initial</code>的话，那么浏览器在执行到那行代码时会悄然地失败，并不抛出任何异常，同时也不会将该值设定给<code>font</code>属性。通过Canvas来设置字型属性与通过CSS3来设置相比，还有一个区别：在Canvas中设置<code>line-height</code>属性时，浏览器将忽略其值，因为规范要求浏览器必须将该值设置为<code>normal</code>。</p>
</blockquote>

<h2>文本定位（对齐方式）</h2>

<p>这里所说的文本定位，其实指的是对齐方式，在CSS中我们可以使用<code>text-align</code>设置文本水平对齐方式，<code>vertical-align</code>设置文本垂直方向的对齐方式。在Canvas中也有对应的属性。</p>

<p>通过前面的知识我们得知，在Canvas中使用<code>fillText()</code>或<code>strokeText()</code>绘制文本时，需要指定所绘文本的<code>x</code>与<code>y</code>坐标，然而，浏览器具体会将文本绘制在何处（文本定位），则要看<code>textAlign</code>与<code>textBaseline</code>这两个绘图环境对象的属性。</p>

<h3>textAlign</h3>

<p><strong><code>CanvasRenderingContext2D.textAlign</code></strong>是Canvas中绘制文本时文本的对齐方式的属性。其对齐是基于<code>fillText()</code>或<code>strokeText()</code>方法的<code>x</code>值。<code>textAlign</code>属性有点类似于CSS中的<code>text-align</code>，用来设置文本水平对齐方式。其主要包括：</p>

<pre><code>ctx.textAlign = "left" || "right" || "center" || "start" || "end";
</code></pre>

<ul>
<li><code>left</code>：文本左对齐</li>
<li><code>right</code>：文本右对齐</li>
<li><code>center</code>：文本居中对齐</li>
<li><code>start</code>：文本对齐界线开始的地方（左对齐指本地从左向右，右对齐指本地从右向左）</li>
<li><code>end</code>：文本对齐界线结束的地方（左对齐指本地从左向右，右对齐指本地从右向左）</li>
</ul>

<p>默认值是<code>start</code>。在Canvas中使用<code>textAlign</code>时同样会受<code>direction</code>属性值的影响。当Canvas的<code>direction</code>的值为<code>ltr</code>时，也就是说浏览器是按照由左至右的方向来显示文本时，<code>textAlign</code>的<code>left</code>的效果与<code>start</code>相同，而<code>right</code>的效果则与<code>end</code>相同。同理，如果<code>direction</code>的值为<code>rtl</code>时，也就是说浏览器是从右至左来显示文本的，那么<code>textAlign</code>的<code>right</code>的效果则与<code>start</code>一致，而<code>left</code>则与<code>end</code>一致。下例演示了<code>textAlign</code>每个值在浏览器中渲染的效果（其中<code>direction</code>的值为默认值<code>ltr</code>）：</p>

<pre><code>var text = ['left', 'right', 'center', 'start', 'end'];
ctx.fillStyle = '#f36';

ctx.font = '32px Airal';

for (var i = 0; i &lt; text.length; i++) {
ctx.textAlign = text[i];
ctx.fillText('textAlign:' + text[i], w / 2, (i + 1) * 50);
}
</code></pre>

<p>效果如下：</p>

<p><a href="//codepen.io/airen/full/KmVdJm/"><img src="/sites/default/files/blogs/2017/1704/canvas-14-5.png" alt=""></a></p>

<p><em>可以<a href="//codepen.io/airen/full/KmVdJm/">点击这里</a>在CodePen上查看Demo效果</em>。</p>

<p>示例中绘制的文本，其起始点是画布的中心位置<code>w / 2</code>，也就是上图中的黑色竖线。<code>left</code>则让文本左侧在<code>x</code>点处（在竖线右侧），<code>right</code>则文本右侧在<code>x</code>点处（在竖线左侧），<code>center</code>则文本中间点在<code>x</code>点处（在竖线中间）。<code>start</code>和<code>left</code>等同，<code>end</code>和<code>right</code>等同。</p>

<blockquote>
<p>这里的<code>textAlign='center'</code>比较特殊。<code>textAlign</code>的值为<code>center</code>时候文本的居中是基于你在<code>fillText</code>的时候所给的<code>x</code>的值，也就是说文本一半在<code>x</code>的左边，一半在<code>x</code>的右边（上图展示看得更清楚些）。所以，如果你想让文本在整个Canvas居中，就需要将<code>fillText</code>的<code>x</code>值设置成<code>canvas</code>的宽度的一半。</p>
</blockquote>

<h3>textBaseline</h3>

<p><code>CanvasRenderingContext2D.textBaseline</code>是Canvas中描述绘制文本时，当前文本基线的属性，类似CSS中的<code>vertical-align</code>属性，在介绍<code>textBaseline</code>属性之前，先来下图，下图展示了<code>textBaseline</code>属性支持的<a href="//www.whatwg.org/">不同的基线情况</a>：</p>

<p><img src="/sites/default/files/blogs/2017/1704/baselines.png" alt=""></p>

<p>上图是不是非常熟悉呀，那我们回到Canvas的<code>textBaseline</code>属性的使用：</p>

<pre><code>ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
</code></pre>

<ul>
<li><code>top</code>：文本基线在文本块的顶部</li>
<li><code>hanging</code>：文本基线是悬挂基线</li>
<li><code>middle</code>：文本基线在文本块的中间</li>
<li><code>alphabetic</code>：文本基线是标准的字母基线</li>
<li><code>ideographic</code>：文字基线是表意字基线，如果字符本身超出了<code>alphabetic</code>基线，那么<code>ideograhpic</code>基线位置在字符本身的底部</li>
<li><code>bottom</code>：文本基线在文本块的底部，与<code>ideographic</code>基线的区别在于<code>ideographic</code>基线不需要考虑下行字母</li>
</ul>

<p><code>textBaseline</code>的默认值是<code>alphabetic</code>，该值用于绘制由基于拉丁字母的语言所组成的字符串，<code>ideographic</code>值则用于绘制日文或中文字符串，<code>hanging</code>值用于绘制各种印度语字符串，<code>top</code>、<code>bottom</code>和<code>middle</code>这三个值与特定的语言不相关，它们代表文本周围的边界框之内的某个位置，这个边界框也叫做“字符方框”。</p>

<p>同样来看一个示例，用效果来帮助我们理解<code>textBaseline</code>各个值的效果。</p>

<pre><code>var text = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
ctx.fillStyle = '#f36';

ctx.font = '24px Airal';

for (var i = 0; i &lt; text.length; i++) {
ctx.textBaseline = text[i];
ctx.fillText(text[i], (i + 1) * 150, h / 2);
}
</code></pre>

<p>效果如下：</p>

<p><a href="//codepen.io/airen/full/dWGGyB/"><img src="/sites/default/files/blogs/2017/1704/canvas-14-6.png" alt=""></a></p>

<p><em>可以<a href="//codepen.io/airen/full/dWGGyB">点击这里</a>在CodePen上查看Demo效果</em>。</p>

<h2>文本度量</h2>

<p>只要你做的事情与文本有关，你就得设法获取某个字符串的像素宽度和高度。在Canvas中提供了<code>measureText()</code>方法，这个方法返回一个<code>TextMetrics</code>对象，这个对象中包含了一个名为<code>width</code>的属性，这个属性就是字符串的宽度。</p>

<pre><code>var text = ctx.measureText("foo"); // TextMetrics object
text.width; // 16;
</code></pre>

<p>在使用<code>measureText()</code>方法时，常见的错误就是在调用完该方法之后，才去设置字型。请注意：<strong><code>measureText()</code>方法是根据当前的字型来计算字符串宽度的，因此，如果你在调用<code>measureText()</code>方法之后才去改变字型，那么该方法所返回的宽度并不能反映出以那种字型来度量的实际文本宽度。</strong></p>

<p>上述的内容就是有关于Canvas中绘制文本所涉及到的一些方法和属性。接下来我们来看两个简单的示例。</p>

<h2>示例</h2>

<p>前面的示例，我们看到的是通过<code>fillText()</code>或<code>strokeText()</code>方法绘制填充文本或描边文本，可以说是最简单的绘制文本效果，但实际当中，我们要的效果不仅仅是这些普通的效果。比如我们需要一个圆形的文本效果，3D的文本效果等。那咱们就借助以前所学的一些基础知识来实现这两种效果。</p>

<h3>环形文本</h3>

<p>直接上代码，这里封装了一个简单的函数，比如<code>drawCircleText()</code>，并且根据绘制弧形文本所需要的参数传给这个函数，具体代码如下：</p>

<pre><code>// @param {Object} ctx - CanvasRenderingContext2D
// @param {String} text - 需要绘制制的文本
// @param {Number} x - 绘制文本起始点x轴坐标点
// @param {Number} y - 绘制文本起始点y轴坐标点
// @param {Number} radius - 圆形半径, 弧度值
// @param {Number} startAngle - 开始的角度值
// @param {Boolean} isFill - 是否填充，true填充，false描边
// @param {String} color - 文本颜色
function drawCircleText(ctx, text, x, y, radius, startAngle, isFill, color) {
  // 将startAngle角度转换成弧度
  var startRad = Math.PI * startAngle / 180;
  // 所绘文本的长度
  var len = text.length;
  // 每个字符所对应的弧度
  var numRadsPerLetter = Math.PI * 2 / len;

  ctx.save();
  // 将坐标原点移到(x, y)
  ctx.translate(x, y);
  // 将坐标旋转startRad
  ctx.rotate(startRad);

  // 对字符做操作
  for (var i = 0; i &lt; len; i++) {
  ctx.save();
  // 每个字符旋转
  ctx.rotate(i * numRadsPerLetter);

  // isFill为true填充, false为描边
  if (isFill) {
      ctx.fillStyle = color;
      ctx.fillText(text[i], 0, -radius);
  } else {
      ctx.strokeStyle = color;
      ctx.strokeText(text[i], 0, -radius);
  }
  ctx.restore();
  }
  ctx.restore();
}
</code></pre>

<p>在使用的时候，只需要调用这个函数，并传入相应的值：</p>

<pre><code>ctx.font = 'bold 40px Arial';
drawCircleText(ctx, 'W3CPLUC.COM!', w / 2, h / 2, 100, 0, true, 'orange');
</code></pre>

<p>效果如下：</p>

<div style="margin-bottom: 20px;"><iframe id="jmWWdp" src="//codepen.io/airen/embed/jmWWdp?height=400&amp;theme-id=0&amp;slug-hash=jmWWdp&amp;default-tab=result&amp;user=airen" scrolling="no" frameborder="0" height="400" allowtransparency="true" allowfullscreen="true" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

<h3>3D文本效果</h3>

<p>3D文本效果在CSS中通过<code>text-shadow</code>来实现，具体怎么实现这里就不多说了，必竟我们这里是聊Canvas。其实在Canvas中实现的原理也有点类似，将会使用到<code>shadowBluer</code>、<code>shadowColor</code>等阴影属性（这个我们前面没有接触过，但后面我们也会深入学习），和前面的圆形文本一样，同样将绘制3D文本的效果封装成一个简单的函数，比如<code>draw3DText()</code>，具体的代码如下：</p>

<pre><code>// @param {Object} ctx - CanvasRenderingContext2D
// @param {String} text - 绘制的文本内容
// @param {Number} x - 文本起始点x轴坐标
// @param {Number} y - 文本起始点y轴坐标
// @param {Number} textDepth - 阴影的深度
// @param {Boolean} isFill - 文本是否填充，true为填充，false为描边
// @param {String} color - 文本颜色
// @param {String} shadowColor - 阴影颜色
// @param {Number} shadowBlur - 阴影距离
// @param {Number} interval - 间距
function draw3DText(ctx, text, x, y, textDepth,isFill, color, shadowColor, shadowBlur, interval) {
  var i;
  for (i = 0; i &lt; textDepth; i++) {
  if(isFill) {
      ctx.fillText(text, x - i, y - i);
  } else {
      ctx.strokeText(text, x - i, y - i);
  }
  }
  ctx.shadowColor = shadowColor;
  ctx.shadowBlur = shadowBlur;
  ctx.shadowOffsetX = textDepth + interval;
  ctx.shadowOffsetY = textDepth + interval;

  if (isFill) {
  ctx.fillStyle = color;
  ctx.fillText(text, x - i, y - i);
  } else {
  ctx.strokeStyle = color;
  ctx.strokeText(text, x - i, y - i);
  }

}
</code></pre>

<p>调用也非常的简单：</p>

<pre><code>ctx.font = '60px Verdana';
ctx.textAlign = 'center';
ctx.textBaseline= 'middle';

draw3DText(ctx, 'W3cplus', w / 2, h / 2, 6, true, '#0094ed', '#000', 12, 2);
</code></pre>

<p>得到的效果如下：</p>

<div style="margin-bottom: 20px;"><iframe id="mmVVVe" src="//codepen.io/airen/embed/mmVVVe?height=400&amp;theme-id=0&amp;slug-hash=mmVVVe&amp;default-tab=result&amp;user=airen" scrolling="no" frameborder="0" height="400" allowtransparency="true" allowfullscreen="true" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

<p>这个示例通过将<code>fillText()</code>或者<code>strokeText()</code>的<code>(x, y)</code>设置为<code>canvas</code>宽度和高度的一半<code>(w / 2, h / 2)</code>再配合<code>ctx.textAlign = 'center'</code>和<code>ctx.textBaseline= 'middle'</code>可以实现所绘文本在画布的中间，也就是实现了我们常说的水平垂直居中的效果。</p>

<p>另外，把上面两外效果结合起来，就可以实现圆形的3D文本效果，要是再添加一点动画功能，效果就不一样了：</p>

<div style="margin-bottom: 20px;"><iframe id="VbebgQ" src="//codepen.io/airen/embed/VbebgQ?height=400&amp;theme-id=0&amp;slug-hash=VbebgQ&amp;default-tab=result&amp;user=airen" scrolling="no" frameborder="0" height="400" allowtransparency="true" allowfullscreen="true" class="cp_embed_iframe undefined" style="width: 100%; overflow: hidden;"></iframe></div>

<h2>总结</h2>

<p>这篇文章我们主要介绍了在Canvas中绘制文本的一些基础知识，在Canvas中可以通过<code>ctx.fillText()</code>绘制填充文本，<code>ctx.strokeText()</code>可以绘制描边文本，另外通过<code>ctx.textAlign</code>和<code>ctx.textBaseline</code>设置所绘制文本的位置，并且使用<code>ctx.measureText('text').width</code>可以得到所绘制文本<code>text</code>的宽度值，虽然这个值并不精确，但在Canvas中有方法可以解决，至于怎么解决我们后续的内容将会介绍。</p>

<p>虽然这些功能是绘制文本的基本功能，但结合Canvas其他的功能，我们可以绘制出很多不同的文本效果，至于绘制出什么样的效果，则需要大家去思考，因为创意是自己的，有了创意，然后结合自己所掌握的Canvas知识，能做的事情就更多了。如果你有更好的创意，希望在下面的评论中与我们一起分享。</p>

<div class="blog-author media"><a class="media-object" href="//weibo.com/w3cplus" target="_blank"><img src="/sites/default/files/blogs/author/airen.jpg"></a><div class="media-body"><h3 class="media-heading"><a href="//weibo.com/w3cplus" target="_blank">大漠</a></h3><div class="media-des">常用昵称“大漠”，W3CPlus创始人，目前就职于手淘。对HTML5、CSS3和Sass等前端脚本语言有非常深入的认识和丰富的实践经验，尤其专注对CSS3的研究，是国内最早研究和使用CSS3技术的一批人。CSS3、Sass和Drupal中国布道者。2014年出版《<a href="//www.w3cplus.com/book-comment.html" target="_blank">图解CSS3：核心技术与案例实战</a>》。</div></div></div>

<p>如需转载，烦请注明出处：<a href="//www.w3cplus.com/canvas/drawing-text.html">http://www.w3cplus.com/canvas/drawing-text.html</a></p>
</div></div></div>  </div>


 
  <div id="node_footer" class="clearfix">
            <div class="previous-next"><span class="prev">上一篇: </span><a href="/canvas/canvas-drawing-function.html">Canvas学习：封装Canvas绘制基本图形API</a> | <span class="next">下一篇: </span><a href="/css3/start-using-css-custom-properties.html">是时候开始使用CSS自定义属性</a></div>            
  </div>

        <div id="node_bottom">
      <div id="block-block-24" class="block block-block">

  
<div class="content">
  <div class="ct-ad-article-wrapper" id="content-bottom-ad" style="margin:0 0 10px;padding:0;border: none 0;">
<div class="ct-ad-article">
  <div class="bsap">
    <a href="http://fe.apelearn.com/?utm_source=w3cplus&amp;utm_medium=banner&amp;utm_campaign=w3cplus" target="_blank"><img src="/sites/default/files/blogs/2017/1706/damo-960.png" alt="在线视频教程" width="960" height="200"></a>
  </div>
</div>
</div>
</div>
</div>
<div id="block-disqus-disqus-comments" class="block block-disqus">

  
<div class="content">
  <div id="disqus_thread"><noscript><p><a href="http://w3cplus.disqus.com/?url=https%3A%2F%2Fwww.w3cplus.com%2Fcanvas%2Fdrawing-text.html">View the discussion thread.</a></p></noscript></div>  </div>
</div>
    </div>
      

</div>  </div>
</div>
</div>

      </div>

    </div>
  </div>

  
        <div id="sidebar-second" class="col-extra">
      <!-- <script type="text/javascript">document.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E%3Cscript charset="utf-8" src="//rp.baidu.com/rp3w/3w.js?sid=10994702955876242907') + '&t=' + (Math.ceil(new Date()/3600000)) + unescape('"%3E%3C/script%3E'));</script> -->
        <div class="region region-sidebar-second">
  <div id="block-custom-search-blocks-1" class="block block-custom-search-blocks">

  
<div class="content">
  <form class="search-form" role="search" action="/canvas/drawing-text.html" method="post" id="custom-search-blocks-form-1" accept-charset="UTF-8"><div><div class="form-item form-type-textfield form-item-custom-search-blocks-form-1">
<label class="element-invisible" for="edit-custom-search-blocks-form-1--2">Search this site </label>
<input title="请输入您想搜索的关键词。" class="custom-search-box form-text" placeholder="" type="text" id="edit-custom-search-blocks-form-1--2" name="custom_search_blocks_form_1" value="" size="15" maxlength="128">
</div>
<input type="hidden" name="delta" value="1">
<input type="hidden" name="form_build_id" value="form-ZalQVtg26KnqfmCtM7TCgmUsb4Y6-ENf1De5IpMSC-Q">
<input type="hidden" name="form_id" value="custom_search_blocks_form_1">
<div class="form-actions form-wrapper" id="edit-actions"><input type="submit" id="edit-submit" name="op" value="搜索" class="form-submit"></div></div></form>  </div>
</div>
<div id="block-block-49" class="block block-block">

  
<div class="content">
  <div style="margin-bottom:5px;"><a href="https://css.w3ctech.com/" target="_blank" title="2017上海QCon"><img alt="" src="/sites/default/files/blogs/2018/1803/damo-300.jpg" style="width: 300px; height: 160px;"></a></div>

<div><a href="http://fe.apelearn.com/?utm_source=w3cplus&amp;utm_medium=banner&amp;utm_campaign=w3cplus" target="_blank" title="在线视频教程"><img alt="" src="/sites/default/files/blogs/2017/1706/damo-300.png" style="width: 300px; height: 160px;"></a></div>
</div>
</div>
<div id="block-block-18" class="block block-block">

  <h2>合作网站</h2>

<div class="content">
  <ul class="clearfix" id="join_hands"><li>
  <a href="https://scriptoj.com/" target="_blank" title="前端开发 ScriptOJ">前端开发 ScriptOJ</a></li>
<li>
  <a href="http://moyu-edu.com/js.html" target="_blank" title="墨鱼前端培训">墨鱼前端培训</a></li>
<li>
  <a href="http://www.html5dw.com/" target="_blank" title="HTML5梦工场">HTML5梦工场</a></li>
<li>
  <a href="//www.w3cplus.com/sassguide/index.html" target="_blank" title="Sass入门指南">Sass入门指南</a></li>
<li>
  <a href="//www.w3cplus.com/solution/index/index.html" target="_blank" title="CSS解决方案">CSS解决方案</a></li>
<li>
  <a href="//www.w3ctech.com/" target="_blank" title="中国最大的前端技术社区">W3ctech</a></li>
<li>
  <a href="http://fequan.com/" target="_blank" title="前端圈">前端圈</a></li>
<li>
  <a href="//drupalchina.cn" target="_blank">Drupal中国</a></li>
</ul>  </div>
</div>
<div id="block-views-friend-block-1" class="block block-views">

  <h2>友情链接</h2>

<div class="content">
  <div class="view view-friend view-id-friend view-display-id-block_1 view-dom-id-4c9e5c8b22c5f81f694b67bceaac83a3">
      


    <div class="view-content">
    <div class="item-list">    <ul>          <li class="views-row views-row-1 views-row-odd views-row-first">  
<div class="views-field views-field-title">        <span class="field-content"><a href="https://segmentfault.com/">segmentfault</a></span>  </div></li>
        <li class="views-row views-row-2 views-row-even">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.alloyteam.com/">腾讯 AlloyTeam</a></span>  </div></li>
        <li class="views-row views-row-3 views-row-odd">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.xiao-an.com/">广州微信开发</a></span>  </div></li>
        <li class="views-row views-row-4 views-row-even">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.tuhaokuai.com/">在线图片压缩</a></span>  </div></li>
        <li class="views-row views-row-5 views-row-odd">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.zuidaima.com/">java源代码学习</a></span>  </div></li>
        <li class="views-row views-row-6 views-row-even">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///moyu-edu.com/js.html">墨鱼前端开发培训</a></span>  </div></li>
        <li class="views-row views-row-7 views-row-odd">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.zbj.com/ydyykf/">猪八戒网</a></span>  </div></li>
        <li class="views-row views-row-8 views-row-even">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.html5dw.com/">HTML5梦工场</a></span>  </div></li>
        <li class="views-row views-row-9 views-row-odd">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.php-z.com/">PHP教程</a></span>  </div></li>
        <li class="views-row views-row-10 views-row-even views-row-last">  
<div class="views-field views-field-title">        <span class="field-content"><a href="///www.proginn.com/">程序员客栈</a></span>  </div></li>
    </ul></div>    </div>






</div>  </div>
</div>
</div>
    </div>
  

</div>
</div>

<div id="footer-col" class="footer-col">
  <div class="container">
      <div class="region region-footer-col">
  <div id="block-block-39" class="block block-block">

  <h2>关于我们</h2>

<div class="content">
  <a class="media-object" href="http://www.w3cplus.com">W3cplus</a>
<div class="media-body">
<p>W3cplus是一个致力于推广国内前端行业的技术博客。它以探索为己任，不断活跃在行业技术最前沿，努力提供高质量前端技术博文；其文章范围广泛，主要以CSS3、HTML5、JavaScript、Vue、React、Mobile、动画等教程、译文和案例为主。</p>
<p><a href="//www.w3cplus.com/sites/default/files/blogs/2017/1711/W3cplus-banner.pdf" target="_blank">W3cplus提供相关广告展示与招聘发布</a>，有需要的请联系：微信号w3cplus，E-mail:<a href="mailto:airenliao@gmail.com" target="_blank">airenliao@gmail.com</a></p>
</div>
</div>
</div>
<div id="block-block-40" class="block block-block">

  <h2>关于站长</h2>

<div class="content">
  <p><a class="media-object" href="//www.w3cplus.com" target="_blank">大漠</a></p>
<div class="media-body">
<p>常用昵称“大漠”，<a href="//www.w3cplus.com" target="_blank">W3CPlus</a>创始人，目前就职于淘宝。对HTML5、CSS3和CSS处理器等前端脚本语言有非常深入的认识和丰富的实践经验，尤其专注对CSS3和动画的研究，是国内最早研究和使用CSS3和CSS处理器技术的一批人。现在主要在探讨学习JavaScript、React和Vue相关技术知识。CSS3、CSS处理器和Drupal中国布道者。2014年出版《<a href="//www.w3cplus.com/book-comment.html">图解CSS3：核心技术与案例实战</a>》。</p>
<div class="social">
  <a class="github" href="//github.com/airen" target="_blank" title="github">github</a> <a class="weibo" href="//weibo.com/w3cplus" target="_blank" title="weibo">weibo</a> <a class="facebook" href="//www.facebook.com/w3cplus" target="_blank" title="facebook">facebook</a> <a class="google" href="//plus.google.com/+AirenLiao" target="_blank" title="google">google</a> <a class="twitter" href="//twitter.com/w3cplus" target="_blank" title="twitter">twitter</a> <a class="linkedin" href="//cn.linkedin.com/in/w3cplus" target="_blank" title="linkedin">linkedin</a></div>
</div>
<p>&nbsp;</p>
</div>
</div>
<div id="block-block-41" class="block block-block">

  <h2>我的作品</h2>

<div class="content">
  <a class="media-object" href="//www.w3cplus.com/book-comment.html" target="_blank">图解CSS3</a>
<div class="media-body">
<p>本书是国内著名的Web前端专家历时2载的心血之作，根据最新的CSS3撰写，融入了作者在CSS领域多年的使用经验，旨在将本书打造成为CSS3领域最权威和实用的专业著作，供没有经验的读者系统学习，供有经验的读者参考备查。</p>
<p>本书理论知识系统全面，详细讲解了选择器、伸缩布局盒模型、渐变、过渡、动画等主题下涵盖的所有CSS3新特性。</p></div>
</div>
</div>
</div>
  </div>
</div> 

<div id="footer" class="footer">
  <div class="container">
      <div class="region region-footer">
  <div id="block-block-12" class="block block-block">

  
<div class="content">
  <p>湘ICP备13003850号-12，版权所有 衡阳瑞思信息技术有限公司 © 2011-2017 <a href="//www.w3cplus.com/page/26.html" target="_blank">W3CPLUS</a>，感谢<a href="//www.drupal.org" target="_blank">Drupal</a>开源技术。感谢<a href="//www.qiniu.com/" target="_blank">七牛云存储</a>提供静态资源空间。</p>
<script type="application/ld+json" async="">
{
"@context": "//schema.org",
"@type": "Person",
"name": "W3cplus",
"url": "//www.w3cplus.com",
"image" : "//tp4.sinaimg.cn/1167075935/180/22838101204/1",
"sameAs" : [
  "//twitter.com/w3cplus",
  "//www.facebook.com/w3cplus",
  "//cn.linkedin.com/in/w3cplus",
  "//weibo.com/w3cplus/",
  "//plus.google.com/+AirenLiao",
  "//github.com/airen"
]
}
</script>  </div>
</div>
</div>
  </div>
</div> 

<div id="totop" style="position: fixed; bottom: 50px; right: 15px; cursor: pointer; z-index: 999999; display: block; opacity: 0;">
  <a title="返回顶部">返回顶部</a>
</div>

<script type="text/javascript">
<!--//--><![CDATA[//><!--
var _hmt = _hmt || [];_hmt.push(["_setAccount", "177319b798978621f83845b12c86fa29"]);_hmt.push(["_trackPageview"]);(function() {var hm = document.createElement('script');hm.src = '//hm.baidu.com/hm.js?177319b798978621f83845b12c86fa29';hm.type = 'text/javascript';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);})()
//--><!]]>
</script>
<script type="text/javascript" src="https://www.w3cplus.com/sites/default/files/js/js_VU7P4CTgUZdF2SyFko5LLAg9ZK0OSVjXVaAFnTLgVt0.js"></script>




</body></html>`.replace(/"\/sites/g, '"hw'+'/sites'))