import{o as ue}from"./vendor-CVH3TwW2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9b155c27-dc9e-48b2-9b1f-783ffecd0214",t._sentryDebugIdIdentifier="sentry-dbid-9b155c27-dc9e-48b2-9b1f-783ffecd0214")}catch{}})();var J={};/**
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
 */const he=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qe=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],s=t[n++],o=t[n++],c=((r&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;e[a++]=String.fromCharCode(55296+(c>>10)),e[a++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],s=t[n++];e[a++]=String.fromCharCode((r&15)<<12|(i&63)<<6|s&63)}}return e.join("")},fe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const i=t[r],s=r+1<t.length,o=s?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|o>>4;let m=(o&15)<<2|l>>6,p=l&63;c||(p=64,s||(m=64)),a.push(n[u],n[f],n[m],n[p])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(he(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qe(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||o==null||l==null||f==null)throw new Ge;const m=i<<2|o>>4;if(a.push(m),l!==64){const p=o<<4&240|l>>2;if(a.push(p),f!==64){const ze=l<<6&192|f;a.push(ze)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ge extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const We=function(t){const e=he(t);return fe.encodeByteArray(e,!0)},pe=function(t){return We(t).replace(/\./g,"")},Ke=function(t){try{return fe.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ye(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Je=()=>Ye().__FIREBASE_DEFAULTS__,Xe=()=>{if(typeof process>"u"||typeof J>"u")return;const t=J.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ze=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ke(t[1]);return e&&JSON.parse(e)},Qe=()=>{try{return Je()||Xe()||Ze()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ge=()=>{var t;return(t=Qe())===null||t===void 0?void 0:t.config};/**
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
 */class et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}function tt(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function me(){try{return typeof indexedDB=="object"}catch{return!1}}function be(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function nt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rt="FirebaseError";class T extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=rt,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?at(i,a):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new T(r,o,a)}}function at(t,e){return t.replace(it,(n,a)=>{const r=e[a];return r!=null?String(r):`<${a}?>`})}const it=/\{\$([^}]+)}/g;function O(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const i=t[r],s=e[r];if(X(i)&&X(s)){if(!O(i,s))return!1}else if(i!==s)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function X(t){return t!==null&&typeof t=="object"}/**
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
 */const st=1e3,ot=2,ct=4*60*60*1e3,lt=.5;function Z(t,e=st,n=ot){const a=e*Math.pow(n,t),r=Math.round(lt*a*(Math.random()-.5)*2);return Math.min(ct,a+r)}/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class I{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const w="[DEFAULT]";/**
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
 */class dt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new et;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ht(e))try{this.getOrInitializeService({instanceIdentifier:w})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});a.resolve(i)}catch{}}}}clearInstance(e=w){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=w){return this.instances.has(e)}getOptions(e=w){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);a===o&&s.resolve(r)}return r}onInit(e,n){var a;const r=this.normalizeInstanceIdentifier(n),i=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:ut(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=w){return this.component?this.component.multipleInstances?e:w:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ut(t){return t===w?void 0:t}function ht(t){return t.instantiationMode==="EAGER"}/**
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
 */class ft{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const pt={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},gt=d.INFO,mt={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},bt=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),r=mt[e];if(r)console[r](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ie{constructor(e){this.name=e,this._logLevel=gt,this._logHandler=bt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}/**
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
 */class yt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(It(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function It(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const j="@firebase/app",Q="0.9.29";/**
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
 */const E=new Ie("@firebase/app"),wt="@firebase/app-compat",_t="@firebase/analytics-compat",Et="@firebase/analytics",vt="@firebase/app-check-compat",At="@firebase/app-check",St="@firebase/auth",Tt="@firebase/auth-compat",Ct="@firebase/database",Dt="@firebase/database-compat",Ot="@firebase/functions",Rt="@firebase/functions-compat",$t="@firebase/installations",Bt="@firebase/installations-compat",Mt="@firebase/messaging",Nt="@firebase/messaging-compat",kt="@firebase/performance",Pt="@firebase/performance-compat",Ft="@firebase/remote-config",Lt="@firebase/remote-config-compat",xt="@firebase/storage",Ht="@firebase/storage-compat",jt="@firebase/firestore",Ut="@firebase/firestore-compat",Vt="firebase";/**
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
 */const U="[DEFAULT]",zt={[j]:"fire-core",[wt]:"fire-core-compat",[Et]:"fire-analytics",[_t]:"fire-analytics-compat",[At]:"fire-app-check",[vt]:"fire-app-check-compat",[St]:"fire-auth",[Tt]:"fire-auth-compat",[Ct]:"fire-rtdb",[Dt]:"fire-rtdb-compat",[Ot]:"fire-fn",[Rt]:"fire-fn-compat",[$t]:"fire-iid",[Bt]:"fire-iid-compat",[Mt]:"fire-fcm",[Nt]:"fire-fcm-compat",[kt]:"fire-perf",[Pt]:"fire-perf-compat",[Ft]:"fire-rc",[Lt]:"fire-rc-compat",[xt]:"fire-gcs",[Ht]:"fire-gcs-compat",[jt]:"fire-fst",[Ut]:"fire-fst-compat","fire-js":"fire-js",[Vt]:"fire-js-all"};/**
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
 */const R=new Map,V=new Map;function qt(t,e){try{t.container.addComponent(e)}catch(n){E.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function v(t){const e=t.name;if(V.has(e))return E.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of R.values())qt(n,t);return!0}function N(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Gt={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new M("app","Firebase",Gt);/**
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
 */class Wt{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new I("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}function Kt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:U,automaticDataCollectionEnabled:!1},e),r=a.name;if(typeof r!="string"||!r)throw b.create("bad-app-name",{appName:String(r)});if(n||(n=ge()),!n)throw b.create("no-options");const i=R.get(r);if(i){if(O(n,i.options)&&O(a,i.config))return i;throw b.create("duplicate-app",{appName:r})}const s=new ft(r);for(const c of V.values())s.addComponent(c);const o=new Wt(n,a,s);return R.set(r,o),o}function Yt(t=U){const e=R.get(t);if(!e&&t===U&&ge())return Kt();if(!e)throw b.create("no-app",{appName:t});return e}function y(t,e,n){var a;let r=(a=zt[t])!==null&&a!==void 0?a:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),E.warn(o.join(" "));return}v(new I(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Jt="firebase-heartbeat-database",Xt=1,D="firebase-heartbeat-store";let F=null;function we(){return F||(F=ue(Jt,Xt,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(D)}catch(n){console.warn(n)}}}}).catch(t=>{throw b.create("idb-open",{originalErrorMessage:t.message})})),F}async function Zt(t){try{const n=(await we()).transaction(D),a=await n.objectStore(D).get(_e(t));return await n.done,a}catch(e){if(e instanceof T)E.warn(e.message);else{const n=b.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});E.warn(n.message)}}}async function ee(t,e){try{const a=(await we()).transaction(D,"readwrite");await a.objectStore(D).put(e,_e(t)),await a.done}catch(n){if(n instanceof T)E.warn(n.message);else{const a=b.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});E.warn(a.message)}}}function _e(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qt=1024,en=30*24*60*60*1e3;class tn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rn(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=te();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=en}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=te(),{heartbeatsToSend:a,unsentEntries:r}=nn(this._heartbeatsCache.heartbeats),i=pe(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function te(){return new Date().toISOString().substring(0,10)}function nn(t,e=Qt){const n=[];let a=t.slice();for(const r of t){const i=n.find(s=>s.agent===r.agent);if(i){if(i.dates.push(r.date),ne(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ne(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class rn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return me()?be().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zt(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ee(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ee(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ne(t){return pe(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function an(t){v(new I("platform-logger",e=>new yt(e),"PRIVATE")),v(new I("heartbeat",e=>new tn(e),"PRIVATE")),y(j,Q,t),y(j,Q,"esm2017"),y("fire-js","")}an("");var sn="firebase",on="10.9.0";/**
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
 */y(sn,on,"app");const Ee="@firebase/installations",q="0.6.5";/**
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
 */const ve=1e4,Ae=`w:${q}`,Se="FIS_v2",cn="https://firebaseinstallations.googleapis.com/v1",ln=60*60*1e3,dn="installations",un="Installations";/**
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
 */const hn={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},A=new M(dn,un,hn);function Te(t){return t instanceof T&&t.code.includes("request-failed")}/**
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
 */function Ce({projectId:t}){return`${cn}/projects/${t}/installations`}function De(t){return{token:t.token,requestStatus:2,expiresIn:pn(t.expiresIn),creationTime:Date.now()}}async function Oe(t,e){const a=(await e.json()).error;return A.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Re({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fn(t,{refreshToken:e}){const n=Re(t);return n.append("Authorization",gn(e)),n}async function $e(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pn(t){return Number(t.replace("s","000"))}function gn(t){return`${Se} ${t}`}/**
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
 */async function mn({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const a=Ce(t),r=Re(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={fid:n,authVersion:Se,appId:t.appId,sdkVersion:Ae},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await $e(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:De(l.authToken)}}else throw await Oe("Create Installation",c)}/**
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
 */function Be(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function bn(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yn=/^[cdef][\w-]{21}$/,z="";function In(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wn(t);return yn.test(n)?n:z}catch{return z}}function wn(t){return bn(t).substr(0,22)}/**
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
 */function k(t){return`${t.appName}!${t.appId}`}/**
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
 */const Me=new Map;function Ne(t,e){const n=k(t);ke(n,e),_n(n,e)}function ke(t,e){const n=Me.get(t);if(n)for(const a of n)a(e)}function _n(t,e){const n=En();n&&n.postMessage({key:t,fid:e}),vn()}let _=null;function En(){return!_&&"BroadcastChannel"in self&&(_=new BroadcastChannel("[Firebase] FID Change"),_.onmessage=t=>{ke(t.data.key,t.data.fid)}),_}function vn(){Me.size===0&&_&&(_.close(),_=null)}/**
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
 */const An="firebase-installations-database",Sn=1,S="firebase-installations-store";let L=null;function G(){return L||(L=ue(An,Sn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(S)}}})),L}async function $(t,e){const n=k(t),r=(await G()).transaction(S,"readwrite"),i=r.objectStore(S),s=await i.get(n);return await i.put(e,n),await r.done,(!s||s.fid!==e.fid)&&Ne(t,e.fid),e}async function Pe(t){const e=k(t),a=(await G()).transaction(S,"readwrite");await a.objectStore(S).delete(e),await a.done}async function P(t,e){const n=k(t),r=(await G()).transaction(S,"readwrite"),i=r.objectStore(S),s=await i.get(n),o=e(s);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!s||s.fid!==o.fid)&&Ne(t,o.fid),o}/**
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
 */async function W(t){let e;const n=await P(t.appConfig,a=>{const r=Tn(a),i=Cn(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===z?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Tn(t){const e=t||{fid:In(),registrationStatus:0};return Fe(e)}function Cn(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(A.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=Dn(t,n);return{installationEntry:n,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:On(t)}:{installationEntry:e}}async function Dn(t,e){try{const n=await mn(t,e);return $(t.appConfig,n)}catch(n){throw Te(n)&&n.customData.serverCode===409?await Pe(t.appConfig):await $(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function On(t){let e=await re(t.appConfig);for(;e.registrationStatus===1;)await Be(100),e=await re(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await W(t);return a||n}return e}function re(t){return P(t,e=>{if(!e)throw A.create("installation-not-found");return Fe(e)})}function Fe(t){return Rn(t)?{fid:t.fid,registrationStatus:0}:t}function Rn(t){return t.registrationStatus===1&&t.registrationTime+ve<Date.now()}/**
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
 */async function $n({appConfig:t,heartbeatServiceProvider:e},n){const a=Bn(t,n),r=fn(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={installation:{sdkVersion:Ae,appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await $e(()=>fetch(a,o));if(c.ok){const l=await c.json();return De(l)}else throw await Oe("Generate Auth Token",c)}function Bn(t,{fid:e}){return`${Ce(t)}/${e}/authTokens:generate`}/**
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
 */async function K(t,e=!1){let n;const a=await P(t.appConfig,i=>{if(!Le(i))throw A.create("not-registered");const s=i.authToken;if(!e&&kn(s))return i;if(s.requestStatus===1)return n=Mn(t,e),i;{if(!navigator.onLine)throw A.create("app-offline");const o=Fn(i);return n=Nn(t,o),o}});return n?await n:a.authToken}async function Mn(t,e){let n=await ae(t.appConfig);for(;n.authToken.requestStatus===1;)await Be(100),n=await ae(t.appConfig);const a=n.authToken;return a.requestStatus===0?K(t,e):a}function ae(t){return P(t,e=>{if(!Le(e))throw A.create("not-registered");const n=e.authToken;return Ln(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Nn(t,e){try{const n=await $n(t,e),a=Object.assign(Object.assign({},e),{authToken:n});return await $(t.appConfig,a),n}catch(n){if(Te(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pe(t.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $(t.appConfig,a)}throw n}}function Le(t){return t!==void 0&&t.registrationStatus===2}function kn(t){return t.requestStatus===2&&!Pn(t)}function Pn(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ln}function Fn(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ln(t){return t.requestStatus===1&&t.requestTime+ve<Date.now()}/**
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
 */async function xn(t){const e=t,{installationEntry:n,registrationPromise:a}=await W(e);return a?a.catch(console.error):K(e).catch(console.error),n.fid}/**
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
 */async function Hn(t,e=!1){const n=t;return await jn(n),(await K(n,e)).token}async function jn(t){const{registrationPromise:e}=await W(t);e&&await e}/**
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
 */function Un(t){if(!t||!t.options)throw x("App Configuration");if(!t.name)throw x("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw x(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function x(t){return A.create("missing-app-config-values",{valueName:t})}/**
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
 */const xe="installations",Vn="installations-internal",zn=t=>{const e=t.getProvider("app").getImmediate(),n=Un(e),a=N(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},qn=t=>{const e=t.getProvider("app").getImmediate(),n=N(e,xe).getImmediate();return{getId:()=>xn(n),getToken:r=>Hn(n,r)}};function Gn(){v(new I(xe,zn,"PUBLIC")),v(new I(Vn,qn,"PRIVATE"))}Gn();y(Ee,q);y(Ee,q,"esm2017");/**
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
 */const B="analytics",Wn="firebase_id",Kn="origin",Yn=60*1e3,Jn="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Y="https://www.googletagmanager.com/gtag/js";/**
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
 */const h=new Ie("@firebase/analytics");/**
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
 */const Xn={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},g=new M("analytics","Analytics",Xn);/**
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
 */function Zn(t){if(!t.startsWith(Y)){const e=g.create("invalid-gtag-resource",{gtagURL:t});return h.warn(e.message),""}return t}function He(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Qn(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function er(t,e){const n=Qn("firebase-js-sdk-policy",{createScriptURL:Zn}),a=document.createElement("script"),r=`${Y}?l=${t}&id=${e}`;a.src=n?n==null?void 0:n.createScriptURL(r):r,a.async=!0,document.head.appendChild(a)}function tr(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function nr(t,e,n,a,r,i){const s=a[r];try{if(s)await e[s];else{const c=(await He(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(o){h.error(o)}t("config",r,i)}async function rr(t,e,n,a,r){try{let i=[];if(r&&r.send_to){let s=r.send_to;Array.isArray(s)||(s=[s]);const o=await He(n);for(const c of s){const l=o.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",a,r||{})}catch(i){h.error(i)}}function ar(t,e,n,a){async function r(i,...s){try{if(i==="event"){const[o,c]=s;await rr(t,e,n,o,c)}else if(i==="config"){const[o,c]=s;await nr(t,e,n,a,o,c)}else if(i==="consent"){const[o]=s;t("consent","update",o)}else if(i==="get"){const[o,c,l]=s;t("get",o,c,l)}else if(i==="set"){const[o]=s;t("set",o)}else t(i,...s)}catch(o){h.error(o)}}return r}function ir(t,e,n,a,r){let i=function(...s){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=ar(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function sr(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Y)&&n.src.includes(t))return n;return null}/**
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
 */const or=30,cr=1e3;class lr{constructor(e={},n=cr){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const je=new lr;function dr(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ur(t){var e;const{appId:n,apiKey:a}=t,r={method:"GET",headers:dr(a)},i=Jn.replace("{app-id}",n),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw g.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function hr(t,e=je,n){const{appId:a,apiKey:r,measurementId:i}=t.options;if(!a)throw g.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw g.create("no-api-key")}const s=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new gr;return setTimeout(async()=>{o.abort()},n!==void 0?n:Yn),Ue({appId:a,apiKey:r,measurementId:i},s,o,e)}async function Ue(t,{throttleEndTimeMillis:e,backoffCount:n},a,r=je){var i;const{appId:s,measurementId:o}=t;try{await fr(a,e)}catch(c){if(o)return h.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await ur(t);return r.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!pr(l)){if(r.deleteThrottleMetadata(s),o)return h.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Z(n,r.intervalMillis,or):Z(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(s,f),h.debug(`Calling attemptFetch again in ${u} millis`),Ue(t,f,a,r)}}function fr(t,e){return new Promise((n,a)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),a(g.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pr(t){if(!(t instanceof T)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mr(t,e,n,a,r){if(r&&r.global){t("event",n,a);return}else{const i=await e,s=Object.assign(Object.assign({},a),{send_to:i});t("event",n,s)}}/**
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
 */async function br(){if(me())try{await be()}catch(t){return h.warn(g.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return h.warn(g.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yr(t,e,n,a,r,i,s){var o;const c=hr(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&h.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>h.error(p)),e.push(c);const l=br().then(p=>{if(p)return a.getId()}),[u,f]=await Promise.all([c,l]);sr(i)||er(i,u.measurementId),r("js",new Date);const m=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return m[Kn]="firebase",m.update=!0,f!=null&&(m[Wn]=f),r("config",u.measurementId,m),u.measurementId}/**
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
 */class Ir{constructor(e){this.app=e}_delete(){return delete C[this.app.options.appId],Promise.resolve()}}let C={},ie=[];const se={};let H="dataLayer",wr="gtag",oe,Ve,ce=!1;function _r(){const t=[];if(tt()&&t.push("This is a browser extension environment."),nt()||t.push("Cookies are not available."),t.length>0){const e=t.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=g.create("invalid-analytics-context",{errorInfo:e});h.warn(n.message)}}function Er(t,e,n){_r();const a=t.options.appId;if(!a)throw g.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)h.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw g.create("no-api-key");if(C[a]!=null)throw g.create("already-exists",{id:a});if(!ce){tr(H);const{wrappedGtag:i,gtagCore:s}=ir(C,ie,se,H,wr);Ve=i,oe=s,ce=!0}return C[a]=yr(t,ie,se,e,oe,H,n),new Ir(t)}function Cr(t=Yt()){t=ye(t);const e=N(t,B);return e.isInitialized()?e.getImmediate():vr(t)}function vr(t,e={}){const n=N(t,B);if(n.isInitialized()){const r=n.getImmediate();if(O(e,n.getOptions()))return r;throw g.create("already-initialized")}return n.initialize({options:e})}function Ar(t,e,n,a){t=ye(t),mr(Ve,C[t.app.options.appId],e,n,a).catch(r=>h.error(r))}const le="@firebase/analytics",de="0.10.1";function Sr(){v(new I(B,(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Er(a,r,n)},"PUBLIC")),v(new I("analytics-internal",t,"PRIVATE")),y(le,de),y(le,de,"esm2017");function t(e){try{const n=e.getProvider(B).getImmediate();return{logEvent:(a,r,i)=>Ar(n,a,r,i)}}catch(n){throw g.create("interop-component-reg-failed",{reason:n})}}}Sr();export{Cr as g,Kt as i,Ar as l};
//# sourceMappingURL=firebase-DU60cgGU.js.map
