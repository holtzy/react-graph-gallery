(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{19879:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barplot",function(){return n(99292)}])},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(85893);n(67294);var a=n(49871),s=n(28843),r=n(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(e){let{chartFamily:t}=e,n=s.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,r.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(a.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var i=n(85893),a=n(67294),s=n(59973),r=n(80615),l=n(88578),o=n(5);let c=e=>{let{VizComponent:t,vizName:n,height:c=400,maxWidth:d=800,caption:h,fileToOpen:u}=e,[p,x]=(0,a.useState)(!1),m=(0,a.useRef)(null),f=(0,s.B)(m);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(l.X,{vizName:n,fileToOpen:u})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!p),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:f.width})})}),(0,i.jsx)(r.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.z,{size:"sm",onClick:()=>x(!p),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var i=n(85893);n(67294);let a=e=>{let{vizName:t,height:n="500px",fileToOpen:a}=e;return console.log("rerendeeeerrrrr"),(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(a?"&module=/".concat(a):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},52450:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893);n(67294);var a=n(92050),s=n(49975),r=n(59942);function l(e){let{images:t}=e,n=a.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,i.jsx)(s.X,{link:e.link,title:e.title,description:(0,i.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,i.jsx)(r.E,{children:n})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(85893),a=n(49700),s=n(63476),r=n(67294),l=n(63084),o=n.n(l);function c(){let[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,r.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),s=t.findIndex(e=>e===i);a(-1===s?0:s)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,a)=>(0,i.jsx)("p",{className:n===a?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[a].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(17414),h=n(62594);let u=e=>{let{children:t,title:n,seoDescription:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:n,seoDescription:r}),(0,i.jsx)(a.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)(c,{})]})}},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var i=n(85893),a=n(41664),s=n.n(a),r=n(28843),l=n(66717),o=n(3572);let c=e=>{let{chartId:t}=e,n=r.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(l.U,{title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(o.d,{code:d})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var a=n(95887),s=n(28843),r=n(41664),l=n.n(r);let o=s.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:n,link:s,isAvailable:r,size:c}=e,h=o.includes(t),u=r?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:r?s:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(r?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(a.Z,{chartLogo:t,size:c})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var i=n(85893);let a=e=>{let{title:t,children:n}=e;return(0,i.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,i.jsx)("summary",{className:"cursor-pointer",children:t}),(0,i.jsx)("div",{className:"pt-4",children:n})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});var i=n(85893);let a=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var i=n(85893),a=n(32581),s=n(15660),r=n.n(s),l=n(67294),o=n(45993),c=n.n(o);let d=e=>{let{code:t}=e,[n,s]=(0,l.useState)(!1),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current&&r().highlightElement(o.current)},[o,t]);let d=(0,i.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),s(!0)},className:c().codeChunckCopyButton,children:n?"Copied":(0,i.jsx)(a.Z,{size:14,style:{padding:0}})});return(0,i.jsxs)("div",{className:"mb-6 relative",children:[(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:o,className:"language-javascript",children:t})}),(0,i.jsx)("div",{className:c().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var i=n(67294);let a=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,a]=(0,i.useState)(t),s=()=>{a(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),(0,i.useEffect)(()=>{s()},[e]),n}},99292:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(85893);n(67294);var a=n(80153),s=n(43710),r=n(61651),l=n(3572),o=n(81122),c=n(41664),d=n.n(c),h=n(12885),u=n(90505),p=n(46228),x=n(52450);let m=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"barplot"})," ","displays a numeric value for several groups of a dataset using rectangles. This page is a step-by-step guide on how to build your own barplot for the web, using ",(0,i.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"D3.js"}),"."]}),(0,i.jsxs)("p",{children:["It starts with very basic concepts like ",(0,i.jsx)("b",{children:"data structure"}),","," ",(0,i.jsx)("b",{children:"scales"})," and svg rectangle ",(0,i.jsx)("b",{children:"rendering"}),". It then shows how to add interactivity to the chart with ",(0,i.jsx)("b",{children:"hover effects"}),". Last but not least it explains how to build variations like the ",(0,i.jsx)("b",{children:"stacked barplot"}),"."]})]});function f(){return(0,i.jsxs)(a.A,{title:"Barplot with React",seoDescription:"How to build a barplot with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(s.Z,{title:"Barplot",description:m,chartType:"barplot"}),(0,i.jsx)("h2",{id:"data",children:"The Data"})," ",(0,i.jsxs)("p",{children:["The dataset required to build a barplot is usually an array where each item is an object providing the ",(0,i.jsx)("code",{children:"name"})," and the"," ",(0,i.jsx)("code",{children:"value"})," of the group."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a minimal example"}),(0,i.jsx)(l.d,{code:j}),(0,i.jsxs)("p",{children:["Note: if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,i.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,i.jsxs)("p",{children:["The goal here is to create a ",(0,i.jsx)("code",{children:"Barplot"})," component that will be stored in a ",(0,i.jsx)("code",{children:"Barplot.tsx"})," file. This component requires 3 props to render: a ",(0,i.jsx)("code",{children:"width"}),", a ",(0,i.jsx)("code",{children:"height"}),", and some"," ",(0,i.jsx)("code",{children:"data"}),"."]}),(0,i.jsxs)("p",{children:["The shape of the ",(0,i.jsx)("code",{children:"data"})," is described above. The"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," will be used to rendering a"," ",(0,i.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the barplot."]}),(0,i.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our ",(0,i.jsx)("code",{children:"Barplot"})," ","component:"]}),(0,i.jsx)(l.d,{code:b}),(0,i.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,i.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,i.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,i.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"d3.js examples"}),"."]}),(0,i.jsx)("h2",{id:"Scales",children:"Scales"}),(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("b",{children:"scale"})," is a function that transforms a ",(0,i.jsx)("b",{children:"dimension"})," (like our ",(0,i.jsx)("code",{children:"value"})," or our group ",(0,i.jsx)("code",{children:"name"}),") in a"," ",(0,i.jsx)("b",{children:"position"})," in pixels."]}),(0,i.jsxs)("p",{children:["Building a barplot requires 2 scales of 2 kinds. The first will transform the group ",(0,i.jsx)("code",{children:"value"})," in a bar length. The second will transform the group ",(0,i.jsx)("code",{children:"name"})," in a position."]}),(0,i.jsx)("h3",{children:"→ Linear scale for the bar length"}),(0,i.jsxs)("p",{children:["D3.js comes with a handful set of"," ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-scale",children:"predefined scales"}),"."," ",(0,i.jsx)("code",{children:"scaleLinear"})," is what we need for the bar length. Here is a quick overview on how to build and use a linear scale:"]}),(0,i.jsx)(l.d,{code:g}),(0,i.jsxs)("p",{children:["Since we are building a ",(0,i.jsx)("b",{children:"horizontal"})," barplot here, this scale will be used by the ",(0,i.jsx)("b",{children:"X"})," axis."]}),(0,i.jsxs)("p",{children:["To dig more into d3 scales, visit this"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/custom_axis.html",children:"dedicated page"}),". It's a crucial concept that will be used everywhere in this website."]}),(0,i.jsx)("h3",{children:"→ Band scale for the group position"}),(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-scale#scaleBand",children:"band scale"})," will be used to control the position of each rectangle on the Y axis. It is computed with the ",(0,i.jsx)("code",{children:"scaleBand()"})," function of d3.js. It attributes a band of pixels to each group."]}),(0,i.jsxs)("p",{children:["For instance, calling the band scale with ",(0,i.jsx)("code",{children:'yScale("A")'})," will return ",(0,i.jsx)("code",{children:"0"}),", and ",(0,i.jsx)("code",{children:"yScale.bandwidth()"})," will return the width of the band (e.g. ",(0,i.jsx)("code",{children:"11px"}),")."]}),(0,i.jsxs)("p",{children:["Note: the ",(0,i.jsx)("code",{children:"padding"})," argument controls the space between bars."]}),(0,i.jsx)(l.d,{code:v}),(0,i.jsx)("h2",{id:"basic barplot",children:"Basic barplot"}),(0,i.jsxs)("p",{children:["We now have all the ingredients to build a basic barplot with react, all being pretty close to the"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/barplot",children:"d3-only examples"}),"."]}),(0,i.jsxs)("p",{children:["For each item in the dataset, create a SVG ",(0,i.jsx)("code",{children:"rect"})," element. Its vertical position can be retrieved from the group ",(0,i.jsx)("code",{children:"name"})," ","thanks to the band scale. It's size is retrieved using the"," ",(0,i.jsx)("code",{children:"xScale"})," and its ",(0,i.jsx)("code",{children:"value"}),"."]}),(0,i.jsx)("p",{children:"Note that using the same amount of information it is straightforward to add a label for the name and one for the value."}),(0,i.jsx)(o.$,{vizName:"BarplotBasic",VizComponent:h.R,height:500,maxWidth:500,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,i.jsx)(u.r,{chartId:"barplot"}),(0,i.jsx)("h2",{id:"transition",children:"Transition"}),(0,i.jsxs)("p",{children:["When the dataset updates, it adds a nice touch to"," ",(0,i.jsx)("b",{children:"smoothly animate"})," the transition. In the example below, changing the dataset will update the ",(0,i.jsx)("b",{children:"bar sizes"})," and their ",(0,i.jsx)("b",{children:"positions"})," ","on the Y axis to keep the ranking accurate."]}),(0,i.jsxs)("p",{children:["Animation is a complicated topic in dataviz. We have to deal with"," ",(0,i.jsx)("b",{children:"updates"})," (an element changes its features), ",(0,i.jsx)("b",{children:"enter"})," (a new element appears) and ",(0,i.jsx)("b",{children:"exit"})," (an element is not present anymore) patterns."]}),(0,i.jsxs)("p",{children:["I suggest to rely on the ",(0,i.jsx)("code",{children:"react-spring"})," library to help here. Please check this"," ",(0,i.jsx)(d(),{href:"example/barplot-data-transition-animation",children:"dedicated blogpost"})," ","to get explanations about the code of this example."]}),(0,i.jsx)(o.$,{vizName:"BarplotDatasetTransition",VizComponent:p.P,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,i.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("b",{children:"stacked barplot"})," is a variation of a barplot where an"," ",(0,i.jsx)("b",{children:"additional level of grouping"})," is represented. Each bar represent the value of a ",(0,i.jsx)("code",{children:"group"}),", for instance how much each my friend spent in the last month. Each bar is then subdivided, each part representing the value of a ",(0,i.jsx)("code",{children:"subgroup"}),", for instance the category of expense."]}),(0,i.jsxs)("p",{children:["D3 comes with a very handy ",(0,i.jsx)("code",{children:"stack()"})," function. The 2 tutorials below explain how this function works, and how to use it to render a clean stacked barplot."]}),(0,i.jsx)(x.Z,{images:["barplot-stacked-horizontal.png","barplot-stacked-vertical.png"]}),(0,i.jsx)("h2",{id:"vertical",children:"Vertical barplot"})," ",(0,i.jsxs)("p",{children:["The vertical option is less common since it makes is much"," ",(0,i.jsx)("b",{children:"harder to read the labels"}),". But if you really need it, it is just a matter of swaping the X and Y axes of the previous example."]}),(0,i.jsxs)("p",{children:["This example will be publish soon, please"," ",(0,i.jsx)(d(),{href:"/subscribe",children:"subscribe"})," below if you want to be notified."]}),(0,i.jsx)("h2",{id:"hover effect",children:"Hover effect"})," ",(0,i.jsxs)("p",{children:["This example will be publish soon, please"," ",(0,i.jsx)(d(),{href:"subscribe",children:"subscribe"})," to the newsletter if you want to be notified."]}),(0,i.jsx)("h2",{id:"variations",children:"Variations"}),(0,i.jsx)("p",{children:"Let's go beyond the basic barcharts. Click on the overview images below to get details and code."}),(0,i.jsx)("br",{}),(0,i.jsx)(x.Z,{images:["donut-barplot-transition.gif"]}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(r.Z,{chartFamily:"ranking"}),(0,i.jsx)("div",{className:"mt-20"})]})}let j='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),b='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype BarplotProps = {\n  width: number;\n  height: number;\n  data: { name: string; y: number }[];\n};\n\nexport const Barplot = ({ width, height, data }: BarplotProps) => {\n\n  // read the data\n  // do some stuff with d3\n  // compute all the <rect>\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <rect>\n      </svg>\n    </div>\n  );\n};\n'.trim(),g="\nconst scale = d3.scaleLinear()\n  .domain([0, 10]) // data goes from 0 to 10\n  .range([0, 200]); // axis goes from 0 to 200\n\nscale(0); // 0 -> item with a value of 0 will have a bar of length 0\nscale(5); // 100 -> bar of length 100\nscale(10); // 200 -> bar of length 200\n".trim(),v='\nconst yScale = d3\n    .scaleBand()\n    .range([0, boundsHeight])\n    .domain(allGroups)\n    .padding(0.01);\n\n// yScale("A") -> 0\n// yScale.bandwidth() -> 11\n'.trim()},12885:function(e,t,n){"use strict";n.d(t,{R:function(){return c}});var i=n(85893);let a=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}];var s=n(67294),r=n(52604);let l={top:30,right:30,bottom:30,left:30},o=e=>{let{width:t,height:n,data:a}=e,o=t-l.right-l.left,c=n-l.top-l.bottom,d=a.sort((e,t)=>t.value-e.value).map(e=>e.name),h=(0,s.useMemo)(()=>r.tiA().domain(d).range([0,c]).padding(.3),[a,n]),u=(0,s.useMemo)(()=>{let[e,t]=r.Wem(a.map(e=>e.value));return r.BYU().domain([0,t||10]).range([0,o])},[a,t]),p=a.map((e,t)=>{let n=h(e.name);return void 0===n?null:(0,i.jsxs)("g",{children:[(0,i.jsx)("rect",{x:u(0),y:h(e.name),width:u(e.value),height:h.bandwidth(),opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,i.jsx)("text",{x:u(e.value)-7,y:n+h.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:u(e.value)>90?1:0,children:e.value}),(0,i.jsx)("text",{x:u(0)+7,y:n+h.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)}),x=u.ticks(5).slice(1).map((e,t)=>(0,i.jsxs)("g",{children:[(0,i.jsx)("line",{x1:u(e),x2:u(e),y1:0,y2:c,stroke:"#808080",opacity:.2}),(0,i.jsx)("text",{x:u(e),y:c+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsxs)("g",{width:o,height:c,transform:"translate(".concat([l.left,l.top].join(","),")"),children:[x,p]})})})},c=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(o,{data:a,width:t,height:n})}},46228:function(e,t,n){"use strict";n.d(t,{P:function(){return x}});var i=n(85893),a=n(67294);let s=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],r=[{name:"Mark",value:9},{name:"Robert",value:19},{name:"Emily",value:31},{name:"Marion",value:23},{name:"Nicolas",value:38},{name:"M\xe9lanie",value:123},{name:"Gabriel",value:4},{name:"Jean",value:23},{name:"Christophe",value:22}];var l=n(52604),o=n(2719);let c=e=>{var t,n,a,s;let{name:r,value:l,barHeight:c,barWidth:d,x:h,y:u}=e,p=(0,o.q_)({from:{value:0,barWidth:0,valueOpacity:0},to:{value:l,barWidth:d,valueOpacity:d>80?1:0,y:u},config:{friction:100}});return(0,i.jsxs)("g",{children:[(0,i.jsx)(o.q.rect,{x:h,y:p.y,width:p.barWidth,height:c,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,i.jsx)(o.q.text,{x:null===(t=p.barWidth)||void 0===t?void 0:t.to(e=>e-7),y:null===(n=p.y)||void 0===n?void 0:n.to(e=>e+c/2),textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:p.valueOpacity,children:null===(a=p.value)||void 0===a?void 0:a.to(e=>e.toFixed(0))}),(0,i.jsx)(o.q.text,{x:h+7,y:null===(s=p.y)||void 0===s?void 0:s.to(e=>e+c/2),textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:r})]})},d={top:30,right:30,bottom:30,left:30},h=e=>{let{width:t,height:n,data:s}=e,r=t-d.right-d.left,o=n-d.top-d.bottom,h=s.sort((e,t)=>t.value-e.value).map(e=>e.name),u=(0,a.useMemo)(()=>l.tiA().domain(h).range([0,o]).padding(.3),[s,n]),p=l.Fp7(s.map(e=>e.value)),x=l.BYU().domain([0,p]).range([0,r]),m=s.map(e=>(0,i.jsx)(c,{name:e.name,value:e.value,barHeight:u.bandwidth(),barWidth:x(e.value),x:x(0),y:u(e.name)},e.name));return(0,i.jsx)("div",{children:(0,i.jsx)("svg",{width:t,height:n,children:(0,i.jsx)("g",{width:r,height:o,transform:"translate(".concat([d.left,d.top].join(","),")"),children:m})})})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=e=>{let{width:t,height:n}=e,[l,o]=(0,a.useState)(s);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:u,onClick:()=>o(s),children:"Data 1"}),(0,i.jsx)("button",{style:u,onClick:()=>o(r),children:"Data 2"})]}),(0,i.jsx)(h,{width:t,height:n-50,data:l})]})},x=e=>{let{width:t=700,height:n=400}=e;return t&&n?(0,i.jsx)(p,{width:t,height:n}):null}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,2604,7823,2719,8190,3710,2594,693,9774,2888,179],function(){return e(e.s=19879)}),_N_E=e.O()}]);