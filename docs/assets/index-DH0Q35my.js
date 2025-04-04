/**
* Copyright Keith Daulton 2025
* See /assets/vendor.LICENSE.txt for 3rd party license information.
**/
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function xe(...o){const e=[];for(const t of o)t.styleSheet&&e.push(t.styleSheet);return e}const R=globalThis,Q=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),ne=new WeakMap;let ye=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Q&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ne.set(t,e))}return e}toString(){return this.cssText}};const Ze=o=>new ye(typeof o=="string"?o:o+"",void 0,ee),L=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((r,s,n)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new ye(t,o,ee)},He=(o,e)=>{if(Q)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=R.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,o.appendChild(r)}},le=Q?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ze(t)})(o):o;const{is:Pe,defineProperty:Oe,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:Be,getOwnPropertySymbols:Te,getPrototypeOf:ze}=Object,g=globalThis,ae=g.trustedTypes,De=ae?ae.emptyScript:"",q=g.reactiveElementPolyfillSupport,O=(o,e)=>o,I={toAttribute(o,e){switch(e){case Boolean:o=o?De:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},te=(o,e)=>!Pe(o,e),he={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Oe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:n}=Ue(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get(){return s==null?void 0:s.call(this)},set(i){const a=s==null?void 0:s.call(this);n.call(this,i),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,r=[...Be(t),...Te(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(le(s))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return He(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const i=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:I).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)==null?void 0:n.fromAttribute)!==void 0?i.converter:I;this._$Em=s,this[s]=a.fromAttribute(t,i.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??te)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,i]of s)i.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[O("elementProperties")]=new Map,k[O("finalized")]=new Map,q==null||q({ReactiveElement:k}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");const U=globalThis,j=U.trustedTypes,de=j?j.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ae="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+$,Ne=`<${Me}>`,A=document,B=()=>A.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",se=Array.isArray,Re=o=>se(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",G=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,pe=/>/g,v=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,fe=/"/g,we=/^(?:script|style|textarea|title)$/i,ke=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=ke(1),D=ke(2),M=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Ce=new WeakMap,y=A.createTreeWalker(A,129);function Le(o,e){if(!se(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const Ie=(o,e)=>{const t=o.length-1,r=[];let s,n=e===2?"<svg>":e===3?"<math>":"",i=Z;for(let a=0;a<t;a++){const l=o[a];let d,u,h=-1,p=0;for(;p<l.length&&(i.lastIndex=p,u=i.exec(l),u!==null);)p=i.lastIndex,i===Z?u[1]==="!--"?i=ce:u[1]!==void 0?i=pe:u[2]!==void 0?(we.test(u[2])&&(s=RegExp("</"+u[2],"g")),i=v):u[3]!==void 0&&(i=v):i===v?u[0]===">"?(i=s??Z,h=-1):u[1]===void 0?h=-2:(h=i.lastIndex-u[2].length,d=u[1],i=u[3]===void 0?v:u[3]==='"'?fe:ue):i===fe||i===ue?i=v:i===ce||i===pe?i=Z:(i=v,s=void 0);const c=i===v&&o[a+1].startsWith("/>")?" ":"";n+=i===Z?l+Ne:h>=0?(r.push(d),l.slice(0,h)+Ae+l.slice(h)+$+c):l+$+(h===-2?a:c)}return[Le(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class z{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let n=0,i=0;const a=e.length-1,l=this.parts,[d,u]=Ie(e,t);if(this.el=z.createElement(d,r),y.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=y.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Ae)){const p=u[i++],c=s.getAttribute(h).split($),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:f[2],strings:c,ctor:f[1]==="."?Ve:f[1]==="?"?We:f[1]==="@"?Fe:W}),s.removeAttribute(h)}else h.startsWith($)&&(l.push({type:6,index:n}),s.removeAttribute(h));if(we.test(s.tagName)){const h=s.textContent.split($),p=h.length-1;if(p>0){s.textContent=j?j.emptyScript:"";for(let c=0;c<p;c++)s.append(h[c],B()),y.nextNode(),l.push({type:2,index:++n});s.append(h[p],B())}}}else if(s.nodeType===8)if(s.data===Me)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)l.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(e,t){const r=A.createElement("template");return r.innerHTML=e,r}}function S(o,e,t=o,r){var i,a;if(e===M)return e;let s=r!==void 0?(i=t._$Co)==null?void 0:i[r]:t._$Cl;const n=T(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=S(o,s._$AS(o,e.values),s,r)),e}let je=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??A).importNode(t,!0);y.currentNode=s;let n=y.nextNode(),i=0,a=0,l=r[0];for(;l!==void 0;){if(i===l.index){let d;l.type===2?d=new x(n,n.nextSibling,this,e):l.type===1?d=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(d=new qe(n,this,e)),this._$AV.push(d),l=r[++a]}i!==(l==null?void 0:l.index)&&(n=y.nextNode(),i++)}return y.currentNode=A,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};class x{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),T(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Re(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=z.createElement(Le(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const i=new je(s,this),a=i.u(this.options);i.p(t),this.T(a),this._$AH=i}}_$AC(e){let t=Ce.get(e.strings);return t===void 0&&Ce.set(e.strings,t=new z(e)),t}k(e){se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const n of e)s===t.length?t.push(r=new x(this.O(B()),this.O(B()),this,this.options)):r=t[s],r._$AI(n),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=C}_$AI(e,t=this,r,s){const n=this.strings;let i=!1;if(n===void 0)e=S(this,e,t,0),i=!T(e)||e!==this._$AH&&e!==M,i&&(this._$AH=e);else{const a=e;let l,d;for(e=n[0],l=0;l<n.length-1;l++)d=S(this,a[r+l],t,l),d===M&&(d=this._$AH[l]),i||(i=!T(d)||d!==this._$AH[l]),d===C?e=C:e!==C&&(e+=(d??"")+n[l+1]),this._$AH[l]=d}i&&!s&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ve extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}class We extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}}class Fe extends W{constructor(e,t,r,s,n){super(e,t,r,s,n),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??C)===M)return;const r=this._$AH,s=e===C&&r!==C||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==C&&(r===C||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qe{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const Ge={I:x},Y=U.litHtmlPolyfillSupport;Y==null||Y(z,x),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.2.1");const Ye=(o,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new x(e.insertBefore(B(),n),n,void 0,t??{})}return s._$AI(o),s};let E=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return M}};var _e;E._$litElement$=!0,E.finalized=!0,(_e=globalThis.litElementHydrateSupport)==null||_e.call(globalThis,{LitElement:E});const K=globalThis.litElementPolyfillSupport;K==null||K({LitElement:E});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Ke=L`
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
`,Je=L`
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
`,Xe=Object.freeze(Object.defineProperty({__proto__:null,a11yStyles:Je,linkStyles:Ke},Symbol.toStringTag,{value:"Module"}));function Qe(o,e,t,r=!0){const s=o===window,n=document.readyState,i=e;if(n==="loading"||n==="interactive"&&s){const a=s?"load":"DOMContentLoaded";o.addEventListener(a,i,{once:!0})}else r&&i()}const re=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};const et={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:te},tt=(o=et,e,t)=>{const{kind:r,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,o),r==="accessor"){const{name:i}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,l,o)},init(a){return a!==void 0&&this.P(i,void 0,o),a}}}if(r==="setter"){const{name:i}=t;return function(a){const l=this[i];e.call(this,a),this.requestUpdate(i,l,o)}}throw Error("Unsupported decorator location: "+r)};function st(o){return(e,t)=>typeof t=="object"?tt(o,e,t):((r,s,n)=>{const i=s.hasOwnProperty(n);return s.constructor.createProperty(n,i?{...r,wrapped:!0}:r),i?Object.getOwnPropertyDescriptor(s,n):void 0})(o,e,t)}function*rt(o,e,t=1){const r=e===void 0?0:o;e??(e=o);for(let s=r;t>0?s<e:e<s;s+=t)yield s}const ot={CHILD:2},it=o=>(...e)=>({_$litDirective$:o,values:e});class nt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:lt}=Ge,me=()=>document.createComment(""),H=(o,e,t)=>{var n;const r=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){const i=r.insertBefore(me(),s),a=r.insertBefore(me(),s);t=new lt(i,a,o,o.options)}else{const i=t._$AB.nextSibling,a=t._$AM,l=a!==o;if(l){let d;(n=t._$AQ)==null||n.call(t,o),t._$AM=o,t._$AP!==void 0&&(d=o._$AU)!==a._$AU&&t._$AP(d)}if(i!==s||l){let d=t._$AA;for(;d!==i;){const u=d.nextSibling;r.insertBefore(d,s),d=u}}}return t},_=(o,e,t=o)=>(o._$AI(e,t),o),at={},ht=(o,e=at)=>o._$AH=e,dt=o=>o._$AH,J=o=>{var r;(r=o._$AP)==null||r.call(o,!1,!0);let e=o._$AA;const t=o._$AB.nextSibling;for(;e!==t;){const s=e.nextSibling;e.remove(),e=s}};const $e=(o,e,t)=>{const r=new Map;for(let s=e;s<=t;s++)r.set(o[s],s);return r},ct=it(class extends nt{constructor(o){if(super(o),o.type!==ot.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);const s=[],n=[];let i=0;for(const a of o)s[i]=r?r(a,i):i,n[i]=t(a,i),i++;return{values:n,keys:s}}render(o,e,t){return this.dt(o,e,t).values}update(o,[e,t,r]){const s=dt(o),{values:n,keys:i}=this.dt(e,t,r);if(!Array.isArray(s))return this.ut=i,n;const a=this.ut??(this.ut=[]),l=[];let d,u,h=0,p=s.length-1,c=0,f=n.length-1;for(;h<=p&&c<=f;)if(s[h]===null)h++;else if(s[p]===null)p--;else if(a[h]===i[c])l[c]=_(s[h],n[c]),h++,c++;else if(a[p]===i[f])l[f]=_(s[p],n[f]),p--,f--;else if(a[h]===i[f])l[f]=_(s[h],n[f]),H(o,l[f+1],s[h]),h++,f--;else if(a[p]===i[c])l[c]=_(s[p],n[c]),H(o,s[h],s[p]),p--,c++;else if(d===void 0&&(d=$e(i,c,f),u=$e(a,h,p)),d.has(a[h]))if(d.has(a[p])){const m=u.get(i[c]),F=m!==void 0?s[m]:null;if(F===null){const ie=H(o,s[h]);_(ie,n[c]),l[c]=ie}else l[c]=_(F,n[c]),H(o,s[h],F),s[m]=null;c++}else J(s[p]),p--;else J(s[h]),h++;for(;c<=f;){const m=H(o,l[f+1]);_(m,n[c]),l[c++]=m}for(;h<=p;){const m=s[h++];m!==null&&J(m)}return this.ut=i,ht(o,l),M}}),be=Array.from(rt(-6,7,1)),P=be.length,oe=class oe extends E{render(){return b`<div class="hero-image">
      ${this.renderMedia()}${this.renderMouseGrid()}
    </div>`}renderMouseGrid(){return b`<div class="mouse-grid">
      ${ct(Array.from({length:P**2}),(e,t)=>b`<div
            class="x${t%P} y${Math.floor(t/P)}"
          ></div>`)}
    </div>`}};oe.styles=[L`
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
        block-size: 100%;
        margin-inline: auto;
        transform: translateY(var(--d-hero-image-offset-y));
        transform-origin: center center;
      }

      .mouse-grid {
        display: grid;
        grid-template-columns: repeat(${P}, 1fr);
        grid-template-rows: repeat(${P}, 1fr);
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
    `,...be.map((e,t)=>L`
          .hero-image:has(.x${t}:hover) {
            --d-hero-image-mouse-offset-x: ${e};
          }
          .hero-image:has(.y${t}:hover) {
            --d-hero-image-mouse-offset-y: ${e};
          }
        `),L`
      [fill="#BEBFC1"],
      [fill="#6B6E71"] {
        fill: var(--color-raw-neutral-50);
      }

      [fill="#2A84E6"] {
        fill: var(--color-raw-blue-50);
      }

      [fill="#D32429"] {
        fill: var(--color-raw-red-50);
      }

      [fill="#A8344B"] {
        fill: var(--color-raw-red-30);
      }

      [fill="#1E5A9D"] {
        fill: var(--color-raw-blue-30);
      }

      :host-context([data-theme="auto"]),
      :host-context([data-theme="light"]) {
        [fill="#181C21"] {
          fill: var(--color-raw-neutral-70);
        }

        [stroke="#181C21"] {
          stroke: var(--color-raw-neutral-70);
        }
      }

      @media (prefers-color-scheme: dark) {
        :host-context([data-theme="auto"]) {
          [fill="#181C21"] {
            fill: var(--color-raw-neutral-10);
          }
          [stroke="#181C21"] {
            stroke: var(--color-raw-neutral-10);
          }
        }
      }

      :host-context([data-theme="dark"]) {
        [fill="#181C21"] {
          fill: var(--color-raw-neutral-10);
        }

        [stroke="#181C21"] {
          stroke: var(--color-raw-neutral-10);
        }
      }

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
              calc(
                var(--d-hero-image-mouse-offset-x) *
                  var(--d-hero-image-mouse-offset-distance)
              ),
              calc(
                var(--d-hero-image-mouse-offset-y) *
                  var(--d-hero-image-mouse-offset-distance)
              )
            )
            rotateX(
              calc(
                0deg - var(--d-hero-image-mouse-offset-y) *
                  var(--d-hero-image-mouse-rotate-distance)
              )
            )
            rotateY(
              calc(
                var(--d-hero-image-mouse-offset-x) *
                  var(--d-hero-image-mouse-rotate-distance)
              )
            );
        }

        #svg-layer-outlined {
          /* transform: translate(
          calc(var(--d-hero-image-mouse-offset-x) * -1 * var(--d-hero-image-mouse-offset-distance)),
          calc(var(--d-hero-image-mouse-offset-y) * -1 * var(--d-hero-image-mouse-offset-distance))
        ); */
          transform: translate(
              calc(
                (var(--d-hero-image-mouse-offset-x) * 0.75) *
                  var(--d-hero-image-mouse-offset-distance)
              ),
              calc(
                (var(--d-hero-image-mouse-offset-y) * 0.75) *
                  var(--d-hero-image-mouse-offset-distance)
              )
            )
            rotateX(
              calc(
                0deg - var(--d-hero-image-mouse-offset-y) *
                  var(--d-hero-image-mouse-rotate-distance)
              )
            )
            rotateY(
              calc(
                var(--d-hero-image-mouse-offset-x) *
                  var(--d-hero-image-mouse-rotate-distance)
              )
            );
        }
      }
    `];let V=oe;var pt=Object.getOwnPropertyDescriptor,ut=(o,e,t,r)=>{for(var s=r>1?void 0:r?pt(e,t):e,n=o.length-1,i;n>=0;n--)(i=o[n])&&(s=i(s)||s);return s};let ge=class extends V{renderMedia(){return b`
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
    `}};ge=ut([re("d-hero-image")],ge);var ft=Object.getOwnPropertyDescriptor,Ct=(o,e,t,r)=>{for(var s=r>1?void 0:r?ft(e,t):e,n=o.length-1,i;n>=0;n--)(i=o[n])&&(s=i(s)||s);return s};let ve=class extends V{renderMedia(){return b`
<svg width="1504" height="586" viewBox="0 0 1504 586" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="svg-layer-filled">
<path d="M302 4.00256C302 3.57304 355.333 57.1552 382 84L222 84C248.667 57.5131 302 4.43208 302 4.00256Z" fill="#181C21" stroke="#181C21"/>
<path d="M461.997 164C462.427 164 408.845 217.333 382 244L382 84C408.487 110.667 461.568 164 461.997 164Z" stroke="#181C21"/>
<path d="M461.997 324C462.427 324 408.845 377.333 382 404L382 244C408.487 270.667 461.568 324 461.997 324Z" fill="#1E5A9D" stroke="#181C21"/>
<path d="M382.003 84C381.573 84 435.155 30.6667 462 4L462 164C435.513 137.333 382.432 84 382.003 84Z" fill="#1E5A9D" stroke="#181C21"/>
<path d="M461.997 484C462.427 484 408.845 537.333 382 564L382 404C408.487 430.667 461.568 484 461.997 484Z" fill="#181C21" stroke="#181C21"/>
<path d="M462.003 324C461.573 324 515.155 270.667 542 244L542 404C515.513 377.333 462.432 324 462.003 324Z" fill="#A8344B" stroke="#181C21"/>
<path d="M222 84.0026C222 83.573 275.333 137.155 302 164L142 164C168.667 137.513 222 84.4321 222 84.0026Z" fill="#2A84E6" stroke="#181C21"/>
<path d="M142 164.003C142 163.573 195.333 217.155 222 244L62 244C88.6667 217.513 142 164.432 142 164.003Z" fill="#A8344B" stroke="#181C21"/>
<path d="M222.003 244C221.573 244 275.155 190.667 302 164L302 324C275.513 297.333 222.432 244 222.003 244Z" fill="#6B6E71" stroke="#181C21"/>
<path d="M302 324.002C302 323.573 355.333 377.155 382 404L222 404C248.667 377.513 302 324.432 302 324.002Z" fill="#D32429" stroke="#181C21"/>
<path d="M222 244.003C222 243.573 275.333 297.155 302 324L142 324C168.667 297.513 222 244.432 222 244.003Z" fill="#1E5A9D" stroke="#181C21"/>
<path d="M462 484V4L302 4.00001M221.5 404L62 244M381.5 244L302.5 323M302 164L382 84" stroke="#181C21"/>
<path d="M1263 4.00256C1263 3.57304 1316.33 57.1552 1343 84L1183 84C1209.67 57.5131 1263 4.43208 1263 4.00256Z" fill="#1E5A9D" stroke="#181C21"/>
<path d="M1423 164C1423.43 164 1369.84 217.333 1343 244L1343 84C1369.49 110.667 1422.57 164 1423 164Z" stroke="#181C21"/>
<path d="M1423 324C1423.43 324 1369.84 377.333 1343 404L1343 244C1369.49 270.667 1422.57 324 1423 324Z" fill="#6B6E71" stroke="#181C21"/>
<path d="M1343 84C1342.57 84 1396.16 30.6667 1423 4L1423 164C1396.51 137.333 1343.43 84 1343 84Z" fill="#D32429" stroke="#181C21"/>
<path d="M1423 484C1423.43 484 1369.84 537.333 1343 564L1343 404C1369.49 430.667 1422.57 484 1423 484Z" fill="#A8344B" stroke="#181C21"/>
<path d="M1423 324C1422.57 324 1476.16 270.667 1503 244L1503 404C1476.51 377.333 1423.43 324 1423 324Z" fill="#181C21" stroke="#181C21"/>
<path d="M1183 84.0026C1183 83.573 1236.33 137.155 1263 164L1103 164C1129.67 137.513 1183 84.4321 1183 84.0026Z" fill="#6B6E71" stroke="#181C21"/>
<path d="M1103 164.003C1103 163.573 1156.33 217.155 1183 244L1023 244C1049.67 217.513 1103 164.432 1103 164.003Z" fill="#181C21" stroke="#181C21"/>
<path d="M1183 244C1182.57 244 1236.16 190.667 1263 164L1263 324C1236.51 297.333 1183.43 244 1183 244Z" stroke="#181C21"/>
<path d="M1263 324.002C1263 323.573 1316.33 377.155 1343 404L1183 404C1209.67 377.513 1263 324.432 1263 324.002Z" fill="#1E5A9D" stroke="#181C21"/>
<path d="M1183 244.003C1183 243.573 1236.33 297.155 1263 324L1103 324C1129.67 297.513 1183 244.432 1183 244.003Z" fill="#2A84E6" stroke="#181C21"/>
<path d="M1423 484V4L1263 4.00001M1182.5 404L1023 244M1342.5 244L1263.5 323M1263 164L1343 84" stroke="#181C21"/>
<path d="M741.997 404C742.427 404 688.845 457.333 662 484L662 324C688.487 350.667 741.568 404 741.997 404Z" fill="#6B6E71" stroke="#181C21"/>
<path d="M742 563.997C742 564.427 688.667 510.845 662 484H822C795.333 510.487 742 563.568 742 563.997Z" fill="#181C21" stroke="#181C21"/>
<path d="M582.003 244C581.573 244 635.155 190.667 662 164L662 324C635.513 297.333 582.432 244 582.003 244Z" fill="#181C21" stroke="#181C21"/>
<path d="M662.003 164C661.573 164 715.155 110.667 742 84L742 244C715.513 217.333 662.432 164 662.003 164Z" fill="#D32429" stroke="#181C21"/>
<path d="M742.003 82C741.573 82 795.155 28.6667 822 2L822 162C795.513 135.333 742.432 82 742.003 82Z" fill="#1E5A9D" stroke="#181C21"/>
<path d="M902 81.9974C902 82.4269 848.667 28.8448 822 2L982 2C955.333 28.4868 902 81.5679 902 81.9974Z" fill="#A8344B" stroke="#181C21"/>
<path d="M981.997 324C982.427 324 928.845 377.333 902 404L902 244C928.487 270.667 981.568 324 981.997 324Z" fill="#1E5A9D" stroke="#181C21"/>
<path d="M981.997 163C982.427 163 928.845 216.333 902 243L902 83C928.487 109.667 981.568 163 981.997 163Z" fill="#6B6E71" stroke="#181C21"/>
<path d="M901.997 404C902.427 404 848.845 457.333 822 484L822 324C848.487 350.667 901.568 404 901.997 404Z" fill="#2A84E6" stroke="#181C21"/>
<path d="M742 404L902 243M662 324L902 82M982.5 1.5L982 324" stroke="#181C21"/>
</g>
<g id="svg-layer-outlined" opacity="0.4">
<path d="M242 24.0026C242 23.573 295.333 77.1552 322 104L162 104C188.667 77.5131 242 24.4321 242 24.0026Z" stroke="#181C21"/>
<path d="M401.997 184C402.427 184 348.845 237.333 322 264L322 104C348.487 130.667 401.568 184 401.997 184Z" stroke="#181C21"/>
<path d="M401.997 344C402.427 344 348.845 397.333 322 424L322 264C348.487 290.667 401.568 344 401.997 344Z" stroke="#181C21"/>
<path d="M322.003 104C321.573 104 375.155 50.6667 402 24L402 184C375.513 157.333 322.432 104 322.003 104Z" stroke="#181C21"/>
<path d="M401.997 504C402.427 504 348.845 557.333 322 584L322 424C348.487 450.667 401.568 504 401.997 504Z" stroke="#181C21"/>
<path d="M402.003 344C401.573 344 455.155 290.667 482 264L482 424C455.513 397.333 402.432 344 402.003 344Z" stroke="#181C21"/>
<path d="M162 104.003C162 103.573 215.333 157.155 242 184L82 184C108.667 157.513 162 104.432 162 104.003Z" stroke="#181C21"/>
<path d="M82 184.003C82 183.573 135.333 237.155 162 264L2 264C28.6667 237.513 82 184.432 82 184.003Z" stroke="#181C21"/>
<path d="M162.003 264C161.573 264 215.155 210.667 242 184L242 344C215.513 317.333 162.432 264 162.003 264Z" stroke="#181C21"/>
<path d="M242 344.002C242 343.573 295.333 397.155 322 424L162 424C188.667 397.513 242 344.432 242 344.002Z" stroke="#181C21"/>
<path d="M162 264.003C162 263.573 215.333 317.155 242 344L82 344C108.667 317.513 162 264.432 162 264.003Z" stroke="#181C21"/>
<path d="M402 504V24L242 24M161.5 424L2 264M321.5 264L242.5 343M242 184L322 104" stroke="#181C21"/>
<path d="M1203 24.0026C1203 23.573 1256.33 77.1552 1283 104L1123 104C1149.67 77.5131 1203 24.4321 1203 24.0026Z" stroke="#181C21"/>
<path d="M1363 184C1363.43 184 1309.84 237.333 1283 264L1283 104C1309.49 130.667 1362.57 184 1363 184Z" stroke="#181C21"/>
<path d="M1363 344C1363.43 344 1309.84 397.333 1283 424L1283 264C1309.49 290.667 1362.57 344 1363 344Z" stroke="#181C21"/>
<path d="M1283 104C1282.57 104 1336.16 50.6667 1363 24L1363 184C1336.51 157.333 1283.43 104 1283 104Z" stroke="#181C21"/>
<path d="M1363 504C1363.43 504 1309.84 557.333 1283 584L1283 424C1309.49 450.667 1362.57 504 1363 504Z" stroke="#181C21"/>
<path d="M1363 344C1362.57 344 1416.16 290.667 1443 264L1443 424C1416.51 397.333 1363.43 344 1363 344Z" stroke="#181C21"/>
<path d="M1123 104.003C1123 103.573 1176.33 157.155 1203 184L1043 184C1069.67 157.513 1123 104.432 1123 104.003Z" stroke="#181C21"/>
<path d="M1043 184.003C1043 183.573 1096.33 237.155 1123 264L963 264C989.667 237.513 1043 184.432 1043 184.003Z" stroke="#181C21"/>
<path d="M1123 264C1122.57 264 1176.16 210.667 1203 184L1203 344C1176.51 317.333 1123.43 264 1123 264Z" stroke="#181C21"/>
<path d="M1203 344.002C1203 343.573 1256.33 397.155 1283 424L1123 424C1149.67 397.513 1203 344.432 1203 344.002Z" stroke="#181C21"/>
<path d="M1123 264.003C1123 263.573 1176.33 317.155 1203 344L1043 344C1069.67 317.513 1123 264.432 1123 264.003Z" stroke="#181C21"/>
<path d="M1363 504V24L1203 24M1122.5 424L963 264M1282.5 264L1203.5 343M1203 184L1283 104" stroke="#181C21"/>
<path d="M681.997 424C682.427 424 628.845 477.333 602 504L602 344C628.487 370.667 681.568 424 681.997 424Z" stroke="#181C21"/>
<path d="M682 583.997C682 584.427 628.667 530.845 602 504H762C735.333 530.487 682 583.568 682 583.997Z" stroke="#181C21"/>
<path d="M522.003 264C521.573 264 575.155 210.667 602 184L602 344C575.513 317.333 522.432 264 522.003 264Z" stroke="#181C21"/>
<path d="M602.003 184C601.573 184 655.155 130.667 682 104L682 264C655.513 237.333 602.432 184 602.003 184Z" stroke="#181C21"/>
<path d="M682.003 102C681.573 102 735.155 48.6667 762 22L762 182C735.513 155.333 682.432 102 682.003 102Z" stroke="#181C21"/>
<path d="M842 101.997C842 102.427 788.667 48.8448 762 22L922 22C895.333 48.4868 842 101.568 842 101.997Z" stroke="#181C21"/>
<path d="M921.997 344C922.427 344 868.845 397.333 842 424L842 264C868.487 290.667 921.568 344 921.997 344Z" stroke="#181C21"/>
<path d="M921.997 183C922.427 183 868.845 236.333 842 263L842 103C868.487 129.667 921.568 183 921.997 183Z" stroke="#181C21"/>
<path d="M841.997 424C842.427 424 788.845 477.333 762 504L762 344C788.487 370.667 841.568 424 841.997 424Z" stroke="#181C21"/>
<path d="M682 424L842 263M602 344L842 102M922.5 21.5L922 344" stroke="#181C21"/>
</g>
</svg>

    `}};ve=Ct([re("d-error-image")],ve);const mt=D`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/></svg>`,$t=D`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"/></svg>`,gt=D`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"/><path d="M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"/></svg>`,vt=D`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"/></svg>`,_t=D`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z"/></svg>`;var yt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Ee=(o,e,t,r)=>{for(var s=r>1?void 0:r?At(e,t):e,n=o.length-1,i;n>=0;n--)(i=o[n])&&(s=(r?i(e,t,s):i(s))||s);return r&&s&&yt(e,t,s),s};let w=class extends E{render(){return b`<span class="icon"
      >${w.icons[this.icon??"link-external"]??w.icons["link-external"]}</span
    >`}};w.icons={close:mt,envelope:vt,github:$t,"link-external":gt,"arrow-up":_t};w.styles=[L`
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
    `];Ee([st({type:String})],w.prototype,"icon",2);w=Ee([re("d-icon-library")],w);const Mt=xe(...Object.values(Xe));document.adoptedStyleSheets.push(...Mt);let X=0,N=null;function Se(o=!1){const e=window.pageYOffset||document.documentElement.scrollTop;if(!o){const s=e>X?"down":"up";Math.abs(e-X)>5&&(document.body.dataset.scrollDirection=s),X=e}N??(N=document.getElementById("hero-subgroup"));const r=((N==null?void 0:N.getBoundingClientRect().top)??0)<1?"true":"false";document.body.dataset.pastHero=r}Qe(document,()=>{Se(!0)});document.addEventListener("scroll",()=>{Se()},{passive:!0});
