(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1406],{5924:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viz-from-the-future",function(){return r(8069)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(5893),i=r(7294),o=function(e){var t=e.startOpen,r=e.title,o=e.children,a=e.toc,l=(0,i.useState)(t),s=l[0],c=l[1],u=s?"max-h-full":"max-h-0",f=s?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!s)},id:a,children:[s?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+u+" "+f,children:o})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),i=(r(7294),r(6761)),o=r(1878),a=r(1664),l=o.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function s(e){var t=e.chartLogo,r=e.caption,o=e.link,s=e.isAvailable,u=e.size,f=l.includes(t),d=s?"opacity-100":"opacity-20",h=s?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(a.default,{href:s?o:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:u,height:u},className:"relative mr-2 rounded-full "+d+" "+h,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(i.Z,{chartLogo:t})}),f?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:u})}):(0,n.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,n.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+d,children:r})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},u=r(3414),f={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function d(e){var t=e.chartFamily,r=o.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,u.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(s,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===f||void 0===f?void 0:f[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5893),i=r(7294),o=r(217),a=r(4893),l=r(5380),s=r(7975),c=function(e){var t=e.VizComponent,r=e.vizName,c=e.height,u=void 0===c?400:c,f=e.maxWidth,d=void 0===f?800:f,h=e.caption,v=(0,i.useState)(!1),p=v[0],x=v[1],m=(0,i.useRef)(null),w=(0,o.B)(m);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,n.jsx)(s.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(a.z,{size:"sm",onClick:function(){return x(!p)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,n.jsx)("div",{style:{height:u,width:"100%",maxWidth:d},ref:m,children:(0,n.jsx)(t,{height:u,width:w.width})})}),(0,n.jsx)(l.Y,{children:h}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(a.z,{size:"sm",onClick:function(){return x(!p)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(5893),i=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(5893),i=function(e){var t=e.children,r=e.onClick,i=e.isFilled,o=e.size,a=void 0===o?"md":o,l="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===a&&(l+="text-sm py-1 px-2"),"md"===a&&(l+="text-md py-2 px-4"),l+=i?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:l,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(5893),i=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,n.useState)(t),i=r[0],o=r[1],a=function(){o(t())};return(0,n.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),(0,n.useLayoutEffect)((function(){a()}),[]),i}},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){i=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},a=r(6273),l=r(387),s=r(7190);var c={};function u(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(i?"%"+i:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,i=l.useRouter(),f=o.default.useMemo((function(){var t=n(a.resolveHref(i,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?a.resolveHref(i,e.as):o||r}}),[i,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,x=e.shallow,m=e.scroll,w=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var g=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,y=n(s.useIntersection({rootMargin:"200px"}),2),j=y[0],b=y[1],N=o.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);o.default.useEffect((function(){var e=b&&r&&a.isLocalURL(d),t="undefined"!==typeof w?w:i&&i.locale,n=c[d+"%"+h+(t?"%"+t:"")];e&&!n&&u(i,d,h,{locale:t})}),[h,d,b,w,r,i]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[i?"replace":"push"](r,n,{shallow:o,locale:s,scroll:l}))}(e,i,d,h,p,x,m,w)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var z="undefined"!==typeof w?w:i&&i.locale,L=i&&i.isLocaleDomain&&a.getDomainLocale(h,z,i&&i.locales,i&&i.domainLocales);k.href=L||a.addBasePath(a.addLocale(h,z,i&&i.defaultLocale))}return o.default.cloneElement(t,k)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){i=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,s=i.useRef(),c=n(i.useState(!1),2),u=c[0],f=c[1],d=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||u||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return i.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=r(7294),o=r(9311),a="undefined"!==typeof IntersectionObserver;var l=new Map},8069:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),i=(r(7294),r(9281)),o=r(4386),a=r(6978),l=r(33),s=r(7197),c=r(3485),u=r(7639),f=r.n(u),d=function(e){var t=e.width,r=e.height;return(0,n.jsx)("div",{style:{width:t,height:r},className:f().container,children:(0,n.jsx)("div",{className:f().glowCircle})})},h=function(e){var t=e.width,r=void 0===t?700:t,i=e.height,o=void 0===i?400:i;return(0,n.jsx)(d,{width:r,height:o})},v=(0,n.jsx)("p",{children:"Building a viz from the future?"});"\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n\n}\n".trim();function p(){return(0,n.jsxs)(i.A,{title:"How to build a responsive chart with React and d3.js",seoDescription:"How to build a responsive chart with React and d3.js",children:[(0,n.jsx)(o.Z,{title:"A viz from the future",description:v}),(0,n.jsxs)(c.U,{title:"What is a viz from the future?",startOpen:!0,children:[(0,n.jsx)("p",{children:"You know minority report?"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://www.behance.net/gallery/92170213/FUI-HUD-Screens",children:"This video"})," ","is what I mean"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Dark mode"}),(0,n.jsx)("li",{children:"Flashy, Neon color"}),(0,n.jsx)("li",{children:"Glowing shapes"}),(0,n.jsx)("li",{children:"Gradient"}),(0,n.jsx)("li",{children:"Animation"})]})]}),(0,n.jsxs)(c.U,{title:"Glowing",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Can be done with overlapping ",(0,n.jsx)("code",{children:"box-shadow"}),". How to do it in svg? In canvas?"]}),(0,n.jsx)(l.$,{vizName:"FuturisticColor",VizComponent:h,maxWidth:600,height:400})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,n.jsx)(s.Z,{chartFamily:"general"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(a.Z,{})]})}},7639:function(e){e.exports={container:"shapes_container__kWKGI",glowCircle:"shapes_glowCircle__E0Ci_"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[7045,9774,2888,179],(function(){return t=5924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);