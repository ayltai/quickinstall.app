import"./iframe-CAFMPHJt.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="487c638f-9881-4bf7-9427-0d6282bae638",t._sentryDebugIdIdentifier="sentry-dbid-487c638f-9881-4bf7-9427-0d6282bae638")}catch{}})();const $t=Object.prototype.toString;function Ft(t,e){return $t.call(t)===`[object ${e}]`}function qe(t){return Ft(t,"Object")}function fe(t){return!!(t&&t.then&&typeof t.then=="function")}function L(t){return t&&t.Math==Math?t:void 0}const _=typeof globalThis=="object"&&L(globalThis)||typeof window=="object"&&L(window)||typeof self=="object"&&L(self)||typeof global=="object"&&L(global)||function(){return this}()||{};function We(t,e,n){const r=n||_,s=r.__SENTRY__=r.__SENTRY__||{};return s[t]||(s[t]=e())}const jt=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Ut="Sentry Logger ",ve=["debug","info","warn","error","log","assert","trace"],Te={};function Ye(t){if(!("console"in _))return t();const e=_.console,n={},r=Object.keys(Te);r.forEach(s=>{const i=Te[s];n[s]=e[s],e[s]=i});try{return t()}finally{r.forEach(s=>{e[s]=n[s]})}}function Ht(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1},isEnabled:()=>t};return jt?ve.forEach(n=>{e[n]=(...r)=>{t&&Ye(()=>{_.console[n](`${Ut}[${n}]:`,...r)})}}):ve.forEach(n=>{e[n]=()=>{}}),e}const E=Ht();function C(t){return se(t,new Map)}function se(t,e){if(Vt(t)){const n=e.get(t);if(n!==void 0)return n;const r={};e.set(t,r);for(const s of Object.keys(t))typeof t[s]<"u"&&(r[s]=se(t[s],e));return r}if(Array.isArray(t)){const n=e.get(t);if(n!==void 0)return n;const r=[];return e.set(t,r),t.forEach(s=>{r.push(se(s,e))}),r}return t}function Vt(t){if(!qe(t))return!1;try{const e=Object.getPrototypeOf(t).constructor.name;return!e||e==="Object"}catch{return!0}}function b(){const t=_,e=t.crypto||t.msCrypto;let n=()=>Math.random()*16;try{if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");e&&e.getRandomValues&&(n=()=>{const r=new Uint8Array(1);return e.getRandomValues(r),r[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,r=>(r^(n()&15)>>r/4).toString(16))}function Gt(t){return Array.isArray(t)?t:[t]}var y;(function(t){t[t.PENDING=0]="PENDING";const n=1;t[t.RESOLVED=n]="RESOLVED";const r=2;t[t.REJECTED=r]="REJECTED"})(y||(y={}));class S{constructor(e){S.prototype.__init.call(this),S.prototype.__init2.call(this),S.prototype.__init3.call(this),S.prototype.__init4.call(this),this._state=y.PENDING,this._handlers=[];try{e(this._resolve,this._reject)}catch(n){this._reject(n)}}then(e,n){return new S((r,s)=>{this._handlers.push([!1,i=>{if(!e)r(i);else try{r(e(i))}catch(a){s(a)}},i=>{if(!n)s(i);else try{r(n(i))}catch(a){s(a)}}]),this._executeHandlers()})}catch(e){return this.then(n=>n,e)}finally(e){return new S((n,r)=>{let s,i;return this.then(a=>{i=!1,s=a,e&&e()},a=>{i=!0,s=a,e&&e()}).then(()=>{if(i){r(s);return}n(s)})})}__init(){this._resolve=e=>{this._setResult(y.RESOLVED,e)}}__init2(){this._reject=e=>{this._setResult(y.REJECTED,e)}}__init3(){this._setResult=(e,n)=>{if(this._state===y.PENDING){if(fe(n)){n.then(this._resolve,this._reject);return}this._state=e,this._value=n,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===y.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach(n=>{n[0]||(this._state===y.RESOLVED&&n[1](this._value),this._state===y.REJECTED&&n[2](this._value),n[0]=!0)})}}}const Ke=1e3;function pe(){return Date.now()/Ke}function zt(){const{performance:t}=_;if(!t||!t.now)return pe;const e=Date.now()-t.now(),n=t.timeOrigin==null?e:t.timeOrigin;return()=>(n+t.now())/Ke}const Je=zt();(()=>{const{performance:t}=_;if(!t||!t.now)return;const e=3600*1e3,n=t.now(),r=Date.now(),s=t.timeOrigin?Math.abs(t.timeOrigin+n-r):e,i=s<e,a=t.timing&&t.timing.navigationStart,c=typeof a=="number"?Math.abs(a+n-r):e,u=c<e;return i||u?s<=c?t.timeOrigin:a:r})();const $=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Xe="production";function qt(){return We("globalEventProcessors",()=>[])}function ie(t,e,n,r=0){return new S((s,i)=>{const a=t[r];if(e===null||typeof a!="function")s(e);else{const o=a({...e},n);$&&a.id&&o===null&&E.log(`Event processor "${a.id}" dropped event`),fe(o)?o.then(c=>ie(t,c,n,r+1).then(s)).then(null,i):ie(t,o,n,r+1).then(s).then(null,i)}})}function Wt(t){const e=Je(),n={sid:b(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Kt(n)};return t&&G(n,t),n}function G(t,e={}){if(e.user&&(!t.ipAddress&&e.user.ip_address&&(t.ipAddress=e.user.ip_address),!t.did&&!e.did&&(t.did=e.user.id||e.user.email||e.user.username)),t.timestamp=e.timestamp||Je(),e.abnormal_mechanism&&(t.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(t.ignoreDuration=e.ignoreDuration),e.sid&&(t.sid=e.sid.length===32?e.sid:b()),e.init!==void 0&&(t.init=e.init),!t.did&&e.did&&(t.did=`${e.did}`),typeof e.started=="number"&&(t.started=e.started),t.ignoreDuration)t.duration=void 0;else if(typeof e.duration=="number")t.duration=e.duration;else{const n=t.timestamp-t.started;t.duration=n>=0?n:0}e.release&&(t.release=e.release),e.environment&&(t.environment=e.environment),!t.ipAddress&&e.ipAddress&&(t.ipAddress=e.ipAddress),!t.userAgent&&e.userAgent&&(t.userAgent=e.userAgent),typeof e.errors=="number"&&(t.errors=e.errors),e.status&&(t.status=e.status)}function Yt(t,e){let n={};e?n={status:e}:t.status==="ok"&&(n={status:"exited"}),G(t,n)}function Kt(t){return C({sid:`${t.sid}`,init:t.init,started:new Date(t.started*1e3).toISOString(),timestamp:new Date(t.timestamp*1e3).toISOString(),status:t.status,errors:t.errors,did:typeof t.did=="number"||typeof t.did=="string"?`${t.did}`:void 0,duration:t.duration,abnormal_mechanism:t.abnormal_mechanism,attrs:{release:t.release,environment:t.environment,ip_address:t.ipAddress,user_agent:t.userAgent}})}const Jt=1;function Xt(t){const{spanId:e,traceId:n}=t.spanContext(),{data:r,op:s,parent_span_id:i,status:a,tags:o,origin:c}=F(t);return C({data:r,op:s,parent_span_id:i,span_id:e,status:a,tags:o,trace_id:n,origin:c})}function F(t){return Zt(t)?t.getSpanJSON():typeof t.toJSON=="function"?t.toJSON():{}}function Zt(t){return typeof t.getSpanJSON=="function"}function Qt(t){const{traceFlags:e}=t.spanContext();return!!(e&Jt)}function en(t){if(t)return tn(t)?{captureContext:t}:rn(t)?{captureContext:t}:t}function tn(t){return t instanceof A||typeof t=="function"}const nn=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function rn(t){return Object.keys(t).some(e=>nn.includes(e))}function sn(t,e){return ge().captureException(t,en(e))}function an(){return ge().getClient()}function on(){return ge().getScope()}function Ze(t){return t.transaction}function cn(t,e,n){const r=e.getOptions(),{publicKey:s}=e.getDsn()||{},{segment:i}=n&&n.getUser()||{},a=C({environment:r.environment||Xe,release:r.release,user_segment:i,public_key:s,trace_id:t});return e.emit&&e.emit("createDsc",a),a}function un(t){const e=an();if(!e)return{};const n=cn(F(t).trace_id||"",e,on()),r=Ze(t);if(!r)return n;const s=r&&r._frozenDynamicSamplingContext;if(s)return s;const{sampleRate:i,source:a}=r.metadata;i!=null&&(n.sample_rate=`${i}`);const o=F(r);return a&&a!=="url"&&(n.transaction=o.description),n.sampled=String(Qt(r)),e.emit&&e.emit("createDsc",n),n}function ln(t,e){const{fingerprint:n,span:r,breadcrumbs:s,sdkProcessingMetadata:i}=e;dn(t,e),r&&pn(t,r),gn(t,n),hn(t,s),fn(t,i)}function dn(t,e){const{extra:n,tags:r,user:s,contexts:i,level:a,transactionName:o}=e,c=C(n);c&&Object.keys(c).length&&(t.extra={...c,...t.extra});const u=C(r);u&&Object.keys(u).length&&(t.tags={...u,...t.tags});const d=C(s);d&&Object.keys(d).length&&(t.user={...d,...t.user});const h=C(i);h&&Object.keys(h).length&&(t.contexts={...h,...t.contexts}),a&&(t.level=a),o&&(t.transaction=o)}function hn(t,e){const n=[...t.breadcrumbs||[],...e];t.breadcrumbs=n.length?n:void 0}function fn(t,e){t.sdkProcessingMetadata={...t.sdkProcessingMetadata,...e}}function pn(t,e){t.contexts={trace:Xt(e),...t.contexts};const n=Ze(e);if(n){t.sdkProcessingMetadata={dynamicSamplingContext:un(e),...t.sdkProcessingMetadata};const r=F(n).description;r&&(t.tags={transaction:r,...t.tags})}}function gn(t,e){t.fingerprint=t.fingerprint?Gt(t.fingerprint):[],e&&(t.fingerprint=t.fingerprint.concat(e)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint}const mn=100;class A{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=Ce()}static clone(e){return e?e.clone():new A}clone(){const e=new A;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},e._user=this._user,e._level=this._level,e._span=this._span,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._requestSession=this._requestSession,e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e}setClient(e){this._client=e}getClient(){return this._client}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&G(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,n){return this._tags={...this._tags,[e]:n},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,n){return this._extra={...this._extra,[e]:n},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,n){return n===null?delete this._contexts[e]:this._contexts[e]=n,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this._span;return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;const n=typeof e=="function"?e(this):e;if(n instanceof A){const r=n.getScopeData();this._tags={...this._tags,...r.tags},this._extra={...this._extra,...r.extra},this._contexts={...this._contexts,...r.contexts},r.user&&Object.keys(r.user).length&&(this._user=r.user),r.level&&(this._level=r.level),r.fingerprint.length&&(this._fingerprint=r.fingerprint),n.getRequestSession()&&(this._requestSession=n.getRequestSession()),r.propagationContext&&(this._propagationContext=r.propagationContext)}else if(qe(n)){const r=e;this._tags={...this._tags,...r.tags},this._extra={...this._extra,...r.extra},this._contexts={...this._contexts,...r.contexts},r.user&&(this._user=r.user),r.level&&(this._level=r.level),r.fingerprint&&(this._fingerprint=r.fingerprint),r.requestSession&&(this._requestSession=r.requestSession),r.propagationContext&&(this._propagationContext=r.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=Ce(),this}addBreadcrumb(e,n){const r=typeof n=="number"?n:mn;if(r<=0)return this;const s={timestamp:pe(),...e},i=this._breadcrumbs;return i.push(s),this._breadcrumbs=i.length>r?i.slice(-r):i,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:e,_attachments:n,_contexts:r,_tags:s,_extra:i,_user:a,_level:o,_fingerprint:c,_eventProcessors:u,_propagationContext:d,_sdkProcessingMetadata:h,_transactionName:m,_span:f}=this;return{breadcrumbs:e,attachments:n,contexts:r,tags:s,extra:i,user:a,level:o,fingerprint:c||[],eventProcessors:u,propagationContext:d,sdkProcessingMetadata:h,transactionName:m,span:f}}applyToEvent(e,n={},r=[]){ln(e,this.getScopeData());const s=[...r,...qt(),...this._eventProcessors];return ie(s,e,n)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}captureException(e,n){const r=n&&n.event_id?n.event_id:b();if(!this._client)return E.warn("No client configured on scope - will not capture exception!"),r;const s=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:s,...n,event_id:r},this),r}captureMessage(e,n,r){const s=r&&r.event_id?r.event_id:b();if(!this._client)return E.warn("No client configured on scope - will not capture message!"),s;const i=new Error(e);return this._client.captureMessage(e,n,{originalException:e,syntheticException:i,...r,event_id:s},this),s}captureEvent(e,n){const r=n&&n.event_id?n.event_id:b();return this._client?(this._client.captureEvent(e,{...n,event_id:r},this),r):(E.warn("No client configured on scope - will not capture event!"),r)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}}function Ce(){return{traceId:b(),spanId:b().substring(16)}}const _n="7.107.0",Qe=parseFloat(_n),bn=100;class et{constructor(e,n,r,s=Qe){this._version=s;let i;n?i=n:(i=new A,i.setClient(e));let a;r?a=r:(a=new A,a.setClient(e)),this._stack=[{scope:i}],e&&this.bindClient(e),this._isolationScope=a}isOlderThan(e){return this._version<e}bindClient(e){const n=this.getStackTop();n.client=e,n.scope.setClient(e),e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(e){const n=this.pushScope();let r;try{r=e(n)}catch(s){throw this.popScope(),s}return fe(r)?r.then(s=>(this.popScope(),s),s=>{throw this.popScope(),s}):(this.popScope(),r)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,n){const r=this._lastEventId=n&&n.event_id?n.event_id:b(),s=new Error("Sentry syntheticException");return this.getScope().captureException(e,{originalException:e,syntheticException:s,...n,event_id:r}),r}captureMessage(e,n,r){const s=this._lastEventId=r&&r.event_id?r.event_id:b(),i=new Error(e);return this.getScope().captureMessage(e,n,{originalException:e,syntheticException:i,...r,event_id:s}),s}captureEvent(e,n){const r=n&&n.event_id?n.event_id:b();return e.type||(this._lastEventId=r),this.getScope().captureEvent(e,{...n,event_id:r}),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,n){const{scope:r,client:s}=this.getStackTop();if(!s)return;const{beforeBreadcrumb:i=null,maxBreadcrumbs:a=bn}=s.getOptions&&s.getOptions()||{};if(a<=0)return;const c={timestamp:pe(),...e},u=i?Ye(()=>i(c,n)):c;u!==null&&(s.emit&&s.emit("beforeAddBreadcrumb",u,n),r.addBreadcrumb(u,a))}setUser(e){this.getScope().setUser(e),this.getIsolationScope().setUser(e)}setTags(e){this.getScope().setTags(e),this.getIsolationScope().setTags(e)}setExtras(e){this.getScope().setExtras(e),this.getIsolationScope().setExtras(e)}setTag(e,n){this.getScope().setTag(e,n),this.getIsolationScope().setTag(e,n)}setExtra(e,n){this.getScope().setExtra(e,n),this.getIsolationScope().setExtra(e,n)}setContext(e,n){this.getScope().setContext(e,n),this.getIsolationScope().setContext(e,n)}configureScope(e){const{scope:n,client:r}=this.getStackTop();r&&e(n)}run(e){const n=De(this);try{e(this)}finally{De(n)}}getIntegration(e){const n=this.getClient();if(!n)return null;try{return n.getIntegration(e)}catch{return $&&E.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,n){const r=this._callExtensionMethod("startTransaction",e,n);return $&&!r&&(this.getClient()?E.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):E.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),r}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const n=this.getStackTop().scope,r=n.getSession();r&&Yt(r),this._sendSessionUpdate(),n.setSession()}startSession(e){const{scope:n,client:r}=this.getStackTop(),{release:s,environment:i=Xe}=r&&r.getOptions()||{},{userAgent:a}=_.navigator||{},o=Wt({release:s,environment:i,user:n.getUser(),...a&&{userAgent:a},...e}),c=n.getSession&&n.getSession();return c&&c.status==="ok"&&G(c,{status:"exited"}),this.endSession(),n.setSession(o),o}shouldSendDefaultPii(){const e=this.getClient(),n=e&&e.getOptions();return!!(n&&n.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:n}=this.getStackTop(),r=e.getSession();r&&n&&n.captureSession&&n.captureSession(r)}_callExtensionMethod(e,...n){const s=z().__SENTRY__;if(s&&s.extensions&&typeof s.extensions[e]=="function")return s.extensions[e].apply(this,n);$&&E.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function z(){return _.__SENTRY__=_.__SENTRY__||{extensions:{},hub:void 0},_}function De(t){const e=z(),n=ae(e);return tt(e,t),n}function ge(){const t=z();if(t.__SENTRY__&&t.__SENTRY__.acs){const e=t.__SENTRY__.acs.getCurrentHub();if(e)return e}return yn(t)}function yn(t=z()){return(!Sn(t)||ae(t).isOlderThan(Qe))&&tt(t,new et),ae(t)}function Sn(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function ae(t){return We("hub",()=>new et,t)}function tt(t,e){if(!t)return!1;const n=t.__SENTRY__=t.__SENTRY__||{};return n.hub=e,!0}var Ae={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},En=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],o=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,o=a?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,h=(i&3)<<4|o>>4;let m=(o&15)<<2|u>>6,f=u&63;c||(f=64,a||(m=64)),r.push(n[d],n[h],n[m],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):En(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||o==null||u==null||h==null)throw new In;const m=i<<2|o>>4;if(r.push(m),u!==64){const f=o<<4&240|u>>2;if(r.push(f),h!==64){const Lt=u<<6&192|h;r.push(Lt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class In extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wn=function(t){const e=nt(t);return rt.encodeByteArray(e,!0)},st=function(t){return wn(t).replace(/\./g,"")},vn=function(t){try{return rt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=()=>Tn().__FIREBASE_DEFAULTS__,Dn=()=>{if(typeof process>"u"||typeof Ae>"u")return;const t=Ae.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},An=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vn(t[1]);return e&&JSON.parse(e)},On=()=>{try{return Cn()||Dn()||An()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},it=()=>{var t;return(t=On())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Nn(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function at(){try{return typeof indexedDB=="object"}catch{return!1}}function ot(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Bn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="FirebaseError";class x extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mn,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,q.prototype.create)}}class q{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?xn(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new x(s,o,r)}}function xn(t,e){return t.replace(kn,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kn=/\{\$([^}]+)}/g;function j(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Oe(i)&&Oe(a)){if(!j(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Oe(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=1e3,Ln=2,$n=4*60*60*1e3,Fn=.5;function Re(t,e=Pn,n=Ln){const r=e*Math.pow(n,t),s=Math.round(Fn*r*(Math.random()-.5)*2);return Math.min($n,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class v{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hn(e))try{this.getOrInitializeService({instanceIdentifier:T})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=T){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=T){return this.instances.has(e)}getOptions(e=T){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Un(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=T){return this.component?this.component.multipleInstances?e:T:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Un(t){return t===T?void 0:t}function Hn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(l||(l={}));const Gn={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},zn=l.INFO,qn={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},Wn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ut{constructor(e){this.name=e,this._logLevel=zn,this._logHandler=Wn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...e),this._logHandler(this,l.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...e),this._logHandler(this,l.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l.INFO,...e),this._logHandler(this,l.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l.WARN,...e),this._logHandler(this,l.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...e),this._logHandler(this,l.ERROR,...e)}}const Yn=(t,e)=>e.some(n=>t instanceof n);let Ne,Be;function Kn(){return Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jn(){return Be||(Be=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,oe=new WeakMap,dt=new WeakMap,X=new WeakMap,me=new WeakMap;function Xn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(I(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&lt.set(n,t)}).catch(()=>{}),me.set(e,t),e}function Zn(t){if(oe.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});oe.set(t,e)}let ce={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qn(t){ce=t(ce)}function er(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Z(this),e,...n);return dt.set(r,e.sort?e.sort():[e]),I(r)}:Jn().includes(t)?function(...e){return t.apply(Z(this),e),I(lt.get(this))}:function(...e){return I(t.apply(Z(this),e))}}function tr(t){return typeof t=="function"?er(t):(t instanceof IDBTransaction&&Zn(t),Yn(t,Kn())?new Proxy(t,ce):t)}function I(t){if(t instanceof IDBRequest)return Xn(t);if(X.has(t))return X.get(t);const e=tr(t);return e!==t&&(X.set(t,e),me.set(e,t)),e}const Z=t=>me.get(t);function ht(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=I(a);return r&&a.addEventListener("upgradeneeded",c=>{r(I(a.result),c.oldVersion,c.newVersion,I(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const nr=["get","getKey","getAll","getAllKeys","count"],rr=["put","add","delete","clear"],Q=new Map;function Me(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Q.get(e))return Q.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nr.includes(n)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),s&&c.done]))[0]};return Q.set(e,i),i}Qn(t=>({...t,get:(e,n,r)=>Me(e,n)||t.get(e,n,r),has:(e,n)=>!!Me(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ir(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ir(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ue="@firebase/app",xe="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new ut("@firebase/app"),ar="@firebase/app-compat",or="@firebase/analytics-compat",cr="@firebase/analytics",ur="@firebase/app-check-compat",lr="@firebase/app-check",dr="@firebase/auth",hr="@firebase/auth-compat",fr="@firebase/database",pr="@firebase/database-compat",gr="@firebase/functions",mr="@firebase/functions-compat",_r="@firebase/installations",br="@firebase/installations-compat",yr="@firebase/messaging",Sr="@firebase/messaging-compat",Er="@firebase/performance",Ir="@firebase/performance-compat",wr="@firebase/remote-config",vr="@firebase/remote-config-compat",Tr="@firebase/storage",Cr="@firebase/storage-compat",Dr="@firebase/firestore",Ar="@firebase/firestore-compat",Or="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]",Rr={[ue]:"fire-core",[ar]:"fire-core-compat",[cr]:"fire-analytics",[or]:"fire-analytics-compat",[lr]:"fire-app-check",[ur]:"fire-app-check-compat",[dr]:"fire-auth",[hr]:"fire-auth-compat",[fr]:"fire-rtdb",[pr]:"fire-rtdb-compat",[gr]:"fire-fn",[mr]:"fire-fn-compat",[_r]:"fire-iid",[br]:"fire-iid-compat",[yr]:"fire-fcm",[Sr]:"fire-fcm-compat",[Er]:"fire-perf",[Ir]:"fire-perf-compat",[wr]:"fire-rc",[vr]:"fire-rc-compat",[Tr]:"fire-gcs",[Cr]:"fire-gcs-compat",[Dr]:"fire-fst",[Ar]:"fire-fst-compat","fire-js":"fire-js",[Or]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=new Map,de=new Map;function Nr(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function N(t){const e=t.name;if(de.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;de.set(e,t);for(const n of U.values())Nr(n,t);return!0}function W(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},w=new q("app","Firebase",Br);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new v("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}}function xr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:le,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw w.create("bad-app-name",{appName:String(s)});if(n||(n=it()),!n)throw w.create("no-options");const i=U.get(s);if(i){if(j(n,i.options)&&j(r,i.config))return i;throw w.create("duplicate-app",{appName:s})}const a=new Vn(s);for(const c of de.values())a.addComponent(c);const o=new Mr(n,r,a);return U.set(s,o),o}function kr(t=le){const e=U.get(t);if(!e&&t===le&&it())return xr();if(!e)throw w.create("no-app",{appName:t});return e}function O(t,e,n){var r;let s=(r=Rr[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R.warn(o.join(" "));return}N(new v(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="firebase-heartbeat-database",Lr=1,P="firebase-heartbeat-store";let ee=null;function ft(){return ee||(ee=ht(Pr,Lr,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(P)}catch(n){console.warn(n)}}}}).catch(t=>{throw w.create("idb-open",{originalErrorMessage:t.message})})),ee}async function $r(t){try{const n=(await ft()).transaction(P),r=await n.objectStore(P).get(pt(t));return await n.done,r}catch(e){if(e instanceof x)R.warn(e.message);else{const n=w.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});R.warn(n.message)}}}async function ke(t,e){try{const r=(await ft()).transaction(P,"readwrite");await r.objectStore(P).put(e,pt(t)),await r.done}catch(n){if(n instanceof x)R.warn(n.message);else{const r=w.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});R.warn(r.message)}}}function pt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=1024,jr=30*24*60*60*1e3;class Ur{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pe();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=jr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pe(),{heartbeatsToSend:r,unsentEntries:s}=Hr(this._heartbeatsCache.heartbeats),i=st(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pe(){return new Date().toISOString().substring(0,10)}function Hr(t,e=Fr){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Le(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Le(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return at()?ot().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $r(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ke(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ke(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Le(t){return st(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){N(new v("platform-logger",e=>new sr(e),"PRIVATE")),N(new v("heartbeat",e=>new Ur(e),"PRIVATE")),O(ue,xe,t),O(ue,xe,"esm2017"),O("fire-js","")}Gr("");const gt="@firebase/installations",_e="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=1e4,_t=`w:${_e}`,bt="FIS_v2",zr="https://firebaseinstallations.googleapis.com/v1",qr=60*60*1e3,Wr="installations",Yr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},B=new q(Wr,Yr,Kr);function yt(t){return t instanceof x&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St({projectId:t}){return`${zr}/projects/${t}/installations`}function Et(t){return{token:t.token,requestStatus:2,expiresIn:Xr(t.expiresIn),creationTime:Date.now()}}async function It(t,e){const r=(await e.json()).error;return B.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Jr(t,{refreshToken:e}){const n=wt(t);return n.append("Authorization",Zr(e)),n}async function vt(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Xr(t){return Number(t.replace("s","000"))}function Zr(t){return`${bt} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=St(t),s=wt(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:n,authVersion:bt,appId:t.appId,sdkVersion:_t},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await vt(()=>fetch(r,o));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Et(u.authToken)}}else throw await It("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=/^[cdef][\w-]{21}$/,he="";function ns(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rs(t);return ts.test(n)?n:he}catch{return he}}function rs(t){return es(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new Map;function Dt(t,e){const n=Y(t);At(n,e),ss(n,e)}function At(t,e){const n=Ct.get(t);if(n)for(const r of n)r(e)}function ss(t,e){const n=is();n&&n.postMessage({key:t,fid:e}),as()}let D=null;function is(){return!D&&"BroadcastChannel"in self&&(D=new BroadcastChannel("[Firebase] FID Change"),D.onmessage=t=>{At(t.data.key,t.data.fid)}),D}function as(){Ct.size===0&&D&&(D.close(),D=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="firebase-installations-database",cs=1,M="firebase-installations-store";let te=null;function be(){return te||(te=ht(os,cs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(M)}}})),te}async function H(t,e){const n=Y(t),s=(await be()).transaction(M,"readwrite"),i=s.objectStore(M),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Dt(t,e.fid),e}async function Ot(t){const e=Y(t),r=(await be()).transaction(M,"readwrite");await r.objectStore(M).delete(e),await r.done}async function K(t,e){const n=Y(t),s=(await be()).transaction(M,"readwrite"),i=s.objectStore(M),a=await i.get(n),o=e(a);return o===void 0?await i.delete(n):await i.put(o,n),await s.done,o&&(!a||a.fid!==o.fid)&&Dt(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ye(t){let e;const n=await K(t.appConfig,r=>{const s=us(r),i=ls(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===he?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function us(t){const e=t||{fid:ns(),registrationStatus:0};return Rt(e)}function ls(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(B.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ds(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hs(t)}:{installationEntry:e}}async function ds(t,e){try{const n=await Qr(t,e);return H(t.appConfig,n)}catch(n){throw yt(n)&&n.customData.serverCode===409?await Ot(t.appConfig):await H(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hs(t){let e=await $e(t.appConfig);for(;e.registrationStatus===1;)await Tt(100),e=await $e(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ye(t);return r||n}return e}function $e(t){return K(t,e=>{if(!e)throw B.create("installation-not-found");return Rt(e)})}function Rt(t){return fs(t)?{fid:t.fid,registrationStatus:0}:t}function fs(t){return t.registrationStatus===1&&t.registrationTime+mt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps({appConfig:t,heartbeatServiceProvider:e},n){const r=gs(t,n),s=Jr(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:_t,appId:t.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await vt(()=>fetch(r,o));if(c.ok){const u=await c.json();return Et(u)}else throw await It("Generate Auth Token",c)}function gs(t,{fid:e}){return`${St(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,e=!1){let n;const r=await K(t.appConfig,i=>{if(!Nt(i))throw B.create("not-registered");const a=i.authToken;if(!e&&bs(a))return i;if(a.requestStatus===1)return n=ms(t,e),i;{if(!navigator.onLine)throw B.create("app-offline");const o=Ss(i);return n=_s(t,o),o}});return n?await n:r.authToken}async function ms(t,e){let n=await Fe(t.appConfig);for(;n.authToken.requestStatus===1;)await Tt(100),n=await Fe(t.appConfig);const r=n.authToken;return r.requestStatus===0?Se(t,e):r}function Fe(t){return K(t,e=>{if(!Nt(e))throw B.create("not-registered");const n=e.authToken;return Es(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _s(t,e){try{const n=await ps(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await H(t.appConfig,r),n}catch(n){if(yt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ot(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await H(t.appConfig,r)}throw n}}function Nt(t){return t!==void 0&&t.registrationStatus===2}function bs(t){return t.requestStatus===2&&!ys(t)}function ys(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qr}function Ss(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Es(t){return t.requestStatus===1&&t.requestTime+mt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){const e=t,{installationEntry:n,registrationPromise:r}=await ye(e);return r?r.catch(console.error):Se(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e=!1){const n=t;return await vs(n),(await Se(n,e)).token}async function vs(t){const{registrationPromise:e}=await ye(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){if(!t||!t.options)throw ne("App Configuration");if(!t.name)throw ne("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ne(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ne(t){return B.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="installations",Cs="installations-internal",Ds=t=>{const e=t.getProvider("app").getImmediate(),n=Ts(e),r=W(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},As=t=>{const e=t.getProvider("app").getImmediate(),n=W(e,Bt).getImmediate();return{getId:()=>Is(n),getToken:s=>ws(n,s)}};function Os(){N(new v(Bt,Ds,"PUBLIC")),N(new v(Cs,As,"PRIVATE"))}Os();O(gt,_e);O(gt,_e,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="analytics",Rs="firebase_id",Ns="origin",Bs=60*1e3,Ms="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ee="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new ut("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},g=new q("analytics","Analytics",xs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){if(!t.startsWith(Ee)){const e=g.create("invalid-gtag-resource",{gtagURL:t});return p.warn(e.message),""}return t}function Mt(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ps(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Ls(t,e){const n=Ps("firebase-js-sdk-policy",{createScriptURL:ks}),r=document.createElement("script"),s=`${Ee}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function $s(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Fs(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await Mt(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(o){p.error(o)}t("config",s,i)}async function js(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const o=await Mt(n);for(const c of a){const u=o.find(h=>h.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){p.error(i)}}function Us(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[o,c]=a;await js(t,e,n,o,c)}else if(i==="config"){const[o,c]=a;await Fs(t,e,n,r,o,c)}else if(i==="consent"){const[o]=a;t("consent","update",o)}else if(i==="get"){const[o,c,u]=a;t("get",o,c,u)}else if(i==="set"){const[o]=a;t("set",o)}else t(i,...a)}catch(o){p.error(o)}}return s}function Hs(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Us(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Vs(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ee)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=30,zs=1e3;class qs{constructor(e={},n=zs){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const xt=new qs;function Ws(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ys(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Ws(r)},i=Ms.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw g.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function Ks(t,e=xt,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw g.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw g.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Zs;return setTimeout(async()=>{o.abort()},n!==void 0?n:Bs),kt({appId:r,apiKey:s,measurementId:i},a,o,e)}async function kt(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=xt){var i;const{appId:a,measurementId:o}=t;try{await Js(r,e)}catch(c){if(o)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await Ys(t);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!Xs(u)){if(s.deleteThrottleMetadata(a),o)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:o};throw c}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Re(n,s.intervalMillis,Gs):Re(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,h),p.debug(`Calling attemptFetch again in ${d} millis`),kt(t,h,r,s)}}function Js(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(g.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xs(t){if(!(t instanceof x)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Zs{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qs(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(){if(at())try{await ot()}catch(t){return p.warn(g.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return p.warn(g.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ti(t,e,n,r,s,i,a){var o;const c=Ks(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>p.error(f)),e.push(c);const u=ei().then(f=>{if(f)return r.getId()}),[d,h]=await Promise.all([c,u]);Vs(i)||Ls(i,d.measurementId),s("js",new Date);const m=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return m[Ns]="firebase",m.update=!0,h!=null&&(m[Rs]=h),s("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.app=e}_delete(){return delete k[this.app.options.appId],Promise.resolve()}}let k={},je=[];const Ue={};let re="dataLayer",ri="gtag",He,Pt,Ve=!1;function si(){const t=[];if(Nn()&&t.push("This is a browser extension environment."),Bn()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=g.create("invalid-analytics-context",{errorInfo:e});p.warn(n.message)}}function ii(t,e,n){si();const r=t.options.appId;if(!r)throw g.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw g.create("no-api-key");if(k[r]!=null)throw g.create("already-exists",{id:r});if(!Ve){$s(re);const{wrappedGtag:i,gtagCore:a}=Hs(k,je,Ue,re,ri);Pt=i,He=a,Ve=!0}return k[r]=ti(t,je,Ue,e,He,re,n),new ni(t)}function Ie(t=kr()){t=ct(t);const e=W(t,V);return e.isInitialized()?e.getImmediate():ai(t)}function ai(t,e={}){const n=W(t,V);if(n.isInitialized()){const s=n.getImmediate();if(j(e,n.getOptions()))return s;throw g.create("already-initialized")}return n.initialize({options:e})}function J(t,e,n,r){t=ct(t),Qs(Pt,k[t.app.options.appId],e,n,r).catch(s=>p.error(s))}const Ge="@firebase/analytics",ze="0.10.1";function oi(){N(new v(V,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ii(r,s,n)},"PUBLIC")),N(new v("analytics-internal",t,"PRIVATE")),O(Ge,ze),O(Ge,ze,"esm2017");function t(e){try{const n=e.getProvider(V).getImmediate();return{logEvent:(r,s,i)=>J(n,r,s,i)}}catch(n){throw g.create("interop-component-reg-failed",{reason:n})}}}oi();const we=t=>{sn(t)},ui=(t,{platform:e,itemId:n})=>{try{J(Ie(t),"remove_from_cart",{items:[{item_id:`${e}/${n}`}]})}catch(r){we(r)}},li=(t,{platform:e,itemIds:n})=>{try{J(Ie(t),"checkout",{items:n.map(r=>({item_id:`${e}/${r}`}))})}catch(r){we(r)}},di=(t,{product:e,itemId:n})=>{try{J(Ie(t),"share",{content_type:e,item_id:n})}catch(r){we(r)}};export{li as a,di as b,we as h,ui as l};
