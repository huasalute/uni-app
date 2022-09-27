"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};var n,e=function(){return e=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},e.apply(this,arguments)};function r(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function i(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))}var u=[],a=function(){function t(t){this.active=!0,this.effects=[],this.cleanups=[],this.vm=t}return t.prototype.run=function(t){if(this.active)try{return this.on(),t()}finally{this.off()}},t.prototype.on=function(){this.active&&(u.push(this),n=this)},t.prototype.off=function(){this.active&&(u.pop(),n=u[u.length-1])},t.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach((function(t){return t.stop()})),this.cleanups.forEach((function(t){return t()})),this.active=!1)},t}(),f=function(e){function r(t){void 0===t&&(t=!1);var r,o=void 0;return function(t){var n=_;_=!1;try{t()}finally{_=n}}((function(){o=T(h())})),r=e.call(this,o)||this,t||function(t,e){var r;if((e=e||n)&&e.active)return void e.effects.push(t);var o=null===(r=x())||void 0===r?void 0:r.proxy;o&&o.$on("hook:destroyed",(function(){return t.stop()}))}(r),r}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(r,e),r}(a);function c(){return n}function s(){var t,n;return(null===(t=c())||void 0===t?void 0:t.vm)||(null===(n=x())||void 0===n?void 0:n.proxy)}var l=void 0;try{var p=require("vue");p&&y(p)?l=p:p&&"default"in p&&y(p.default)&&(l=p.default)}catch(t){}var v=null,d=null,_=!0;function y(t){return t&&B(t)&&"Vue"===t.name}function h(){return v}function b(){return v||l}function g(t){if(_){var n=d;null==n||n.scope.off(),null==(d=t)||d.scope.on()}}function x(){return d}var m=new WeakMap;function w(t){if(m.has(t))return m.get(t);var n={proxy:t,update:t.$forceUpdate,type:t.$options,uid:t._uid,emit:t.$emit.bind(t),parent:null,root:null};!function(t){if(!t.scope){var n=new a(t.proxy);t.scope=n,t.proxy.$on("hook:destroyed",(function(){return n.stop()}))}t.scope}(n);return["data","props","attrs","refs","vnode","slots"].forEach((function(e){S(n,e,{get:function(){return t["$".concat(e)]}})})),S(n,"isMounted",{get:function(){return t._isMounted}}),S(n,"isUnmounted",{get:function(){return t._isDestroyed}}),S(n,"isDeactivated",{get:function(){return t._inactive}}),S(n,"emitted",{get:function(){return t._events}}),m.set(t,n),t.$parent&&(n.parent=w(t.$parent)),t.$root&&(n.root=w(t.$root)),n}function $(t){return"function"==typeof t&&/native code/.test(t.toString())}var j="undefined"!=typeof Symbol&&$(Symbol)&&"undefined"!=typeof Reflect&&$(Reflect.ownKeys),O=function(t){return t};function S(t,n,e){var r=e.get,o=e.set;Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:r||O,set:o||O})}function k(t,n,e,r){Object.defineProperty(t,n,{value:e,enumerable:!!r,writable:!0,configurable:!0})}function E(t,n){return Object.hasOwnProperty.call(t,n)}function R(t){return Array.isArray(t)}var C,M=Object.prototype.toString,P=function(t){return M.call(t)};function D(t){var n=parseFloat(String(t));return n>=0&&Math.floor(n)===n&&isFinite(t)&&n<=4294967295}function U(t){return null!==t&&"object"==typeof t}function A(t){return"[object Object]"===function(t){return Object.prototype.toString.call(t)}(t)}function B(t){return"function"==typeof t}function W(t,n){return n=n||x()}function T(t,n){void 0===n&&(n={});var e=t.config.silent;t.config.silent=!0;var r=new t(n);return t.config.silent=e,r}function V(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(t.$scopedSlots[n])return t.$scopedSlots[n].apply(t,e)}}function z(t){return j?Symbol.for(t):t}var F=z("composition-api.preFlushQueue"),K=z("composition-api.postFlushQueue"),I="composition-api.refKey",Q=new WeakMap,q=new WeakMap,L=new WeakMap;function G(t,n,e){var r=h().util;r.warn;var o=r.defineReactive,i=t.__ob__;function u(){i&&U(e)&&!E(e,"__ob__")&&ft(e)}if(R(t)){if(D(n))return t.length=Math.max(t.length,n),t.splice(n,1,e),u(),e;if("length"===n&&e!==t.length)return t.length=e,null==i||i.dep.notify(),e}return n in t&&!(n in Object.prototype)?(t[n]=e,u(),e):t._isVue||i&&i.vmCount?e:i?(o(i.value,n,e),ut(t,n,e),u(),i.dep.notify(),e):(t[n]=e,e)}var H=!1;function J(t){H=t}var N=function(t){S(this,"value",{get:t.get,set:t.set})};function X(t,n,e){void 0===n&&(n=!1),void 0===e&&(e=!1);var r=new N(t);e&&(r.effect=!0);var o=Object.seal(r);return n&&L.set(o,!0),o}function Y(t){var n;if(Z(t))return t;var e=lt(((n={})[I]=t,n));return X({get:function(){return e[I]},set:function(t){return e[I]=t}})}function Z(t){return t instanceof N}function tt(t){return Z(t)?t.value:t}function nt(t){if(!A(t))return t;var n={};for(var e in t)n[e]=et(t,e);return n}function et(t,n){n in t||G(t,n,void 0);var e=t[n];return Z(e)?e:X({get:function(){return t[n]},set:function(e){return t[n]=e}})}function rt(t){var n;return Boolean(t&&E(t,"__ob__")&&"object"==typeof t.__ob__&&(null===(n=t.__ob__)||void 0===n?void 0:n.__v_skip))}function ot(t){var n;return Boolean(t&&E(t,"__ob__")&&"object"==typeof t.__ob__&&!(null===(n=t.__ob__)||void 0===n?void 0:n.__v_skip))}function it(t){if(!(!A(t)||rt(t)||R(t)||Z(t)||(n=t,e=h(),e&&n instanceof e)||Q.has(t))){var n,e;Q.set(t,!0);for(var r=Object.keys(t),o=0;o<r.length;o++)ut(t,r[o])}}function ut(t,n,e){if("__ob__"!==n&&!rt(t[n])){var r,o,i=Object.getOwnPropertyDescriptor(t,n);if(i){if(!1===i.configurable)return;r=i.get,o=i.set,r&&!o||2!==arguments.length||(e=t[n])}it(e),S(t,n,{get:function(){var o=r?r.call(t):e;return n!==I&&Z(o)?o.value:o},set:function(i){r&&!o||(n!==I&&Z(e)&&!Z(i)?e.value=i:o?(o.call(t,i),e=i):e=i,it(i))}})}}function at(t){var n,e=b();e.observable?n=e.observable(t):n=T(e,{data:{$$state:t}})._data.$$state;return E(n,"__ob__")||ft(n),n}function ft(t,n){var e,o;if(void 0===n&&(n=new Set),!n.has(t)&&!E(t,"__ob__")&&Object.isExtensible(t)){k(t,"__ob__",function(t){void 0===t&&(t={});return{value:t,dep:{notify:O,depend:O,addSub:O,removeSub:O}}}(t)),n.add(t);try{for(var i=r(Object.keys(t)),u=i.next();!u.done;u=i.next()){var a=t[u.value];(A(a)||R(a))&&!rt(a)&&Object.isExtensible(a)&&ft(a,n)}}catch(t){e={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}}}function ct(){return at({}).__ob__}function st(t){var n,e;if(!U(t))return t;if(!A(t)&&!R(t)||rt(t)||!Object.isExtensible(t))return t;var o=at(R(t)?[]:{}),i=o.__ob__,u=function(n){var e,r,u=t[n],a=Object.getOwnPropertyDescriptor(t,n);if(a){if(!1===a.configurable)return"continue";e=a.get,r=a.set}S(o,n,{get:function(){var t;return null===(t=i.dep)||void 0===t||t.depend(),u},set:function(n){var o;e&&!r||(H||u!==n)&&(r?r.call(t,n):u=n,null===(o=i.dep)||void 0===o||o.notify())}})};try{for(var a=r(Object.keys(t)),f=a.next();!f.done;f=a.next()){u(f.value)}}catch(t){n={error:t}}finally{try{f&&!f.done&&(e=a.return)&&e.call(a)}finally{if(n)throw n.error}}return o}function lt(t){if(!U(t))return t;if(!A(t)&&!R(t)||rt(t)||!Object.isExtensible(t))return t;var n=at(t);return it(n),n}function pt(t){return function(n,e){var r,u=W("on".concat((r=t)[0].toUpperCase()+r.slice(1)),e);return u&&function(t,n,e,r){var u=n.proxy.$options,a=t.config.optionMergeStrategies[e],f=function(t,n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var u=x();g(t);try{return n.apply(void 0,i([],o(e),!1))}finally{g(u)}}}(n,r);return u[e]=a(u[e],f),f}(h(),u,t,n)}}var vt,dt=pt("beforeMount"),_t=pt("mounted"),yt=pt("beforeUpdate"),ht=pt("updated"),bt=pt("beforeDestroy"),gt=pt("destroyed"),xt=pt("errorCaptured"),mt=pt("activated"),wt=pt("deactivated"),$t=pt("serverPrefetch");function jt(){kt(this,F)}function Ot(){kt(this,K)}function St(){var t=s();return t?function(t){return void 0!==t[F]}(t)||function(t){t[F]=[],t[K]=[],t.$on("hook:beforeUpdate",jt),t.$on("hook:updated",Ot)}(t):(vt||(vt=T(h())),t=vt),t}function kt(t,n){for(var e=t[n],r=0;r<e.length;r++)e[r]();e.length=0}function Et(t,n,e){var r=function(){t.$nextTick((function(){t[F].length&&kt(t,F),t[K].length&&kt(t,K)}))};switch(e){case"pre":r(),t[F].push(n);break;case"post":r(),t[K].push(n);break;default:!function(t,n){if(!t)throw new Error("[vue-composition-api] ".concat(n))}(!1,'flush must be one of ["post", "pre", "sync"], but got '.concat(e))}}function Rt(t,n){var e=t.teardown;t.teardown=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];e.apply(t,r),n()}}function Ct(t,n,e,r){var u,a,f=r.flush,c="sync"===f,s=function(t){a=function(){try{t()}catch(t){!function(t,n,e){if("undefined"==typeof window||"undefined"==typeof console)throw t;console.error(t)}(t)}}},l=function(){a&&(a(),a=null)},p=function(n){return c||t===vt?n:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return Et(t,(function(){n.apply(void 0,i([],o(e),!1))}),f)}};if(null===e){var v=!1,d=function(t,n,e,r){var o=t._watchers.length;return t.$watch(n,e,{immediate:r.immediateInvokeCallback,deep:r.deep,lazy:r.noRun,sync:r.sync,before:r.before}),t._watchers[o]}(t,(function(){if(!v)try{v=!0,n(s)}finally{v=!1}}),O,{deep:r.deep||!1,sync:c,before:l});Rt(d,l),d.lazy=!1;var _=d.get.bind(d);return d.get=p(_),function(){d.teardown()}}var y,h=r.deep,b=!1;if(Z(n)?y=function(){return n.value}:ot(n)?(y=function(){return n},h=!0):R(n)?(b=!0,y=function(){return n.map((function(t){return Z(t)?t.value:ot(t)?Pt(t):B(t)?t():O}))}):y=B(n)?n:O,h){var g=y;y=function(){return Pt(g())}}var x=function(t,n){if(h||!b||!t.every((function(t,e){return r=t,o=n[e],r===o?0!==r||1/r==1/o:r!=r&&o!=o;var r,o})))return l(),e(t,n,s)},m=p(x);if(r.immediate){var w=m,$=function(t,n){return $=w,x(t,R(t)?[]:n)};m=function(t,n){return $(t,n)}}var j=t.$watch(y,m,{immediate:r.immediate,deep:h,sync:c}),S=t._watchers[t._watchers.length-1];return ot(S.value)&&(null===(u=S.value.__ob__)||void 0===u?void 0:u.dep)&&h&&S.value.__ob__.dep.addSub({update:function(){S.run()}}),Rt(S,l),function(){j()}}function Mt(t,n){var r=function(t){return e({flush:"pre"},t)}(n);return Ct(St(),t,null,r)}function Pt(t,n){if(void 0===n&&(n=new Set),!U(t)||n.has(t)||q.has(t))return t;if(n.add(t),Z(t))Pt(t.value,n);else if(R(t))for(var e=0;e<t.length;e++)Pt(t[e],n);else if("[object Set]"===P(t)||function(t){return"[object Map]"===P(t)}(t))t.forEach((function(t){Pt(t,n)}));else if(A(t))for(var r in t)Pt(t[r],n);return t}var Dt={};function Ut(t,n){for(var e=n;e;){if(e._provided&&E(e._provided,t))return e._provided[t];e=e.$parent}return Dt}var At={},Bt=function(t){var n;void 0===t&&(t="$style");var e=x();if(!e)return At;var r=null===(n=e.proxy)||void 0===n?void 0:n[t];return r||At},Wt=Bt;var Tt;function Vt(){return x().setupContext}var zt={set:function(t,n,e){(t.__composition_api_state__=t.__composition_api_state__||{})[n]=e},get:function(t,n){return(t.__composition_api_state__||{})[n]}};function Ft(t){var n=zt.get(t,"rawBindings")||{};if(n&&Object.keys(n).length){for(var e=t.$refs,r=zt.get(t,"refs")||[],o=0;o<r.length;o++){var i=n[f=r[o]];!e[f]&&i&&Z(i)&&(i.value=null)}var u=Object.keys(e),a=[];for(o=0;o<u.length;o++){var f;i=n[f=u[o]];e[f]&&i&&Z(i)&&(i.value=e[f],a.push(f))}zt.set(t,"refs",a)}}function Kt(t){for(var n=[t._vnode];n.length;){var e=n.pop();if(e&&(e.context&&Ft(e.context),e.children))for(var r=0;r<e.children.length;++r)n.push(e.children[r])}}function It(t,n){var e,o;if(t){var i=zt.get(t,"attrBindings");if(i||n){if(!i){var u=lt({});i={ctx:n,data:u},zt.set(t,"attrBindings",i),S(n,"attrs",{get:function(){return null==i?void 0:i.data},set:function(){}})}var a=t.$attrs,f=function(n){E(i.data,n)||S(i.data,n,{get:function(){return t.$attrs[n]}})};try{for(var c=r(Object.keys(a)),s=c.next();!s.done;s=c.next()){f(s.value)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(o=c.return)&&o.call(c)}finally{if(e)throw e.error}}}}}function Qt(t,n){var e=t.$options._parentVnode;if(e){for(var r=zt.get(t,"slots")||[],o=function(t,n){var e;if(t){if(t._normalized)return t._normalized;for(var r in e={},t)t[r]&&"$"!==r[0]&&(e[r]=!0)}else e={};for(var r in n)r in e||(e[r]=!0);return e}(e.data.scopedSlots,t.$slots),i=0;i<r.length;i++){o[a=r[i]]||delete n[a]}var u=Object.keys(o);for(i=0;i<u.length;i++){var a;n[a=u[i]]||(n[a]=V(t,a))}zt.set(t,"slots",u)}}function qt(t,n,e){var r=x();g(t);try{return n(t)}catch(t){if(!e)throw t;e(t)}finally{g(r)}}function Lt(t){function n(t,e){if(void 0===e&&(e=new Set),!e.has(t)&&A(t)&&!Z(t)&&!ot(t)&&!rt(t)){var r=h().util.defineReactive;Object.keys(t).forEach((function(o){var i=t[o];r(t,o,i),i&&(e.add(i),n(i,e))}))}}function e(t,n){return void 0===n&&(n=new Map),n.has(t)?n.get(t):(n.set(t,!1),R(t)&&ot(t)?(n.set(t,!0),!0):!(!A(t)||rt(t)||Z(t))&&Object.keys(t).some((function(r){return e(t[r],n)})))}t.mixin({beforeCreate:function(){var t=this,r=t.$options,o=r.setup,i=r.render;i&&(r.render=function(){for(var n=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return qt(w(t),(function(){return i.apply(n,e)}))});if(!o)return;if(!B(o))return;var u=r.data;r.data=function(){return function(t,r){void 0===r&&(r={});var o,i=t.$options.setup,u=function(t){var n={slots:{}},e=["emit"];return["root","parent","refs","listeners","isServer","ssrContext"].forEach((function(e){var r="$".concat(e);S(n,e,{get:function(){return t[r]},set:function(){}})})),It(t,n),e.forEach((function(e){var r="$".concat(e);S(n,e,{get:function(){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t[r].apply(t,n)}}})})),n}(t),a=w(t);if(a.setupContext=u,k(r,"__ob__",ct()),Qt(t,u.slots),qt(a,(function(){o=i(r,u)})),!o)return;if(B(o)){var f=o;return void(t.$options.render=function(){return Qt(t,u.slots),qt(a,(function(){return f()}))})}if(U(o)){ot(o)&&(o=nt(o)),zt.set(t,"rawBindings",o);var c=o;Object.keys(c).forEach((function(r){var o=c[r];if(!Z(o))if(ot(o))R(o)&&(o=Y(o));else if(B(o)){var i=o;o=o.bind(t),Object.keys(i).forEach((function(t){o[t]=i[t]}))}else U(o)?e(o)&&n(o):o=Y(o);!function(t,n,e){var r=t.$options.props;n in t||r&&E(r,n)||(Z(e)?S(t,n,{get:function(){return e.value},set:function(t){e.value=t}}):S(t,n,{get:function(){return ot(e)&&e.__ob__.dep.depend(),e},set:function(t){e=t}}))}(t,r,o)}))}}(t,t.$props),B(u)?u.call(t,t):u||{}}},mounted:function(){Kt(this)},beforeUpdate:function(){It(this)},updated:function(){Kt(this)}})}function Gt(t,n){if(!t)return n;if(!n)return t;for(var e,r,o,i=j?Reflect.ownKeys(t):Object.keys(t),u=0;u<i.length;u++)"__ob__"!==(e=i[u])&&(r=n[e],o=t[e],E(n,e)?r!==o&&A(r)&&!Z(r)&&A(o)&&!Z(o)&&Gt(o,r):n[e]=o);return n}function Ht(t){(function(t){return v&&E(t,"__composition_api_installed__")})(t)||(t.config.optionMergeStrategies.setup=function(t,n){return function(e,r){return Gt(B(t)?t(e,r)||{}:void 0,B(n)?n(e,r)||{}:void 0)}},function(t){v=t,Object.defineProperty(t,"__composition_api_installed__",{configurable:!0,writable:!0,value:!0})}(t),Lt(t))}var Jt={install:function(t){return Ht(t)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(Jt),exports.EffectScope=f,exports.computed=function(t){var n,e,r,o,i=s();if(B(t)?n=t:(n=t.get,e=t.set),i&&!i.$isServer){var u,a=function(){if(!C){var t=T(h(),{computed:{value:function(){return 0}}}),n=t._computedWatchers.value.constructor,e=t._data.__ob__.dep.constructor;C={Watcher:n,Dep:e},t.$destroy()}return C}(),f=a.Watcher,c=a.Dep;o=function(){return u||(u=new f(i,n,O,{lazy:!0})),u.dirty&&u.evaluate(),c.target&&u.depend(),u.value},r=function(t){e&&e(t)}}else{var l=T(h(),{computed:{$$state:{get:n,set:e}}});i&&i.$on("hook:destroyed",(function(){return l.$destroy()})),o=function(){return l.$$state},r=function(t){l.$$state=t}}return X({get:o,set:r},!e,!0)},exports.createApp=function(t,n){void 0===n&&(n=void 0);var r=h(),o=void 0,i={},u={config:r.config,use:r.use.bind(r),mixin:r.mixin.bind(r),component:r.component.bind(r),provide:function(t,n){return i[t]=n,this},directive:function(t,n){return n?(r.directive(t,n),u):r.directive(t)},mount:function(u,a){return o||((o=new r(e(e({propsData:n},t),{provide:e(e({},i),t.provide)}))).$mount(u,a),o)},unmount:function(){o&&(o.$destroy(),o=void 0)}};return u},exports.createLifeCycle=pt,exports.createRef=X,exports.customRef=function(t){var n=Y(0);return X(t((function(){n.value}),(function(){++n.value})))},exports.default=Jt,exports.defineAsyncComponent=function(t){B(t)&&(t={loader:t});var n=t.loader,e=t.loadingComponent,r=t.errorComponent,o=t.delay,i=void 0===o?200:o,u=t.timeout;t.suspensible;var a=t.onError,f=null,c=0,s=function(){var t;return f||(t=f=n().catch((function(t){if(t=t instanceof Error?t:new Error(String(t)),a)return new Promise((function(n,e){a(t,(function(){return n((c++,f=null,s()))}),(function(){return e(t)}),c+1)}));throw t})).then((function(n){return t!==f&&f?f:(n&&(n.__esModule||"Module"===n[Symbol.toStringTag])&&(n=n.default),n)})))};return function(){return{component:s(),delay:i,timeout:u,error:r,loading:e}}},exports.defineComponent=function(t){return t},exports.del=function(t,n){if(h().util.warn,R(t)&&D(n))t.splice(n,1);else{var e=t.__ob__;t._isVue||e&&e.vmCount||E(t,n)&&(delete t[n],e&&e.dep.notify())}},exports.effectScope=function(t){return new f(t)},exports.getCurrentInstance=x,exports.getCurrentScope=c,exports.h=function(){for(var t,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var r=(null==this?void 0:this.proxy)||(null===(t=x())||void 0===t?void 0:t.proxy);return r?r.$createElement.apply(r,n):(Tt||(Tt=T(h()).$createElement),Tt.apply(Tt,n))},exports.inject=function(t,n,e){var r;void 0===e&&(e=!1);var o=null===(r=x())||void 0===r?void 0:r.proxy;if(o){if(!t)return n;var i=Ut(t,o);return i!==Dt?i:arguments.length>1?e&&B(n)?n():n:void 0}},exports.isRaw=rt,exports.isReactive=ot,exports.isReadonly=function(t){return L.has(t)},exports.isRef=Z,exports.markRaw=function(t){if(!A(t)&&!R(t)||!Object.isExtensible(t))return t;var n=ct();return n.__v_skip=!0,k(t,"__ob__",n),q.set(t,!0),t},exports.nextTick=function(){for(var t,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return null===(t=h())||void 0===t?void 0:t.nextTick.apply(this,n)},exports.onActivated=mt,exports.onBeforeMount=dt,exports.onBeforeUnmount=bt,exports.onBeforeUpdate=yt,exports.onDeactivated=wt,exports.onErrorCaptured=xt,exports.onMounted=_t,exports.onScopeDispose=function(t){n&&n.cleanups.push(t)},exports.onServerPrefetch=$t,exports.onUnmounted=gt,exports.onUpdated=ht,exports.provide=function(t,n){var e,r=null===(e=W())||void 0===e?void 0:e.proxy;if(r){if(!r._provided){var o={};S(r,"_provided",{get:function(){return o},set:function(t){return Object.assign(o,t)}})}r._provided[t]=n}},exports.proxyRefs=function(t){var n,e,o;if(ot(t))return t;var i=lt(((n={})[I]=t,n));k(i,I,i[I],!1);var u=function(t){S(i,t,{get:function(){return Z(i[I][t])?i[I][t].value:i[I][t]},set:function(n){if(Z(i[I][t]))return i[I][t].value=tt(n);i[I][t]=tt(n)}})};try{for(var a=r(Object.keys(t)),f=a.next();!f.done;f=a.next()){u(f.value)}}catch(t){e={error:t}}finally{try{f&&!f.done&&(o=a.return)&&o.call(a)}finally{if(e)throw e.error}}return i},exports.reactive=lt,exports.readonly=function(t){return L.set(t,!0),t},exports.ref=Y,exports.set=G,exports.shallowReactive=st,exports.shallowReadonly=function(t){var n,e;if(!U(t))return t;if(!A(t)&&!R(t)||!Object.isExtensible(t)&&!Z(t))return t;var o=Z(t)?new N({}):ot(t)?at({}):{},i=lt({}).__ob__,u=function(n){var e,r=t[n],u=Object.getOwnPropertyDescriptor(t,n);if(u){if(!1===u.configurable&&!Z(t))return"continue";e=u.get}S(o,n,{get:function(){var n=e?e.call(t):r;return i.dep.depend(),n},set:function(t){}})};try{for(var a=r(Object.keys(t)),f=a.next();!f.done;f=a.next()){u(f.value)}}catch(t){n={error:t}}finally{try{f&&!f.done&&(e=a.return)&&e.call(a)}finally{if(n)throw n.error}}return L.set(o,!0),o},exports.shallowRef=function(t){var n;if(Z(t))return t;var e=st(((n={})[I]=t,n));return X({get:function(){return e[I]},set:function(t){return e[I]=t}})},exports.toRaw=function(t){var n;return rt(t)||!Object.isExtensible(t)?t:(null===(n=null==t?void 0:t.__ob__)||void 0===n?void 0:n.value)||t},exports.toRef=et,exports.toRefs=nt,exports.triggerRef=function(t){Z(t)&&(J(!0),t.value=t.value,J(!1))},exports.unref=tt,exports.useAttrs=function(){return Vt().attrs},exports.useCSSModule=Wt,exports.useCssModule=Bt,exports.useSlots=function(){return Vt().slots},exports.version="1.7.0",exports.warn=function(t){var n,e,r,o;e=t,r=null===(n=x())||void 0===n?void 0:n.proxy,(o=b())&&o.util?o.util.warn(e,r):console.warn("[vue-composition-api] ".concat(e))},exports.watch=function(t,n,r){var o=null;B(n)?o=n:(r=n,o=null);var i=function(t){return e({immediate:!1,deep:!1,flush:"pre"},t)}(r);return Ct(St(),t,o,i)},exports.watchEffect=Mt,exports.watchPostEffect=function(t){return Mt(t,{flush:"post"})},exports.watchSyncEffect=function(t){return Mt(t,{flush:"sync"})};
