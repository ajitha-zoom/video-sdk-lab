"use strict";(self.webpackChunkreact_video_sdk_demo=self.webpackChunkreact_video_sdk_demo||[]).push([[787],{787:function(e,t,n){n.r(t),n.d(t,{getCLS:function(){return v},getFCP:function(){return g},getFID:function(){return k},getLCP:function(){return F},getTTFB:function(){return C}});var i,a,r,o,c=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},u=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},s=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,m=function(e,t,n){var i;return function(){t.value>=0&&(n||d.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},v=function(e,t){var n,i=c("CLS",0),a=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},r=u("layout-shift",a);r&&(n=m(e,i,t),s((function(){r.takeRecords().map(a),n()})),f((function(){i=c("CLS",0),n=m(e,i,t)})))},p=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){s((function(e){var t=e.timeStamp;p=t}),!0)},S=function(){return p<0&&(p=l(),h(),f((function(){setTimeout((function(){p=l(),h()}),0)}))),{get timeStamp(){return p}}},g=function(e,t){var n,i=S(),a=c("FCP"),r=u("paint",(function(e){"first-contentful-paint"===e.name&&(r&&r.disconnect(),e.startTime<i.timeStamp&&(a.value=e.startTime,a.entries.push(e),d.add(a),n()))}));r&&(n=m(e,a,t),f((function(i){a=c("FCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))})))},y={passive:!0,capture:!0},w=new Date,E=function(e,t){i||(i=t,a=e,r=new Date,b(removeEventListener),L())},L=function(){if(a>=0&&a<r-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(t){t(e)})),o=[]}},T=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){E(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(t,e):E(t,e)}},b=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,T,y)}))},k=function(e,t){var n,r=S(),v=c("FID"),p=function(e){e.startTime<r.timeStamp&&(v.value=e.processingStart-e.startTime,v.entries.push(e),d.add(v),n())},l=u("first-input",p);n=m(e,v,t),l&&s((function(){l.takeRecords().map(p),l.disconnect()}),!0),l&&f((function(){var r;v=c("FID"),n=m(e,v,t),o=[],a=-1,i=null,b(addEventListener),r=p,o.push(r),L()}))},F=function(e,t){var n,i=S(),a=c("LCP"),r=function(e){var t=e.startTime;t<i.timeStamp&&(a.value=t,a.entries.push(e)),n()},o=u("largest-contentful-paint",r);if(o){n=m(e,a,t);var v=function(){d.has(a)||(o.takeRecords().map(r),o.disconnect(),d.add(a),n())};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),s(v,!0),f((function(i){a=c("LCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))}))}},C=function(e){var t,n=c("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);
//# sourceMappingURL=787.f68a6c7f.chunk.js.map