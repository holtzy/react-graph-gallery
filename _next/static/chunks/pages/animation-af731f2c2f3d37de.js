(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6776],{7249:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/animation",function(){return i(5185)}])},1651:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var r=i(5893);i(7294);var s=i(9871),n=i(8843),l=i(4588);let a={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function o(t){let{chartFamily:e}=t,i=n.c.filter(t=>t.family===e).map((t,e)=>{let i=(0,l.y)(t.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(s.Z,{link:i,chartLogo:t.logo,caption:t.label,isAvailable:t.isAvailable,size:129})},e)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:e+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==a?void 0:a[e]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},2450:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});var r=i(5893);i(7294);var s=i(2050),n=i(9975),l=i(9942);function a(t){let{images:e}=t,i=s.F.filter(t=>e.includes(t.img)).map((t,e)=>(0,r.jsx)(n.X,{link:t.link,title:t.title,description:(0,r.jsx)("p",{children:t.description}),img:t.img,alt:t.alt},e));return(0,r.jsx)(l.E,{children:i})}},153:function(t,e,i){"use strict";i.d(e,{A:function(){return u}});var r=i(5893),s=i(9700),n=i(3476),l=i(7294),a=i(3084),o=i.n(a);function c(){let[t,e]=(0,l.useState)([]),[i,s]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let t=Array.from(document.querySelectorAll("h2"));e(t)},[]),(0,l.useEffect)(()=>{let e=()=>{let e=t.map(t=>t.offsetTop-t.scrollTop+t.clientTop),i=window.scrollY+150,r=e.reduce((t,e)=>Math.abs(e-i)<Math.abs(t-i)?e:t,0),n=e.findIndex(t=>t===r);s(-1===n?0:n)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]),(0,r.jsx)("div",{className:o().tableOfContent,children:t.map((e,s)=>(0,r.jsx)("p",{className:i===s?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:e=>{e.preventDefault(),t[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id))})}var d=i(7414),h=i(2594);let u=t=>{let{children:e,title:i,seoDescription:l}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:i,seoDescription:l}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)("div",{className:"wrapper",children:e}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(n.Z,{})}),(0,r.jsx)(c,{})]})}},6438:function(t,e,i){"use strict";i.d(e,{J:function(){return l}});var r=i(5893),s=i(1664),n=i.n(s);let l=t=>{let{children:e,href:i,isFilled:s,size:l="md",isFaded:a}=t,o=i.startsWith("www")||i.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";s?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===l&&(c+="text-sm py-1 px-2 "),"md"===l&&(c+="text-md py-2 px-4 "),a&&(c+="opacity-60");let d=(0,r.jsx)("span",{className:c,children:e});return o?(0,r.jsx)("a",{href:i,target:"_blank",children:d}):(0,r.jsx)(n(),{href:i,passHref:!0,children:d})}},9871:function(t,e,i){"use strict";i.d(e,{Z:function(){return c}});var r=i(5893);i(7294);var s=i(5887),n=i(8843),l=i(1664),a=i.n(l);let o=n.c.filter(t=>"general"===t.family).map(t=>t.logo);function c(t){let{chartLogo:e,caption:i,link:n,isAvailable:l,size:c}=t,h=o.includes(e),u=l?"opacity-100":"opacity-20";return(0,r.jsx)(a(),{href:l?n:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(l?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(s.Z,{chartLogo:e,size:c})}),h?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(d,{size:c})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:i})]})})}let d=t=>{let{size:e}=t;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},9965:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var r=i(5893);i(7294);var s=i(8843),n=i(4588),l=i(1859),a=i(6438),o=i(1832),c=i.n(o);let d=t=>{let{direction:e,text:i,children:s}=t;return(0,r.jsx)("span",{className:c().tooltip+" "+c()[e],id:i,children:s})};var h=i(5887);function u(t){let{title:e,description:i,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=t,f=s.c.find(t=>t.id===o);return(0,r.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,r.jsxs)("div",{className:"flex justify-start items-center",children:[(0,r.jsx)("h1",{children:e}),o&&f&&(0,r.jsx)("div",{className:"w-20 ml-4",children:(0,r.jsx)(h.Z,{chartLogo:null==f?void 0:f.logo})})]}),(0,r.jsx)(l.r,{}),(0,r.jsx)("div",{className:"max-w-xxl  py-2",children:i}),o&&(0,r.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),f&&(0,r.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,r.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,r.jsx)(a.J,{href:(0,n.y)(f.reactURL),size:"sm",children:f.label+" section"})}),u&&(0,r.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,r.jsx)(a.J,{href:"https://www.dataviz-inspiration.com/"+f.id,size:"sm",children:"inspiration"})}),x&&(0,r.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,r.jsx)(a.J,{href:f.d3URL,size:"sm",children:"d3 gallery"})}),(0,r.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,r.jsx)(a.J,{href:f.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})}},5185:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return u}});var r=i(5893);i(7294);var s=i(153),n=i(9965),l=i(1651),a=i(1664),o=i.n(a),c=i(2450),d=i(6438);let h=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Animation"})," is both the most ",(0,r.jsx)("b",{children:"challenging"})," and the most"," ",(0,r.jsx)("b",{children:"exciting"})," part of an interactive chart. Animation is like salt: use the right amount of it and your creation is a delight. Too much of it and it ",(0,r.jsx)("b",{children:"spoils the dish"})," \uD83E\uDD0C."]}),(0,r.jsxs)("p",{children:["There are ",(0,r.jsx)("b",{children:"many ways"})," to animate the transition between 2 chart states. Here I suggest to use ",(0,r.jsx)("code",{children:"react-spring"})," in combination with ",(0,r.jsx)("code",{children:"react"})," and",(0,r.jsx)("code",{children:"d3.js"}),"."]})]});function u(){return(0,r.jsxs)(s.A,{title:"Animation",seoDescription:"An overview of all the charts using some animation techniques in the gallery.",children:[(0,r.jsx)(n.Z,{title:"Animation",description:h,chartType:"animation"}),(0,r.jsx)("h2",{id:"WIP",children:"Work in Progress"}),(0,r.jsx)("p",{children:"This section is a work in progress. \uD83D\uDEA7"}),(0,r.jsxs)("p",{children:["For now, it just lists all the charts using ",(0,r.jsx)("code",{children:"react-spring"})," in the gallery."]}),(0,r.jsxs)("p",{children:["But I plan to write some ",(0,r.jsx)("b",{children:"complete tutorials"})," on this passionating and complicated topic. You can ",(0,r.jsx)(o(),{href:"/Subscribe",children:"subscribe"})," ","to the project to know when it's ready!"]}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})})," ",(0,r.jsx)(d.J,{isFilled:!0,size:"sm",href:"/subscribe",children:"Subscribe"}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)(c.Z,{images:["histogram-dataset-transition.gif","violinBoxplotTransition.png","violin-bucket-size-effect.gif","boxplot-violin-transition.gif","barplotDatasetAnimation.gif","bubble-plot-dataset-transition.gif","line-chart-data-transition.gif","streamgraph-offset-type-transition.gif"]}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,r.jsx)(l.Z,{chartFamily:"general"}),(0,r.jsx)("div",{className:"mt-20"})]})}},1832:function(t){t.exports={tooltip:"tooltip_tooltip__b_kg5",right:"tooltip_right__zvLDU",left:"tooltip_left__mQ0Xf",bottom:"tooltip_bottom__MVFNa",top:"tooltip_top__kPfp4"}},3084:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(t){t.O(0,[3996,645,693,9774,2888,179],function(){return t(t.s=7249)}),_N_E=t.O()}]);