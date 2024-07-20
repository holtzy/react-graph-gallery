(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197],{6141:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(7789)}])},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),s=r(7294),n=r(9973),o=r(8107),l=r(615),a=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,s.useState)(!1),m=(0,s.useRef)(null),p=(0,n.B)(m);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(a.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:p.width})})}),(0,i.jsx)(l.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var i=r(5893);r(7294);let s=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(5893),s=r(9700),n=r(3476),o=r(7294),l=r(3084),a=r.n(l);function c(){let[e,t]=(0,o.useState)([]),[r,s]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,o.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),n=t.findIndex(e=>e===i);s(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:a().tableOfContent,children:e.map((t,s)=>(0,i.jsx)("p",{className:r===s?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:o}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var i=r(5893),s=r(1664),n=r.n(s);let o=e=>{let{children:t,href:r,isFilled:s,size:o="md",isFaded:l}=e,a=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";s?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===o&&(c+="text-sm py-1 px-2 "),"md"===o&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return a?(0,i.jsx)("a",{href:r,target:"_blank",children:d}):(0,i.jsx)(n(),{href:r,passHref:!0,children:d})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893);r(7294);var s=r(8843),n=r(4588),o=r(1859),l=r(6438),a=r(1832),c=r.n(a);let d=e=>{let{direction:t,text:r,children:s}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:s})};var h=r(5887);function u(e){let{title:t,description:r,chartType:a,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,m=s.c.find(e=>e.id===a);return(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),a&&m&&(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==m?void 0:m.logo})})]}),(0,i.jsx)(o.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:r}),a&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),m&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(l.J,{href:(0,n.y)(m.reactURL),size:"sm",children:m.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),x&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(l.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(l.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var i=r(5893);let s=e=>{let{children:t,onClick:r,isFilled:s,size:n="md"}=e,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(o+="text-sm py-1 px-2"),"md"===n&&(o+="text-md py-2 px-4"),s?o+=" bg-reactGallery hover:bg-reactGallery text-white":o+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:o,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return s}});var i=r(5893);let s=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var i=r(7294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,s]=(0,i.useState)(t),n=()=>{s(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,i.useLayoutEffect)(()=>{n()},[]),r}},7789:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var i=r(5893);r(7294);var s=r(153),n=r(9965),o=r(1664),l=r.n(o),a=r(1122),c=r(2428);let d=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"It looks like the place you are looking for does not exist \uD83D\uDE48"}),(0,i.jsxs)("p",{children:["You probably want to go back to the ",(0,i.jsx)(l(),{href:"/",children:"gallery homepage"}),"!"]}),(0,i.jsx)("p",{children:"I'm in a good mood, so here is a chart example for you just in case you are interested in React and d3.js ☀️"})]});function h(){return(0,i.jsxs)(s.A,{title:"How to build a scatter plot with React and D3.",seoDescription:"A step-by-step guide to build your very own scatterplot from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(n.Z,{title:(0,i.jsxs)("h1",{children:["Oh No!"," ",(0,i.jsx)("span",{className:"text-gray-600 font-light hidden sm:inline",children:"(404)"})]}),description:d,chartType:"scatter"}),(0,i.jsx)(a.$,{VizComponent:c.z,vizName:"ScatterplotClimateCrisis",maxWidth:700,height:900,caption:(0,i.jsxs)("span",{children:["Reproduction of a chart originally published by"," ",(0,i.jsx)("a",{href:"https://blog.datawrapper.de/climate-risk-readiness-responsibility/",children:"Data Wrapper"})," ","using react and d3.js."]})}),(0,i.jsx)("div",{className:"mt-20"})]})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}},9008:function(e,t,r){e.exports=r(2636)}},function(e){e.O(0,[1664,8657,645,2428,9774,2888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);