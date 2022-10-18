(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5764],{3820:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lollipop-plot",function(){return i(6120)}])},3485:function(e,t,i){"use strict";i.d(t,{U:function(){return a}});var r=i(5893),n=i(7294),a=function(e){var t=e.startOpen,i=e.title,a=e.children,l=e.toc,s=(0,n.useState)(t),o=s[0],c=s[1],d=o?"max-h-full":"max-h-0",u=o?"overflow-visible":"overflow-hidden";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!o)},id:l,children:[o?(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),i]}),(0,r.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+u,children:a})]})}},7197:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var r=i(5893),n=(i(7294),i(6761)),a=i(1878),l=i(1664),s=a.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var t=e.chartLogo,i=e.caption,a=e.link,o=e.isAvailable,d=e.size,u=s.includes(t),h=o?"opacity-100":"opacity-20",m=o?"cursor-pointer":"cursor-not-allowed";return(0,r.jsx)(l.default,{href:o?a:"subscribe",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+h+" "+m,children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(n.Z,{chartLogo:t})}),u?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(c,{size:d})}):(0,r.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,r.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:i})]})})}var c=function(e){var t=e.size;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=i(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(e){var t=e.chartFamily,i=a.c.filter((function(e){return e.family===t})).map((function(e,t){var i=(0,d.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(o,{link:i,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},33:function(e,t,i){"use strict";i.d(t,{$:function(){return c}});var r=i(5893),n=i(7294),a=i(217),l=i(4893),s=i(5380),o=i(7975),c=function(e){var t=e.VizComponent,i=e.vizName,c=e.height,d=void 0===c?400:c,u=e.maxWidth,h=void 0===u?800:u,m=e.caption,f=(0,n.useState)(!1),x=f[0],p=f[1],v=(0,n.useRef)(null),j=(0,a.B)(v);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,r.jsx)(o.X,{vizName:i})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(l.z,{size:"sm",onClick:function(){return p(!x)},children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,r.jsx)("div",{style:{height:d,width:"100%",maxWidth:h},ref:v,children:(0,r.jsx)(t,{height:d,width:j.width})})}),(0,r.jsx)(s.Y,{children:m}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(l.z,{size:"sm",onClick:function(){return p(!x)},children:"Show code"})})]})})}},7975:function(e,t,i){"use strict";i.d(t,{X:function(){return n}});var r=i(5893),n=(i(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,r.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},3440:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var r=i(5893),n=(i(7294),i(1878)),a=i(1687),l=function(e){var t=e.imgLink,i=e.height,n=e.opacity,a=e.children;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{style:{backgroundImage:"url("+t+")",height:i,backgroundAttachment:"fixed",opacity:n,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:a})]})};function s(e){var t,i=e.chartId,s=(null===(t=n.c.find((function(e){return e.id===i})))||void 0===t?void 0:t.label)||"chart";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"inspiration",children:"More inspiration"}),(0,r.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,r.jsx)("span",{children:s}),", note that"," ",(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,r.jsx)("div",{className:"border mb-10",children:(0,r.jsx)(l,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,r.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,r.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,r.jsxs)("p",{className:"text-center text-sm",children:[(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,r.jsx)("span",{children:s})," ","looks good!"]}),(0,r.jsx)(a.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},4893:function(e,t,i){"use strict";i.d(t,{z:function(){return n}});var r=i(5893),n=function(e){var t=e.children,i=e.onClick,n=e.isFilled,a=e.size,l=void 0===a?"md":a,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===l&&(s+="text-sm py-1 px-2"),"md"===l&&(s+="text-md py-2 px-4"),s+=n?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,r.jsx)("button",{className:s,onClick:i,children:t})}},5380:function(e,t,i){"use strict";i.d(t,{Y:function(){return n}});var r=i(5893),n=function(e){var t=e.children;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,i){"use strict";i.d(t,{d:function(){return s}});var r=i(5893),n=i(4725),a=i.n(n),l=i(7294),s=function(e){var t=e.code,i=(0,l.useRef)(null);return(0,l.useEffect)((function(){i.current&&a().highlightElement(i.current)}),[i,t]),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:i,className:"p-0 language-js",children:t})})})}},217:function(e,t,i){"use strict";i.d(t,{B:function(){return n}});var r=i(7294),n=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},i=(0,r.useState)(t),n=i[0],a=i[1],l=function(){a(t())};return(0,r.useEffect)((function(){return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}}),[]),(0,r.useLayoutEffect)((function(){l()}),[]),n}},6120:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var r=i(5893),n=i(7294),a=i(9281),l=i(4386),s=i(7197),o=i(6978),c=i(3485),d=i(8193),u=i(33),h=i(1664),m=i(3440),f=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],x=i(2535);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],r=!0,n=!1,a=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(i.push(l.value),!t||i.length!==t);r=!0);}catch(o){n=!0,a=o}finally{try{r||null==s.return||s.return()}finally{if(n)throw a}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v={top:30,right:30,bottom:30,left:80},j=function(e){var t=e.width,i=e.height,a=e.data,l=t-v.right-v.left,s=i-v.top-v.bottom,o=a.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),c=(0,n.useMemo)((function(){return x.tiA().domain(o).range([0,s])}),[a,i]),d=(0,n.useMemo)((function(){var e=p(x.Wem(a.map((function(e){return e.value}))),2),t=(e[0],e[1]);return x.BYU().domain([0,t||10]).range([0,l])}),[a,t]),u=a.map((function(e,t){var i=c(e.name)+c.bandwidth()/2;return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:d(0),y1:i,y2:i,x2:d(e.value),opacity:.7,stroke:"#9d174d",strokeWidth:1}),(0,r.jsx)("circle",{cy:i,cx:d(e.value),opacity:.7,stroke:"#9d174d",fill:"#9d174d",strokeWidth:1,r:3}),(0,r.jsx)("text",{x:d(0)-7,y:i,textAnchor:"end",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)})),h=d.ticks(5).slice(1).map((function(e,t){return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:d(e),x2:d(e),y1:0,y2:s,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:d(e),y:s+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:i,children:(0,r.jsxs)("g",{width:l,height:s,transform:"translate(".concat([v.left,v.top].join(","),")"),children:[h,u]})})})},g=function(e){var t=e.width,i=void 0===t?700:t,n=e.height,a=void 0===n?400:n;return(0,r.jsx)(j,{data:f,width:i,height:a})},w=(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/lollipop.html",children:"lollipop plot"})," ","is a variation of the more common ",(0,r.jsx)(h.default,{href:"barplot",children:"barplot"}),". This section describes how to build lollipop charts with d3.js in a react context. It starts very basic and then explains how to add more complex features like windowing, dark mode and more."]}),y='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim();function b(){return(0,r.jsxs)(a.A,{title:"Lollipop plot with React",seoDescription:"How to build a lollipop plot with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(l.Z,{title:"Lollipop plot",description:w,chartType:"lollipop"}),(0,r.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,r.jsxs)("p",{children:["The dataset required to build a lollipop is usually an array where each item is an object providing the ",(0,r.jsx)("code",{children:"name"})," and the"," ",(0,r.jsx)("code",{children:"value"})," of the group."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example"}),(0,r.jsx)(d.d,{code:y}),(0,r.jsxs)("p",{children:["Note: if your data is in ",(0,r.jsx)("code",{children:".csv"})," formart, you can translate it thanks to the ",(0,r.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]})]}),(0,r.jsxs)(c.U,{title:"Most basic lollipop",startOpen:!0,children:[(0,r.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/barplot",children:"d3-only examples"}),"."]}),(0,r.jsx)(u.$,{vizName:"LollipopBasic",VizComponent:g,height:400,maxWidth:600,caption:"Most basic Lollipop built with d3.js for scales, and react for rendering"})]}),(0,r.jsx)(m.Z,{chartId:"lollipop"}),(0,r.jsx)(c.U,{title:"Vertical barplot",startOpen:!0,children:(0,r.jsx)("p",{children:"The vertical option is less common since it makes is much harder to read the labels. But if you really need it, it is just a matter of swaping the X and Y axes of the previous example. Here is a working version."})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(s.Z,{chartFamily:"partOfAWhole"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(o.Z,{})]})}}},function(e){e.O(0,[3888,5660,7045,9774,2888,179],(function(){return t=3820,e(e.s=t);var t}));var t=e.O();_N_E=t}]);