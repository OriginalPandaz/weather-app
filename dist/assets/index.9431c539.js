(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ye=new Map;x([0,1],"day");x([2],"cloudy-day");x([3],"cloudy");x([45,48],"fog");x([51,53,55,56,57,61,63,65,66,67,80,81,82],"rainy");x([71,73,75,77,85,86],"snowy");x([95,96,99],"thunder");function x(e,t){e.forEach(n=>{ye.set(n,t)})}function we(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ee}=Object.prototype,{getPrototypeOf:Z}=Object,G=(e=>t=>{const n=Ee.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>G(t)===e),q=e=>t=>typeof t===e,{isArray:P}=Array,D=q("undefined");function He(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const be=T("ArrayBuffer");function qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&be(e.buffer),t}const Je=q("string"),_=q("function"),Se=q("number"),Q=e=>e!==null&&typeof e=="object",ze=e=>e===!0||e===!1,k=e=>{if(G(e)!=="object")return!1;const t=Z(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},We=T("Date"),$e=T("File"),Ve=T("Blob"),Ke=T("FileList"),ve=e=>Q(e)&&_(e.pipe),Xe=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ee.call(e)===t||_(e.toString)&&e.toString()===t)},Ze=T("URLSearchParams"),Ge=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let u;for(r=0;r<i;r++)u=s[r],t.call(null,e[u],u,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Re=typeof self>"u"?typeof global>"u"?globalThis:global:self,ge=e=>!D(e)&&e!==Re;function K(){const{caseless:e}=ge(this)&&this||{},t={},n=(r,o)=>{const s=e&&Oe(t,o)||o;k(t[s])&&k(r)?t[s]=K(t[s],r):k(r)?t[s]=K({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&L(arguments[r],n);return t}const Qe=(e,t,n,{allOwnKeys:r}={})=>(L(t,(o,s)=>{n&&_(o)?e[s]=we(o,n):e[s]=o},{allOwnKeys:r}),e),Ye=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tt=(e,t,n,r)=>{let o,s,i;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&Z(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ot=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Z(Uint8Array)),st=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},it=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},at=T("HTMLFormElement"),ct=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ut=T("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},lt=e=>{Te(e,(t,n)=>{if(_(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!_(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ft=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},dt=()=>{},pt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ht=e=>{const t=new Array(10),n=(r,o)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return L(r,(i,u)=>{const d=n(i,o+1);!D(d)&&(s[u]=d)}),t[o]=void 0,s}}return r};return n(e,0)},a={isArray:P,isArrayBuffer:be,isBuffer:He,isFormData:Xe,isArrayBufferView:qe,isString:Je,isNumber:Se,isBoolean:ze,isObject:Q,isPlainObject:k,isUndefined:D,isDate:We,isFile:$e,isBlob:Ve,isRegExp:ut,isFunction:_,isStream:ve,isURLSearchParams:Ze,isTypedArray:ot,isFileList:Ke,forEach:L,merge:K,extend:Qe,trim:Ge,stripBOM:Ye,inherits:et,toFlatObject:tt,kindOf:G,kindOfTest:T,endsWith:nt,toArray:rt,forEachEntry:st,matchAll:it,isHTMLForm:at,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Te,freezeMethods:lt,toObjectSet:ft,toCamelCase:ct,noop:dt,toFiniteNumber:pt,findKey:Oe,global:Re,isContextDefined:ge,toJSONObject:ht};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ae=m.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(m,_e);Object.defineProperty(Ae,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(Ae);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var mt=typeof self=="object"?self.FormData:window.FormData;const yt=mt;function v(e){return a.isPlainObject(e)||a.isArray(e)}function xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,t,n){return e?e.concat(t).map(function(o,s){return o=xe(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function wt(e){return a.isArray(e)&&!e.some(v)}const Et=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function bt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(yt||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&bt(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,R){let S=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&wt(f)||a.isFileList(f)||a.endsWith(h,"[]")&&(S=a.toArray(f)))return h=xe(h),S.forEach(function(U,Ie){!(a.isUndefined(U)||U===null)&&t.append(i===!0?se([h],Ie,s):i===null?h:h+"[]",c(U))}),!1}return v(f)?!0:(t.append(se(R,h,s),c(f)),!1)}const p=[],w=Object.assign(Et,{defaultVisitor:l,convertValue:c,isVisitable:v});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(S,N){(!(a.isUndefined(S)||S===null)&&o.call(t,S,a.isString(N)?N.trim():N,h,w))===!0&&y(S,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Y(e,t){this._pairs=[],e&&J(e,this,t)}const Ne=Y.prototype;Ne.append=function(t,n){this._pairs.push([t,n])};Ne.toString=function(t){const n=t?function(r){return t.call(this,r,ie)}:ie;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function St(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ce(e,t,n){if(!t)return e;const r=n&&n.encode||St,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Ot{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ae=Ot,Pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rt=typeof URLSearchParams<"u"?URLSearchParams:Y,gt=FormData,Tt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),At=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Rt,FormData:gt,Blob},isStandardBrowserEnv:Tt,isStandardBrowserWebWorkerEnv:At,protocols:["http","https","file","blob","url","data"]};function _t(e,t){return J(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Nt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Fe(e){function t(n,r,o,s){let i=n[s++];const u=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Nt(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(xt(r),o,n,0)}),n}return null}const Ct={"Content-Type":void 0};function Pt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:Pe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Fe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _t(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return J(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Pt(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){z.headers[t]={}});a.forEach(["post","put","patch"],function(t){z.headers[t]=a.merge(Ct)});const ee=z,Ft=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Dt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Ft[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ce=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Lt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Bt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ue(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Ut(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function kt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(u,d,c){const l=F(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(o,l);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=j(u))}const i=(u,d)=>a.forEach(u,(c,l)=>s(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Bt(t)?i(Dt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Lt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&(!n||ue(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=F(i),i){const u=a.findKey(r,i);u&&(!n||ue(r,r[u],u,n))&&(delete r[u],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=j(o),delete n[s];return}const u=t?Ut(s):String(s).trim();u!==s&&delete n[s],n[u]=j(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ce]=this[ce]={accessors:{}}).accessors,o=this.prototype;function s(i){const u=F(i);r[u]||(kt(o,i),r[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(W.prototype);a.freezeMethods(W);const g=W;function $(e,t){const n=this||ee,r=t||n,o=g.from(r.headers);let s=r.data;return a.forEach(e,function(u){s=u.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function De(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});const jt=null;function Mt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const It=O.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ht(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!Ht(t)?qt(e,t):t}const Jt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const u=a.isString(i)?o(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function zt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Wt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,w=0;for(;p!==o;)w+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=l&&c-l;return y?Math.round(w*1e3/y):void 0}}function le(e,t){let n=0;const r=Wt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-n,d=r(u),c=s<=i;n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const $t=typeof XMLHttpRequest<"u",Vt=$t&&function(e){return new Promise(function(n,r){let o=e.data;const s=g.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(o)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const l=Le(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ce(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=g.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Mt(function(S){n(S),d()},function(S){r(S),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Pe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const y=(e.withCredentials||Jt(l))&&e.xsrfCookieName&&It.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",le(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",le(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{!c||(r(!y||y.type?new B(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=zt(l);if(w&&O.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},M={http:jt,xhr:Vt};a.forEach(M,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Kt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?M[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(M,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:M};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function fe(e){return V(e),e.headers=g.from(e.headers),e.data=$.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Kt.getAdapter(e.adapter||ee.adapter)(e).then(function(r){return V(e),r.data=$.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return De(r)||(V(e),r&&r.response&&(r.response.data=$.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const de=e=>e instanceof g?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function s(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>o(de(c),de(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||o,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==u||(n[l]=w)}),n}const Be="1.2.1",te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{te[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pe={};te.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Be+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,u)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!pe[i]&&(pe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,u):!0}};function vt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const u=e[s],d=u===void 0||i(u,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const X={assertOptions:vt,validators:te},A=X.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new ae,response:new ae}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&X.assertOptions(r,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1),o!==void 0&&X.assertOptions(o,{encode:A.function,serialize:A.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=g.concat(i,s);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,w;if(!d){const f=[fe.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),w=f.length,l=Promise.resolve(n);p<w;)l=l.then(f[p++],f[p++]);return l}w=u.length;let y=n;for(p=0;p<w;){const f=u[p++],h=u[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{l=fe.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=c.length;p<w;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=C(this.defaults,t);const n=Le(t.baseURL,t.url);return Ce(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,u){return this.request(C(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const I=H;class ne{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(u=>{r.subscribe(u),s=u}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,u){r.reason||(r.reason=new B(s,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ne(function(o){t=o}),cancel:t}}}const Xt=ne;function Zt(e){return function(n){return e.apply(null,n)}}function Gt(e){return a.isObject(e)&&e.isAxiosError===!0}function Ue(e){const t=new I(e),n=we(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ue(C(e,o))},n}const E=Ue(ee);E.Axios=I;E.CanceledError=B;E.CancelToken=Xt;E.isCancel=De;E.VERSION=Be;E.toFormData=J;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Zt;E.isAxiosError=Gt;E.mergeConfig=C;E.AxiosHeaders=g;E.formToJSON=e=>Fe(a.isHTMLForm(e)?new FormData(e):e);E.default=E;const Qt=E;function ke(e,t,n){return Qt.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime",{params:{latitude:e,longitude:t,timezone:n}}).then(({data:r})=>({current:Yt(r),daily:en(r),hourly:tn(r)}))}function Yt({current_weather:e,daily:t}){const{temperature:n,windspeed:r,weathercode:o}=e,{temperature_2m_max:[s],temperature_2m_min:[i],apparent_temperature_max:[u],apparent_temperature_min:[d],precipitation_sum:[c]}=t;return{currentTemp:Math.round(n),highTemp:Math.round(s),lowTemp:Math.round(i),highFeelsLike:Math.round(u),lowFeelsLike:Math.round(d),windSpeed:Math.round(r),precip:Math.round(c*100)/100,iconCode:o}}function en({daily:e}){return e.time.map((t,n)=>({timestamp:t*1e3,iconCode:e.weathercode[n],maxTemp:Math.round(e.temperature_2m_max[n])}))}function tn({hourly:e,current_weather:t}){return e.time.map((n,r)=>({timestamp:n*1e3,iconCode:e.weathercode[r],temp:Math.round(e.temperature_2m[r]),feelsLike:Math.round(e.apparent_temperature[r]),windSpeed:Math.round(e.windspeed_10m[r]),precip:Math.round(e.precipitation[r])})).filter(({timestamp:n})=>n>=t.time*1e3)}navigator.geolocation.getCurrentPosition(nn,rn);function nn({coords:e}){ke(e.latitude,e.longitude,Intl.DateTimeFormat().resolvedOptions().timeZone).then(je).catch(t=>{console.error(t),alert("Error getting weather")})}function rn({coords:e}){alert("There was an error getting your location. Please allow us to use your location to get your local weather."),ke(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone).then(je).catch(t=>{console.error(t),alert("Error getting weather")})}function je({current:e,daily:t,hourly:n}){sn(e),cn(t),fn(n),document.body.classList.remove("blurred")}function b(e,t,{parent:n=document}={}){n.querySelector(`[data-${e}]`).textContent=t}function re(e){return`icons/${ye.get(e)}.svg`}const on=document.querySelector("[data-current-icon]");function sn(e){on.src=re(e.iconCode),b("current-temp",e.currentTemp),b("current-high",e.highTemp),b("current-low",e.lowTemp),b("current-fl-high",e.highFeelsLike),b("current-fl-low",e.lowFeelsLike),b("current-wind",e.windSpeed),b("current-precip",e.precip)}const Me=new Intl.DateTimeFormat(void 0,{weekday:"long"}),he=document.querySelector("[data-day-section]"),an=document.getElementById("day-card-template");function cn(e){he.innerHTML="",e.forEach(t=>{const n=an.content.cloneNode(!0);b("temp",t.maxTemp,{parent:n}),b("date",Me.format(t.timestamp),{parent:n}),n.querySelector("[data-icon]").src=re(t.iconCode),he.append(n)})}const un=new Intl.DateTimeFormat(void 0,{hour:"numeric"}),me=document.querySelector("[data-hour-section]"),ln=document.getElementById("hour-row-template");function fn(e){me.innerHTML="",e.forEach(t=>{const n=ln.content.cloneNode(!0);b("temp",t.temp,{parent:n}),b("fl-temp",t.feelsLike,{parent:n}),b("wind",t.windSpeed,{parent:n}),b("precip",t.precip,{parent:n}),b("day",Me.format(t.timestamp),{parent:n}),b("time",un.format(t.timestamp),{parent:n}),n.querySelector("[data-icon]").src=re(t.iconCode),me.append(n)})}
