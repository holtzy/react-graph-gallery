(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8996],{89270:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/axis/project",function(){return n(20586)}])},81122:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var s=n(85893),i=n(67294),r=n(59973),l=n(80615),c=n(88578),a=n(5);let o=e=>{let{VizComponent:t,vizName:n,height:o=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,i.useState)(!1),p=(0,i.useRef)(null),f=(0,r.B)(p);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(c.X,{vizName:n})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:o,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:o,width:f.width})})}),(0,s.jsx)(l.Y,{children:h}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},88578:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var s=n(85893);n(67294);let i=e=>{let{vizName:t}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},41843:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var s=n(85893),i=n(49700),r=n(63476),l=n(17414),c=n(41664),a=n.n(c);let o=e=>{let{children:t,title:n,seoDescription:c,previousTocItem:o,nextTocItem:d}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{title:n,seoDescription:c}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsxs)("div",{className:"flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50",children:[o?(0,s.jsxs)(a(),{href:o.link,className:"text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text",children:"← Previous"}),(0,s.jsx)("p",{children:o.name})]}):(0,s.jsx)("div",{className:"w-96"}),d&&(0,s.jsxs)(a(),{href:d.link,className:"text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted ",children:[(0,s.jsx)("span",{className:"uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text",children:"Next →"}),(0,s.jsx)("p",{children:d.name})]})]}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(r.Z,{})})]})}},80615:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var s=n(85893);let i=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var s=n(85893),i=n(32581),r=n(15660),l=n.n(r),c=n(67294),a=n(45993),o=n.n(a);let d=e=>{let{code:t}=e,[n,r]=(0,c.useState)(!1),a=(0,c.useRef)(null);(0,c.useEffect)(()=>{a.current&&l().highlightElement(a.current)},[a,t]);let d=(0,s.jsx)("div",{onClick:()=>{navigator.clipboard.writeText(t),r(!0)},className:o().codeChunckCopyButton,children:n?"Copied":(0,s.jsx)(i.Z,{size:14,style:{padding:0}})});return(0,s.jsxs)("div",{className:"mb-6 relative",children:[(0,s.jsx)("pre",{className:"rounded-md line-numbers",children:(0,s.jsx)("code",{ref:a,className:"language-javascript",children:t})}),(0,s.jsx)("div",{className:o().copyButtonContainer,children:d})]})}},59973:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var s=n(67294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,i]=(0,s.useState)(t),r=()=>{i(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),(0,s.useEffect)(()=>{r()},[e]),n}},20586:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var s=n(85893);n(67294);var i=n(43710),r=n(41843),l=n(11236),c=n(41664),a=n.n(c),o=n(3572),d=n(81122),h=n(5),u=n(77522),x=n(44741);function p(){let e=l.Y.find(e=>"/course/axis/project"===e.link);return e?(0,s.jsxs)(r.p,{title:e.name,seoDescription:"",nextTocItem:l.Y.find(e=>"/course/responsiveness/introduction"===e.link),previousTocItem:l.Y.find(e=>"/course/axis/axis-with-d3"===e.link),children:[(0,s.jsx)(i.Z,{title:e.name,lessonStatus:e.status,readTime:e.readTime,selectedLesson:e,description:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("p",{children:["We've built a solid foundation in ",(0,s.jsx)("b",{children:"D3"}),", ",(0,s.jsx)("b",{children:"SVG"}),", and"," ",(0,s.jsx)("b",{children:"scales"}),"! Now, let's put that knowledge to the test by recreating a barplot inspired by ",(0,s.jsx)("b",{children:"The Economist"}),"."]})})}),(0,s.jsx)("h2",{children:"Our Objective"}),(0,s.jsx)("p",{children:"In this lesson, we aim to recreate a chart from The Economist with several key design elements:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Title, subtitle, and footer"}),(0,s.jsx)("li",{children:"Grid lines with values displayed at the top"}),(0,s.jsx)("li",{children:"Inline labels placed inside or outside the bars"})]}),(0,s.jsx)("p",{children:(0,s.jsx)("br",{})}),(0,s.jsx)(x.c,{width:550,height:550}),(0,s.jsx)("h2",{children:"The data"}),(0,s.jsx)("p",{children:"The dataset is very simple! It looks like this:"}),(0,s.jsx)(o.d,{code:'\ndata = [\n  {\n    "country": "Afghanistan",\n    "continent": "Asia",\n    "lifeExp": 43.828,\n    "pop": 31889923,\n    "gdpPercap": 974.5803384\n  },\n  {\n    "country": "Albania",\n    "continent": "Europe",\n    "lifeExp": 76.423,\n    "pop": 3600523,\n    "gdpPercap": 5937.029526\n  }\n]\n'.trim()}),(0,s.jsxs)("p",{children:["You can find the complete js object"," ",(0,s.jsx)("a",{href:"https://github.com/holtzy/react-graph-gallery/blob/main/viz/BarplotTheEconomist/data.ts",children:"here"}),"."]}),(0,s.jsx)("p",{children:(0,s.jsx)(a(),{className:(0,u.cn)("no-underline",(0,h.d)({variant:"default"})),href:"https://github.com/holtzy/react-graph-gallery/blob/main/viz/BarplotTheEconomist/data.ts",children:"Get full data"})}),(0,s.jsx)("h2",{children:"Good Luck!"}),(0,s.jsx)("p",{children:"Here are a few helpful hints:"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["Use ",(0,s.jsx)("code",{children:"xScale.ticks(10)"})," to generate an array of optimal tick values."]}),(0,s.jsxs)("li",{children:["Bar color is ",(0,s.jsx)("code",{children:"#076fa2"})]})]}),(0,s.jsx)("h2",{children:"Solution"}),(0,s.jsx)(d.$,{VizComponent:x.c,vizName:"BubblePlotBasic",maxWidth:600,height:500,caption:"A clean bubble chart built with d3.js in a react context. A color scale is used to represent a categorical variable."})]}):null}},45993:function(e){e.exports={codeChunckCopyButton:"code-block_codeChunckCopyButton__yPrL_",copyButtonContainer:"code-block_copyButtonContainer__BrX9E"}}},function(e){e.O(0,[2343,7754,3950,7823,8190,3710,4741,9774,2888,179],function(){return e(e.s=89270)}),_N_E=e.O()}]);