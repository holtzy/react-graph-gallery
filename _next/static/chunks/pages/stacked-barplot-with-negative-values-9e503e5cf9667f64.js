(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9216],{8703:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-barplot-with-negative-values",function(){return r(8227)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});var i=r(5893),a=r(7294),n=function(e){var t=e.startOpen,r=e.title,n=e.children,s=e.toc,o=(0,a.useState)(t),l=o[0],c=o[1],h=l?"max-h-full":"max-h-0",d=l?"overflow-visible":"overflow-hidden";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},id:s,children:[l?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+h+" "+d,children:n})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893),a=(r(7294),r(6761)),n=r(1878),s=r(1664),o=n.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function l(e){var t=e.chartLogo,r=e.caption,n=e.link,l=e.isAvailable,h=e.size,d=o.includes(t),u=l?"opacity-100":"opacity-20",p=l?"cursor-pointer":"cursor-not-allowed";return(0,i.jsx)(s.default,{href:l?n:"subscribe",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:h,height:h},className:"relative mr-2 rounded-full "+u+" "+p,children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(a.Z,{chartLogo:t})}),d?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(c,{size:h})}):(0,i.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,i.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}var c=function(e){var t=e.size;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},h=r(3414),d={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var t=e.chartFamily,r=n.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,h.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(l,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===d||void 0===d?void 0:d[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),a=r(7294),n=r(217),s=r(4893),o=r(5380),l=r(7975),c=function(e){var t=e.VizComponent,r=e.vizName,c=e.height,h=void 0===c?400:c,d=e.maxWidth,u=void 0===d?800:d,p=e.caption,g=(0,a.useState)(!1),x=g[0],m=g[1],f=(0,a.useRef)(null),v=(0,n.B)(f);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,i.jsx)(l.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return m(!x)},children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,i.jsx)("div",{style:{height:h,width:"100%",maxWidth:u},ref:f,children:(0,i.jsx)(t,{height:h,width:v.width})})}),(0,i.jsx)(o.Y,{children:p}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return m(!x)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return a}});var i=r(5893),a=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,i.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var i=r(5893),a=function(e){var t=e.children,r=e.onClick,a=e.isFilled,n=e.size,s=void 0===n?"md":n,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(o+="text-sm py-1 px-2"),"md"===s&&(o+="text-md py-2 px-4"),o+=a?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:o,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return a}});var i=r(5893),a=function(e){var t=e.children;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return a}});var i=r(7294),a=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,i.useState)(t),a=r[0],n=r[1],s=function(){n(t())};return(0,i.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,i.useLayoutEffect)((function(){s()}),[]),a}},8227:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var i=r(5893),a=r(7294),n=r(9281),s=r(4386),o=r(6978),l=r(7197),c=r(3485),h=r(5380),d=r(33),u=r(1664),p=[{x:"Jan",groupA:12,groupB:19,groupC:9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],g=r(2535),x={top:30,right:30,bottom:50,left:50},m=function(e){var t=e.width,r=e.height,n=e.data,s=(0,a.useRef)(null),o=t-x.right-x.left,l=r-x.top-x.bottom,c=n.map((function(e){return String(e.x)})),h=g.knu().keys(["groupA","groupB","groupC","groupD"]).order(g.Qxt)(n),d=(0,a.useMemo)((function(){return g.BYU().domain([0,200]).range([l,0])}),[n,r]),u=(0,a.useMemo)((function(){return g.tiA().domain(c).range([0,o]).padding(.05)}),[n,t]),p=g.PKp().domain(c).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,a.useLayoutEffect)((function(){var e=g.Ys(s.current);e.selectAll("*").remove();var t=g.LLu(u);e.append("g").attr("transform","translate(0,"+l+")").call(t);var r=g.y4O(d);e.append("g").call(r)}),[u,d,l]);var m=h.map((function(e,t){return(0,i.jsx)("g",{children:e.map((function(t,r){return(0,i.jsx)("rect",{x:u(t.data.x),y:d(t[1]),height:d(t[0])-d(t[1]),width:u.bandwidth(),fill:p(e.key),opacity:.9},r)}))},t)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:o,height:l,transform:"translate(".concat([x.left,x.top].join(","),")"),children:m}),(0,i.jsx)("g",{width:o,height:l,ref:s,transform:"translate(".concat([x.left,x.top].join(","),")")})]})})},f=function(e){var t=e.width,r=void 0===t?700:t,a=e.height,n=void 0===a?400:a;return(0,i.jsx)(m,{data:p,width:r,height:n})},v=[{x:"Jan",groupA:12,groupB:19,groupC:-9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:-13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:-24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:-16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:-18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:-14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:-14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],j={top:30,right:30,bottom:50,left:50},w=function(e){var t=e.width,r=e.height,n=e.data,s=(0,a.useRef)(null),o=t-j.right-j.left,l=r-j.top-j.bottom,c=n.map((function(e){return String(e.x)})),h=g.knu().keys(["groupA","groupB","groupC","groupD"]).order(g.Qxt).offset(g.W$j)(n),d=(0,a.useMemo)((function(){return g.BYU().domain([-50,200]).range([l,0])}),[n,r]),u=(0,a.useMemo)((function(){return g.tiA().domain(c).range([0,o]).padding(.05)}),[n,t]),p=g.PKp().domain(c).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,a.useLayoutEffect)((function(){var e=g.Ys(s.current);e.selectAll("*").remove();var t=g.LLu(u);e.append("g").attr("transform","translate(0,"+l+")").call(t);var r=g.y4O(d);e.append("g").call(r)}),[u,d,l]);var x=h.map((function(e,t){return(0,i.jsx)("g",{children:e.map((function(t,r){return(0,i.jsx)("rect",{x:u(t.data.x),y:d(t[1]),height:d(t[0])-d(t[1]),width:u.bandwidth(),fill:p(e.key),opacity:1},r)}))},t)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:o,height:l,transform:"translate(".concat([j.left,j.top].join(","),")"),children:x}),(0,i.jsx)("g",{width:o,height:l,ref:s,transform:"translate(".concat([j.left,j.top].join(","),")")})]})})},b=function(e){var t=e.width,r=void 0===t?700:t,a=e.height,n=void 0===a?400:a;return(0,i.jsx)(w,{data:v,width:r,height:n})},y=[{x:"Jan",groupA:12,groupB:19,groupC:-9,groupD:2},{x:"Feb",groupA:16,groupB:21,groupC:-13,groupD:8},{x:"Mar",groupA:23,groupB:21,groupC:-24,groupD:9},{x:"Apr",groupA:38,groupB:34,groupC:25,groupD:23},{x:"May",groupA:42,groupB:46,groupC:34,groupD:26},{x:"Jun",groupA:34,groupB:42,groupC:32,groupD:26},{x:"Jul",groupA:2,groupB:34,groupC:21,groupD:27},{x:"Aug",groupA:21,groupB:32,groupC:-16,groupD:18},{x:"Sept",groupA:18,groupB:31,groupC:-18,groupD:12},{x:"Oct",groupA:12,groupB:21,groupC:-14,groupD:10},{x:"Nov",groupA:12,groupB:18,groupC:-14,groupD:10},{x:"Dec",groupA:2,groupB:8,groupC:4,groupD:10}],k={top:30,right:30,bottom:50,left:50},A=function(e){var t=e.width,r=e.height,n=e.data,s=(0,a.useRef)(null),o=t-k.right-k.left,l=r-k.top-k.bottom,c=n.map((function(e){return String(e.x)})),h=g.knu().keys(["groupA","groupB","groupC","groupD"]).order(g.Qxt)(n),d=(0,a.useMemo)((function(){return g.BYU().domain([-50,200]).range([l,0])}),[n,r]),u=(0,a.useMemo)((function(){return g.tiA().domain(c).range([0,o]).padding(.2)}),[n,t]),p=g.PKp().domain(c).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);(0,a.useLayoutEffect)((function(){var e=g.Ys(s.current);e.selectAll("*").remove();var t=g.LLu(u);e.append("g").attr("transform","translate(0,"+l+")").call(t);var r=g.y4O(d);e.append("g").call(r)}),[u,d,l]);var x=h.map((function(e,t){return(0,i.jsx)("g",{children:e.map((function(t,r){var a=t[0]>t[1];return(0,i.jsx)("rect",{x:u(t.data.x),y:d(a?t[0]:t[1]),height:a?d(t[1])-d(t[0]):d(t[0])-d(t[1]),width:u.bandwidth(),fill:p(e.key),opacity:1},r)}))},t)}));return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsx)("g",{width:o,height:l,transform:"translate(".concat([k.left,k.top].join(","),")"),children:x}),(0,i.jsx)("g",{width:o,height:l,ref:s,transform:"translate(".concat([k.left,k.top].join(","),")")})]})})},N=function(e){var t=e.width,r=void 0===t?700:t,a=e.height,n=void 0===a?400:a;return(0,i.jsx)(A,{data:y,width:r,height:n})},C=(0,i.jsxs)("p",{children:["Drawing a"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"stacked barplot"})," ","sounds like pretty basic task for somebody into dataviz. But it gets surprisingly tricky once the dataset includes ",(0,i.jsx)("b",{children:"negative values"}),". This post explains how to deal with it, suggesting several options coming together with some reproducible code examples."]});'\n<canvas style="width:200px; height:200px;" width="100px" height="100px">\n'.trim(),'\n<canvas style="width:300px; height:300px;" width="100px" height="100px">\n'.trim(),'\n<canvas style="width:100px; height:100px;" width="200px" height="200px">\n'.trim(),"\nreturn(\n  <div ref={chartRef}>\n    <MyChartComponent\n      height={chartSize.height}\n      width={chartSize.width}\n  </div>\n)\n".trim();function B(){return(0,i.jsxs)(n.A,{title:"Dealing with negative values on a stacked barplot",seoDescription:"How to deal with negative values on stacked barplot. A post describing the pros and cons of the 2 main options, together with some examples with d3.js code.",children:[(0,i.jsx)(s.Z,{title:"Dealing with negative values on a stacked barplot",description:C}),(0,i.jsxs)(c.U,{title:"\ud83c\udf54 Easy life: stacked barplot with positive values",startOpen:!0,children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-8",children:[(0,i.jsxs)("div",{className:"col-span-4",children:[(0,i.jsxs)("p",{children:["Let's consider a company that has 3 employees: ",(0,i.jsx)("code",{children:"a"}),","," ",(0,i.jsx)("code",{children:"b"})," and ",(0,i.jsx)("code",{children:"c"}),". Each month those employees sell umbrellas and make money."]}),(0,i.jsx)("p",{children:"In January, they made 1, 1 and 2 dollars respectively. It's pretty easy to represent those sales as a stacked barplot!"}),(0,i.jsx)("p",{children:"There is even a bonus! The total height of those bars is 4. So is the value of the stack on the Y axis. We now know what's the total revenue of the company \ud83c\udf89!"})]}),(0,i.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/stacked-barplot-explanation-1.png"}),(0,i.jsx)(h.Y,{children:"Stacking positive values is straightforward"})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Now let's follow the same process for the 12 months of the year. That makes a stacked area barplot built with ",(0,i.jsx)("code",{children:"react"})," and"," ",(0,i.jsx)("code",{children:"d3.js"}),". If you need explanations for the code, please refer to the"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_stacked_basicWide.html",children:"d3.js gallery"})," ","or to the ",(0,i.jsx)(u.default,{href:"barplot",children:"barplot section"})," of the react gallery."]}),(0,i.jsx)("br",{}),(0,i.jsx)(d.$,{vizName:"BarplotStackedBasic",VizComponent:f,height:400,maxWidth:600,caption:"A stacked area chart with positive values only. Built with react and d3.js"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"That's the end of the easy part. Now, let's say that sometimes employees spend more money than what they make. We now have some negative values in the dataset \ud83d\ude33. How can we deal with it?"})]}),(0,i.jsxs)(c.U,{title:"1\ufe0f\u20e3 Stacked barplot with negative values: the diverging strategy",startOpen:!0,children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-8",children:[(0,i.jsxs)("div",{className:"col-span-4",children:[(0,i.jsxs)("p",{children:["We are in January but this time, employee ",(0,i.jsx)("code",{children:"A"})," lost 1$! \ud83d\ude25"]}),(0,i.jsx)("p",{children:"To represent this on the stack, we can add all the positive values on top of the chart, and all the negative ones below the 0 axis."}),(0,i.jsx)("p",{children:"It is still very easy to see how much each employee made in a glimpse!"}),(0,i.jsxs)("p",{children:["However, it is now ",(0,i.jsx)("b",{children:"impossible"})," to know what's the company revenue! Indeed, the total height of the bars is ",(0,i.jsx)("code",{children:"4"}),", the value on the y axis is ",(0,i.jsx)("code",{children:"3"}),", but the real revenue is 1 + 2 - 1 = ",(0,i.jsx)("code",{children:"2"}),"!"]})]}),(0,i.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/stacked-barplot-explanation-2.png"}),(0,i.jsx)(h.Y,{children:"Stacking with negative values with all negative values below the 0 axis"})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Using almost the same code we can build the stacked barplot including those negative values. Note that when stacking the data with the"," ",(0,i.jsx)("code",{children:"stack()"})," function of d3, the specific"," ",(0,i.jsx)("code",{children:"stackOffsetDiverging"})," offset parameter must be passed, handling all the work for us (",(0,i.jsx)("a",{href:"https://github.com/d3/d3-shape#stack-offsets",children:"doc"}),")."]}),(0,i.jsx)("br",{}),(0,i.jsx)(d.$,{vizName:"BarplotStackedNegativeDivergingBasic",VizComponent:b,height:400,maxWidth:700,caption:"With the diverging strategy, all negative values are located under the 0 baseline."}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Let's recap the pros and cons of this diverging option:"}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-green-400 rounded-md text-white w-16 text-md",children:"Pros"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Easy to read the value of each item"}),(0,i.jsx)("li",{children:"Obvious what's negative and what's positive"})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-red-400 rounded-md text-white w-16 text-md",children:"Cons"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Impossible to know the total value of each stack"}),(0,i.jsx)("li",{children:"A series can jump from the bottom to the top of the chart and is thus hard to follow"})]})]})]})]}),(0,i.jsxs)(c.U,{title:"2\ufe0f\u20e3 Stacked barplot with negative values: the overlapping strategy",startOpen:!0,children:[(0,i.jsxs)("div",{className:"col-span-4",children:[(0,i.jsx)("p",{children:"Another strategy can be applied to stack the items including negative values."}),(0,i.jsx)("p",{children:"Items can be added one by one, with rectangles going up when values are positive and going down when values are negative."})]}),(0,i.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center",children:[(0,i.jsx)("img",{src:"/img/stacked-barplot-explanation-4.png"}),(0,i.jsx)(h.Y,{children:"Stacking items by overlapping the items on top of each other."})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"It's important to understand that here, the item order is important. We will get very different results depending on the order since not all groups are visible."}),(0,i.jsx)("br",{}),(0,i.jsx)(d.$,{vizName:"BarplotStackedNegativeOverlappingDemo",VizComponent:N,height:400,maxWidth:700,caption:"With the overlapping strategy items are drawn successively, going up and down and overlapping if necessary"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Let's recap the pros and cons of this diverging option:"}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-green-400 rounded-md text-white w-16 text-md",children:"Pros"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Depending on the group order, the Y value can reflect the sum of the items. But it's not guarantee."})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"px-2 bg-red-400 rounded-md text-white w-16 text-md",children:"Cons"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Groups overlap each other. Information is hidden. Chart is unreadable"})})]})]})]}),(0,i.jsxs)(c.U,{title:"Conclusion",startOpen:!0,children:[(0,i.jsxs)("p",{children:["In my opinion the first option (",(0,i.jsx)("b",{children:"diverging"}),") makes much more sense than the second one (",(0,i.jsx)("b",{children:"overlapping"}),"). The cons are very limited:"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"It is true that the net total value is not available. But if that's what interests you, you don't have to split the dataset by subgroups, just create a line chart with a single line!"}),(0,i.jsx)("li",{children:"Having a group flipping from top to bottom is indeed annoying. However, the hover effect that is included allows to quickly see what happens for a specific group."})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"It's also important to note that most dataviz tools choosed this approach. Here is an example using the same dataset using the ggplot2 library."}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8 ",children:[(0,i.jsx)("img",{src:"/img/stacked-barchart-ggplot2.png"}),(0,i.jsx)("img",{src:"/img/stacked-barchart-datawrapper.png"})]}),(0,i.jsx)("div",{className:"w-100 flex flex-row justify-center",children:(0,i.jsx)(h.Y,{children:"Same dataset that includes negative values plotted with ggplot2 (left) and data wrapper (right)"})}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Last but not least, I really like this example by chartio that fix the non available total issue by adding a line on top of the stacked barchart to show the total:"}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:"/img/stacked-barchart-chartio.png"}),(0,i.jsx)("div",{className:"w-100 flex flex-row justify-center",children:(0,i.jsx)(h.Y,{children:"Chartio displays the total of each timestamp using a line chart on top of the stacked items."})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,i.jsx)(l.Z,{chartFamily:"ranking"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(o.Z,{})]})}}},function(e){e.O(0,[3888,7045,9774,2888,179],(function(){return t=8703,e(e.s=t);var t}));var t=e.O();_N_E=t}]);