(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function xe(...r){const e=[];for(const t of r)t.styleSheet&&e.push(t.styleSheet);return e}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,Q=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),re=new WeakMap;let ge=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Q&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&re.set(t,e))}return e}toString(){return this.cssText}};const Me=r=>new ge(typeof r=="string"?r:r+"",void 0,ee),E=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ge(t,r,ee)},He=(r,e)=>{if(Q)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=D.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},oe=Q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Me(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pe,defineProperty:ke,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:Ue,getOwnPropertySymbols:Le,getPrototypeOf:Te}=Object,v=globalThis,ne=v.trustedTypes,Be=ne?ne.emptyScript:"",F=v.reactiveElementPolyfillSupport,U=(r,e)=>r,I={toAttribute(r,e){switch(e){case Boolean:r=r?Be:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},te=(r,e)=>!Pe(r,e),le={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&ke(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Oe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=Te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,i=[...Ue(t),...Le(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(oe(s))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return He(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:I).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:I;this._$Em=s,this[s]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??te)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[U("elementProperties")]=new Map,S[U("finalized")]=new Map,F==null||F({ReactiveElement:S}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,j=L.trustedTypes,ae=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,ve="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,_e="?"+g,ze=`<${_e}>`,C=document,B=()=>C.createComment(""),z=r=>r===null||typeof r!="object"&&typeof r!="function",se=Array.isArray,Ne=r=>se(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",q=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ce=/>/g,_=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,ue=/"/g,ye=/^(?:script|style|textarea|title)$/i,Ae=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),O=Ae(1),R=Ae(2),w=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),pe=new WeakMap,A=C.createTreeWalker(C,129);function Ce(r,e){if(!se(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(e):e}const Re=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=P;for(let a=0;a<t;a++){const l=r[a];let c,p,h=-1,u=0;for(;u<l.length&&(o.lastIndex=u,p=o.exec(l),p!==null);)u=o.lastIndex,o===P?p[1]==="!--"?o=he:p[1]!==void 0?o=ce:p[2]!==void 0?(ye.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=_):p[3]!==void 0&&(o=_):o===_?p[0]===">"?(o=s??P,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?_:p[3]==='"'?ue:de):o===ue||o===de?o=_:o===he||o===ce?o=P:(o=_,s=void 0);const d=o===_&&r[a+1].startsWith("/>")?" ":"";n+=o===P?l+ze:h>=0?(i.push(c),l.slice(0,h)+ve+l.slice(h)+g+d):l+g+(h===-2?a:d)}return[Ce(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class N{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const a=e.length-1,l=this.parts,[c,p]=Re(e,t);if(this.el=N.createElement(c,i),A.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=A.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ve)){const u=p[o++],d=s.getAttribute(h).split(g),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:f[2],strings:d,ctor:f[1]==="."?De:f[1]==="?"?Ie:f[1]==="@"?je:V}),s.removeAttribute(h)}else h.startsWith(g)&&(l.push({type:6,index:n}),s.removeAttribute(h));if(ye.test(s.tagName)){const h=s.textContent.split(g),u=h.length-1;if(u>0){s.textContent=j?j.emptyScript:"";for(let d=0;d<u;d++)s.append(h[d],B()),A.nextNode(),l.push({type:2,index:++n});s.append(h[u],B())}}}else if(s.nodeType===8)if(s.data===_e)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(g,h+1))!==-1;)l.push({type:7,index:n}),h+=g.length-1}n++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function M(r,e,t=r,i){var o,a;if(e===w)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=z(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=M(r,s._$AS(r,e.values),s,i)),e}let Ze=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??C).importNode(t,!0);A.currentNode=s;let n=A.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new H(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new Ve(n,this,e)),this._$AV.push(c),l=i[++a]}o!==(l==null?void 0:l.index)&&(n=A.nextNode(),o++)}return A.currentNode=C,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class H{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),z(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ne(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=N.createElement(Ce(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new Ze(s,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new N(e)),t}k(e){se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new H(this.O(B()),this.O(B()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=M(this,e,t,0),o=!z(e)||e!==this._$AH&&e!==w,o&&(this._$AH=e);else{const a=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=M(this,a[i+l],t,l),c===w&&(c=this._$AH[l]),o||(o=!z(c)||c!==this._$AH[l]),c===$?e=$:e!==$&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class Ie extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class je extends V{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??$)===w)return;const i=this._$AH,s=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ve{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const We={I:H},G=L.litHtmlPolyfillSupport;G==null||G(N,H),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.2.1");const Fe=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new H(e.insertBefore(B(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let x=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return w}};var me;x._$litElement$=!0,x.finalized=!0,(me=globalThis.litElementHydrateSupport)==null||me.call(globalThis,{LitElement:x});const Y=globalThis.litElementPolyfillSupport;Y==null||Y({LitElement:x});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const qe=E`
  @layer base.normalize {
    :where(a) {
      color: var(--color-link-foreground);
    }
    :where(a:visited) {
      color: var(--color-link-visited-foreground);
    }
    :where(a:hover) {
      color: var(--color-link-hover-foreground);
    }
  }
`,Ge=E`
  @layer overrides.a11y {
    :where(.o-sr-only, .o-sr-only-focusable:not(:focus):not(:focus-within)) {
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      block-size: 1px !important;
      inline-size: 1px !important;
      overflow: hidden !important;
      position: absolute !important;
      white-space: nowrap !important;
    }
  }
`,Ye=Object.freeze(Object.defineProperty({__proto__:null,a11yStyles:Ge,linkStyles:qe},Symbol.toStringTag,{value:"Module"}));function Ke(r,e,t,i=!0){const s=r===window,n=document.readyState,o=e;if(n==="loading"||n==="interactive"&&s){const a=s?"load":"DOMContentLoaded";r.addEventListener(a,o,{once:!0})}else i&&o()}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:te},Xe=(r=Je,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,r)},init(a){return a!==void 0&&this.P(o,void 0,r),a}}}if(i==="setter"){const{name:o}=t;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+i)};function Qe(r){return(e,t)=>typeof t=="object"?Xe(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*et(r,e,t=1){const i=e===void 0?0:r;e??(e=r);for(let s=i;t>0?s<e:e<s;s+=t)yield s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt={CHILD:2},st=r=>(...e)=>({_$litDirective$:r,values:e});class it{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:rt}=We,fe=()=>document.createComment(""),k=(r,e,t)=>{var n;const i=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){const o=i.insertBefore(fe(),s),a=i.insertBefore(fe(),s);t=new rt(o,a,r,r.options)}else{const o=t._$AB.nextSibling,a=t._$AM,l=a!==r;if(l){let c;(n=t._$AQ)==null||n.call(t,r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==a._$AU&&t._$AP(c)}if(o!==s||l){let c=t._$AA;for(;c!==o;){const p=c.nextSibling;i.insertBefore(c,s),c=p}}}return t},y=(r,e,t=r)=>(r._$AI(e,t),r),ot={},nt=(r,e=ot)=>r._$AH=e,lt=r=>r._$AH,K=r=>{var i;(i=r._$AP)==null||i.call(r,!1,!0);let e=r._$AA;const t=r._$AB.nextSibling;for(;e!==t;){const s=e.nextSibling;e.remove(),e=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(r,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(r[s],s);return i},at=st(class extends it{constructor(r){if(super(r),r.type!==tt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],n=[];let o=0;for(const a of r)s[o]=i?i(a,o):o,n[o]=t(a,o),o++;return{values:n,keys:s}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){const s=lt(r),{values:n,keys:o}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=o,n;const a=this.ut??(this.ut=[]),l=[];let c,p,h=0,u=s.length-1,d=0,f=n.length-1;for(;h<=u&&d<=f;)if(s[h]===null)h++;else if(s[u]===null)u--;else if(a[h]===o[d])l[d]=y(s[h],n[d]),h++,d++;else if(a[u]===o[f])l[f]=y(s[u],n[f]),u--,f--;else if(a[h]===o[f])l[f]=y(s[h],n[f]),k(r,l[f+1],s[h]),h++,f--;else if(a[u]===o[d])l[d]=y(s[u],n[d]),k(r,s[h],s[u]),u--,d++;else if(c===void 0&&(c=$e(o,d,f),p=$e(a,h,u)),c.has(a[h]))if(c.has(a[u])){const m=p.get(o[d]),W=m!==void 0?s[m]:null;if(W===null){const ie=k(r,s[h]);y(ie,n[d]),l[d]=ie}else l[d]=y(W,n[d]),k(r,s[h],W),s[m]=null;d++}else K(s[u]),u--;else K(s[h]),h++;for(;d<=f;){const m=k(r,l[f+1]);y(m,n[d]),l[d++]=m}for(;h<=u;){const m=s[h++];m!==null&&K(m)}return this.ut=o,nt(r,l),w}});var ht=Object.getOwnPropertyDescriptor,ct=(r,e,t,i)=>{for(var s=i>1?void 0:i?ht(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(s)||s);return s};const be=Array.from(et(-6,7,1)),T=be.length;let X=class extends x{render(){return O`<div class="hero-image">${this.renderMedia()}${this.renderMouseGrid()}</div>`}renderMouseGrid(){return O`<div class="mouse-grid">
      ${at(Array.from({length:T**2}),(r,e)=>O`<div class="x${e%T} y${Math.floor(e/T)}"></div>`)}
    </div>`}renderMedia(){return O`
<svg width="1364" height="1314" viewBox="0 0 1364 1314" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="svg-layer-filled">
<path d="M382 932.995C382 933.801 282 833.334 232 783H532C482 832.663 382 932.19 382 932.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M532 783.005C532 782.199 632 882.666 682 933L382 933C432 883.337 532 783.81 532 783.005Z" fill="#2A84E6" stroke="#181C21"/>
<path d="M232 782.995C232 783.801 132 683.334 82 633H382C332 682.663 232 782.19 232 782.995Z" fill="#181C21" fill-opacity="0.5" stroke="#181C21"/>
<path d="M231.995 484C232.801 484 132.334 584 82 634L82 334C131.663 384 231.19 484 231.995 484Z" fill="#D32429" stroke="#181C21"/>
<path d="M232 483.995C232 484.801 132 384.334 82 334H382C332 383.663 232 483.19 232 483.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M382 333.995C382 334.801 282 234.334 232 184H532C482 233.663 382 333.19 382 333.995Z" fill="#181C21" stroke="#181C21"/>
<path d="M532 183.995C532 184.801 432 84.334 382 34H682C632 83.6628 532 183.19 532 183.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M912 1283C912 1283.8 812 1183.33 762 1133H1062C1012 1182.66 912 1282.19 912 1283Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M1064 1133C1064 1133.8 964 1033.33 914 983H1214C1164 1032.66 1064 1132.19 1064 1133Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M1212 983.995C1212 984.801 1112 884.334 1062 834H1362C1312 883.663 1212 983.19 1212 983.995Z" fill="#181C21" fill-opacity="0.5" stroke="#181C21"/>
<path d="M1062 833.995C1062 834.801 962 734.334 912 684H1212C1162 733.663 1062 833.19 1062 833.995Z" fill="#A8344B" stroke="#181C21"/>
<path d="M912 683.995C912 684.801 812 584.334 762 534H1062C1012 583.663 912 683.19 912 683.995Z" fill="#BEBFC1" fill-opacity="0.05" stroke="#181C21"/>
<path d="M762 533.995C762 534.801 662 434.334 612 384H912C862 433.663 762 533.19 762 533.995Z" fill="#1E5A9D" stroke="#181C21"/>
</g>
<g id="svg-layer-outlined" opacity="0.4">
<path d="M2 301L301.5 1.5H601.5L152.5 450.5L601 899H301.5L2 599.5V301Z" stroke="#181C21"/>
<path d="M302 899.995C302 900.801 202 800.334 152 750H452C402 799.663 302 899.19 302 899.995Z" stroke="#181C21"/>
<path d="M152 749.995C152 750.801 52 650.334 2 600H302C252 649.663 152 749.19 152 749.995Z" stroke="#181C21"/>
<path d="M151.995 451C152.801 451 52.334 551 2 601L1.99999 301C51.6628 351 151.19 451 151.995 451Z" stroke="#181C21"/>
<path d="M152 450.995C152 451.801 52 351.334 2 301H302C252 350.663 152 450.19 152 450.995Z" stroke="#181C21"/>
<path d="M302 300.995C302 301.801 202 201.334 152 151H452C402 200.663 302 300.19 302 300.995Z" stroke="#181C21"/>
<path d="M452 150.995C452 151.801 352 51.334 302 1H602C552 50.6628 452 150.19 452 150.995Z" stroke="#181C21"/>
<path d="M982.5 864L532.5 414.5H833.5L1282.5 863.5L833.5 1311.5H536L982.5 864Z" stroke="#181C21"/>
<path d="M832 1313C832 1313.8 732 1213.33 682 1163H982C932 1212.66 832 1312.19 832 1313Z" stroke="#181C21"/>
<path d="M984 1163C984 1163.8 884 1063.33 834 1013H1134C1084 1062.66 984 1162.19 984 1163Z" stroke="#181C21"/>
<path d="M1132 1014C1132 1014.8 1032 914.334 982 864H1282C1232 913.663 1132 1013.19 1132 1014Z" stroke="#181C21"/>
<path d="M982 863.995C982 864.801 882 764.334 832 714H1132C1082 763.663 982 863.19 982 863.995Z" stroke="#181C21"/>
<path d="M832 713.995C832 714.801 732 614.334 682 564H982C932 613.663 832 713.19 832 713.995Z" stroke="#181C21"/>
<path d="M682 563.995C682 564.801 582 464.334 532 414H832C782 463.663 682 563.19 682 563.995Z" stroke="#181C21"/>
</g>
</svg>
    `}};X.styles=[E`
      :host {
        --d-hero-image-offset-y: 0; /* -10%; */
        display: block;
      }
      * {
        box-sizing: border-box;
      }

      .hero-image {
        --d-hero-image-mouse-offset-x: 0;
        --d-hero-image-mouse-offset-y: 0;
        --d-hero-image-mouse-offset-distance: 3%;
        --d-hero-image-mouse-rotate-distance: 5deg;
        position: relative;
        inline-size: 100%;
        block-size: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      svg {
        display: block;
        inline-size: 100%;
        /* height: auto; */
        margin-inline: auto;
        transform: translateY(var(--d-hero-image-offset-y));
        transform-origin: center center;
      }

      .mouse-grid {
        display: grid;
        grid-template-columns: repeat(${T}, 1fr);
        grid-template-rows: repeat(${T}, 1fr);
        gap: 1px;
        inline-size: 100%;
        block-size: 100%;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
      }
      @media (prefers-reduced-motion: reduce) {
        .mouse-grid {
          display: none;
        }
      }
    `,...be.map((r,e)=>E`
          .hero-image:has(.x${e}:hover) {
            --d-hero-image-mouse-offset-x: ${r};
          }
          .hero-image:has(.y${e}:hover) {
            --d-hero-image-mouse-offset-y: ${r};
          }
        `),E`
      svg g {
        transform-origin: center center;
        transition: transform 0.5s;
      }

      @media (prefers-reduced-motion: no-preference) {
        #svg-layer-filled {
          /* transform: translate(
          calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-offset-distance)),
          calc(var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-offset-distance))
        ); */
          transform: translate(
              calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-offset-distance)),
              calc(var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-offset-distance))
            )
            rotateX(calc(0deg - var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-rotate-distance)))
            rotateY(calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-rotate-distance)));
        }

        #svg-layer-outlined {
          /* transform: translate(
          calc(var(--d-hero-image-mouse-offset-x) * -1 * var(--d-hero-image-mouse-offset-distance)),
          calc(var(--d-hero-image-mouse-offset-y) * -1 * var(--d-hero-image-mouse-offset-distance))
        ); */
          transform: translate(
              calc((var(--d-hero-image-mouse-offset-x) * 0.75) * var(--d-hero-image-mouse-offset-distance)),
              calc((var(--d-hero-image-mouse-offset-y) * 0.75) * var(--d-hero-image-mouse-offset-distance))
            )
            rotateX(calc(0deg - var(--d-hero-image-mouse-offset-y) * var(--d-hero-image-mouse-rotate-distance)))
            rotateY(calc(var(--d-hero-image-mouse-offset-x) * var(--d-hero-image-mouse-rotate-distance)));
        }
      }
    `];X=ct([we("d-hero-image")],X);const dt=R`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/></svg>`,ut=R`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"/></svg>`,pt=R`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"/><path d="M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"/></svg>`,ft=R`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"/></svg>`,$t=R`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z"/></svg>`;var mt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,Se=(r,e,t,i)=>{for(var s=i>1?void 0:i?gt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&mt(e,t,s),s};let b=class extends x{render(){return O`<span class="icon"
      >${b.icons[this.icon??"link-external"]??b.icons["link-external"]}</span
    >`}};b.icons={close:dt,envelope:ft,github:ut,"link-external":pt,"arrow-up":$t};b.styles=[E`
      :host {
        display: contents;
      }
      .icon {
        display: inline-block;
        vertical-align: middle;
        inline-size: 1em;
        aspect-ratio: 1;
      }
      .icon svg {
        vertical-align: middle;
        inline-size: 100%;
        block-size: 100%;
      }
    `];Se([Qe({type:String})],b.prototype,"icon",2);b=Se([we("d-icon-library")],b);const vt=xe(...Object.values(Ye));document.adoptedStyleSheets.push(...vt);let J=0,Z=null;function Ee(r=!1){const e=window.pageYOffset||document.documentElement.scrollTop;if(!r){const s=e>J?"down":"up";Math.abs(e-J)>5&&(document.body.dataset.scrollDirection=s),J=e}Z??(Z=document.getElementById("hero-subgroup"));const i=((Z==null?void 0:Z.getBoundingClientRect().top)??0)<1?"true":"false";document.body.dataset.pastHero=i}Ke(document,()=>{Ee(!0)});document.addEventListener("scroll",()=>{Ee()},{passive:!0});
