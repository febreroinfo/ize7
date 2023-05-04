"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,s=t.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof l?e:l,e=Object.create(e.prototype),n=new b(n||[]);return u(e,"_invoke",{value:(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return E()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;n=f(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}(r,a);if(r){if(r===h)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=f(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===h)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}})}),e}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var h={};function l(){}function p(){}function y(){}var e={},v=(i(e,n,function(){return this}),Object.getPrototypeOf),v=v&&v(v(L([]))),d=(v&&v!==t&&s.call(v,n)&&(e=v),y.prototype=l.prototype=Object.create(e));function m(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function g(a,c){var e;u(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=f(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&s.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:E}}function E(){return{value:void 0,done:!0}}return u(d,"constructor",{value:p.prototype=y,configurable:!0}),u(y,"constructor",{value:p,configurable:!0}),p.displayName=i(y,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,i(t,o,"GeneratorFunction")),t.prototype=Object.create(d),t},a.awrap=function(t){return{__await:t}},m(g.prototype),i(g.prototype,r,function(){return this}),a.AsyncIterator=g,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new g(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},m(d),i(d,o,"Generator"),i(d,n,function(){return this}),i(d,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=L,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,x(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}var cacheName="v1",coreAssets=["./","./index.html","./assets/images/favicon/favicon.svg","./assets/images/favicon/favicon.ico","./assets/images/favicon/apple-touch-icon.png","./assets/images/favicon/icon-512x512.png","./assets/images/favicon/icon-192x192.png","./assets/images/favicon/manifest.json","./assets/images/svg/izer.svg","./assets/fonts/Inter/Inter-Black.woff2","./assets/fonts/Inter/Inter-Regular.woff2","./assets/fonts/Inter/Inter-SemiBold.woff2","./assets/fonts/Inter/Inter-ExtraLight.woff2","./assets/styles/main.min.css","./assets/scripts/main.min.js"],clearOldCache=(self.addEventListener("install",function(t){t.waitUntil(caches.open(cacheName).then(function(t){for(var e=0,r=coreAssets;e<r.length;e++){var n=r[e];t.add(new Request(n))}return t}))}),function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.forEach(function(t){e.includes(t)||caches.delete(t)});case 4:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}());self.addEventListener("activate",function(t){t.waitUntil([clearOldCache(cacheName)])}),self.addEventListener("fetch",function(r){var n;"POST"===r.request.method&&-1!==r.request.url.indexOf("chrome-extension://")&&(n=r.request,"only-if-cached"!==r.request.cache||"same-origin"===r.request.mode)&&r.respondWith(caches.match(n).then(function(t){return t||fetch(n).then(function(t){var e;return t?(e=t.clone(),r.waitUntil(caches.open(cacheName).then(function(t){return t.put(n,e)}))):console.log("Service Worker Error, No response from fetch "),t}).catch(function(t){console.log("Service Worker Error,",t)})}))});