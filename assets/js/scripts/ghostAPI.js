!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).GhostContentAPI=t()}(this,function(){"use strict";var e=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}};function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}var n=Object.prototype.toString;function r(e){return"[object Array]"===n.call(e)}function o(e){return null!==e&&"object"==typeof e}function i(e){return"[object Function]"===n.call(e)}function s(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var a={isArray:r,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:i,isStream:function(e){return o(e)&&i(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)s(arguments[r],n);return t},extend:function(t,n,r){return s(n,function(n,o){t[o]=r&&"function"==typeof n?e(n,r):n}),t},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}},u=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}(new Error(e),t,n,r,o)};function c(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var f=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],d=a.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=a.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function h(){this.message="String contains an invalid character"}h.prototype=new Error,h.prototype.code=5,h.prototype.name="InvalidCharacterError";var l=function(e){for(var t,n,r=String(e),o="",i=0,s=p;r.charAt(0|i)||(s="=",i%1);o+=s.charAt(63&t>>8-i%1*8)){if((n=r.charCodeAt(i+=.75))>255)throw new h;t=t<<8|n}return o},m=a.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),a.isString(r)&&s.push("path="+r),a.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},g="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||l,y=function(e){return new Promise(function(t,n){var r=e.data,o=e.headers;a.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest,s="onreadystatechange",p=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in i||d(e.url)||(i=new window.XDomainRequest,s="onload",p=!0,i.onprogress=function(){},i.ontimeout=function(){}),e.auth){var h=e.auth.username||"",l=e.auth.password||"";o.Authorization="Basic "+g(h+":"+l)}if(i.open(e.method.toUpperCase(),function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(a.isURLSearchParams(t))r=t.toString();else{var o=[];a.forEach(t,function(e,t){null!=e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),o.push(c(t)+"="+c(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}(e.url,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i[s]=function(){if(i&&(4===i.readyState||p)&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,s,c,d,h="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),d={},r?(a.forEach(r.split("\n"),function(e){if(c=e.indexOf(":"),o=a.trim(e.substr(0,c)).toLowerCase(),s=a.trim(e.substr(c+1)),o){if(d[o]&&f.indexOf(o)>=0)return;d[o]="set-cookie"===o?(d[o]?d[o]:[]).concat([s]):d[o]?d[o]+", "+s:s}}),d):d):null,l={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":i.statusText,headers:h,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(u("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,l),i=null}},i.onerror=function(){n(u("Network Error",e,null,i)),i=null},i.ontimeout=function(){n(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",i)),i=null},a.isStandardBrowserEnv()){var y=m,w=(e.withCredentials||d(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(o[e.xsrfHeaderName]=w)}if("setRequestHeader"in i&&a.forEach(o,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)}),e.withCredentials&&(i.withCredentials=!0),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){i&&(i.abort(),n(e),i=null)}),void 0===r&&(r=null),i.send(r)})},w={"Content-Type":"application/x-www-form-urlencoded"};function v(e,t){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var C,E={adapter:("undefined"!=typeof XMLHttpRequest?C=y:"undefined"!=typeof process&&(C=y),C),transformRequest:[function(e,t){return function(e,t){a.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}(t,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(v(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)?(v(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};E.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(e){E.headers[e]={}}),a.forEach(["post","put","patch"],function(e){E.headers[e]=a.merge(w)});var b=E;function A(){this.handlers=[]}A.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},A.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},A.prototype.forEach=function(e){a.forEach(this.handlers,function(t){null!==t&&e(t)})};var j=A,R=function(e,t,n){return a.forEach(n,function(n){e=n(e,t)}),e},S=function(e){return!(!e||!e.__CANCEL__)};function x(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var P=function(e){var t,n,r;return x(e),e.baseURL&&(r=e.url,!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r))&&(e.url=(t=e.baseURL,(n=e.url)?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t)),e.headers=e.headers||{},e.data=R(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||b.adapter)(e).then(function(t){return x(e),t.data=R(t.data,t.headers,e.transformResponse),t},function(t){return S(t)||(x(e),t&&t.response&&(t.response.data=R(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})};function q(e){this.defaults=e,this.interceptors={request:new j,response:new j}}q.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),(e=a.merge(b,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[P,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){q.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){q.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}});var k=q;function B(e){this.message=e}B.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},B.prototype.__CANCEL__=!0;var T=B;function O(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new T(e),t(n.reason))})}O.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},O.source=function(){var e;return{token:new O(function(t){e=t}),cancel:e}};var I=O;function U(t){var n=new k(t),r=e(k.prototype.request,n);return a.extend(r,k.prototype,n),a.extend(r,n),r}var L=U(b);L.Axios=k,L.create=function(e){return U(a.merge(b,e))},L.Cancel=T,L.CancelToken=I,L.isCancel=S,L.all=function(e){return Promise.all(e)},L.spread=function(e){return function(t){return e.apply(null,t)}};var N=L,D=L;N.default=D;var F=N;const $=["v2"];return function e({host:t,ghostPath:n="ghost",version:r,key:o}){if(this instanceof e)return e({host:t,version:r,key:o});if(!r)throw new Error('GhostContentAPI Config Missing: @tryghost/content-api requires a "version" like "v2"');if(!$.includes(r))throw new Error("GhostContentAPI Config Invalid: @tryghost/content-api does not support the supplied version");if(!t)throw new Error('GhostContentAPI Config Missing: @tryghost/content-api requires a "host" like "https://site.com"');if(!/https?:\/\//.test(t))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "host" with a protocol like "https://site.com"');if(t.endsWith("/"))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "host" without a trailing slash like "https://site.com"');if(n.endsWith("/")||n.startsWith("/"))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "ghostPath" without a leading or trailing slash like "ghost"');if(o&&!/[0-9a-f]{26}/.test(o))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "key" with 26 hex characters');const i=["posts","authors","tags","pages","settings"].reduce((e,t)=>Object.assign(e,{[t]:{read:function(e,n={},r){if(!e)return Promise.reject(new Error("Missing data"));if(!e.id&&!e.slug)return Promise.reject(new Error("Must include either data.id or data.slug"));const o=Object.assign({},e,n);return s(t,o,e.id||`slug/${e.slug}`,r)},browse:function(e={},n){return s(t,e,null,n)}}}),{});return delete i.settings.read,i;function s(e,i,s,a=null){if(!a&&!o)return Promise.reject(new Error("GhostContentAPI Config Missing: @tryghost/content-api was instantiated without a content key"));delete i.id;const u=a?{Authorization:`GhostMembers ${a}`}:void 0;return F.get(`${t}/${n}/api/${r}/content/${e}/${s?s+"/":""}`,{params:Object.assign({key:o},i),paramsSerializer:e=>Object.keys(e).reduce((t,n)=>{const r=encodeURIComponent([].concat(e[n]).join(","));return t.concat(`${n}=${r}`)},[]).join("&"),headers:u}).then(t=>Array.isArray(t.data[e])?1!==t.data[e].length||t.data.meta?Object.assign(t.data[e],{meta:t.data.meta}):t.data[e][0]:t.data[e])}}});
