"use strict";var ce=Object.create;var I=Object.defineProperty;var de=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var he=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var me=(t,e)=>{for(var i in e)I(t,i,{get:e[i],enumerable:!0})},z=(t,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of pe(e))!ue.call(t,o)&&o!==i&&I(t,o,{get:()=>e[o],enumerable:!(n=de(e,o))||n.enumerable});return t};var C=(t,e,i)=>(i=t!=null?ce(he(t)):{},z(e||!t||!t.__esModule?I(i,"default",{value:t,enumerable:!0}):i,t)),fe=t=>z(I({},"__esModule",{value:!0}),t);var Re={};me(Re,{createHeadManager:()=>H,hrefToUrl:()=>g,mergeDataIntoQueryString:()=>A,router:()=>Pe,setupProgress:()=>q,shouldIntercept:()=>$,urlWithoutHash:()=>w});module.exports=fe(Re);var j=C(require("axios"),1);function T(t,e){let i;return function(...n){clearTimeout(i),i=setTimeout(()=>t.apply(this,n),e)}}function f(t,e){return document.dispatchEvent(new CustomEvent(`inertia:${t}`,e))}var B=t=>f("before",{cancelable:!0,detail:{visit:t}}),_=t=>f("error",{detail:{errors:t}}),Q=t=>f("exception",{cancelable:!0,detail:{exception:t}}),U=t=>f("finish",{detail:{visit:t}}),Y=t=>f("invalid",{cancelable:!0,detail:{response:t}}),x=t=>f("navigate",{detail:{page:t}}),Z=t=>f("progress",{detail:{progress:t}}),ee=t=>f("start",{detail:{visit:t}}),te=t=>f("success",{detail:{page:t}});function F(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(e=>F(e))||typeof t=="object"&&t!==null&&Object.values(t).some(e=>F(e))}function G(t,e=new FormData,i=null){t=t||{};for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&ne(e,ie(i,n),t[n]);return e}function ie(t,e){return t?t+"["+e+"]":e}function ne(t,e,i){if(Array.isArray(i))return Array.from(i.keys()).forEach(n=>ne(t,ie(e,n.toString()),i[n]));if(i instanceof Date)return t.append(e,i.toISOString());if(i instanceof File)return t.append(e,i,i.name);if(i instanceof Blob)return t.append(e,i);if(typeof i=="boolean")return t.append(e,i?"1":"0");if(typeof i=="string")return t.append(e,i);if(typeof i=="number")return t.append(e,`${i}`);if(i==null)return t.append(e,"");G(i,t,e)}var re={modal:null,listener:null,show(t){typeof t=="object"&&(t=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);let e=document.createElement("html");e.innerHTML=t,e.querySelectorAll("a").forEach(n=>n.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(e.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(t){t.keyCode===27&&this.hide()}};var oe=C(require("deepmerge"),1),N=C(require("qs"),1);function g(t){return new URL(t.toString(),window.location.toString())}function A(t,e,i,n="brackets"){let o=/^https?:\/\//.test(e.toString()),l=o||e.toString().startsWith("/"),h=!l&&!e.toString().startsWith("#")&&!e.toString().startsWith("?"),v=e.toString().includes("?")||t==="get"&&Object.keys(i).length,m=e.toString().includes("#"),c=new URL(e.toString(),"http://localhost");return t==="get"&&Object.keys(i).length&&(c.search=N.stringify((0,oe.default)(N.parse(c.search,{ignoreQueryPrefix:!0}),i),{encodeValuesOnly:!0,arrayFormat:n}),i={}),[[o?`${c.protocol}//${c.host}`:"",l?c.pathname:"",h?c.pathname.substring(1):"",v?c.search:"",m?c.hash:""].join(""),i]}function w(t){return t=new URL(t.href),t.hash="",t}var L=typeof window>"u",ge=!L&&/CriOS/.test(window.navigator.userAgent),ve=!L&&/EdgiOS/.test(window.navigator.userAgent),M=t=>JSON.parse(JSON.stringify(t)),se=t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})},k=class{constructor(){this.visitId=null}init({initialPage:e,resolveComponent:i,swapComponent:n}){this.page=e,this.resolveComponent=i,this.swapComponent=n,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){this.navigationType==="reload"&&window.history.state?.rememberedState&&delete window.history.state.rememberedState}handleInitialPageVisit(e){let i=window.location.hash;this.page.url.includes(i)||(this.page.url+=i),this.setPage(e,{preserveScroll:!0,preserveState:!0}).then(()=>x(e))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",T(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(e){typeof e.target.hasAttribute=="function"&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(e=>({top:e.scrollTop,left:e.scrollLeft}))})}resetScrollPositions(){se(()=>{window.scrollTo(0,0),this.scrollRegions().forEach(e=>{typeof e.scrollTo=="function"?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&document.getElementById(window.location.hash.slice(1))?.scrollIntoView()})}restoreScrollPositions(){se(()=>{this.page.scrollRegions&&this.scrollRegions().forEach((e,i)=>{let n=this.page.scrollRegions[i];if(n)typeof e.scrollTo=="function"?e.scrollTo(n.left,n.top):(e.scrollTop=n.top,e.scrollLeft=n.left);else return})})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(e){window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),x(e)})}locationVisit(e,i){try{let n={preserveScroll:i};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(n)),window.location.href=e.href,w(window.location).href===w(e).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(e){let i=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=window.history.state?.rememberedState??{},e.scrollRegions=window.history.state?.scrollRegions??[],this.setPage(e,{preserveScroll:i.preserveScroll,preserveState:!0}).then(()=>{i.preserveScroll&&this.restoreScrollPositions(),x(e)})}isLocationVisitResponse(e){return!!(e&&e.status===409&&e.headers["x-inertia-location"])}isInertiaResponse(e){return!!e?.headers["x-inertia"]}createVisitId(){return this.visitId={},this.visitId}cancelVisit(e,{cancelled:i=!1,interrupted:n=!1}){e&&!e.completed&&!e.cancelled&&!e.interrupted&&(e.cancelToken.abort(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=n,U(e),e.onFinish(e))}finishVisit(e){!e.cancelled&&!e.interrupted&&(e.completed=!0,e.cancelled=!1,e.interrupted=!1,U(e),e.onFinish(e))}resolvePreserveOption(e,i){return typeof e=="function"?e(i):e==="errors"?Object.keys(i.props.errors||{}).length>0:e}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(e,{method:i="get",data:n={},replace:o=!1,preserveScroll:l=!1,preserveState:h=!1,only:v=[],except:m=[],headers:c={},errorBag:s="",forceFormData:b=!1,onCancelToken:V=()=>{},onBefore:d=()=>{},onStart:p=()=>{},onProgress:P=()=>{},onFinish:y=()=>{},onCancel:le=()=>{},onSuccess:W=()=>{},onError:J=()=>{},queryStringArrayFormat:D="brackets"}={}){let S=typeof e=="string"?g(e):e;if((F(n)||b)&&!(n instanceof FormData)&&(n=G(n)),!(n instanceof FormData)){let[r,a]=A(i,S,n,D);S=g(r),n=a}let R={url:S,method:i,data:n,replace:o,preserveScroll:l,preserveState:h,only:v,except:m,headers:c,errorBag:s,forceFormData:b,queryStringArrayFormat:D,cancelled:!1,completed:!1,interrupted:!1};if(d(R)===!1||!B(R))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let X=this.createVisitId();this.activeVisit={...R,onCancelToken:V,onBefore:d,onStart:p,onProgress:P,onFinish:y,onCancel:le,onSuccess:W,onError:J,queryStringArrayFormat:D,cancelToken:new AbortController},V({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),ee(R),p(R);let K=!!(v.length||m.length);(0,j.default)({method:i,url:w(S).href,data:i==="get"?{}:n,params:i==="get"?n:{},signal:this.activeVisit.cancelToken.signal,headers:{...c,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...K?{"X-Inertia-Partial-Component":this.page.component}:{},...v.length?{"X-Inertia-Partial-Data":v.join(",")}:{},...m.length?{"X-Inertia-Partial-Except":m.join(",")}:{},...s&&s.length?{"X-Inertia-Error-Bag":s}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:r=>{n instanceof FormData&&(r.percentage=r.progress?Math.round(r.progress*100):0,Z(r),P(r))}}).then(r=>{if(!this.isInertiaResponse(r))return Promise.reject({response:r});let a=r.data;K&&a.component===this.page.component&&(a.props={...this.page.props,...a.props}),l=this.resolvePreserveOption(l,a),h=this.resolvePreserveOption(h,a),h&&window.history.state?.rememberedState&&a.component===this.page.component&&(a.rememberedState=window.history.state.rememberedState);let E=S,O=g(a.url);return E.hash&&!O.hash&&w(E).href===O.href&&(O.hash=E.hash,a.url=O.href),this.setPage(a,{visitId:X,replace:o,preserveScroll:l,preserveState:h})}).then(()=>{let r=this.page.props.errors||{};if(Object.keys(r).length>0){let a=s?r[s]?r[s]:{}:r;return _(a),J(a)}return te(this.page),W(this.page)}).catch(r=>{if(this.isInertiaResponse(r.response))return this.setPage(r.response.data,{visitId:X});if(this.isLocationVisitResponse(r.response)){let a=g(r.response.headers["x-inertia-location"]),E=S;E.hash&&!a.hash&&w(E).href===a.href&&(a.hash=E.hash),this.locationVisit(a,l===!0)}else if(r.response)Y(r.response)&&re.show(r.response.data);else return Promise.reject(r)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(r=>{if(!j.default.isCancel(r)){let a=Q(r);if(this.activeVisit&&this.finishVisit(this.activeVisit),a)return Promise.reject(r)}})}setPage(e,{visitId:i=this.createVisitId(),replace:n=!1,preserveScroll:o=!1,preserveState:l=!1}={}){return Promise.resolve(this.resolveComponent(e.component)).then(h=>{i===this.visitId&&(e.scrollRegions=this.page.scrollRegions||[],e.rememberedState=e.rememberedState||{},n=n||g(e.url).href===window.location.href,n?this.replaceState(e):this.pushState(e),this.swapComponent({component:h,page:e,preserveState:l}).then(()=>{o?this.restoreScrollPositions():this.resetScrollPositions(),n||x(e)}))})}pushState(e){this.page=e,ge||ve?setTimeout(()=>window.history.pushState(M(e),"",e.url),1):window.history.pushState(M(e),"",e.url)}replaceState(e){this.page=e,window.history.replaceState(M(e),"",e.url)}handlePopstateEvent(e){if(e.state!==null){let i=e.state,n=this.createVisitId();Promise.resolve(this.resolveComponent(i.component)).then(o=>{n===this.visitId&&(this.page=i,this.swapComponent({component:o,page:i,preserveState:!1}).then(()=>{this.restoreScrollPositions(),x(i)}))})}else{let i=g(this.page.url);i.hash=window.location.hash,this.replaceState({...this.page,url:i.href}),this.resetScrollPositions()}}get(e,i={},n={}){return this.visit(e,{...n,method:"get",data:i})}reload(e={}){return this.visit(window.location.href,{...e,preserveScroll:!0,preserveState:!0})}replace(e,i={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${i.method??"get"}() instead.`),this.visit(e,{preserveState:!0,...i,replace:!0})}post(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"post",data:i})}put(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"put",data:i})}patch(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"patch",data:i})}delete(e,i={}){return this.visit(e,{preserveState:!0,...i,method:"delete"})}remember(e,i="default"){L||this.replaceState({...this.page,rememberedState:{...this.page?.rememberedState,[i]:e}})}restore(e="default"){if(!L)return window.history.state?.rememberedState?.[e]}on(e,i){if(L)return()=>{};let n=o=>{let l=i(o);o.cancelable&&!o.defaultPrevented&&l===!1&&o.preventDefault()};return document.addEventListener(`inertia:${e}`,n),()=>document.removeEventListener(`inertia:${e}`,n)}};var be={buildDOMElement(t){let e=document.createElement("template");e.innerHTML=t;let i=e.content.firstChild;if(!t.startsWith("<script "))return i;let n=document.createElement("script");return n.innerHTML=i.innerHTML,i.getAttributeNames().forEach(o=>{n.setAttribute(o,i.getAttribute(o)||"")}),n},isInertiaManagedElement(t){return t.nodeType===Node.ELEMENT_NODE&&t.getAttribute("inertia")!==null},findMatchingElementIndex(t,e){let i=t.getAttribute("inertia");return i!==null?e.findIndex(n=>n.getAttribute("inertia")===i):-1},update:T(function(t){let e=t.map(n=>this.buildDOMElement(n));Array.from(document.head.childNodes).filter(n=>this.isInertiaManagedElement(n)).forEach(n=>{let o=this.findMatchingElementIndex(n,e);if(o===-1){n?.parentNode?.removeChild(n);return}let l=e.splice(o,1)[0];l&&!n.isEqualNode(l)&&n?.parentNode?.replaceChild(l,n)}),e.forEach(n=>document.head.appendChild(n))},1)};function H(t,e,i){let n={},o=0;function l(){let s=o+=1;return n[s]=[],s.toString()}function h(s){s===null||Object.keys(n).indexOf(s)===-1||(delete n[s],c())}function v(s,b=[]){s!==null&&Object.keys(n).indexOf(s)>-1&&(n[s]=b),c()}function m(){let s=e(""),b={...s?{title:`<title inertia="">${s}</title>`}:{}},V=Object.values(n).reduce((d,p)=>d.concat(p),[]).reduce((d,p)=>{if(p.indexOf("<")===-1)return d;if(p.indexOf("<title ")===0){let y=p.match(/(<title [^>]+>)(.*?)(<\/title>)/);return d.title=y?`${y[1]}${e(y[2])}${y[3]}`:p,d}let P=p.match(/ inertia="[^"]+"/);return P?d[P[0]]=p:d[Object.keys(d).length]=p,d},b);return Object.values(V)}function c(){t?i(m()):be.update(m())}return c(),{forceUpdate:c,createProvider:function(){let s=l();return{update:b=>v(s,b),disconnect:()=>h(s)}}}}var u=C(require("nprogress"),1),ae=null;function we(t){document.addEventListener("inertia:start",Ee.bind(null,t)),document.addEventListener("inertia:progress",ye),document.addEventListener("inertia:finish",Se)}function Ee(t){ae=setTimeout(()=>u.default.start(),t)}function ye(t){u.default.isStarted()&&t.detail.progress?.percentage&&u.default.set(Math.max(u.default.status,t.detail.progress.percentage/100*.9))}function Se(t){if(clearTimeout(ae),u.default.isStarted())t.detail.visit.completed?u.default.done():t.detail.visit.interrupted?u.default.set(0):t.detail.visit.cancelled&&(u.default.done(),u.default.remove());else return}function xe(t){let e=document.createElement("style");e.type="text/css",e.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${t};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${t};
      border-left-color: ${t};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(e)}function q({delay:t=250,color:e="#29d",includeCSS:i=!0,showSpinner:n=!1}={}){we(t),u.default.configure({showSpinner:n}),i&&xe(e)}function $(t){let e=t.currentTarget.tagName.toLowerCase()==="a";return!(t.target&&(t?.target).isContentEditable||t.defaultPrevented||e&&t.altKey||e&&t.ctrlKey||e&&t.metaKey||e&&t.shiftKey||e&&"button"in t&&t.button!==0)}var Pe=new k;
//# sourceMappingURL=index.js.map