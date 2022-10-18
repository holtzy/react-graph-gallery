(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{5312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cross-graph-highlight-interaction",function(){return r(8451)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(5893),i=r(7294),o=function(e){var t=e.startOpen,r=e.title,o=e.children,s=e.toc,a=(0,i.useState)(t),l=a[0],c=a[1],h=l?"max-h-full":"max-h-0",u=l?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},id:s,children:[l?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+h+" "+u,children:o})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),i=(r(7294),r(6761)),o=r(1878),s=r(1664),a=o.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function l(e){var t=e.chartLogo,r=e.caption,o=e.link,l=e.isAvailable,h=e.size,u=a.includes(t),d=l?"opacity-100":"opacity-20",f=l?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(s.default,{href:l?o:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:h,height:h},className:"relative mr-2 rounded-full "+d+" "+f,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(i.Z,{chartLogo:t})}),u?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:h})}):(0,n.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,n.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+d,children:r})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},h=r(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function d(e){var t=e.chartFamily,r=o.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,h.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(l,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5893),i=r(7294),o=r(217),s=r(4893),a=r(5380),l=r(7975),c=function(e){var t=e.VizComponent,r=e.vizName,c=e.height,h=void 0===c?400:c,u=e.maxWidth,d=void 0===u?800:u,f=e.caption,p=(0,i.useState)(!1),x=p[0],g=p[1],v=(0,i.useRef)(null),m=(0,o.B)(v);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,n.jsx)(l.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return g(!x)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,n.jsx)("div",{style:{height:h,width:"100%",maxWidth:d},ref:v,children:(0,n.jsx)(t,{height:h,width:m.width})})}),(0,n.jsx)(a.Y,{children:f}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return g(!x)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(5893),i=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(5893),i=function(e){var t=e.children,r=e.onClick,i=e.isFilled,o=e.size,s=void 0===o?"md":o,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(a+="text-sm py-1 px-2"),"md"===s&&(a+="text-md py-2 px-4"),a+=i?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:a,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(5893),i=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,r){"use strict";r.d(t,{d:function(){return a}});var n=r(5893),i=r(4725),o=r.n(i),s=r(7294),a=function(e){var t=e.code,r=(0,s.useRef)(null);return(0,s.useEffect)((function(){r.current&&o().highlightElement(r.current)}),[r,t]),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,n.useState)(t),i=r[0],o=r[1],s=function(){o(t())};return(0,n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,n.useLayoutEffect)((function(){s()}),[]),i}},8451:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return W}});var n=r(5893),i=r(7294),o=r(9281),s=r(4386),a=r(6978),l=r(7197),c=r(3485),h=r(8193),u=r(2535),d=function(e){var t=e.width,r=e.height,o=e.group,s=e.setGroup,a=e.color,l=(0,i.useMemo)((function(){for(var e=[];e.length<1500;){var t=Math.floor(100*Math.random())+1;e.push(t)}return e}),[]),c=(0,i.useMemo)((function(){return u.BYU().domain([0,100]).range([0,t])}),[t]),h=l.map((function(e,r){return(0,n.jsxs)("div",{onMouseEnter:function(){return s(r)},onMouseLeave:function(){return s(null)},style:{width:t,height:15,position:"relative",margin:1},children:[(0,n.jsx)("div",{style:{position:"absolute",height:"100%",width:c(e),backgroundColor:a,opacity:o===r?1:.4,borderRadius:2}}),(0,n.jsx)("div",{style:{position:"absolute",height:"100%",fontSize:8,marginLeft:4,marginTop:2,color:"grey"},children:(0,n.jsx)("p",{children:r})})]},r)}));return(0,n.jsx)("div",{style:{width:t,height:r,overflow:"scroll"},children:h})},f=function(e){var t=e.width,r=e.height,o=(0,i.useState)(null),s=o[0],a=o[1];return t&&r?(0,n.jsxs)("div",{style:{display:"flex",width:t,height:r,flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(d,{width:300,height:220,group:s,setGroup:a,color:"#e85252"}),(0,n.jsx)(d,{width:300,height:220,group:s,setGroup:a,color:"#6689c6"}),(0,n.jsx)(d,{width:300,height:220,group:s,setGroup:a,color:"#9a6fb0"}),(0,n.jsx)(d,{width:300,height:220,group:s,setGroup:a,color:"#a53253"})]}):null},p=function(e){var t=e.width,r=void 0===t?700:t,i=e.height,o=void 0===i?400:i;return(0,n.jsx)(f,{width:r,height:o})},x=r(33),g=r(6486);function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=(0,i.createContext)(null),j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eventTarget=new EventTarget}var t,r,n;return t=e,(r=[{key:"addListener",value:function(e){var t=this,r=function(t){e(t.detail)};return this.eventTarget.addEventListener("groupchange",r),function(){t.eventTarget.removeEventListener("groupchange",r)}}},{key:"emit",value:function(e){this.eventTarget.dispatchEvent(new CustomEvent("groupchange",{detail:e}))}}])&&v(t.prototype,r),n&&v(t,n),e}(),w=function(e){var t=e.children,r=(0,i.useRef)(new j);return(0,n.jsx)(m.Provider,{value:r.current,children:t})},y=r(2542),b=r.n(y),N=function(e){var t=e.width,r=e.height,o=e.color,s=(0,i.useRef)(null),a=(0,i.useMemo)((function(){for(var e=[];e.length<1500;){var t=Math.floor(100*Math.random())+1;e.push(t)}return e}),[]),l=(0,i.useMemo)((function(){return u.BYU().domain([0,100]).range([0,t])}),[t]),c=function(e){var t=(0,i.useContext)(m),r=(0,i.useRef)(e);(0,i.useLayoutEffect)((function(){r.current=e}));var n=(0,i.useRef)(null),o=(0,i.useCallback)((function(e){var t=n.current;(0,g.isEqual)(e,t)||r.current(e),n.current=e}),[]);return(0,i.useEffect)((function(){return null===t||void 0===t?void 0:t.addListener((function(e){o(e)}))}),[o,t]),(0,i.useCallback)((function(e){return null===t||void 0===t?void 0:t.emit(e)}),[t])}((function(e){return function(e){if(s.current){var t=s.current.querySelectorAll(".".concat(b().highlighted)),r=!0,n=!1,i=void 0;try{for(var o,a=Array.from(t)[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)o.value.classList.remove("".concat(b().highlighted))}catch(p){n=!0,i=p}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}if(e){var l=s.current.querySelectorAll(".group_"+e),c=!0,h=!1,u=void 0;try{for(var d,f=Array.from(l)[Symbol.iterator]();!(c=(d=f.next()).done);c=!0)d.value.classList.add("".concat(b().highlighted))}catch(p){h=!0,u=p}finally{try{c||null==f.return||f.return()}finally{if(h)throw u}}}}}(e)})),h=a.map((function(e,r){return(0,n.jsxs)("div",{onMouseEnter:function(){return c(String(r))},onMouseLeave:function(){return c(null)},className:b().barContainer+" group_"+String(r),style:{width:t},children:[(0,n.jsx)("div",{className:b().bar,style:{width:l(e),backgroundColor:o}}),(0,n.jsx)("div",{className:b().text,children:(0,n.jsx)("p",{children:r})})]},r)}));return(0,n.jsx)("div",{ref:s,style:{width:t,height:r,overflow:"scroll"},children:h})},C=function(e){var t=e.width,r=e.height;return t&&r?(0,n.jsx)("div",{style:{display:"flex",width:t,height:r,flexWrap:"wrap",justifyContent:"center"},children:(0,n.jsxs)(w,{children:[(0,n.jsx)(N,{width:300,height:220,color:"#e85252"}),(0,n.jsx)(N,{width:300,height:220,color:"#6689c6"}),(0,n.jsx)(N,{width:300,height:220,color:"#9a6fb0"}),(0,n.jsx)(N,{width:300,height:220,color:"#a53253"})]})}):null},_=function(e){var t=e.width,r=void 0===t?700:t,i=e.height,o=void 0===i?400:i;return(0,n.jsx)(C,{width:r,height:o})},k=r(4414),z=r.n(k),E=function(e){var t=e.width,r=e.height,o=e.group,s=e.setGroup,a=e.color,l=(0,i.useRef)(null),c=(0,i.useMemo)((function(){for(var e=[];e.length<1500;){var t=Math.floor(100*Math.random())+1;e.push(t)}return e}),[]),h=(0,i.useMemo)((function(){return u.BYU().domain([0,100]).range([0,t])}),[t]);(0,i.useEffect)((function(){!function(e){if(l.current){var t=l.current.querySelectorAll(".".concat(z().highlighted)),r=!0,n=!1,i=void 0;try{for(var o,s=Array.from(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)o.value.classList.remove("".concat(z().highlighted))}catch(p){n=!0,i=p}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}if(e){var a=l.current.querySelectorAll(".group_"+e),c=!0,h=!1,u=void 0;try{for(var d,f=Array.from(a)[Symbol.iterator]();!(c=(d=f.next()).done);c=!0)d.value.classList.add("".concat(z().highlighted))}catch(p){h=!0,u=p}finally{try{c||null==f.return||f.return()}finally{if(h)throw u}}}}}(String(o))}),[o]);var d=(0,i.useMemo)((function(){return c.map((function(e,r){return(0,n.jsxs)("div",{onMouseEnter:function(){return s(r)},onMouseLeave:function(){return s(null)},className:z().barContainer+" group_"+String(r),style:{width:t},children:[(0,n.jsx)("div",{className:z().bar,style:{width:h(e),backgroundColor:a}}),(0,n.jsx)("div",{className:z().text,children:(0,n.jsx)("p",{children:r})})]},r)}))}),[c,t,r,a]);return(0,n.jsx)("div",{ref:l,style:{width:t,height:r,overflow:"scroll"},children:d})},S=function(e){var t=e.width,r=e.height,o=(0,i.useState)(null),s=o[0],a=o[1];return t&&r?(0,n.jsxs)("div",{style:{display:"flex",width:t,height:r,flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(E,{width:300,height:220,group:s,setGroup:a,color:"#e85252"}),(0,n.jsx)(E,{width:300,height:220,group:s,setGroup:a,color:"#6689c6"}),(0,n.jsx)(E,{width:300,height:220,group:s,setGroup:a,color:"#9a6fb0"}),(0,n.jsx)(E,{width:300,height:220,group:s,setGroup:a,color:"#a53253"})]}):null},L=function(e){var t=e.width,r=void 0===t?700:t,i=e.height,o=void 0===i?400:i;return(0,n.jsx)(S,{width:r,height:o})},G=(0,n.jsx)("p",{children:"This post explains how to add cross graph interactions in a react app. It focus on performance, showing how a naive approach with a shared state leads to a disappointing result and how a react context can solve the problem."}),B="\nconst [group, setGroup] = useState<number | null>(null);\n".trim(),M="\n<Barplot\n  width={300}\n  height={220}\n  group={group}\n  setGroup={setGroup}\n/>\n".trim(),A="\nstyle={{\n  opacity: group === i ? 1 : 0.4,\n}}\n".trim();function W(){return(0,n.jsxs)(o.A,{title:"Cross graph highlight interaction",seoDescription:"This blogpost explains how to add a highlight interaction between different vizs of a website. It relies on react and d3.js for rendering, and uses a context for performance.",children:[(0,n.jsx)(s.Z,{title:"Cross graph highlight interaction",description:G}),(0,n.jsxs)("blockquote",{children:["Disclaimer: the concepts explained here where showed to me by my colleague ",(0,n.jsx)("a",{href:"https://github.com/gvergnaud",children:"Gabriel Vergnaud"}),"."]}),(0,n.jsxs)(c.U,{title:"What is cross graph interaction",startOpen:!0,children:[(0,n.jsx)("p",{children:"What it is."}),(0,n.jsx)("p",{children:"working example"}),(0,n.jsx)("p",{children:"Why do we care?"}),(0,n.jsx)("p",{children:"Focus on performance"})]}),(0,n.jsxs)(c.U,{title:"Naive solution: a shared state",startOpen:!1,children:[(0,n.jsxs)("p",{children:["A first solution: a shared state. You defined a react state at the level of the component that wraps all your viz with"," ",(0,n.jsx)("code",{children:"useState"}),":"]}),(0,n.jsx)(h.d,{code:B}),(0,n.jsx)("p",{children:"You then pass the state and the setter function to each viz. Something like:"}),(0,n.jsx)(h.d,{code:M}),(0,n.jsx)("p",{children:"Then, for each shape item of the graph you're building, you check wether or not the shape should be highlighted, and changes the way it's rendered if so."}),(0,n.jsxs)("p",{children:["In the example below I slightly increase the opacity, so the"," ",(0,n.jsx)("code",{children:"div"})," as this in its style attribute:"]}),(0,n.jsx)(h.d,{code:A}),(0,n.jsx)("p",{children:"Here is the result for 4 barplots with 1500 items each:"}),(0,n.jsx)(x.$,{vizName:"CrossGraphInteractionSharedState",VizComponent:p,maxWidth:600,height:500,caption:"Four barplots with 1500 groups each. Hovering a group on a chart highlights it on other charts, with very poor performances."}),(0,n.jsx)("p",{children:"As you can see it works, but is very slow."}),(0,n.jsx)("p",{})]}),(0,n.jsxs)(c.U,{title:"Improving rerendering",startOpen:!1,children:[(0,n.jsx)("p",{children:"A first solution: a shared state."}),(0,n.jsx)(x.$,{vizName:"CrossGraphInteractionBetterRender",VizComponent:L,maxWidth:600,height:500,caption:"Four barplots with 3000 groups each. Hovering a group on a chart highlights it on other charts, with very poor performances."}),(0,n.jsx)("p",{children:"Why is it so slow?"}),(0,n.jsx)("p",{})]}),(0,n.jsxs)(c.U,{title:"React context and event emitter to the rescue",startOpen:!0,children:[(0,n.jsx)("p",{children:"Use a context to improve perf"}),(0,n.jsxs)("p",{children:["React documentation about"," ",(0,n.jsx)("a",{href:"https://reactjs.org/docs/context.html",children:"context"})]}),(0,n.jsx)("p",{children:"Context is primarily used when some data needs to be accessible by many components at different nesting levels."}),(0,n.jsxs)("p",{children:["Step 1 is to create the context with ",(0,n.jsx)("code",{children:"createContext"}),"."]}),(0,n.jsxs)("p",{children:["Doc about ",(0,n.jsx)("code",{children:"CustomEvent()"}),":"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",children:"link"}),"Basically you do const catFound = new CustomEvent('animalfound'). catFound is a CustomEvent. You can trigger it with"]}),(0,n.jsx)(x.$,{vizName:"CrossGraphInteractionWithContext",VizComponent:_,maxWidth:600,height:500,caption:"Four barplots with 3000 groups each. Hovering a group on a chart highlights it on other charts, with very poor performances."})]}),(0,n.jsxs)(c.U,{title:"Conclusion",startOpen:!0,children:[(0,n.jsx)("p",{children:"Article explains how to create a performant cross graph interaction using a react context and an event emitter."}),(0,n.jsx)("p",{children:"But there is more even more you should do"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"use debounce and throttling to avoid too many concurrent re-renders"}),(0,n.jsx)("li",{children:"don't highlight graphs that are outside of the view port"})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,n.jsx)(l.Z,{chartFamily:"general"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(a.Z,{})]})}},4414:function(e){e.exports={barContainer:"Barplot_barContainer__HrPr1",bar:"Barplot_bar__AUjxB",text:"Barplot_text__TiYq8",highlighted:"Barplot_highlighted__IhsBD"}},2542:function(e){e.exports={barContainer:"Barplot_barContainer__1Rutw",bar:"Barplot_bar__ZHVmU",text:"Barplot_text__BVwrL",highlighted:"Barplot_highlighted__8GTS1"}}},function(e){e.O(0,[3662,3888,5660,7045,9774,2888,179],(function(){return t=5312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);