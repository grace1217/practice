(function(window){var svgSprite='<svg><symbol id="icon-wenti-m" viewBox="0 0 1024 1024"><path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM512 894.016C301.344 894.016 129.984 722.624 129.984 512 129.984 301.344 301.344 129.984 512 129.984c210.624 0 382.016 171.36 382.016 382.016C894.016 722.624 722.624 894.016 512 894.016z"  ></path><path d="M512 255.2c-77.216 0-140.032 62.272-140.032 138.816 0 17.664 14.336 32 32 32s32-14.336 32-32c0-41.952 33.376-74.816 76.032-74.816 41.952 0 76.032 34.368 76.032 76.64 0 15.968-22.848 38.784-43.008 58.944C514.56 485.216 480 519.744 480 566.016l0 45.696c0 17.696 14.336 32 32 32s32-14.304 32-32l0-45.696c0-19.744 23.52-43.264 46.272-65.984 28.928-28.928 61.76-61.728 61.76-104.192C652.032 318.272 589.216 255.2 512 255.2z"  ></path><path d="M512 753.92m-48 0a1.5 1.5 0 1 0 96 0 1.5 1.5 0 1 0-96 0Z"  ></path></symbol><symbol id="icon-diannao" viewBox="0 0 1024 1024"><path d="M905.042955 788.81866H127.632425c-17.242229 0-31.270482-14.027229-31.270482-31.269458V157.769466c0-17.242229 14.028253-31.270482 31.270482-31.270482h777.41053c17.242229 0 31.269458 14.027229 31.269458 31.270482v599.779736c0 17.242229-14.027229 31.269458-31.269458 31.269458z m-770.71432-37.965668h764.01811V164.4667H134.328635v586.386292z" fill="#666666" ></path><path d="M900.659702 591.245652H118.866943c-10.484586 0-18.983858-8.499272-18.983858-18.982833s8.499272-18.982834 18.983858-18.982834h781.792759c10.483562 0 18.982834 8.499272 18.982834 18.982834s-8.499272 18.982834-18.982834 18.982833z" fill="#666666" ></path><path d="M518.831363 662.819332m-24.025469 0a24.025469 24.025469 0 1 0 48.050938 0 24.025469 24.025469 0 1 0-48.050938 0Z" fill="#666666" ></path><path d="M518.828291 887.49868c-10.483562 0-18.982834-8.499272-18.982834-18.982834v-93.038411c0-10.483562 8.499272-18.982834 18.982834-18.982834s18.982834 8.499272 18.982834 18.982834v93.038411c0 10.483562-8.499272 18.982834-18.982834 18.982834z" fill="#666666" ></path><path d="M732.229542 897.737533H305.428064c-10.484586 0-18.983858-8.499272-18.983858-18.982834s8.499272-18.982834 18.983858-18.982833h426.801478c10.483562 0 18.982834 8.499272 18.982834 18.982833s-8.499272 18.982834-18.982834 18.982834z" fill="#666666" ></path></symbol><symbol id="icon-icon-" viewBox="0 0 1024 1024"><path d="M522.24 540.16c-115.2 0-207.36-92.16-207.36-207.36s92.16-207.36 207.36-207.36 207.36 92.16 207.36 207.36-92.16 207.36-207.36 207.36z m0-363.52c-87.04 0-156.16 69.12-156.16 156.16s69.12 156.16 156.16 156.16 156.16-69.12 156.16-156.16-69.12-156.16-156.16-156.16z" fill="#333333" ></path><path d="M217.6 898.56H174.08v-25.6c0-192 156.16-348.16 348.16-348.16 12.8 0 25.6 0 38.4 2.56l-5.12 51.2c-10.24 0-23.04-2.56-33.28-2.56-163.84 0-296.96 133.12-296.96 296.96h-7.68v25.6zM870.4 898.56h-40.96v-25.6H819.2c0-99.84-48.64-192-133.12-248.32l28.16-43.52C811.52 645.12 870.4 755.2 870.4 870.4v28.16z" fill="#333333" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)