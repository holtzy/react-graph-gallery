(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9954],{70237:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cartogram",function(){return r(42256)}])},61651:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(85893);r(67294);var o=r(49871),s=r(28843),l=r(77522);let n={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function i(e){let{chartFamily:t}=e,r=s.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,l.y)(e.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(o.Z,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==n?void 0:n[t]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},80153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var a=r(85893),o=r(49700),s=r(63476),l=r(67294),n=r(63084),i=r.n(n);function c(){let[e,t]=(0,l.useState)([]),[r,o]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,l.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,a=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),s=t.findIndex(e=>e===a);o(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,a.jsx)("div",{className:i().tableOfContent,children:e.map((t,o)=>(0,a.jsx)("p",{className:r===o?"".concat(i().tocItem," ").concat(i().tocItemActive):i().tocItem,onClick:t=>{t.preventDefault(),e[o].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var h=r(17414),d=r(62594);let u=e=>{let{children:t,title:r,seoDescription:l}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.A,{title:r,seoDescription:l}),(0,a.jsx)(o.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:t}),(0,a.jsx)(d.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(s.Z,{})}),(0,a.jsx)(c,{})]})}},49871:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(85893);r(67294);var o=r(95887),s=r(28843),l=r(41664),n=r.n(l);let i=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:s,isAvailable:l,size:c}=e,d=i.includes(t),u=l?"opacity-100":"opacity-20";return(0,a.jsx)(n(),{href:l?s:"subscribe",className:"no-underline",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(l?"cursor-pointer":"cursor-not-allowed"),children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(o.Z,{chartLogo:t,size:c})}),d?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(h,{size:c})}):(0,a.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,a.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let h=e=>{let{size:t}=e;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},18893:function(e,t,r){"use strict";r.d(t,{H:function(){return o}});var a=r(85893);let o=e=>{let{text:t}=e;return(0,a.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,a.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},42256:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(85893);r(67294);var o=r(80153),s=r(43710),l=r(61651),n=r(41664),i=r.n(n),c=r(18893);let h=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/cartogram.html",children:"cartogram"})," ","is a map in which the geometry of regions is ",(0,a.jsx)("b",{children:"distorted"})," in order to convey the information of an alternate variable."]}),(0,a.jsxs)("p",{children:["It is possible to build a Cartogram react component thanks to a js library called"," ",(0,a.jsx)("a",{href:"https://github.com/shawnbot/topogram/pulls",target:"_blank",children:"topogram"}),". This page provides step-by-step explanations on how to use the library based on a ",(0,a.jsx)("code",{children:"geoJson"})," file with the help of d3.js for manipulating such a data source."]})]});function d(){return(0,a.jsxs)(o.A,{title:"How to build a cartogram with React and D3.",seoDescription:"A step-by-step guide to build your very own Cartogram component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,a.jsx)(s.Z,{title:"Cartogram",description:h,chartType:"cartogram"}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["Probably uses the same as for a"," ",(0,a.jsx)(i(),{href:"choropleth-map",children:"choropleth map"})," or for a bubble map."]}),(0,a.jsx)("h2",{id:"topogram",children:"The Topogram library"}),(0,a.jsxs)("p",{children:["As far as I can tell the best way to create a cartogram in JS is the"," ",(0,a.jsx)("a",{href:"https://github.com/shawnbot/topogram",children:"topogram library"}),"."]}),(0,a.jsxs)("p",{children:["However it looks like there is no easy way to install it using"," ",(0,a.jsx)("code",{children:"npm"}),". The easiest way is probably to clone the repo and create the build, or to copy the content of the"," ",(0,a.jsx)("a",{href:"https://github.com/shawnbot/topogram/blob/master/src/cartogram.js",target:"_blank",children:"cartogram.js"})," ","file."]}),(0,a.jsx)(c.H,{text:"Add example of usage of the topogram lib"}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(l.Z,{chartFamily:"map"}),(0,a.jsx)("div",{className:"mt-20"})]})}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8190,3710,2594,9774,2888,179],function(){return e(e.s=70237)}),_N_E=e.O()}]);