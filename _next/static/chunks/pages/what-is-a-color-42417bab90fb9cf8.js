(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{3039:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/what-is-a-color",function(){return r(9452)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(5893),i=r(7294),o=function(e){var t=e.startOpen,r=e.title,o=e.children,s=e.toc,a=(0,i.useState)(t),l=a[0],c=a[1],h=l?"max-h-full":"max-h-0",u=l?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},id:s,children:[l?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+h+" "+u,children:o})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),i=(r(7294),r(6761)),o=r(1878),s=r(1664),a=o.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function l(e){var t=e.chartLogo,r=e.caption,o=e.link,l=e.isAvailable,h=e.size,u=a.includes(t),d=l?"opacity-100":"opacity-20",f=l?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(s.default,{href:l?o:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:h,height:h},className:"relative mr-2 rounded-full "+d+" "+f,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(i.Z,{chartLogo:t})}),u?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:h})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+d,children:r})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},h=r(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function d(e){var t=e.chartFamily,r=o.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,h.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(l,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1884:function(e,t,r){"use strict";r.d(t,{A:function(){return d}});var n=r(5893),i=r(3185),o=r(1261),s=r(7294),a=r(3924),l=r.n(a);function c(){var e=(0,s.useState)([]),t=e[0],r=e[1],i=(0,s.useState)(0),o=i[0],a=i[1];return(0,s.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));r(e)}),[]),(0,s.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),r=window.scrollY+150,n=e.reduce((function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}),0),i=e.findIndex((function(e){return e===n}));a(-1===i?0:i)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,n.jsx)("div",{className:l().tableOfContent,children:t.map((function(e,r){return(0,n.jsx)("p",{className:o===r?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:function(e){e.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var h=r(8171),u=r(6978),d=function(e){var t=e.children,r=e.title,s=e.seoDescription;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.A,{title:r,seoDescription:s}),(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)(i.Z,{}),t]}),(0,n.jsx)(u.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(o.Z,{})}),(0,n.jsx)(c,{})]})}},1687:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var n=r(5893),i=r(1664),o=function(e){var t=e.children,r=e.href,o=e.isFilled,s=e.size,a=void 0===s?"md":s,l=e.isFaded,c=r.startsWith("www")||r.startsWith("http"),h="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";h+=o?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(h+="text-sm py-1 px-2 "),"md"===a&&(h+="text-md py-2 px-4 "),l&&(h+="opacity-60");var u=(0,n.jsx)("span",{className:h,children:t});return c?(0,n.jsx)("a",{href:r,children:u}):(0,n.jsx)(i.default,{href:r,passHref:!0,children:(0,n.jsx)("a",{children:u})})}},8807:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),i=(r(7294),r(1878)),o=r(3414),s=r(3919),a=r(1687),l=r(3187),c=r.n(l),h=function(e){var t=e.direction,r=e.text,i=e.children;return(0,n.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:i})};function u(e){var t=e.title,r=e.description,l=e.chartType,c=e.showSectionLink,u=void 0!==c&&c,d=e.showInspirationLink,f=void 0===d||d,p=e.showD3GalleryLink,x=void 0===p||p,m=i.c.filter((function(e){return e.id===l}))[0];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)(s.r,{}),(0,n.jsx)("div",{className:"max-w-xxl py-2",children:(0,n.jsx)("p",{children:r})}),l&&(0,n.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,n.jsxs)("div",{className:"flex flex-row flex-wrap",children:[u&&(0,n.jsx)(h,{text:"kkkk",direction:"bottom",children:(0,n.jsx)(a.J,{href:(0,o.y)(m.reactURL),size:"sm",children:m.label+" section"})}),f&&(0,n.jsx)(h,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,n.jsx)(a.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),x&&(0,n.jsx)(h,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,n.jsx)(a.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,n.jsx)(h,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,n.jsx)(a.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(5893),i=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(l){i=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},s=r(6273),a=r(387),l=r(7190);var c={};function h(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(i?"%"+i:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,i=a.useRouter(),u=o.default.useMemo((function(){var t=n(s.resolveHref(i,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?s.resolveHref(i,e.as):o||r}}),[i,e.href,e.as]),d=u.href,f=u.as,p=e.children,x=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,g=n(l.useIntersection({rootMargin:"200px"}),2),y=g[0],w=g[1],k=o.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);o.default.useEffect((function(){var e=w&&r&&s.isLocalURL(d),t="undefined"!==typeof j?j:i&&i.locale,n=c[d+"%"+f+(t?"%"+t:"")];e&&!n&&h(i,d,f,{locale:t})}),[f,d,w,j,r,i]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](r,n,{shallow:o,locale:l,scroll:a}))}(e,i,d,f,x,m,v,j)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),h(i,d,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof j?j:i&&i.locale,L=i&&i.isLocaleDomain&&s.getDomainLocale(f,_,i&&i.locales,i&&i.domainLocales);N.href=L||s.addBasePath(s.addLocale(f,_,i&&i.defaultLocale))}return o.default.cloneElement(t,N)};t.default=u},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(l){i=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,l=i.useRef(),c=n(i.useState(!1),2),h=c[0],u=c[1],d=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||h||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,h]);return i.useEffect((function(){if(!s&&!h){var e=o.requestIdleCallback((function(){return u(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h]),[d,h]};var i=r(7294),o=r(9311),s="undefined"!==typeof IntersectionObserver;var a=new Map},9452:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),i=(r(7294),r(1884)),o=r(8807),s=r(6978),a=r(7197),l=r(3485),c=r(5380),h=(0,n.jsx)("p",{children:"There are so many ways to define a color when talking with a computer. Let's take a tour and see what's the most appropriate in a dataviz point of view."});'\n<canvas style="width:200px; height:200px;" width="100px" height="100px">\n'.trim(),'\n<canvas style="width:300px; height:300px;" width="100px" height="100px">\n'.trim(),'\n<canvas style="width:100px; height:100px;" width="200px" height="200px">\n'.trim(),"\nreturn(\n  <div ref={chartRef}>\n    <MyChartComponent\n      height={chartSize.height}\n      width={chartSize.width}\n  </div>\n)\n".trim();function u(){return(0,n.jsxs)(i.A,{title:"What is a color",seoDescription:"There are many ways to define a color when talking with a computer. Let's take a tour.",children:[(0,n.jsx)(o.Z,{title:"What is a color",description:h}),(0,n.jsxs)(l.U,{title:"Color on screen",startOpen:!0,children:[(0,n.jsx)("p",{children:"A computer screen is made of thousands of pixels."}),(0,n.jsx)("p",{children:"Each pixel generates three colors of light (red, green, and blue) and the different colors we see are due to different combinations and intensities of these three primary colors."}),(0,n.jsx)("p",{children:"red, green and blue are the primary colors."})]}),(0,n.jsx)(l.U,{title:"The RGB color model",startOpen:!0,children:(0,n.jsx)("p",{children:"The color information for each pixel is typically stored in a 24-bit format: 8 bit per primary color. This is 2^8 = 256 possibilities for each primary color. This means more than 16M possible color variations for each pixel (256^3)!"})}),(0,n.jsxs)(l.U,{title:"The HSV, HSL and HSB color model",startOpen:!0,children:[(0,n.jsx)("p",{children:"That's the famous color wheel you see in every color picker!"}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("img",{src:"/img/color-picked-me.png",style:{maxWidth:400}}),(0,n.jsxs)(c.Y,{children:["On ",(0,n.jsx)("a",{href:"https://colorpicker.me",children:"colorpicker.me"})," you can define a color using its hue (vertical bar), its saturation (x axis of the square) and its lightness (vertical axis)"]})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"HSL"})," stands for hue, saturation, lightness"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"HSV"})," and ",(0,n.jsx)("b",{children:"HSB"})," are the same and stand for hue, saturation, value or hue, saturation, brightness respectively."]}),(0,n.jsx)("p",{children:"But what does it even mean?"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Hue: the initial color. Between 0 and 360."}),(0,n.jsx)("li",{children:"Saturation: when closer to 100, the color shines. represents how \u201ccolorful\u201d the color is. Intensity. Purity. When 0, you get grey"}),(0,n.jsx)("li",{children:"Lighness, Value, Brightness"})]}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("img",{src:"/img/hsv-explanation.png",style:{maxWidth:400}}),(0,n.jsx)(c.Y,{children:"The color cylinder of HSV"})]}),(0,n.jsx)("p",{children:"There are an alternative to the RGB color model to more closely align with the way human vision perceives color-making attributes"}),(0,n.jsxs)("p",{children:["Indeed, it allows us to describe meaningful relationships between colors. For instance, to create 2 complementary colors you can select 2 colors on the opposite side of the wheel, with same saturation and brithness. Same principle for analogous, monochrome palette and other"," ",(0,n.jsx)("a",{href:"https://www.canva.com/colors/color-wheel/",children:"famous combinations"}),"."]}),(0,n.jsxs)("p",{children:["HSV is"," ",(0,n.jsx)("a",{href:"https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/",children:"criticized"}),". This is because in HSV the V (value) is just a measure for the physical lightness of color, but not for the perceived brightness. So 2 colors with the same value are not perceive with the same lightness by the Human Eye. There is a hue-dependency of brightness in this model."]}),(0,n.jsx)("p",{children:"Note: pastel color = high lightness and low saturation."})]}),(0,n.jsxs)(l.U,{title:"The CIELAB color model",startOpen:!0,children:[(0,n.jsx)("p",{children:"Try to fix this difference between computer and human perception."}),(0,n.jsx)("p",{children:"unintuitive to use to generate colors"}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("img",{src:"/img/cielab-color-space.png",style:{maxWidth:400}}),(0,n.jsx)(c.Y,{children:"The cielab color space"})]})]}),(0,n.jsx)(l.U,{title:"The HCL color model",startOpen:!0,children:(0,n.jsx)("p",{children:"Stands for Hue-Chroma-Lightness. A cylindrical transformation of CIE Lab*"})}),(0,n.jsx)(l.U,{title:"The luminance of a color",startOpen:!0,children:(0,n.jsx)("p",{children:"TODO"})}),(0,n.jsxs)(l.U,{title:"Contrast ratio",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The"," ",(0,n.jsx)("a",{href:"https://www.w3.org/TR/WCAG/",children:"Web Content Accessibility Guidelines"})," ","(WCAG) include convenient quantitative recommendations for making a color accessible based on the minimum acceptable contrast of foreground against background."]}),(0,n.jsx)("p",{children:"Basically, you can compare the luminance of 2 colors and compute their contrast ratio. The luminance is computed using the amount of red, green and blue in it."}),(0,n.jsxs)("p",{children:["To see the exact formulas and compute the contrast ratio between 2 colors, see"," ",(0,n.jsx)("a",{href:"https://observablehq.com/@mbostock/wcag-contrast-ratio",children:"this notebook"})," ","by Mike Bostock"]}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("img",{src:"/img/contrast-ratio-calculator.png",style:{maxWidth:600}}),(0,n.jsxs)(c.Y,{children:["A"," ",(0,n.jsx)("a",{href:"https://observablehq.com/@mbostock/wcag-contrast-ratio",children:"tool"})," ","to compute the contrast ratio between 2 colors."]})]}),(0,n.jsx)("p",{children:"Note: the notebook provides the d3 code to compute this contrast ratio."})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,n.jsx)(a.Z,{chartFamily:"ranking"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(s.Z,{})]})}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[358,9774,2888,179],(function(){return t=3039,e(e.s=t);var t}));var t=e.O();_N_E=t}]);