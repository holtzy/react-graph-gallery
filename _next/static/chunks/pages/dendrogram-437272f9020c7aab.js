(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6456],{44854:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dendrogram",function(){return t(66985)}])},66717:function(e,n,t){"use strict";t.d(n,{U:function(){return a}});var r=t(85893);let a=e=>{let{title:n,children:t}=e;return(0,r.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,r.jsx)("summary",{className:"cursor-pointer",children:n}),(0,r.jsx)("div",{className:"pt-4",children:t})]})}},66985:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(85893),a=t(67294),i=t(80153),s=t(43710),d=t(61651),o=t(3572),h=t(81122);let c={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var l=t(43950);let x={top:60,right:60,bottom:60,left:60},u=e=>{let{width:n,height:t,data:i}=e,s=n-x.right-x.left,d=t-x.top-x.bottom,o=(0,a.useMemo)(()=>l.bT9(i),[i]),h=(0,a.useMemo)(()=>{let e=l.ki8().size([s,d]);return e(o)},[o,n,t]),c=h.descendants().map(e=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:e.x,cy:e.y,r:5,stroke:"transparent",fill:"#69b3a2"}),(0,r.jsx)("text",{x:e.x,y:e.y+25,fontSize:12,textAnchor:"middle",children:e.data.name})]},"node"+e.id)),u=h.descendants().map(e=>e.parent?(0,r.jsx)("line",{fill:"none",stroke:"grey",x1:e.x,x2:e.parent.x,y1:e.y,y2:e.parent.y},"line"+e.id):null);return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:n,height:t,children:(0,r.jsxs)("g",{width:s,height:d,transform:"translate(".concat([x.left,x.top].join(","),")"),children:[c,u]})})})},p=e=>{let{width:n=700,height:t=400}=e;return n?(0,r.jsx)(u,{data:c,width:n,height:t}):null},m={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},j={top:60,right:60,bottom:60,left:60},f=e=>{let{width:n,height:t,data:i}=e,s=n-j.right-j.left,d=t-j.top-j.bottom,o=(0,a.useMemo)(()=>l.bT9(i).sum(e=>e.value),[i]),h=(0,a.useMemo)(()=>{let e=l.ki8().size([d,s]);return e(o)},[o,n,t]),c=h.descendants().map(e=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:e.y,cy:e.x,r:5,stroke:"transparent",fill:"#69b3a2"}),!e.children&&(0,r.jsx)("text",{x:e.y+15,y:e.x,fontSize:12,textAnchor:"left",alignmentBaseline:"middle",children:e.data.name})]},e.id)),x=l.h5h(),u=h.descendants().map(e=>{if(e.parent)return(0,r.jsx)("path",{fill:"none",stroke:"grey",d:x({source:[e.parent.y,e.parent.x],target:[e.y,e.x]})},e.id)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:n,height:t,children:(0,r.jsxs)("g",{width:s,height:d,transform:"translate(".concat([j.left,j.top].join(","),")"),children:[c,u]})})})},y=e=>{let{width:n=700,height:t=400}=e;return(0,r.jsx)(f,{data:m,width:n,height:t})};var b=t(33623),g=t(66717),v=t(41664),w=t.n(v),k=t(56438);let T=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/dendrogram.html",children:"dendrogram"})," ","is a ",(0,r.jsx)("b",{children:"network"})," structure. It is constituted of a ",(0,r.jsx)("b",{children:"root"})," node that gives birth to several nodes connected by ",(0,r.jsx)("b",{children:"edges"})," or branches. The last nodes of the hierarchy are called ",(0,r.jsx)("b",{children:"leaves"}),"."]}),(0,r.jsxs)("p",{children:["This page explains how to build a dendrogram using ",(0,r.jsx)("b",{children:"d3.js"})," to compute the node position, and ",(0,r.jsx)("b",{children:"React"})," to render the nodes and edges. It starts by describing the required ",(0,r.jsx)("b",{children:"data"})," format, explains how to build a very ",(0,r.jsx)("b",{children:"basic"}),"dendrogram and then shows how to ",(0,r.jsx)("b",{children:"customize"})," it."]})]});function z(){return(0,r.jsxs)(i.A,{title:"Dendrogram | The React Graph Gallery",seoDescription:"How to build a dendrogram with React and D3.js. A set of re-usable components with explanation and code.",children:[(0,r.jsx)(s.Z,{title:"Dendrogram",description:T,chartType:"dendrogram"}),(0,r.jsx)("h2",{id:"data",children:"The Data"})," ",(0,r.jsxs)("p",{children:["The dataset describes a ",(0,r.jsx)("b",{children:"hierarchy"})," using a ",(0,r.jsx)("b",{children:"recursive"})," ","structure."]}),(0,r.jsxs)("p",{children:["Each item in this structure is called a ",(0,r.jsx)("b",{children:"node"}),". The lowest nodes of the hierarchy being called ",(0,r.jsx)("b",{children:"leaves"}),". The dataset is an object that has at least 3 properties: ",(0,r.jsx)("code",{children:"name"}),", ",(0,r.jsx)("code",{children:"value"})," and"," ",(0,r.jsx)("code",{children:"children"}),". Children is an array of nodes that have this structure too."]}),(0,r.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,r.jsx)(o.d,{code:I}),(0,r.jsxs)("p",{children:[(0,r.jsx)("u",{children:"Note"}),": if your data is not formatted this way at all, don't fret! In the next section I explain how to deal with ",(0,r.jsx)("b",{children:"other formats"}),". ⬇️"]}),(0,r.jsx)("h2",{id:"hierarchy",children:'The hierarchy format or "root node"'}),(0,r.jsxs)("p",{children:["A dendrogram is a ",(0,r.jsx)("b",{children:"hierarchical layout"}),". D3.js has a lot of"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"utility functions"})," ","allowing to deal with this kind of hierarchical data. To use those functions we first need to create a ",(0,r.jsx)("b",{children:'"Root node"'})," or"," ",(0,r.jsx)("b",{children:'"Hierarchy"'}),"."]}),(0,r.jsxs)("p",{children:["But ",(0,r.jsx)("i",{children:"what the heck is this"}),"? \uD83E\uDD14"]}),(0,r.jsxs)("p",{children:['A "root node" or "hierarchy" is a ',(0,r.jsx)("b",{children:"javascript object"}),". It has almost the same shape as the input data described above. But with some additional properties and methods that will make our life easier. This data structure is typed as a"," ",(0,r.jsx)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-hierarchy/index.d.ts#L29",children:"HierarchyNode"}),"."]}),(0,r.jsx)("h3",{children:"→ properties of a root node"}),(0,r.jsx)("p",{children:'This "root node" is a recursive structure of nodes as described in the data section above. But it has those new properties:'}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"data"}),": associated data"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"depth"}),": 0 for the root node, and increasing by one for each descendant."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"height"}),": 0 for leaf nodes, and the greatest distance from any descendant leaf otherwise."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"children"}),": an array of child nodes, if any; undefined for leaf nodes."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"value"}),": the summed value of the node and its descendants."]})]}),(0,r.jsxs)("p",{children:["On top of that, each node also has associated methods like"," ",(0,r.jsx)("code",{children:"node.descendants()"})," or ",(0,r.jsx)("code",{children:"node.links()"})," that we will describe later. See the complete list in the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"d3-hierarchy doc"}),"."," "]}),(0,r.jsx)("h3",{children:"→ how to build a root node"}),(0,r.jsxs)("p",{children:["If your dealing with the format describe in the previous section, you just have to pass it to the d3 ",(0,r.jsx)("code",{children:"hierarchy"})," function:"]}),(0,r.jsx)(o.d,{code:D}),(0,r.jsx)("p",{children:"Very convenient. If you have a different input, here is how to do:"}),(0,r.jsxs)(g.U,{startOpen:!1,title:"My input is a list of connection in .json format",children:[(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Let's say you have a ",(0,r.jsx)("b",{children:"tabular"})," format in json format. It's an array where each item represents a ",(0,r.jsx)("b",{children:"node"}),". For each node, you have a ",(0,r.jsx)("code",{children:"name"})," property and a ",(0,r.jsx)("code",{children:"parent"})," property that provides the parent name:"]}),(0,r.jsx)(o.d,{code:M}),(0,r.jsx)("p",{children:"In this case, you have to use the stratify function to create the hierarchy. This is how the syntax looks like:"}),(0,r.jsx)(o.d,{code:N}),(0,r.jsx)("p",{children:"And that's it. You have a hierarchy object and can follow the rest of this tutorial."})]}),(0,r.jsxs)(g.U,{startOpen:!1,title:"My input is a list of connection in .csv format",children:[(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["In this case, you can use the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-dsv#csvParse",children:"csvParse()"})," ","function of d3 to get a javascript array and use the"," ",(0,r.jsx)("code",{children:"stratify"})," function as shown in the accordion above."," "]}),(0,r.jsx)(o.d,{code:E})]}),(0,r.jsxs)("h2",{id:"cluster",children:["The ",(0,r.jsx)("code",{children:"cluster()"})," function"]}),(0,r.jsxs)("p",{children:["We now have a ",(0,r.jsx)("code",{children:"hierarchy"})," object that is a convenient data structure. From this, we need to compute the position of each node in our ",(0,r.jsx)("b",{children:"2d space"}),"."]}),(0,r.jsxs)("p",{children:["This is made possible thanks to the ",(0,r.jsx)("code",{children:"cluster()"})," function of d3.js. You can check its"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy#cluster",children:"offical documentation"}),"."]}),(0,r.jsxs)("h3",{children:["→ calling ",(0,r.jsx)("code",{children:"d3.cluster()"})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:"d3.cluster()"})," is a function that returns a layout generator. It is thus a function that returns a function. There is not much to provide to it, except the ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," of the figure."]}),(0,r.jsx)(o.d,{code:R}),(0,r.jsxs)("p",{children:["The generator we have now (",(0,r.jsx)("code",{children:"dendrogramGenerator"}),") expect 1 input: a ",(0,r.jsx)("code",{children:"hierarchy"})," object that we described in the previous chapter."]}),(0,r.jsx)(o.d,{code:A}),(0,r.jsxs)("h3",{children:["→ ",(0,r.jsx)("code",{children:"d3.cluster()"})," output"]}),(0,r.jsxs)("p",{children:["The output is almost the same as the initial ",(0,r.jsx)("b",{children:"hierarchy"})," object. But for each node we have 2 additional properties: ",(0,r.jsx)("code",{children:"x"})," and"," ",(0,r.jsx)("code",{children:"y"})," that are the coordinates we need to build the dendrogram!"]}),(0,r.jsx)("h2",{id:"basic dendrogram",children:"Most Basic dendrogram"}),(0,r.jsxs)("p",{children:["We have a list of ",(0,r.jsx)("code",{children:"node"})," in the ",(0,r.jsx)("code",{children:"dendrogram"})," ","object. For each, we now its position."]}),(0,r.jsx)("p",{children:"We just need to loop through all those nodes to build circles and lines to make the dendrogram"}),(0,r.jsxs)("p",{children:["Fortunately, the dendrogram object has a ",(0,r.jsx)("code",{children:"descendants()"})," ","method that list all nodes in a flat array. It is then possible to use a"," ",(0,r.jsx)("code",{children:"map()"})," to loop through nodes. So for instance drawing edges looks like:"]}),(0,r.jsx)(o.d,{code:_}),(0,r.jsx)("p",{children:"And the same idea goes for nodes and circles. That makes our first dendrogram!"}),(0,r.jsx)(h.$,{vizName:"DendrogramBasic",VizComponent:p,maxWidth:800,height:400,caption:"The most basic treemap made with react and d3.js."}),(0,r.jsx)("h2",{id:"horizontal dendrogram",children:"Horizontal dendrogram"}),(0,r.jsxs)("p",{children:["You can ",(0,r.jsx)("b",{children:"swap"})," the ",(0,r.jsx)("code",{children:"x"})," and ",(0,r.jsx)("code",{children:"y"})," coordinates to make the dendrogram ",(0,r.jsx)("b",{children:"horizontal"})," instead of vertical."]}),(0,r.jsxs)("p",{children:["You can also create smooth edges thanks to the"," ",(0,r.jsx)("code",{children:"d3.linkHorizontal()"})," function. The function is described in its"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-shape#linkHorizontal",children:"official documentation"}),". Basically, you need to provide an object with a ",(0,r.jsx)("code",{children:"source"})," ","and a ",(0,r.jsx)("code",{children:"target"})," property. The coordinates of those properties will be used to create the ",(0,r.jsx)("code",{children:"d"})," attribute of an svg"," ",(0,r.jsx)("code",{children:"path"})," element."]}),(0,r.jsx)(o.d,{code:S}),(0,r.jsx)(h.$,{vizName:"DendrogramHorizontal",VizComponent:y,maxWidth:600,height:400,caption:"Horizontal dendrogram with smooth edges made with react and d3.js."}),(0,r.jsx)("h2",{id:"Radial dendrogram",children:"Radial dendrogram"}),(0,r.jsx)("p",{children:"The radial dendrogram is a bit trickier to achieve."}),(0,r.jsx)("h3",{children:"→ polar coordinates"}),(0,r.jsxs)("p",{children:["We are dealing with polar coordinates here. As a result, the"," ",(0,r.jsx)("code",{children:"size"})," attribute of the",(0,r.jsx)("code",{children:"layout()"}),"function must be updated."]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["The ",(0,r.jsx)("b",{children:"first"})," item is ",(0,r.jsx)("code",{children:"360"}),". It will define the angle (in degree) to follow to reach a node. 0 is on top."]}),(0,r.jsxs)("li",{children:["The second item is the ",(0,r.jsx)("code",{children:"radius"})," of the figure. It will provide the distance to the center of a node in pixel."]})]}),(0,r.jsx)(o.d,{code:G}),(0,r.jsxs)("p",{children:["Since ",(0,r.jsx)("code",{children:"x"})," and ",(0,r.jsx)("code",{children:"y"})," are now describing an angle and a distance to the center, we can position a node using the following"," ",(0,r.jsx)("code",{children:"transform"})," property:"]}),(0,r.jsx)(o.d,{code:H}),(0,r.jsxs)("h3",{children:["→ Smooth edges with ",(0,r.jsx)("code",{children:"linkRadial"})]}),(0,r.jsxs)("p",{children:["Edges are not horizontal anymore, so the ",(0,r.jsx)("code",{children:"linkHorizontal"})," ","won't be helpful this time. But instead, the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-shape#linkRadial",children:"d3.linkRadial"})," ","function does the job based on an angle and a distance."]}),(0,r.jsx)("h3",{children:"→ Smart labels"}),(0,r.jsxs)("p",{children:["Please make sure your labels are properly oriented. It always give a bit of a headhache to pivot them correctly, and to control the anchoring appropriately. I talked about it extensively in the"," ",(0,r.jsx)(w(),{href:"circular-barplot",children:"circular barplot"})," section so please take a look for this matter."]}),(0,r.jsx)(h.$,{vizName:"DendrogramRadial",VizComponent:b.X,maxWidth:600,height:600,caption:"A minimalist radial dendrogram built using d3 and react."}),(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"Note"}),": please check of the first level edges are"," ",(0,r.jsx)("b",{children:"straight lines"}),". IMO it does not make sense to use"," ",(0,r.jsx)("code",{children:"linkRadial"})," for the first level."]}),(0,r.jsx)("h2",{id:"next",children:"Coming next"}),(0,r.jsx)("p",{children:"There is much more that needs to be added to this tutorial."}),(0,r.jsxs)("p",{children:["Using ",(0,r.jsx)("code",{children:"canvas"})," for rendering is often a requirement when the number of nodes gets big. ",(0,r.jsx)("b",{children:"Interactivity"})," is often necessary, for"," ",(0,r.jsx)("b",{children:"hover effect"})," or to ",(0,r.jsx)("b",{children:"collapse"})," a part of the tree. It also possible to ",(0,r.jsx)("b",{children:"map"})," the node circle size to a numeric variable."]}),(0,r.jsxs)("p",{children:["This will come soon! I have a newsletter called the"," ",(0,r.jsx)(w(),{href:"/subscribe",children:"dataviz universe"})," where I share my latest updates."]}),(0,r.jsx)(k.J,{href:"/subscribe",children:"Subscribe"}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3 mt-20"}),(0,r.jsx)(d.Z,{chartFamily:"partOfAWhole"}),(0,r.jsx)("div",{className:"mt-20"})]})}let I="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90},\n    {type: 'leaf', name:\"Robert\", value: 12},\n    {type: 'leaf', name:\"Emily\", value: 34},\n    ...\n}\n".trim(),D="\nconst hierarchy = useMemo(() => {\n  return d3.hierarchy(data);\n}, [data]);\n".trim(),M='\nexport const dataTabular =\n  [\n    { "name": "Eve", "parent": "" },\n    { "name": "Cain", "parent": "Eve" },\n    { "name": "Seth", "parent": "Eve" },\n    ...\n  ]\n'.trim(),N="\nconst hierarchyGenerator = stratify()\n  .id((node) => node.name)\n  .parentId((node) => node.parent);\n\nconst hierarchy = hierarchyGenerator(dataTabular);\n".trim(),E="\nconst dataTabular = d3.csvParse(text);\n".trim(),R="\n// Create a dendogram generator = a function that compute the position of the nodes in a hierarchy\nconst dendrogramGenerator = d3\n  .cluster()\n  .size([width, height]);\n".trim(),A="\n// use the generator on our hierarchy\nconst dendrogramLayout = dendrogramGenerator(hierarchy);\n".trim(),_='\nconst allEdges = dendrogram.descendants().map((node) => {\n  if (!node.parent) {\n    return null;\n  }\n  return (\n    <line\n      key={"line" + node.id}\n      fill="none"\n      stroke="grey"\n      x1={node.x}\n      x2={node.parent.x}\n      y1={node.y}\n      y2={node.parent.y}\n    />\n  );\n});\n'.trim(),S='\n<path\n  key={node.id}\n  fill="none"\n  stroke="grey"\n  d={horizontalLinkGenerator({\n    source: [node.parent.y, node.parent.x],\n    target: [node.y, node.x],\n  })}\n/>\n'.trim(),G="\nconst dendrogramGenerator = d3\n  .cluster()\n  .size([360, radius]);\nconst dendrogram = dendrogramGenerator(hierarchy);\n".trim(),H='\ntransform={"rotate(" + (node.x - 90) + ")translate(" + node.y + ")"}\n'.trim()}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,2594,9041,9774,2888,179],function(){return e(e.s=44854)}),_N_E=e.O()}]);