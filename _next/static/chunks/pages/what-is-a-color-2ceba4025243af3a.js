(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{78879:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/what-is-a-color",function(){return o(93915)}])},61651:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var r=o(85893);o(67294);var s=o(49871),i=o(28843),n=o(77522);let l={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function a(e){let{chartFamily:t}=e,o=i.c.filter(e=>e.family===t).map((e,t)=>{let o=(0,n.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(s.Z,{link:o,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:122})},t)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==l?void 0:l[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:o})]})}},80153:function(e,t,o){"use strict";o.d(t,{A:function(){return u}});var r=o(85893),s=o(49700),i=o(63476),n=o(67294),l=o(63084),a=o.n(l);function c(){let[e,t]=(0,n.useState)([]),[o,s]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,n.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),o=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e,0),i=t.findIndex(e=>e===r);s(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:a().tableOfContent,children:e.map((t,s)=>(0,r.jsx)("p",{className:o===s?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var h=o(17414),d=o(62594);let u=e=>{let{children:t,title:o,seoDescription:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.A,{title:o,seoDescription:n}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(d.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(c,{})]})}},49871:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var r=o(85893);o(67294);var s=o(95887),i=o(28843),n=o(41664),l=o.n(n);let a=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:o,link:i,isAvailable:n,size:c}=e,d=a.includes(t),u=n?"opacity-100":"opacity-20";return(0,r.jsx)(l(),{href:n?i:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(n?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(s.Z,{chartLogo:t,size:c})}),d?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(h,{size:c})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:o})]})})}let h=e=>{let{size:t}=e;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})}},80615:function(e,t,o){"use strict";o.d(t,{Y:function(){return s}});var r=o(85893);let s=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},93915:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return h}});var r=o(85893);o(67294);var s=o(80153),i=o(43710),n=o(62594),l=o(61651),a=o(80615);let c=(0,r.jsx)("p",{children:"There are so many ways to define a color when talking with a computer. Let's take a tour and see what's the most appropriate in a dataviz point of view."});function h(){return(0,r.jsxs)(s.A,{title:"What is a color",seoDescription:"There are many ways to define a color when talking with a computer. Let's take a tour.",children:[(0,r.jsx)(i.Z,{title:"What is a color",description:c}),(0,r.jsx)("h2",{id:"todo",children:"Color on screen"}),(0,r.jsx)("p",{children:"A computer screen is made of thousands of pixels."}),(0,r.jsx)("p",{children:"Each pixel generates three colors of light (red, green, and blue) and the different colors we see are due to different combinations and intensities of these three primary colors."}),(0,r.jsx)("p",{children:"red, green and blue are the primary colors."}),(0,r.jsx)("h2",{id:"todo",children:"The RGB color model"}),(0,r.jsx)("p",{children:"The color information for each pixel is typically stored in a 24-bit format: 8 bit per primary color. This is 2^8 = 256 possibilities for each primary color. This means more than 16M possible color variations for each pixel (256^3)!"}),(0,r.jsx)("h2",{id:"todo",children:"The HSV, HSL and HSB color model"}),(0,r.jsx)("p",{children:"That's the famous color wheel you see in every color picker!"}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("img",{src:"/img/color-picked-me.png",alt:"overview of color picker.me",style:{maxWidth:400}}),(0,r.jsxs)(a.Y,{children:["On ",(0,r.jsx)("a",{href:"https://colorpicker.me",children:"colorpicker.me"})," you can define a color using its hue (vertical bar), its saturation (x axis of the square) and its lightness (vertical axis)"]})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"HSL"})," stands for hue, saturation, lightness"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"HSV"})," and ",(0,r.jsx)("b",{children:"HSB"})," are the same and stand for hue, saturation, value or hue, saturation, brightness respectively."]}),(0,r.jsx)("p",{children:"But what does it even mean?"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Hue: the initial color. Between 0 and 360."}),(0,r.jsx)("li",{children:"Saturation: when closer to 100, the color shines. represents how “colorful” the color is. Intensity. Purity. When 0, you get grey"}),(0,r.jsx)("li",{children:"Lighness, Value, Brightness"})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("img",{src:"/img/hsv-explanation.png",alt:"color cylinder of HSV",style:{maxWidth:400}}),(0,r.jsx)(a.Y,{children:"The color cylinder of HSV"})]}),(0,r.jsx)("p",{children:"There are an alternative to the RGB color model to more closely align with the way human vision perceives color-making attributes"}),(0,r.jsxs)("p",{children:["Indeed, it allows us to describe meaningful relationships between colors. For instance, to create 2 complementary colors you can select 2 colors on the opposite side of the wheel, with same saturation and brithness. Same principle for analogous, monochrome palette and other"," ",(0,r.jsx)("a",{href:"https://www.canva.com/colors/color-wheel/",children:"famous combinations"}),"."]}),(0,r.jsxs)("p",{children:["HSV is"," ",(0,r.jsx)("a",{href:"https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/",children:"criticized"}),". This is because in HSV the V (value) is just a measure for the physical lightness of color, but not for the perceived brightness. So 2 colors with the same value are not perceive with the same lightness by the Human Eye. There is a hue-dependency of brightness in this model."]}),(0,r.jsx)("p",{children:"Note: pastel color = high lightness and low saturation."}),(0,r.jsx)("h2",{id:"todo",children:"The CIELAB color model"}),(0,r.jsx)("p",{children:"Try to fix this difference between computer and human perception."}),(0,r.jsx)("p",{children:"unintuitive to use to generate colors"}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("img",{src:"/img/cielab-color-space.png",alt:"cielab color spec",style:{maxWidth:400}}),(0,r.jsx)(a.Y,{children:"The cielab color space"})]}),(0,r.jsx)("h2",{id:"todo",children:"The HCL color model"}),(0,r.jsx)("p",{children:"Stands for Hue-Chroma-Lightness. A cylindrical transformation of CIE Lab*"}),(0,r.jsx)("h2",{id:"todo",children:"Luminance of a color"}),(0,r.jsx)("p",{children:"TODO"}),(0,r.jsx)("h2",{id:"todo",children:"The Contrast Ratio"}),(0,r.jsxs)("p",{children:["The"," ",(0,r.jsx)("a",{href:"https://www.w3.org/TR/WCAG/",children:"Web Content Accessibility Guidelines"})," ","(WCAG) include convenient quantitative recommendations for making a color accessible based on the minimum acceptable contrast of foreground against background."]}),(0,r.jsx)("p",{children:"Basically, you can compare the luminance of 2 colors and compute their contrast ratio. The luminance is computed using the amount of red, green and blue in it."}),(0,r.jsxs)("p",{children:["To see the exact formulas and compute the contrast ratio between 2 colors, see"," ",(0,r.jsx)("a",{href:"https://observablehq.com/@mbostock/wcag-contrast-ratio",children:"this notebook"})," ","by Mike Bostock"]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("img",{src:"/img/contrast-ratio-calculator.png",alt:"contrast ratio calculator",style:{maxWidth:600}}),(0,r.jsxs)(a.Y,{children:["A"," ",(0,r.jsx)("a",{href:"https://observablehq.com/@mbostock/wcag-contrast-ratio",children:"tool"})," ","to compute the contrast ratio between 2 colors."]})]}),(0,r.jsx)("p",{children:"Note: the notebook provides the d3 code to compute this contrast ratio."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("hr",{className:"full-bleed  bord er bg-gray-200 mb-3 mt-10"}),(0,r.jsx)(l.Z,{chartFamily:"ranking"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(n.Z,{})]})}},63084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__jj0Ai",tocItem:"table-of-content_tocItem__osS9X",tocItemActive:"table-of-content_tocItemActive__CGMTh"}}},function(e){e.O(0,[2343,7754,8190,3710,2594,9774,2888,179],function(){return e(e.s=78879)}),_N_E=e.O()}]);