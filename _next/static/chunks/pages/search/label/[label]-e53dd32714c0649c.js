(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[773],{488:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/label/[label]",function(){return l(4395)}])},5677:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{noSSR:function(){return a},default:function(){return o}});let r=l(8754),n=(l(7294),r._(l(8976)));function u(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let l=n.default,r={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let o=r.loader,i=()=>null!=o?o().then(u):Promise.resolve(u(()=>null));return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?l({...r,loader:i}):(delete r.webpack,delete r.modules,a(l,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return u}});let r=l(8754),n=r._(l(7294)),u=n.default.createContext(null)},8976:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=l(8754),n=r._(l(7294)),u=l(2254),a=[],o=[],i=!1;function s(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function a(){if(!r){let t=new d(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!i){let e=l.webpack?l.webpack():l.modules;e&&o.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return a()})}function s(e,t){!function(){a();let e=n.default.useContext(u.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let o=n.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(l.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return s.preload=()=>a(),s.displayName="LoadableComponent",n.default.forwardRef(s)}(s,e)}function f(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(a).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let l=()=>(i=!0,t());f(o,e).then(l,l)})),window.__NEXT_PRELOADREADY=c.preloadReady;let _=c},4395:function(e,t,l){"use strict";l.r(t);var r=l(5893),n=l(1163),u=l(5152),a=l.n(u);let o=a()(()=>Promise.all([l.e(829),l.e(975)]).then(l.bind(l,7424)),{loadableGenerated:{webpack:()=>[7424]},ssr:!1});t.default=()=>{let e=(0,n.useRouter)();return(0,r.jsx)(o,{...e.query})}},5152:function(e,t,l){e.exports=l(5677)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=488)}),_N_E=e.O()}]);