(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{4977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/t-test-playground",function(){return n(39969)}])},61651:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var s=n(49871),i=n(28843),a=n(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function c(e){let{chartFamily:t}=e,n=i.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,a.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(s.Z,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=n(85893),s=n(67294),i=n(59973),a=n(80615),l=n(88578),c=n(5);let o=e=>{let{VizComponent:t,vizName:n,height:o=400,maxWidth:d=800,caption:h,fileToOpen:x}=e,[u,m]=(0,s.useState)(!1),f=(0,s.useRef)(null),p=(0,i.B)(f);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(l.X,{vizName:n,fileToOpen:x})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(c.z,{size:"sm",onClick:()=>m(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:f,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:o,width:p.width})})}),(0,r.jsx)(a.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(c.z,{size:"sm",onClick:()=>m(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(85893);n(67294);let s=e=>{let{vizName:t,height:n="500px",fileToOpen:s}=e;return console.log("rerendeeeerrrrr"),(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0&view=split"+(s?"&module=/".concat(s):""),style:{width:"100%",height:n,border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},80153:function(e,t,n){"use strict";n.d(t,{A:function(){return x}});var r=n(85893),s=n(49700),i=n(63476),a=n(67294),l=n(63084),c=n.n(l);function o(){let[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),i=t.findIndex(e=>e===r);s(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:c().tableOfContent,children:e.map((t,s)=>(0,r.jsx)("p",{className:n===s?"".concat(c().tocItem," ").concat(c().tocItemActive):c().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=n(17414),h=n(62594);let x=e=>{let{children:t,title:n,seoDescription:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:n,seoDescription:a}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(o,{})]})}},49871:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893);n(67294);var s=n(95887),i=n(28843),a=n(41664),l=n.n(a);let c=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function o(e){let{chartLogo:t,caption:n,link:i,isAvailable:a,size:o}=e,h=c.includes(t),x=a?"opacity-100":"opacity-20";return(0,r.jsx)(l(),{href:a?i:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:o,height:o},className:"relative mr-2 rounded-full "+x+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(s.Z,{chartLogo:t,size:o})}),h?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(d,{size:o})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+x,children:n})]})})}let d=e=>{let{size:t}=e;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var r=n(85893);let s=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return s}});var r=n(67294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,s]=(0,r.useState)(t),i=()=>{s(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,r.useEffect)(()=>{i()},[e]),n}},39969:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),s=n(67294),i=n(80153),a=n(43710),l=n(61651),c=n(81122),o=n(52604);let d=e=>{let t=e.sort(function(e,t){return e-t}),n=o.VRg(t,.25),r=o.VRg(t,.5),s=o.VRg(t,.75);if(!s||!n||!r)return;let i=s-n;return{min:n-1.5*i,q1:n,median:r,q3:s,max:s+1.5*i}},h=e=>{let{yScale:t,pixelsPerTick:n,width:i}=e,a=t.range(),l=(0,s.useMemo)(()=>{let e=a[0]-a[1];return t.ticks(Math.floor(e/n)).map(e=>({value:e,yOffset:t(e)}))},[t]);return(0,r.jsx)(r.Fragment,{children:l.map(e=>{let{value:t,yOffset:n}=e;return(0,r.jsxs)("g",{transform:"translate(0, ".concat(n,")"),shapeRendering:"crispEdges",children:[(0,r.jsx)("line",{x1:-10,x2:i+10,stroke:"#D2D7D3",strokeWidth:.5}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)",fill:"#D2D7D3"},children:t},t)]},t)})})},x=e=>{let{xScale:t}=e,[n,i]=t.range(),a=(0,s.useMemo)(()=>t.domain().map(e=>({value:e,xOffset:t(e)+t.bandwidth()/2})),[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{d:["M",n+20,0,"L",i-20,0].join(" "),fill:"none",stroke:"currentColor"}),a.map(e=>{let{value:t,xOffset:n}=e;return(0,r.jsxs)("g",{transform:"translate(".concat(n,", 0)"),children:[(0,r.jsx)("line",{y2:6,stroke:"currentColor"}),(0,r.jsx)("text",{style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)"},children:t},t)]},t)})]})},u=e=>{let{min:t,q1:n,median:s,q3:i,max:a,width:l,stroke:c,fill:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("line",{x1:l/2,x2:l/2,y1:t,y2:a,stroke:c,width:40}),(0,r.jsx)("rect",{x:0,y:i,width:l,height:n-i,stroke:c,fill:o}),(0,r.jsx)("line",{x1:0,x2:l,y1:s,y2:s,stroke:c,width:40})]})},m={top:30,right:30,bottom:30,left:50},f=e=>{let{width:t,height:n,data:i}=e,a=t-m.right-m.left,l=n-m.top-m.bottom,{chartMin:c,chartMax:f,groups:p}=(0,s.useMemo)(()=>{let[e,t]=o.Wem(i.map(e=>e.value)),n=i.map(e=>e.name).filter((e,t,n)=>n.indexOf(e)==t);return{chartMin:e,chartMax:t,groups:n}},[i]),j=o.BYU().domain([-1,20]).range([l,0]),g=o.tiA().range([0,a]).domain(p).padding(.25);var v=o.PKp().domain(p).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]);let w=p.map((e,t)=>{let n=i.filter(t=>t.name===e).map(e=>e.value),s=d(n);if(!s)return null;let{min:a,q1:l,median:c,q3:o,max:h}=s,x=n.map((e,t)=>(0,r.jsx)("circle",{cx:g.bandwidth()/2-20+40*Math.random(),cy:j(e),r:4,fill:"grey",fillOpacity:.3},t));return(0,r.jsxs)("g",{transform:"translate(".concat(g(e),",0)"),children:[(0,r.jsx)(u,{width:g.bandwidth(),q1:j(l),median:j(c),q3:j(o),min:j(a),max:j(h),stroke:"black",fill:v(e)}),x]},t)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{width:a,height:l,transform:"translate(".concat([m.left,m.top].join(","),")"),children:[w,(0,r.jsx)(h,{yScale:j,pixelsPerTick:30}),(0,r.jsx)("g",{transform:"translate(0, ".concat(l,")"),children:(0,r.jsx)(x,{xScale:g})})]})})})};var p=n(2162);let j=e=>{var t;let{width:n=700,height:i=400}=e,[a,l]=(0,s.useState)(1e3),[c,o]=(0,s.useState)(0),[d,h]=(0,s.useState)(1),x=g(10+c/2,d,a),u=g(10-c/2,d,a),m=x.map(e=>({name:"A",value:e})),j=u.map(e=>({name:"B",value:e})),v=m.concat(j),w=function(e,t){let n=function(e,t){let n=p.jStat.mean(e),r=p.jStat.mean(t),s=p.jStat.variance(e,!0),i=p.jStat.variance(t,!0),a=e.length,l=t.length;return(n-r)/Math.sqrt(s/a+i/l)}(e,t),r=e.length+t.length-2,s=2*(1-p.jStat.studentt.cdf(Math.abs(n),r));return{tStatistic:n,pValue:s}}(x,u),b=(0,r.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,r.jsx)("span",{className:"mt-2 font-thin",children:"→ Parameters"}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)("span",{className:"text-sm w-32",children:"Sample Size:"}),(0,r.jsx)("input",{type:"range",min:5,max:1e3,value:a,step:5,onChange:e=>l(Number(e.target.value)),style:{height:2,opacity:.5,marginLeft:10}}),(0,r.jsx)("span",{className:"text-sm ml-2",children:a})]}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)("span",{className:"text-sm w-32",children:"Effect Size:"}),(0,r.jsx)("input",{type:"range",min:0,max:5,value:c,step:.1,onChange:e=>o(Number(e.target.value)),style:{height:2,opacity:.5,marginLeft:10}}),(0,r.jsx)("span",{className:"text-sm ml-2",children:c})]}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)("span",{className:"text-sm w-32",children:"Standard Deviation"}),(0,r.jsx)("input",{type:"range",min:0,max:10,value:d,step:.1,onChange:e=>h(Number(e.target.value)),style:{height:2,opacity:.5,marginLeft:10}}),(0,r.jsx)("span",{className:"text-sm ml-2",children:d})]})]}),y=(0,r.jsxs)("div",{className:"flex flex-col items-start gap-2 mt-8",children:[(0,r.jsx)("span",{className:"mt-2 font-thin",children:"→ Results"}),(0,r.jsx)("span",{className:"text-sm",children:"p-value is "+(null===(t=w.pValue)||void 0===t?void 0:t.toFixed(6))})]});return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{height:280},children:[b,y]}),(0,r.jsx)(f,{data:v,width:n,height:i-280})]})};function g(e,t,n){let r=[];for(let s=0;s<n;s++){let n=Math.sqrt(-2*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random())*t+e;r.push(n)}return r}let v=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"p-value is nothing without size effect."}),(0,r.jsxs)("p",{children:["This post features an interactive sandbox that explores several edge cases, demonstrating how relying on these summary statistics without visualizing the data can be ",(0,r.jsx)("b",{children:"dangerously misleading"}),"."]})]});function w(){return(0,r.jsxs)(i.A,{title:"Stop chasing the p-value",seoDescription:"todo",children:[(0,r.jsx)(a.Z,{title:"Stop chasing the p-value",description:v,chartType:"scatter"}),(0,r.jsx)("h2",{id:"definition",children:"\uD83E\uDD14 What are p-value and effect size"}),(0,r.jsx)("h3",{children:"→ p-value"}),(0,r.jsxs)("p",{children:["R\xb2, or the"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Coefficient_of_determination",target:"_blank",children:"coefficient of determination"}),", measures the ",(0,r.jsx)("b",{children:"proportion of variance"})," in the ",(0,r.jsx)("u",{children:"dep"}),"endent variable that is explained by the ",(0,r.jsx)("u",{children:"indep"}),"endent variable in a regression model."]}),(0,r.jsxs)("p",{children:["It ranges from ",(0,r.jsx)("code",{children:"0"})," to ",(0,r.jsx)("code",{children:"1"}),", with higher values indicating a stronger linear relationship."]}),(0,r.jsx)("h3",{children:"→ effect size"}),(0,r.jsxs)("p",{children:["The"," ",(0,r.jsx)("a",{href:"https://en.wikipedia.org/wiki/Correlation_coefficient",target:"_blank",children:"correlation coefficient"})," ","(",(0,r.jsx)("code",{children:"r"}),") measures the ",(0,r.jsx)("b",{children:"strength"})," and ",(0,r.jsx)("b",{children:"direction"})," of a linear relationship between two variables, ranging from ",(0,r.jsx)("code",{children:"-1"})," ","to ",(0,r.jsx)("code",{children:"1"}),". R\xb2 is actually the square of the correlation coefficient in a simple linear regression!"]}),(0,r.jsxs)("p",{children:["The correlation describes the ",(0,r.jsx)("b",{children:"relationship"})," directly, R\xb2 focuses on the ",(0,r.jsx)("b",{children:"explanatory power "}),"of a regression model."]}),(0,r.jsx)("h2",{id:"sandbox",children:"\uD83C\uDFAE Scatterplot, R\xb2, and Draggable Circles"}),(0,r.jsxs)("p",{children:["Summary statistics are popular because they condense large datasets into a few ",(0,r.jsx)("b",{children:"easy-to-understand numbers"}),". However, relying solely on them can lead to a ",(0,r.jsx)("b",{children:"false sense of clarity"}),"."]}),(0,r.jsxs)("p",{children:["The graph below showcases datasets with high R\xb2 and correlation values, even when there's clearly ",(0,r.jsx)("b",{children:"no meaningful relationship"})," between x and y."]}),(0,r.jsxs)("p",{children:["Bonus: the circles are ",(0,r.jsx)("b",{children:"draggable"}),"! Experiment by moving them around and watch how the R\xb2 and correlation change in real time. It’s a great way to build intuition about these metrics."]}),(0,r.jsx)(c.$,{vizName:"TTestPlayground",VizComponent:j,maxWidth:500,height:580,caption:"Understand the pvalue."}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,r.jsx)(l.Z,{chartFamily:"flow"}),(0,r.jsx)("div",{className:"mt-20"})]})}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,2604,202,8190,3710,2594,9774,2888,179],function(){return e(e.s=4977)}),_N_E=e.O()}]);