var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function M(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=M(En),On=m({},En,{view:0,detail:0}),kn=M(On),An,jn,Mn,Nn=m({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=M(Nn),Fn=M(m({},Nn,{dataTransfer:0})),In=M(m({},On,{relatedTarget:0})),Ln=M(m({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=M(m({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=M(m({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=M(m({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),N=M(m({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=M(m({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),qn=M(m({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=M(m({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=M(m({},En,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=gn&&`CompositionEvent`in window,Qn=null;gn&&`documentMode`in document&&(Qn=document.documentMode);var $n=gn&&`TextEvent`in window&&!Qn,er=gn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=Sn(),xn=bn=yn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Ht(wt(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(gn){var _r;if(gn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,ln(e)),mn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=gn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ut(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};gn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),kt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=pi(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=pi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=pi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-We(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function P(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var F=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(F=e.return;F;)switch(F.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:F=F.return}}function Ui(e){if(e!==F)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=F?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=F=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=ue(null),Ji=null,Yi=null;function Xi(e,t,n){j(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,de(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=k.S;k.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=ue(null);function xa(){var e=ba.current;return e===null?q.pooledCache:e}function Sa(e,t){t===null?j(ba,ba.current):j(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case O:return t=Aa(t),f(e,t,n)}if(oe(t)||re(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Aa(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Aa(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Aa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=ue(null),to=ue(0);function no(e,t){e=Ul,j(to,e),j(eo,t),Ul=e|t.baseLanes}function ro(){j(to,Ul),j(eo,eo.current)}function io(){Ul=to.current,de(eo),de(to)}var ao=ue(null),oo=null;function so(e){var t=e.alternate;j(po,po.current&1),j(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){j(po,po.current),j(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(j(po,po.current),j(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){j(po,po.current),j(ao,ao.current)}function fo(e){de(ao),oo===e&&(oo=null),de(po)}var po=ue(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,B=null,V=!1,go=!1,_o=!1,vo=0,H=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Rs:zs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){k.H=Ls;var t=z!==null&&z.next!==null;if(ho=0,B=z=R=null,V=!1,H=0,yo=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&ta(e)&&(nc=!0))}function To(e,t,n,r){R=e;var a=0;do{if(go&&(yo=null),H=0,go=!1,25<=a)throw Error(i(301));if(a+=1,B=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Bs,o=t(n,r)}while(go);return o}function Eo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(V){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}V=!1}ho=0,B=z=R=null,go=!1,H=vo=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return B===null?R.memoizedState=B=e:B=B.next=e,B}function U(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=B===null?R.memoizedState:B.next;if(t!==null)B=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},B===null?R.memoizedState=B=e:B=B.next=e}return B}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=H;return H+=1,yo===null&&(yo=[]),e=ka(yo,e,t),t=R,(B===null?t.memoizedState:B.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Rs:zs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function W(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(U(),z,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((ho&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(nc=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=U(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=R,a=U(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||B!==null&&B.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||ho&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=jo(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Uo(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,z,typeof r==`function`?r:W)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(L){var n=q.formState;if(n!==null){a:{var r=R;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,R,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,R,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(U(),z,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(W)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===wa?Ea:e}else r=t;t=U();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=U(),n=z;if(n!==null)return ts(t,n,e);U(),t=t.memoizedState,n=U();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=jo(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return U().memoizedState}function os(e,t,n,r){var i=Ao();R.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=U();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&So(r,z.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(R.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=jo(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=U().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=U();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=U();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||ho&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return Dr(n,t)?n:eo.current===null?!(ho&42)||ho&1073741824&&!(Y&261930)?(nc=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=ys(e,n,r),Dr(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Ns(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,va(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,se,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:W,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:W,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return ra(Qf)}function Ds(){return U().memoizedState}function Os(){return U().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),q===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===R||t!==null&&t===R}function Fs(e,t){go=V=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Ls={readContext:ra,use:No,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};Ls.useEffectEvent=xo;var Rs={readContext:ra,use:No,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Ao(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,R,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=Ao();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=q.identifierPrefix;if(L){var n=Mi,r=ji;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return Ao().memoizedState=ks.bind(null,R)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:ra,use:No,useCallback:_s,useContext:ra,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(W)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(U(),z.memoizedState,e,t)},useTransition:function(){var e=Fo(W)[0],t=U().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(U(),z,e,t)},useMemoCache:Po,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:ra,use:No,useCallback:_s,useContext:ra,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(W)},useDebugValue:gs,useDeferredValue:function(e,t){var n=U();return z===null?ys(n,e,t):bs(n,z.memoizedState,e,t)},useTransition:function(){var e=Lo(W)[0],t=U().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=U();return z===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,z,e,t)},useMemoCache:Po,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){ti(e)}function qs(e){console.error(e)}function Js(e){ti(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Ga(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=Zs(e.stateNode,r,a),Ja(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!nc?(Oo(e,t,i),Oc(e,t,i)):(L&&s&&Fi(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Ba(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,F=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(nc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=q,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),tc;Du(),t=dc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),F=t,L=!0,Li=null,Ri=!1,e!==null&&P(t,e),t=uc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return na(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!nc?(Oo(e,t,i),Oc(e,t,i)):(L&&r&&Fi(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!nc?(Oo(e,t,a),Oc(e,t,a)):(L&&r&&Fi(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=Ha||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=Ha||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return Wi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:Ca()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(po.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,F=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(so(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=q,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),tc;af(c)||Du(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),F=t,L=!0,Li=null,Ri=!1,e!==null&&P(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Ba(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=po.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(po,o),rc(e,t,r,n),r=L?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function Ac(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(po,po.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}else nc=!1,L&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ki(a),t=_c(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),F=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),F=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,F=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,F=t,I=null,e=!0)),e||Bi(t)),null;case 13:return xc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=q,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return G(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),G(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(G(t),Nc(t,a,null,r,n)):(G(t),Pc(t,o))):o?o===e.memoizedState?(G(t),t.flags&=-16777217):(Mc(t),G(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),G(t),Nc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}e=fe.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return G(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}if(o=fe.current,Ui(t))Vi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return G(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=F,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return G(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return G(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),G(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),G(t),null;case 10:return Zi(t.type),G(t),null;case 19:if(de(po),r=t.memoizedState,r===null)return G(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return j(po,po.current&1|2),L&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return G(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(G(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=po.current,j(po,a?n&1|2:n&1),L&&Ni(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),G(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(po),null;case 4:return _e(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&de(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function zc(e,t){switch(Ii(t),t.tag){case 3:Zi(la),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:de(po);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&de(ba);break;case 24:Zi(la)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:k.T===null?ut():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||L){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),rt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Bl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},jl(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Yi=Ji=null,ko(e),Pa=null,Fa=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=hi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=$e(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ai(),n}function Cu(e,t){R=null,k.H=Ls,t===wa||t===Ea?(t=Ma(),X=3):t===Ta?(t=Ma(),X=4):X=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,Ci(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(Y&4194048)===Y?oo===null:(Y&62914560)===Y||Y&536870912?e===oo:!1}function Tu(){var e=k.H;return k.H=Ls,e===null?Ls:e}function Eu(){var e=k.A;return k.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&ao.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,K=r,k.H=i,k.A=a,J===null&&(q=null,Y=0,ai()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Me()+500,Su(e,t)):Vl=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Oa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,k.H=r,k.A=a,K=n,J===null?(q=null,Y=0,ai(),Wl):0}function ju(){for(;J!==null&&!Ae();)Mu(J)}function Mu(e){var t=jc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:ko(t);default:zc(n,t),t=J=gi(t,Ul),t=jc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Yi=Ji=null,ko(t),Pa=null,Fa=0;var i=t.return;try{if(ec(e,i,t,n,Y)){Wl=1,Ys(e,Ci(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,Ci(n,e.current)),J=null;return}t.flags&32768?(L||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=Zs(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=Qs(2),r=Ka(t,n,2),r!==null&&($s(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Me()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ci(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case qr:l=Ln;break;case Zr:l=qn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=N;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=N,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=`modulepreload`,y=function(e){return`/`+e},b={},x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=l(d(),1),C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function T(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return te(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ne(t)}return ie(t,n,null,e)}function E(e,t){if(e===!1||e==null)throw Error(t)}function D(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function O(){return Math.random().toString(36).substring(2,10)}function ee(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function te(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?re(t):t,state:n,key:t&&t.key||r||O(),unstable_mask:i}}function ne({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function re(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:te(h.location,e,t);n&&n(r,e),l=u()+1;let d=ee(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:te(h.location,e,t);n&&n(r,e),l=u();let i=ee(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),E(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ne(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function oe(e,t,n=`/`){return k(e,t,n,!1)}function k(e,t,n,r){let i=Se((typeof t==`string`?re(t):t).pathname||`/`,n);if(i==null)return null;let a=se(e);le(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=xe(i);o=ve(a[e],t,r)}return o}function A(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function se(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;E(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ae([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(E(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),se(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ge(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ce(e.path))a(e,t,!0,n)}),t}function ce(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ce(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function le(e){e.sort((e,t)=>e.score===t.score?_e(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ue=/^:[\w-]+$/,de=3,j=2,fe=1,pe=10,me=-2,he=e=>e===`*`;function ge(e,t){let n=e.split(`/`),r=n.length;return n.some(he)&&(r+=me),t&&(r+=j),n.filter(e=>!he(e)).reduce((e,t)=>e+(ue.test(t)?de:t===``?fe:pe),r)}function _e(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ve(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ye({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ae([a,u.pathname]),pathnameBase:je(Ae([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ae([a,u.pathnameBase]))}return o}function ye(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=be(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function be(e,t=!1,n=!0){D(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function xe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return D(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Se(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function we(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?re(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Te(n.substring(1),`/`):Te(n,t)):a=t,{pathname:a,search:Me(r),hash:Ne(i)}}function Te(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ee(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function De(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Oe(e){let t=De(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function ke(e,t,n,r=!1){let i;typeof e==`string`?i=re(e):(i={...e},E(!i.pathname||!i.pathname.includes(`?`),Ee(`?`,`pathname`,`search`,i)),E(!i.pathname||!i.pathname.includes(`#`),Ee(`#`,`pathname`,`hash`,i)),E(!i.search||!i.search.includes(`#`),Ee(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=we(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ae=e=>e.join(`/`).replace(/\/\/+/g,`/`),je=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Me=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ne=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Pe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Fe(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ie(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Le=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Re(e,t){let n=e;if(typeof n!=`string`||!Ce.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Le)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Se(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{D(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ze=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(ze);var Be=[`GET`,...ze];new Set(Be);var Ve=S.createContext(null);Ve.displayName=`DataRouter`;var He=S.createContext(null);He.displayName=`DataRouterState`;var Ue=S.createContext(!1),We=S.createContext({isTransitioning:!1});We.displayName=`ViewTransition`;var Ge=S.createContext(new Map);Ge.displayName=`Fetchers`;var Ke=S.createContext(null);Ke.displayName=`Await`;var qe=S.createContext(null);qe.displayName=`Navigation`;var Je=S.createContext(null);Je.displayName=`Location`;var Ye=S.createContext({outlet:null,matches:[],isDataRoute:!1});Ye.displayName=`Route`;var Xe=S.createContext(null);Xe.displayName=`RouteError`;var Ze=`REACT_ROUTER_ERROR`,Qe=`REDIRECT`,$e=`ROUTE_ERROR_RESPONSE`;function et(e){if(e.startsWith(`${Ze}:${Qe}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function tt(e){if(e.startsWith(`${Ze}:${$e}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Pe(t.status,t.statusText,t.data)}catch{}}function nt(e,{relative:t}={}){E(rt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(qe),{hash:i,pathname:a,search:o}=ut(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ae([n,a])),r.createHref({pathname:s,search:o,hash:i})}function rt(){return S.useContext(Je)!=null}function it(){return E(rt(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(Je).location}var at=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ot(e){S.useContext(qe).static||S.useLayoutEffect(e)}function st(){let{isDataRoute:e}=S.useContext(Ye);return e?kt():ct()}function ct(){E(rt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(Ve),{basename:t,navigator:n}=S.useContext(qe),{matches:r}=S.useContext(Ye),{pathname:i}=it(),a=JSON.stringify(Oe(r)),o=S.useRef(!1);return ot(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(D(o.current,at),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=ke(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ae([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}S.createContext(null);function lt(){let{matches:e}=S.useContext(Ye),t=e[e.length-1];return t?t.params:{}}function ut(e,{relative:t}={}){let{matches:n}=S.useContext(Ye),{pathname:r}=it(),i=JSON.stringify(Oe(n));return S.useMemo(()=>ke(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function dt(e,t){return ft(e,t)}function ft(e,t,n){E(rt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(qe),{matches:i}=S.useContext(Ye),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;jt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=it(),d;if(t){let e=typeof t==`string`?re(t):t;E(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=oe(e,{pathname:p});D(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),D(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=yt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ae([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ae([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(Je.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function pt(){let e=Ot(),t=Fe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}var mt=S.createElement(pt,null),ht=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=tt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(Ye.Provider,{value:this.props.routeContext},S.createElement(Xe.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(_t,{error:e},t):t}};ht.contextType=Ue;var gt=new WeakMap;function _t({children:e,error:t}){let{basename:n}=S.useContext(qe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=et(t.digest);if(e){let r=gt.get(t);if(r)throw r;let i=Re(e.location,n);if(Le&&!gt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw gt.set(t,n),n}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function vt({routeContext:e,match:t,children:n}){let r=S.useContext(Ve);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Ye.Provider,{value:e},n)}function yt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);E(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ie(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||mt,o&&(s<0&&c===0?(jt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(vt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(ht,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=S.useContext(Ve);return E(t,bt(e)),t}function St(e){let t=S.useContext(He);return E(t,bt(e)),t}function Ct(e){let t=S.useContext(Ye);return E(t,bt(e)),t}function wt(e){let t=Ct(e),n=t.matches[t.matches.length-1];return E(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Tt(){return wt(`useRouteId`)}function Et(){return St(`useNavigation`).navigation}function Dt(){let{matches:e,loaderData:t}=St(`useMatches`);return S.useMemo(()=>e.map(e=>A(e,t)),[e,t])}function Ot(){let e=S.useContext(Xe),t=St(`useRouteError`),n=wt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function kt(){let{router:e}=xt(`useNavigate`),t=wt(`useNavigate`),n=S.useRef(!1);return ot(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{D(n.current,at),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var At={};function jt(e,t,n){!t&&!At[e]&&(At[e]=!0,D(!1,n))}S.useOptimistic,S.memo(Mt);function Mt({routes:e,future:t,state:n,isStatic:r,onError:i}){return ft(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Nt({to:e,replace:t,state:n,relative:r}){E(rt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=S.useContext(qe);D(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=S.useContext(Ye),{pathname:o}=it(),s=st(),c=ke(e,Oe(a),o,r===`path`),l=JSON.stringify(c);return S.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Pt(e){E(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ft({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){E(!rt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=S.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=re(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=S.useMemo(()=>{let e=Se(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return D(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:S.createElement(qe.Provider,{value:c},S.createElement(Je.Provider,{children:t,value:h}))}function It({children:e,location:t}){return dt(Lt(e),t)}S.Component;function Lt(e,t=[]){let n=[];return S.Children.forEach(e,(e,r)=>{if(!S.isValidElement(e))return;let i=[...t,r];if(e.type===S.Fragment){n.push.apply(n,Lt(e.props.children,i));return}E(e.type===Pt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Lt(e.props.children,i)),n.push(a)}),n}var Rt=`get`,zt=`application/x-www-form-urlencoded`;function Bt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Vt(e){return Bt(e)&&e.tagName.toLowerCase()===`button`}function Ht(e){return Bt(e)&&e.tagName.toLowerCase()===`form`}function Ut(e){return Bt(e)&&e.tagName.toLowerCase()===`input`}function Wt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gt(e,t){return e.button===0&&(!t||t===`_self`)&&!Wt(e)}var Kt=null;function qt(){if(Kt===null)try{new FormData(document.createElement(`form`),0),Kt=!1}catch{Kt=!0}return Kt}var Jt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Yt(e){return e!=null&&!Jt.has(e)?(D(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zt}"`),null):e}function Xt(e,t){let n,r,i,a,o;if(Ht(e)){let o=e.getAttribute(`action`);r=o?Se(o,t):null,n=e.getAttribute(`method`)||Rt,i=Yt(e.getAttribute(`enctype`))||zt,a=new FormData(e)}else if(Vt(e)||Ut(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Se(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Rt,i=Yt(e.getAttribute(`formenctype`))||Yt(o.getAttribute(`enctype`))||zt,a=new FormData(o,e),!qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Bt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Rt,r=null,i=zt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Zt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Qt=/[&><\u2028\u2029]/g;function $t(e){return e.replace(Qt,e=>Zt[e])}function en(e,t){if(e===!1||e==null)throw Error(t)}function tn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Se(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function nn(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rn(e){return e!=null&&typeof e.page==`string`}function an(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function on(e,t,n){return dn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await nn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(an).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function sn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function cn(e,t,{includeHydrateFallback:n}={}){return ln(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function ln(e){return[...new Set(e)]}function un(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function dn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!rn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(un(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function fn(){let e=S.useContext(Ve);return en(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function pn(){let e=S.useContext(He);return en(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var mn=S.createContext(void 0);mn.displayName=`FrameworkContext`;function hn(){let e=S.useContext(mn);return en(e,`You must render this element inside a <HydratedRouter> element`),e}function gn(e,t){let n=S.useContext(mn),[r,i]=S.useState(!1),[a,o]=S.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=S.useRef(null);S.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),S.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:_n(s,p),onBlur:_n(c,m),onMouseEnter:_n(l,p),onMouseLeave:_n(u,m),onTouchStart:_n(d,p)}]:[a,f,{}]:[!1,f,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function vn({page:e,...t}){let{router:n}=fn(),r=S.useMemo(()=>oe(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?S.createElement(bn,{page:e,matches:r,...t}):null}function yn(e){let{manifest:t,routeModules:n}=hn(),[r,i]=S.useState([]);return S.useEffect(()=>{let r=!1;return on(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function bn({page:e,matches:t,...n}){let r=it(),{future:i,manifest:a,routeModules:o}=hn(),{basename:s}=fn(),{loaderData:c,matches:l}=pn(),u=S.useMemo(()=>sn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=S.useMemo(()=>sn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=S.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=tn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=S.useMemo(()=>cn(d,a),[d,a]),m=yn(d);return S.createElement(S.Fragment,null,f.map(e=>S.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>S.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>S.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function xn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}S.Component;var Sn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Sn&&(window.__reactRouterVersion=`7.13.2`)}catch{}function Cn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=S.useRef();i.current??=T({window:r,v5Compat:!0});let a=i.current,[o,s]=S.useState({action:a.action,location:a.location}),c=S.useCallback(e=>{n===!1?s(e):S.startTransition(()=>s(e))},[n]);return S.useLayoutEffect(()=>a.listen(c),[a,c]),S.createElement(Ft,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function wn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=S.useState({action:n.action,location:n.location}),o=S.useCallback(e=>{r===!1?a(e):S.startTransition(()=>a(e))},[r]);return S.useLayoutEffect(()=>n.listen(o),[n,o]),S.createElement(Ft,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}wn.displayName=`unstable_HistoryRouter`;var Tn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=S.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=S.useContext(qe),v=typeof l==`string`&&Tn.test(l),y=Re(l,h);l=y.to;let b=nt(l,{relative:r}),x=it(),C=null;if(o){let e=ke(o,[],x.unstable_mask?x.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ae([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=gn(n,p),D=Mn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let ee=!(y.isExternal||i),te=S.createElement(`a`,{...p,...E,href:(ee?C:void 0)||y.absoluteURL||b,onClick:ee?O:e,ref:xn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?S.createElement(S.Fragment,null,te,S.createElement(vn,{page:b})):te});M.displayName=`Link`;var En=S.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ut(a,{relative:c.relative}),d=it(),f=S.useContext(He),{navigator:p,basename:m}=S.useContext(qe),h=f!=null&&Hn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Se(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:x,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return S.createElement(M,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});En.displayName=`NavLink`;var Dn=S.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Rt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=S.useContext(qe),g=Fn(),_=In(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Tn.test(s);return S.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?S.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Dn.displayName=`Form`;function On({getKey:e,storageKey:t,...n}){let r=S.useContext(mn),{basename:i}=S.useContext(qe),a=it(),o=Dt();Bn({getKey:e,storageKey:t});let s=S.useMemo(()=>{if(!r||!e)return null;let t=zn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return S.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${$t(JSON.stringify(t||Ln))}, ${$t(JSON.stringify(s))})`}})}On.displayName=`ScrollRestoration`;function kn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function An(e){let t=S.useContext(Ve);return E(t,kn(e)),t}function jn(e){let t=S.useContext(He);return E(t,kn(e)),t}function Mn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=st(),d=it(),f=ut(e,{relative:o});return S.useCallback(p=>{if(Gt(p,t)){p.preventDefault();let t=n===void 0?ne(d)===ne(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?S.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Nn=0,Pn=()=>`__${String(++Nn)}__`;function Fn(){let{router:e}=An(`useSubmit`),{basename:t}=S.useContext(qe),n=Tt(),r=e.fetch,i=e.navigate;return S.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Xt(e,t);a.navigate===!1?await r(a.fetcherKey||Pn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function In(e,{relative:t}={}){let{basename:n}=S.useContext(qe),r=S.useContext(Ye);E(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ut(e||`.`,{relative:t})},o=it();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ae([n,a.pathname])),ne(a)}var Ln=`react-router-scroll-positions`,Rn={};function zn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Se(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Bn({getKey:e,storageKey:t}={}){let{router:n}=An(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=jn(`useScrollRestoration`),{basename:a}=S.useContext(qe),o=it(),s=Dt(),c=Et();S.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Vn(S.useCallback(()=>{if(c.state===`idle`){let t=zn(o,s,a,e);Rn[t]=window.scrollY}try{sessionStorage.setItem(t||Ln,JSON.stringify(Rn))}catch(e){D(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(S.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Ln);e&&(Rn=JSON.parse(e))}catch{}},[t]),S.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Rn,()=>window.scrollY,e?(t,n)=>zn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),S.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{D(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Vn(e,t){let{capture:n}=t||{};S.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Hn(e,{relative:t}={}){let n=S.useContext(We);E(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=An(`useViewTransitionState`),i=ut(e,{relative:t});if(!n.isTransitioning)return!1;let a=Se(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Se(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ye(i.pathname,o)!=null||ye(i.pathname,a)!=null}var Un=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Wn=o(((e,t)=>{t.exports=Un()})),Gn=_(),N=Wn(),Kn=(0,S.createContext)(),qn=({children:e})=>{let[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(localStorage.getItem(`token`));return(0,S.useEffect)(()=>{let e=localStorage.getItem(`user`);e&&n(JSON.parse(e))},[]),(0,N.jsx)(Kn.Provider,{value:{user:t,token:r,login:(e,t)=>{n(e),i(t),localStorage.setItem(`token`,t),localStorage.setItem(`user`,JSON.stringify(e))},logout:()=>{n(null),i(null),localStorage.removeItem(`token`),localStorage.removeItem(`user`)}},children:e})},Jn=()=>(0,S.useContext)(Kn),Yn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Xn=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Zn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Qn=e=>{let t=Zn(e);return t.charAt(0).toUpperCase()+t.slice(1)},$n={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},er=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},tr=(0,S.createContext)({}),nr=()=>(0,S.useContext)(tr),rr=(0,S.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=nr()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,S.createElement)(`svg`,{ref:c,...$n,width:t??l??$n.width,height:t??l??$n.height,stroke:e??f,strokeWidth:m,className:Yn(`lucide`,p,i),...!a&&!er(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,S.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),ir=(e,t)=>{let n=(0,S.forwardRef)(({className:n,...r},i)=>(0,S.createElement)(rr,{ref:i,iconNode:t,className:Yn(`lucide-${Xn(Qn(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Qn(e),n},ar=ir(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),or=ir(`briefcase`,[[`path`,{d:`M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`,key:`jecpp`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]),sr=ir(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),cr=ir(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),lr=ir(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),ur=ir(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),dr=ir(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),fr=ir(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),pr=ir(`inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),mr=ir(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),hr=ir(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),gr=ir(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),_r=ir(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),vr=ir(`pen-line`,[[`path`,{d:`M13 21h8`,key:`1jsn5i`}],[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]),yr=ir(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),br=ir(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),xr=ir(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Sr=ir(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Cr=ir(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),wr=`/logo2.png`,Tr=()=>{let{user:e,logout:t}=Jn(),n=st(),[r,i]=(0,S.useState)(!1),a=()=>{t(),n(`/login`)},o=[{label:`Home`,to:`/`},{label:`Jobs`,to:`/jobs`},{label:`About`,to:`/about`},{label:`Blog`,to:`/blogs`},{label:`Contact`,to:`/contact`},{label:`Register`,to:`/register`}];return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,N.jsx)(`style`,{children:`
        .nb * { box-sizing: border-box; }

        .nb {
          font-family: 'JetBrains Mono', monospace;
          background: #ffffff;
          border-bottom: 1px solid #e4edf5;
          box-shadow: 0 1px 16px rgba(0,0,0,.05);
          position: sticky; top: 0; z-index: 100;
        }

        .nb-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 24px; height: 80px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }

        /* ── LOGO ── */
        .nb-logo {
          display: flex; align-items: center;
          gap: 10px; text-decoration: none; flex-shrink: 0;
       
        }
        .nb-logo-img {
          height: 80px; width: auto;
          object-fit: contain; display: block;
        }

        /* ── NAV LINKS ── */
        .nb-links {
          display: flex; align-items: center;
          gap: 2px; list-style: none; margin: 0; padding: 0;
        }
        .nb-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; font-weight: 500;
          letter-spacing: .06em; text-transform: uppercase;
          color: #7a8a98; text-decoration: none;
          padding: 7px 14px;
          transition: color .18s, background .18s;
          white-space: nowrap; position: relative;
        }
        .nb-link::after {
          content: ''; position: absolute;
          bottom: 0; left: 14px; right: 14px;
          height: 1.5px; background: #0f9be7;
          transform: scaleX(0); transform-origin: left;
          transition: transform .22s;
        }
        .nb-link:hover { color: #13181f; }
        .nb-link:hover::after { transform: scaleX(1); }
        .nb-link.active {
          color: #0f9be7; font-weight: 600;
        }
        .nb-link.active::after { transform: scaleX(1); }

        /* ── DIVIDER ── */
        .nb-divider {
          width: 1px; height: 22px;
          background: #e4edf5; margin: 0 6px; flex-shrink: 0;
        }

        /* ── USER CHIP ── */
        .nb-user-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 14px 6px 8px;
          background: #e8f5fd;
          border: 1px solid rgba(15,155,231,.2);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          text-decoration: none;
        }
        .nb-user-avatar {
          width: 26px; height: 26px;
          background: #0f9be7;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%);
        }
        .nb-user-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; font-weight: 500; color: #7a8a98;
          white-space: nowrap; letter-spacing: .04em;
        }
        .nb-user-name strong { color: #0f9be7; font-weight: 700; }

        /* ── LOGOUT BUTTON ── */
        .nb-logout {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px;
          font-family: 'Oxanium', sans-serif;
          font-size: .72rem; font-weight: 600;
          letter-spacing: .07em; text-transform: uppercase;
          background: transparent;
          border: 1.5px solid #e4edf5;
          color: #7a8a98; cursor: pointer;
          transition: all .18s; white-space: nowrap;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }
        .nb-logout:hover {
          border-color: #ef4444; color: #ef4444;
          background: rgba(239,68,68,.05);
        }

        /* ── LOGIN LINK ── */
        .nb-login {
          font-family: 'Oxanium', sans-serif;
          font-size: .72rem; font-weight: 600;
          letter-spacing: .07em; text-transform: uppercase;
          color: #7a8a98; text-decoration: none;
          padding: 8px 16px;
          transition: color .18s; white-space: nowrap;
        }
        .nb-login:hover { color: #13181f; }

        /* ── REGISTER BUTTON (btn-p style) ── */
        .nb-register {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 22px;
          font-family: 'Oxanium', sans-serif;
          font-size: .72rem; font-weight: 700;
          letter-spacing: .07em; text-transform: uppercase;
          background: #0f9be7; color: #fff;
          text-decoration: none; border: none; cursor: pointer;
          position: relative; overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          transition: background .2s, transform .2s, box-shadow .2s;
          flex-shrink: 0;
        }
        .nb-register::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .nb-register:hover::before { transform: translateX(100%); }
        .nb-register:hover {
          background: #0b87cc;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(15,155,231,.35);
        }

        /* ── MOBILE HAMBURGER ── */
        .nb-hamburger {
          display: none; align-items: center; justify-content: center;
          width: 36px; height: 36px;
          background: #e8f5fd; border: 1px solid rgba(15,155,231,.2);
          color: #0f9be7; cursor: pointer; transition: all .18s;
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
        }
        .nb-hamburger:hover { background: rgba(15,155,231,.15); }

        /* ── MOBILE DRAWER ── */
        .nb-drawer {
          display: none; flex-direction: column; gap: 2px;
          background: #fff; border-top: 1px solid #e4edf5;
          padding: 16px 20px 20px;
        }
        .nb-drawer-link {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase;
          color: #7a8a98; text-decoration: none;
          padding: 10px 14px;
          transition: color .15s, background .15s;
        }
        .nb-drawer-link:hover { color: #0f9be7; background: #e8f5fd; }
        .nb-drawer-divider { height: 1px; background: #e4edf5; margin: 8px 0; }
        .nb-drawer-actions { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }

        @media (max-width: 820px) {
          .nb-links, .nb-divider,
          .nb-user-chip, .nb-logout,
          .nb-login, .nb-register { display: none !important; }
          .nb-hamburger { display: flex !important; }
          .nb-drawer.open { display: flex; }
          .nb-inner { padding: 0 10px; }
        }
          @media (max-width: 820px) {
  .nb-logo-img {
    height: 50px;   /* ← mobile pe chhota */
  }
  .nb-inner {
    height: 54px;   /* ← navbar height bhi thodi kam karo */
    padding: 0 10px;
  }
}
      `}),(0,N.jsxs)(`div`,{className:`nb`,children:[(0,N.jsxs)(`div`,{className:`nb-inner`,children:[(0,N.jsx)(M,{to:`/`,className:`nb-logo`,children:(0,N.jsx)(`img`,{src:wr,alt:`DIT Logo`,className:`nb-logo-img`,onError:e=>{e.currentTarget.style.display=`none`}})}),(0,N.jsx)(`ul`,{className:`nb-links`,children:o.map(({label:e,to:t})=>(0,N.jsx)(`li`,{children:(0,N.jsx)(M,{to:t,className:`nb-link${window.location.pathname===t?` active`:``}`,children:e})},e))}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(`div`,{className:`nb-divider`}),e?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(M,{to:`/employer-dashboard`,className:`nb-user-chip`,children:[(0,N.jsx)(`div`,{className:`nb-user-avatar`,children:(0,N.jsx)(xr,{size:12,color:`#fff`})}),(0,N.jsxs)(`span`,{className:`nb-user-name`,children:[`Hi, `,(0,N.jsx)(`strong`,{children:e.name})]})]}),(0,N.jsxs)(`button`,{onClick:a,className:`nb-logout`,children:[(0,N.jsx)(mr,{size:12}),`Logout`]})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M,{to:`/login`,className:`nb-login`,children:`Login`}),(0,N.jsxs)(M,{to:`/register`,className:`nb-register`,children:[`Get Started `,(0,N.jsx)(cr,{size:12})]})]}),(0,N.jsx)(`button`,{className:`nb-hamburger`,onClick:()=>i(!r),"aria-label":`Toggle menu`,children:r?(0,N.jsx)(Cr,{size:16}):(0,N.jsx)(_r,{size:16})})]})]}),(0,N.jsxs)(`div`,{className:`nb-drawer${r?` open`:``}`,children:[o.map(({label:e,to:t})=>(0,N.jsx)(M,{to:t,className:`nb-drawer-link`,onClick:()=>i(!1),children:e},e)),(0,N.jsx)(`div`,{className:`nb-drawer-divider`}),(0,N.jsx)(`div`,{className:`nb-drawer-actions`,children:e?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`nb-user-chip`,style:{justifyContent:`flex-start`},children:[(0,N.jsx)(`div`,{className:`nb-user-avatar`,children:(0,N.jsx)(xr,{size:12,color:`#fff`})}),(0,N.jsxs)(`span`,{className:`nb-user-name`,children:[`Hi, `,(0,N.jsx)(`strong`,{children:e.name})]})]}),(0,N.jsxs)(`button`,{onClick:a,className:`nb-logout`,style:{width:`100%`,justifyContent:`center`},children:[(0,N.jsx)(mr,{size:12}),` Logout`]})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M,{to:`/login`,className:`nb-drawer-link`,onClick:()=>i(!1),children:`Login`}),(0,N.jsxs)(M,{to:`/register`,className:`nb-register`,style:{justifyContent:`center`},onClick:()=>i(!1),children:[`Get Started `,(0,N.jsx)(cr,{size:12})]})]})})]})]})]})};function Er(e,t){return function(){return e.apply(t,arguments)}}var{toString:Dr}=Object.prototype,{getPrototypeOf:Or}=Object,{iterator:kr,toStringTag:Ar}=Symbol,jr=(e=>t=>{let n=Dr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Mr=e=>(e=e.toLowerCase(),t=>jr(t)===e),Nr=e=>t=>typeof t===e,{isArray:Pr}=Array,Fr=Nr(`undefined`);function Ir(e){return e!==null&&!Fr(e)&&e.constructor!==null&&!Fr(e.constructor)&&Br(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Lr=Mr(`ArrayBuffer`);function Rr(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Lr(e.buffer),t}var zr=Nr(`string`),Br=Nr(`function`),Vr=Nr(`number`),Hr=e=>typeof e==`object`&&!!e,Ur=e=>e===!0||e===!1,Wr=e=>{if(jr(e)!==`object`)return!1;let t=Or(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ar in e)&&!(kr in e)},Gr=e=>{if(!Hr(e)||Ir(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Kr=Mr(`Date`),qr=Mr(`File`),Jr=e=>!!(e&&e.uri!==void 0),Yr=e=>e&&e.getParts!==void 0,Xr=Mr(`Blob`),Zr=Mr(`FileList`),Qr=e=>Hr(e)&&Br(e.pipe);function $r(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var ei=$r(),ti=ei.FormData===void 0?void 0:ei.FormData,ni=e=>{let t;return e&&(ti&&e instanceof ti||Br(e.append)&&((t=jr(e))===`formdata`||t===`object`&&Br(e.toString)&&e.toString()===`[object FormData]`))},ri=Mr(`URLSearchParams`),[ii,ai,oi,si]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(Mr),ci=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function li(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),Pr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Ir(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function ui(e,t){if(Ir(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var di=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,fi=e=>!Fr(e)&&e!==di;function pi(){let{caseless:e,skipUndefined:t}=fi(this)&&this||{},n={},r=(r,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=e&&ui(n,i)||i;Wr(n[a])&&Wr(r)?n[a]=pi(n[a],r):Wr(r)?n[a]=pi({},r):Pr(r)?n[a]=r.slice():(!t||!Fr(r))&&(n[a]=r)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&li(arguments[e],r);return n}var mi=(e,t,n,{allOwnKeys:r}={})=>(li(t,(t,r)=>{n&&Br(t)?Object.defineProperty(e,r,{value:Er(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),hi=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gi=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},_i=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Or(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},vi=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},yi=e=>{if(!e)return null;if(Pr(e))return e;let t=e.length;if(!Vr(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},bi=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Or(Uint8Array)),xi=(e,t)=>{let n=(e&&e[kr]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Si=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ci=Mr(`HTMLFormElement`),wi=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Ti=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ei=Mr(`RegExp`),Di=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};li(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Oi=e=>{Di(e,(t,n)=>{if(Br(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(Br(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},ki=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Pr(e)?r(e):r(String(e).split(t)),n},Ai=()=>{},ji=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Mi(e){return!!(e&&Br(e.append)&&e[Ar]===`FormData`&&e[kr])}var Ni=e=>{let t=Array(10),n=(e,r)=>{if(Hr(e)){if(t.indexOf(e)>=0)return;if(Ir(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=Pr(e)?[]:{};return li(e,(e,t)=>{let a=n(e,r+1);!Fr(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},Pi=Mr(`AsyncFunction`),Fi=e=>e&&(Hr(e)||Br(e))&&Br(e.then)&&Br(e.catch),Ii=((e,t)=>e?setImmediate:t?((e,t)=>(di.addEventListener(`message`,({source:n,data:r})=>{n===di&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),di.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,Br(di.postMessage)),P={isArray:Pr,isArrayBuffer:Lr,isBuffer:Ir,isFormData:ni,isArrayBufferView:Rr,isString:zr,isNumber:Vr,isBoolean:Ur,isObject:Hr,isPlainObject:Wr,isEmptyObject:Gr,isReadableStream:ii,isRequest:ai,isResponse:oi,isHeaders:si,isUndefined:Fr,isDate:Kr,isFile:qr,isReactNativeBlob:Jr,isReactNative:Yr,isBlob:Xr,isRegExp:Ei,isFunction:Br,isStream:Qr,isURLSearchParams:ri,isTypedArray:bi,isFileList:Zr,forEach:li,merge:pi,extend:mi,trim:ci,stripBOM:hi,inherits:gi,toFlatObject:_i,kindOf:jr,kindOfTest:Mr,endsWith:vi,toArray:yi,forEachEntry:xi,matchAll:Si,isHTMLForm:Ci,hasOwnProperty:Ti,hasOwnProp:Ti,reduceDescriptors:Di,freezeMethods:Oi,toObjectSet:ki,toCamelCase:wi,noop:Ai,toFiniteNumber:ji,findKey:ui,global:di,isContextDefined:fi,isSpecCompliantForm:Mi,toJSONObject:Ni,isAsyncFn:Pi,isThenable:Fi,setImmediate:Ii,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(di):typeof process<`u`&&process.nextTick||Ii,isIterable:e=>e!=null&&Br(e[kr])},F=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,`message`,{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}};F.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,F.ERR_BAD_OPTION=`ERR_BAD_OPTION`,F.ECONNABORTED=`ECONNABORTED`,F.ETIMEDOUT=`ETIMEDOUT`,F.ERR_NETWORK=`ERR_NETWORK`,F.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,F.ERR_DEPRECATED=`ERR_DEPRECATED`,F.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,F.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,F.ERR_CANCELED=`ERR_CANCELED`,F.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,F.ERR_INVALID_URL=`ERR_INVALID_URL`;function I(e){return P.isPlainObject(e)||P.isArray(e)}function L(e){return P.endsWith(e,`[]`)?e.slice(0,-2):e}function Li(e,t,n){return e?e.concat(t).map(function(e,t){return e=L(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Ri(e){return P.isArray(e)&&!e.some(I)}var zi=P.toFlatObject(P,{},null,function(e){return/^is[A-Z]/.test(e)});function Bi(e,t,n){if(!P.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!P.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(P.isDate(e))return e.toISOString();if(P.isBoolean(e))return e.toString();if(!s&&P.isBlob(e))throw new F(`Blob is not supported. Use a Buffer instead.`);return P.isArrayBuffer(e)||P.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(P.isReactNative(t)&&P.isReactNativeBlob(e))return t.append(Li(i,n,a),c(e)),!1;if(e&&!i&&typeof e==`object`){if(P.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(P.isArray(e)&&Ri(e)||(P.isFileList(e)||P.endsWith(n,`[]`))&&(s=P.toArray(e)))return n=L(n),s.forEach(function(e,r){!(P.isUndefined(e)||e===null)&&t.append(o===!0?Li([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return I(e)?!0:(t.append(Li(i,n,a),c(e)),!1)}let u=[],d=Object.assign(zi,{defaultVisitor:l,convertValue:c,isVisitable:I});function f(e,n){if(!P.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),P.forEach(e,function(e,r){(!(P.isUndefined(e)||e===null)&&i.call(t,e,P.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!P.isObject(e))throw TypeError(`data must be an object`);return f(e),t}function Vi(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Hi(e,t){this._pairs=[],e&&Bi(e,this,t)}var Ui=Hi.prototype;Ui.append=function(e,t){this._pairs.push([e,t])},Ui.toString=function(e){let t=e?function(t){return e.call(this,t,Vi)}:Vi;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Wi(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Gi(e,t,n){if(!t)return e;let r=n&&n.encode||Wi,i=P.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):P.isURLSearchParams(t)?t.toString():new Hi(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Ki=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){P.forEach(this.handlers,function(t){t!==null&&e(t)})}},qi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Ji={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Hi,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Yi=s({hasBrowserEnv:()=>Xi,hasStandardBrowserEnv:()=>Qi,hasStandardBrowserWebWorkerEnv:()=>$i,navigator:()=>Zi,origin:()=>ea}),Xi=typeof window<`u`&&typeof document<`u`,Zi=typeof navigator==`object`&&navigator||void 0,Qi=Xi&&(!Zi||[`ReactNative`,`NativeScript`,`NS`].indexOf(Zi.product)<0),$i=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,ea=Xi&&window.location.href||`http://localhost`,ta={...Yi,...Ji};function na(e,t){return Bi(e,new ta.classes.URLSearchParams,{visitor:function(e,t,n,r){return ta.isNode&&P.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function ra(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function ia(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function aa(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&P.isArray(r)?r.length:a,s?(P.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!P.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&P.isArray(r[a])&&(r[a]=ia(r[a])),!o)}if(P.isFormData(e)&&P.isFunction(e.entries)){let n={};return P.forEachEntry(e,(e,r)=>{t(ra(e),r,n,0)}),n}return null}function oa(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var sa={transitional:qi,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=P.isObject(e);if(i&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return r?JSON.stringify(aa(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e)||P.isReadableStream(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return na(e,this.formSerializer).toString();if((a=P.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return Bi(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),oa(e)):e}],transformResponse:[function(e){let t=this.transitional||sa.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(P.isResponse(e)||P.isReadableStream(e))return e;if(e&&P.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(e){if(n)throw e.name===`SyntaxError`?F.from(e,F.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:ta.classes.FormData,Blob:ta.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};P.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{sa.headers[e]={}});var ca=P.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),la=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&ca[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},ua=Symbol(`internals`);function da(e){return e&&String(e).trim().toLowerCase()}function fa(e){return e===!1||e==null?e:P.isArray(e)?e.map(fa):String(e).replace(/[\r\n]+$/,``)}function pa(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var ma=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ha(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function ga(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function _a(e,t){let n=P.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var va=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=da(t);if(!i)throw Error(`header name must be a non-empty string`);let a=P.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=fa(e))}let a=(e,t)=>P.forEach(e,(e,n)=>i(e,n,t));if(P.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(P.isString(e)&&(e=e.trim())&&!ma(e))a(la(e),t);else if(P.isObject(e)&&P.isIterable(e)){let n={},r,i;for(let t of e){if(!P.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?P.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=da(e),e){let n=P.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return pa(e);if(P.isFunction(t))return t.call(this,e,n);if(P.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=da(e),e){let n=P.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||ha(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=da(e),e){let i=P.findKey(n,e);i&&(!t||ha(n,n[i],i,t))&&(delete n[i],r=!0)}}return P.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||ha(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return P.forEach(this,(r,i)=>{let a=P.findKey(n,i);if(a){t[a]=fa(r),delete t[i];return}let o=e?ga(i):String(i).trim();o!==i&&delete t[i],t[o]=fa(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return P.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&P.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[ua]=this[ua]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=da(e);t[r]||(_a(n,e),t[r]=!0)}return P.isArray(e)?e.forEach(r):r(e),this}};va.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),P.reduceDescriptors(va.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),P.freezeMethods(va);function ya(e,t){let n=this||sa,r=t||n,i=va.from(r.headers),a=r.data;return P.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function ba(e){return!!(e&&e.__CANCEL__)}var xa=class extends F{constructor(e,t,n){super(e??`canceled`,F.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function Sa(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F(`Request failed with status code `+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ca(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function wa(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Ta(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Ea=(e,t,n=3)=>{let r=0,i=wa(50,250);return Ta(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a,e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Da=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Oa=e=>(...t)=>P.asap(()=>e(...t)),ka=ta.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ta.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ta.origin),ta.navigator&&/(msie|trident)/i.test(ta.navigator.userAgent)):()=>!0,Aa=ta.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];P.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),P.isString(r)&&s.push(`path=${r}`),P.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),P.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.match(RegExp(`(?:^|; )`+e+`=([^;]*)`));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function ja(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function Ma(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function Na(e,t,n){let r=!ja(t);return e&&(r||n==0)?Ma(e,t):t}var Pa=e=>e instanceof va?{...e}:e;function Fa(e,t){t||={};let n={};function r(e,t,n,r){return P.isPlainObject(e)&&P.isPlainObject(t)?P.merge.call({caseless:r},e,t):P.isPlainObject(t)?P.merge({},t):P.isArray(t)?t.slice():t}function i(e,t,n,i){if(!P.isUndefined(t))return r(e,t,n,i);if(!P.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!P.isUndefined(t))return r(void 0,t)}function o(e,t){if(!P.isUndefined(t))return r(void 0,t);if(!P.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Pa(e),Pa(t),n,!0)};return P.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=P.hasOwnProp(c,r)?c[r]:i,o=a(e[r],t[r],r);P.isUndefined(o)&&a!==s||(n[r]=o)}),n}var Ia=e=>{let t=Fa({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;if(t.headers=o=va.from(o),t.url=Gi(Na(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``))),P.isFormData(n)){if(ta.hasStandardBrowserEnv||ta.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(P.isFunction(n.getHeaders)){let e=n.getHeaders(),t=[`content-type`,`content-length`];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&o.set(e,n)})}}if(ta.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&ka(t.url))){let e=i&&a&&Aa.read(a);e&&o.set(i,e)}return t},La=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Ia(e),i=r.data,a=va.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=va.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());Sa(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new F(`Request aborted`,F.ECONNABORTED,e,h)),null)},h.onerror=function(t){let r=new F(t&&t.message?t.message:`Network Error`,F.ERR_NETWORK,e,h);r.event=t||null,n(r),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||qi;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new F(t,i.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&P.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),P.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Ea(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Ea(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new xa(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Ca(r.url);if(_&&ta.protocols.indexOf(_)===-1){n(new F(`Unsupported protocol `+_+`:`,F.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Ra=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof F?t:new xa(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new F(`timeout of ${t}ms exceeded`,F.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>P.asap(o),s}},za=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Ba=async function*(e,t){for await(let n of Va(e))yield*za(n,t)},Va=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ha=(e,t,n,r)=>{let i=Ba(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},Ua=64*1024,{isFunction:Wa}=P,Ga=(({Request:e,Response:t})=>({Request:e,Response:t}))(P.global),{ReadableStream:Ka,TextEncoder:qa}=P.global,Ja=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ya=e=>{e=P.merge.call({skipUndefined:!0},Ga,e);let{fetch:t,Request:n,Response:r}=e,i=t?Wa(t):typeof fetch==`function`,a=Wa(n),o=Wa(r);if(!i)return!1;let s=i&&Wa(Ka),c=i&&(typeof qa==`function`?(e=>t=>e.encode(t))(new qa):async e=>new Uint8Array(await new n(e).arrayBuffer())),l=a&&s&&Ja(()=>{let e=!1,t=new Ka,r=new n(ta.origin,{body:t,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return t.cancel(),e&&!r}),u=o&&s&&Ja(()=>P.isReadableStream(new r(``).body)),d={stream:u&&(e=>e.body)};i&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new F(`Response type '${e}' is not supported`,F.ERR_NOT_SUPPORT,n)})});let f=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new n(ta.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e+=``),P.isString(e))return(await c(e)).byteLength},p=async(e,t)=>P.toFiniteNumber(e.getContentLength())??f(t);return async e=>{let{url:i,method:o,data:s,signal:c,cancelToken:f,timeout:m,onDownloadProgress:h,onUploadProgress:g,responseType:_,headers:v,withCredentials:y=`same-origin`,fetchOptions:b}=Ia(e),x=t||fetch;_=_?(_+``).toLowerCase():`text`;let S=Ra([c,f&&f.toAbortSignal()],m),C=null,w=S&&S.unsubscribe&&(()=>{S.unsubscribe()}),T;try{if(g&&l&&o!==`get`&&o!==`head`&&(T=await p(v,s))!==0){let e=new n(i,{method:`POST`,body:s,duplex:`half`}),t;if(P.isFormData(s)&&(t=e.headers.get(`content-type`))&&v.setContentType(t),e.body){let[t,n]=Da(T,Ea(Oa(g)));s=Ha(e.body,Ua,t,n)}}P.isString(y)||(y=y?`include`:`omit`);let t=a&&`credentials`in n.prototype,c={...b,signal:S,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:`half`,credentials:t?y:void 0};C=a&&new n(i,c);let f=await(a?x(C,b):x(i,c)),m=u&&(_===`stream`||_===`response`);if(u&&(h||m&&w)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=f[t]});let t=P.toFiniteNumber(f.headers.get(`content-length`)),[n,i]=h&&Da(t,Ea(Oa(h),!0))||[];f=new r(Ha(f.body,Ua,n,()=>{i&&i(),w&&w()}),e)}_||=`text`;let E=await d[P.findKey(d,_)||`text`](f,e);return!m&&w&&w(),await new Promise((t,n)=>{Sa(t,n,{data:E,headers:va.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:C})})}catch(t){throw w&&w(),t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new F(`Network Error`,F.ERR_NETWORK,e,C,t&&t.response),{cause:t.cause||t}):F.from(t,t&&t.code,e,C,t&&t.response)}}},Xa=new Map,Za=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Xa;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:Ya(t)),l=c;return c};Za();var Qa={http:null,xhr:La,fetch:{get:Za}};P.forEach(Qa,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var $a=e=>`- ${e}`,eo=e=>P.isFunction(e)||e===null||e===!1;function to(e,t){e=P.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!eo(r)&&(i=Qa[(n=String(r)).toLowerCase()],i===void 0))throw new F(`Unknown adapter '${n}'`);if(i&&(P.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new F(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map($a).join(`
`):` `+$a(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var no={getAdapter:to,adapters:Qa};function ro(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xa(null,e)}function io(e){return ro(e),e.headers=va.from(e.headers),e.data=ya.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),no.getAdapter(e.adapter||sa.adapter,e)(e).then(function(t){return ro(e),t.data=ya.call(e,e.transformResponse,t),t.headers=va.from(t.headers),t},function(t){return ba(t)||(ro(e),t&&t.response&&(t.response.data=ya.call(e,e.transformResponse,t.response),t.response.headers=va.from(t.response.headers))),Promise.reject(t)})}var ao=`1.14.0`,oo={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{oo[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var so={};oo.transitional=function(e,t,n){function r(e,t){return`[Axios v`+ao+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new F(r(i,` has been removed`+(t?` in `+t:``)),F.ERR_DEPRECATED);return t&&!so[i]&&(so[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},oo.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function co(e,t,n){if(typeof e!=`object`)throw new F(`options must be an object`,F.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new F(`option `+a+` must be `+n,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F(`Unknown option `+a,F.ERR_BAD_OPTION)}}var lo={assertOptions:co,validators:oo},uo=lo.validators,fo=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ki,response:new Ki}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=t.stack?t.stack.replace(/^.+\n/,``):``;try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,``))&&(e.stack+=`
`+n):e.stack=n}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Fa(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&lo.assertOptions(n,{silentJSONParsing:uo.transitional(uo.boolean),forcedJSONParsing:uo.transitional(uo.boolean),clarifyTimeoutError:uo.transitional(uo.boolean),legacyInterceptorReqResOrdering:uo.transitional(uo.boolean)},!1),r!=null&&(P.isFunction(r)?t.paramsSerializer={serialize:r}:lo.assertOptions(r,{encode:uo.function,serialize:uo.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),lo.assertOptions(t,{baseUrl:uo.spelling(`baseURL`),withXsrfToken:uo.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&P.merge(i.common,i[t.method]);i&&P.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=va.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||qi;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[io.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=io.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Fa(this.defaults,e),Gi(Na(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};P.forEach([`delete`,`get`,`head`,`options`],function(e){fo.prototype[e]=function(t,n){return this.request(Fa(n||{},{method:e,url:t,data:(n||{}).data}))}}),P.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(Fa(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}fo.prototype[e]=t(),fo.prototype[e+`Form`]=t(!0)});var po=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new xa(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function mo(e){return function(t){return e.apply(null,t)}}function ho(e){return P.isObject(e)&&e.isAxiosError===!0}var R={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(R).forEach(([e,t])=>{R[t]=e});function z(e){let t=new fo(e),n=Er(fo.prototype.request,t);return P.extend(n,fo.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return z(Fa(e,t))},n}var B=z(sa);B.Axios=fo,B.CanceledError=xa,B.CancelToken=po,B.isCancel=ba,B.VERSION=ao,B.toFormData=Bi,B.AxiosError=F,B.Cancel=B.CanceledError,B.all=function(e){return Promise.all(e)},B.spread=mo,B.isAxiosError=ho,B.mergeConfig=Fa,B.AxiosHeaders=va,B.formToJSON=e=>aa(P.isHTMLForm(e)?new FormData(e):e),B.getAdapter=no.getAdapter,B.HttpStatusCode=R,B.default=B;var V=B.create({baseURL:`http://localhost:5000/api`});V.interceptors.request.use(e=>{let t=localStorage.getItem(`token`);return t&&(e.headers.Authorization=`Bearer ${t}`),e});var go=()=>{let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(``),u=st(),d=async()=>{try{r(!0);let e={};i&&(e.search=i),o&&(e.category=o),c&&(e.job_type=c),t((await V.get(`/jobs`,{params:e})).data.jobs)}catch(e){console.error(e)}finally{r(!1)}};return(0,S.useEffect)(()=>{d()},[o,c]),(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue:       #0f9be7;
          --blue-hover: #0b87cc;
          --dark:       #13181f;
          --white:      #ffffff;
          --mid:        #f4f8fc;
          --border:     #e4edf5;
          --muted:      #7a8a98;
          --light-blue: #e8f5fd;
          --blue-glow:  rgba(15,155,231,.12);
        }

        .home-wrap * { box-sizing: border-box; }

        .home-wrap {
          font-family: 'JetBrains Mono', monospace;
          background: var(--white);
          min-height: 100vh;
          color: var(--dark);
        }

        /* ── HERO ── */
        .h-hero {
          background: var(--dark);
          position: relative; overflow: hidden;
          padding: 80px 24px 0;
          text-align: center;
        }

        .h-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px; opacity: .04;
          pointer-events: none;
        }
        .h-hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
          animation: hScan 4s ease-in-out infinite;
          pointer-events: none; z-index: 2;
        }
        @keyframes hScan {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(3000%); }
        }
        .h-hero-corner {
          position: absolute; width: 16px; height: 16px;
          border-color: var(--blue); border-style: solid; opacity: .3; z-index: 3;
        }

        .h-hero-inner {
          position: relative; z-index: 4;
          max-width: 680px; margin: 0 auto; padding-bottom: 60px;
        }

        .h-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.3);
          padding: 5px 14px; margin-bottom: 24px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          letter-spacing: .1em; text-transform: uppercase;
        }
        .h-hero-blink {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.5s ease infinite; display: inline-block;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }

        .h-hero h1 {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 800; letter-spacing: -.02em;
          line-height: 1.0; color: var(--white); margin: 0 0 18px;
        }
        .h-hero h1 em {
          font-style: normal;
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .h-hero-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: .78rem; color: rgba(255,255,255,.38);
          line-height: 1.8; margin: 0 0 36px;
          letter-spacing: .02em;
        }

        /* search */
        .h-search {
          display: flex;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
          margin-bottom: 36px;
        }
        .h-search input {
          flex: 1; border: none; outline: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem; color: var(--white);
          padding: 15px 20px; background: transparent;
        }
        .h-search input::placeholder { color: rgba(255,255,255,.22); }
        .h-search input:focus { background: rgba(255,255,255,.03); }
        .h-search-btn {
          background: var(--blue); color: var(--white);
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          font-size: .75rem; letter-spacing: .07em; text-transform: uppercase;
          border: none; cursor: pointer; padding: 15px 26px;
          display: flex; align-items: center; gap: 8px;
          transition: background .2s;
        }
        .h-search-btn:hover { background: var(--blue-hover); }

        /* stat bar */
        .h-stat-bar {
          background: var(--blue); position: relative;
        }
        .h-stat-bar::before {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            90deg, transparent, transparent 80px,
            rgba(255,255,255,.05) 80px, rgba(255,255,255,.05) 81px
          );
        }
        .h-stat-bar-inner {
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3,1fr);
        }
        .h-stat-item {
          padding: 22px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,.18);
        }
        .h-stat-item:last-child { border-right: none; }
        .h-stat-num {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.8rem; font-weight: 800;
          color: var(--white); line-height: 1.1;
        }
        .h-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .58rem; color: rgba(255,255,255,.6);
          letter-spacing: .1em; text-transform: uppercase; margin-top: 4px;
        }

        /* ── BODY ── */
        .h-body {
          max-width: 1200px; margin: 0 auto; padding: 40px 24px 80px;
        }

        /* ── FILTER ROW ── */
        .h-filters {
          display: flex; gap: 10px; margin-bottom: 32px;
          flex-wrap: wrap; align-items: center;
        }
        .h-filter-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--muted);
          letter-spacing: .1em; text-transform: uppercase;
        }
        .h-filter-label::before { content: '// '; color: var(--blue); opacity: .6; }

        .h-select {
          padding: 9px 34px 9px 14px;
          border: 1.5px solid var(--border);
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; color: var(--dark);
          background: var(--white); outline: none; cursor: pointer;
          transition: border-color .2s, box-shadow .2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%237a8a98' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 11px center;
          clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
        }
        .h-select:focus { border-color: var(--blue); box-shadow: 0 0 0 4px rgba(15,155,231,.08); }
        .h-select.active { border-color: var(--blue); background-color: var(--light-blue); color: var(--blue); }

        .h-reset-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 16px;
          border: 1.5px solid rgba(239,68,68,.3);
          background: rgba(239,68,68,.05); color: #ef4444;
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; letter-spacing: .06em; text-transform: uppercase;
          cursor: pointer; transition: background .2s;
        }
        .h-reset-btn:hover { background: rgba(239,68,68,.1); }

        /* ── SECTION HEADER ── */
        .h-section-head {
          display: flex; align-items: baseline;
          justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 10px;
        }
        .h-section-title {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.3rem; font-weight: 800; color: var(--dark); letter-spacing: -.01em;
        }
        .h-count {
          display: inline-flex; align-items: center;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; font-weight: 600; letter-spacing: .06em;
          padding: 4px 12px; border: 1px solid rgba(15,155,231,.2);
        }

        /* ── LOADING ── */
        .h-loading {
          display: flex; justify-content: center; gap: 6px; padding: 80px 0;
        }
        .h-loading span {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--blue);
          animation: ldot 1.2s ease-in-out infinite;
        }
        .h-loading span:nth-child(2) { animation-delay: .2s; }
        .h-loading span:nth-child(3) { animation-delay: .4s; }
        @keyframes ldot {
          0%,80%,100%{ transform:scale(.6); opacity:.35; }
          40%{ transform:scale(1); opacity:1; }
        }

        /* ── EMPTY ── */
        .h-empty {
          text-align: center; padding: 72px 0;
        }
        .h-empty-icon {
          width: 64px; height: 64px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin: 0 auto 18px;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .h-empty h3 {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.1rem; font-weight: 800; color: var(--dark); margin-bottom: 8px;
        }
        .h-empty p {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; color: var(--muted);
        }
        .h-empty p::before { content: '// '; color: var(--blue); opacity: .6; }

        /* ── GRID ── */
        .h-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 18px;
        }

        /* ── JOB CARD ── */
        .h-card {
          background: var(--white);
          border: 1px solid var(--border);
          padding: 22px;
          cursor: pointer;
          transition: all .28s cubic-bezier(.23,1,.32,1);
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
        }
        .h-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 2px;
          background: var(--blue); transform: scaleX(0);
          transform-origin: left; transition: transform .3s;
        }
        .h-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px var(--blue-glow);
          border-color: rgba(15,155,231,.35);
        }
        .h-card:hover::after { transform: scaleX(1); }
        .h-card:hover .h-card-title { color: var(--blue); }

        .h-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; margin-bottom: 16px;
        }

        /* company logo */
        .h-logo {
          width: 42px; height: 42px;
          background: var(--dark); color: var(--blue);
          font-family: 'Oxanium', sans-serif; font-weight: 800; font-size: 1rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }

        .h-card-badges { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
        .h-badge {
          display: inline-flex; align-items: center;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .58rem; letter-spacing: .08em; text-transform: uppercase; font-weight: 600;
          padding: 3px 10px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2);
        }
        .h-badge-neutral {
          background: var(--mid); color: var(--muted);
          border-color: var(--border);
        }

        .h-company-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; color: var(--muted);
          letter-spacing: .06em; text-transform: uppercase; margin-bottom: 6px;
        }
        .h-card-title {
          font-family: 'Oxanium', sans-serif;
          font-size: 1rem; font-weight: 800;
          color: var(--dark); line-height: 1.25;
          margin: 0 0 16px; letter-spacing: -.01em;
          transition: color .18s;
        }

        .h-meta { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
        .h-meta-item {
          display: flex; align-items: center; gap: 9px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
        }
        .h-meta-icon {
          width: 20px; height: 20px;
          background: var(--mid); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; flex-shrink: 0;
        }

        .h-divider { height: 1px; background: var(--border); margin-bottom: 16px; }

        .h-view-btn {
          width: 100%; padding: 12px;
          background: var(--dark); color: var(--white);
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: background .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .h-view-btn:hover { background: var(--blue); }

        @media (max-width: 640px) {
          .h-hero { padding: 56px 20px 0; }
          .h-search { flex-direction: column; }
          .h-search-btn { justify-content: center; }
          .h-stat-bar-inner { grid-template-columns: repeat(3,1fr); }
          .h-grid { grid-template-columns: 1fr; }
        }
      `}),(0,N.jsxs)(`div`,{className:`home-wrap`,children:[(0,N.jsx)(`section`,{className:`h-hero`,children:(0,N.jsxs)(`div`,{className:`h-hero-inner`,children:[(0,N.jsxs)(`div`,{className:`h-hero-badge`,children:[(0,N.jsx)(`span`,{className:`h-hero-blink`}),`10,000+ Opportunities Waiting`]}),(0,N.jsxs)(`h1`,{children:[`Find Your `,(0,N.jsx)(`em`,{children:`Dream Job`}),(0,N.jsx)(`br`,{}),`— All in One Place`]}),(0,N.jsx)(`p`,{className:`h-hero-sub`,children:`Thousands of top companies. One seamless search experience.`}),(0,N.jsxs)(`div`,{className:`h-search`,children:[(0,N.jsx)(`input`,{type:`text`,placeholder:`Job title, skill, or company…`,value:i,onChange:e=>a(e.target.value),onKeyDown:e=>e.key===`Enter`&&d()}),(0,N.jsxs)(`button`,{className:`h-search-btn`,onClick:d,children:[(0,N.jsxs)(`svg`,{width:`13`,height:`13`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,N.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`,strokeWidth:`2.5`}),(0,N.jsx)(`path`,{d:`m21 21-4.35-4.35`,strokeWidth:`2.5`})]}),`Search`]})]})]})}),(0,N.jsxs)(`div`,{className:`h-body`,children:[(0,N.jsxs)(`div`,{className:`h-filters`,children:[(0,N.jsx)(`span`,{className:`h-filter-label`,children:`Filter by`}),(0,N.jsxs)(`select`,{value:o,onChange:e=>s(e.target.value),className:`h-select ${o?`active`:``}`,children:[(0,N.jsx)(`option`,{value:``,children:`All Categories`}),[`Software Development`,`Data Science`,`Design`,`Marketing`,`Sales`,`HR`,`Finance`,`Consulting`,`Other`].map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]}),(0,N.jsxs)(`select`,{value:c,onChange:e=>l(e.target.value),className:`h-select ${c?`active`:``}`,children:[(0,N.jsx)(`option`,{value:``,children:`All Types`}),[`Full-time`,`Part-time`,`Contract`,`Internship`,`Remote`].map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))]}),(o||c||i)&&(0,N.jsxs)(`button`,{className:`h-reset-btn`,onClick:()=>{a(``),s(``),l(``)},children:[(0,N.jsx)(`svg`,{width:`11`,height:`11`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,N.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})}),`Clear`]})]}),(0,N.jsxs)(`div`,{className:`h-section-head`,children:[(0,N.jsx)(`h2`,{className:`h-section-title`,children:o||c||i?`Search Results`:`Latest Openings`}),!n&&(0,N.jsxs)(`span`,{className:`h-count`,children:[e.length,` `,e.length===1?`job`:`jobs`,` found`]})]}),n&&(0,N.jsxs)(`div`,{className:`h-loading`,children:[(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{})]}),!n&&e.length===0&&(0,N.jsxs)(`div`,{className:`h-empty`,children:[(0,N.jsx)(`div`,{className:`h-empty-icon`,children:`🔍`}),(0,N.jsx)(`h3`,{children:`No jobs found`}),(0,N.jsx)(`p`,{children:`try adjusting your filters or search with different keywords`})]}),!n&&e.length>0&&(0,N.jsx)(`div`,{className:`h-grid`,children:e.map(e=>(0,N.jsxs)(`div`,{className:`h-card`,onClick:()=>u(`/jobs/${e.id}`),children:[(0,N.jsxs)(`div`,{className:`h-card-top`,children:[(0,N.jsx)(`div`,{className:`h-logo`,children:(e.company?.name||`C`).slice(0,1).toUpperCase()}),(0,N.jsxs)(`div`,{className:`h-card-badges`,children:[(0,N.jsx)(`span`,{className:`h-badge`,children:e.job_type}),(0,N.jsx)(`span`,{className:`h-badge h-badge-neutral`,children:e.category})]})]}),(0,N.jsx)(`p`,{className:`h-company-name`,children:e.company?.name||`Company`}),(0,N.jsx)(`h3`,{className:`h-card-title`,children:e.title}),(0,N.jsxs)(`div`,{className:`h-meta`,children:[e.location&&(0,N.jsxs)(`div`,{className:`h-meta-item`,children:[(0,N.jsx)(`span`,{className:`h-meta-icon`,children:`📍`}),e.location]}),e.salary_min&&(0,N.jsxs)(`div`,{className:`h-meta-item`,children:[(0,N.jsx)(`span`,{className:`h-meta-icon`,children:`₹`}),`₹`,(e.salary_min/1e5).toFixed(1),`L – ₹`,(e.salary_max/1e5).toFixed(1),`L per annum`]}),(0,N.jsxs)(`div`,{className:`h-meta-item`,children:[(0,N.jsx)(`span`,{className:`h-meta-icon`,children:`◎`}),e.experience_min,`–`,e.experience_max,` years experience`]})]}),(0,N.jsx)(`div`,{className:`h-divider`}),(0,N.jsx)(`button`,{className:`h-view-btn`,children:`View Details →`})]},e.id))})]})]})]})},_o=()=>{let[e,t]=(0,S.useState)({email:``,password:``}),[n,r]=(0,S.useState)(``),[i,a]=(0,S.useState)(!1),[o,s]=(0,S.useState)(!1),{login:c}=Jn(),l=st();(0,S.useEffect)(()=>{s(!0)},[]);let u=n=>t({...e,[n.target.name]:n.target.value});return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue:       #0f9be7;
          --blue-hover: #0b87cc;
          --dark:       #13181f;
          --white:      #ffffff;
          --mid:        #f4f8fc;
          --border:     #e4edf5;
          --muted:      #7a8a98;
          --light-blue: #e8f5fd;
          --blue-glow:  rgba(15,155,231,.25);
        }

        .lp-root * { box-sizing: border-box; }

        .lp-root {
          min-height: 100vh;
          background: var(--mid);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        /* page grid bg */
        .lp-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: .025;
          pointer-events: none;
        }

        /* ── CARD ── */
        .lp-card {
          display: flex;
          width: 100%;
          max-width: 940px;
          min-height: 600px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(19,24,31,.10), 0 2px 8px rgba(19,24,31,.05);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1);
          position: relative;
        }
        /* top blue bar */
        .lp-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--blue); z-index: 10;
        }
        .lp-card.visible {
          opacity: 1;
          transform: none;
        }

        /* ── LEFT PANEL ── */
        .lp-left {
          width: 400px;
          flex-shrink: 0;
          background: var(--dark);
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 52px 44px;
          overflow: hidden;
        }

  

        /* scan line */
        .lp-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 4;
        }
        @keyframes scanLine {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(3000%); }
        }

        /* corner decorators */
        .lp-corner {
          position: absolute; width: 16px; height: 16px;
          border-color: var(--blue); border-style: solid; opacity: .35; z-index: 3;
        }

        .lp-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 5;
          margin-bottom: auto;
        }
        .lp-brand-icon {
          width: 38px; height: 38px;
          background: var(--blue);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .lp-brand-icon svg { width: 20px; height: 20px; }
        .lp-brand-name {
          font-family: 'Oxanium', sans-serif;
          font-size: 17px; font-weight: 800;
          color: var(--white); letter-spacing: .04em;
        }

        .lp-left-center {
          position: relative; z-index: 5;
          flex: 1; display: flex;
          flex-direction: column; justify-content: center;
          padding: 40px 0 32px;
        }

        .lp-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.3);
          padding: 5px 13px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          letter-spacing: .1em; text-transform: uppercase;
          margin-bottom: 22px; width: fit-content;
        }
        .lp-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.8s ease-in-out infinite;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:.25} }

        .lp-headline {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800; color: var(--white);
          line-height: 1.05; letter-spacing: -.02em;
          margin-bottom: 18px;
        }
        .lp-headline span {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .lp-desc {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; color: rgba(255,255,255,.38);
          line-height: 1.8; max-width: 280px;
        }

        /* stat bar */
        .lp-stats {
          position: relative; z-index: 5;
          display: flex;
          border-top: 1px solid rgba(255,255,255,.07);
          padding-top: 28px;
        }
        .lp-stat { flex: 1; padding-right: 16px; }
        .lp-stat + .lp-stat {
          padding-left: 16px; padding-right: 0;
          border-left: 1px solid rgba(255,255,255,.07);
        }
        .lp-stat-num {
          font-family: 'Oxanium', sans-serif;
          font-size: 1.6rem; font-weight: 800;
          color: var(--white); letter-spacing: -.02em; line-height: 1.1;
        }
        .lp-stat-num span { color: var(--blue); }
        .lp-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .58rem; color: rgba(255,255,255,.3);
          text-transform: uppercase; letter-spacing: .1em; margin-top: 4px;
        }

        /* ── RIGHT PANEL ── */
        .lp-right {
          flex: 1;
          padding: 56px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--white);
        }

        .lp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; color: var(--blue);
          text-transform: uppercase; letter-spacing: .14em;
          margin-bottom: 10px;
        }
        .lp-eyebrow::before {
          content: '//'; opacity: .5;
        }

        .lp-heading {
          font-family: 'Oxanium', sans-serif;
          font-size: 2.2rem; font-weight: 800;
          color: var(--dark); letter-spacing: -.02em;
          margin-bottom: 6px;
        }
        .lp-subtext {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
          margin-bottom: 32px; letter-spacing: .04em;
        }

        /* progress indicator */
        .lp-progress {
          height: 2px; background: var(--border);
          margin-bottom: 36px; overflow: hidden;
        }
        .lp-progress-fill {
          height: 100%; width: 35%;
          background: var(--blue);
          animation: lpProg 2s ease-in-out infinite alternate;
        }
        @keyframes lpProg { from{width:20%} to{width:55%} }

        /* error */
        .lp-error {
          background: rgba(239,68,68,.05);
          border: 1px solid rgba(239,68,68,.2);
          border-left: 3px solid #ef4444;
          padding: 11px 14px; margin-bottom: 22px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: #dc2626;
          animation: errIn .3s ease;
        }
        @keyframes errIn { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:none} }

        /* field */
        .lp-field { margin-bottom: 20px; }
        .lp-label {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; font-weight: 600;
          color: var(--muted); text-transform: uppercase;
          letter-spacing: .12em; margin-bottom: 8px;
        }

        .lp-input-wrap { position: relative; }
        .lp-input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          width: 15px; height: 15px;
          pointer-events: none; opacity: .25;
          transition: opacity .2s;
        }
        .lp-input-wrap:focus-within .lp-input-icon { opacity: .7; }

        .lp-input {
          width: 100%;
          border: 1.5px solid var(--border);
          padding: 13px 14px 13px 40px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .78rem; color: var(--dark);
          background: var(--mid);
          outline: none;
          border-radius: 3px;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .lp-input::placeholder { color: rgba(19,24,31,.2); }
        .lp-input:focus {
          border-color: var(--blue);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(15,155,231,.08);
        }

        .lp-row-meta {
          display: flex; justify-content: flex-end;
          margin-top: -8px; margin-bottom: 28px;
        }
        .lp-forgot {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          text-decoration: none; letter-spacing: .05em;
          transition: opacity .2s;
        }
        .lp-forgot:hover { opacity: .65; }

        /* ── SUBMIT BUTTON — DIT chamfer style ── */
        .lp-btn {
          width: 100%;
          background: var(--dark);
          border: none;
          padding: 15px;
          font-family: 'Oxanium', sans-serif;
          font-size: .85rem; font-weight: 700;
          color: #fff; cursor: pointer;
          letter-spacing: .08em; text-transform: uppercase;
          position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .25s, background .2s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .lp-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .lp-btn:hover:not(:disabled)::before { transform: translateX(100%); }
        .lp-btn:hover:not(:disabled) {
          background: var(--blue);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px var(--blue-glow);
        }
        .lp-btn:active:not(:disabled) { transform: translateY(0); }
        .lp-btn:disabled { opacity: .55; cursor: not-allowed; }

        .lp-btn-arrow { transition: transform .2s; }
        .lp-btn:hover:not(:disabled) .lp-btn-arrow { transform: translateX(4px); }

        .lp-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin .7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .lp-register {
          text-align: center; margin-top: 28px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
        }
        .lp-register a {
          color: var(--blue); text-decoration: none; font-weight: 600;
          border-bottom: 1px solid transparent; transition: border-color .2s;
        }
        .lp-register a:hover { border-bottom-color: var(--blue); }

        @media (max-width: 680px) {
          .lp-left { display: none; }
          .lp-right { padding: 40px 28px; }
          .lp-card { max-width: 440px; min-height: auto; }
        }
      `}),(0,N.jsx)(`div`,{className:`lp-root`,children:(0,N.jsxs)(`div`,{className:`lp-card ${o?`visible`:``}`,children:[(0,N.jsxs)(`div`,{className:`lp-left`,children:[(0,N.jsxs)(`div`,{className:`lp-brand`,children:[(0,N.jsx)(`div`,{className:`lp-brand-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 22 22`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`8`,height:`8`,rx:`2`,fill:`white`}),(0,N.jsx)(`rect`,{x:`12`,y:`2`,width:`8`,height:`8`,rx:`2`,fill:`white`,opacity:`0.5`}),(0,N.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`8`,rx:`2`,fill:`white`,opacity:`0.5`}),(0,N.jsx)(`rect`,{x:`12`,y:`12`,width:`8`,height:`8`,rx:`2`,fill:`white`,opacity:`0.2`})]})}),(0,N.jsx)(`span`,{className:`lp-brand-name`,children:`DIT Consultancy`})]}),(0,N.jsxs)(`div`,{className:`lp-left-center`,children:[(0,N.jsxs)(`div`,{className:`lp-badge`,children:[(0,N.jsx)(`span`,{className:`lp-badge-dot`}),`Now Hiring`]}),(0,N.jsxs)(`h1`,{className:`lp-headline`,children:[`Find Your`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{children:`Next`}),(0,N.jsx)(`br`,{}),`Chapter.`]}),(0,N.jsx)(`p`,{className:`lp-desc`,children:`Thousands of roles updated daily. Connect with companies that match your ambition.`})]}),(0,N.jsxs)(`div`,{className:`lp-stats`,children:[(0,N.jsxs)(`div`,{className:`lp-stat`,children:[(0,N.jsxs)(`div`,{className:`lp-stat-num`,children:[`12`,(0,N.jsx)(`span`,{children:`K+`})]}),(0,N.jsx)(`div`,{className:`lp-stat-label`,children:`Jobs Placed`})]}),(0,N.jsxs)(`div`,{className:`lp-stat`,children:[(0,N.jsxs)(`div`,{className:`lp-stat-num`,children:[`800`,(0,N.jsx)(`span`,{children:`+`})]}),(0,N.jsx)(`div`,{className:`lp-stat-label`,children:`Companies`})]}),(0,N.jsxs)(`div`,{className:`lp-stat`,children:[(0,N.jsxs)(`div`,{className:`lp-stat-num`,children:[`98`,(0,N.jsx)(`span`,{children:`%`})]}),(0,N.jsx)(`div`,{className:`lp-stat-label`,children:`Success Rate`})]})]})]}),(0,N.jsxs)(`div`,{className:`lp-right`,children:[(0,N.jsx)(`div`,{className:`lp-eyebrow`,children:`Welcome back`}),(0,N.jsx)(`h2`,{className:`lp-heading`,children:`Sign In`}),(0,N.jsx)(`p`,{className:`lp-subtext`,children:`// enter your credentials to continue`}),(0,N.jsx)(`div`,{className:`lp-progress`,children:(0,N.jsx)(`div`,{className:`lp-progress-fill`})}),n&&(0,N.jsxs)(`div`,{className:`lp-error`,children:[`⚠ `,n]}),(0,N.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault(),r(``),a(!0);try{let t=await V.post(`/auth/login`,e);c(t.data.user,t.data.token),t.data.user.role===`employer`?l(`/employer-dashboard`):l(`/`)}catch(e){r(e.response?.data?.message||`Something went wrong. Please try again.`)}finally{a(!1)}},children:[(0,N.jsxs)(`div`,{className:`lp-field`,children:[(0,N.jsx)(`label`,{className:`lp-label`,children:`Email Address`}),(0,N.jsxs)(`div`,{className:`lp-input-wrap`,children:[(0,N.jsxs)(`svg`,{className:`lp-input-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`3`,width:`14`,height:`10`,rx:`2`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M1 5.5l7 4.5 7-4.5`,stroke:`#13181f`,strokeWidth:`1.4`})]}),(0,N.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:u,placeholder:`your@email.com`,required:!0,className:`lp-input`})]})]}),(0,N.jsxs)(`div`,{className:`lp-field`,children:[(0,N.jsx)(`label`,{className:`lp-label`,children:`Password`}),(0,N.jsxs)(`div`,{className:`lp-input-wrap`,children:[(0,N.jsxs)(`svg`,{className:`lp-input-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`12`,height:`8`,rx:`2`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M5 7V5a3 3 0 0 1 6 0v2`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`circle`,{cx:`8`,cy:`11`,r:`1.2`,fill:`#13181f`})]}),(0,N.jsx)(`input`,{type:`password`,name:`password`,value:e.password,onChange:u,placeholder:`Enter your password`,required:!0,className:`lp-input`})]})]}),(0,N.jsx)(`div`,{className:`lp-row-meta`,children:(0,N.jsx)(`a`,{href:`#`,className:`lp-forgot`,children:`// forgot password?`})}),(0,N.jsx)(`button`,{type:`submit`,disabled:i,className:`lp-btn`,children:i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:`lp-spinner`}),(0,N.jsx)(`span`,{children:`Signing in...`})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{children:`Sign In`}),(0,N.jsx)(`span`,{className:`lp-btn-arrow`,children:`→`})]})})]}),(0,N.jsxs)(`p`,{className:`lp-register`,children:[`Don't have an account? `,(0,N.jsx)(M,{to:`/register`,children:`Create one free →`})]})]})]})})]})},vo=()=>{let[e,t]=(0,S.useState)({name:``,email:``,password:``,role:`jobseeker`,phone:``,location:``}),[n,r]=(0,S.useState)(``),[i,a]=(0,S.useState)(!1),[o,s]=(0,S.useState)(!1),{login:c}=Jn(),l=st();(0,S.useEffect)(()=>{s(!0)},[]);let u=n=>t({...e,[n.target.name]:n.target.value});return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue:       #0f9be7;
          --blue-hover: #0b87cc;
          --dark:       #13181f;
          --white:      #ffffff;
          --mid:        #f4f8fc;
          --border:     #e4edf5;
          --muted:      #7a8a98;
          --light-blue: #e8f5fd;
          --blue-glow:  rgba(15,155,231,.25);
        }

        .rp-root * { box-sizing: border-box; }

        .rp-root {
          min-height: 100vh;
          background: var(--mid);
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          padding: 24px;
          position: relative; overflow: hidden;
        }

        /* page grid bg */
        .rp-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: .025; pointer-events: none;
        }

        /* ── CARD ── */
        .rp-card {
          display: flex;
          width: 100%; max-width: 980px; min-height: 640px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 6px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(19,24,31,.10), 0 2px 8px rgba(19,24,31,.05);
          opacity: 0; transform: translateY(28px);
          transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1);
          position: relative;
        }
        .rp-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--blue); z-index: 10;
        }
        .rp-card.visible { opacity: 1; transform: none; }

        /* ── LEFT PANEL ── */
        .rp-left {
          width: 380px; flex-shrink: 0;
          background: var(--dark);
          position: relative;
          display: flex; flex-direction: column;
          padding: 52px 44px; overflow: hidden;
        }

        
        @keyframes scanLine {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(3000%); }
        }

        .rp-corner {
          position: absolute; width: 16px; height: 16px;
          border-color: var(--blue); border-style: solid; opacity: .35; z-index: 3;
        }

        .rp-brand {
          display: flex; align-items: center; gap: 12px;
          position: relative; z-index: 5;
        }
        .rp-brand-icon {
          width: 38px; height: 38px;
          background: var(--blue);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .rp-brand-icon svg { width: 20px; height: 20px; }
        .rp-brand-name {
          font-family: 'Oxanium', sans-serif;
          font-size: 17px; font-weight: 800;
          color: var(--white); letter-spacing: .04em;
        }

        .rp-left-center {
          position: relative; z-index: 5; flex: 1;
          display: flex; flex-direction: column; justify-content: center;
          padding: 44px 0 36px;
        }

        .rp-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.3);
          padding: 5px 13px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--blue);
          letter-spacing: .1em; text-transform: uppercase;
          margin-bottom: 22px; width: fit-content;
        }
        .rp-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.8s ease-in-out infinite;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:.25} }

        .rp-headline {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800; color: var(--white);
          line-height: 1.05; letter-spacing: -.02em; margin-bottom: 18px;
        }
        .rp-headline span {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .rp-desc {
          font-family: 'JetBrains Mono', monospace;
          font-size: .7rem; color: rgba(255,255,255,.38);
          line-height: 1.8; max-width: 270px;
        }

        /* steps */
        .rp-steps {
          position: relative; z-index: 5;
          display: flex; flex-direction: column; gap: 14px;
          border-top: 1px solid rgba(255,255,255,.07);
          padding-top: 28px;
        }
        .rp-step { display: flex; align-items: center; gap: 14px; }
        .rp-step-num {
          width: 30px; height: 30px;
          background: rgba(15,155,231,.12);
          border: 1px solid rgba(15,155,231,.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; font-weight: 600; color: var(--blue);
          flex-shrink: 0;
        }
        .rp-step-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: rgba(255,255,255,.38); line-height: 1.4;
        }

        /* ── RIGHT PANEL ── */
        .rp-right {
          flex: 1; padding: 52px 48px;
          display: flex; flex-direction: column; justify-content: center;
          background: var(--white); overflow-y: auto;
        }

        .rp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem; color: var(--blue);
          text-transform: uppercase; letter-spacing: .14em; margin-bottom: 10px;
        }
        .rp-eyebrow::before { content: '//'; opacity: .5; }

        .rp-heading {
          font-family: 'Oxanium', sans-serif;
          font-size: 2rem; font-weight: 800;
          color: var(--dark); letter-spacing: -.02em; margin-bottom: 6px;
        }
        .rp-subtext {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
          margin-bottom: 26px; letter-spacing: .04em;
        }

        /* ── ROLE TOGGLE ── */
        .rp-role-wrap {
          display: flex; gap: 8px; margin-bottom: 24px;
          background: var(--mid);
          padding: 4px; border: 1px solid var(--border);
        }
        .rp-role-btn {
          flex: 1; padding: 10px 8px;
          border: 1.5px solid transparent;
          font-family: 'Oxanium', sans-serif;
          font-size: .78rem; font-weight: 700;
          letter-spacing: .05em; text-transform: uppercase;
          cursor: pointer;
          transition: all .2s;
          background: transparent; color: var(--muted);
          display: flex; align-items: center; justify-content: center; gap: 7px;
          clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
        }
        .rp-role-btn.active {
          background: var(--dark); color: var(--white);
          border-color: var(--dark);
        }
        .rp-role-btn.active .rp-role-accent { color: var(--blue); }
        .rp-role-icon { width: 15px; height: 15px; opacity: .55; }
        .rp-role-btn.active .rp-role-icon { opacity: 1; }

        /* error */
        .rp-error {
          background: rgba(239,68,68,.05);
          border: 1px solid rgba(239,68,68,.2);
          border-left: 3px solid #ef4444;
          padding: 11px 14px; margin-bottom: 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: #dc2626;
          animation: errIn .3s ease;
        }
        @keyframes errIn { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:none} }

        /* form grid */
        .rp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px; margin-bottom: 0;
        }
        .rp-grid-full { grid-column: 1 / -1; }

        .rp-field { display: flex; flex-direction: column; }
        .rp-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; font-weight: 600;
          color: var(--muted); text-transform: uppercase;
          letter-spacing: .12em; margin-bottom: 7px;
        }

        .rp-input-wrap { position: relative; }
        .rp-input-icon {
          position: absolute; left: 13px; top: 50%;
          transform: translateY(-50%);
          width: 14px; height: 14px;
          pointer-events: none; opacity: .25; transition: opacity .2s;
        }
        .rp-input-wrap:focus-within .rp-input-icon { opacity: .7; }

        .rp-input {
          width: 100%;
          border: 1.5px solid var(--border);
          padding: 11px 12px 11px 38px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .75rem; color: var(--dark);
          background: var(--mid); outline: none;
          border-radius: 3px;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .rp-input::placeholder { color: rgba(19,24,31,.2); }
        .rp-input:focus {
          border-color: var(--blue);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(15,155,231,.08);
        }

        /* ── SUBMIT BUTTON ── */
        .rp-btn {
          width: 100%; background: var(--dark);
          border: none; padding: 14px;
          font-family: 'Oxanium', sans-serif;
          font-size: .85rem; font-weight: 700;
          color: #fff; cursor: pointer;
          letter-spacing: .08em; text-transform: uppercase;
          position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .25s, background .2s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          margin-top: 20px;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
        .rp-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .rp-btn:hover:not(:disabled)::before { transform: translateX(100%); }
        .rp-btn:hover:not(:disabled) {
          background: var(--blue);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px var(--blue-glow);
        }
        .rp-btn:active:not(:disabled) { transform: translateY(0); }
        .rp-btn:disabled { opacity: .55; cursor: not-allowed; }

        .rp-btn-arrow { transition: transform .2s; }
        .rp-btn:hover:not(:disabled) .rp-btn-arrow { transform: translateX(4px); }

        .rp-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin .7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .rp-login {
          text-align: center; margin-top: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; color: var(--muted);
        }
        .rp-login a {
          color: var(--blue); text-decoration: none; font-weight: 600;
          border-bottom: 1px solid transparent; transition: border-color .2s;
        }
        .rp-login a:hover { border-bottom-color: var(--blue); }

        @media (max-width: 720px) {
          .rp-left { display: none; }
          .rp-right { padding: 40px 28px; }
          .rp-card { max-width: 480px; min-height: auto; }
          .rp-grid { grid-template-columns: 1fr; }
        }
      `}),(0,N.jsx)(`div`,{className:`rp-root`,children:(0,N.jsxs)(`div`,{className:`rp-card ${o?`visible`:``}`,children:[(0,N.jsxs)(`div`,{className:`rp-left`,children:[(0,N.jsxs)(`div`,{className:`rp-brand`,children:[(0,N.jsx)(`div`,{className:`rp-brand-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 22 22`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2`,width:`8`,height:`8`,rx:`2`,fill:`white`}),(0,N.jsx)(`rect`,{x:`12`,y:`2`,width:`8`,height:`8`,rx:`2`,fill:`white`,opacity:`0.5`}),(0,N.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`8`,rx:`2`,fill:`white`,opacity:`0.5`}),(0,N.jsx)(`rect`,{x:`12`,y:`12`,width:`8`,height:`8`,rx:`2`,fill:`white`,opacity:`0.2`})]})}),(0,N.jsx)(`span`,{className:`rp-brand-name`,children:`DIT Consultancy`})]}),(0,N.jsxs)(`div`,{className:`rp-left-center`,children:[(0,N.jsxs)(`div`,{className:`rp-badge`,children:[(0,N.jsx)(`span`,{className:`rp-badge-dot`}),`Free Forever`]}),(0,N.jsxs)(`h1`,{className:`rp-headline`,children:[`Start Your`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{children:`Journey`}),(0,N.jsx)(`br`,{}),`Today.`]}),(0,N.jsx)(`p`,{className:`rp-desc`,children:`Create your profile in minutes and get matched with opportunities that fit your goals.`})]}),(0,N.jsx)(`div`,{className:`rp-steps`,children:[{n:`01`,t:`Create your free account`},{n:`02`,t:`Build your profile & resume`},{n:`03`,t:`Apply to top companies`}].map(e=>(0,N.jsxs)(`div`,{className:`rp-step`,children:[(0,N.jsx)(`div`,{className:`rp-step-num`,children:e.n}),(0,N.jsx)(`div`,{className:`rp-step-text`,children:e.t})]},e.n))})]}),(0,N.jsxs)(`div`,{className:`rp-right`,children:[(0,N.jsx)(`div`,{className:`rp-eyebrow`,children:`Get started`}),(0,N.jsx)(`h2`,{className:`rp-heading`,children:`Create Account`}),(0,N.jsx)(`p`,{className:`rp-subtext`,children:`// fill in your details to register for free`}),(0,N.jsxs)(`div`,{className:`rp-role-wrap`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`rp-role-btn ${e.role===`jobseeker`?`active`:``}`,onClick:()=>t({...e,role:`jobseeker`}),children:[(0,N.jsxs)(`svg`,{className:`rp-role-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`8`,cy:`5`,r:`3`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),`Job Seeker`]}),(0,N.jsxs)(`button`,{type:`button`,className:`rp-role-btn ${e.role===`employer`?`active`:``}`,onClick:()=>t({...e,role:`employer`}),children:[(0,N.jsxs)(`svg`,{className:`rp-role-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`6`,width:`14`,height:`9`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M5 6V4a3 3 0 0 1 6 0v2`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M1 10h14`,stroke:`currentColor`,strokeWidth:`1.4`})]}),`Employer`]})]}),n&&(0,N.jsxs)(`div`,{className:`rp-error`,children:[`⚠ `,n]}),(0,N.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault(),r(``),a(!0);try{let t=await V.post(`/auth/register`,e);c(t.data.user,t.data.token),t.data.user.role===`employer`?l(`/employer-dashboard`):l(`/`)}catch(e){r(e.response?.data?.message||`Something went wrong. Please try again.`)}finally{a(!1)}},children:[(0,N.jsxs)(`div`,{className:`rp-grid`,children:[(0,N.jsxs)(`div`,{className:`rp-field rp-grid-full`,children:[(0,N.jsx)(`label`,{className:`rp-label`,children:`Full Name`}),(0,N.jsxs)(`div`,{className:`rp-input-wrap`,children:[(0,N.jsxs)(`svg`,{className:`rp-input-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`8`,cy:`5`,r:`3`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5`,stroke:`#13181f`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),(0,N.jsx)(`input`,{type:`text`,name:`name`,value:e.name,onChange:u,placeholder:`John Doe`,required:!0,className:`rp-input`})]})]}),(0,N.jsxs)(`div`,{className:`rp-field rp-grid-full`,children:[(0,N.jsx)(`label`,{className:`rp-label`,children:`Email Address`}),(0,N.jsxs)(`div`,{className:`rp-input-wrap`,children:[(0,N.jsxs)(`svg`,{className:`rp-input-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`3`,width:`14`,height:`10`,rx:`2`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M1 5.5l7 4.5 7-4.5`,stroke:`#13181f`,strokeWidth:`1.4`})]}),(0,N.jsx)(`input`,{type:`email`,name:`email`,value:e.email,onChange:u,placeholder:`your@email.com`,required:!0,className:`rp-input`})]})]}),(0,N.jsxs)(`div`,{className:`rp-field rp-grid-full`,children:[(0,N.jsx)(`label`,{className:`rp-label`,children:`Password`}),(0,N.jsxs)(`div`,{className:`rp-input-wrap`,children:[(0,N.jsxs)(`svg`,{className:`rp-input-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`12`,height:`8`,rx:`2`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`path`,{d:`M5 7V5a3 3 0 0 1 6 0v2`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`circle`,{cx:`8`,cy:`11`,r:`1.2`,fill:`#13181f`})]}),(0,N.jsx)(`input`,{type:`password`,name:`password`,value:e.password,onChange:u,placeholder:`Minimum 6 characters`,required:!0,className:`rp-input`})]})]}),(0,N.jsxs)(`div`,{className:`rp-field`,children:[(0,N.jsx)(`label`,{className:`rp-label`,children:`Phone Number`}),(0,N.jsxs)(`div`,{className:`rp-input-wrap`,children:[(0,N.jsx)(`svg`,{className:`rp-input-icon`,viewBox:`0 0 16 16`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M3 2h3l1.5 3.5-1.75 1.05A9 9 0 0 0 9 9.25L10.5 7.5 14 9v3c0 1.1-.9 2-2 2A11 11 0 0 1 1 4c0-1.1.9-2 2-2z`,stroke:`#13181f`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,N.jsx)(`input`,{type:`text`,name:`phone`,value:e.phone,onChange:u,placeholder:`9999999999`,className:`rp-input`})]})]}),(0,N.jsxs)(`div`,{className:`rp-field`,children:[(0,N.jsx)(`label`,{className:`rp-label`,children:`Location`}),(0,N.jsxs)(`div`,{className:`rp-input-wrap`,children:[(0,N.jsxs)(`svg`,{className:`rp-input-icon`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z`,stroke:`#13181f`,strokeWidth:`1.4`}),(0,N.jsx)(`circle`,{cx:`8`,cy:`6`,r:`1.5`,stroke:`#13181f`,strokeWidth:`1.2`})]}),(0,N.jsx)(`input`,{type:`text`,name:`location`,value:e.location,onChange:u,placeholder:`Delhi, Mumbai...`,className:`rp-input`})]})]})]}),(0,N.jsx)(`button`,{type:`submit`,disabled:i,className:`rp-btn`,children:i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:`rp-spinner`}),(0,N.jsx)(`span`,{children:`Creating Account...`})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{children:`Create Account`}),(0,N.jsx)(`span`,{className:`rp-btn-arrow`,children:`→`})]})})]}),(0,N.jsxs)(`p`,{className:`rp-login`,children:[`Already have an account? `,(0,N.jsx)(M,{to:`/login`,children:`Sign in here →`})]})]})]})})]})},H={root:{fontFamily:`'Oxanium', sans-serif`,background:`#ffffff`,minHeight:`100vh`,padding:`24px 16px`},inner:{maxWidth:`820px`,margin:`0 auto`},backBtn:{display:`inline-flex`,alignItems:`center`,gap:`6px`,color:`#0f9be7`,fontSize:`13px`,fontFamily:`'JetBrains Mono', monospace`,background:`none`,border:`none`,cursor:`pointer`,letterSpacing:`0.02em`,marginBottom:`20px`,padding:0},card:{background:`#ffffff`,border:`1.5px solid #e8f4fd`,borderRadius:`16px`,overflow:`hidden`,boxShadow:`0 0 0 1px rgba(15,155,231,0.07)`},header:{background:`#13181f`,padding:`28px 32px 24px`,borderBottom:`2px solid #0f9be7`},companyRow:{display:`flex`,alignItems:`center`,gap:`6px`,fontFamily:`'JetBrains Mono', monospace`,color:`#0f9be7`,fontSize:`12px`,letterSpacing:`0.08em`,textTransform:`uppercase`,marginBottom:`8px`},companyDot:{width:`6px`,height:`6px`,borderRadius:`50%`,background:`#0f9be7`,flexShrink:0},jobTitle:{fontFamily:`'Oxanium', sans-serif`,color:`#ffffff`,fontSize:`26px`,fontWeight:700,lineHeight:1.2,marginBottom:`16px`,letterSpacing:`-0.01em`},tagsRow:{display:`flex`,flexWrap:`wrap`,gap:`8px`,marginBottom:`20px`},tag:(e,t,n)=>({fontFamily:`'JetBrains Mono', monospace`,fontSize:`11px`,fontWeight:500,padding:`4px 12px`,borderRadius:`20px`,letterSpacing:`0.04em`,border:`1px solid ${n}`,color:e,background:t}),metaGrid:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(140px, 1fr))`,gap:`12px`},metaLabel:{fontFamily:`'JetBrains Mono', monospace`,color:`rgba(255,255,255,0.35)`,fontSize:`10px`,letterSpacing:`0.08em`,textTransform:`uppercase`,marginBottom:`4px`},metaValue:{color:`#ffffff`,fontSize:`13px`,fontWeight:500,display:`flex`,alignItems:`center`,gap:`5px`},body:{padding:`28px 32px`},section:{marginBottom:`28px`},sectionTitle:{display:`flex`,alignItems:`center`,gap:`8px`,fontFamily:`'Oxanium', sans-serif`,color:`#13181f`,fontSize:`15px`,fontWeight:700,letterSpacing:`0.02em`,marginBottom:`12px`},sectionAccent:{width:`3px`,height:`16px`,background:`#0f9be7`,borderRadius:`2px`,flexShrink:0},description:{color:`#4a5568`,fontSize:`14px`,lineHeight:1.75,fontFamily:`'JetBrains Mono', monospace`,whiteSpace:`pre-line`},divider:{border:`none`,borderTop:`1px solid #edf2f7`,margin:`0 0 24px`},skillsRow:{display:`flex`,flexWrap:`wrap`,gap:`8px`},skillChip:{fontFamily:`'JetBrains Mono', monospace`,fontSize:`12px`,color:`#13181f`,fontWeight:500,background:`#f0f8ff`,border:`1px solid rgba(15,155,231,0.25)`,padding:`5px 12px`,borderRadius:`6px`,letterSpacing:`0.02em`},alertSuccess:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`12px 16px`,borderRadius:`10px`,fontFamily:`'JetBrains Mono', monospace`,fontSize:`13px`,marginBottom:`16px`,background:`rgba(79,209,165,0.1)`,color:`#1a7a5e`,border:`1px solid rgba(79,209,165,0.3)`},alertError:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`12px 16px`,borderRadius:`10px`,fontFamily:`'JetBrains Mono', monospace`,fontSize:`13px`,marginBottom:`16px`,background:`rgba(239,68,68,0.08)`,color:`#b91c1c`,border:`1px solid rgba(239,68,68,0.2)`},applyBtn:{width:`100%`,background:`#0f9be7`,color:`#ffffff`,border:`none`,borderRadius:`12px`,padding:`16px`,fontFamily:`'Oxanium', sans-serif`,fontSize:`16px`,fontWeight:700,letterSpacing:`0.04em`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`10px`,transition:`opacity 0.2s`},loginBtn:{width:`100%`,background:`#13181f`,color:`#ffffff`,border:`none`,borderRadius:`12px`,padding:`16px`,fontFamily:`'Oxanium', sans-serif`,fontSize:`16px`,fontWeight:700,letterSpacing:`0.04em`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`10px`},formLabel:{display:`block`,fontFamily:`'JetBrains Mono', monospace`,fontSize:`11px`,color:`#718096`,letterSpacing:`0.06em`,textTransform:`uppercase`,marginBottom:`8px`},textarea:{width:`100%`,border:`1.5px solid #e2e8f0`,borderRadius:`10px`,padding:`14px 16px`,fontFamily:`'JetBrains Mono', monospace`,fontSize:`13px`,color:`#13181f`,resize:`none`,outline:`none`,background:`#fafbfc`,lineHeight:1.6,marginBottom:`16px`,boxSizing:`border-box`},btnRow:{display:`flex`,gap:`10px`},submitBtn:{flex:1,background:`#0f9be7`,color:`#ffffff`,border:`none`,borderRadius:`10px`,padding:`14px 20px`,fontFamily:`'Oxanium', sans-serif`,fontSize:`15px`,fontWeight:700,cursor:`pointer`,letterSpacing:`0.03em`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`,opacity:1,transition:`opacity 0.2s`},submitBtnDisabled:{opacity:.5,cursor:`not-allowed`},cancelBtn:{padding:`14px 20px`,border:`1.5px solid #e2e8f0`,borderRadius:`10px`,background:`#ffffff`,color:`#4a5568`,fontFamily:`'Oxanium', sans-serif`,fontSize:`14px`,fontWeight:600,cursor:`pointer`,whiteSpace:`nowrap`},centered:{textAlign:`center`,padding:`80px 0`,color:`#718096`,fontFamily:`'JetBrains Mono', monospace`,fontSize:`14px`,letterSpacing:`0.04em`}},yo=()=>(0,N.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M10 12L6 8l4-4`})}),bo=()=>(0,N.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#0f9be7`,strokeWidth:`2`,children:[(0,N.jsx)(`path`,{d:`M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5z`}),(0,N.jsx)(`circle`,{cx:`8`,cy:`6`,r:`1.5`})]}),xo=()=>(0,N.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#0f9be7`,strokeWidth:`2`,children:[(0,N.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`}),(0,N.jsx)(`path`,{d:`M5.5 9.5C5.5 10.6 6.6 11.5 8 11.5s2.5-.9 2.5-2c0-2.5-5-1.5-5-4 0-1.1 1.1-2 2.5-2s2.5.9 2.5 2M8 4.5v1M8 11.5v1`})]}),So=()=>(0,N.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#0f9be7`,strokeWidth:`2`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`4.5`,width:`12`,height:`9`,rx:`1.5`}),(0,N.jsx)(`path`,{d:`M5.5 4.5V3.5a1 1 0 011-1h3a1 1 0 011 1v1M2 8.5h12`})]}),Co=()=>(0,N.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#0f9be7`,strokeWidth:`2`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`2.5`,width:`12`,height:`11`,rx:`1.5`}),(0,N.jsx)(`path`,{d:`M5 1.5v2M11 1.5v2M2 6.5h12`})]}),wo=()=>(0,N.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,N.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`}),(0,N.jsx)(`path`,{d:`M5 8l2.5 2.5L11 5.5`})]}),To=()=>(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#fff`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M2 8h12M9 4l4 4-4 4`})}),Eo=()=>(0,N.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#fff`,strokeWidth:`2`,children:[(0,N.jsx)(`rect`,{x:`3.5`,y:`7`,width:`9`,height:`7.5`,rx:`1.5`}),(0,N.jsx)(`path`,{d:`M5 7V5.5a3 3 0 016 0V7`})]}),Do=()=>{let{id:e}=lt(),{user:t}=Jn(),n=st(),[r,i]=(0,S.useState)(null),[a,o]=(0,S.useState)(!0),[s,c]=(0,S.useState)(!1),[l,u]=(0,S.useState)(``),[d,f]=(0,S.useState)(``),[p,m]=(0,S.useState)(``),[h,g]=(0,S.useState)(!1);(0,S.useEffect)(()=>{(async()=>{try{i((await V.get(`/jobs/${e}`)).data.job)}catch(e){console.error(e)}finally{o(!1)}})()},[e]),(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]);let _=async r=>{if(r.preventDefault(),!t)return n(`/login`);c(!0),m(``);try{await V.post(`/applications`,{job_id:e,cover_letter:l}),f(`Application submitted successfully! We will be in touch soon.`),g(!1)}catch(e){m(e.response?.data?.message||`Something went wrong. Please try again.`)}finally{c(!1)}};return a?(0,N.jsx)(`div`,{style:H.root,children:(0,N.jsx)(`div`,{style:H.centered,children:`Loading job details…`})}):r?(0,N.jsx)(`div`,{style:H.root,children:(0,N.jsxs)(`div`,{style:H.inner,children:[(0,N.jsxs)(`button`,{style:H.backBtn,onClick:()=>n(`/`),children:[(0,N.jsx)(yo,{}),`Back to Jobs`]}),(0,N.jsxs)(`div`,{style:H.card,children:[(0,N.jsxs)(`div`,{style:H.header,children:[(0,N.jsxs)(`div`,{style:H.companyRow,children:[(0,N.jsx)(`div`,{style:H.companyDot}),r.company?.name]}),(0,N.jsx)(`h1`,{style:H.jobTitle,children:r.title}),(0,N.jsxs)(`div`,{style:H.tagsRow,children:[(0,N.jsx)(`span`,{style:H.tag(`#0f9be7`,`rgba(15,155,231,0.1)`,`rgba(15,155,231,0.4)`),children:r.job_type}),(0,N.jsx)(`span`,{style:H.tag(`#4fd1a5`,`rgba(79,209,165,0.08)`,`rgba(79,209,165,0.4)`),children:r.category}),(0,N.jsxs)(`span`,{style:H.tag(`#f0a050`,`rgba(240,160,80,0.08)`,`rgba(240,160,80,0.4)`),children:[r.openings,` Opening`,r.openings>1?`s`:``]})]}),(0,N.jsxs)(`div`,{style:H.metaGrid,children:[r.location&&(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:H.metaLabel,children:`Location`}),(0,N.jsxs)(`div`,{style:H.metaValue,children:[(0,N.jsx)(bo,{}),r.location]})]}),r.salary_min&&(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:H.metaLabel,children:`Salary`}),(0,N.jsxs)(`div`,{style:H.metaValue,children:[(0,N.jsx)(xo,{}),`₹`,(r.salary_min/1e5).toFixed(1),`L – ₹`,(r.salary_max/1e5).toFixed(1),`L`]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:H.metaLabel,children:`Experience`}),(0,N.jsxs)(`div`,{style:H.metaValue,children:[(0,N.jsx)(So,{}),r.experience_min,`–`,r.experience_max,` Years`]})]}),r.deadline&&(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:H.metaLabel,children:`Deadline`}),(0,N.jsxs)(`div`,{style:H.metaValue,children:[(0,N.jsx)(Co,{}),new Date(r.deadline).toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,year:`numeric`})]})]})]})]}),(0,N.jsxs)(`div`,{style:H.body,children:[(0,N.jsxs)(`div`,{style:H.section,children:[(0,N.jsxs)(`div`,{style:H.sectionTitle,children:[(0,N.jsx)(`div`,{style:H.sectionAccent}),`Job Description`]}),(0,N.jsx)(`p`,{style:H.description,children:r.description})]}),r.skills_required?.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`hr`,{style:H.divider}),(0,N.jsxs)(`div`,{style:H.section,children:[(0,N.jsxs)(`div`,{style:H.sectionTitle,children:[(0,N.jsx)(`div`,{style:H.sectionAccent}),`Required Skills`]}),(0,N.jsx)(`div`,{style:H.skillsRow,children:r.skills_required.map((e,t)=>(0,N.jsx)(`span`,{style:H.skillChip,children:e},t))})]})]}),(0,N.jsx)(`hr`,{style:H.divider}),d&&(0,N.jsxs)(`div`,{style:H.alertSuccess,children:[(0,N.jsx)(wo,{}),d]}),p&&(0,N.jsx)(`div`,{style:H.alertError,children:p}),t?.role===`jobseeker`&&!d&&(0,N.jsx)(N.Fragment,{children:h?(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{style:{...H.sectionTitle,marginBottom:`14px`},children:[(0,N.jsx)(`div`,{style:H.sectionAccent}),`Cover Letter`]}),(0,N.jsx)(`label`,{style:H.formLabel,children:`Tell us why you are the best fit for this role`}),(0,N.jsx)(`textarea`,{value:l,onChange:e=>u(e.target.value),placeholder:`Describe your relevant experience, what excites you about this role, and what you would bring to the team...`,rows:5,style:H.textarea,onFocus:e=>{e.target.style.borderColor=`#0f9be7`,e.target.style.background=`#fff`},onBlur:e=>{e.target.style.borderColor=`#e2e8f0`,e.target.style.background=`#fafbfc`}}),(0,N.jsxs)(`div`,{style:H.btnRow,children:[(0,N.jsxs)(`button`,{onClick:_,disabled:s,style:{...H.submitBtn,...s?H.submitBtnDisabled:{}},children:[(0,N.jsx)(wo,{}),s?`Submitting…`:`Submit Application`]}),(0,N.jsx)(`button`,{onClick:()=>g(!1),style:H.cancelBtn,onMouseEnter:e=>{e.currentTarget.style.background=`#f7fafc`},onMouseLeave:e=>{e.currentTarget.style.background=`#fff`},children:`Cancel`})]})]}):(0,N.jsxs)(`button`,{style:H.applyBtn,onMouseEnter:e=>e.currentTarget.style.opacity=`0.88`,onMouseLeave:e=>e.currentTarget.style.opacity=`1`,onClick:()=>g(!0),children:[(0,N.jsx)(To,{}),`Apply Now`]})}),!t&&(0,N.jsxs)(`button`,{style:H.loginBtn,onClick:()=>n(`/login`),children:[(0,N.jsx)(Eo,{}),`Log In to Apply`]})]})]})]})}):(0,N.jsx)(`div`,{style:H.root,children:(0,N.jsx)(`div`,{style:H.centered,children:`Job not found.`})})},Oo=`
  @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

  :root {
    --blue:       #0f9be7;
    --blue-hover: #0b87cc;
    --dark:       #13181f;
    --white:      #ffffff;
    --mid:        #f4f8fc;
    --border:     #e4edf5;
    --muted:      #7a8a98;
    --light-blue: #e8f5fd;
    --blue-glow:  rgba(15,155,231,.15);
  }

  .emp-dashboard * { box-sizing: border-box; }

  .emp-dashboard {
    font-family: 'JetBrains Mono', monospace;
    background: var(--mid);
    min-height: 100vh;
    color: var(--dark);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scanLine {
    0%  { transform: translateY(-100%); }
    100%{ transform: translateY(3000%); }
  }
  @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes shimmer  { 0%{background-position:0%} 100%{background-position:200%} }
  @keyframes ldot {
    0%,80%,100%{ transform:scale(.6); opacity:.35; }
    40%{ transform:scale(1); opacity:1; }
  }
  @keyframes skelAnim {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }

  .anim-fadein { animation: fadeUp .45s cubic-bezier(.22,.68,0,1.2) both; }

  /* ── HEADER BANNER ── */
  .emp-header {
    background: var(--dark);
    position: relative; overflow: hidden;
    padding: 40px 0 0;
    margin-bottom: 32px;
  }
  .emp-header-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
    background-size: 60px 60px; opacity: .04; pointer-events: none;
  }
  .emp-header-scan {
    position: absolute; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
    animation: scanLine 4s ease-in-out infinite;
    pointer-events: none; z-index: 2;
  }
  .emp-header-corner {
    position: absolute; width: 16px; height: 16px;
    border-color: var(--blue); border-style: solid; opacity: .35; z-index: 3;
  }
  .emp-header-inner {
    position: relative; z-index: 4;
    max-width: 1140px; margin: 0 auto; padding: 0 28px 32px;
    display: flex; align-items: flex-end; justify-content: space-between;
    flex-wrap: wrap; gap: 20px;
  }
  .emp-header-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--blue); margin-bottom: 10px;
  }
  .emp-header-label::before { content: '//'; opacity: .5; }
  .emp-header-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--blue); animation: blinkDot 1.5s ease infinite;
  }
  .emp-header h1 {
    font-family: 'Oxanium', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800; letter-spacing: -.02em;
    color: var(--white); margin: 0;
    line-height: 1.05;
  }
  .emp-header h1 span {
    background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
    background-size: 200% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text; animation: shimmer 3s linear infinite;
  }
  .emp-company-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: .68rem; color: rgba(255,255,255,.38);
    letter-spacing: .06em; margin-top: 6px;
  }

  /* tabs bar inside header */
  .emp-tabs {
    display: flex; gap: 3px;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.08);
    padding: 4px; position: relative; z-index: 4;
    align-self: flex-end;
  }
  .emp-tab {
    padding: 9px 22px;
    border: 1.5px solid transparent;
    font-family: 'Oxanium', sans-serif;
    font-size: .75rem; font-weight: 700;
    letter-spacing: .05em; text-transform: uppercase;
    cursor: pointer; transition: all .2s;
    background: transparent; color: rgba(255,255,255,.4);
    clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
    display: inline-flex; align-items: center; gap: 7px;
  }
  .emp-tab.active {
    background: var(--blue); color: var(--white);
    border-color: var(--blue);
  }
  .emp-tab:not(.active):hover {
    color: rgba(255,255,255,.75);
    background: rgba(255,255,255,.06);
  }

  /* ── MAIN CONTENT AREA ── */
  .emp-body {
    max-width: 1140px; margin: 0 auto; padding: 0 28px 72px;
  }

  /* ── TOAST ── */
  .emp-toast {
    display: flex; align-items: center; gap: 10px;
    padding: 13px 18px; margin-bottom: 24px;
    border-left: 3px solid;
    font-family: 'JetBrains Mono', monospace;
    font-size: .72rem; font-weight: 600; letter-spacing: .04em;
  }
  .emp-toast.success {
    background: rgba(34,197,94,.06);
    border-color: #22c55e; color: #166534;
    border-top: 1px solid rgba(34,197,94,.2);
    border-right: 1px solid rgba(34,197,94,.2);
    border-bottom: 1px solid rgba(34,197,94,.2);
  }
  .emp-toast.error {
    background: rgba(239,68,68,.06);
    border-color: #ef4444; color: #991b1b;
    border-top: 1px solid rgba(239,68,68,.2);
    border-right: 1px solid rgba(239,68,68,.2);
    border-bottom: 1px solid rgba(239,68,68,.2);
  }

  /* ── STAT STRIP ── */
  .emp-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px; margin-bottom: 28px;
  }
  .emp-stat-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 20px 22px;
    position: relative; overflow: hidden;
    transition: all .25s;
  }
  .emp-stat-card::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 2px;
    background: var(--blue); transform: scaleX(0);
    transform-origin: left; transition: transform .3s;
  }
  .emp-stat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px var(--blue-glow); border-color: rgba(15,155,231,.35); }
  .emp-stat-card:hover::after { transform: scaleX(1); }
  .emp-stat-icon {
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px;
    background: var(--light-blue); color: var(--blue);
    border-radius: 4px; margin-bottom: 10px;
  }
  .emp-stat-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; color: var(--muted);
    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 4px;
  }
  .emp-stat-label::before { content: '// '; color: var(--blue); opacity: .6; }
  .emp-stat-num {
    font-family: 'Oxanium', sans-serif;
    font-size: 1.8rem; font-weight: 800;
    color: var(--dark); line-height: 1.1;
  }

  /* ── NO COMPANY BANNER ── */
  .emp-no-company {
    background: var(--dark); position: relative; overflow: hidden;
    border: 1px solid rgba(15,155,231,.2);
    padding: 40px 36px; margin-bottom: 28px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap;
  }
  .emp-no-company-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
    background-size: 40px 40px; opacity: .04; pointer-events: none;
  }
  .emp-no-company > * { position: relative; z-index: 1; }

  /* ── FORMS ── */
  .emp-form-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 32px; margin-bottom: 24px;
    position: relative;
  }
  .emp-form-card::before {
    content: ''; position: absolute;
    top: 0; left: 0; right: 0; height: 3px; background: var(--blue);
  }
  .emp-form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 13px;
  }
  .emp-form-full { grid-column: 1 / -1; }

  .emp-field-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; font-weight: 600;
    color: var(--muted); text-transform: uppercase;
    letter-spacing: .12em; margin-bottom: 6px; display: block;
  }

  .emp-input, .emp-select, .emp-textarea {
    width: 100%; padding: 11px 14px;
    border: 1.5px solid var(--border);
    background: var(--mid);
    font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; color: var(--dark);
    outline: none; transition: border-color .2s, box-shadow .2s, background .2s;
    border-radius: 3px;
  }
  .emp-input::placeholder,
  .emp-textarea::placeholder { color: rgba(19,24,31,.22); }
  .emp-input:focus, .emp-select:focus, .emp-textarea:focus {
    border-color: var(--blue);
    background: var(--white);
    box-shadow: 0 0 0 4px rgba(15,155,231,.08);
  }
  .emp-select { appearance: none; cursor: pointer; }
  .emp-textarea { resize: vertical; }

  /* ── BUTTONS ── */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue); color: var(--white);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
    padding: 11px 24px; border: none; cursor: pointer;
    transition: all .2s; position: relative; overflow: hidden;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }
  .btn-primary::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
    transform: translateX(-100%); transition: transform .5s;
  }
  .btn-primary:hover::before { transform: translateX(100%); }
  .btn-primary:hover { background: var(--blue-hover); transform: translateY(-1px); box-shadow: 0 8px 24px var(--blue-glow); }
  .btn-primary:disabled { opacity: .55; cursor: not-allowed; }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--dark);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
    padding: 10px 24px; border: 1.5px solid var(--border); cursor: pointer;
    transition: all .2s;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }
  .btn-ghost:hover { background: var(--dark); color: var(--white); border-color: var(--dark); }

  .btn-ghost-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--white);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .78rem; letter-spacing: .07em; text-transform: uppercase;
    padding: 10px 24px; border: 1.5px solid rgba(255,255,255,.3); cursor: pointer;
    transition: all .2s;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }
  .btn-ghost-white:hover { background: rgba(255,255,255,.08); border-color: var(--white); }

  /* ── SECTION HEADER ── */
  .emp-section-head {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
  }
  .emp-section-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--blue); margin-bottom: 6px;
  }
  .emp-section-label::before { content: '//'; opacity: .5; }
  .emp-section-title {
    font-family: 'Oxanium', sans-serif;
    font-size: 1.15rem; font-weight: 800;
    color: var(--dark); letter-spacing: -.01em; margin: 0;
  }
  .emp-section-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; color: var(--muted);
    letter-spacing: .1em; text-transform: uppercase;
    margin-top: 3px;
  }
  .emp-section-count span { color: var(--blue); }

  /* ── JOB / BLOG ROW CARD ── */
  .emp-row-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 20px 24px;
    display: flex; align-items: center;
    justify-content: space-between;
    gap: 16px; flex-wrap: wrap;
    transition: all .25s cubic-bezier(.23,1,.32,1);
    position: relative; overflow: hidden;
    margin-bottom: 12px;
  }
  .emp-row-card::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 2px;
    background: var(--blue); transform: scaleX(0);
    transform-origin: left; transition: transform .3s;
  }
  .emp-row-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px var(--blue-glow); border-color: rgba(15,155,231,.35); }
  .emp-row-card:hover::after { transform: scaleX(1); }

  .emp-row-accent {
    width: 3px; height: 36px; background: var(--blue);
    flex-shrink: 0; margin-right: 4px;
  }

  /* ── TAGS ── */
  .emp-tag {
    display: inline-flex; align-items: center; gap: 4px;
    background: var(--light-blue); color: var(--blue);
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; letter-spacing: .08em; text-transform: uppercase; font-weight: 600;
    padding: 3px 10px; border-radius: 2px;
    border: 1px solid rgba(15,155,231,.2); margin: 2px;
  }
  .emp-tag-neutral {
    background: var(--mid); color: var(--muted);
    border-color: var(--border);
  }

  /* ── STATUS BADGE ── */
  .emp-status {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 2px;
    border: 1px solid transparent;
  }
  .emp-status-dot {
    width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  }

  /* ── APPLICANT CARD ── */
  .emp-app-card {
    background: var(--white);
    border: 1px solid var(--border);
    padding: 22px 26px; margin-bottom: 14px;
    position: relative; overflow: hidden;
  }
  .emp-app-card::before {
    content: ''; position: absolute;
    left: 0; top: 0; bottom: 0; width: 3px;
    background: var(--blue); transform: scaleY(0);
    transform-origin: bottom; transition: transform .3s;
  }
  .emp-app-card:hover::before { transform: scaleY(1); }

  .emp-avatar {
    width: 44px; height: 44px;
    background: var(--dark); color: var(--blue);
    font-family: 'Oxanium', sans-serif; font-weight: 800; font-size: 1rem;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; border: 2px solid rgba(15,155,231,.25);
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
  }

  .emp-cover-letter {
    margin-top: 14px; padding: 14px 16px;
    background: var(--mid); border-left: 3px solid var(--blue);
  }
  .emp-cover-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; color: var(--blue);
    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;
    display: flex; align-items: center; gap: 5px;
  }
  .emp-cover-label::before { content: '// '; }

  /* status action buttons */
  .emp-status-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: .58rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: .07em;
    padding: 6px 14px; border-radius: 2px;
    cursor: pointer; transition: filter .15s;
    border: 1.5px solid transparent;
  }
  .emp-status-btn:hover { filter: brightness(.9); }

  /* view applicants / delete */
  .emp-btn-view {
    background: var(--light-blue); color: var(--blue);
    border: 1.5px solid rgba(15,155,231,.25);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .72rem; letter-spacing: .05em; text-transform: uppercase;
    padding: 9px 16px; cursor: pointer; transition: all .2s;
    clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
    display: inline-flex; align-items: center; gap: 6px;
  }
  .emp-btn-view:hover { background: var(--blue); color: var(--white); }

  .emp-btn-delete {
    background: rgba(239,68,68,.07); color: #dc2626;
    border: 1.5px solid rgba(239,68,68,.22);
    font-family: 'Oxanium', sans-serif; font-weight: 700;
    font-size: .72rem; letter-spacing: .05em; text-transform: uppercase;
    padding: 9px 14px; cursor: pointer; transition: background .2s;
    display: inline-flex; align-items: center; gap: 6px;
  }
  .emp-btn-delete:hover { background: rgba(239,68,68,.15); }

  /* ── EMPTY STATE ── */
  .emp-empty {
    text-align: center; padding: 64px 24px;
    background: var(--white); border: 1px dashed var(--border);
  }
  .emp-empty-icon {
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 14px; color: var(--muted); opacity: .5;
  }
  .emp-empty-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; color: var(--muted);
  }
  .emp-empty-text::before { content: '// '; color: var(--blue); }

  /* ── SKELETON ── */
  .emp-skel {
    height: 80px; border-radius: 0; margin-bottom: 12px;
    background: linear-gradient(90deg, var(--mid) 25%, var(--border) 50%, var(--mid) 75%);
    background-size: 600px 100%;
    animation: skelAnim 1.4s infinite linear;
  }

  /* ── FORM SECTION TITLE ── */
  .emp-form-title {
    font-family: 'Oxanium', sans-serif;
    font-size: 1rem; font-weight: 800;
    color: var(--dark); letter-spacing: -.01em; margin: 6px 0 20px;
  }

  @media (max-width: 640px) {
    .emp-header-inner { flex-direction: column; align-items: flex-start; }
    .emp-tabs { width: 100%; overflow-x: auto; }
    .emp-body { padding: 0 16px 60px; }
  }
`,ko={applied:{bg:`rgba(15,155,231,.08)`,text:`#0a6fa0`,dot:`#0f9be7`,border:`rgba(15,155,231,.25)`},reviewed:{bg:`rgba(245,166,35,.08)`,text:`#956d00`,dot:`#f5a623`,border:`rgba(245,166,35,.25)`},shortlisted:{bg:`rgba(34,197,94,.08)`,text:`#1a7a45`,dot:`#22c55e`,border:`rgba(34,197,94,.25)`},rejected:{bg:`rgba(239,68,68,.08)`,text:`#a02020`,dot:`#ef4444`,border:`rgba(239,68,68,.25)`},hired:{bg:`rgba(139,92,246,.08)`,text:`#5b2d9e`,dot:`#8b5cf6`,border:`rgba(139,92,246,.25)`}},Ao=({status:e})=>{let t=ko[e]||ko.applied;return(0,N.jsxs)(`span`,{className:`emp-status`,style:{background:t.bg,color:t.text,borderColor:t.border},children:[(0,N.jsx)(`span`,{className:`emp-status-dot`,style:{background:t.dot}}),e]})},U=({children:e})=>(0,N.jsx)(`p`,{className:`emp-section-label`,children:e}),jo=()=>{let[e,t]=(0,S.useState)(`jobs`),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)(null),[o,s]=(0,S.useState)([]),[c,l]=(0,S.useState)(null),[u,d]=(0,S.useState)(!1),[f,p]=(0,S.useState)(!1),[m,h]=(0,S.useState)(!1),[g,_]=(0,S.useState)({text:``,type:``}),[v,y]=(0,S.useState)([]),[b,x]=(0,S.useState)(!1),[C,w]=(0,S.useState)({title:``,excerpt:``,content:``,image:``,author:``,category:`Technology`}),[T,E]=(0,S.useState)({title:``,description:``,job_type:`Full-time`,category:`Software Development`,location:``,experience_min:0,experience_max:3,salary_min:``,salary_max:``,openings:1,skills_required:``}),[D,O]=(0,S.useState)({name:``,description:``,industry:`IT & Software`,size:`11-50`,city:``,email:``,phone:``,website:``}),ee=(e,t=`success`)=>{_({text:e,type:t}),setTimeout(()=>_({text:``,type:``}),3500)},te=async()=>{try{a((await V.get(`/companies/mine`)).data.company||null)}catch{a(null)}},ne=async()=>{try{d(!0),r((await V.get(`/jobs/mine`)).data.jobs)}catch{}finally{d(!1)}},re=async e=>{try{d(!0),s((await V.get(`/applications/job/${e}`)).data.applications),l(e),t(`applicants`)}catch{}finally{d(!1)}},ie=async()=>{try{d(!0),y((await V.get(`/blogs`)).data.blogs)}catch{}finally{d(!1)}};(0,S.useEffect)(()=>{te(),ne(),ie()},[]),(0,S.useEffect)(()=>{e===`blogs`&&ie()},[e]);let ae=async e=>{e.preventDefault();try{a((await V.post(`/companies`,D)).data.company),h(!1),ee(`Company created successfully!`)}catch(e){ee(e.response?.data?.message||`Failed to create company`,`error`)}},oe=async e=>{e.preventDefault();try{await V.post(`/jobs`,{...T,skills_required:T.skills_required.split(`,`).map(e=>e.trim()).filter(Boolean)}),p(!1),E({title:``,description:``,job_type:`Full-time`,category:`Software Development`,location:``,experience_min:0,experience_max:3,salary_min:``,salary_max:``,openings:1,skills_required:``}),ee(`Job posted successfully!`),ne()}catch(e){ee(e.response?.data?.message||`Failed to post job`,`error`)}},k=async e=>{if(window.confirm(`Delete this job posting?`))try{await V.delete(`/jobs/${e}`),ee(`Job deleted.`),ne()}catch{ee(`Failed to delete job.`,`error`)}},A=async(e,t)=>{try{await V.put(`/applications/${e}/status`,{status:t}),ee(`Status updated to "${t}"`),re(c)}catch{ee(`Status update failed.`,`error`)}},se=async e=>{e.preventDefault();try{await V.post(`/blogs`,C),x(!1),w({title:``,excerpt:``,content:``,image:``,author:``,category:`Technology`}),ee(`Blog published!`),ie()}catch(e){ee(e.response?.data?.message||`Failed to publish blog`,`error`)}},ce=async e=>{if(window.confirm(`Delete this blog post?`))try{await V.delete(`/blogs/${e}`),ee(`Blog deleted.`),ie()}catch{ee(`Failed to delete blog.`,`error`)}},le=()=>(0,N.jsx)(N.Fragment,{children:[1,2,3].map(e=>(0,N.jsx)(`div`,{className:`emp-skel`},e))}),ue=[{key:`jobs`,label:`My Jobs`,icon:(0,N.jsx)(or,{size:13})},{key:`applicants`,label:`Applicants`,icon:(0,N.jsx)(Sr,{size:13})},{key:`blogs`,label:`Blogs`,icon:(0,N.jsx)(fr,{size:13})}];return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:Oo}),(0,N.jsxs)(`div`,{className:`emp-dashboard`,children:[(0,N.jsx)(`div`,{className:`emp-header`,children:(0,N.jsxs)(`div`,{className:`emp-header-inner`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{className:`emp-header-label`,children:[(0,N.jsx)(`span`,{className:`emp-header-dot`}),`Employer Portal`]}),(0,N.jsxs)(`h1`,{children:[`Employer `,(0,N.jsx)(`span`,{children:`Dashboard`})]}),i&&(0,N.jsxs)(`p`,{className:`emp-company-name`,children:[`// `,i.name,` · `,i.industry]})]}),i&&(0,N.jsx)(`div`,{className:`emp-tabs`,children:ue.map(n=>(0,N.jsxs)(`button`,{className:`emp-tab ${e===n.key?`active`:``}`,onClick:()=>t(n.key),children:[n.icon,n.label]},n.key))})]})}),(0,N.jsxs)(`div`,{className:`emp-body`,children:[g.text&&(0,N.jsxs)(`div`,{className:`emp-toast anim-fadein ${g.type}`,children:[g.type===`error`?(0,N.jsx)(br,{size:14}):(0,N.jsx)(lr,{size:14}),g.text]}),!i&&(0,N.jsxs)(`div`,{className:`emp-no-company anim-fadein`,children:[(0,N.jsx)(`div`,{className:`emp-no-company-grid`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(U,{children:`Setup Required`}),(0,N.jsx)(`h2`,{style:{fontFamily:`Oxanium, sans-serif`,color:`#fff`,fontSize:`1.3rem`,fontWeight:800,margin:`4px 0 8px`},children:`Create your company profile`}),(0,N.jsx)(`p`,{style:{fontFamily:`JetBrains Mono, monospace`,color:`rgba(255,255,255,.38)`,fontSize:`.72rem`,lineHeight:1.8,margin:0,maxWidth:420},children:`You need a company profile before you can post jobs and receive applications.`})]}),(0,N.jsxs)(`button`,{className:`btn-primary`,onClick:()=>h(!0),children:[(0,N.jsx)(sr,{size:14}),`Create Company`,(0,N.jsx)(ar,{size:13})]})]}),m&&!i&&(0,N.jsxs)(`div`,{className:`emp-form-card anim-fadein`,children:[(0,N.jsx)(U,{children:`Company Setup`}),(0,N.jsx)(`h3`,{className:`emp-form-title`,children:`Company Details`}),(0,N.jsxs)(`form`,{onSubmit:ae,children:[(0,N.jsxs)(`div`,{className:`emp-form-grid`,children:[(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Company Name *`,required:!0,value:D.name,onChange:e=>O({...D,name:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Company Email *`,required:!0,type:`email`,value:D.email,onChange:e=>O({...D,email:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Phone Number`,value:D.phone,onChange:e=>O({...D,phone:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`City`,value:D.city,onChange:e=>O({...D,city:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Website URL`,value:D.website,onChange:e=>O({...D,website:e.target.value})}),(0,N.jsx)(`select`,{className:`emp-select`,value:D.industry,onChange:e=>O({...D,industry:e.target.value}),children:[`IT & Software`,`Consulting`,`Finance & Banking`,`Healthcare`,`Education`,`E-commerce`,`Manufacturing`,`Other`].map(e=>(0,N.jsx)(`option`,{children:e},e))}),(0,N.jsx)(`select`,{className:`emp-select`,value:D.size,onChange:e=>O({...D,size:e.target.value}),children:[`1-10`,`11-50`,`51-200`,`201-500`,`1000+`].map(e=>(0,N.jsxs)(`option`,{value:e,children:[e,` employees`]},e))}),(0,N.jsx)(`textarea`,{className:`emp-textarea emp-form-full`,placeholder:`Company Description *`,required:!0,rows:3,value:D.description,onChange:e=>O({...D,description:e.target.value})})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:20},children:[(0,N.jsxs)(`button`,{className:`btn-primary`,type:`submit`,children:[(0,N.jsx)(sr,{size:14}),`Create Company`]}),(0,N.jsx)(`button`,{className:`btn-ghost`,type:`button`,onClick:()=>h(!1),children:`Cancel`})]})]})]}),i&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:`emp-stats anim-fadein`,children:[{label:`Active Jobs`,value:n.length,icon:(0,N.jsx)(or,{size:16})},{label:`Applicants`,value:o.length,icon:(0,N.jsx)(Sr,{size:16})},{label:`Blog Posts`,value:v.length,icon:(0,N.jsx)(vr,{size:16})},{label:`Team Size`,value:i.size||`—`,icon:(0,N.jsx)(sr,{size:16})}].map(e=>(0,N.jsxs)(`div`,{className:`emp-stat-card`,children:[(0,N.jsx)(`div`,{className:`emp-stat-icon`,children:e.icon}),(0,N.jsx)(`div`,{className:`emp-stat-label`,children:e.label}),(0,N.jsx)(`div`,{className:`emp-stat-num`,children:e.value})]},e.label))}),e===`jobs`&&(0,N.jsxs)(`div`,{className:`anim-fadein`,children:[(0,N.jsxs)(`div`,{className:`emp-section-head`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(U,{children:`Listings`}),(0,N.jsx)(`h2`,{className:`emp-section-title`,children:`Posted Jobs`}),(0,N.jsxs)(`p`,{className:`emp-section-count`,children:[(0,N.jsx)(`span`,{children:n.length}),` active listings`]})]}),(0,N.jsx)(`button`,{className:`btn-primary`,onClick:()=>p(!f),children:f?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(cr,{size:14,style:{transform:`rotate(90deg)`}}),` Close`]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(or,{size:14}),` Post New Job`]})})]}),f&&(0,N.jsxs)(`div`,{className:`emp-form-card anim-fadein`,children:[(0,N.jsx)(U,{children:`New Listing`}),(0,N.jsx)(`h3`,{className:`emp-form-title`,children:`Job Details`}),(0,N.jsxs)(`form`,{onSubmit:oe,children:[(0,N.jsxs)(`div`,{className:`emp-form-grid`,children:[(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Job Title *`,required:!0,value:T.title,onChange:e=>E({...T,title:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Location`,value:T.location,onChange:e=>E({...T,location:e.target.value})}),(0,N.jsx)(`select`,{className:`emp-select`,value:T.job_type,onChange:e=>E({...T,job_type:e.target.value}),children:[`Full-time`,`Part-time`,`Contract`,`Internship`,`Remote`].map(e=>(0,N.jsx)(`option`,{children:e},e))}),(0,N.jsx)(`select`,{className:`emp-select`,value:T.category,onChange:e=>E({...T,category:e.target.value}),children:[`Software Development`,`Data Science`,`Design`,`Marketing`,`Sales`,`HR`,`Finance`,`Consulting`,`Other`].map(e=>(0,N.jsx)(`option`,{children:e},e))}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Min Salary (₹)`,type:`number`,value:T.salary_min,onChange:e=>E({...T,salary_min:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Max Salary (₹)`,type:`number`,value:T.salary_max,onChange:e=>E({...T,salary_max:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Min Experience (yrs)`,type:`number`,value:T.experience_min,onChange:e=>E({...T,experience_min:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Max Experience (yrs)`,type:`number`,value:T.experience_max,onChange:e=>E({...T,experience_max:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Number of Openings`,type:`number`,value:T.openings,onChange:e=>E({...T,openings:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Skills (comma separated)`,value:T.skills_required,onChange:e=>E({...T,skills_required:e.target.value})}),(0,N.jsx)(`textarea`,{className:`emp-textarea emp-form-full`,placeholder:`Job Description *`,required:!0,rows:4,value:T.description,onChange:e=>E({...T,description:e.target.value})})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:20},children:[(0,N.jsxs)(`button`,{className:`btn-primary`,type:`submit`,children:[(0,N.jsx)(or,{size:14}),`Post Job`]}),(0,N.jsx)(`button`,{className:`btn-ghost`,type:`button`,onClick:()=>p(!1),children:`Cancel`})]})]})]}),u?(0,N.jsx)(le,{}):n.length===0?(0,N.jsxs)(`div`,{className:`emp-empty`,children:[(0,N.jsx)(`div`,{className:`emp-empty-icon`,children:(0,N.jsx)(pr,{size:40})}),(0,N.jsx)(`p`,{className:`emp-empty-text`,children:`no jobs posted yet — click "Post New Job" to start`})]}):n.map((e,t)=>(0,N.jsxs)(`div`,{className:`emp-row-card anim-fadein`,style:{animationDelay:`${t*.06}s`},children:[(0,N.jsx)(`div`,{className:`emp-row-accent`}),(0,N.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,N.jsx)(`div`,{style:{fontFamily:`Oxanium, sans-serif`,fontWeight:800,fontSize:`.95rem`,color:`var(--dark)`,marginBottom:4},children:e.title}),e.salary_min&&(0,N.jsxs)(`div`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`.68rem`,color:`var(--blue)`,marginBottom:8},children:[`₹`,(e.salary_min/1e5).toFixed(1),`L – ₹`,(e.salary_max/1e5).toFixed(1),`L`]}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`span`,{className:`emp-tag`,children:[(0,N.jsx)(ur,{size:9}),e.job_type]}),(0,N.jsxs)(`span`,{className:`emp-tag emp-tag-neutral`,children:[(0,N.jsx)(gr,{size:9}),e.location||`Remote`]}),(0,N.jsx)(`span`,{className:`emp-tag emp-tag-neutral`,children:e.category})]})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:8,flexShrink:0},children:[(0,N.jsxs)(`button`,{className:`emp-btn-view`,onClick:()=>re(e.id),children:[(0,N.jsx)(dr,{size:13}),`View Applicants`]}),(0,N.jsxs)(`button`,{className:`emp-btn-delete`,onClick:()=>k(e.id),children:[(0,N.jsx)(yr,{size:13}),`Delete`]})]})]},e.id))]}),e===`applicants`&&(0,N.jsxs)(`div`,{className:`anim-fadein`,children:[(0,N.jsx)(`div`,{className:`emp-section-head`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(U,{children:`Applications`}),(0,N.jsx)(`h2`,{className:`emp-section-title`,children:`Applicants`}),(0,N.jsxs)(`p`,{className:`emp-section-count`,children:[(0,N.jsx)(`span`,{children:o.length}),` total received`]})]})}),u?(0,N.jsx)(le,{}):o.length===0?(0,N.jsxs)(`div`,{className:`emp-empty`,children:[(0,N.jsx)(`div`,{className:`emp-empty-icon`,children:(0,N.jsx)(pr,{size:40})}),(0,N.jsx)(`p`,{className:`emp-empty-text`,children:`no applications yet — click "View Applicants" on a job`})]}):o.map((e,t)=>(0,N.jsxs)(`div`,{className:`emp-app-card anim-fadein`,style:{animationDelay:`${t*.06}s`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:16,flexWrap:`wrap`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,gap:14,alignItems:`flex-start`},children:[(0,N.jsx)(`div`,{className:`emp-avatar`,children:(e.applicant?.name||`U`).slice(0,1).toUpperCase()}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontFamily:`Oxanium, sans-serif`,fontWeight:800,fontSize:`.95rem`,color:`var(--dark)`,marginBottom:2},children:e.applicant?.name}),(0,N.jsxs)(`div`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`.62rem`,color:`var(--muted)`,marginBottom:8,letterSpacing:`.04em`,display:`flex`,alignItems:`center`,gap:6},children:[(0,N.jsx)(hr,{size:10}),e.applicant?.email,e.applicant?.phone?` · ${e.applicant.phone}`:``]}),(0,N.jsxs)(`div`,{children:[e.applicant?.location&&(0,N.jsxs)(`span`,{className:`emp-tag emp-tag-neutral`,children:[(0,N.jsx)(gr,{size:9}),e.applicant.location]}),e.applicant?.experience_years>0&&(0,N.jsxs)(`span`,{className:`emp-tag emp-tag-neutral`,children:[(0,N.jsx)(ur,{size:9}),e.applicant.experience_years,`y exp`]}),e.applicant?.skills?.map((e,t)=>(0,N.jsx)(`span`,{className:`emp-tag emp-tag-neutral`,children:e},t))]})]})]}),(0,N.jsx)(Ao,{status:e.status})]}),e.cover_letter&&(0,N.jsxs)(`div`,{className:`emp-cover-letter`,children:[(0,N.jsx)(`div`,{className:`emp-cover-label`,children:`Cover Letter`}),(0,N.jsx)(`p`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`.72rem`,color:`#2a3340`,margin:0,lineHeight:1.8},children:e.cover_letter})]}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:8,marginTop:16,flexWrap:`wrap`},children:[`reviewed`,`shortlisted`,`rejected`,`hired`].map(t=>{let n=ko[t];return(0,N.jsx)(`button`,{className:`emp-status-btn`,style:{background:n.bg,color:n.text,borderColor:n.border},onClick:()=>A(e.id,t),children:t},t)})})]},e.id))]}),e===`blogs`&&(0,N.jsxs)(`div`,{className:`anim-fadein`,children:[(0,N.jsxs)(`div`,{className:`emp-section-head`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(U,{children:`Content`}),(0,N.jsx)(`h2`,{className:`emp-section-title`,children:`Blog Posts`}),(0,N.jsxs)(`p`,{className:`emp-section-count`,children:[(0,N.jsx)(`span`,{children:v.length}),` published posts`]})]}),(0,N.jsx)(`button`,{className:`btn-primary`,onClick:()=>x(!b),children:b?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(cr,{size:14,style:{transform:`rotate(90deg)`}}),` Close`]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(vr,{size:14}),` Write New Blog`]})})]}),b&&(0,N.jsxs)(`div`,{className:`emp-form-card anim-fadein`,children:[(0,N.jsx)(U,{children:`New Blog Post`}),(0,N.jsx)(`h3`,{className:`emp-form-title`,children:`Blog Details`}),(0,N.jsxs)(`form`,{onSubmit:se,children:[(0,N.jsxs)(`div`,{className:`emp-form-grid`,style:{marginBottom:13},children:[(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Blog Title *`,required:!0,value:C.title,onChange:e=>w({...C,title:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Author Name`,value:C.author,onChange:e=>w({...C,author:e.target.value})}),(0,N.jsx)(`input`,{className:`emp-input`,placeholder:`Image URL (optional)`,value:C.image,onChange:e=>w({...C,image:e.target.value})}),(0,N.jsx)(`select`,{className:`emp-select`,value:C.category,onChange:e=>w({...C,category:e.target.value}),children:[`Technology`,`Career`,`Interview Tips`,`Resume`,`Work Life`,`Other`].map(e=>(0,N.jsx)(`option`,{children:e},e))})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:13},children:[(0,N.jsx)(`textarea`,{className:`emp-textarea`,placeholder:`Short Summary (shown on listing page) *`,required:!0,rows:2,value:C.excerpt,onChange:e=>w({...C,excerpt:e.target.value})}),(0,N.jsx)(`textarea`,{className:`emp-textarea`,placeholder:`Full Blog Content *`,required:!0,rows:10,value:C.content,onChange:e=>w({...C,content:e.target.value})})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:20},children:[(0,N.jsxs)(`button`,{className:`btn-primary`,type:`submit`,children:[(0,N.jsx)(vr,{size:14}),`Publish Blog`]}),(0,N.jsx)(`button`,{className:`btn-ghost`,type:`button`,onClick:()=>x(!1),children:`Cancel`})]})]})]}),u?(0,N.jsx)(le,{}):v.length===0?(0,N.jsxs)(`div`,{className:`emp-empty`,children:[(0,N.jsx)(`div`,{className:`emp-empty-icon`,children:(0,N.jsx)(fr,{size:40})}),(0,N.jsx)(`p`,{className:`emp-empty-text`,children:`no blog posts yet — click "Write New Blog" to publish`})]}):v.map((e,t)=>(0,N.jsxs)(`div`,{className:`emp-row-card anim-fadein`,style:{animationDelay:`${t*.06}s`},children:[(0,N.jsx)(`div`,{className:`emp-row-accent`,style:{background:`var(--blue)`}}),(0,N.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,N.jsx)(`div`,{style:{fontFamily:`Oxanium, sans-serif`,fontWeight:800,fontSize:`.95rem`,color:`var(--dark)`,marginBottom:4},children:e.title}),(0,N.jsxs)(`div`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`.62rem`,color:`var(--muted)`,marginBottom:8,display:`flex`,alignItems:`center`,gap:5},children:[`// `,e.author||`Admin`,` · `,new Date(e.createdAt).toLocaleDateString(`en-IN`)]}),(0,N.jsx)(`span`,{className:`emp-tag`,children:e.category}),e.excerpt&&(0,N.jsx)(`p`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`.68rem`,color:`var(--muted)`,margin:`8px 0 0`,lineHeight:1.7,overflow:`hidden`,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`},children:e.excerpt})]}),(0,N.jsxs)(`button`,{className:`emp-btn-delete`,onClick:()=>ce(e.id),children:[(0,N.jsx)(yr,{size:13}),`Delete`]})]},e.id))]})]})]})]})]})},Mo=`#0f9be7`,No=`#13181f`,Po={applied:{color:`#0f9be7`,bg:`#e8f6fd`,label:`Applied`},reviewed:{color:`#e67e22`,bg:`#fef3e2`,label:`Reviewed`},shortlisted:{color:`#27ae60`,bg:`#e8f8ef`,label:`Shortlisted`},rejected:{color:`#e74c3c`,bg:`#fdecea`,label:`Rejected`},hired:{color:`#8e44ad`,bg:`#f5eefa`,label:`Hired`}},W={page:{maxWidth:900,margin:`0 auto`,padding:`2.5rem 1.5rem`,background:`#fff`,minHeight:`100vh`,fontFamily:`'Oxanium', sans-serif`,color:No},header:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,marginBottom:`2rem`,paddingBottom:`1.5rem`,borderBottom:`1.5px solid #eef0f2`},pageTitle:{fontFamily:`'Oxanium', sans-serif`,fontSize:28,fontWeight:700,color:No,margin:0,letterSpacing:`-0.5px`},pageSub:{fontFamily:`'JetBrains Mono', monospace`,fontSize:12,color:`#8a9099`,marginTop:4,margin:`4px 0 0`},msgSuccess:{padding:`12px 16px`,borderRadius:10,background:`#e8f8ef`,color:`#1a6e3f`,fontFamily:`'JetBrains Mono', monospace`,fontSize:13,marginBottom:16,border:`1px solid #b3e8ca`},msgError:{padding:`12px 16px`,borderRadius:10,background:`#fdecea`,color:`#b71c1c`,fontFamily:`'JetBrains Mono', monospace`,fontSize:13,marginBottom:16,border:`1px solid #f5c0bb`},profileCard:{background:`#fff`,border:`1.5px solid #eef0f2`,borderRadius:16,padding:`1.5rem`,marginBottom:`1.5rem`,display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:16},avatarRing:{width:54,height:54,borderRadius:`50%`,background:`#e8f6fd`,border:`2px solid ${Mo}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`'Oxanium', sans-serif`,fontWeight:700,fontSize:18,color:Mo,flexShrink:0},userName:{fontFamily:`'Oxanium', sans-serif`,fontSize:19,fontWeight:700,color:No,margin:0},userEmail:{fontFamily:`'JetBrains Mono', monospace`,fontSize:12,color:`#8a9099`,margin:`2px 0 0`},editBtn:{background:`#fff`,border:`1.5px solid ${Mo}`,color:Mo,padding:`8px 18px`,borderRadius:10,fontFamily:`'Oxanium', sans-serif`,fontWeight:600,fontSize:13,cursor:`pointer`,whiteSpace:`nowrap`,transition:`background 0.15s, color 0.15s`},formCard:{background:`#fafbfc`,border:`1.5px solid #eef0f2`,borderRadius:16,padding:`1.5rem`,marginBottom:`1.5rem`},formTitle:{fontFamily:`'Oxanium', sans-serif`,fontSize:15,fontWeight:700,color:No,margin:`0 0 16px`},input:{width:`100%`,padding:`10px 14px`,borderRadius:10,border:`1.5px solid #dde1e6`,fontFamily:`'JetBrains Mono', monospace`,fontSize:13,color:No,background:`#fff`,outline:`none`,boxSizing:`border-box`},textarea:{width:`100%`,padding:`10px 14px`,borderRadius:10,border:`1.5px solid #dde1e6`,fontFamily:`'Oxanium', sans-serif`,fontSize:13,color:No,background:`#fff`,outline:`none`,resize:`vertical`,boxSizing:`border-box`,lineHeight:1.6},saveBtn:{background:Mo,color:`#fff`,border:`none`,padding:`10px 24px`,borderRadius:10,fontFamily:`'Oxanium', sans-serif`,fontWeight:700,fontSize:14,cursor:`pointer`,letterSpacing:`0.3px`},cancelBtn:{background:`#fff`,color:`#5a6370`,border:`1.5px solid #dde1e6`,padding:`10px 20px`,borderRadius:10,fontFamily:`'Oxanium', sans-serif`,fontWeight:600,fontSize:14,cursor:`pointer`},statsGrid:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:12,marginBottom:`1.5rem`},tabsRow:{display:`flex`,gap:8,marginBottom:`1.5rem`,flexWrap:`wrap`},tabActive:{background:No,color:`#fff`,border:`1.5px solid ${No}`,padding:`7px 16px`,borderRadius:9,fontFamily:`'Oxanium', sans-serif`,fontWeight:600,fontSize:13,cursor:`pointer`},tabInactive:{background:`#fff`,color:`#5a6370`,border:`1.5px solid #dde1e6`,padding:`7px 16px`,borderRadius:9,fontFamily:`'Oxanium', sans-serif`,fontWeight:600,fontSize:13,cursor:`pointer`},appCard:{background:`#fff`,border:`1.5px solid #eef0f2`,borderRadius:16,padding:`1.25rem 1.5rem`,marginBottom:12,transition:`border-color 0.15s, box-shadow 0.15s`},jobTitle:{fontFamily:`'Oxanium', sans-serif`,fontSize:17,fontWeight:700,color:No,margin:0},companyName:{fontFamily:`'JetBrains Mono', monospace`,fontSize:12,color:Mo,fontWeight:500,margin:`4px 0 0`},jobMeta:{fontFamily:`'JetBrains Mono', monospace`,fontSize:11,color:`#8a9099`,display:`flex`,gap:14,flexWrap:`wrap`,marginTop:5},statusPill:{padding:`5px 14px`,borderRadius:30,fontFamily:`'JetBrains Mono', monospace`,fontSize:11,fontWeight:500,letterSpacing:`0.4px`,textTransform:`uppercase`,flexShrink:0},coverBox:{marginTop:12,background:`#f7f8fa`,borderRadius:10,padding:`10px 14px`,border:`1px solid #eef0f2`},coverLabel:{fontFamily:`'Oxanium', sans-serif`,fontSize:10,fontWeight:700,color:`#8a9099`,textTransform:`uppercase`,letterSpacing:`1px`,margin:`0 0 5px`},coverText:{fontFamily:`'Oxanium', sans-serif`,fontSize:13,color:`#5a6370`,lineHeight:1.65,margin:0},emptyState:{textAlign:`center`,padding:`5rem 2rem`},findJobsBtn:{display:`inline-block`,background:Mo,color:`#fff`,padding:`11px 28px`,borderRadius:10,fontFamily:`'Oxanium', sans-serif`,fontWeight:700,fontSize:14,textDecoration:`none`,letterSpacing:`0.3px`}};if(typeof document<`u`&&!document.getElementById(`jd-styles`)){let e=document.createElement(`style`);e.id=`jd-styles`,e.textContent=`
    @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
    .jd-input:focus { border-color: #0f9be7 !important; box-shadow: 0 0 0 3px #0f9be718 !important; }
    .jd-edit-btn:hover { background: #0f9be7 !important; color: #fff !important; }
    .jd-app-card:hover { border-color: #0f9be740 !important; box-shadow: 0 4px 20px #0f9be710 !important; }
    .jd-skeleton { height: 100px; border-radius: 16px; background: linear-gradient(90deg,#f7f8fa 25%,#eef0f2 50%,#f7f8fa 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; margin-bottom: 12px; }
  `,document.head.appendChild(e)}var Fo=(e=``)=>e.split(` `).slice(0,2).map(e=>e[0]?.toUpperCase()||``).join(``),Io=({label:e,value:t,color:n,bg:r})=>(0,N.jsxs)(`div`,{style:{background:r,border:`1.5px solid ${n}33`,borderRadius:14,padding:`1.1rem 1rem`,textAlign:`center`},children:[(0,N.jsx)(`div`,{style:{fontFamily:`'Oxanium', sans-serif`,fontSize:32,fontWeight:700,color:n,lineHeight:1,marginBottom:6},children:t}),(0,N.jsx)(`div`,{style:{fontFamily:`'JetBrains Mono', monospace`,fontSize:10,fontWeight:500,color:n,letterSpacing:`0.6px`,textTransform:`uppercase`},children:e})]}),Lo=({color:e,bg:t,children:n})=>(0,N.jsx)(`div`,{style:{marginTop:12,background:t,borderRadius:10,padding:`10px 16px`,fontFamily:`'Oxanium', sans-serif`,fontSize:13,fontWeight:600,color:e,textAlign:`center`,border:`1px solid ${e}33`},children:n}),Ro=()=>{let{user:e}=Jn(),[t,n]=(0,S.useState)([]),[r,i]=(0,S.useState)(!0),[a,o]=(0,S.useState)(`all`),[s,c]=(0,S.useState)(!1),[l,u]=(0,S.useState)(``),[d,f]=(0,S.useState)(`success`),[p,m]=(0,S.useState)({name:e?.name||``,phone:e?.phone||``,location:e?.location||``,bio:e?.bio||``,skills:(e?.skills||[]).join(`, `),experience_years:e?.experience_years||0}),h=async()=>{try{i(!0),n((await V.get(`/applications/my`)).data.applications)}catch(e){console.error(e)}finally{i(!1)}};(0,S.useEffect)(()=>{h()},[]);let g=async e=>{e.preventDefault();try{let e={...p,skills:p.skills.split(`,`).map(e=>e.trim()).filter(Boolean)};await V.put(`/auth/me`,e),f(`success`),u(`Profile updated successfully.`),c(!1),setTimeout(()=>u(``),3500)}catch(e){f(`error`),u(e.response?.data?.message||`Something went wrong. Please try again.`)}},_=(e,t)=>m(n=>({...n,[e]:t})),v=a===`all`?t:t.filter(e=>e.status===a),y={total:t.length,shortlisted:t.filter(e=>e.status===`shortlisted`).length,hired:t.filter(e=>e.status===`hired`).length,rejected:t.filter(e=>e.status===`rejected`).length},b=[{key:`all`,label:`All`},{key:`applied`,label:`Applied`},{key:`reviewed`,label:`Reviewed`},{key:`shortlisted`,label:`Shortlisted`},{key:`hired`,label:`Hired`},{key:`rejected`,label:`Rejected`}];return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(`div`,{style:W.page,children:[(0,N.jsxs)(`div`,{style:W.header,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h1`,{style:W.pageTitle,children:`My Dashboard`}),(0,N.jsx)(`p`,{style:W.pageSub,children:`Track your job applications and manage your profile`})]}),(0,N.jsx)(`div`,{style:{fontFamily:`'JetBrains Mono', monospace`,fontSize:11,color:`#8a9099`,paddingTop:4},children:new Date().toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`})})]}),l&&(0,N.jsxs)(`div`,{style:d===`success`?W.msgSuccess:W.msgError,children:[d===`success`?`✓ `:`✕ `,l]}),(0,N.jsxs)(`div`,{style:W.profileCard,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`flex-start`,flex:1},children:[(0,N.jsx)(`div`,{style:W.avatarRing,children:Fo(e?.name)}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:W.userName,children:e?.name}),(0,N.jsx)(`p`,{style:W.userEmail,children:e?.email}),(0,N.jsxs)(`div`,{style:{fontFamily:`'JetBrains Mono', monospace`,fontSize:11,color:`#5a6370`,marginTop:6,display:`flex`,flexWrap:`wrap`,gap:`4px 14px`},children:[e?.location&&(0,N.jsxs)(`span`,{children:[`📍 `,e.location]}),e?.experience_years>0&&(0,N.jsxs)(`span`,{children:[e.experience_years,` yrs experience`]}),e?.phone&&(0,N.jsx)(`span`,{children:e.phone})]}),e?.bio&&(0,N.jsx)(`p`,{style:{fontFamily:`'Oxanium', sans-serif`,fontSize:13,color:`#5a6370`,marginTop:8,lineHeight:1.6,maxWidth:480},children:e.bio}),e?.skills?.length>0&&(0,N.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginTop:10},children:e.skills.map(e=>(0,N.jsx)(`span`,{style:{background:`#e8f6fd`,color:Mo,padding:`3px 10px`,borderRadius:20,fontFamily:`'JetBrains Mono', monospace`,fontSize:11,border:`1px solid ${Mo}33`},children:e},e))})]})]}),(0,N.jsx)(`button`,{className:`jd-edit-btn`,style:W.editBtn,onClick:()=>c(e=>!e),children:s?`Cancel`:`Edit Profile`})]}),s&&(0,N.jsxs)(`div`,{style:W.formCard,children:[(0,N.jsx)(`p`,{style:W.formTitle,children:`Update Profile`}),(0,N.jsxs)(`form`,{onSubmit:g,children:[(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[(0,N.jsx)(`input`,{className:`jd-input`,style:W.input,placeholder:`Full Name`,value:p.name,onChange:e=>_(`name`,e.target.value)}),(0,N.jsx)(`input`,{className:`jd-input`,style:W.input,placeholder:`Phone number`,value:p.phone,onChange:e=>_(`phone`,e.target.value)}),(0,N.jsx)(`input`,{className:`jd-input`,style:W.input,placeholder:`Location (e.g. New Delhi)`,value:p.location,onChange:e=>_(`location`,e.target.value)}),(0,N.jsx)(`input`,{className:`jd-input`,style:W.input,placeholder:`Years of experience`,type:`number`,value:p.experience_years,onChange:e=>_(`experience_years`,e.target.value)}),(0,N.jsx)(`input`,{className:`jd-input`,style:{...W.input,gridColumn:`1 / -1`},placeholder:`Skills (comma-separated: React, Node.js, Python)`,value:p.skills,onChange:e=>_(`skills`,e.target.value)}),(0,N.jsx)(`textarea`,{className:`jd-input`,style:{...W.textarea,gridColumn:`1 / -1`},placeholder:`Write a short bio about yourself...`,value:p.bio,rows:3,onChange:e=>_(`bio`,e.target.value)})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:10,marginTop:16},children:[(0,N.jsx)(`button`,{type:`submit`,style:W.saveBtn,children:`Save Changes`}),(0,N.jsx)(`button`,{type:`button`,style:W.cancelBtn,onClick:()=>c(!1),children:`Cancel`})]})]})]}),(0,N.jsxs)(`div`,{style:W.statsGrid,children:[(0,N.jsx)(Io,{label:`Applications`,value:y.total,color:Mo,bg:`#e8f6fd`}),(0,N.jsx)(Io,{label:`Shortlisted`,value:y.shortlisted,color:`#27ae60`,bg:`#e8f8ef`}),(0,N.jsx)(Io,{label:`Hired`,value:y.hired,color:`#8e44ad`,bg:`#f5eefa`}),(0,N.jsx)(Io,{label:`Rejected`,value:y.rejected,color:`#e74c3c`,bg:`#fdecea`})]}),(0,N.jsx)(`div`,{style:W.tabsRow,children:b.map(e=>(0,N.jsx)(`button`,{style:a===e.key?W.tabActive:W.tabInactive,onClick:()=>o(e.key),children:e.label},e.key))}),r?(0,N.jsx)(`div`,{children:[1,2,3].map(e=>(0,N.jsx)(`div`,{className:`jd-skeleton`},e))}):v.length===0?(0,N.jsxs)(`div`,{style:W.emptyState,children:[(0,N.jsx)(`div`,{style:{width:64,height:64,background:`#f7f8fa`,border:`1.5px solid #eef0f2`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 1.5rem`},children:(0,N.jsxs)(`svg`,{width:`26`,height:`26`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#c0c6ce`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,N.jsx)(`path`,{d:`M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2`})]})}),(0,N.jsx)(`p`,{style:{fontFamily:`'Oxanium', sans-serif`,fontSize:18,fontWeight:700,color:No,margin:`0 0 8px`},children:`No applications found`}),(0,N.jsx)(`p`,{style:{fontFamily:`'JetBrains Mono', monospace`,fontSize:12,color:`#8a9099`,margin:`0 0 24px`},children:a===`all`?`You haven't applied to any jobs yet.`:`No applications with status "${a}".`}),(0,N.jsx)(`a`,{href:`/`,style:W.findJobsBtn,children:`Browse Open Positions`})]}):(0,N.jsx)(`div`,{children:v.map(e=>{let t=Po[e.status]||Po.applied;return(0,N.jsxs)(`div`,{className:`jd-app-card`,style:W.appCard,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:12},children:[(0,N.jsxs)(`div`,{style:{flex:1},children:[(0,N.jsx)(`p`,{style:W.jobTitle,children:e.job?.title}),(0,N.jsx)(`p`,{style:W.companyName,children:e.job?.company?.name}),(0,N.jsxs)(`div`,{style:W.jobMeta,children:[e.job?.location&&(0,N.jsxs)(`span`,{children:[`📍 `,e.job.location]}),(0,N.jsxs)(`span`,{children:[`Applied`,` `,new Date(e.createdAt).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})]})]})]}),(0,N.jsx)(`span`,{style:{...W.statusPill,background:t.bg,color:t.color,border:`1px solid ${t.color}33`},children:t.label})]}),e.cover_letter&&(0,N.jsxs)(`div`,{style:W.coverBox,children:[(0,N.jsx)(`p`,{style:W.coverLabel,children:`Cover Letter`}),(0,N.jsx)(`p`,{style:W.coverText,children:e.cover_letter})]}),e.status===`hired`&&(0,N.jsx)(Lo,{color:`#6d28d9`,bg:`#f5eefa`,children:`Congratulations! You have been selected for this position.`}),e.status===`shortlisted`&&(0,N.jsx)(Lo,{color:`#166534`,bg:`#e8f8ef`,children:`Your application has been shortlisted — start preparing for your interview.`})]},e.id)})})]})},zo=({children:e,role:t})=>{let{user:n}=Jn();return n?t&&n.role!==t?(0,N.jsx)(Nt,{to:`/`}):e:(0,N.jsx)(Nt,{to:`/login`})},Bo=[{value:`12K+`,label:`Jobs Placed`},{value:`800+`,label:`Partner Companies`},{value:`98%`,label:`Client Satisfaction`},{value:`15+`,label:`Years of Excellence`}],Vo=[{icon:`◎`,title:`Executive Search`,desc:`We identify and recruit top-tier leadership talent tailored precisely to your organisational DNA.`},{icon:`◈`,title:`Resume Crafting`,desc:`Our experts reframe your career story into a compelling document that opens doors.`},{icon:`◇`,title:`Career Counselling`,desc:`One-on-one strategy sessions that align your ambitions with market opportunities.`},{icon:`▣`,title:`Corporate Staffing`,desc:`Permanent, contract, and project-based hiring solutions for businesses at every scale.`},{icon:`◉`,title:`Global Placements`,desc:`Cross-border talent mobility across 40+ countries with full compliance support.`},{icon:`△`,title:`Skill Development`,desc:`Industry-mapped training programmes that make candidates irresistible to employers.`}],Ho=[{title:`Senior Product Manager`,company:`FinTech Innovations`,loc:`Mumbai`,type:`Full-time`,salary:`₹28–35 LPA`},{title:`Lead UX Designer`,company:`NovaTech Labs`,loc:`Bengaluru`,type:`Hybrid`,salary:`₹22–28 LPA`},{title:`Data Science Lead`,company:`AnalytiQ Corp`,loc:`Hyderabad`,type:`Remote`,salary:`₹30–40 LPA`},{title:`VP Engineering`,company:`CloudBase India`,loc:`Pune`,type:`Full-time`,salary:`₹50–70 LPA`},{title:`Marketing Director`,company:`BrandForge`,loc:`Delhi NCR`,type:`Full-time`,salary:`₹25–32 LPA`},{title:`Legal Counsel`,company:`Meridian Group`,loc:`Chennai`,type:`Hybrid`,salary:`₹20–26 LPA`}],Uo=[{name:`Priya Sharma`,role:`CFO, Vertex Capital`,text:`DIT didn't just find me a job — they found me a career. The calibre of opportunities and personal attention were truly unmatched.`,img:`https://i.pinimg.com/736x/59/28/38/5928385c218009365fbce96b7326ae0b.jpg`},{name:`Rahul Mehta`,role:`CTO, Cloudrise Technologies`,text:`As an employer, DIT consistently delivers candidates who are not just technically sound but culturally aligned. Truly world-class.`,img:`https://i.pinimg.com/736x/4d/a7/0a/4da70abe67d19f98cffbbd5ac24c72bc.jpg`},{name:`Ananya Singh`,role:`Head of HR, NovaStar`,text:`From our first conversation, DIT understood our needs precisely. They reduced our hiring cycle by 60% without compromising quality.`,img:`https://i.pinimg.com/1200x/50/76/fa/5076fa47e88d356e20afc21f43dc3745.jpg`}];function Wo(){let[e,t]=(0,S.useState)(typeof window<`u`?window.innerWidth:1280);return(0,S.useEffect)(()=>{let e=()=>t(window.innerWidth);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),{isMobile:e<640,isTablet:e<1024,w:e}}function Go(){let[e,t]=(0,S.useState)(null),[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(!1),{isMobile:o,isTablet:s}=Wo();(0,S.useEffect)(()=>{let e=()=>a(window.scrollY>40);return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let c=o?`20px`:`52px`,l=o?`64px 0`:`108px 0`;return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(`div`,{style:{fontFamily:`'JetBrains Mono', monospace`,background:`#ffffff`,color:`#13181f`,overflowX:`hidden`},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue: #0f9be7;
          --dark: #13181f;
          --white: #ffffff;
          --mid: #f4f8fc;
          --border: #e4edf5;
          --muted: #7a8a98;
          --light-blue: #e8f5fd;
        }

        * { box-sizing: border-box; }

        .ox { font-family: 'Oxanium', sans-serif; }
        .jb { font-family: 'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes scanLine  { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes blinkDot  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes rotateRing{ to{transform:rotate(360deg)} }
        @keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 0 rgba(15,155,231,.4)} 50%{box-shadow:0 0 0 12px rgba(15,155,231,0)} }
        @keyframes shimmer   { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes floatBox  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes gridFade  { from{opacity:0;transform:scale(.97)} to{opacity:1;transform:scale(1)} }

        .a-up   { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
        .a-in   { animation: fadeIn .5s ease both; }
        .d1{animation-delay:.06s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}
        .d4{animation-delay:.44s}.d5{animation-delay:.58s}.d6{animation-delay:.72s}

        .g-blue {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* NAV */
        .nav-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background .3s, box-shadow .3s, border-color .3s;
        }
        .nav-wrap.scrolled {
          background: rgba(255,255,255,.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 24px rgba(0,0,0,.06);
        }

        /* BUTTONS */
        .btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue); color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 13px 28px; border-radius: 4px; border: none; cursor: pointer;
          transition: all .2s; position: relative; overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-p::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .btn-p:hover::before { transform: translateX(100%); }
        .btn-p:hover { background: #0b87cc; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(15,155,231,.35); }

        .btn-g {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--dark);
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid var(--dark); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-g:hover { background: var(--dark); color: #fff; }

        .btn-gw {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid rgba(255,255,255,.5); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-gw:hover { background: rgba(255,255,255,.12); border-color: #fff; }

        /* CARDS */
        .card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 6px; transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative; overflow: hidden;
        }
        .card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(15,155,231,.12); border-color: rgba(15,155,231,.35); }
        .card:hover::after { transform: scaleX(1); }

        /* LABEL */
        .label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: .65rem;
          letter-spacing: .14em; text-transform: uppercase;
          color: var(--blue); font-weight: 500;
        }
        .label::before { content: '//'; opacity: .5; }

        .tag {
          display: inline-block;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace; font-size: .63rem;
          letter-spacing: .05em; padding: 3px 10px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2); font-weight: 500;
        }

        /* HERO */
        .hero-section {
          min-height: 100vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          background: var(--dark);
        }
      
        .hero-img-wrap {
          position: absolute; inset: 0; z-index: 0;
        }
        .hero-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; object-position: center 30%;
          opacity: .22;
        }
    
        /* STAT BAR */
        .stat-bar {
          background: var(--blue); position: relative; z-index: 10;
        }
        .stat-bar::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(
            90deg, transparent, transparent 80px,
            rgba(255,255,255,.05) 80px, rgba(255,255,255,.05) 81px
          );
        }

        /* SEARCH */
        .search-wrap {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; display: flex; overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,.07);
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
        }
        .search-wrap input, .search-wrap select {
          flex: 1; border: none; outline: none;
          font-family: 'JetBrains Mono', monospace; font-size: .8rem;
          color: var(--dark); padding: 16px 20px; background: transparent;
        }
        .search-wrap input::placeholder { color: var(--muted); }
        .search-wrap select { color: var(--muted); max-width: 160px; appearance: none; cursor: pointer; }
        .s-div { width: 1px; background: var(--border); align-self: stretch; flex-shrink: 0; }

        /* SERVICE ICON */
        .svc-icon {
          width: 46px; height: 46px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); font-size: 1.1rem; border-radius: 4px;
          transition: all .2s; flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .card:hover .svc-icon { background: var(--blue); color: #fff; }

        /* TESTIMONIAL */
        .tc {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; display: flex; align-items: flex-start;
          gap: 18px; padding: 22px 24px;
          transition: all .25s cubic-bezier(.23,1,.32,1);
          position: relative; overflow: hidden;
        }
        .tc::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 3px; background: var(--blue);
          transform: scaleY(0); transform-origin: bottom; transition: transform .3s;
        }
        .tc:hover { transform: translateX(6px); box-shadow: 0 8px 32px rgba(15,155,231,.1); border-color: rgba(15,155,231,.3); }
        .tc:hover::before { transform: scaleY(1); }

        /* CTA */
        .cta-section {
          position: relative; overflow: hidden; min-height: 480px;
          display: flex; align-items: center;
          background: var(--dark);
        }

        /* FOOTER */
        footer { background: var(--dark); }

        /* PROCESS */
        .proc-num {
          font-family: 'Oxanium', sans-serif; font-size: 3rem; font-weight: 800;
          color: var(--blue); opacity: .15; line-height: 1;
          position: absolute; top: -8px; right: 16px;
          pointer-events: none;
        }

        /* MOBILE MENU */
        .mob-menu {
          position: fixed; inset: 0; background: var(--dark); z-index: 1000;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 32px;
        }
        .mob-menu a {
          color: #fff; font-size: 1.3rem;
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          text-decoration: none; letter-spacing: .06em; text-transform: uppercase;
        }

        @media(max-width:1023px){
          .hero-right-col { display: none !important; }
          .about-grid, .testi-grid { grid-template-columns: 1fr !important; }
          .svc-grid, .jobs-grid { grid-template-columns: 1fr 1fr !important; }
          .proc-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-grid { grid-template-columns: repeat(2,1fr) !important; }
          .foot-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:639px){
          .svc-grid, .jobs-grid, .proc-grid { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
          .foot-grid { grid-template-columns: 1fr !important; }
          .search-stack { flex-direction: column !important; }
          .search-stack .s-div { width: 100% !important; height: 1px !important; }
          .search-stack select { max-width: 100% !important; }
          .cta-btns { flex-direction: column !important; }
        }
      `}),(0,N.jsxs)(`section`,{className:`hero-section`,children:[(0,N.jsx)(`div`,{className:`hero-scan`}),(0,N.jsx)(`div`,{className:`hero-img-wrap`,children:(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=80&auto=format&fit=crop`,alt:``})}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(110deg, rgba(19,24,31,.92) 0%, rgba(19,24,31,.7) 60%, rgba(15,155,231,.08) 100%)`,zIndex:2}}),(0,N.jsx)(`div`,{style:{position:`relative`,zIndex:10,maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`,width:`100%`,flex:1},children:(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:s?`1fr`:`1fr 400px`,gap:60,alignItems:`center`,minHeight:`calc(100vh - 160px)`,paddingTop:80},children:[(0,N.jsxs)(`div`,{style:{paddingBottom:o?24:48},children:[(0,N.jsx)(`div`,{className:`a-up d1`,style:{marginBottom:26},children:(0,N.jsxs)(`span`,{className:`jb`,style:{display:`inline-flex`,alignItems:`center`,gap:10,background:`rgba(15,155,231,.1)`,border:`1px solid rgba(15,155,231,.3)`,padding:`6px 14px`,fontSize:`.65rem`,color:`var(--blue)`,letterSpacing:`.1em`,textTransform:`uppercase`},children:[(0,N.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:`var(--blue)`,animation:`blinkDot 1.5s ease infinite`}}),`India's Premier Talent Partner — Est. 2009`]})}),(0,N.jsxs)(`h1`,{className:`a-up d2 ox`,style:{fontSize:`clamp(2.6rem,5.5vw,5.4rem)`,fontWeight:800,lineHeight:1,letterSpacing:`-.02em`,marginBottom:20,color:`#fff`},children:[`WHERE`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`AMBITION`}),(0,N.jsx)(`br`,{}),`MEETS`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{style:{color:`#fff`},children:`OPPORTUNITY`})]}),(0,N.jsxs)(`div`,{className:`a-up d3 jb`,style:{color:`rgba(255,255,255,.45)`,fontSize:`.65rem`,letterSpacing:`.14em`,textTransform:`uppercase`,marginBottom:16,display:`flex`,alignItems:`center`,gap:12},children:[(0,N.jsx)(`span`,{style:{display:`block`,width:32,height:1,background:`var(--blue)`}}),`DIT Consultancy bridges talent with opportunity`]}),(0,N.jsx)(`p`,{className:`a-up d3 jb`,style:{color:`rgba(255,255,255,.6)`,fontSize:`.82rem`,lineHeight:1.9,maxWidth:480,marginBottom:36},children:`Your next defining career move starts here. We connect India's best talent with its most forward-thinking organisations.`}),(0,N.jsxs)(`div`,{className:`a-up d4`,style:{display:`flex`,gap:12,flexWrap:`wrap`,marginBottom:40},children:[(0,N.jsx)(M,{to:`/jobs`,children:(0,N.jsxs)(`button`,{className:`btn-p`,style:{padding:`14px 32px`,fontSize:`.8rem`},children:[`Explore Opportunities`,(0,N.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})}),(0,N.jsx)(M,{to:`/contact`,children:(0,N.jsx)(`button`,{className:`btn-gw`,style:{padding:`14px 32px`,fontSize:`.8rem`},children:`Hire Talent →`})}),` `]}),(0,N.jsx)(`div`,{className:`a-up d5`,style:{display:`flex`,gap:28,flexWrap:`wrap`},children:[{code:`ISO`,label:`9001 Certified`},{code:`4.9`,label:`Google Rating`},{code:`NSC`,label:`NASSCOM Member`},{code:`800`,label:`Companies`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontSize:`.65rem`,fontWeight:700,background:`rgba(15,155,231,.12)`,border:`1px solid rgba(15,155,231,.25)`,padding:`2px 7px`,borderRadius:2},children:e.code}),(0,N.jsx)(`span`,{style:{color:`rgba(255,255,255,.35)`,fontSize:`.65rem`,letterSpacing:`.06em`},children:e.label})]},e.code))})]}),!s&&(0,N.jsx)(`div`,{className:`hero-right-col a-up d5`,style:{display:`flex`,flexDirection:`column`,gap:14},children:[{num:`12,847`,label:`Active Opportunities`,sub:`Updated daily`},{num:`98%`,label:`Client Satisfaction Rate`,sub:`Verified reviews`},{num:`18 days`,label:`Average Time to Place`,sub:`Industry best`}].map((e,t)=>(0,N.jsxs)(`div`,{style:{background:`rgba(255,255,255,.04)`,border:`1px solid rgba(255,255,255,.08)`,borderLeft:`3px solid var(--blue)`,padding:`18px 22px`,animation:`floatBox ${3+t*.5}s ease-in-out ${t*.4}s infinite`,backdropFilter:`blur(8px)`},children:[(0,N.jsx)(`div`,{className:`ox`,style:{color:`#fff`,fontSize:`1.8rem`,fontWeight:700,marginBottom:2},children:e.num}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`rgba(255,255,255,.7)`,fontSize:`.72rem`,marginBottom:3},children:e.label}),(0,N.jsxs)(`div`,{className:`jb`,style:{color:`var(--blue)`,fontSize:`.6rem`,letterSpacing:`.08em`},children:[`// `,e.sub]})]},e.label))})]})}),(0,N.jsx)(`div`,{className:`stat-bar`,children:(0,N.jsx)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`,position:`relative`},children:(0,N.jsx)(`div`,{className:`stat-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(4,1fr)`},children:Bo.map((e,t)=>(0,N.jsxs)(`div`,{style:{padding:o?`18px 12px`:`26px 28px`,textAlign:`center`,borderRight:t<3?`1px solid rgba(255,255,255,.2)`:`none`},children:[(0,N.jsx)(`div`,{className:`ox`,style:{fontSize:o?`1.6rem`:`2.4rem`,fontWeight:800,color:`#fff`,lineHeight:1.1},children:e.value}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`rgba(255,255,255,.65)`,fontSize:`.6rem`,letterSpacing:`.1em`,textTransform:`uppercase`,marginTop:4},children:e.label})]},e.label))})})})]}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:o?`48px 0`:`72px 0`,borderBottom:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`},children:[(0,N.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:12},children:[(0,N.jsx)(`div`,{className:`label`,style:{justifyContent:`center`,display:`flex`,marginBottom:12},children:`Find Your Next Role`}),(0,N.jsxs)(`h3`,{className:`ox`,style:{fontSize:`clamp(1.6rem,4vw,2rem)`,fontWeight:700,color:`var(--dark)`,letterSpacing:`-.01em`,marginBottom:0},children:[`Search `,(0,N.jsx)(`span`,{className:`g-blue`,children:`12,000+`}),` Opportunities`]})]}),(0,N.jsxs)(`div`,{style:{maxWidth:900,margin:`28px auto 0`},children:[(0,N.jsxs)(`div`,{className:`search-wrap search-stack`,children:[(0,N.jsx)(`input`,{type:`text`,placeholder:`Job title, skill or keyword…`}),(0,N.jsx)(`div`,{className:`s-div`}),(0,N.jsx)(`input`,{type:`text`,placeholder:`City or Remote…`}),(0,N.jsx)(`div`,{className:`s-div`}),(0,N.jsxs)(`select`,{children:[(0,N.jsx)(`option`,{children:`All Industries`}),(0,N.jsx)(`option`,{children:`Technology`}),(0,N.jsx)(`option`,{children:`Finance`}),(0,N.jsx)(`option`,{children:`Healthcare`}),(0,N.jsx)(`option`,{children:`Legal`})]}),(0,N.jsxs)(`button`,{className:`btn-p`,style:{borderRadius:0,clipPath:`none`,padding:`16px 26px`,fontSize:`.75rem`},children:[(0,N.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),`Search`]})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,justifyContent:`center`,marginTop:16},children:[(0,N.jsx)(`span`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.65rem`,alignSelf:`center`,letterSpacing:`.06em`},children:`// trending:`}),[`Product Manager`,`Data Analyst`,`DevOps Engineer`,`Finance Lead`,`Legal Counsel`].map(e=>(0,N.jsx)(`button`,{className:`tag`,style:{cursor:`pointer`,transition:`all .15s`},onMouseEnter:e=>{e.currentTarget.style.background=`rgba(15,155,231,.15)`,e.currentTarget.style.borderColor=`var(--blue)`},onMouseLeave:e=>{e.currentTarget.style.background=`var(--light-blue)`,e.currentTarget.style.borderColor=`rgba(15,155,231,.2)`},children:e},e))]})]})]})}),(0,N.jsx)(`section`,{style:{background:`#fff`,padding:l},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,marginBottom:o?36:56,flexWrap:`wrap`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`What We Offer`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,margin:0},children:[`SERVICES BUILT`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`FOR EXCELLENCE`})]})]}),!o&&(0,N.jsx)(`button`,{className:`btn-g`,style:{padding:`11px 24px`},children:`View All Services →`})]}),(0,N.jsx)(`div`,{className:`svc-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(3,1fr)`,gap:16},children:Vo.map(e=>(0,N.jsxs)(`div`,{className:`card`,style:{padding:`28px 24px`,cursor:`pointer`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:16,marginBottom:16},children:[(0,N.jsx)(`div`,{className:`svc-icon`,children:e.icon}),(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:700,fontSize:`.92rem`,letterSpacing:`.02em`,paddingTop:12},children:e.title})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.75rem`,lineHeight:1.85,margin:0},children:e.desc}),(0,N.jsx)(`div`,{className:`jb`,style:{marginTop:16,color:`var(--blue)`,fontSize:`.65rem`,letterSpacing:`.08em`,fontWeight:600},children:`// learn_more →`})]},e.title))}),o&&(0,N.jsx)(`div`,{style:{textAlign:`center`,marginTop:24},children:(0,N.jsx)(`button`,{className:`btn-g`,children:`View All Services →`})})]})}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:l,borderTop:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,marginBottom:o?36:52,flexWrap:`wrap`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Curated Roles`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,margin:0},children:[`FEATURED `,(0,N.jsx)(`span`,{className:`g-blue`,children:`OPENINGS`})]})]}),!o&&(0,N.jsx)(`button`,{className:`btn-g`,style:{padding:`11px 24px`},children:`View All Jobs →`})]}),(0,N.jsx)(`div`,{className:`jobs-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(3,1fr)`,gap:16},children:Ho.map(n=>(0,N.jsxs)(`div`,{className:`card`,style:{padding:`22px 22px`,cursor:`pointer`,background:`#fff`},onMouseEnter:()=>t(n.title),onMouseLeave:()=>t(null),children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:16},children:[(0,N.jsx)(`div`,{style:{width:44,height:44,background:`var(--blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,clipPath:`polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)`},children:(0,N.jsx)(`span`,{className:`ox`,style:{color:`#fff`,fontWeight:800,fontSize:`1rem`},children:n.company[0]})}),(0,N.jsx)(`span`,{className:`tag`,children:n.type})]}),(0,N.jsx)(`div`,{className:`ox`,style:{color:e===n.title?`var(--blue)`:`var(--dark)`,fontWeight:700,fontSize:`.9rem`,marginBottom:4,transition:`color .18s`,letterSpacing:`.01em`},children:n.title}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.68rem`,marginBottom:16,letterSpacing:`.04em`},children:n.company}),(0,N.jsx)(`div`,{style:{height:1,background:`var(--border)`,marginBottom:14}}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:5,color:`var(--muted)`,fontSize:`.65rem`,letterSpacing:`.04em`},children:[(0,N.jsx)(`svg`,{width:`10`,height:`10`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`})}),n.loc]}),(0,N.jsx)(`span`,{className:`ox`,style:{color:`var(--blue)`,fontSize:`.82rem`,fontWeight:700},children:n.salary})]})]},n.title))}),o&&(0,N.jsx)(`div`,{style:{textAlign:`center`,marginTop:24},children:(0,N.jsx)(`button`,{className:`btn-g`,children:`View All Jobs →`})})]})}),(0,N.jsx)(`section`,{style:{background:`#fff`,padding:l,borderTop:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`},children:[(0,N.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:o?40:68},children:[(0,N.jsx)(`div`,{className:`label`,style:{justifyContent:`center`,display:`flex`,marginBottom:12},children:`The Process`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,color:`var(--dark)`,margin:0},children:[`HOW `,(0,N.jsx)(`span`,{className:`g-blue`,children:`DIT WORKS`})]})]}),(0,N.jsxs)(`div`,{className:`proc-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(4,1fr)`,gap:16,position:`relative`},children:[!o&&(0,N.jsx)(`div`,{style:{position:`absolute`,top:36,left:`12.5%`,right:`12.5%`,height:1,background:`linear-gradient(90deg, transparent, rgba(15,155,231,.3) 20%, rgba(15,155,231,.3) 80%, transparent)`,pointerEvents:`none`}}),[{n:`01`,title:`REGISTER`,desc:`Create your profile in minutes. Candidates and employers both welcome.`},{n:`02`,title:`MATCH`,desc:`Our experts match you with curated roles or talent tailored to your needs.`},{n:`03`,title:`INTERVIEW`,desc:`We prep candidates and coordinate seamlessly with hiring companies.`},{n:`04`,title:`GET PLACED`,desc:`Accept your offer. We stay with you through onboarding and beyond.`}].map((e,t)=>(0,N.jsxs)(`div`,{style:{padding:`32px 20px 28px`,textAlign:`center`,position:`relative`,background:`#fff`,border:`1px solid var(--border)`,borderRadius:4,marginBottom:0},children:[(0,N.jsx)(`span`,{className:`proc-num`,children:e.n}),(0,N.jsx)(`div`,{style:{width:60,height:60,borderRadius:`50%`,background:`var(--light-blue)`,border:`2px solid rgba(15,155,231,.25)`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 20px`,position:`relative`,zIndex:2},children:(0,N.jsx)(`span`,{className:`ox g-blue`,style:{fontSize:`1.1rem`,fontWeight:800},children:e.n})}),(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:700,fontSize:`.82rem`,marginBottom:10,letterSpacing:`.06em`},children:e.title}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.72rem`,lineHeight:1.8,margin:0},children:e.desc})]},e.n))]})]})}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:l,borderTop:`1px solid var(--border)`},children:(0,N.jsx)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`},children:(0,N.jsxs)(`div`,{className:`about-grid`,style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:o?40:80,alignItems:`center`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:16},children:`About DIT`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3.2rem)`,fontWeight:800,lineHeight:1.05,marginBottom:20,color:`var(--dark)`},children:[`15 YEARS OF`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`CHANGING LIVES`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,lineHeight:1.9,marginBottom:14,fontSize:`.78rem`},children:`DIT Consultancy was founded with a singular belief: that the right connection between talent and opportunity can change everything. From our first placement to over 12,000 successful careers, that conviction has never wavered.`}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,lineHeight:1.9,marginBottom:32,fontSize:`.78rem`},children:`Our consultants bring domain expertise, market intelligence, and genuine care to every engagement.`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,N.jsx)(`button`,{className:`btn-p`,children:`Our Story →`}),(0,N.jsx)(`button`,{className:`btn-g`,children:`Meet the Team`})]})]}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:14},children:[{label:`Industries Covered`,val:`28+`,icon:`◆`},{label:`Cities Across India`,val:`35+`,icon:`◎`},{label:`Avg. Days to Place`,val:`18`,icon:`◇`},{label:`Repeat Clients`,val:`91%`,icon:`◉`}].map(e=>(0,N.jsxs)(`div`,{className:`card`,style:{padding:`28px 20px`,textAlign:`center`,background:`#fff`},children:[(0,N.jsx)(`div`,{style:{color:`var(--blue)`,fontSize:`1.2rem`,marginBottom:8},children:e.icon}),(0,N.jsx)(`div`,{className:`ox g-blue`,style:{fontSize:`2.4rem`,fontWeight:800,lineHeight:1.1,marginBottom:8},children:e.val}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.65rem`,letterSpacing:`.06em`,lineHeight:1.5,textTransform:`uppercase`},children:e.label})]},e.label))})]})})}),(0,N.jsx)(`section`,{style:{background:`#fff`,padding:l,borderTop:`1px solid var(--border)`},children:(0,N.jsx)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${c}`},children:(0,N.jsxs)(`div`,{className:`testi-grid`,style:{display:`grid`,gridTemplateColumns:s?`1fr`:`1fr 1.2fr`,gap:o?40:80,alignItems:`center`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:16},children:`Voices of Trust`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,marginBottom:20},children:[`WHAT OUR`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`CLIENTS SAY`})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:14,alignItems:`stretch`,marginBottom:28},children:[(0,N.jsx)(`div`,{style:{width:3,background:`var(--blue)`,borderRadius:2,flexShrink:0}}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.78rem`,lineHeight:1.9,fontStyle:`italic`,margin:0},children:`"DIT consistently connects us with candidates who are not just skilled but perfectly aligned with our culture. They've become indispensable to our talent strategy."`})]}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:28,flexWrap:`wrap`,marginBottom:32},children:[{val:`12K+`,label:`Placements`},{val:`4.9★`,label:`Avg Rating`},{val:`98%`,label:`Recommend`}].map(e=>(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--blue)`,fontSize:`1.8rem`,fontWeight:800,lineHeight:1.1},children:e.val}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.6rem`,letterSpacing:`.1em`,textTransform:`uppercase`,marginTop:4},children:e.label})]},e.label))}),(0,N.jsx)(`button`,{className:`btn-p`,children:`View More Stories →`})]}),(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:14},children:Uo.map((e,t)=>(0,N.jsxs)(`div`,{className:`tc`,style:{marginLeft:t===1?o?0:24:0},children:[(0,N.jsx)(`img`,{src:e.img,alt:e.name,style:{width:52,height:52,borderRadius:`50%`,objectFit:`cover`,flexShrink:0,border:`2px solid var(--border)`}}),(0,N.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:6},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:700,fontSize:`.82rem`,letterSpacing:`.02em`},children:e.name}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--blue)`,fontSize:`.62rem`,marginTop:2,letterSpacing:`.06em`},children:e.role})]}),(0,N.jsx)(`div`,{style:{color:`var(--border)`,fontSize:`2rem`,fontFamily:`serif`,lineHeight:1,flexShrink:0,marginLeft:8},children:`"`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.73rem`,lineHeight:1.8,margin:0},children:e.text}),(0,N.jsx)(`div`,{style:{color:`#f59e0b`,fontSize:`.65rem`,marginTop:10,letterSpacing:2},children:`★★★★★`})]})]},e.name))})]})})}),(0,N.jsxs)(`section`,{className:`cta-section`,children:[(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url('https://images.pexels.com/photos/7709292/pexels-photo-7709292.jpeg')`,backgroundSize:`cover`,backgroundPosition:`center`,zIndex:0,opacity:.18}}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(110deg, rgba(19,24,31,.97) 0%, rgba(19,24,31,.88) 50%, rgba(15,155,231,.08) 100%)`,zIndex:1}}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,zIndex:2,opacity:.05,backgroundImage:`linear-gradient(rgba(15,155,231,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px)`,backgroundSize:`48px 48px`}}),(0,N.jsx)(`div`,{style:{position:`relative`,zIndex:10,maxWidth:1280,margin:`0 auto`,padding:o?`64px 20px`:`88px 52px`,width:`100%`},children:(0,N.jsxs)(`div`,{style:{maxWidth:640},children:[(0,N.jsxs)(`div`,{className:`label`,style:{color:`rgba(255,255,255,.5)`,marginBottom:18},children:[(0,N.jsx)(`span`,{style:{opacity:.5},children:`// `}),`Get Started Today`]}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(2.2rem,5vw,4.4rem)`,fontWeight:800,lineHeight:1,marginBottom:20,color:`#fff`,letterSpacing:`-.01em`},children:[`YOUR NEXT`,(0,N.jsx)(`br`,{}),`CHAPTER STARTS`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`NOW`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`rgba(255,255,255,.5)`,fontSize:`.8rem`,lineHeight:1.9,marginBottom:40,maxWidth:500},children:`Whether you're a candidate ready to grow or an employer looking for exceptional talent — DIT is your trusted partner every step of the way.`}),(0,N.jsxs)(`div`,{className:`cta-btns`,style:{display:`flex`,gap:12,flexWrap:`wrap`,marginBottom:36},children:[(0,N.jsxs)(`button`,{className:`btn-p`,style:{padding:`16px 36px`,fontSize:`.85rem`,boxShadow:`0 8px 32px rgba(15,155,231,.4)`},children:[`Find Your Dream Job`,(0,N.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]}),(0,N.jsx)(`button`,{className:`btn-gw`,style:{padding:`16px 36px`,fontSize:`.85rem`},children:`Hire with DIT`})]}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[{text:`Free for Candidates`},{text:`No Hidden Fees`},{text:`Dedicated Consultant`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8,color:`rgba(255,255,255,.4)`,fontSize:`.65rem`,letterSpacing:`.06em`},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontWeight:700},children:`✓`}),e.text]},e.text))})]})})]})]})}var Ko=[{city:`New Delhi`,address:`Level 12, Tower B, DLF Cyber City,
Gurugram, Haryana 122002`,phone:`+91 9999999999`,email:`delhi@ditconsultancy.in`,hours:`Mon – Sat · 9 am – 7 pm`,primary:!0},{city:`Mumbai`,address:`Unit 804, Bandra Kurla Complex,
Bandra East, Mumbai 400051`,phone:`+91 9999999999`,email:`mumbai@ditconsultancy.in`,hours:`Mon – Sat · 9 am – 7 pm`,primary:!1},{city:`Bengaluru`,address:`3rd Floor, Embassy Tech Village,
Outer Ring Road, Bengaluru 560103`,phone:`+91 9999999999`,email:`bangalore@ditconsultancy.in`,hours:`Mon – Sat · 9 am – 7 pm`,primary:!1}],qo=[`Job Seeker`,`Employer / Hiring`,`Partnership`,`Press & Media`,`General Enquiry`],Jo=[{q:`How long does the placement process typically take?`,a:`For most roles our average time-to-place is 18 working days. Senior and niche mandates may take slightly longer, but we keep you informed at every step.`},{q:`Is there a fee for candidates?`,a:`No. Our services are completely free for job seekers. We are compensated exclusively by the hiring organisations.`},{q:`Which industries do you specialise in?`,a:`We operate across 28+ industries including Technology, Finance, Legal, Healthcare, FMCG, Manufacturing, and Professional Services.`},{q:`Can companies post jobs directly on your platform?`,a:`Yes. Registered employers can post mandates via our Employer Portal or contact our team directly for managed search assignments.`}];function Yo(){let[e,t]=(0,S.useState)({name:``,email:``,phone:``,company:``,type:``,message:``}),[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(!1),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(null),[u,d]=(0,S.useState)(null),f=e=>t(t=>({...t,[e.target.name]:e.target.value}));return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(`div`,{style:{fontFamily:`'JetBrains Mono', monospace`,background:`#ffffff`,color:`#13181f`,overflowX:`hidden`},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue: #0f9be7;
          --dark: #13181f;
          --white: #ffffff;
          --mid: #f4f8fc;
          --border: #e4edf5;
          --muted: #7a8a98;
          --light-blue: #e8f5fd;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ox { font-family: 'Oxanium', sans-serif; }
        .jb { font-family: 'JetBrains Mono', monospace; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanLine { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer  { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes gridFade { from{opacity:0;transform:scale(.97)} to{opacity:1;transform:scale(1)} }
        @keyframes pulseDot { 0%,100%{box-shadow:0 0 0 5px rgba(15,155,231,.22),0 0 0 10px rgba(15,155,231,.09)} 50%{box-shadow:0 0 0 8px rgba(15,155,231,.28),0 0 0 16px rgba(15,155,231,.1)} }
        @keyframes checkDraw{ from{stroke-dashoffset:40} to{stroke-dashoffset:0} }
        @keyframes popIn    { from{transform:scale(.88);opacity:0} to{transform:scale(1);opacity:1} }
        @keyframes spin     { to{transform:rotate(360deg)} }

        .a-up { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
        .d1{animation-delay:.06s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}
        .d4{animation-delay:.44s}.d5{animation-delay:.58s}

        .g-blue {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue); color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 13px 28px; border-radius: 4px; border: none; cursor: pointer;
          transition: all .2s; position: relative; overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-p:disabled { opacity: 0.6; cursor: not-allowed; }
        .btn-p::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .btn-p:hover:not(:disabled)::before { transform: translateX(100%); }
        .btn-p:hover:not(:disabled) { background: #0b87cc; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(15,155,231,.35); }

        .btn-g {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--dark);
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid var(--dark); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-g:hover { background: var(--dark); color: #fff; }

        .btn-gw {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid rgba(255,255,255,.5); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-gw:hover { background: rgba(255,255,255,.12); border-color: #fff; }

        .card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 6px; transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative; overflow: hidden;
        }
        .card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(15,155,231,.12); border-color: rgba(15,155,231,.35); }
        .card:hover::after { transform: scaleX(1); }

        .label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: .65rem;
          letter-spacing: .14em; text-transform: uppercase;
          color: var(--blue); font-weight: 500;
        }
        .label::before { content: '//'; opacity: .5; }

        .tag {
          display: inline-block;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace; font-size: .63rem;
          letter-spacing: .05em; padding: 3px 10px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2); font-weight: 500;
        }

        .hero-section {
          min-height: 92vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          background: var(--dark);
        }
        .hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.6), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 3;
        }

        .stat-bar { background: var(--blue); position: relative; z-index: 10; }
        .stat-bar::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,.05) 80px, rgba(255,255,255,.05) 81px);
        }

        .fi {
          width: 100%;
          background: var(--mid);
          border: 1.5px solid var(--border);
          border-radius: 4px;
          padding: 11px 14px;
          color: var(--dark);
          font-size: .78rem;
          font-family: 'JetBrains Mono', monospace;
          outline: none;
          transition: border-color .18s, box-shadow .18s, background .18s;
          resize: none;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .fi::placeholder { color: var(--muted); }
        .fi:focus { border-color: var(--blue); background: var(--white); box-shadow: 0 0 0 3px rgba(15,155,231,.1); }
        select.fi { cursor: pointer; appearance: none; }

        .fl {
          display: block; font-size: .6rem; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 7px;
          font-family: 'JetBrains Mono', monospace;
          transition: color .18s;
        }
        .fw.focused .fl { color: var(--blue); }

        .faq-wrap {
          border: 1px solid var(--border); border-radius: 4px;
          background: var(--white); overflow: hidden;
          transition: border-color .2s, box-shadow .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .faq-wrap.open {
          border-color: rgba(15,155,231,.4);
          box-shadow: 0 4px 20px rgba(15,155,231,.08);
          background: var(--mid);
        }
        .faq-btn {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 22px; gap: 16px; text-align: left;
        }
        .faq-icon {
          width: 22px; height: 22px;
          border: 1px solid rgba(15,155,231,.3);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); font-size: .6rem; flex-shrink: 0;
          transition: transform .28s, background .2s;
          clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%);
        }
        .faq-wrap.open .faq-icon { transform: rotate(180deg); background: rgba(15,155,231,.1); }
        .faq-body { max-height: 0; overflow: hidden; transition: max-height .38s cubic-bezier(.23,1,.32,1); }
        .faq-wrap.open .faq-body { max-height: 200px; }

        .oc {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; padding: 28px 24px;
          position: relative; overflow: hidden;
          transition: border-color .22s, box-shadow .28s, transform .28s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }
        .oc::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .oc:hover { border-color: rgba(15,155,231,.4); box-shadow: 0 16px 48px rgba(15,155,231,.12); transform: translateY(-4px); }
        .oc:hover::after { transform: scaleX(1); }
        .oc.primary { border-left: 3px solid var(--blue); }

        .map-box {
          border-radius: 0; overflow: hidden;
          border: 1px solid var(--border); position: relative;
          height: 160px;
          background: linear-gradient(135deg, #daf1fb 0%, #b8e4f5 100%);
          margin-top: 18px;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .map-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,.15) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .map-pin { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-70%); display: flex; flex-direction: column; align-items: center; }
        .map-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--blue); animation: pulseDot 2.5s ease-in-out infinite; }
        .map-stem { width: 2px; height: 14px; background: var(--blue); opacity: .6; }
        .map-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(220,243,252,.96));
          padding: 20px 12px 8px;
          display: flex; justify-content: space-between; align-items: flex-end;
        }

        .soc {
          width: 34px; height: 34px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); font-size: .68rem; font-weight: 700;
          cursor: pointer; transition: all .18s; text-decoration: none;
          clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
          font-family: 'JetBrains Mono', monospace;
        }
        .soc:hover { background: var(--blue); border-color: var(--blue); color: #fff; }

        .success { animation: popIn .5s cubic-bezier(.22,1,.36,1) both; }
        .check-ring {
          width: 68px; height: 68px;
          background: var(--light-blue);
          border: 1px solid rgba(15,155,231,.3);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .check-path { stroke-dasharray: 40; stroke-dashoffset: 40; animation: checkDraw .5s .3s ease forwards; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @media(max-width:1023px){
          .contact-grid { grid-template-columns: 1fr !important; }
          .offices-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:639px){
          .offices-grid { grid-template-columns: 1fr !important; }
          .form-row    { grid-template-columns: 1fr !important; }
          .hero-pills  { flex-direction: column !important; align-items: flex-start !important; }
          .stat-grid   { grid-template-columns: 1fr 1fr !important; }
          .cta-btns    { flex-direction: column !important; }
        }
      `}),(0,N.jsxs)(`section`,{className:`hero-section`,children:[(0,N.jsx)(`div`,{className:`hero-scan`}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,zIndex:0},children:(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=82&auto=format&fit=crop`,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`,objectPosition:`center 30%`,opacity:.18}})}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(110deg, rgba(19,24,31,.96) 0%, rgba(19,24,31,.72) 60%, rgba(15,155,231,.06) 100%)`,zIndex:2}}),(0,N.jsx)(`div`,{style:{position:`relative`,zIndex:10,maxWidth:1280,margin:`0 auto`,padding:`0 52px`,width:`100%`,flex:1,display:`flex`,alignItems:`center`},children:(0,N.jsxs)(`div`,{style:{paddingTop:80,paddingBottom:48,maxWidth:680},children:[(0,N.jsx)(`div`,{className:`a-up d1`,style:{marginBottom:26},children:(0,N.jsxs)(`span`,{className:`jb`,style:{display:`inline-flex`,alignItems:`center`,gap:10,background:`rgba(15,155,231,.1)`,border:`1px solid rgba(15,155,231,.3)`,padding:`6px 14px`,fontSize:`.65rem`,color:`var(--blue)`,letterSpacing:`.1em`,textTransform:`uppercase`},children:[(0,N.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:`var(--blue)`,animation:`blinkDot 1.5s ease infinite`}}),`Get In Touch — DIT Consultancy`]})}),(0,N.jsxs)(`h1`,{className:`a-up d2 ox`,style:{fontSize:`clamp(2.6rem,5.5vw,5.4rem)`,fontWeight:800,lineHeight:1,letterSpacing:`-.02em`,marginBottom:20,color:`#fff`},children:[`WE'D LOVE TO`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`HEAR FROM`}),(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{style:{color:`#fff`},children:`YOU`})]}),(0,N.jsxs)(`div`,{className:`a-up d3 jb`,style:{color:`rgba(255,255,255,.45)`,fontSize:`.65rem`,letterSpacing:`.14em`,textTransform:`uppercase`,marginBottom:16,display:`flex`,alignItems:`center`,gap:12},children:[(0,N.jsx)(`span`,{style:{display:`block`,width:32,height:1,background:`var(--blue)`}}),`Delhi · Mumbai · Bengaluru`]}),(0,N.jsx)(`div`,{className:`a-up d4 hero-pills`,style:{display:`flex`,gap:10,flexWrap:`wrap`,marginBottom:40},children:[{icon:`✉`,text:`info@ditconsultancy.in`},{icon:`☎`,text:`+91 9XXXXXXXXX`},{icon:`◎`,text:`3 Offices Nationwide`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8,background:`rgba(255,255,255,.08)`,backdropFilter:`blur(10px)`,border:`1px solid rgba(255,255,255,.15)`,padding:`7px 16px`,color:`rgba(255,255,255,.7)`,fontSize:`.7rem`,letterSpacing:`.04em`},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`},children:e.icon}),e.text]},e.text))}),(0,N.jsx)(`div`,{className:`a-up d5`,style:{display:`flex`,gap:28,flexWrap:`wrap`},children:[{code:`24H`,label:`Response Time`},{code:`35+`,label:`Cities Served`},{code:`3`,label:`Offices`},{code:`28+`,label:`Industries`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontSize:`.65rem`,fontWeight:700,background:`rgba(15,155,231,.12)`,border:`1px solid rgba(15,155,231,.25)`,padding:`2px 7px`,borderRadius:2},children:e.code}),(0,N.jsx)(`span`,{style:{color:`rgba(255,255,255,.35)`,fontSize:`.65rem`,letterSpacing:`.06em`},children:e.label})]},e.code))})]})}),(0,N.jsx)(`div`,{className:`stat-bar`,children:(0,N.jsx)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 52px`,position:`relative`},children:(0,N.jsx)(`div`,{className:`stat-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(4,1fr)`},children:[{val:`28+`,label:`Industries`},{val:`18`,label:`Days to Place`},{val:`3`,label:`Offices`},{val:`35+`,label:`Cities Served`}].map((e,t)=>(0,N.jsxs)(`div`,{style:{padding:`24px 28px`,textAlign:`center`,borderRight:t<3?`1px solid rgba(255,255,255,.2)`:`none`},children:[(0,N.jsx)(`div`,{className:`ox`,style:{fontSize:`2.2rem`,fontWeight:800,color:`#fff`,lineHeight:1.1},children:e.val}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`rgba(255,255,255,.65)`,fontSize:`.6rem`,letterSpacing:`.1em`,textTransform:`uppercase`,marginTop:4},children:e.label})]},e.label))})})})]}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:`108px 0 108px`,borderBottom:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 52px`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,marginBottom:56,flexWrap:`wrap`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Send a Message`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,margin:0},children:[`START THE `,(0,N.jsx)(`span`,{className:`g-blue`,children:`CONVERSATION`})]})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,maxWidth:280,textAlign:`right`,lineHeight:1.75,fontSize:`.75rem`},children:`Fill in the form and we'll get back within one business day.`})]}),(0,N.jsxs)(`div`,{className:`contact-grid`,style:{display:`grid`,gridTemplateColumns:`1fr 360px`,gap:24,alignItems:`start`},children:[(0,N.jsx)(`div`,{className:`card`,style:{padding:`40px 36px`},children:n?(0,N.jsxs)(`div`,{className:`success`,style:{textAlign:`center`,padding:`32px 0`},children:[(0,N.jsx)(`div`,{className:`check-ring`,children:(0,N.jsx)(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{className:`check-path`,d:`M5 12l5 5L19 7`,stroke:`var(--blue)`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:800,fontSize:`1.4rem`,marginBottom:10,letterSpacing:`.02em`},children:`MESSAGE SENT!`}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--blue)`,fontSize:`.6rem`,letterSpacing:`.14em`,textTransform:`uppercase`,marginBottom:14},children:`// response within 1 business day`}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,lineHeight:1.85,maxWidth:300,margin:`0 auto 28px`,fontSize:`.76rem`},children:`Thank you for reaching out. A confirmation email has been sent to your inbox. A member of our team will respond shortly.`}),(0,N.jsx)(`button`,{className:`btn-g`,onClick:()=>{r(!1),t({name:``,email:``,phone:``,company:``,type:``,message:``})},children:`Send Another →`})]}):(0,N.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault(),s(``),a(!0);try{await V.post(`/enquiries`,e),r(!0)}catch(e){s(e.response?.data?.message||`Something went wrong. Please try again.`)}finally{a(!1)}},style:{display:`flex`,flexDirection:`column`,gap:18},children:[o&&(0,N.jsxs)(`div`,{style:{background:`#fff0f0`,border:`1.5px solid #fca5a5`,borderRadius:6,padding:`12px 16px`,color:`#991b1b`,fontSize:`.76rem`,fontFamily:`JetBrains Mono, monospace`,display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(`span`,{children:`⚠`}),` `,o]}),(0,N.jsxs)(`div`,{className:`form-row`,style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:14},children:[(0,N.jsxs)(`div`,{className:`fw${u===`name`?` focused`:``}`,children:[(0,N.jsx)(`label`,{className:`fl`,children:`Full Name *`}),(0,N.jsx)(`input`,{name:`name`,required:!0,value:e.name,onChange:f,onFocus:()=>d(`name`),onBlur:()=>d(null),placeholder:`Your full name`,className:`fi`})]}),(0,N.jsxs)(`div`,{className:`fw${u===`email`?` focused`:``}`,children:[(0,N.jsx)(`label`,{className:`fl`,children:`Email Address *`}),(0,N.jsx)(`input`,{name:`email`,type:`email`,required:!0,value:e.email,onChange:f,onFocus:()=>d(`email`),onBlur:()=>d(null),placeholder:`email@company.com`,className:`fi`})]})]}),(0,N.jsxs)(`div`,{className:`form-row`,style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:14},children:[(0,N.jsxs)(`div`,{className:`fw${u===`phone`?` focused`:``}`,children:[(0,N.jsx)(`label`,{className:`fl`,children:`Phone Number`}),(0,N.jsx)(`input`,{name:`phone`,value:e.phone,onChange:f,onFocus:()=>d(`phone`),onBlur:()=>d(null),placeholder:`+91 9XXXXXXXXX`,className:`fi`})]}),(0,N.jsxs)(`div`,{className:`fw${u===`company`?` focused`:``}`,children:[(0,N.jsx)(`label`,{className:`fl`,children:`Company / Organisation`}),(0,N.jsx)(`input`,{name:`company`,value:e.company,onChange:f,onFocus:()=>d(`company`),onBlur:()=>d(null),placeholder:`Your company name`,className:`fi`})]})]}),(0,N.jsxs)(`div`,{className:`fw${u===`type`?` focused`:``}`,children:[(0,N.jsx)(`label`,{className:`fl`,children:`Enquiry Type *`}),(0,N.jsxs)(`div`,{style:{position:`relative`},children:[(0,N.jsxs)(`select`,{name:`type`,required:!0,value:e.type,onChange:f,onFocus:()=>d(`type`),onBlur:()=>d(null),className:`fi`,style:{paddingRight:36},children:[(0,N.jsx)(`option`,{value:``,children:`Select the nature of your enquiry…`}),qo.map(e=>(0,N.jsx)(`option`,{children:e},e))]}),(0,N.jsx)(`div`,{style:{position:`absolute`,right:12,top:`50%`,transform:`translateY(-50%)`,color:`var(--blue)`,pointerEvents:`none`,fontSize:`.7rem`},children:`▾`})]})]}),(0,N.jsxs)(`div`,{className:`fw${u===`message`?` focused`:``}`,children:[(0,N.jsx)(`label`,{className:`fl`,children:`Your Message *`}),(0,N.jsx)(`textarea`,{name:`message`,required:!0,rows:5,value:e.message,onChange:f,onFocus:()=>d(`message`),onBlur:()=>d(null),placeholder:`Tell us how we can help you…`,className:`fi`,style:{minHeight:120}})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`flex-start`},children:[(0,N.jsx)(`input`,{type:`checkbox`,required:!0,id:`consent`,style:{marginTop:2,accentColor:`var(--blue)`,cursor:`pointer`,flexShrink:0}}),(0,N.jsxs)(`label`,{htmlFor:`consent`,className:`jb`,style:{color:`var(--muted)`,fontSize:`.68rem`,lineHeight:1.7,cursor:`pointer`},children:[`I agree to DIT Consultancy's`,` `,(0,N.jsx)(`a`,{href:`#`,style:{color:`var(--blue)`,textDecoration:`none`},children:`Privacy Policy`}),` `,`and consent to being contacted.`]})]}),(0,N.jsx)(`button`,{type:`submit`,className:`btn-p`,disabled:i,style:{width:`100%`,justifyContent:`center`,padding:`14px 24px`,fontSize:`.82rem`},children:i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:`spinner`}),`Sending...`]}):(0,N.jsxs)(N.Fragment,{children:[`Send Message`,(0,N.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 19l9 2-9-18-9 18 9-2zm0 0v-8`})})]})})]})}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:14},children:[(0,N.jsxs)(`div`,{className:`card`,style:{padding:`22px 20px`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14,marginBottom:14},children:[(0,N.jsx)(`div`,{style:{width:44,height:44,background:`var(--light-blue)`,border:`1px solid rgba(15,155,231,.2)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--blue)`,fontSize:`1.1rem`,flexShrink:0,clipPath:`polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)`},children:`⚡`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:700,fontSize:`.88rem`},children:`Fast Response`}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.62rem`,marginTop:2,letterSpacing:`.04em`},children:`// reply within 1 business day`})]})]}),(0,N.jsx)(`div`,{style:{height:4,borderRadius:2,background:`var(--border)`,overflow:`hidden`},children:(0,N.jsx)(`div`,{style:{height:`100%`,width:`85%`,background:`var(--blue)`}})}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.6rem`,marginTop:6,letterSpacing:`.04em`},children:`Average reply time: 4 hours`})]}),(0,N.jsxs)(`div`,{className:`card`,style:{padding:`22px 20px`},children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Reach Us Directly`}),(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[{icon:`✉`,label:`General Enquiries`,val:`info@ditconsultancy.in`},{icon:`💼`,label:`Employer Services`,val:`hire@ditconsultancy.in`},{icon:`☎`,label:`Helpline`,val:`+91 9XXXXXXXXX`}].map(e=>(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,N.jsx)(`div`,{style:{width:34,height:34,background:`var(--light-blue)`,border:`1px solid rgba(15,155,231,.2)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--blue)`,fontSize:`.8rem`,flexShrink:0,clipPath:`polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)`},children:e.icon}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.58rem`,letterSpacing:`.1em`,textTransform:`uppercase`},children:e.label}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--dark)`,fontSize:`.72rem`,fontWeight:500,marginTop:1},children:e.val})]})]},e.label))})]}),(0,N.jsxs)(`div`,{className:`card`,style:{padding:`22px 20px`},children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Office Hours`}),[{day:`Monday – Friday`,hours:`9:00 am – 7:00 pm`},{day:`Saturday`,hours:`10:00 am – 5:00 pm`},{day:`Sunday`,hours:`Closed`,muted:!0}].map((e,t,n)=>(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`9px 0`,borderBottom:t<n.length-1?`1px solid var(--border)`:`none`},children:[(0,N.jsx)(`span`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.7rem`},children:e.day}),(0,N.jsx)(`span`,{className:`jb`,style:{color:e.muted?`rgba(122,138,152,.4)`:`var(--dark)`,fontSize:`.7rem`,fontWeight:600},children:e.hours})]},e.day))]}),(0,N.jsxs)(`div`,{className:`card`,style:{padding:`22px 20px`},children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Follow DIT`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,alignItems:`center`},children:[[{l:`LinkedIn`,a:`in`},{l:`Twitter`,a:`𝕏`},{l:`Instagram`,a:`ig`},{l:`YouTube`,a:`▶`}].map(e=>(0,N.jsx)(`a`,{href:`#`,className:`soc`,title:e.l,children:e.a},e.l)),(0,N.jsx)(`span`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.6rem`,marginLeft:4,letterSpacing:`.06em`},children:`@ditconsultancy`})]})]})]})]})]})}),(0,N.jsx)(`section`,{style:{background:`#fff`,padding:`108px 0`,borderTop:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 52px`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,marginBottom:52,flexWrap:`wrap`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Our Offices`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,margin:0},children:[`FIND US `,(0,N.jsx)(`span`,{className:`g-blue`,children:`ACROSS INDIA`})]})]}),(0,N.jsx)(`span`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.72rem`,letterSpacing:`.06em`},children:`// 3 offices · 35+ cities served`})]}),(0,N.jsx)(`div`,{className:`offices-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(3,1fr)`,gap:20},children:Ko.map(e=>(0,N.jsxs)(`div`,{className:`oc${e.primary?` primary`:``}`,children:[e.primary&&(0,N.jsx)(`div`,{style:{position:`absolute`,top:14,right:14},children:(0,N.jsx)(`span`,{className:`tag`,children:`HQ`})}),(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:800,fontSize:`1.15rem`,marginBottom:6,letterSpacing:`.01em`},children:e.city}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.72rem`,lineHeight:1.85,whiteSpace:`pre-line`,marginBottom:18},children:e.address}),(0,N.jsx)(`div`,{style:{height:1,background:`var(--border)`,marginBottom:16}}),(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:[{icon:`☎`,val:e.phone},{icon:`✉`,val:e.email},{icon:`◷`,val:e.hours}].map(e=>(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontSize:`.78rem`,width:16,textAlign:`center`,flexShrink:0},children:e.icon}),(0,N.jsx)(`span`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.7rem`},children:e.val})]},e.icon))}),(0,N.jsxs)(`div`,{className:`map-box`,children:[(0,N.jsx)(`div`,{className:`map-grid`}),(0,N.jsxs)(`div`,{className:`map-pin`,children:[(0,N.jsx)(`div`,{className:`map-dot`}),(0,N.jsx)(`div`,{className:`map-stem`})]}),(0,N.jsxs)(`div`,{className:`map-bar`,children:[(0,N.jsxs)(`span`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.65rem`},children:[e.city,` Office`]}),(0,N.jsx)(`a`,{href:`#`,className:`jb`,style:{color:`var(--blue)`,fontSize:`.65rem`,fontWeight:700,textDecoration:`none`},children:`Directions →`})]})]})]},e.city))})]})}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:`108px 0`,borderTop:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1180,margin:`0 auto`,padding:`0 52px`},children:[(0,N.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:56},children:[(0,N.jsx)(`div`,{className:`label`,style:{justifyContent:`center`,display:`flex`,marginBottom:14},children:`Common Questions`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,color:`var(--dark)`,margin:0},children:[`FREQUENTLY `,(0,N.jsx)(`span`,{className:`g-blue`,children:`ASKED`})]})]}),(0,N.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:Jo.map((e,t)=>(0,N.jsxs)(`div`,{className:`faq-wrap${c===t?` open`:``}`,children:[(0,N.jsxs)(`button`,{className:`faq-btn`,onClick:()=>l(c===t?null:t),children:[(0,N.jsx)(`span`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:700,fontSize:`.88rem`,lineHeight:1.4},children:e.q}),(0,N.jsx)(`div`,{className:`faq-icon`,children:`▾`})]}),(0,N.jsx)(`div`,{className:`faq-body`,children:(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.76rem`,lineHeight:1.85,padding:`0 22px 20px`},children:e.a})})]},t))}),(0,N.jsxs)(`p`,{className:`jb`,style:{textAlign:`center`,color:`var(--muted)`,fontSize:`.7rem`,marginTop:36,letterSpacing:`.04em`},children:[`Still have questions?`,` `,(0,N.jsx)(`a`,{href:`#`,style:{color:`var(--blue)`,textDecoration:`none`,fontWeight:600},children:`Browse our full FAQ →`})]})]})}),(0,N.jsxs)(`section`,{style:{position:`relative`,overflow:`hidden`,minHeight:440,display:`flex`,alignItems:`center`,background:`var(--dark)`},children:[(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=75')`,backgroundSize:`cover`,backgroundPosition:`center`,opacity:.16}}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(110deg, rgba(19,24,31,.97) 0%, rgba(19,24,31,.88) 50%, rgba(15,155,231,.08) 100%)`}}),(0,N.jsx)(`div`,{style:{position:`relative`,zIndex:10,maxWidth:1280,margin:`0 auto`,padding:`88px 52px`,width:`100%`},children:(0,N.jsxs)(`div`,{style:{maxWidth:580},children:[(0,N.jsxs)(`div`,{className:`label`,style:{color:`rgba(255,255,255,.5)`,marginBottom:18},children:[(0,N.jsx)(`span`,{style:{opacity:.5},children:`// `}),`Ready to Begin`]}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(2.2rem,5vw,4rem)`,fontWeight:800,lineHeight:1,marginBottom:20,color:`#fff`,letterSpacing:`-.01em`},children:[`YOUR NEXT`,(0,N.jsx)(`br`,{}),`CHAPTER STARTS`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`NOW`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`rgba(255,255,255,.5)`,fontSize:`.8rem`,lineHeight:1.9,marginBottom:40,maxWidth:460},children:`Join 10,000+ professionals who built their careers through DIT Consultancy. Our team is ready to help you take the next step.`}),(0,N.jsxs)(`div`,{className:`cta-btns`,style:{display:`flex`,gap:12,flexWrap:`wrap`,marginBottom:32},children:[(0,N.jsxs)(`button`,{className:`btn-p`,style:{padding:`16px 36px`,fontSize:`.85rem`,boxShadow:`0 8px 32px rgba(15,155,231,.4)`},children:[`Find Your Dream Job`,(0,N.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]}),(0,N.jsx)(`button`,{className:`btn-gw`,style:{padding:`16px 36px`,fontSize:`.85rem`},children:`Hire with DIT`})]}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[{text:`Free for Candidates`},{text:`No Hidden Fees`},{text:`Dedicated Consultant`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8,color:`rgba(255,255,255,.4)`,fontSize:`.65rem`,letterSpacing:`.06em`},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontWeight:700},children:`✓`}),e.text]},e.text))})]})})]})]})}var Xo=[{value:`15+`,label:`Years of Excellence`},{value:`10K+`,label:`Careers Launched`},{value:`800+`,label:`Partner Companies`},{value:`98%`,label:`Client Satisfaction`}],Zo=[{icon:`◎`,title:`Precision Matching`,desc:`We align candidate strengths with roles that unlock true potential — not just fill vacancies.`},{icon:`◈`,title:`Trust & Integrity`,desc:`Radical transparency with every client and candidate. We say what we mean, always.`},{icon:`◇`,title:`Career Elevation`,desc:`We architect careers, not just placements. Long-term growth is our measure of success.`},{icon:`▣`,title:`Industry Intelligence`,desc:`15 years of domain insight across IT, Finance, Healthcare, Manufacturing & more.`}],Qo=[{name:`Rajesh Kumar`,role:`Founder & CEO`,img:`https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg`,exp:`20 yrs`},{name:`Priya Sharma`,role:`Head of Recruitment`,img:`https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg`,exp:`12 yrs`},{name:`Amit Singh`,role:`Senior Consultant`,img:`https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg`,exp:`10 yrs`},{name:`Neha Gupta`,role:`Client Relations Lead`,img:`https://i.pinimg.com/736x/a6/05/09/a60509fa8fc8e90cabbffbb1a5b300fa.jpg`,exp:`8 yrs`}],$o=[`Information Technology`,`Banking & Finance`,`Healthcare`,`Manufacturing`,`E-Commerce`,`Legal & Compliance`,`FMCG & Retail`,`Real Estate`],es=[{year:`2009`,title:`Founded in New Delhi`,desc:`DIT launched with 3 consultants and a mission to make hiring human again.`},{year:`2013`,title:`First 1,000 Placements`,desc:`Crossed our first milestone, serving 50+ companies across 5 industries.`},{year:`2017`,title:`PAN India Expansion`,desc:`Opened offices in Mumbai and Bengaluru. Now serving 15+ cities.`},{year:`2021`,title:`Digital Transformation`,desc:`Launched our job portal and candidate tracking platform.`},{year:`2024`,title:`10,000+ Careers Launched`,desc:`A decade and a half of connecting talent with opportunity.`,active:!0}];function ts(){let[e,t]=(0,S.useState)(typeof window<`u`?window.innerWidth:1280);return(0,S.useEffect)(()=>{let e=()=>t(window.innerWidth);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),{isMobile:e<640,isTablet:e<1024,w:e}}function ns(){let{isMobile:e,isTablet:t}=ts(),[n,r]=(0,S.useState)(!1);(0,S.useEffect)(()=>{let e=()=>r(window.scrollY>40);return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let i=e?`20px`:`52px`,a=e?`64px 0`:`108px 0`;return(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(`div`,{style:{fontFamily:`'JetBrains Mono', monospace`,background:`#ffffff`,color:`#13181f`,overflowX:`hidden`},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue: #0f9be7;
          --dark: #13181f;
          --white: #ffffff;
          --mid: #f4f8fc;
          --border: #e4edf5;
          --muted: #7a8a98;
          --light-blue: #e8f5fd;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ox { font-family: 'Oxanium', sans-serif; }
        .jb { font-family: 'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes scanLine  { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes blinkDot  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes rotateRing{ to{transform:rotate(360deg)} }
        @keyframes shimmer   { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes floatBox  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes gridFade  { from{opacity:0;transform:scale(.97)} to{opacity:1;transform:scale(1)} }
        @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(15,155,231,.4)} 100%{box-shadow:0 0 0 16px rgba(15,155,231,0)} }

        .a-up { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
        .a-in { animation: fadeIn .5s ease both; }
        .d1{animation-delay:.06s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}
        .d4{animation-delay:.44s}.d5{animation-delay:.58s}.d6{animation-delay:.72s}

        .g-blue {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* BUTTONS */
        .btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue); color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 13px 28px; border-radius: 4px; border: none; cursor: pointer;
          transition: all .2s; position: relative; overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-p::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transform: translateX(-100%); transition: transform .5s;
        }
        .btn-p:hover::before { transform: translateX(100%); }
        .btn-p:hover { background: #0b87cc; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(15,155,231,.35); }

        .btn-g {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--dark);
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid var(--dark); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-g:hover { background: var(--dark); color: #fff; }

        .btn-gw {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-family: 'Oxanium', sans-serif; font-weight: 600; font-size: .8rem;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 28px; border-radius: 4px;
          border: 1.5px solid rgba(255,255,255,.5); cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .btn-gw:hover { background: rgba(255,255,255,.12); border-color: #fff; }

        /* CARDS */
        .card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 6px; transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative; overflow: hidden;
        }
        .card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(15,155,231,.12); border-color: rgba(15,155,231,.35); }
        .card:hover::after { transform: scaleX(1); }

        /* LABEL */
        .label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: .65rem;
          letter-spacing: .14em; text-transform: uppercase;
          color: var(--blue); font-weight: 500;
        }
        .label::before { content: '//'; opacity: .5; }

        .tag {
          display: inline-block;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace; font-size: .63rem;
          letter-spacing: .05em; padding: 3px 10px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2); font-weight: 500;
        }

        /* HERO */
        .hero-section {
          min-height: 100vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          background: var(--dark);
        }
        .hero-grid-bg {
          position: absolute; inset: 0; opacity: .04;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridFade 1.2s ease both;
        }
        .hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.6), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 3;
        }
        .hero-corner {
          position: absolute; width: 20px; height: 20px;
          border-color: var(--blue); border-style: solid; opacity: .6;
        }

        /* STAT BAR */
        .stat-bar {
          background: var(--blue); position: relative; z-index: 10;
        }
        .stat-bar::before {
          content: ''; position: absolute; inset: 0;
          background: repeating-linear-gradient(
            90deg, transparent, transparent 80px,
            rgba(255,255,255,.05) 80px, rgba(255,255,255,.05) 81px
          );
        }

        /* SERVICE ICON (reused for values) */
        .svc-icon {
          width: 46px; height: 46px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); font-size: 1.1rem; border-radius: 4px;
          transition: all .2s; flex-shrink: 0;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .card:hover .svc-icon { background: var(--blue); color: #fff; }

        /* TEAM CARD */
        .team-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 6px; overflow: hidden;
          transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative;
        }
        .team-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .team-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(15,155,231,.12); border-color: rgba(15,155,231,.35); }
        .team-card:hover::after { transform: scaleX(1); }
        .team-card:hover .team-photo-img { transform: scale(1.06); }

        .team-photo-img {
          width: 100%; height: 200px; object-fit: cover; display: block;
          transition: transform .45s ease;
        }

        /* INDUSTRY PILL */
        .ind-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 20px; border-radius: 2px;
          background: var(--mid); border: 1px solid var(--border);
          color: var(--muted); font-size: .72rem; font-weight: 500;
          cursor: default; transition: all .2s;
          font-family: 'JetBrains Mono', monospace;
        }
        .ind-pill:hover {
          background: var(--light-blue); border-color: rgba(15,155,231,.35);
          color: var(--blue); transform: translateY(-2px);
        }

        /* TIMELINE */
        .tl-item {
          display: flex; flex-direction: column; align-items: center;
          padding: 0 12px; position: relative; cursor: default;
        }
        .tl-dot {
          width: 40px; height: 40px; border-radius: 50%;
          background: #0c1929; border: 2px solid rgba(15,155,231,.4);
          display: flex; align-items: center; justify-content: center;
          transition: all .3s; z-index: 2; position: relative;
        }
        .tl-dot-active {
          border-color: var(--blue);
          animation: pulseRing 2s ease-out infinite;
          background: rgba(15,155,231,.15);
        }
        .tl-item:hover .tl-dot {
          border-color: var(--blue); background: rgba(15,155,231,.12);
        }
        .tl-dot-inner {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(15,155,231,.5); transition: all .3s;
        }
        .tl-dot-inner-active { background: var(--blue); transform: scale(1.4); }
        .tl-item:hover .tl-dot-inner { background: var(--blue); transform: scale(1.4); }

        .tl-card {
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07);
          border-radius: 4px; padding: 18px 16px; text-align: center; width: 100%;
          transition: all .28s;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }
        .tl-card-active {
          border-color: rgba(15,155,231,.3);
          background: rgba(15,155,231,.08);
          border-left: 2px solid var(--blue);
        }
        .tl-item:hover .tl-card {
          background: rgba(15,155,231,.07);
          border-color: rgba(15,155,231,.25);
          transform: translateY(-4px);
        }

        /* CTA */
        .cta-section {
          position: relative; overflow: hidden; min-height: 480px;
          display: flex; align-items: center;
          background: var(--dark);
        }

        /* CHECK ITEM */
        .check-item {
          display: flex; align-items: center; gap: 11px;
          margin-bottom: 12px; font-size: .78rem; color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
        }
        .check-dot {
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.25);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          color: var(--blue); font-size: .55rem;
        }

        /* ABOUT IMAGE FRAME */
        .img-frame-outer {
          position: relative;
        }
        .img-frame-deco {
          position: absolute; top: -12px; left: -12px; right: 12px; bottom: 12px;
          border: 1px solid rgba(15,155,231,.25); border-radius: 4px; z-index: 0;
        }
        .img-frame-inner {
          position: relative; z-index: 1;
          border-radius: 4px; overflow: hidden;
          border: 1px solid var(--border);
        }
        .img-frame-inner img {
          width: 100%; height: 420px; object-fit: cover; display: block;
        }
        .img-overlay-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 60px 20px 18px;
          background: linear-gradient(transparent, rgba(8,18,32,.85));
          color: #fff;
        }
        .img-chip {
          position: absolute; bottom: -20px; right: -20px; z-index: 2;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 4px; padding: 18px 22px;
          box-shadow: 0 16px 40px rgba(15,28,46,.12);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
        }

        /* TEAM BTN */
        .team-btn {
          width: 28px; height: 28px; border-radius: 3px;
          background: var(--light-blue); border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .2s;
        }
        .team-btn:hover { background: var(--blue); border-color: var(--blue); }
        .team-btn:hover svg { color: #fff !important; }

        /* RESPONSIVE */
        @media(max-width:1023px){
          .about-wwa-grid  { grid-template-columns: 1fr !important; }
          .val-grid        { grid-template-columns: 1fr 1fr !important; }
          .team-grid       { grid-template-columns: 1fr 1fr !important; }
          .stat-grid-about { grid-template-columns: 1fr 1fr !important; }
          .tl-track        { grid-template-columns: 1fr 1fr !important; }
          .tl-track::before { display: none !important; }
        }
        @media(max-width:639px){
          .val-grid        { grid-template-columns: 1fr !important; }
          .team-grid       { grid-template-columns: 1fr !important; }
          .tl-track        { grid-template-columns: 1fr !important; }
          .img-frame-outer { display: none !important; }
          .cta-btns-about  { flex-direction: column !important; }
        }
      `}),(0,N.jsxs)(`section`,{className:`hero-section`,children:[(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,zIndex:0},children:(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=80`,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`,objectPosition:`center 30%`,opacity:.18}})}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(110deg, rgba(19,24,31,.96) 0%, rgba(19,24,31,.72) 60%, rgba(15,155,231,.06) 100%)`,zIndex:2}}),(0,N.jsx)(`div`,{style:{position:`relative`,zIndex:10,maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`,width:`100%`,flex:1,display:`flex`,alignItems:`center`},children:(0,N.jsxs)(`div`,{style:{paddingTop:80,paddingBottom:e?24:48,maxWidth:680},children:[(0,N.jsx)(`div`,{className:`a-up d1`,style:{marginBottom:26},children:(0,N.jsxs)(`span`,{className:`jb`,style:{display:`inline-flex`,alignItems:`center`,gap:10,background:`rgba(15,155,231,.1)`,border:`1px solid rgba(15,155,231,.3)`,padding:`6px 14px`,fontSize:`.65rem`,color:`var(--blue)`,letterSpacing:`.1em`,textTransform:`uppercase`},children:[(0,N.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:`var(--blue)`,animation:`blinkDot 1.5s ease infinite`}}),`About DIT Consultancy — Est. 2009`]})}),(0,N.jsxs)(`h1`,{className:`a-up d2 ox`,style:{fontSize:`clamp(2.6rem,5.5vw,5.4rem)`,fontWeight:800,lineHeight:1,letterSpacing:`-.02em`,marginBottom:20,color:`#fff`},children:[`WE CONNECT`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`AMBITION`}),(0,N.jsx)(`br`,{}),`WITH`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{style:{color:`#fff`},children:`PURPOSE`})]}),(0,N.jsxs)(`div`,{className:`a-up d3 jb`,style:{color:`rgba(255,255,255,.45)`,fontSize:`.65rem`,letterSpacing:`.14em`,textTransform:`uppercase`,marginBottom:16,display:`flex`,alignItems:`center`,gap:12},children:[(0,N.jsx)(`span`,{style:{display:`block`,width:32,height:1,background:`var(--blue)`}}),`India's most trusted talent partner since 2009`]}),(0,N.jsxs)(`div`,{className:`a-up d4`,style:{display:`flex`,gap:12,flexWrap:`wrap`,marginBottom:40},children:[(0,N.jsxs)(`button`,{className:`btn-p`,style:{padding:`14px 32px`,fontSize:`.8rem`},children:[`Explore Opportunities`,(0,N.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]}),(0,N.jsx)(`button`,{className:`btn-gw`,style:{padding:`14px 32px`,fontSize:`.8rem`},children:`Our Services →`})]}),(0,N.jsx)(`div`,{className:`a-up d5`,style:{display:`flex`,gap:28,flexWrap:`wrap`},children:[{code:`ISO`,label:`9001 Certified`},{code:`4.9★`,label:`Google Rating`},{code:`NSC`,label:`NASSCOM Member`},{code:`15+`,label:`Years Active`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontSize:`.65rem`,fontWeight:700,background:`rgba(15,155,231,.12)`,border:`1px solid rgba(15,155,231,.25)`,padding:`2px 7px`,borderRadius:2},children:e.code}),(0,N.jsx)(`span`,{style:{color:`rgba(255,255,255,.35)`,fontSize:`.65rem`,letterSpacing:`.06em`},children:e.label})]},e.code))})]})}),(0,N.jsx)(`div`,{className:`stat-bar`,children:(0,N.jsx)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`,position:`relative`},children:(0,N.jsx)(`div`,{className:`stat-grid-about`,style:{display:`grid`,gridTemplateColumns:`repeat(4,1fr)`},children:Xo.map((t,n)=>(0,N.jsxs)(`div`,{style:{padding:e?`18px 12px`:`26px 28px`,textAlign:`center`,borderRight:n<3?`1px solid rgba(255,255,255,.2)`:`none`},children:[(0,N.jsx)(`div`,{className:`ox`,style:{fontSize:e?`1.6rem`:`2.4rem`,fontWeight:800,color:`#fff`,lineHeight:1.1},children:t.value}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`rgba(255,255,255,.65)`,fontSize:`.6rem`,letterSpacing:`.1em`,textTransform:`uppercase`,marginTop:4},children:t.label})]},t.label))})})})]}),(0,N.jsx)(`section`,{style:{background:`#fff`,padding:a},children:(0,N.jsx)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`},children:(0,N.jsxs)(`div`,{className:`about-wwa-grid`,style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:e?40:80,alignItems:`center`},children:[(0,N.jsxs)(`div`,{className:`img-frame-outer`,children:[(0,N.jsx)(`div`,{className:`img-frame-deco`}),(0,N.jsxs)(`div`,{className:`img-frame-inner`,children:[(0,N.jsx)(`img`,{src:`https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg`,alt:`DIT Office`}),(0,N.jsxs)(`div`,{className:`img-overlay-caption`,children:[(0,N.jsx)(`div`,{className:`jb`,style:{fontSize:`.6rem`,color:`rgba(255,255,255,.5)`,letterSpacing:`.08em`,textTransform:`uppercase`,marginBottom:3},children:`// New Delhi HQ`}),(0,N.jsx)(`div`,{className:`ox`,style:{fontWeight:700,fontSize:`1rem`,color:`#fff`},children:`Building Careers Daily`})]})]}),(0,N.jsxs)(`div`,{className:`img-chip`,children:[(0,N.jsx)(`div`,{className:`ox g-blue`,style:{fontSize:`2rem`,fontWeight:800,lineHeight:1.1},children:`800+`}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.62rem`,marginTop:3,letterSpacing:`.04em`},children:`Partner Companies`})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:16},children:`Who We Are`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,marginBottom:20},children:[`MORE THAN A`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`RECRUITMENT AGENCY`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,lineHeight:1.9,marginBottom:14,fontSize:`.78rem`},children:`DIT (Dedicated Industry Talent) Consultancy was founded with a singular mission — to transform how people find meaningful work. We go beyond resumes. We understand people, ambitions, and what makes them thrive.`}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,lineHeight:1.9,marginBottom:28,fontSize:`.78rem`},children:`Our consultants bring 15 years of domain expertise across IT, Banking, Healthcare, Manufacturing and more — placing 10,000+ professionals in roles they love.`}),[`PAN India presence across 20+ cities`,`Dedicated sector-specialist teams`,`End-to-end candidate support from CV to offer`].map(e=>(0,N.jsxs)(`div`,{className:`check-item`,children:[(0,N.jsx)(`div`,{className:`check-dot`,children:`✓`}),e]},e)),(0,N.jsx)(`div`,{style:{display:`flex`,gap:36,marginTop:28,paddingTop:24,borderTop:`1px solid var(--border)`,flexWrap:`wrap`},children:[[`2009`,`Founded`],[`20+`,`Cities`],[`PAN India`,`Coverage`]].map(([e,t])=>(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`ox g-blue`,style:{fontSize:`1.8rem`,fontWeight:800,lineHeight:1.1},children:e}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.6rem`,letterSpacing:`.08em`,textTransform:`uppercase`,marginTop:4},children:t})]},t))}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:12,marginTop:32,flexWrap:`wrap`},children:[(0,N.jsx)(`button`,{className:`btn-p`,children:`Our Story →`}),(0,N.jsx)(`button`,{className:`btn-g`,children:`Meet the Team`})]})]})]})})}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:a,borderTop:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,marginBottom:e?36:56,flexWrap:`wrap`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Our Foundation`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,margin:0},children:[`WHAT `,(0,N.jsx)(`span`,{className:`g-blue`,children:`DRIVES US`})]})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,maxWidth:280,textAlign:`right`,lineHeight:1.75,fontSize:`.75rem`},children:`Four principles that have defined our culture and service since day one.`})]}),(0,N.jsx)(`div`,{className:`val-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(4,1fr)`,gap:16},children:Zo.map((e,t)=>(0,N.jsxs)(`div`,{className:`card`,style:{padding:`28px 24px`,cursor:`pointer`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:16,marginBottom:16},children:[(0,N.jsx)(`div`,{className:`svc-icon`,children:e.icon}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{className:`jb`,style:{color:`var(--blue)`,fontSize:`.58rem`,letterSpacing:`.18em`,textTransform:`uppercase`,marginBottom:6},children:[`0`,t+1]}),(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:700,fontSize:`.9rem`,letterSpacing:`.02em`},children:e.title})]})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.75rem`,lineHeight:1.85,margin:0},children:e.desc}),(0,N.jsx)(`div`,{className:`jb`,style:{marginTop:16,color:`var(--blue)`,fontSize:`.65rem`,letterSpacing:`.08em`,fontWeight:600},children:`// learn_more →`})]},e.title))})]})}),(0,N.jsx)(`section`,{style:{background:`#fff`,padding:a,borderTop:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`},children:[(0,N.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:e?36:52},children:[(0,N.jsx)(`div`,{className:`label`,style:{justifyContent:`center`,display:`flex`,marginBottom:14},children:`Sectors We Serve`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,color:`var(--dark)`,margin:`0 0 8px`},children:[`INDUSTRY `,(0,N.jsx)(`span`,{className:`g-blue`,children:`EXPERTISE`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.75rem`,lineHeight:1.7},children:`Deep domain knowledge across the sectors that matter most.`})]}),(0,N.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:10,justifyContent:`center`},children:$o.map(e=>(0,N.jsxs)(`div`,{className:`ind-pill`,children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`},children:`◆`}),e]},e))})]})}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:a,borderTop:`1px solid var(--border)`},children:(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-end`,marginBottom:e?36:52,flexWrap:`wrap`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:14},children:`Meet the Experts`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3rem)`,fontWeight:800,lineHeight:1.05,color:`var(--dark)`,margin:0},children:[`THE MINDS `,(0,N.jsx)(`span`,{className:`g-blue`,children:`BEHIND DIT`})]})]}),!e&&(0,N.jsx)(`button`,{className:`btn-g`,style:{padding:`11px 24px`},children:`View Full Team →`})]}),(0,N.jsx)(`div`,{className:`team-grid`,style:{display:`grid`,gridTemplateColumns:`repeat(4,1fr)`,gap:16},children:Qo.map(({name:e,role:t,img:n,exp:r})=>(0,N.jsxs)(`div`,{className:`team-card`,children:[(0,N.jsxs)(`div`,{style:{position:`relative`,overflow:`hidden`},children:[(0,N.jsx)(`img`,{className:`team-photo-img`,src:n,alt:e}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(to top, rgba(8,18,32,.6) 0%, transparent 55%)`}}),(0,N.jsx)(`div`,{className:`tag`,style:{position:`absolute`,top:10,right:10,background:`var(--blue)`,color:`#fff`,border:`none`},children:r})]}),(0,N.jsxs)(`div`,{style:{padding:`18px 20px`},children:[(0,N.jsx)(`div`,{className:`ox`,style:{color:`var(--dark)`,fontWeight:700,fontSize:`.9rem`,letterSpacing:`.01em`,marginBottom:3},children:e}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--blue)`,fontSize:`.63rem`,letterSpacing:`.06em`,textTransform:`uppercase`,marginBottom:14},children:t}),(0,N.jsx)(`div`,{style:{height:1,background:`var(--border)`,marginBottom:14}}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:8},children:[(0,N.jsx)(`svg`,{width:`11`,height:`11`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})},`mail`),(0,N.jsx)(`svg`,{width:`11`,height:`11`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})},`phone`)].map((e,t)=>(0,N.jsx)(`div`,{className:`team-btn`,style:{color:`var(--blue)`},children:e},t))})]})]},e))}),e&&(0,N.jsx)(`div`,{style:{textAlign:`center`,marginTop:24},children:(0,N.jsx)(`button`,{className:`btn-g`,children:`View Full Team →`})})]})}),(0,N.jsx)(`section`,{style:{padding:a,background:`var(--dark)`,position:`relative`,overflow:`hidden`},children:(0,N.jsxs)(`div`,{style:{position:`relative`,zIndex:2,maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`},children:[(0,N.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:e?40:60},children:[(0,N.jsx)(`div`,{className:`label`,style:{justifyContent:`center`,display:`flex`,marginBottom:14,color:`rgba(15,155,231,.8)`},children:`Our Journey`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,4vw,3.6rem)`,fontWeight:800,color:`#fff`,letterSpacing:`-.02em`,lineHeight:1.05,margin:`0 0 12px`},children:[`15 YEARS OF `,(0,N.jsx)(`span`,{className:`g-blue`,children:`CHANGING LIVES`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`rgba(255,255,255,.35)`,fontSize:`.78rem`,lineHeight:1.7},children:`From a small Delhi office to a PAN-India operation trusted by 800+ companies.`})]}),(0,N.jsxs)(`div`,{className:`tl-track`,style:{display:`grid`,gridTemplateColumns:`repeat(5,1fr)`,gap:0,position:`relative`},children:[!e&&(0,N.jsx)(`div`,{style:{position:`absolute`,top:20,left:`10%`,right:`10%`,height:1,background:`linear-gradient(90deg, transparent, rgba(15,155,231,.4) 20%, rgba(15,155,231,.4) 80%, transparent)`,pointerEvents:`none`}}),es.map(({year:e,title:t,desc:n,active:r})=>(0,N.jsxs)(`div`,{className:`tl-item`,children:[(0,N.jsx)(`div`,{style:{marginBottom:16,zIndex:2,position:`relative`},children:(0,N.jsx)(`div`,{className:`tl-dot ${r?`tl-dot-active`:``}`,children:(0,N.jsx)(`div`,{className:`tl-dot-inner ${r?`tl-dot-inner-active`:``}`})})}),(0,N.jsx)(`div`,{className:`ox`,style:{color:r?`#38c6f5`:`var(--blue)`,fontSize:`1rem`,fontWeight:700,marginBottom:10,letterSpacing:`.03em`},children:e}),(0,N.jsxs)(`div`,{className:`tl-card ${r?`tl-card-active`:``}`,children:[(0,N.jsx)(`div`,{className:`ox`,style:{color:r?`#fff`:`rgba(255,255,255,.8)`,fontSize:`.82rem`,fontWeight:700,lineHeight:1.3,marginBottom:8},children:t}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`rgba(255,255,255,.3)`,fontSize:`.68rem`,lineHeight:1.75,margin:0},children:n})]})]},e))]})]})}),(0,N.jsx)(`section`,{style:{background:`var(--mid)`,padding:a,borderTop:`1px solid var(--border)`},children:(0,N.jsx)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${i}`},children:(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:t?`1fr`:`1fr 1fr`,gap:e?40:80,alignItems:`center`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`label`,style:{marginBottom:16},children:`By the Numbers`}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(1.8rem,3.5vw,3.2rem)`,fontWeight:800,lineHeight:1.05,marginBottom:20,color:`var(--dark)`},children:[`RESULTS THAT`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`SPEAK FOR THEMSELVES`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`var(--muted)`,lineHeight:1.9,marginBottom:32,fontSize:`.78rem`},children:`Our consultants bring domain expertise, market intelligence, and genuine care to every engagement — delivering outcomes that create lasting impact.`}),(0,N.jsx)(`button`,{className:`btn-p`,children:`View Our Impact Report →`})]}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:14},children:[{label:`Industries Covered`,val:`28+`,icon:`◆`},{label:`Cities Across India`,val:`35+`,icon:`◎`},{label:`Avg. Days to Place`,val:`18`,icon:`◇`},{label:`Repeat Clients`,val:`91%`,icon:`◉`}].map(e=>(0,N.jsxs)(`div`,{className:`card`,style:{padding:`28px 20px`,textAlign:`center`,background:`#fff`},children:[(0,N.jsx)(`div`,{style:{color:`var(--blue)`,fontSize:`1.2rem`,marginBottom:8},children:e.icon}),(0,N.jsx)(`div`,{className:`ox g-blue`,style:{fontSize:`2.4rem`,fontWeight:800,lineHeight:1.1,marginBottom:8},children:e.val}),(0,N.jsx)(`div`,{className:`jb`,style:{color:`var(--muted)`,fontSize:`.65rem`,letterSpacing:`.06em`,lineHeight:1.5,textTransform:`uppercase`},children:e.label})]},e.label))})]})})}),(0,N.jsxs)(`section`,{className:`cta-section`,children:[(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=75')`,backgroundSize:`cover`,backgroundPosition:`center`,zIndex:0,opacity:.18}}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(110deg, rgba(19,24,31,.97) 0%, rgba(19,24,31,.88) 50%, rgba(15,155,231,.08) 100%)`,zIndex:1}}),(0,N.jsx)(`div`,{style:{position:`relative`,zIndex:10,maxWidth:1280,margin:`0 auto`,padding:e?`64px 20px`:`88px 52px`,width:`100%`},children:(0,N.jsxs)(`div`,{style:{maxWidth:640},children:[(0,N.jsxs)(`div`,{className:`label`,style:{color:`rgba(255,255,255,.5)`,marginBottom:18},children:[(0,N.jsx)(`span`,{style:{opacity:.5},children:`// `}),`Get Started Today`]}),(0,N.jsxs)(`h2`,{className:`ox`,style:{fontSize:`clamp(2.2rem,5vw,4.4rem)`,fontWeight:800,lineHeight:1,marginBottom:20,color:`#fff`,letterSpacing:`-.01em`},children:[`READY TO FIND`,(0,N.jsx)(`br`,{}),`YOUR DREAM`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`g-blue`,children:`ROLE?`})]}),(0,N.jsx)(`p`,{className:`jb`,style:{color:`rgba(255,255,255,.5)`,fontSize:`.8rem`,lineHeight:1.9,marginBottom:40,maxWidth:500},children:`Join 10,000+ professionals who built their careers through DIT Consultancy. Your next chapter starts here.`}),(0,N.jsxs)(`div`,{className:`cta-btns-about`,style:{display:`flex`,gap:12,flexWrap:`wrap`,marginBottom:36},children:[(0,N.jsxs)(`button`,{className:`btn-p`,style:{padding:`16px 36px`,fontSize:`.85rem`,boxShadow:`0 8px 32px rgba(15,155,231,.4)`},children:[`Browse Jobs Now`,(0,N.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]}),(0,N.jsx)(`button`,{className:`btn-gw`,style:{padding:`16px 36px`,fontSize:`.85rem`},children:`Talk to a Consultant`})]}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:14,flexWrap:`wrap`},children:[{icon:`📞`,text:`+91 98765 43210`},{icon:`✉️`,text:`hello@ditconsultancy.in`},{icon:`📍`,text:`New Delhi, India`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8,color:`rgba(255,255,255,.35)`,fontSize:`.68rem`,padding:`9px 16px`,border:`1px solid rgba(255,255,255,.08)`,borderRadius:3,background:`rgba(255,255,255,.03)`,cursor:`pointer`,letterSpacing:`.04em`,transition:`all .2s`},onMouseEnter:e=>{e.currentTarget.style.background=`rgba(255,255,255,.06)`,e.currentTarget.style.color=`rgba(255,255,255,.6)`},onMouseLeave:e=>{e.currentTarget.style.background=`rgba(255,255,255,.03)`,e.currentTarget.style.color=`rgba(255,255,255,.35)`},children:[e.icon,` `,e.text]},e.text))}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,marginTop:24},children:[{text:`Free for Candidates`},{text:`No Hidden Fees`},{text:`Dedicated Consultant`}].map(e=>(0,N.jsxs)(`div`,{className:`jb`,style:{display:`flex`,alignItems:`center`,gap:8,color:`rgba(255,255,255,.4)`,fontSize:`.65rem`,letterSpacing:`.06em`},children:[(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontWeight:700},children:`✓`}),e.text]},e.text))})]})})]})]})}var rs=[``,`Technology`,`Career`,`Interview Tips`,`Resume`,`Work Life`,`Other`],is=()=>{let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),c=st(),l=async()=>{try{r(!0);let e={};i&&(e.category=i),o&&(e.search=o),t((await V.get(`/blogs`,{params:e})).data.blogs)}catch(e){console.error(e)}finally{r(!1)}};return(0,S.useEffect)(()=>{l()},[i]),(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

        :root {
          --blue:       #0f9be7;
          --blue-hover: #0b87cc;
          --dark:       #13181f;
          --white:      #ffffff;
          --mid:        #f4f8fc;
          --border:     #e4edf5;
          --muted:      #7a8a98;
          --light-blue: #e8f5fd;
          --blue-glow:  rgba(15,155,231,.12);
        }

        .blog-root * { box-sizing: border-box; }

        .blog-root {
          font-family: 'JetBrains Mono', monospace;
          background: var(--white);
          min-height: 100vh;
          color: var(--dark);
        }

        /* ── HERO ─────────────────────────────── */
        .b-hero {
          background: var(--dark);
          position: relative;
          overflow: hidden;
          padding: 64px 48px 52px;
          margin-bottom: 40px;
        }

     
        /* scan line */
        .b-hero-scan {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
          animation: scanLine 4s ease-in-out infinite;
          pointer-events: none; z-index: 2;
        }
        @keyframes scanLine {
          0%  { transform: translateY(-100%); }
          100%{ transform: translateY(400%); }
        }

        .b-hero-inner {
          position: relative; z-index: 3;
          max-width: 640px; margin: 0 auto; text-align: center;
        }

        .b-hero-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--blue);
          margin-bottom: 18px;
        }
        .b-hero-label::before { content: '//'; opacity: .5; }

        .b-hero-blink {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue);
          animation: blinkDot 1.5s ease infinite;
          display: inline-block;
        }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0} }

        .b-hero h1 {
          font-family: 'Oxanium', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800; letter-spacing: -.02em;
          line-height: 1.0; color: var(--white);
          margin: 0 0 16px;
        }

        .b-hero h1 span {
          background: linear-gradient(90deg, #0f9be7 0%, #38c2ff 50%, #0f9be7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .b-hero p {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255,255,255,.45);
          font-size: .78rem; line-height: 1.8;
          margin: 0 0 32px;
        }

        /* Search inside hero */
        .b-search {
          display: flex;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
        }

        .b-search input {
          flex: 1; border: none; outline: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem; color: var(--white);
          padding: 15px 20px; background: transparent;
        }
        .b-search input::placeholder { color: rgba(255,255,255,.25); }
        .b-search input:focus { background: rgba(255,255,255,.02); }

        .b-search-btn {
          background: var(--blue); color: var(--white);
          font-family: 'Oxanium', sans-serif; font-weight: 700;
          font-size: .75rem; letter-spacing: .07em; text-transform: uppercase;
          border: none; cursor: pointer; padding: 15px 26px;
          transition: background .2s;
          display: flex; align-items: center; gap: 8px;
        }
        .b-search-btn:hover { background: var(--blue-hover); }

        /* corner decorator */
        .b-corner {
          position: absolute; width: 18px; height: 18px;
          border-color: var(--blue); border-style: solid; opacity: .4;
        }

        /* ── CATEGORY PILLS ───────────────────── */
        .b-cat-bar {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .b-cat-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .08em;
          text-transform: uppercase; font-weight: 600;
          padding: 8px 18px; border-radius: 3px;
          border: 1.5px solid var(--border);
          background: var(--white); color: var(--muted);
          cursor: pointer; transition: all .2s;
          clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%);
        }
        .b-cat-pill:hover {
          border-color: var(--blue); color: var(--blue);
          background: var(--light-blue);
        }
        .b-cat-pill.active {
          background: var(--dark); color: var(--blue);
          border-color: var(--dark);
        }

        /* ── BLOGS GRID ───────────────────────── */
        .b-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        /* ── BLOG CARD ────────────────────────── */
        .b-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden; cursor: pointer;
          transition: all .28s cubic-bezier(.23,1,.32,1);
          position: relative;
        }
        .b-card::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--blue);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s;
        }
        .b-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px var(--blue-glow);
          border-color: rgba(15,155,231,.35);
        }
        .b-card:hover::after { transform: scaleX(1); }

        .b-card-img {
          width: 100%; height: 188px;
          object-fit: cover; display: block;
        }

        .b-card-placeholder {
          width: 100%; height: 188px;
          background: var(--dark);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .b-card-placeholder::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
          background-size: 40px 40px; opacity: .05;
        }
        .b-card-placeholder span {
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--blue);
          opacity: .7; position: relative; z-index: 1;
        }

        .b-card-body { padding: 22px 20px 18px; }

        .b-card-cat {
          display: inline-flex; align-items: center;
          background: var(--light-blue); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; letter-spacing: .1em;
          text-transform: uppercase; font-weight: 600;
          padding: 3px 11px; border-radius: 2px;
          border: 1px solid rgba(15,155,231,.2);
          margin-bottom: 12px;
        }

        .b-card-title {
          font-family: 'Oxanium', sans-serif;
          font-size: .95rem; font-weight: 700;
          color: var(--dark); letter-spacing: .01em;
          line-height: 1.35; margin: 0 0 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color .18s;
        }
        .b-card:hover .b-card-title { color: var(--blue); }

        .b-card-excerpt {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; color: var(--muted);
          line-height: 1.85; margin: 0 0 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3; -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .b-card-footer {
          display: flex; justify-content: space-between;
          align-items: center; padding-top: 14px;
          border-top: 1px solid var(--border);
        }

        .b-author {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Oxanium', sans-serif;
          font-size: .75rem; font-weight: 700; color: var(--dark);
        }
        .b-author-dot {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--dark); color: var(--blue);
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid rgba(15,155,231,.3);
        }

        .b-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem; color: var(--muted);
          letter-spacing: .05em;
        }

        /* ── STATES ───────────────────────────── */
        .b-state {
          text-align: center; padding: 80px 20px;
        }
        .b-state-icon { font-size: 44px; margin-bottom: 14px; }
        .b-state-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: .8rem; color: var(--muted);
          letter-spacing: .08em;
        }
        .b-state-text::before { content: '// '; color: var(--blue); }

        .b-loading {
          display: flex; justify-content: center;
          gap: 6px; padding: 80px 20px;
        }
        .b-loading span {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--blue);
          animation: ldot 1.2s ease-in-out infinite;
        }
        .b-loading span:nth-child(2) { animation-delay: .2s; }
        .b-loading span:nth-child(3) { animation-delay: .4s; }
        @keyframes ldot {
          0%,80%,100%{ transform:scale(.6); opacity:.35; }
          40%{ transform:scale(1); opacity:1; }
        }

        /* ── SECTION LABEL ────────────────────── */
        .b-section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem; letter-spacing: .14em;
          text-transform: uppercase; color: var(--blue);
          margin-bottom: 24px;
        }
        .b-section-label::before { content: '//'; opacity: .5; }

        @media (max-width: 640px) {
          .b-hero { padding: 48px 20px 40px; }
          .b-search { flex-direction: column; }
        }
      `}),(0,N.jsx)(`div`,{className:`blog-root`,children:(0,N.jsxs)(`div`,{style:{maxWidth:1180,margin:`0 auto`,padding:`32px 20px`},children:[(0,N.jsx)(`div`,{className:`b-hero`,children:(0,N.jsxs)(`div`,{className:`b-hero-inner`,children:[(0,N.jsxs)(`div`,{className:`b-hero-label`,children:[(0,N.jsx)(`span`,{className:`b-hero-blink`}),`Insights & Articles`]}),(0,N.jsxs)(`h1`,{children:[`Our `,(0,N.jsx)(`span`,{children:`Blog`})]}),(0,N.jsx)(`p`,{children:`Career tips, interview advice & much more`}),(0,N.jsxs)(`div`,{className:`b-search`,children:[(0,N.jsx)(`input`,{type:`text`,placeholder:`Search articles…`,value:o,onChange:e=>s(e.target.value),onKeyDown:e=>e.key===`Enter`&&l()}),(0,N.jsxs)(`button`,{onClick:l,className:`b-search-btn`,children:[(0,N.jsx)(`svg`,{width:`13`,height:`13`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),`Search`]})]})]})}),(0,N.jsx)(`div`,{className:`b-section-label`,children:`Filter by category`}),(0,N.jsx)(`div`,{className:`b-cat-bar`,children:rs.map(e=>(0,N.jsx)(`button`,{onClick:()=>a(e),className:`b-cat-pill ${i===e?`active`:``}`,children:e===``?`All Posts`:e},e))}),n&&(0,N.jsxs)(`div`,{className:`b-loading`,children:[(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{})]}),!n&&e.length===0&&(0,N.jsxs)(`div`,{className:`b-state`,children:[(0,N.jsx)(`div`,{className:`b-state-icon`,children:`📭`}),(0,N.jsx)(`p`,{className:`b-state-text`,children:`no articles found`})]}),!n&&e.length>0&&(0,N.jsx)(`div`,{className:`b-grid`,children:e.map(e=>(0,N.jsxs)(`div`,{className:`b-card`,onClick:()=>c(`/blogs/${e.id}`),children:[e.image?(0,N.jsx)(`img`,{src:e.image,alt:e.title,className:`b-card-img`}):(0,N.jsx)(`div`,{className:`b-card-placeholder`,children:(0,N.jsx)(`span`,{children:e.category||`article`})}),(0,N.jsxs)(`div`,{className:`b-card-body`,children:[(0,N.jsx)(`span`,{className:`b-card-cat`,children:e.category}),(0,N.jsx)(`h2`,{className:`b-card-title`,children:e.title}),e.excerpt&&(0,N.jsx)(`p`,{className:`b-card-excerpt`,children:e.excerpt}),(0,N.jsxs)(`div`,{className:`b-card-footer`,children:[(0,N.jsxs)(`div`,{className:`b-author`,children:[(0,N.jsx)(`div`,{className:`b-author-dot`,children:e.author?.charAt(0)?.toUpperCase()||`A`}),e.author]}),(0,N.jsx)(`span`,{className:`b-date`,children:new Date(e.createdAt).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})})]})]})]},e.id))})]})})]})},as=()=>{let{id:e}=lt(),t=st(),[n,r]=(0,S.useState)(null),[i,a]=(0,S.useState)(!0);return(0,S.useEffect)(()=>{(async()=>{try{r((await V.get(`/blogs/${e}`)).data.blog)}catch(e){console.error(e)}finally{a(!1)}})()},[e]),(0,S.useEffect)(()=>{window.scrollTo(0,0)},[]),i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:os}),(0,N.jsx)(`div`,{className:`bd-root`,children:(0,N.jsxs)(`div`,{className:`bd-loading`,children:[(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{})]})})]}):n?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:os}),(0,N.jsx)(`div`,{className:`bd-root`,children:(0,N.jsxs)(`div`,{className:`bd-container`,children:[(0,N.jsxs)(`button`,{className:`bd-back-btn`,onClick:()=>t(`/blogs`),children:[(0,N.jsx)(`svg`,{width:`12`,height:`12`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M15 19l-7-7 7-7`})}),`Back to Blogs`]}),(0,N.jsxs)(`div`,{className:`bd-card`,children:[n.image?(0,N.jsx)(`img`,{src:n.image,alt:n.title,className:`bd-img`}):(0,N.jsxs)(`div`,{className:`bd-img-placeholder`,children:[(0,N.jsx)(`div`,{className:`bd-img-scan`}),(0,N.jsx)(`div`,{className:`bd-corner`,style:{top:16,left:16,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:0,borderBottomWidth:0}}),(0,N.jsx)(`div`,{className:`bd-corner`,style:{top:16,right:16,borderTopWidth:2,borderRightWidth:2,borderLeftWidth:0,borderBottomWidth:0}}),(0,N.jsx)(`span`,{children:n.category||`article`})]}),(0,N.jsxs)(`div`,{className:`bd-body`,children:[(0,N.jsxs)(`div`,{className:`bd-meta-top`,children:[(0,N.jsx)(`span`,{className:`bd-cat`,children:n.category}),(0,N.jsx)(`span`,{className:`bd-date`,children:new Date(n.createdAt).toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`})})]}),(0,N.jsx)(`h1`,{className:`bd-title`,children:n.title}),(0,N.jsxs)(`div`,{className:`bd-author-row`,children:[(0,N.jsx)(`div`,{className:`bd-avatar`,children:n.author?.charAt(0)?.toUpperCase()||`A`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`bd-author-name`,children:n.author}),(0,N.jsx)(`p`,{className:`bd-author-label`,children:`// author`})]})]}),(0,N.jsx)(`div`,{className:`bd-divider`}),(0,N.jsx)(`div`,{className:`bd-content`,children:n.content})]})]}),(0,N.jsxs)(`div`,{className:`bd-footer-nav`,children:[(0,N.jsxs)(`button`,{className:`bd-back-btn`,onClick:()=>t(`/blogs`),children:[(0,N.jsx)(`svg`,{width:`12`,height:`12`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2.5,d:`M15 19l-7-7 7-7`})}),`Back to Blogs`]}),(0,N.jsx)(`span`,{className:`bd-end-label`,children:`// end_of_article`})]})]})})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:os}),(0,N.jsx)(`div`,{className:`bd-root`,children:(0,N.jsx)(`div`,{className:`bd-container`,children:(0,N.jsxs)(`div`,{className:`bd-state`,children:[(0,N.jsx)(`div`,{className:`bd-state-icon`,children:`📭`}),(0,N.jsx)(`p`,{className:`bd-state-text`,children:`article not found`}),(0,N.jsx)(`button`,{className:`bd-back-btn`,onClick:()=>t(`/blogs`),children:`← Back to Blogs`})]})})})]})},os=`
  @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');

  :root {
    --blue:       #0f9be7;
    --blue-hover: #0b87cc;
    --dark:       #13181f;
    --white:      #ffffff;
    --mid:        #f4f8fc;
    --border:     #e4edf5;
    --muted:      #7a8a98;
    --light-blue: #e8f5fd;
    --blue-glow:  rgba(15,155,231,.12);
  }

  .bd-root * { box-sizing: border-box; }

  .bd-root {
    font-family: 'JetBrains Mono', monospace;
    background: var(--mid);
    min-height: 100vh;
    color: var(--dark);
  }

  .bd-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 40px 20px 72px;
  }

  /* ── BACK BUTTON ── */
  .bd-back-btn {
    display: inline-flex; align-items: center; gap: 7px;
    font-family: 'JetBrains Mono', monospace;
    font-size: .68rem; font-weight: 600;
    letter-spacing: .06em; text-transform: uppercase;
    color: var(--blue); background: transparent;
    border: 1.5px solid rgba(15,155,231,.3);
    border-radius: 3px; padding: 9px 18px;
    cursor: pointer; margin-bottom: 28px;
    transition: background .2s, border-color .2s;
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
  }
  .bd-back-btn:hover {
    background: var(--light-blue);
    border-color: var(--blue);
  }

  /* ── ARTICLE CARD ── */
  .bd-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }
  .bd-card::after {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 3px; background: var(--blue);
  }

  .bd-img {
    width: 100%; height: 320px;
    object-fit: cover; display: block;
  }

  /* placeholder */
  .bd-img-placeholder {
    width: 100%; height: 220px;
    background: var(--dark);
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .bd-img-placeholder::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(15,155,231,1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,155,231,1) 1px, transparent 1px);
    background-size: 60px 60px; opacity: .04;
  }
  .bd-img-scan {
    position: absolute; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, rgba(15,155,231,.55), transparent);
    animation: scanLine 4s ease-in-out infinite;
    pointer-events: none; z-index: 2;
  }
  @keyframes scanLine {
    0%  { transform: translateY(-100%); }
    100%{ transform: translateY(400%); }
  }
  .bd-img-placeholder span {
    font-family: 'JetBrains Mono', monospace;
    font-size: .65rem; letter-spacing: .14em;
    text-transform: uppercase; color: var(--blue);
    opacity: .7; position: relative; z-index: 3;
  }
  .bd-corner {
    position: absolute; width: 16px; height: 16px;
    border-color: var(--blue); border-style: solid; opacity: .4;
    z-index: 3;
  }

  /* ── BODY ── */
  .bd-body { padding: 40px 44px 52px; }

  .bd-meta-top {
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 10px;
    margin-bottom: 20px;
  }

  .bd-cat {
    display: inline-flex; align-items: center;
    background: var(--light-blue); color: var(--blue);
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .1em;
    text-transform: uppercase; font-weight: 600;
    padding: 3px 12px; border-radius: 2px;
    border: 1px solid rgba(15,155,231,.2);
  }

  .bd-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: .63rem; color: var(--muted);
    letter-spacing: .05em;
  }

  .bd-title {
    font-family: 'Oxanium', sans-serif;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 800; letter-spacing: -.02em;
    line-height: 1.1; color: var(--dark);
    margin: 0 0 28px;
  }

  /* ── AUTHOR ── */
  .bd-author-row {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 28px;
  }

  .bd-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--dark); color: var(--blue);
    font-family: 'JetBrains Mono', monospace;
    font-size: .8rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    border: 2px solid rgba(15,155,231,.3);
  }

  .bd-author-name {
    font-family: 'Oxanium', sans-serif;
    font-size: .85rem; font-weight: 700;
    color: var(--dark); margin: 0 0 3px;
  }

  .bd-author-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; letter-spacing: .1em;
    color: var(--blue); margin: 0;
  }

  /* ── DIVIDER ── */
  .bd-divider {
    height: 1px;
    background: linear-gradient(to right, rgba(15,155,231,.4), var(--border), transparent);
    margin-bottom: 36px;
  }

  /* ── CONTENT ── */
  .bd-content {
    font-family: 'JetBrains Mono', monospace;
    font-size: .82rem; line-height: 2.0;
    color: #2a3340; white-space: pre-line;
  }

  /* ── FOOTER NAV ── */
  .bd-footer-nav {
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 12px;
    margin-top: 36px;
  }
  .bd-footer-nav .bd-back-btn { margin-bottom: 0; }

  .bd-end-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .6rem; color: var(--muted);
    letter-spacing: .1em;
  }

  /* ── LOADING ── */
  .bd-loading {
    display: flex; justify-content: center;
    gap: 6px; padding: 120px 20px;
  }
  .bd-loading span {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--blue);
    animation: ldot 1.2s ease-in-out infinite;
  }
  .bd-loading span:nth-child(2) { animation-delay: .2s; }
  .bd-loading span:nth-child(3) { animation-delay: .4s; }
  @keyframes ldot {
    0%,80%,100%{ transform:scale(.6); opacity:.35; }
    40%{ transform:scale(1); opacity:1; }
  }

  /* ── STATE ── */
  .bd-state {
    text-align: center; padding: 100px 20px;
  }
  .bd-state-icon { font-size: 44px; margin-bottom: 14px; }
  .bd-state-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: .8rem; color: var(--muted);
    letter-spacing: .08em; margin-bottom: 28px;
  }
  .bd-state-text::before { content: '// '; color: var(--blue); }

  @media (max-width: 600px) {
    .bd-body { padding: 28px 20px 36px; }
    .bd-title { font-size: 1.5rem; }
  }
`;function ss(){let[e,t]=(0,S.useState)(typeof window<`u`?window.innerWidth:1280);return(0,S.useEffect)(()=>{let e=()=>t(window.innerWidth);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),{isMobile:e<640,isTablet:e<1024,w:e}}var cs=[{heading:`Company`,links:[{label:`About Us`,to:`/about`},{label:`Our Team`,to:`/about`},{label:`Careers at DIT`,to:`/jobs`},{label:`Blogs`,to:`/blogs`}]},{heading:`Services`,links:[{label:`Executive Search`,to:`/`},{label:`Staffing Solutions`,to:`/`},{label:`Career Counselling`,to:`/`},{label:`Skill Development`,to:`/`}]},{heading:`Contact`,links:[{label:`info@ditconsultancy.in`,to:`mailto:info@ditconsultancy.in`,external:!0},{label:`+91  97084 55757`,to:`tel:+91 97084 55757`,external:!0},{label:`15Th Floor, GALAXY DIAMOND PLAZA, SECTOR 4 Greater Noida Line Rd, Greater Noida, Noida, Uttar Pradesh 201016`,to:`https://maps.google.com/?q=15Th+Floor,+GALAXY+DIAMOND+PLAZA,+SECTOR+4+Greater+Noida+Line+Rd,+Greater+Noida,+Noida,+Uttar+Pradesh+201016+(Debox+Technology)`,external:!0},{label:`Mon–Sat 9am–7pm`,to:`/contact`}]}];function ls(){let{isMobile:e}=ss();return(0,N.jsxs)(`footer`,{style:{background:`var(--dark)`,borderTop:`1px solid rgba(255,255,255,.06)`,padding:e?`52px 0 0`:`80px 0 0`,fontFamily:`'JetBrains Mono', monospace`},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        :root {
          --blue: #0f9be7;
          --dark: #13181f;
          --white: #ffffff;
          --border: #e4edf5;
          --muted: #7a8a98;
        }
        .foot-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
        }
        @media (max-width: 1023px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 639px) {
          .foot-grid { grid-template-columns: 1fr !important; }
        }
        .social-icon {
          width: 32px; height: 32px;
          background: rgba(15,155,231,.1);
          border: 1px solid rgba(15,155,231,.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .18s; border-radius: 4px;
          text-decoration: none;
        }
        .social-icon:hover {
          background: var(--blue);
          border-color: var(--blue);
        }
        .foot-link {
          color: rgba(255,255,255,.35);
          font-size: .72rem;
          text-decoration: none;
          transition: color .15s;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
        }
        .foot-link:hover { color: var(--blue); }
        .foot-bottom-link {
          color: rgba(255,255,255,.2);
          font-size: .65rem;
          text-decoration: none;
          transition: color .15s;
          letter-spacing: .04em;
          font-family: 'JetBrains Mono', monospace;
        }
        .foot-bottom-link:hover { color: var(--blue); }
      `}),(0,N.jsxs)(`div`,{style:{maxWidth:1280,margin:`0 auto`,padding:`0 ${e?`20px`:`52px`}`},children:[(0,N.jsxs)(`div`,{className:`foot-grid`,style:{gap:e?28:48,paddingBottom:e?40:60},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(M,{to:`/`,style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:18,textDecoration:`none`,marginTop:-15,marginLeft:-18},children:(0,N.jsx)(`img`,{src:`/footer-logo.png`,alt:`footer-logo`,className:`h-20 w-auto object-cover`})}),(0,N.jsx)(`p`,{style:{color:`rgba(255,255,255,.3)`,fontSize:`.72rem`,lineHeight:1.9,maxWidth:200,marginBottom:20,margin:`0 0 20px`},children:`India's most trusted job consultancy. Connecting talent with opportunity since 2009.`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:20},children:[(0,N.jsx)(`a`,{href:`https://linkedin.com`,target:`_blank`,rel:`noopener noreferrer`,className:`social-icon`,"aria-label":`LinkedIn`,children:(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontSize:`.6rem`,fontWeight:700,fontFamily:`'JetBrains Mono', monospace`},children:`in`})}),(0,N.jsx)(`a`,{href:`https://twitter.com`,target:`_blank`,rel:`noopener noreferrer`,className:`social-icon`,"aria-label":`Twitter`,children:(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontSize:`.6rem`,fontWeight:700,fontFamily:`'JetBrains Mono', monospace`},children:`tw`})}),(0,N.jsx)(`a`,{href:`https://facebook.com`,target:`_blank`,rel:`noopener noreferrer`,className:`social-icon`,"aria-label":`Facebook`,children:(0,N.jsx)(`span`,{style:{color:`var(--blue)`,fontSize:`.6rem`,fontWeight:700,fontFamily:`'JetBrains Mono', monospace`},children:`fb`})})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginTop:24},children:[(0,N.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:`#22c55e`,display:`block`,boxShadow:`0 0 6px rgba(34,197,94,.6)`}}),(0,N.jsx)(`span`,{style:{color:`rgba(255,255,255,.2)`,fontSize:`.62rem`,letterSpacing:`.08em`},children:`All systems operational`})]})]}),cs.map(e=>(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{color:`rgba(255,255,255,.25)`,fontWeight:600,fontSize:`.6rem`,letterSpacing:`.14em`,textTransform:`uppercase`,marginBottom:18,fontFamily:`'JetBrains Mono', monospace`},children:e.heading}),(0,N.jsx)(`ul`,{style:{listStyle:`none`,display:`flex`,flexDirection:`column`,gap:12,padding:0,margin:0},children:e.links.map(({label:e,to:t,external:n})=>(0,N.jsx)(`li`,{children:n?(0,N.jsxs)(`a`,{href:t,className:`foot-link`,target:t.startsWith(`http`)?`_blank`:void 0,rel:`noopener noreferrer`,children:[(0,N.jsx)(`span`,{style:{color:`rgba(15,155,231,.3)`,fontSize:`.55rem`},children:`→`}),e]}):(0,N.jsxs)(M,{to:t,className:`foot-link`,children:[(0,N.jsx)(`span`,{style:{color:`rgba(15,155,231,.3)`,fontSize:`.55rem`},children:`→`}),e]})},e))})]},e.heading))]}),(0,N.jsxs)(`div`,{style:{borderTop:`1px solid rgba(255,255,255,.06)`,borderBottom:`1px solid rgba(255,255,255,.06)`,padding:e?`24px 0`:`28px 0`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:16},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontFamily:`'Oxanium', sans-serif`,color:`#fff`,fontWeight:700,fontSize:`.82rem`,letterSpacing:`.04em`,marginBottom:4},children:`STAY IN THE LOOP`}),(0,N.jsx)(`div`,{style:{color:`rgba(255,255,255,.3)`,fontSize:`.65rem`,letterSpacing:`.04em`},children:`// Get weekly job alerts and hiring insights`})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:0,overflow:`hidden`,border:`1px solid rgba(15,155,231,.25)`,borderRadius:4},children:[(0,N.jsx)(`input`,{type:`email`,placeholder:`your@email.com`,style:{background:`rgba(15,155,231,.06)`,border:`none`,outline:`none`,color:`#fff`,padding:`10px 18px`,fontSize:`.7rem`,fontFamily:`'JetBrains Mono', monospace`,width:e?180:240}}),(0,N.jsx)(`button`,{style:{background:`var(--blue)`,color:`#fff`,border:`none`,padding:`10px 20px`,cursor:`pointer`,fontFamily:`'Oxanium', sans-serif`,fontWeight:700,fontSize:`.7rem`,letterSpacing:`.08em`,textTransform:`uppercase`,transition:`background .18s`},onMouseEnter:e=>e.currentTarget.style.background=`#0b87cc`,onMouseLeave:e=>e.currentTarget.style.background=`var(--blue)`,children:`Subscribe`})]})]}),(0,N.jsxs)(`div`,{style:{padding:`20px 0`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:10},children:[(0,N.jsx)(`span`,{style:{color:`rgba(255,255,255,.2)`,fontSize:`.65rem`,letterSpacing:`.04em`,fontFamily:`'JetBrains Mono', monospace`},children:`// © 2026 DIT Job Consultancy. All rights reserved.`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:20,flexWrap:`wrap`},children:[(0,N.jsx)(M,{to:`#`,className:`foot-bottom-link`,children:`Privacy Policy`}),(0,N.jsx)(M,{to:`#`,className:`foot-bottom-link`,children:`Terms of Use`}),(0,N.jsx)(M,{to:`#`,className:`foot-bottom-link`,children:`Sitemap`})]})]})]})]})}function us(){return(0,N.jsxs)(`div`,{className:`min-h-screen bg-gray-50`,children:[(0,N.jsx)(Tr,{}),(0,N.jsxs)(It,{children:[(0,N.jsx)(Pt,{path:`/jobs`,element:(0,N.jsx)(go,{})}),(0,N.jsx)(Pt,{path:`/login`,element:(0,N.jsx)(_o,{})}),(0,N.jsx)(Pt,{path:`/register`,element:(0,N.jsx)(vo,{})}),(0,N.jsx)(Pt,{path:`/jobs/:id`,element:(0,N.jsx)(Do,{})}),(0,N.jsx)(Pt,{path:`/`,element:(0,N.jsx)(Go,{})}),(0,N.jsx)(Pt,{path:`/contact`,element:(0,N.jsx)(Yo,{})}),(0,N.jsx)(Pt,{path:`/blogs`,element:(0,N.jsx)(is,{})}),(0,N.jsx)(Pt,{path:`/blogs/:id`,element:(0,N.jsx)(as,{})}),(0,N.jsx)(Pt,{path:`/about`,element:(0,N.jsx)(ns,{})}),(0,N.jsx)(Pt,{path:`/employer-dashboard`,element:(0,N.jsx)(zo,{role:`employer`,children:(0,N.jsx)(jo,{})})}),(0,N.jsx)(Pt,{path:`/my-applications`,element:(0,N.jsx)(zo,{role:`jobseeker`,children:(0,N.jsx)(Ro,{})})})]}),(0,N.jsx)(ls,{})]})}(0,Gn.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(S.StrictMode,{children:(0,N.jsx)(Cn,{children:(0,N.jsx)(qn,{children:(0,N.jsx)(us,{})})})}));