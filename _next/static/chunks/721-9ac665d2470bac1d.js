(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,a=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,u=void 0!==l&&l,m=e.priority,g=void 0!==m&&m,E=e.loading,C=e.lazyRoot,I=void 0===C?null:C,L=e.lazyBoundary,j=e.className,A=e.quality,R=e.width,M=e.height,_=e.style,T=e.objectFit,N=e.objectPosition,z=e.onLoadingComplete,F=e.placeholder,D=void 0===F?"empty":F,B=e.blurDataURL,H=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=s.useContext(v.ImageConfigContext),W=s.useMemo((function(){var e=h||U||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return i({},e,{allSizes:t,deviceSizes:n})}),[U]),q=H,Z=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(Z=q.layout),delete q.layout);var $=O;if("loader"in q){if(q.loader){var G=q.loader;$=function(e){e.config;var t=c(e,["config"]);return G(t)}}delete q.loader}var V="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var K=S(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(B=B||K.blurDataURL,V=K.src,(!Z||"fill"!==Z)&&(M=M||K.height,R=R||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var J=!g&&("lazy"===E||"undefined"===typeof E);((t="string"===typeof t?t:V).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,J=!1);b.has(t)&&(J=!1);y&&(u=!0);var Y,Q=o(s.useState(!1),2),X=Q[0],ee=Q[1],te=o(p.useIntersection({rootRef:I,rootMargin:L||"200px",disabled:!J}),3),ne=te[0],re=te[1],oe=te[2],ae=!J||re,ie={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:T,objectPosition:N},se=x(R),fe=x(M),de=x(A);0;var pe=Object.assign({},_,ce),ve="blur"!==D||X?{}:{backgroundSize:T||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===Z)ie.display="block",ie.position="absolute",ie.top=0,ie.left=0,ie.bottom=0,ie.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof fe){var me=fe/se,ge=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===Z?(ie.display="block",ie.position="relative",ue=!0,le.paddingTop=ge):"intrinsic"===Z?(ie.display="inline-block",ie.position="relative",ie.maxWidth="100%",ue=!0,le.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(fe,"%27/%3e")):"fixed"===Z&&(ie.display="inline-block",ie.position="relative",ie.width=se,ie.height=fe)}else 0;var ye={src:w,srcSet:void 0,sizes:void 0};ae&&(ye=P({config:W,src:t,unoptimized:u,layout:Z,width:se,quality:de,sizes:n,loader:$}));var he=t;0;var be,we="imagesrcset",Ee="imagesizes";we="imageSrcSet",Ee="imageSizes";var Se=(r(be={},we,ye.srcSet),r(be,Ee,ye.sizes),be),Pe=s.default.useLayoutEffect,xe=s.useRef(z),Oe=s.useRef(t);s.useEffect((function(){xe.current=z}),[z]),Pe((function(){Oe.current!==t&&(oe(),Oe.current=t)}),[oe,t]);var Ce=i({isLazy:J,imgAttributes:ye,heightInt:fe,widthInt:se,qualityInt:de,layout:Z,className:j,imgStyle:pe,blurStyle:ve,loading:E,config:W,unoptimized:u,placeholder:D,loader:$,srcString:he,onLoadingCompleteRef:xe,setBlurComplete:ee,setIntersection:ne,isVisible:ae,noscriptSizes:n},q);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:ie},ue?s.default.createElement("span",{style:le},Y?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,s.default.createElement(k,Object.assign({},Ce))),g?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},Se))):null)};var i=n(6495).Z,l=n(2648).Z,u=n(1598).Z,c=n(7273).Z,s=u(n(7294)),f=l(n(5443)),d=n(9309),p=n(7190),v=n(9977),m=(n(3794),n(2392));var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1}||{},y=g.experimentalUnoptimized,h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var E=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,a=new URL("".concat(t.path).concat(I(n))),i=a.searchParams;i.set("auto",i.getAll("auto").join(",")||"format"),i.set("fit",i.get("fit")||"max"),i.set("w",i.get("w")||r.toString()),o&&i.set("q",o.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(I(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(I(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function P(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,i=e.width,l=e.quality,u=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var o=e.deviceSizes,i=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,c=[];l=u.exec(r);l)c.push(parseInt(l[2]));if(c.length){var s,f=.01*(s=Math).min.apply(s,a(c));return{widths:i.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,u),f=s.widths,d=s.kind,p=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:c({config:t,src:n,quality:l,width:f[p]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=E.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function C(e,t,n,r,o,a){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&a(!0),null==o?void 0:o.current)){var n=e.naturalWidth,i=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:i})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,u=e.blurStyle,f=e.isLazy,d=e.placeholder,p=e.loading,v=e.srcString,m=e.config,g=e.unoptimized,y=e.loader,h=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,E=e.onLoad,S=e.onError,x=(e.isVisible,e.noscriptSizes),O=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=f?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},O,t,{decoding:"async","data-nimg":o,className:a,style:i({},l,u),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&C(e,v,0,d,h,b)}),[w,v,o,d,h,b]),onLoad:function(e){C(e.currentTarget,v,0,d,h,b),E&&E(e)},onError:function(e){"blur"===d&&b(!0),S&&S(e)}})),(f||"blur"===d)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},O,P({config:m,src:v,unoptimized:g,layout:o,width:n,quality:r,sizes:x,loader:y}),{decoding:"async","data-nimg":o,style:l,className:a,loading:p}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,i=o(n(7294)),l=n(6273),u=n(2725),c=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),v="undefined"!==typeof i.default.useTransition,m={};function g(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(o?"%"+o:"")]=!0}}var y=i.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,h=e.children,b=e.prefetch,w=e.passHref,E=e.replace,S=e.soft,P=e.shallow,x=e.scroll,O=e.locale,C=e.onClick,k=e.onMouseEnter,I=e.onTouchStart,L=e.legacyBehavior,j=void 0===L?!0!==Boolean(!1):L,A=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=h,!j||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var R=!1!==b,M=r(v?i.default.useTransition():[],2)[1],_=i.default.useContext(c.RouterContext),T=i.default.useContext(s.AppRouterContext);T&&(_=T);var N,z=i.default.useMemo((function(){var e=r(l.resolveHref(_,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(_,y):n||t}}),[_,o,y]),F=z.href,D=z.as,B=i.default.useRef(F),H=i.default.useRef(D);j&&(N=i.default.Children.only(n));var U=j?N&&"object"===typeof N&&N.ref:t,W=r(f.useIntersection({rootMargin:"200px"}),3),q=W[0],Z=W[1],$=W[2],G=i.default.useCallback((function(e){H.current===D&&B.current===F||($(),H.current=D,B.current=F),q(e),U&&("function"===typeof U?U(e):"object"===typeof U&&(U.current=e))}),[D,U,F,$,q]);i.default.useEffect((function(){var e=Z&&R&&l.isLocalURL(F),t="undefined"!==typeof O?O:_&&_.locale,n=m[F+"%"+D+(t?"%"+t:"")];e&&!n&&g(_,F,D,{locale:t})}),[D,F,Z,O,R,_]);var V={ref:G,onClick:function(e){j||"function"!==typeof C||C(e),j&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:u})};s?s(f):f()}}(e,_,F,D,E,S,P,x,O,T?M:void 0)},onMouseEnter:function(e){j||"function"!==typeof k||k(e),j&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),l.isLocalURL(F)&&g(_,F,D,{priority:!0})},onTouchStart:function(e){j||"function"!==typeof I||I(e),j&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),l.isLocalURL(F)&&g(_,F,D,{priority:!0})}};if(!j||w||"a"===N.type&&!("href"in N.props)){var K="undefined"!==typeof O?O:_&&_.locale,J=_&&_.isLocaleDomain&&d.getDomainLocale(D,K,_.locales,_.domainLocales);V.href=J||p.addBasePath(u.addLocale(D,K,_&&_.defaultLocale))}return j?i.default.cloneElement(N,V):i.default.createElement("a",Object.assign({},A,V),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!i,s=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],v=r(o.useState(null),2),m=v[0],g=v[1];o.useEffect((function(){if(i){if(s.current&&(s.current(),s.current=void 0),c||d)return;return m&&m.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},u.push(n),l.set(n,t),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[m,c,n,t,d]);var y=o.useCallback((function(){p(!1)}),[]);return[g,d,y]};var o=n(7294),a=n(9311),i="function"===typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){n(8418)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2271:function(e,t,n){"use strict";n.d(t,{J:function(){return ge}});var r=n(7294);function o(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}var a,i,l=((i=l||{})[i.None=0]="None",i[i.RenderStrategy=1]="RenderStrategy",i[i.Static=2]="Static",i),u=((a=u||{})[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:a,visible:i=!0,name:l}){let u=f(t,e);if(i)return s(u,n,r,l);let c=null!=a?a:0;if(2&c){let{static:e=!1,...t}=u;if(e)return s(t,n,r,l)}if(1&c){let{unmount:e=!0,...t}=u;return o(e?0:1,{0:()=>null,1:()=>s({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return s(u,n,r,l)}function s(e,t={},n,o){let{as:a=n,children:i,refName:l="ref",...u}=v(e,["unmount","static"]),c=void 0!==e.ref?{[l]:e.ref}:{},s="function"==typeof i?i(t):i;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let d={};if(a===r.Fragment&&Object.keys(p(u)).length>0){if(!(0,r.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,r.cloneElement)(s,Object.assign({},f(s.props,p(v(u,["ref"]))),d,c))}return(0,r.createElement)(a,Object.assign({},v(u,["ref"]),a!==r.Fragment&&c,a!==r.Fragment&&d),s)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if(e.defaultPrevented)return;n(e,...t)}}});return t}function d(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let m="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function g(e){let t=(0,r.useRef)(e);return m((()=>{t.current=e}),[e]),t}let y=function(e){let t=g(e);return r.useCallback(((...e)=>t.current(...e)),[t])},h=Symbol();function b(e,t=!0){return Object.assign(e,{[h]:t})}function w(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=y((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[h])))?void 0:n}let E={serverHandoffComplete:!1};var S;let P=0;function x(){return++P}let O=null!=(S=r.useId)?S:function(){let e=function(){let[e,t]=(0,r.useState)(E.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===E.serverHandoffComplete&&(E.serverHandoffComplete=!0)}),[]),e}(),[t,n]=r.useState(e?x:null);return m((()=>{null===t&&n(x())}),[t]),null!=t?""+t:void 0};var C=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(C||{});function k(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function I(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let L=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var j,A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(A||{}),R=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(R||{}),M=((j=M||{})[j.Previous=-1]="Previous",j[j.Next=1]="Next",j);function _(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(L))}var T=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(T||{});function N(e,t=0){var n;return e!==(null==(n=I(e))?void 0:n.body)&&o(t,{0:()=>e.matches(L),1(){let t=e;for(;null!==t;){if(t.matches(L))return!0;t=t.parentElement}return!1}})}let z=["textarea","input"].join(",");function F(e,t,n=!0){let r,o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:_(e),i=o.activeElement,l=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(i))-1;if(4&t)return Math.max(0,a.indexOf(i))+1;if(8&t)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},s=0,f=a.length;do{if(s>=f||s+f<=0)return 0;let e=u+s;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}r=a[e],null==r||r.focus(c),s+=l}while(r!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,z))&&n}(r)&&r.select(),r.hasAttribute("tabindex")||r.setAttribute("tabindex","0"),2}let D=(0,r.createContext)(null);D.displayName="OpenClosedContext";var B=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(B||{});function H(){return(0,r.useContext)(D)}function U({value:e,children:t}){return r.createElement(D.Provider,{value:e},t)}function W(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function q(e,t,n){let o=g(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}function Z(...e){return(0,r.useMemo)((()=>I(...e)),[...e])}function $(e,t,n,o){let a=g(n);(0,r.useEffect)((()=>{function n(e){a.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}var G=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(G||{});let V=d((function(e,t){let{features:n=1,...r}=e;return c({ourProps:{ref:t,"aria-hidden":2===(2&n)||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&n)&&2!==(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function J(){let e=(0,r.useRef)(0);return q("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}var Y,Q=((Y=Q||{})[Y.Open=0]="Open",Y[Y.Closed=1]="Closed",Y),X=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(X||{});let ee={0:e=>({...e,popoverState:o(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},te=(0,r.createContext)(null);function ne(e){let t=(0,r.useContext)(te);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return t}te.displayName="PopoverContext";let re=(0,r.createContext)(null);function oe(e){let t=(0,r.useContext)(re);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,oe),t}return t}re.displayName="PopoverAPIContext";let ae=(0,r.createContext)(null);function ie(){return(0,r.useContext)(ae)}ae.displayName="PopoverGroupContext";let le=(0,r.createContext)(null);function ue(e,t){return o(t.type,ee,e,t)}le.displayName="PopoverPanelContext";let ce=d((function(e,t){var n;let a=`headlessui-popover-button-${O()}`,i=`headlessui-popover-panel-${O()}`,l=(0,r.useRef)(null),u=w(t,b((e=>{l.current=e}))),s=(0,r.useReducer)(ue,{popoverState:1,button:null,buttonId:a,panel:null,panelId:i,beforePanelSentinel:(0,r.createRef)(),afterPanelSentinel:(0,r.createRef)()}),[{popoverState:f,button:d,panel:p,beforePanelSentinel:v,afterPanelSentinel:m},g]=s,h=Z(null!=(n=l.current)?n:d);(0,r.useEffect)((()=>g({type:3,buttonId:a})),[a,g]),(0,r.useEffect)((()=>g({type:5,panelId:i})),[i,g]);let E=(0,r.useMemo)((()=>{if(!d||!p)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(d))^Number(null==e?void 0:e.contains(p)))return!0;return!1}),[d,p]),S=(0,r.useMemo)((()=>({buttonId:a,panelId:i,close:()=>g({type:1})})),[a,i,g]),P=ie(),x=null==P?void 0:P.registerPopover,C=y((()=>{var e;return null!=(e=null==P?void 0:P.isFocusWithinPopoverGroup())?e:(null==h?void 0:h.activeElement)&&((null==d?void 0:d.contains(h.activeElement))||(null==p?void 0:p.contains(h.activeElement)))}));(0,r.useEffect)((()=>null==x?void 0:x(S)),[x,S]),$(null==h?void 0:h.defaultView,"focus",(e=>{var t,n,r,o;0===f&&(C()||!d||!p||null!=(n=null==(t=v.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=m.current)?void 0:r.contains)&&o.call(r,e.target)||g({type:1}))}),!0),function(e,t,n=!0){let o=(0,r.useRef)(!1);function a(n,r){if(!o.current||n.defaultPrevented)return;let a=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),i=r(n);if(null!==i&&i.ownerDocument.documentElement.contains(i)){for(let e of a){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(i))return}return!N(i,T.Loose)&&-1!==i.tabIndex&&n.preventDefault(),t(n,i)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{o.current=n}))}),[n]),q("click",(e=>a(e,(e=>e.target))),!0),q("blur",(e=>a(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}([d,p],((e,t)=>{g({type:1}),N(t,T.Loose)||(e.preventDefault(),null==d||d.focus())}),0===f);let k=y((e=>{g({type:1});let t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:d:d;null==t||t.focus()})),I=(0,r.useMemo)((()=>({close:k,isPortalled:E})),[k,E]),L=(0,r.useMemo)((()=>({open:0===f,close:k})),[f,k]),j=e,A={ref:u};return r.createElement(te.Provider,{value:s},r.createElement(re.Provider,{value:I},r.createElement(U,{value:o(f,{0:B.Open,1:B.Closed})},c({ourProps:A,theirProps:j,slot:L,defaultTag:"div",name:"Popover"}))))})),se=d((function(e,t){let[n,a]=ne("Popover.Button"),{isPortalled:i}=oe("Popover.Button"),l=(0,r.useRef)(null),u=`headlessui-focus-sentinel-${O()}`,s=ie(),f=null==s?void 0:s.closeOthers,d=(0,r.useContext)(le),p=null!==d&&d===n.panelId,v=w(l,t,p?null:e=>a({type:2,button:e})),g=w(l,t),h=Z(l),b=y((e=>{var t,r,o;if(p){if(1===n.popoverState)return;switch(e.key){case C.Space:case C.Enter:e.preventDefault(),null==(r=(t=e.target).click)||r.call(t),a({type:1}),null==(o=n.button)||o.focus()}}else switch(e.key){case C.Space:case C.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==f||f(n.buttonId)),a({type:0});break;case C.Escape:if(0!==n.popoverState)return null==f?void 0:f(n.buttonId);if(!l.current||(null==h?void 0:h.activeElement)&&!l.current.contains(h.activeElement))return;e.preventDefault(),e.stopPropagation(),a({type:1})}})),E=y((e=>{p||e.key===C.Space&&e.preventDefault()})),S=y((t=>{var r,o;k(t.currentTarget)||e.disabled||(p?(a({type:1}),null==(r=n.button)||r.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==f||f(n.buttonId)),a({type:0}),null==(o=n.button)||o.focus()))})),P=y((e=>{e.preventDefault(),e.stopPropagation()})),x=0===n.popoverState,I=(0,r.useMemo)((()=>({open:x})),[x]),L=function(e,t){let[n,o]=(0,r.useState)((()=>W(e)));return m((()=>{o(W(e))}),[e.type,e.as]),m((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}(e,l),j=e,R=p?{ref:g,type:L,onKeyDown:b,onClick:S}:{ref:v,id:n.buttonId,type:L,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:b,onKeyUp:E,onClick:S,onMouseDown:P},M=J(),_=y((()=>{let e=n.panel;e&&o(M.current,{[K.Forwards]:()=>F(e,A.First),[K.Backwards]:()=>F(e,A.Last)})}));return r.createElement(r.Fragment,null,c({ourProps:R,theirProps:j,slot:I,defaultTag:"button",name:"Popover.Button"}),x&&!p&&i&&r.createElement(V,{id:u,features:G.Focusable,as:"button",type:"button",onFocus:_}))})),fe=l.RenderStrategy|l.Static,de=d((function(e,t){let[{popoverState:n},o]=ne("Popover.Overlay"),a=w(t),i=`headlessui-popover-overlay-${O()}`,l=H(),u=null!==l?l===B.Open:0===n,s=y((e=>{if(k(e.currentTarget))return e.preventDefault();o({type:1})}));return c({ourProps:{ref:a,id:i,"aria-hidden":!0,onClick:s},theirProps:e,slot:(0,r.useMemo)((()=>({open:0===n})),[n]),defaultTag:"div",features:fe,visible:u,name:"Popover.Overlay"})})),pe=l.RenderStrategy|l.Static,ve=d((function(e,t){let{focus:n=!1,...a}=e,[i,l]=ne("Popover.Panel"),{close:u,isPortalled:s}=oe("Popover.Panel"),f=`headlessui-focus-sentinel-before-${O()}`,d=`headlessui-focus-sentinel-after-${O()}`,p=(0,r.useRef)(null),v=w(p,t,(e=>{l({type:4,panel:e})})),m=Z(p),g=H(),h=null!==g?g===B.Open:0===i.popoverState,b=y((e=>{var t;if(e.key===C.Escape){if(0!==i.popoverState||!p.current||(null==m?void 0:m.activeElement)&&!p.current.contains(m.activeElement))return;e.preventDefault(),e.stopPropagation(),l({type:1}),null==(t=i.button)||t.focus()}}));(0,r.useEffect)((()=>{var t;e.static||1===i.popoverState&&(null==(t=e.unmount)||t)&&l({type:4,panel:null})}),[i.popoverState,e.unmount,e.static,l]),(0,r.useEffect)((()=>{if(!n||0!==i.popoverState||!p.current)return;let e=null==m?void 0:m.activeElement;p.current.contains(e)||F(p.current,A.First)}),[n,p,i.popoverState]);let E=(0,r.useMemo)((()=>({open:0===i.popoverState,close:u})),[i,u]),S={ref:v,id:i.panelId,onKeyDown:b,onBlur:n&&0===i.popoverState?e=>{var t,n,r,o,a;let u=e.relatedTarget;!u||!p.current||null!=(t=p.current)&&t.contains(u)||(l({type:1}),((null==(r=null==(n=i.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,u))||(null==(a=null==(o=i.afterPanelSentinel.current)?void 0:o.contains)?void 0:a.call(o,u)))&&u.focus({preventScroll:!0}))}:void 0,tabIndex:-1},P=J(),x=y((()=>{let e=p.current;e&&o(P.current,{[K.Forwards]:()=>{F(e,A.First)},[K.Backwards]:()=>{var e;null==(e=i.button)||e.focus({preventScroll:!0})}})})),k=y((()=>{let e=p.current;e&&o(P.current,{[K.Forwards]:()=>{var e,t,n;if(!i.button)return;let r=_(),o=r.indexOf(i.button),a=r.slice(0,o+1),l=[...r.slice(o+1),...a];for(let u of l.slice())if((null==(t=null==(e=null==u?void 0:u.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=i.panel)?void 0:n.contains(u))){let e=l.indexOf(u);-1!==e&&l.splice(e,1)}F(l,A.First,!1)},[K.Backwards]:()=>F(e,A.Last)})}));return r.createElement(le.Provider,{value:i.panelId},h&&s&&r.createElement(V,{id:f,ref:i.beforePanelSentinel,features:G.Focusable,as:"button",type:"button",onFocus:x}),c({ourProps:S,theirProps:a,slot:E,defaultTag:"div",features:pe,visible:h,name:"Popover.Panel"}),h&&s&&r.createElement(V,{id:d,ref:i.afterPanelSentinel,features:G.Focusable,as:"button",type:"button",onFocus:k}))})),me=d((function(e,t){let n=(0,r.useRef)(null),o=w(n,t),[a,i]=(0,r.useState)([]),l=y((e=>{i((t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t}))})),u=y((e=>(i((t=>[...t,e])),()=>l(e)))),s=y((()=>{var e;let t=I(n);if(!t)return!1;let r=t.activeElement;return!(null==(e=n.current)||!e.contains(r))||a.some((e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))}))})),f=y((e=>{for(let t of a)t.buttonId!==e&&t.close()})),d=(0,r.useMemo)((()=>({registerPopover:u,unregisterPopover:l,isFocusWithinPopoverGroup:s,closeOthers:f})),[u,l,s,f]),p=(0,r.useMemo)((()=>({})),[]),v=e,m={ref:o};return r.createElement(ae.Provider,{value:d},c({ourProps:m,theirProps:v,slot:p,defaultTag:"div",name:"Popover.Group"}))})),ge=Object.assign(ce,{Button:se,Overlay:de,Panel:ve,Group:me})},9065:function(e,t,n){"use strict";var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))}));t.Z=o},5506:function(e,t,n){"use strict";var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));t.Z=o},9743:function(e,t,n){"use strict";var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}));t.Z=o},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);