(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3096],{5569:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/circular-barplot",function(){return r(740)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var n=r(5893),a=r(7294),i=function(e){var t=e.startOpen,r=e.title,i=e.children,s=e.toc,l=(0,a.useState)(t),o=l[0],c=l[1],d=o?"max-h-full":"max-h-0",h=o?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!o)},id:s,children:[o?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+h,children:i})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),a=(r(7294),r(6761)),i=r(1878),s=r(1664),l=i.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var t=e.chartLogo,r=e.caption,i=e.link,o=e.isAvailable,d=e.size,h=l.includes(t),u=o?"opacity-100":"opacity-20",m=o?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(s.default,{href:o?i:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+u+" "+m,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(a.Z,{chartLogo:t})}),h?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:d})}):(0,n.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,n.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=r(3414),h={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var t=e.chartFamily,r=i.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,d.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(o,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===h||void 0===h?void 0:h[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5893),a=r(7294),i=r(217),s=r(4893),l=r(5380),o=r(7975),c=function(e){var t=e.VizComponent,r=e.vizName,c=e.height,d=void 0===c?400:c,h=e.maxWidth,u=void 0===h?800:h,m=e.caption,f=(0,a.useState)(!1),x=f[0],p=f[1],v=(0,a.useRef)(null),j=(0,i.B)(v);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,n.jsx)(o.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return p(!x)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,n.jsx)("div",{style:{height:d,width:"100%",maxWidth:u},ref:v,children:(0,n.jsx)(t,{height:d,width:j.width})})}),(0,n.jsx)(l.Y,{children:m}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return p(!x)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return a}});var n=r(5893),a=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},3440:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=(r(7294),r(1878)),i=r(1687),s=function(e){var t=e.imgLink,r=e.height,a=e.opacity,i=e.children;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{style:{backgroundImage:"url("+t+")",height:r,backgroundAttachment:"fixed",opacity:a,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:i})]})};function l(e){var t,r=e.chartId,l=(null===(t=a.c.find((function(e){return e.id===r})))||void 0===t?void 0:t.label)||"chart";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"inspiration",children:"More inspiration"}),(0,n.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,n.jsx)("span",{children:l}),", note that"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,n.jsx)("div",{className:"border mb-10",children:(0,n.jsx)(s,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,n.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,n.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,n.jsxs)("p",{className:"text-center text-sm",children:[(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,n.jsx)("span",{children:l})," ","looks good!"]}),(0,n.jsx)(i.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var n=r(5893),a=function(e){var t=e.children,r=e.onClick,a=e.isFilled,i=e.size,s=void 0===i?"md":i,l="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(l+="text-sm py-1 px-2"),"md"===s&&(l+="text-md py-2 px-4"),l+=a?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:l,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return a}});var n=r(5893),a=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,r){"use strict";r.d(t,{d:function(){return l}});var n=r(5893),a=r(4725),i=r.n(a),s=r(7294),l=function(e){var t=e.code,r=(0,s.useRef)(null);return(0,s.useEffect)((function(){r.current&&i().highlightElement(r.current)}),[r,t]),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return a}});var n=r(7294),a=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,n.useState)(t),a=r[0],i=r[1],s=function(){i(t())};return(0,n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,n.useLayoutEffect)((function(){s()}),[]),a}},740:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(5893),a=r(7294),i=r(9281),s=r(4386),l=r(7197),o=r(6978),c=r(3485),d=r(8193),h=r(33),u=r(1664),m=r(3440),f=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"Mel",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Sophie",value:14},{name:"Leane",value:74},{name:"Melanie",value:72},{name:"Tibo",value:23},{name:"Remi",value:124},{name:"Balkis",value:23},{name:"Nina",value:104},{name:"Lucas",value:94},{name:"Paul",value:2}],x=r(2535);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(o){a=!0,i=o}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){var t=e.width,r=e.height,i=e.data,s=Math.min(t,r)/2,l=i.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),o=(0,a.useMemo)((function(){return x.tiA().domain(l).range([0,2*Math.PI]).padding(.2)}),[i,r,t]),c=(0,a.useMemo)((function(){var e=p(x.Wem(i.map((function(e){return e.value}))),2),t=(e[0],e[1]);return x.s$j().domain([0,t||10]).range([90,s])}),[i,t,r]),d=x.Nb1(),h=i.map((function(e,t){var r=d({innerRadius:90,outerRadius:c(e.value),startAngle:o(e.name),endAngle:o(e.name)+o.bandwidth()});return(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:r,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1})},t)}));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:r,children:(0,n.jsx)("g",{transform:"translate("+(t/2+20)+","+(r/2+20)+")",children:h})})})},j=function(e){var t=e.width,r=void 0===t?700:t,a=e.height,i=void 0===a?400:a;return(0,n.jsx)(v,{data:f,width:r,height:i})},g=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"Mel",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Sophie",value:14},{name:"Leane",value:74},{name:"Melanie",value:72},{name:"Tibo",value:23},{name:"Remi",value:124},{name:"Balkis",value:23},{name:"Nina",value:104},{name:"Lucas",value:94},{name:"Paul",value:2}];function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(o){a=!0,i=o}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){var t=e.width,r=e.height,i=e.data,s=Math.min(t,r)/2-50,l=i.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),o=(0,a.useMemo)((function(){return x.tiA().domain(l).range([0,2*Math.PI]).padding(.2)}),[i,r,t]),c=(0,a.useMemo)((function(){var e=b(x.Wem(i.map((function(e){return e.value}))),2),t=(e[0],e[1]);return x.s$j().domain([0,t||10]).range([90,s])}),[i,t,r]),d=x.Nb1(),h=i.map((function(e,t){var r=d({innerRadius:90,outerRadius:c(e.value),startAngle:o(e.name),endAngle:o(e.name)+o.bandwidth()}),a=(o(e.name)+o.bandwidth()/2+Math.PI)%(2*Math.PI)<Math.PI,i="rotate("+(180*(o(e.name)+o.bandwidth()/2)/Math.PI-90)+"),translate("+(c(e.value)+10)+",0)";return(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:r,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,n.jsx)("g",{transform:i,children:(0,n.jsx)("text",{textAnchor:a?"end":"start",alignmentBaseline:"middle",fontSize:16,transform:a?"rotate(180)":"rotate(0)",children:e.name})})]},t)}));return(0,n.jsx)("div",{children:(0,n.jsx)("svg",{width:t,height:r,children:(0,n.jsx)("g",{transform:"translate("+t/2+","+r/2+")",children:h})})})},y=function(e){var t=e.width,r=void 0===t?700:t,a=e.height,i=void 0===a?400:a;return(0,n.jsx)(w,{data:g,width:r,height:i})},N=(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/circularbarplot.html",children:"circular barplot"})," ","is the equivalent of a ",(0,n.jsx)(u.default,{href:"barplot",children:"barplot"}),", with bars displayed around a circle. This page describes how to deal with radial coordinates with ",(0,n.jsx)("code",{children:"d3.js"})," and ",(0,n.jsx)("code",{children:"react"}),". It's a step by step tutorial with several interactive sandboxes."]}),k="\nconst xScale = d3\n      .scaleBand()\n      .domain(groups)\n      .range([0, 2 * Math.PI])\n      .padding(BAR_PADDING)\n\nconst yScale = d3\n      .scaleRadial()\n      .domain([0, max])\n      .range([innerRadius, outerRadius])\n".trim(),z="\nconst arcPathGenerator = d3.arc();\n\nconst allShapes = data.map((group, i) => {\n  const path = arcPathGenerator({\n    innerRadius: innerRadius,\n    outerRadius: yScale(group.value),\n    startAngle: xScale(group.name),\n    endAngle: xScale(group.name) + xScale.bandwidth(),\n  });\n})\n".trim();function A(){return(0,n.jsxs)(i.A,{title:"Circular Barplot with React",seoDescription:"How to build a circular barplot with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(s.Z,{title:"Circular Barplot",description:N,chartType:"circularBarplot"}),(0,n.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The dataset required to build a circular barplot is usually an array where each item is an object providing the ",(0,n.jsx)("code",{children:"name"})," and the"," ",(0,n.jsx)("code",{children:"value"})," of the group."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example"}),(0,n.jsx)(d.d,{code:k}),(0,n.jsxs)("p",{children:["Note: if your data is in ",(0,n.jsx)("code",{children:".csv"})," formart, you can translate it thanks to the ",(0,n.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]})]}),(0,n.jsxs)(c.U,{title:"Bars in radial coordinates",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Even if the process to build a circular barplot is very different than for the common ",(0,n.jsx)(u.default,{href:"barplot",children:"barplot"}),", I strongly advise to have a good understanding of the common version first."," ",(0,n.jsx)(u.default,{href:"barplot",children:"Check it out"}),"."]}),(0,n.jsx)("p",{children:"Here is an overview of the main differences."}),(0,n.jsx)("h3",{children:"\u2192 Radial coordinates"}),(0,n.jsxs)("p",{children:["Do you remember you high school lectures about trigonometry? Me either \ud83d\ude43. But we need it here. Using radial coordinates, each point is defined using an ",(0,n.jsx)("b",{children:"angle"})," and its ",(0,n.jsx)("b",{children:"distance to the center"})," of the chart."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Angle"})," is defined between ",(0,n.jsx)("code",{children:"0"})," (top) and"," ",(0,n.jsx)("code",{children:"2*Pi"})," (top again). A value of ",(0,n.jsx)("code",{children:"Pi"})," will be at the bottom."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Distance"})," to the center goes from ",(0,n.jsx)("code",{children:"innerRadius"})," to"," ",(0,n.jsx)("code",{children:"outerRadius"}),". The inner radius is arbitraty. Do not use something too small or your bars will be very distorded. The upper value is computed from the svg dimenstion to fill it properly."]}),(0,n.jsxs)("p",{children:["The X scale (for the groups) is a ",(0,n.jsx)("code",{children:"scaleBand"})," like for a common barplot, but it goes from ",(0,n.jsx)("code",{children:"0"})," to ",(0,n.jsx)("code",{children:"2*Pi"})," ","instead of going from ",(0,n.jsx)("code",{children:"0"})," to ",(0,n.jsx)("code",{children:"width"}),"."," "]}),(0,n.jsx)("h3",{children:"\u2192 Y Scale"}),(0,n.jsxs)("p",{children:["The Y scale uses a very specific ",(0,n.jsx)("code",{children:"scaleRadial"}),". Indeed, bars are wider at their top than at their bottom. This"," ",(0,n.jsx)("code",{children:"scaleRadial"})," takes it into account and bring some sort of correction. Check the"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-scale#radial-scales",children:"doc"}),", or even this"," ",(0,n.jsx)("a",{href:"https://github.com/d3/d3-scale/issues/90",children:"explanation"})," for more."]}),(0,n.jsx)("p",{children:"At the end of the day, that's how our scales look like:"}),(0,n.jsx)(d.d,{code:k}),(0,n.jsxs)("h3",{children:["\u2192 Drawing with ",(0,n.jsx)("code",{children:"path"}),", not ",(0,n.jsx)("code",{children:"rect"}),"."]}),(0,n.jsxs)("p",{children:["We are not drawing rectangles here, so the svg ",(0,n.jsx)("code",{children:"rect"})," ","element won't be helpful."]}),(0,n.jsxs)("p",{children:["Instead, we are drawing ",(0,n.jsx)("b",{children:"fractions of a rings"}),", that you can call arcs."]}),(0,n.jsxs)("p",{children:["Fortunately, d3.js has an ",(0,n.jsx)("code",{children:"arc()"})," function that will generate the svg ",(0,n.jsx)("code",{children:"path"})," for us. It's the same process that is used to create a ",(0,n.jsx)(u.default,{href:"pie-plot",children:"pie chart"})," or a"," ",(0,n.jsx)(u.default,{href:"donut",children:"donut chart"}),"."]}),(0,n.jsx)("p",{children:"Here is an idea on how the function can be used to generate all the svg shapes:"}),(0,n.jsx)(d.d,{code:z}),(0,n.jsx)("h3",{children:"\u2192 Rendering"}),(0,n.jsxs)("p",{children:["Not much to add. Just include the paths in a ",(0,n.jsx)("code",{children:"svg"})," element. Remember that 0,0 is the center of the chart instead of being the top-left corner. So we need to apply a ",(0,n.jsx)("code",{children:"translate"})," at some point."]}),(0,n.jsx)(h.$,{vizName:"CircularBarplotBasic",VizComponent:j,height:500,maxWidth:600,caption:(0,n.jsxs)("span",{children:["Most basic circular barplot built with d3.js and react, using radial coordinates and ",(0,n.jsx)("code",{children:"path"})," instead of"," ",(0,n.jsx)("code",{children:"rect"}),"."]})}),(0,n.jsx)("p",{children:"That's a good start but it looks pretty much like a snail so far. Let's make it a real chart with labels and values."})]}),(0,n.jsxs)(c.U,{title:"Labels and Values",startOpen:!0,children:[(0,n.jsx)("p",{children:"Add a text element to show the name of each bar. A bit or logic to write to determine wether or not a label must be flipped, and how to position it properly."}),(0,n.jsx)(h.$,{vizName:"CircularBarplotLabel",VizComponent:y,height:500,maxWidth:600,caption:"Add some labels to each bar of the circular barchart to make it insightful"})]}),(0,n.jsx)(m.Z,{chartId:"circularBarplot"}),(0,n.jsx)(c.U,{title:"Vertical barplot",startOpen:!0,children:(0,n.jsx)("p",{children:"The vertical option is less common since it makes is much harder to read the labels. But if you really need it, it is just a matter of swaping the X and Y axes of the previous example. Here is a working version."})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(o.Z,{})]})}}},function(e){e.O(0,[3888,5660,7045,9774,2888,179],(function(){return t=5569,e(e.s=t);var t}));var t=e.O();_N_E=t}]);