"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{5454:function(e,t,n){var i=n(1799),r=n(5893),s=n(2962),a=n(5697),l=n.n(a),o=n(3730),c=n(1848),d=function(e){var t=e.metadata;return t?(0,r.jsx)(s.PB,{title:t.metaTitle,description:t.metaDescription,openGraph:(0,i.Z)({title:t.metaTitle,description:t.metaDescription},t.shareImage&&{images:Object.values(t.shareImage.data.attributes.formats).map((function(e){return{url:(0,o.$)(e.url),width:e.width,height:e.height}}))}),twitter:(0,i.Z)({},t.twitterCardType&&{cardType:t.twitterCardType},t.twitterUsername&&{handle:t.twitterUsername})}):null};d.propTypes={metadata:l().shape({metaTitle:l().string.isRequired,metaDescription:l().string.isRequired,shareImage:c.Uu,twitterCardType:l().string,twitterUsername:l().string})},t.Z=d},2385:function(e,t,n){n.d(t,{Z:function(){return C}});var i=n(5893),r=n(7294),s=n(2271),a=n(9743),l=n(5506),o=n(9065),c=(n(1664),n(1799)),d=n(9534),u=n(3730),m=n(5675),x=n.n(m),h=n(5697),f=n.n(h),g=n(1848);x().propTypes={media:g.Uu,className:f().string};var p=function(e){var t=e.media,n=(0,d.Z)(e,["media"]),r=t.data.attributes,s=r.url,a=r.alternativeText,l=r.width,o=r.height,m=function(e){var t=e.src,n=e.width;return(0,u.$)(t,n)};return n.width&&n.height?(0,i.jsx)(x(),(0,c.Z)({className:n.$className,loader:m,src:s,alt:a||""},n)):(0,i.jsx)(x(),{className:n.$className,loader:m,layout:"responsive",width:n.width||l||"100%",height:n.height||o||"100%",objectFit:n.cover?"cover":"contain",src:s,alt:a||""})};function v(e){var t=e.size,n=e.text,r=e.onClick;switch(t){case"tiny":return(0,i.jsx)("button",{onClick:r,type:"button",className:"inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:n});case"small":return(0,i.jsx)("button",{onClick:r,type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:n});case"medium":return(0,i.jsx)("button",{onClick:r,type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:n});case"large":return(0,i.jsx)("button",{onClick:r,type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:n});case"extra-large":return(0,i.jsx)("button",{onClick:r,type:"button",className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:n})}}function b(e){var t=e.navbar,n=(0,r.useState)(),c=n[0],d=n[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.J,{as:"header",className:function(e){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(e.open?"fixed inset-0 z-40 overflow-y-auto":"","bg-white shadow-sm lg:static lg:overflow-y-visible")},children:function(e){var n=e.open;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8",children:[(0,i.jsx)("div",{className:"flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2",children:(0,i.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,i.jsx)("div",{className:"",children:(0,i.jsx)(p,{height:"50",width:"50",media:t.logo})})})}),(0,i.jsx)("div",{className:"min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6",children:(0,i.jsx)("div",{className:"flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0",children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search"}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,i.jsx)(a.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,i.jsx)("input",{id:"search",name:"search",className:"block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Search",type:"search",value:c,onChange:function(e){d(e.target.value),console.log(e.target.value)}})]})]})})}),(0,i.jsx)("div",{className:"flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden",children:(0,i.jsxs)(s.J.Button,{className:"-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,i.jsx)("span",{className:"sr-only",children:"Open menu"}),n?(0,i.jsx)(l.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,i.jsx)(o.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,i.jsx)("div",{className:"hidden lg:flex lg:items-center lg:justify-end xl:col-span-4",children:(0,i.jsx)("div",{className:"ml-6",children:(0,i.jsx)(v,{text:"Sign In",size:"medium",onClick:function(){}})})})]})}),(0,i.jsxs)(s.J.Panel,{as:"nav",className:"lg:hidden","aria-label":"Global",children:[(0,i.jsx)("div",{className:"max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4"}),(0,i.jsx)("div",{className:"border-t border-gray-200 pt-4 pb-3",children:(0,i.jsx)("div",{className:"max-w-3xl mx-auto px-4 flex items-center justify-center sm:px-6",children:(0,i.jsx)(v,{size:"small",text:"Sign In",onClick:function(){}})})})]})]})}})})}var j=n(9396),w=[{name:"Facebook",href:"#",icon:function(e){return(0,i.jsx)("svg",(0,j.Z)((0,c.Z)({fill:"currentColor",viewBox:"0 0 24 24"},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}))}},{name:"Instagram",href:"#",icon:function(e){return(0,i.jsx)("svg",(0,j.Z)((0,c.Z)({fill:"currentColor",viewBox:"0 0 24 24"},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})}))}},{name:"Twitter",href:"#",icon:function(e){return(0,i.jsx)("svg",(0,j.Z)((0,c.Z)({fill:"currentColor",viewBox:"0 0 24 24"},e),{children:(0,i.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}))}},{name:"GitHub",href:"#",icon:function(e){return(0,i.jsx)("svg",(0,j.Z)((0,c.Z)({fill:"currentColor",viewBox:"0 0 24 24"},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}))}},{name:"Dribbble",href:"#",icon:function(e){return(0,i.jsx)("svg",(0,j.Z)((0,c.Z)({fill:"currentColor",viewBox:"0 0 24 24"},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})}))}}];function y(){return(0,i.jsx)("footer",{className:"bg-white",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",children:[(0,i.jsx)("div",{className:"flex justify-center space-x-6 md:order-2",children:w.map((function(e){return(0,i.jsxs)("a",{href:e.href,className:"text-gray-400 hover:text-gray-500",children:[(0,i.jsx)("span",{className:"sr-only",children:e.name}),(0,i.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name)}))}),(0,i.jsx)("div",{className:"mt-8 md:mt-0 md:order-1",children:(0,i.jsx)("p",{className:"text-center text-base text-gray-400",children:"\xa9 2022 IMCON"})})]})})}var N=n(7205),C=function(e){var t=e.children,n=(0,r.useContext)(N.GlobalContext).global,s=n.navbar,a=n.footer;return(0,i.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,i.jsx)(b,{navbar:s}),(0,i.jsx)("div",{children:t}),(0,i.jsx)("div",{className:"absolute bottom-0 w-full",children:(0,i.jsx)(y,{footer:a})})]})}},1848:function(e,t,n){n.d(t,{Uu:function(){return s}});var i=n(5697),r=n.n(i),s=(r().shape({id:r().oneOfType([r().string,r().number]).isRequired,url:r().string.isRequired,text:r().string.isRequired,newTab:r().bool}),r().shape({data:r().shape({id:r().oneOfType([r().string,r().number]).isRequired,attributes:r().shape({alternativeText:r().string,mime:r().string.isRequired,url:r().string.isRequired})})}));r().shape({theme:r().string,text:r().string.isRequired,newTab:r().bool})}}]);