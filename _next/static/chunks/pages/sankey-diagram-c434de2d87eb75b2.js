(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5654],{81248:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sankey-diagram",function(){return n(68587)}])},26820:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(85893);n(67294);var i=n(28843),r=n(56438);let o=e=>{let{imgLink:t,height:n,opacity:i,children:r}=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{style:{backgroundImage:"url("+t+")",height:n,backgroundAttachment:"fixed",opacity:i,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:r})]})};function s(e){var t;let{chartId:n}=e,s=(null===(t=i.c.find(e=>e.id===n))||void 0===t?void 0:t.label)||"chart";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"inspiration",children:s+" inspiration"}),(0,a.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,a.jsx)("span",{children:s}),", note that"," ",(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,a.jsx)("div",{className:"border mb-10",children:(0,a.jsx)(o,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,a.jsxs)("p",{className:"text-center text-sm",children:[(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,a.jsx)("span",{children:s})," ","looks good!"]}),(0,a.jsx)(r.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},90505:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var a=n(85893),i=n(41664),r=n.n(i),o=n(28843),s=n(66717),c=n(3572);let l=e=>{let{chartId:t}=e,n=o.c.filter(e=>e.id===t)[0].label;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,a.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,a.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,a.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,a.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,a.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,a.jsx)(s.U,{title:(0,a.jsxs)("span",{children:[(0,a.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,a.jsx)(c.d,{code:d})}),(0,a.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,a.jsx)(r(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},66717:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var a=n(85893);let i=e=>{let{title:t,children:n}=e;return(0,a.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,a.jsx)("summary",{className:"cursor-pointer",children:t}),(0,a.jsx)("div",{className:"pt-4",children:n})]})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var a=n(85893),i=n(32581),r=n(15660),o=n.n(r),s=n(67294),c=n(45993),l=n.n(c);let d=e=>{let{code:t}=e,[n,r]=(0,s.useState)(!1),c=(0,s.useRef)(null);(0,s.useEffect)(()=>{c.current&&o().highlightElement(c.current)},[c,t]);let d=(0,a.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:l().codeChunckCopyButton,children:n?"Copied":(0,a.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,a.jsxs)("div",{className:"mb-6 relative",children:[(0,a.jsx)("pre",{className:"rounded-md line-numbers",children:(0,a.jsx)("code",{ref:c,className:"language-javascript",children:t})}),(0,a.jsx)("div",{className:l().copyButtonContainer,children:d})]})}},18893:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var a=n(85893);let i=e=>{let{text:t}=e;return(0,a.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,a.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},68587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var a=n(85893);n(67294);var i=n(80153),r=n(43710),o=n(61651),s=n(3572),c=n(81122),l=n(26820),d=n(90505),h=n(18893);let u={nodes:[{id:"bob"},{id:"alice"},{id:"carol"},{id:"mel"},{id:"yan"}],links:[{source:"bob",target:"carol",value:4},{source:"alice",target:"carol",value:3},{source:"alice",target:"yan",value:1},{source:"carol",target:"mel",value:6},{source:"carol",target:"yan",value:1}]};var g=n(94091),m=n(57929),p=n(4127);let x=e=>{let{width:t,height:n,data:i}=e,r=(0,g.Z)().nodeWidth(26).nodePadding(29).extent([[5,25],[t-5,n-25]]).nodeId(e=>e.id).nodeAlign(m.be),{nodes:o,links:s}=r(i),c=o.map(e=>(0,a.jsx)("g",{children:(0,a.jsx)("rect",{height:e.y1-e.y0,width:r.nodeWidth(),x:e.x0,y:e.y0,stroke:"black",fill:"#a53253",fillOpacity:.8,rx:.9})},e.index)),l=s.map((e,t)=>{let n=(0,p.Z)(),i=n(e);return(0,a.jsx)("path",{d:i,stroke:"#a53253",fill:"none",strokeOpacity:.1,strokeWidth:e.width},t)});return(0,a.jsx)("div",{children:(0,a.jsxs)("svg",{width:t,height:n,children:[c,l]})})},y=e=>{let{width:t=700,height:n=400}=e;return 0===t?null:(0,a.jsx)(x,{data:u,width:t,height:n})},v={nodes:[{id:"bob"},{id:"alice"},{id:"carol"},{id:"mel"},{id:"yan"}],links:[{source:"bob",target:"carol",value:4},{source:"alice",target:"carol",value:3},{source:"alice",target:"yan",value:1},{source:"carol",target:"mel",value:6},{source:"carol",target:"yan",value:1}]},j=e=>{let{width:t,height:n,data:i}=e,r=(0,g.Z)().nodeWidth(26).nodePadding(29).extent([[5,25],[t-5,n-25]]).nodeId(e=>e.id).nodeAlign(m.be),{nodes:o,links:s}=r(i),c=o.map(e=>(0,a.jsx)("g",{children:(0,a.jsx)("rect",{height:e.y1-e.y0,width:r.nodeWidth(),x:e.x0,y:e.y0,stroke:"black",fill:"#a53253",fillOpacity:.8,rx:.9})},e.index));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:c})})},f=e=>{let{width:t=700,height:n=400}=e;return 0===t?null:(0,a.jsx)(j,{data:v,width:t,height:n})},w={nodes:[{name:"Agricultural 'waste'",category:"Agricultural"},{name:"Bio-conversion",category:"Bio-conversion"},{name:"Liquid",category:"Liquid"},{name:"Losses",category:"Losses"},{name:"Solid",category:"Solid"},{name:"Gas",category:"Gas"},{name:"Biofuel imports",category:"Biofuel"},{name:"Biomass imports",category:"Biomass"},{name:"Coal imports",category:"Coal"},{name:"Coal",category:"Coal"},{name:"Coal reserves",category:"Coal"},{name:"District heating",category:"District"},{name:"Industry",category:"Industry"},{name:"Heating and cooling - commercial",category:"Heating"},{name:"Heating and cooling - homes",category:"Heating"},{name:"Electricity grid",category:"Electricity"},{name:"Over generation / exports",category:"Over"},{name:"H2 conversion",category:"H2"},{name:"Road transport",category:"Road"},{name:"Agriculture",category:"Agriculture"},{name:"Rail transport",category:"Rail"},{name:"Lighting & appliances - commercial",category:"Lighting"},{name:"Lighting & appliances - homes",category:"Lighting"},{name:"Gas imports",category:"Gas"},{name:"Ngas",category:"Ngas"},{name:"Gas reserves",category:"Gas"},{name:"Thermal generation",category:"Thermal"},{name:"Geothermal",category:"Geothermal"},{name:"H2",category:"H2"},{name:"Hydro",category:"Hydro"},{name:"International shipping",category:"International"},{name:"Domestic aviation",category:"Domestic"},{name:"International aviation",category:"International"},{name:"National navigation",category:"National"},{name:"Marine algae",category:"Marine"},{name:"Nuclear",category:"Nuclear"},{name:"Oil imports",category:"Oil"},{name:"Oil",category:"Oil"},{name:"Oil reserves",category:"Oil"},{name:"Other waste",category:"Other"},{name:"Pumped heat",category:"Pumped"},{name:"Solar PV",category:"Solar"},{name:"Solar Thermal",category:"Solar"},{name:"Solar",category:"Solar"},{name:"Tidal",category:"Tidal"},{name:"UK land based bioenergy",category:"UK"},{name:"Wave",category:"Wave"},{name:"Wind",category:"Wind"}],links:[{source:"Agricultural 'waste'",target:"Bio-conversion",value:124.729},{source:"Bio-conversion",target:"Liquid",value:.597},{source:"Bio-conversion",target:"Losses",value:26.862},{source:"Bio-conversion",target:"Solid",value:280.322},{source:"Bio-conversion",target:"Gas",value:81.144},{source:"Biofuel imports",target:"Liquid",value:35},{source:"Biomass imports",target:"Solid",value:35},{source:"Coal imports",target:"Coal",value:11.606},{source:"Coal reserves",target:"Coal",value:63.965},{source:"Coal",target:"Solid",value:75.571},{source:"District heating",target:"Industry",value:10.639},{source:"District heating",target:"Heating and cooling - commercial",value:22.505},{source:"District heating",target:"Heating and cooling - homes",value:46.184},{source:"Electricity grid",target:"Over generation / exports",value:104.453},{source:"Electricity grid",target:"Heating and cooling - homes",value:113.726},{source:"Electricity grid",target:"H2 conversion",value:27.14},{source:"Electricity grid",target:"Industry",value:342.165},{source:"Electricity grid",target:"Road transport",value:37.797},{source:"Electricity grid",target:"Agriculture",value:4.412},{source:"Electricity grid",target:"Heating and cooling - commercial",value:40.858},{source:"Electricity grid",target:"Losses",value:56.691},{source:"Electricity grid",target:"Rail transport",value:7.863},{source:"Electricity grid",target:"Lighting & appliances - commercial",value:90.008},{source:"Electricity grid",target:"Lighting & appliances - homes",value:93.494},{source:"Gas imports",target:"Ngas",value:40.719},{source:"Gas reserves",target:"Ngas",value:82.233},{source:"Gas",target:"Heating and cooling - commercial",value:.129},{source:"Gas",target:"Losses",value:1.401},{source:"Gas",target:"Thermal generation",value:151.891},{source:"Gas",target:"Agriculture",value:2.096},{source:"Gas",target:"Industry",value:48.58},{source:"Geothermal",target:"Electricity grid",value:7.013},{source:"H2 conversion",target:"H2",value:20.897},{source:"H2 conversion",target:"Losses",value:6.242},{source:"H2",target:"Road transport",value:20.897},{source:"Hydro",target:"Electricity grid",value:6.995},{source:"Liquid",target:"Industry",value:121.066},{source:"Liquid",target:"International shipping",value:128.69},{source:"Liquid",target:"Road transport",value:135.835},{source:"Liquid",target:"Domestic aviation",value:14.458},{source:"Liquid",target:"International aviation",value:206.267},{source:"Liquid",target:"Agriculture",value:3.64},{source:"Liquid",target:"National navigation",value:33.218},{source:"Liquid",target:"Rail transport",value:4.413},{source:"Marine algae",target:"Bio-conversion",value:4.375},{source:"Ngas",target:"Gas",value:122.952},{source:"Nuclear",target:"Thermal generation",value:839.978},{source:"Oil imports",target:"Oil",value:504.287},{source:"Oil reserves",target:"Oil",value:107.703},{source:"Oil",target:"Liquid",value:611.99},{source:"Other waste",target:"Solid",value:56.587},{source:"Other waste",target:"Bio-conversion",value:77.81},{source:"Pumped heat",target:"Heating and cooling - homes",value:193.026},{source:"Pumped heat",target:"Heating and cooling - commercial",value:70.672},{source:"Solar PV",target:"Electricity grid",value:59.901},{source:"Solar Thermal",target:"Heating and cooling - homes",value:19.263},{source:"Solar",target:"Solar Thermal",value:19.263},{source:"Solar",target:"Solar PV",value:59.901},{source:"Solid",target:"Agriculture",value:.882},{source:"Solid",target:"Thermal generation",value:400.12},{source:"Solid",target:"Industry",value:46.477},{source:"Thermal generation",target:"Electricity grid",value:525.531},{source:"Thermal generation",target:"Losses",value:787.129},{source:"Thermal generation",target:"District heating",value:79.329},{source:"Tidal",target:"Electricity grid",value:9.452},{source:"UK land based bioenergy",target:"Bio-conversion",value:182.01},{source:"Wave",target:"Electricity grid",value:19.013},{source:"Wind",target:"Electricity grid",value:289.366}]};var b=n(43950);let k=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"],S=e=>{let{width:t,height:n,data:i}=e,r=[...new Set(i.nodes.map(e=>e.category))].sort(),o=(0,b.PKp)().domain(r).range(k),s=(0,g.Z)().nodeWidth(26).nodePadding(10).extent([[5,25],[t-5,n-25]]).nodeId(e=>e.name).nodeAlign(m.PT),{nodes:c,links:l}=s(i),d=c.map(e=>(0,a.jsx)("g",{children:(0,a.jsx)("rect",{height:e.y1-e.y0,width:s.nodeWidth(),x:e.x0,y:e.y0,stroke:"black",fill:o(e.category),fillOpacity:1,rx:.9})},e.index)),h=l.map((e,t)=>{let n=(0,p.Z)(),i=n(e);return(0,a.jsx)("path",{d:i,stroke:o(e.source.category),fill:"none",strokeOpacity:.3,strokeWidth:e.width},t)}),u=c.map((e,n)=>(0,a.jsx)("text",{x:e.x0<t/2?e.x1+6:e.x0-6,y:(e.y1+e.y0)/2,dy:"0.35rem",textAnchor:e.x0<t/2?"start":"end",fontSize:12,children:e.name},n));return(0,a.jsx)("div",{children:(0,a.jsxs)("svg",{width:t,height:n,children:[h,d,u]})})},N=e=>{let{width:t=700,height:n=400}=e;return 0===t?null:(0,a.jsx)(S,{data:w,width:t,height:n})},T=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/sankey.html",children:"Sankey Diagram"})," ","display ",(0,a.jsx)("b",{children:"flows"}),". Several entities (",(0,a.jsx)("b",{children:"nodes"}),") are represented by rectangles or text. Directed ",(0,a.jsx)("b",{children:"links"})," are represented with arrows or arcs that have a width proportional to the importance of the flow."]}),(0,a.jsxs)("p",{children:["This tutorial explains how to use ",(0,a.jsx)("code",{children:"React"}),", ",(0,a.jsx)("code",{children:"D3.js"})," ","and the ",(0,a.jsx)("code",{children:"d3-sankey"})," plugin to build a Sankey diagram. It comes with explanations and code sandboxes to play along with the suggested implementation."]})]});function D(){return(0,a.jsxs)(i.A,{title:"How to build a Sankey Diagram with React and D3.",seoDescription:"A step-by-step guide to build your very own Sankey Diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,a.jsx)(r.Z,{title:"Sankey Diagram",description:T,chartType:"sankey"}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["Two layers of information are required to build a Sankey diagram: a list of ",(0,a.jsx)("b",{children:"nodes"})," to build the rectangles and a list of ",(0,a.jsx)("b",{children:"links"})," to build the paths between them."]}),(0,a.jsx)("p",{children:"Many different data structures can be used to store such information. In this tutorial I suggest to start with the following:"}),(0,a.jsx)(s.d,{code:E}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"data"})," is an object with 2 properties: ",(0,a.jsx)("code",{children:"nodes"})," and"," ",(0,a.jsx)("code",{children:"links"}),"."]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"nodes"})," is an array where each node is an object defined by its index (",(0,a.jsx)("code",{children:"node"}),") and its ",(0,a.jsx)("code",{children:"name"}),". Note that any other feature can be added to nodes here."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"links"})," is another array listing the connections. They are defined by a ",(0,a.jsx)("code",{children:"source"})," and a ",(0,a.jsx)("code",{children:"target"})," and optionnaly with a ",(0,a.jsx)("code",{children:"value"}),"."]})]}),(0,a.jsx)(h.H,{text:"Explain how to build this data structure from various initial formats"}),(0,a.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,a.jsxs)("p",{children:["The goal here is to create a ",(0,a.jsx)("code",{children:"Sankey"})," component that will be stored in a ",(0,a.jsx)("code",{children:"Sankey.tsx"})," file. This component requires 3 props to render: a ",(0,a.jsx)("code",{children:"width"}),", a ",(0,a.jsx)("code",{children:"height"}),", and some"," ",(0,a.jsx)("code",{children:"data"}),"."]}),(0,a.jsxs)("p",{children:["The shape of the ",(0,a.jsx)("code",{children:"data"})," is described above. The"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," will be used to render an"," ",(0,a.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the Sankey."]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our ",(0,a.jsx)("code",{children:"Sankey"})," ","component:"]}),(0,a.jsx)(s.d,{code:L}),(0,a.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to layout (",(0,a.jsx)("code",{children:"rect"})," and ",(0,a.jsx)("code",{children:"path"})," ","positions), but it's React that will render them in the"," ",(0,a.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like"," ",(0,a.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,a.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,a.jsx)("h2",{id:"Nodes",children:"Draw the nodes"}),(0,a.jsxs)("p",{children:["To draw the nodes we first need to compute their positions on the SVG area. This is where the"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-sankey",children:"d3-sankey plugin"})," gets helpful with its ",(0,a.jsx)("code",{children:"sankey()"}),"function."]}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("code",{children:"sankey()"})," function must be called with a set of options described below as inline comments:"]}),(0,a.jsx)(s.d,{code:H}),(0,a.jsxs)("p",{children:["We now have a function called ",(0,a.jsx)("code",{children:"sankeyGenerator"})," that computes the sankey layout from our dataset. We can use it as follow:"]}),(0,a.jsx)(s.d,{code:I}),(0,a.jsxs)("p",{children:["And that's it. We now have 2 objects called ",(0,a.jsx)("code",{children:"nodes"})," and"," ",(0,a.jsx)("code",{children:"links"})," that provide all the necessary information about nodes and links. ",(0,a.jsx)("code",{children:"nodes"})," is an array. For each item we have",(0,a.jsx)("code",{children:"x0"}),", ",(0,a.jsx)("code",{children:"y0"}),", ",(0,a.jsx)("code",{children:"x1"})," and ",(0,a.jsx)("code",{children:"y1"})," ","that are the coordinates of the top-left and bottom right corners of the rectangle. We are ready for the drawing! ✏️"]}),(0,a.jsx)(c.$,{VizComponent:f,vizName:"SankeyDiagramNodeOnly",maxWidth:500,height:300,caption:"First step of our ongoing sankey diagram: the nodes are displayed using rectangles."}),(0,a.jsx)("h2",{id:"connections",children:"Draw the connections"}),(0,a.jsxs)("p",{children:["The other object we got from the ",(0,a.jsx)("code",{children:"sankey()"})," function is"," ",(0,a.jsx)("code",{children:"links"}),". It is an array where each item provides detail about a link."]}),(0,a.jsx)("p",{children:"Each item is an object with several properties. Among them:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"width"})," → provides the width of the arc we will build. We will pass it to the ",(0,a.jsx)("code",{children:"strokeWidth"})," property of the SVG"," ",(0,a.jsx)("code",{children:"path"}),"."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"source"})," and ",(0,a.jsx)("code",{children:"target"})," → provide a lot of details about the source and target nodes, including their positions. It makes it possible to pass a link to the"," ",(0,a.jsx)("code",{children:"sankeyLinkHorizontal()"})," function to get the SVG path we will give as the ",(0,a.jsx)("code",{children:"d"})," argument."]})]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, we can loop through the ",(0,a.jsx)("code",{children:"links"})," ","array and draw a",(0,a.jsx)("code",{children:"path"})," as follow:"]}),(0,a.jsx)(s.d,{code:C}),(0,a.jsx)("p",{children:"Resulting in a first Sankey diagram \uD83C\uDF89"}),(0,a.jsx)(c.$,{VizComponent:y,vizName:"SankeyDiagramBasic",maxWidth:500,height:300,caption:"First step of our ongoing arc diagram: the nodes are displayed at the bottom of the figure."}),(0,a.jsx)(d.r,{chartId:"sankey"}),(0,a.jsx)(l.Z,{chartId:"sankey"}),(0,a.jsx)("h2",{id:"application",children:"Application to a real dataset"}),(0,a.jsxs)("p",{children:["This Sankey diagram visualizes the flow of energy: supplies are on the left, and demands are on the right. It is a reproduction of this famous observable"," ",(0,a.jsx)("a",{href:"https://observablehq.com/@d3/sankey/2?intent=fork",children:"example"}),". Links show how varying amounts of energy are converted or transmitted before being consumed or lost."]}),(0,a.jsxs)("p",{children:["The code is very similar to the example above. On top of it, a"," ",(0,a.jsx)("b",{children:"color scale"})," is used for the node and connection colors, and some text ",(0,a.jsx)("b",{children:"labels"})," have been added."]}),(0,a.jsx)(c.$,{VizComponent:N,vizName:"SankeyDiagramEnergyFlow",maxWidth:1e3,height:800,caption:"A Sankey diagram showing the flow of energy. Supplies on the left, demands on the right."}),(0,a.jsx)(h.H,{text:"Add hover effect to highlight links"}),(0,a.jsx)(h.H,{text:"Add gradient along links"}),(0,a.jsx)(h.H,{text:"Fix types"}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(o.Z,{chartFamily:"flow"}),(0,a.jsx)("div",{className:"mt-20"})]})}let E='\nconst data = {\n  nodes: [\n      { node: 0, name: "node0" },\n      { node: 1, name: "node1" },\n      { node: 2, name: "node2" },\n      { node: 3, name: "node3" },\n  ],\n  links: [\n      { source: 0, target: 2, value: 2 },\n      { source: 1, target: 2, value: 2 },\n      { source: 1, target: 3, value: 2 },\n  ]\n}\n\n'.trim(),L='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype SankeyProps = {\n  width: number;\n  height: number;\n  data: number[];\n};\n\nexport const Sankey = ({ width, height, data }: SankeyProps) => {\n\n  // read the data\n  // create a color scale for the nodes\n  // compute node position thanks to the d3.sankey() function\n  // build the rectangles and arcs\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <rect> and <path>\n      </svg>\n    </div>\n  );\n};\n'.trim(),H="\nconst sankeyGenerator = sankey()  // Main function of the d3-sankey plugin that computes the layout\n    .nodeWidth(26)                  // width of the node in pixels\n    .nodePadding(29)                // space between nodes\n    .extent([                       // chart area:\n      [MARGIN_X, MARGIN_Y],                   // top-left coordinates\n      [width - MARGIN_X, height - MARGIN_Y],  // botton-right coordinates\n    ])\n    .nodeId((node) => node.id)      // Accessor function: how to retrieve the id that defines each node. This id is then used for the source and target props of links\n    .nodeAlign(sankeyCenter);       // Algorithm used to decide node position\n".trim(),I="\nconst { nodes, links } = sankeyGenerator(data);\n".trim(),C='\nconst allLinks = links.map((link, i) => {\n  const linkGenerator = sankeyLinkHorizontal();\n  const path = linkGenerator(link);\n\n  return (\n    <path\n      key={i}\n      d={path}\n      stroke="#a53253"\n      fill="none"\n      strokeOpacity={0.1}\n      strokeWidth={link.width}\n    />\n  );\n});\n'.trim()},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,2594,4590,9774,2888,179],function(){return e(e.s=81248)}),_N_E=e.O()}]);