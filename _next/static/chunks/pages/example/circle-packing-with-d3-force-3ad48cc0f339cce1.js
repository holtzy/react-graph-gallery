(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3918],{1097:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/circle-packing-with-d3-force",function(){return r(8877)}])},7262:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var i=r(5893);r(7294);var l=r(5887),n=r(8843),s=r(1664),a=r.n(s);let o=n.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:n,isAvailable:s,size:c}=e,h=o.includes(t),u=s?"opacity-100":"opacity-20";return(0,i.jsx)(a(),{href:s?n:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(l.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=r(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function x(e){let{chartFamily:t}=e,r=n.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,h.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(c,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),l=r(7294),n=r(9973),s=r(8107),a=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,l.useState)(!1),m=(0,l.useRef)(null),p=(0,n.B)(m);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(o.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(s.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:p.width})})}),(0,i.jsx)(a.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(s.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return l}});var i=r(5893);r(7294);let l=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(5893),l=r(9700),n=r(3476),s=r(7294),a=r(3084),o=r.n(a);function c(){let[e,t]=(0,s.useState)([]),[r,l]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),n=t.findIndex(e=>e===i);l(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,l)=>(0,i.jsx)("p",{className:r===l?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[l].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:s}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(l.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return s}});var i=r(5893),l=r(1664),n=r.n(l);let s=e=>{let{children:t,href:r,isFilled:l,size:s="md",isFaded:a}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";l?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(c+="text-sm py-1 px-2 "),"md"===s&&(c+="text-md py-2 px-4 "),a&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return o?(0,i.jsx)("a",{href:r,target:"_blank",children:d}):(0,i.jsx)(n(),{href:r,passHref:!0,children:d})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893);r(7294);var l=r(8843),n=r(4588),s=r(1859),a=r(6438),o=r(1832),c=r.n(o);let d=e=>{let{direction:t,text:r,children:l}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:l})};var h=r(5887);function u(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,m=l.c.find(e=>e.id===o);return m?(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==m?void 0:m.logo})})]}),(0,i.jsx)(s.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),o&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(a.J,{href:(0,n.y)(m.reactURL),size:"sm",children:m.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(a.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),x&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(a.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(a.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return l}});var i=r(5893);let l=e=>{let{children:t,onClick:r,isFilled:l,size:n="md"}=e,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(s+="text-sm py-1 px-2"),"md"===n&&(s+="text-md py-2 px-4"),l?s+=" bg-reactGallery hover:bg-reactGallery text-white":s+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:s,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return l}});var i=r(5893);let l=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return a}});var i=r(5893),l=r(5660),n=r.n(l),s=r(7294);let a=e=>{let{code:t}=e,r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{r.current&&n().highlightElement(r.current)},[r,t]),(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return l}});var i=r(7294);let l=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,l]=(0,i.useState)(t),n=()=>{l(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,i.useLayoutEffect)(()=>{n()},[]),r}},8877:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var i=r(5893),l=r(7294),n=r(153),s=r(9965),a=r(7262),o=r(3572),c=r(1122),d=r(1664),h=r.n(d),u=r(6438);let x=[{id:"Myriel",group:"team1",value:90},{id:"Anne",group:"team1",value:10},{id:"Gabriel",group:"team1",value:34},{id:"Mel",group:"team1",value:9},{id:"Yan",group:"team2",value:16},{id:"Tom",group:"team2",value:93},{id:"Cyril",group:"team2",value:23},{id:"Tuck",group:"team2",value:54},{id:"Antoine",group:"team3",value:9},{id:"Rob",group:"team3",value:78},{id:"Napoleon",group:"team3",value:45},{id:"Toto",group:"team4",value:78},{id:"Tutu",group:"team4",value:98},{id:"Titi",group:"team4",value:9},{id:"Tata",group:"team4",value:5},{id:"Turlututu",group:"team4",value:45},{id:"Tita",group:"team4",value:59}];var m=r(7875);let p=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],f=(e,t,r,i,l)=>{let n=[...new Set(i.map(e=>e.group))],s=(0,m.PKp)().domain(n).range(p);e.clearRect(0,0,t,r),i.forEach(t=>{t.x&&t.y&&(e.beginPath(),e.moveTo(t.x+12,t.y),e.arc(t.x,t.y,l(t.value),0,2*Math.PI),e.fillStyle=s(t.group),e.fill())})},j=e=>{let{width:t,height:r,data:n}=e,s=n.map(e=>({...e})),a=(0,l.useRef)(null),[o,c]=(0,m.Wem)(s.map(e=>e.value)),d=(0,m.PUr)().domain([o,c]).range([4,80]);return(0,l.useEffect)(()=>{let e=a.current,i=null==e?void 0:e.getContext("2d");i&&m.A4v(s).force("collide",m.Hh().radius(e=>d(e.value)+1)).force("charge",m.q5i().strength(80)).force("center",m.wqt(t/2,r/2)).force("charge",m.Mrm(0).strength(.05)).on("tick",()=>{f(i,t,r,s,d)})},[t,r,s,d]),(0,i.jsx)("div",{children:(0,i.jsx)("canvas",{ref:a,style:{width:t,height:r},width:t,height:r})})},g=e=>{let{width:t=700,height:r=400}=e;return 0===t?null:(0,i.jsx)(j,{data:x,width:t,height:r})},v=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["This tutorial is a variation around the general"," ",(0,i.jsx)(h(),{href:"/circular-packing",children:"introduction to circle packing with react"})," ","and d3.js. You should probably understand the concepts described there before reading here."]}),(0,i.jsxs)("p",{children:["Instead of relying on the ",(0,i.jsx)("code",{children:"pack()"})," function of d3.js to compute the best node positions, this example suggests to rely on the"," ",(0,i.jsx)(h(),{href:"/network-diagram",children:"d3-force"})," plugin to apply"," ",(0,i.jsx)("b",{children:"physical forces"})," on each node."]}),(0,i.jsxs)("p",{children:["A code sandbox is provided for the final result, but explanations target what's different compared to a classic"," ",(0,i.jsx)(h(),{href:"/circular-packing",children:"circular packing"})," based on some concepts described in the"," ",(0,i.jsx)(h(),{href:"/network-diagram",children:"network diagram"})," section."]})]});function b(){return(0,i.jsxs)(n.A,{title:"Circle Packing with d3-force.",seoDescription:"Example of a network diagram react component. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(s.Z,{title:"Circle Packing with d3-force",description:v,chartType:"circularPacking"}),(0,i.jsx)("h2",{id:"plot",children:"Plot and code"}),(0,i.jsx)("p",{children:"Here is the final plot we're trying to achieve here, together with its code:\uD83D\uDE47‍♂️"}),(0,i.jsx)("p",{children:"It is a circular packing chart where all circles represent an item of the dataset."}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["The circle area is proportional to the ",(0,i.jsx)("code",{children:"value"})," property of the data item."]}),(0,i.jsxs)("li",{children:["All circles are close to each other but ",(0,i.jsx)("b",{children:"do not collide"}),". They are also attracted by the ",(0,i.jsx)("code",{children:"y=0"})," horizontal axis, what"," ",(0,i.jsx)("b",{children:"aligns them horizontally"})]})]}),(0,i.jsx)("p",{children:"To understand how this chart works, you need the concepts described in the Network diagram and Circle pack sections."}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(u.J,{isFilled:!0,size:"sm",href:"/network-chart",children:"Network section"}),(0,i.jsx)(u.J,{isFilled:!0,size:"sm",href:"/circular-packing",children:"Circle Packing section"})]}),(0,i.jsx)(c.$,{vizName:"CircularPackingWithD3Force",VizComponent:g,maxWidth:800,height:700,caption:(0,i.jsxs)("span",{children:["A circle packing chart made using the d3-force plugin, with bubbles being attracted by the ",(0,i.jsx)("code",{children:"y=0"})," baseline."]})}),(0,i.jsxs)("h2",{id:"forces",children:["Using ",(0,i.jsx)("code",{children:"d3-force"})]}),(0,i.jsxs)("p",{children:["This example is actually a variation of a"," ",(0,i.jsx)(h(),{href:"/network-diagram",children:"network diagram"}),", but with no links between nodes."]}),(0,i.jsx)("p",{children:"Some physical forces are applied to each node to compute their position through an iterative simulation:"}),(0,i.jsx)(o.d,{code:w}),(0,i.jsx)("p",{children:"Here is a reminder:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"collide"})," avoids circle overlap. It uses each node radius to make sure there is no collision."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"manyBody"})," makes sure that nodes are attracted one to each other since the ",(0,i.jsx)("code",{children:"strength"})," in use is positive."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"forceCenter"})," center the whole chart on the canvas."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"forceY"})," aligns bubble on a horizontal line."]})]}),(0,i.jsx)("h2",{id:"bubble size",children:"Bubble Size"}),(0,i.jsxs)("p",{children:["As explained in the"," ",(0,i.jsx)(h(),{href:"/bubble-plot",children:"bubble chart section"}),", it is very important to have the bubble ",(0,i.jsx)("b",{children:"area"})," being proportional to the numeric",(0,i.jsx)("code",{children:"value"})," of the data point."]}),(0,i.jsxs)("p",{children:["It is a very"," ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/caveat/radius_or_area.html",target:"_blank",children:"common mistake"})," ","to make the ",(0,i.jsx)("b",{children:"radius"})," proportional to numeric value, which leads to a misleading visualization."]}),(0,i.jsxs)("p",{children:["Fortunately, it is very straightforward to scale the bubble appropriately thanks to the ",(0,i.jsx)("code",{children:"scaleSqrt()"})," function."]}),(0,i.jsx)(o.d,{code:y}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(a.Z,{chartFamily:"flow"}),(0,i.jsx)("div",{className:"mt-20"})]})}let w="\nd3.forceSimulation(nodes)\n  .force(\n    'collide',\n    d3.forceCollide().radius((node) => sizeScale(node.value) + 1)\n  )\n  .force('charge', d3.forceManyBody().strength(80))\n  .force('center', d3.forceCenter(width / 2, height / 2))\n  .force('charge', d3.forceY(0).strength(0.05))\n".trim(),y="\nconst sizeScale = scaleSqrt()\n  .domain([min, max])\n  .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);\n".trim()},1832:function(e){e.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[3996,7875,5660,645,9774,2888,179],function(){return e(e.s=1097)}),_N_E=e.O()}]);