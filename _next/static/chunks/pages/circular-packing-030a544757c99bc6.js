(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{5002:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/circular-packing",function(){return i(5087)}])},7262:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var a=i(5893);i(7294);var n=i(5887),r=i(8843),s=i(1664),l=i.n(s);let c=r.c.filter(e=>"general"===e.family).map(e=>e.logo);function o(e){let{chartLogo:t,caption:i,link:r,isAvailable:s,size:o}=e,h=c.includes(t),u=s?"opacity-100":"opacity-20";return(0,a.jsx)(l(),{href:s?r:"subscribe",className:"no-underline",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:o,height:o},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(n.Z,{chartLogo:t})}),h?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(d,{size:o})}):(0,a.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,a.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:i})]})})}let d=e=>{let{size:t}=e;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=i(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function p(e){let{chartFamily:t}=e,i=r.c.filter(e=>e.family===t).map((e,t)=>{let i=(0,h.y)(e.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(o,{link:i,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},1122:function(e,t,i){"use strict";i.d(t,{$:function(){return o}});var a=i(5893),n=i(7294),r=i(9973),s=i(8107),l=i(615),c=i(8578);let o=e=>{let{VizComponent:t,vizName:i,height:o=400,maxWidth:d=800,caption:h}=e,[u,p]=(0,n.useState)(!1),m=(0,n.useRef)(null),x=(0,r.B)(m);return(0,a.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,a.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,a.jsx)(c.X,{vizName:i})}),(0,a.jsx)("div",{className:"flex justify-center mt-2",children:(0,a.jsx)(s.z,{size:"sm",onClick:()=>p(!u),children:"Hide Sandbox"})})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,a.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,a.jsx)(t,{height:o,width:x.width})})}),(0,a.jsx)(l.Y,{children:h}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(s.z,{size:"sm",onClick:()=>p(!u),children:"Show code"})})]})})}},8578:function(e,t,i){"use strict";i.d(t,{X:function(){return n}});var a=i(5893);i(7294);let n=e=>{let{vizName:t}=e;return(0,a.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,i){"use strict";i.d(t,{A:function(){return u}});var a=i(5893),n=i(9700),r=i(3476),s=i(7294),l=i(3084),c=i.n(l);function o(){let[e,t]=(0,s.useState)([]),[i,n]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),i=window.scrollY+150,a=t.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0),r=t.findIndex(e=>e===a);n(-1===r?0:r)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,a.jsx)("div",{className:c().tableOfContent,children:e.map((t,n)=>(0,a.jsx)("p",{className:i===n?"".concat(c().tocItem," ").concat(c().tocItemActive):c().tocItem,onClick:t=>{t.preventDefault(),e[n].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=i(7414),h=i(2594);let u=e=>{let{children:t,title:i,seoDescription:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.A,{title:i,seoDescription:s}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(n.Z,{})}),(0,a.jsx)("div",{className:"wrapper",children:t}),(0,a.jsx)(h.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(r.Z,{})}),(0,a.jsx)(o,{})]})}},6438:function(e,t,i){"use strict";i.d(t,{J:function(){return s}});var a=i(5893),n=i(1664),r=i.n(n);let s=e=>{let{children:t,href:i,isFilled:n,size:s="md",isFaded:l}=e,c=i.startsWith("www")||i.startsWith("http"),o="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";n?o+=" bg-reactGallery hover:bg-reactGallery text-white ":o+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(o+="text-sm py-1 px-2 "),"md"===s&&(o+="text-md py-2 px-4 "),l&&(o+="opacity-60");let d=(0,a.jsx)("span",{className:o,children:t});return c?(0,a.jsx)("a",{href:i,target:"_blank",children:d}):(0,a.jsx)(r(),{href:i,passHref:!0,children:d})}},9965:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var a=i(5893);i(7294);var n=i(8843),r=i(4588),s=i(1859),l=i(6438),c=i(1832),o=i.n(c);let d=e=>{let{direction:t,text:i,children:n}=e;return(0,a.jsx)("span",{className:o().tooltip+" "+o()[t],id:i,children:n})};var h=i(5887);function u(e){let{title:t,description:i,chartType:c,showSectionLink:o=!1,showInspirationLink:u=!0,showD3GalleryLink:p=!0}=e,m=n.c.find(e=>e.id===c);return m?(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsxs)("div",{className:"flex justify-start items-center",children:[(0,a.jsx)("h1",{children:t}),(0,a.jsx)("div",{className:"w-20 ml-4",children:(0,a.jsx)(h.Z,{chartLogo:null==m?void 0:m.logo})})]}),(0,a.jsx)(s.r,{}),(0,a.jsx)("div",{className:"max-w-xxl  py-2",children:i}),c&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),c&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[o&&(0,a.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,a.jsx)(l.J,{href:(0,r.y)(m.reactURL),size:"sm",children:m.label+" section"})}),u&&(0,a.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),p&&(0,a.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(l.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(l.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},8107:function(e,t,i){"use strict";i.d(t,{z:function(){return n}});var a=i(5893);let n=e=>{let{children:t,onClick:i,isFilled:n,size:r="md"}=e,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===r&&(s+="text-sm py-1 px-2"),"md"===r&&(s+="text-md py-2 px-4"),n?s+=" bg-reactGallery hover:bg-reactGallery text-white":s+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,a.jsx)("button",{className:s,onClick:i,children:t})}},615:function(e,t,i){"use strict";i.d(t,{Y:function(){return n}});var a=i(5893);let n=e=>{let{children:t}=e;return(0,a.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,i){"use strict";i.d(t,{d:function(){return l}});var a=i(5893),n=i(5660),r=i.n(n),s=i(7294);let l=e=>{let{code:t}=e,i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{i.current&&r().highlightElement(i.current)},[i,t]),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("pre",{className:"rounded-md line-numbers",children:(0,a.jsx)("code",{ref:i,className:"p-0 language-js",children:t})})})}},8893:function(e,t,i){"use strict";i.d(t,{H:function(){return n}});var a=i(5893);let n=e=>{let{text:t}=e;return(0,a.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,a.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},9973:function(e,t,i){"use strict";i.d(t,{B:function(){return n}});var a=i(7294);let n=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[i,n]=(0,a.useState)(t),r=()=>{n(t())};return(0,a.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,a.useLayoutEffect)(()=>{r()},[]),i}},5087:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return M}});var a=i(5893),n=i(7294),r=i(153),s=i(9965),l=i(7262),c=i(3572),o=i(1122),d=i(2600);let h=e=>{let{width:t,height:i,data:n}=e,r=d.bT9(n).sum(e=>e.value).sort((e,t)=>t.value-e.value),s=d.P2p().size([t,i]).padding(4),l=s(r);return(0,a.jsxs)("svg",{width:t,height:i,style:{display:"inline-block"},children:[l.descendants().slice(1).map(e=>(0,a.jsx)("circle",{cx:e.x,cy:e.y,r:e.r,stroke:"#553C9A",strokeWidth:2,fill:"#B794F4",fillOpacity:.2},e.data.name)),l.descendants().slice(1).map(e=>(0,a.jsx)("text",{x:e.x,y:e.y,fontSize:13,fontWeight:.4,textAnchor:"middle",alignmentBaseline:"middle",children:e.data.name},e.data.name))]})},u={type:"node",name:"boss",value:2300,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53},{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12},{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]},p=e=>{let{width:t=700,height:i=400}=e;return 0===t?null:(0,a.jsx)(h,{width:t,height:i,data:u})};var m=i(6824);let x=e=>{let{width:t,height:i,data:r}=e,s=(0,n.useMemo)(()=>d.bT9(r).sum(e=>e.value).sort((e,t)=>t.value-e.value),[r]),l=(0,n.useMemo)(()=>d.P2p().size([t,i]).padding(4)(s),[s,t,i]);return(0,a.jsxs)("svg",{width:t,height:i,style:{display:"inline-block"},children:[l.descendants().slice(1).map(e=>(0,a.jsx)(f,{cx:e.x,cy:e.y,r:e.r,stroke:"#553C9A",strokeWidth:2,fill:"#B794F4",fillOpacity:.2},e.data.name)),l.descendants().slice(1).map(e=>(0,a.jsx)(j,{x:e.x,y:e.y,fontSize:13,fontWeight:.4,textAnchor:"middle",alignmentBaseline:"middle",children:e.data.name},e.data.name))]})},f=e=>{let{cx:t,cy:i,r:n,...r}=e,s=(0,m.q_)({cx:t,cy:i,r:n});return(0,a.jsx)(m.q.circle,{...r,r:s.r,cx:s.cx,cy:s.cy})},j=e=>{let{x:t,y:i,...n}=e,r=(0,m.q_)({x:t,y:i});return(0,a.jsx)(m.q.text,{...n,x:r.x,y:r.y})},v={type:"node",name:"boss",value:2300,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53},{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12},{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]},y={type:"node",name:"boss",value:2300,children:[{type:"leaf",name:"Mark",value:20},{type:"leaf",name:"Robert",value:120},{type:"leaf",name:"Emily",value:23},{type:"leaf",name:"Marion",value:78},{type:"leaf",name:"Nicolas",value:65},{type:"leaf",name:"Malki",value:45},{type:"leaf",name:"Dj\xe9",value:78},{type:"leaf",name:"M\xe9lanie",value:23},{type:"leaf",name:"Einstein",value:12}]},g={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},b=e=>{let{width:t=700,height:i=400}=e,[r,s]=(0,n.useState)(v);return 0===t?null:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{height:50},children:[(0,a.jsx)("button",{style:g,onClick:()=>s(v),children:"Data 1"}),(0,a.jsx)("button",{style:g,onClick:()=>s(y),children:"Data 2"})]}),(0,a.jsx)(x,{width:t,height:i-50-20,data:r})]})};var w=i(1664),k=i.n(w),N=i(6438);let z=["#e0ac2b","#6689c6","#a4c969","#e85252","#9a6fb0","#a53253","#7f7f7f"],_=e=>{let{width:t,height:i,data:n}=e,r=d.bT9(n).sum(e=>e.value).sort((e,t)=>t.value-e.value),s=d.P2p().size([t,i]).padding(4),l=s(r),c=null==r?void 0:null===(o=r.children)||void 0===o?void 0:o.map(e=>e.data.name);var o,h=d.PKp().domain(c||[]).range(z);let u=l.descendants().filter(e=>1===e.depth).map(e=>{let t=e.data.name;return(0,a.jsx)("g",{children:(0,a.jsx)("circle",{cx:e.x,cy:e.y,r:e.r,stroke:h(t),strokeWidth:1,strokeOpacity:.3,fill:h(t),fillOpacity:.1})},e.data.name)}),p=l.leaves().map(e=>{var t;let i=null===(t=e.parent)||void 0===t?void 0:t.data.name;return i?(0,a.jsxs)("g",{children:[(0,a.jsx)("circle",{cx:e.x,cy:e.y,r:e.r,stroke:h(i),strokeWidth:2,fill:h(i),fillOpacity:.2}),(0,a.jsx)("text",{x:e.x,y:e.y,fontSize:13,fontWeight:.4,textAnchor:"middle",alignmentBaseline:"middle",children:e.data.name},e.data.name)]},e.data.name):null});return(0,a.jsxs)("svg",{width:t,height:i,style:{display:"inline-block"},children:[u,p]})},C={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:42},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},T=e=>{let{width:t=700,height:i=400}=e;return 0===t?null:(0,a.jsx)(_,{width:t,height:i,data:C})};var P=i(8893);let E=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/circularpacking.html",children:"circular packing chart"})," ","displays a ",(0,a.jsx)("b",{children:"hierarchical"})," dataset as a set of nested circles, each circle representing a node of the data structure. Size is usually proportional to a numeric variable."]}),(0,a.jsxs)("p",{children:["This page is a tutorial teaching how to create a circle pack chart with"," ",(0,a.jsx)("code",{children:"d3.js"})," and ",(0,a.jsx)("code",{children:"React"}),". It starts with a very basic version, adds some levels of nesting and finishes with usual customization like animating the transition between datasets."]})]});function M(){return(0,a.jsxs)(r.A,{title:"Circular Packing chart with React",seoDescription:"How to build a circular packing chart with React and D3.js. A set of re-usable components",children:[(0,a.jsx)(s.Z,{title:"Circular Packing",description:E,chartType:"circularPacking"}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["The dataset describes a ",(0,a.jsx)("b",{children:"hierarchy"})," using a recursive structure. It is similar to a ",(0,a.jsx)(k(),{href:"/dendrogram",children:"dendrogram"})," or to a"," ",(0,a.jsx)(k(),{href:"/treemap",children:"treemap"}),"."]}),(0,a.jsxs)("p",{children:["Each item in this structure is called a ",(0,a.jsx)("b",{children:"node"}),", the lowest nodes of the hierarchy being called ",(0,a.jsx)("b",{children:"leaves"}),". The dataset is an object that has at least 3 properties: ",(0,a.jsx)("code",{children:"name"}),", ",(0,a.jsx)("code",{children:"value"})," and"," ",(0,a.jsx)("code",{children:"children"}),". Children is an array of nodes that have this structure too."]}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,a.jsx)(c.d,{code:A}),(0,a.jsx)("h2",{id:"hierarchy",children:"Dealing with a hierarchical dataset"}),(0,a.jsx)("p",{children:"The circle packing chart belongs to the family of charts being based on a hierarchical dataset."}),(0,a.jsxs)("p",{children:["Members of this family always follow the same process: the dataset is passed to the ",(0,a.jsx)("code",{children:"hierarchy()"})," function of d3.js that creates a handy format for us."]}),(0,a.jsxs)("p",{children:["Building a ",(0,a.jsx)(k(),{href:"/dendrogram",children:"dendrogram"})," will then be possible thanks to the ",(0,a.jsx)("code",{children:"cluster()"}),"function. Building a ",(0,a.jsx)(k(),{href:"/treemap",children:"treemap"})," is then possible with the ",(0,a.jsx)("code",{children:"treemap()"}),"function. Building a circle pack will be possible with the"," ",(0,a.jsx)("code",{children:"pack()"}),"function."]}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("code",{children:"hierarchy()"})," function of d3.js is a key part of the process. I extensively described how it works in the"," ",(0,a.jsx)(k(),{href:"/dendrogram",children:"dendrogram"})," section and strongly advise to take a look at it before continuing."]}),(0,a.jsxs)(N.J,{isFilled:!0,size:"sm",href:"/dendrogram",children:["Learn about ",(0,a.jsx)("code",{children:"hierarchy()"})]}),(0,a.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,a.jsxs)("p",{children:["The goal here is to create a ",(0,a.jsx)("code",{children:"CircularPacking"})," component that will be stored in a ",(0,a.jsx)("code",{children:"CircularPacking.tsx"})," file. This component requires 3 props to render: a ",(0,a.jsx)("code",{children:"width"}),", a"," ",(0,a.jsx)("code",{children:"height"}),", and some ",(0,a.jsx)("code",{children:"data"}),"."]}),(0,a.jsxs)("p",{children:["The shape of the ",(0,a.jsx)("code",{children:"data"})," is described above. The"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," will be used to render an"," ",(0,a.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the histogram."]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,a.jsx)("code",{children:"CircularPacking"})," component:"]}),(0,a.jsx)(c.d,{code:D}),(0,a.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,a.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,a.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,a.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,a.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,a.jsx)("h2",{id:"1 level",children:"Circle packing with 1️⃣ level of nesting"}),(0,a.jsx)("p",{children:"Here is a summary of the process used to build a circle pack with 1 level of nesting:"}),(0,a.jsx)("h3",{children:"→ Compute circle position and radius"}),(0,a.jsxs)("p",{children:["Pass the dataset to the ",(0,a.jsx)("code",{children:"hierarchy()"})," function of d3. It builds a specific kind of object from it. This object can be consumed by the ",(0,a.jsx)("code",{children:"pack()"})," function of d3 that computes the position and radius of each circle."]}),(0,a.jsx)(c.d,{code:R}),(0,a.jsxs)("p",{children:["For each node of the hierarchy, 3 new properties are now available:"," ",(0,a.jsx)("code",{children:"x"}),", ",(0,a.jsx)("code",{children:"y"})," and ",(0,a.jsx)("code",{children:"r"})," that provide the coordinates and radius of each circle respectively."]}),(0,a.jsx)("h3",{children:"→ Render the circles with react"}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("code",{children:"root"})," object computed above has a"," ",(0,a.jsx)("code",{children:".descendants()"})," method that lists all the nodes in an array."]}),(0,a.jsxs)("p",{children:["It is straightforward to ",(0,a.jsx)("code",{children:"map"})," along those nodes. For each item, we can render a",(0,a.jsx)("code",{children:"circle"})," element following with a"," ",(0,a.jsx)("code",{children:"text"})," element to get the following chart."]}),(0,a.jsx)("br",{}),(0,a.jsx)(o.$,{vizName:"CircularPackingBasic",VizComponent:p,maxWidth:400,height:400,caption:"Most basic circle packing chart built with react and d3.js. One level of nesting."}),(0,a.jsx)("h2",{id:"2 levels",children:"Circle packing with 2️⃣ levels of nesting"}),(0,a.jsxs)("p",{children:["The process to follow is pretty similar to add a ",(0,a.jsx)("b",{children:"second level"})," of nesting."]}),(0,a.jsx)("p",{children:"But this time 2 loops are required. The first one will be used to draw the first level of nesting. The second to draw the leaves."}),(0,a.jsx)(o.$,{vizName:"CircularPacking2Levels",VizComponent:T,maxWidth:550,height:550,caption:"Circle packing chart built with react and d3.js. Two levels of nesting."}),(0,a.jsx)("h2",{id:"data transition",children:"Dataset transition"})," ",(0,a.jsx)("p",{children:"The following examples explains how to transition between 2 datasets. Each circle smoothly goes to its new position with its new radius."}),(0,a.jsxs)("p",{children:["This is possible thanks to the ",(0,a.jsx)("code",{children:"react-spring"})," library that does the interpolation and animation. When a new dataset is passed to the component, the ",(0,a.jsx)("code",{children:"hierarchy()"})," and ",(0,a.jsx)("code",{children:"pack()"})," ","functions are triggered to compute the new position and radius of each node. But instead of passing this information to an usual"," ",(0,a.jsx)("code",{children:"circle"})," or ",(0,a.jsx)("code",{children:"text"}),"svg element, it is passed to an animated component that looks like this:"]}),(0,a.jsx)(c.d,{code:W}),(0,a.jsxs)("p",{children:["This component uses the ",(0,a.jsx)("code",{children:"useSpring"})," hook of react spring to interpolate the ",(0,a.jsx)("code",{children:"cx"}),", ",(0,a.jsx)("code",{children:"cy"})," and ",(0,a.jsx)("code",{children:"r"})," ","properties. Those values are passed to a special svg element (",(0,a.jsx)("code",{children:"animated.circle"}),") that does the animation."]}),(0,a.jsx)(o.$,{vizName:"CircularPackingDatasetTransition",VizComponent:b,maxWidth:550,height:550,caption:"Animating the transition between 2 similar dataset with react and d3.js (for rendering) and react spring (for animation)."}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Animation"})," in dataviz using React is a ",(0,a.jsx)("b",{children:"big"})," topic. It's impossible to go in depth here! I will publish a dedicated blog post on the topic soon. Please ",(0,a.jsx)(k(),{href:"subscribe",children:"subscribe"})," to the newsletter if you want to be notified."]}),(0,a.jsx)(N.J,{isFilled:!0,size:"sm",href:"/subscribe",children:"Subscribe"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("br",{})," ",(0,a.jsx)("br",{})]}),(0,a.jsx)(P.H,{text:"Zoom on next level of hierarchy"}),(0,a.jsx)(P.H,{text:"Write label along circle with curve"}),(0,a.jsx)(P.H,{text:"Better dataset transition where circle keep position"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("br",{})," ",(0,a.jsx)("br",{})]}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,a.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,a.jsx)("div",{className:"mt-20"})]})}let A="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90},\n    {type: 'leaf', name:\"Robert\", value: 12},\n    {type: 'leaf', name:\"Emily\", value: 34},\n    ...\n}\n".trim(),D='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype CircularPackingProps = {\n  width: number;\n  height: number;\n  data: number[];\n};\n\nexport const CircularPacking = ({ width, height, data }: CircularPackingProps) => {\n\n  // read the data\n  // compute the hierarchy format with hierarchy()\n  // compute circle position with pack()\n  // build the circles\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <circle>\n      </svg>\n    </div>\n  );\n};\n'.trim(),R="\n// build the hierarchy object\nconst hierarchy = d3\n  .hierarchy(data)\n  .sum((d) => d.value)\n\n// compute the 2d coordinates of nodes\nconst packGenerator = d3.pack()\n  .size([width, height])\n  .padding(4); // space between circles\nconst root = packGenerator(hierarchy);\n".trim(),W="\nconst AnimatedCircle = ({cx,cy,r,...props}) => {\n  const animatedProps = useSpring({\n    cx,\n    cy,\n    r,\n  });\n  return (\n    <animated.circle\n      {...props}\n      r={animatedProps.r}\n      cx={animatedProps.cx}\n      cy={animatedProps.cy}\n    />\n  );\n}\n".trim()},1832:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}},6824:function(e,t,i){"use strict";i.d(t,{q:function(){return a.q},q_:function(){return a.q_},to:function(){return a.to},vc:function(){return a.vc}});var a=i(2236)}},function(e){e.O(0,[3996,2600,5660,2236,645,9774,2888,179],function(){return e(e.s=5002)}),_N_E=e.O()}]);