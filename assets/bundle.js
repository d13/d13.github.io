"use strict";(()=>{var g=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var W=globalThis,Y=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),$t=new WeakMap,N=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Y&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$t.set(e,t))}return t}toString(){return this.cssText}},yt=o=>new N(typeof o=="string"?o:o+"",void 0,it),A=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new N(e,o,it)},ot=(o,t)=>{if(Y)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=W.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}},Z=Y?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return yt(e)})(o):o;var{is:Bt,defineProperty:zt,getOwnPropertyDescriptor:qt,getOwnPropertyNames:Kt,getOwnPropertySymbols:Vt,getPrototypeOf:Wt}=Object,J=globalThis,bt=J.trustedTypes,Yt=bt?bt.emptyScript:"",Zt=J.reactiveElementPolyfillSupport,M=(o,t)=>o,I={toAttribute(o,t){switch(t){case Boolean:o=o?Yt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Q=(o,t)=>!Bt(o,t),vt={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:Q};Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&zt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:s}=qt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i?.call(this)},set(n){let a=i?.call(this);s.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??vt}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;let t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){let e=this.properties,r=[...Kt(e),...Vt(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ot(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:I).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:I;this._$Em=i,this[i]=n.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Q)(i?s:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[M("elementProperties")]=new Map,y[M("finalized")]=new Map,Zt?.({ReactiveElement:y}),(J.reactiveElementVersions??=[]).push("2.0.1");var Jt={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:Q},Qt=(o=Jt,t,e)=>{let{kind:r,metadata:i}=e,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(e.name,o),r==="accessor"){let{name:n}=e;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,o)},init(a){return a!==void 0&&this.C(n,void 0,o),a}}}if(r==="setter"){let{name:n}=e;return function(a){let l=this[n];t.call(this,a),this.requestUpdate(n,l,o)}}throw Error("Unsupported decorator location: "+r)};function d(o){return(t,e)=>typeof e=="object"?Qt(o,t,e):((r,i,s)=>{let n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(o,t,e)}var E=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);function G(o,t){return(e,r,i)=>{let s=n=>n.renderRoot?.querySelector(o)??null;if(t){let{get:n,set:a}=typeof r=="object"?e:i??(()=>{let l=Symbol();return{get(){return this[l]},set(p){this[l]=p}}})();return E(e,r,{get(){if(t){let l=n.call(this);return l===void 0&&(l=s(this),a.call(this,l)),l}return s(this)}})}return E(e,r,{get(){return s(this)}})}}var pt=globalThis,X=pt.trustedTypes,At=X?X.createPolicy("lit-html",{createHTML:o=>o}):void 0,Rt="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+v,Gt=`<${Dt}>`,w=document,H=()=>w.createComment(""),j=o=>o===null||typeof o!="object"&&typeof o!="function",Tt=Array.isArray,Xt=o=>Tt(o)||typeof o?.[Symbol.iterator]=="function",st=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,St=/>/g,S=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,wt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Pt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=Pt(1),Ie=Pt(2),O=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Ot=new WeakMap,x=w.createTreeWalker(w,129);function kt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return At!==void 0?At.createHTML(t):t}var te=(o,t)=>{let e=o.length-1,r=[],i,s=t===2?"<svg>":"",n=F;for(let a=0;a<e;a++){let l=o[a],p,u,h=-1,$=0;for(;$<l.length&&(n.lastIndex=$,u=n.exec(l),u!==null);)$=n.lastIndex,n===F?u[1]==="!--"?n=Et:u[1]!==void 0?n=St:u[2]!==void 0?(Ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=S):u[3]!==void 0&&(n=S):n===S?u[0]===">"?(n=i??F,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,p=u[1],n=u[3]===void 0?S:u[3]==='"'?wt:xt):n===wt||n===xt?n=S:n===Et||n===St?n=F:(n=S,i=void 0);let b=n===S&&o[a+1].startsWith("/>")?" ":"";s+=n===F?l+Gt:h>=0?(r.push(p),l.slice(0,h)+Rt+l.slice(h)+v+b):l+v+(h===-2?a:b)}return[kt(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),r]},L=class o{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,n=0,a=t.length-1,l=this.parts,[p,u]=te(t,e);if(this.el=o.createElement(p,r),x.currentNode=this.el.content,e===2){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=x.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Rt)){let $=u[n++],b=i.getAttribute(h).split(v),V=/([.?@])?(.*)/.exec($);l.push({type:1,index:s,name:V[2],strings:b,ctor:V[1]==="."?at:V[1]==="?"?lt:V[1]==="@"?ht:T}),i.removeAttribute(h)}else h.startsWith(v)&&(l.push({type:6,index:s}),i.removeAttribute(h));if(Ct.test(i.tagName)){let h=i.textContent.split(v),$=h.length-1;if($>0){i.textContent=X?X.emptyScript:"";for(let b=0;b<$;b++)i.append(h[b],H()),x.nextNode(),l.push({type:2,index:++s});i.append(h[$],H())}}}else if(i.nodeType===8)if(i.data===Dt)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(v,h+1))!==-1;)l.push({type:7,index:s}),h+=v.length-1}s++}}static createElement(t,e){let r=w.createElement("template");return r.innerHTML=t,r}};function D(o,t,e=o,r){if(t===O)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,s=j(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=D(o,i._$AS(o,t.values),i,r)),t}var nt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??w).importNode(e,!0);x.currentNode=i;let s=x.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let p;l.type===2?p=new B(s,s.nextSibling,this,t):l.type===1?p=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(p=new ct(s,this,t)),this._$AV.push(p),l=r[++a]}n!==l?.index&&(s=x.nextNode(),n++)}return x.currentNode=w,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},B=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),j(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Xt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==c&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(w.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=L.createElement(kt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new nt(i,this),n=s.u(this.options);s.p(e),this.$(n),this._$AH=s}}_$AC(t){let e=Ot.get(t.strings);return e===void 0&&Ot.set(t.strings,e=new L(t)),e}T(t){Tt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let s of t)i===e.length?e.push(r=new o(this.k(H()),this.k(H()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=c}_$AI(t,e=this,r,i){let s=this.strings,n=!1;if(s===void 0)t=D(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{let a=t,l,p;for(t=s[0],l=0;l<s.length-1;l++)p=D(this,a[r+l],e,l),p===O&&(p=this._$AH[l]),n||=!j(p)||p!==this._$AH[l],p===c?t=c:t!==c&&(t+=(p??"")+s[l+1]),this._$AH[l]=p}n&&!i&&this.O(t)}O(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends T{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===c?void 0:t}},lt=class extends T{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}},ht=class extends T{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??c)===O)return;let r=this._$AH,i=t===c&&r!==c||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==c&&(r===c||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ct=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var ee=pt.litHtmlPolyfillSupport;ee?.(L,B),(pt.litHtmlVersions??=[]).push("3.0.2");var Ut=(o,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let s=e?.renderBefore??null;r._$litPart$=i=new B(t.insertBefore(H(),s),s,void 0,e??{})}return i._$AI(o),i};var f=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};f._$litElement$=!0,f["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:f});var re=globalThis.litElementPolyfillSupport;re?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.0.1");var C=o=>o??c;var _=class extends f{};var Nt=function(o,t,e,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(i<3?n(s):i>3?n(t,e,s):n(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},P=class extends _{static{this.formAssociated=!0}get disabled(){return this._disabled}set disabled(t){let e=this._disabled;this.toggleAttribute("disabled",t),this.requestUpdate("disabled",e)}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}constructor(){super(),this._disabled=!1,this.name="",this._internals=this.attachInternals()}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formDisabledCallback(t){this._disabled=t,this._internals.ariaDisabled=t.toString(),this.requestUpdate()}};Nt([d({type:Boolean,reflect:!0})],P.prototype,"disabled",null);Nt([d({reflect:!0})],P.prototype,"name",void 0);var tt=A`
  :host {
    display: contents;
  }

  .button {
    appearance: none;
    display: inline-block;
  }
`;var dt=function(o,t,e,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(i<3?n(s):i>3?n(t,e,s):n(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},et=class extends P{constructor(){super(...arguments),this.type="button"}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[tt]}focus(t){this._buttonEl.focus(t)}blur(){this._buttonEl.blur()}click(){this._buttonEl.click()}handleClick(){switch(this.type){case"submit":this.form?.requestSubmit(this);break;case"reset":this.form?.reset();break;default:break}}render(){return m`<button
      class="button"
      part="base"
      type="${C(this.type)}"
      ?disabled=${this.disabled}
      @click=${this.handleClick}
    >
      <slot></slot>
    </button>`}};dt([G(".button",!0)],et.prototype,"_buttonEl",void 0);dt([d({reflect:!0})],et.prototype,"type",void 0);et=dt([g("kd-form-button")],et);var z=function(o,t,e,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(i<3?n(s):i>3?n(t,e,s):n(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},k=class extends _{static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[tt]}focus(t){this._buttonEl.focus(t)}blur(){this._buttonEl.blur()}click(){this._buttonEl.click()}render(){return m`<a
      class="button"
      part="base"
      href="${C(this.href)}"
      target="${C(this.target)}"
      rel="${C(this.rel)}"
      ><slot></slot
    ></a>`}};z([G(".button",!0)],k.prototype,"_buttonEl",void 0);z([d()],k.prototype,"href",void 0);z([d()],k.prototype,"target",void 0);z([d()],k.prototype,"rel",void 0);k=z([g("kd-link-button")],k);var Mt=function(o,t,e,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(i<3?n(s):i>3?n(t,e,s):n(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},ut=class extends _{static{this.styles=A`
    :host {
      --kd-phone-hero-block-offset: 12vh;
      --kd-phone-hero-content-width: 80;
      --kd-phone-hero-content-gap: 20px;
      display: block;
      contain: content;
      height: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: auto 100%;
      background-position: left calc((var(--kd-phone-hero-content-width) * 1vw) + var(--kd-phone-hero-content-gap))
        bottom calc(-1 * var(--kd-phone-hero-block-offset));
      background-image: var(--kd-phone-hero-background-image, none);

      animation-name: phone-home;
      animation-duration: 0.65s;
    }

    @media (min-width: 480px) {
      :host {
        --kd-phone-hero-block-offset: 30vh;
        --kd-phone-hero-content-width: 70;
      }
    }

    @media (min-width: 624px) {
      :host {
        --kd-phone-hero-content-width: 60;
      }
    }

    @media (min-width: 768px) {
      :host {
        --kd-phone-hero-content-width: 50;
      }
    }

    @keyframes phone-home {
      from {
        background-position: left calc((var(--kd-phone-hero-content-width) * 1vw) + var(--kd-phone-hero-content-gap))
          bottom -100vh;
      }

      to {
        background-position: left calc((var(--kd-phone-hero-content-width) * 1vw) + var(--kd-phone-hero-content-gap))
          bottom calc(-1 * var(--kd-phone-hero-block-offset));
      }
    }

    .container {
      display: flex;
      height: 100%;
      max-width: 900px;
      margin-inline: auto;
      padding-block-start: var(--kd-phone-hero-block-offset);
      padding-inline: var(--spacing-md);
    }

    .content {
      display: block;
      max-inline-size: calc(var(--kd-phone-hero-content-width) * 1%);
    }
  `}updated(){this.src&&this.style.setProperty("--kd-phone-hero-background-image",`url(${this.src})`)}render(){return m`<div class="container"><slot class="content"></slot></div>`}};Mt([d({type:String})],ut.prototype,"src",void 0);ut=Mt([g("kd-phone-hero")],ut);var It=new Map;function ie(o){let t=It.get(o);return t||(t=new Intl.DateTimeFormat(void 0,o),It.set(o,t)),t}var oe=Object.freeze({year:"numeric",month:"long"});function K(o,t=oe){return ie(t).format(o)}var Rr=Object.freeze({numeric:"auto"});var mt=1e3,ft=mt*60,_t=ft*60,q=_t*24,Ft=q*7,Ht=q*30,gt=q*365,jt=gt*4,Dr=Object.freeze(new Map([["year",gt],["years",gt],["quarter",jt],["quarters",jt],["month",Ht],["months",Ht],["week",Ft],["weeks",Ft],["day",q],["days",q],["hour",_t],["hours",_t],["minute",ft],["minutes",ft],["second",mt],["seconds",mt]]));var Tr=Object.freeze({localeMatcher:"best fit",numeric:"always",style:"narrow"});var U=function(o,t,e,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(i<3?n(s):i>3?n(t,e,s):n(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},rt,R=class extends _{constructor(){super(...arguments),this.type="other"}static{rt=this}static{this.now=new Date}static{this.styles=[A`
      :host {
        contain: content;
        display: block;
      }

      .media {
        max-inline-size: 100%;
        block-size: auto;
      }

      .title {
        display: block;
      }

      .content {
        display: block;
      }
    `]}get endingDate(){if(this.date==="present")return rt.now;let t=new Date(this.date);if(t.toString()!=="Invalid Date")return t}get startingDate(){if(this.startDate===void 0)return;let t=new Date(this.startDate);if(t.toString()!=="Invalid Date")return t}renderDateRange(){return this.endingDate===void 0?c:this.startingDate===void 0?this.date==="present"?m`<time datetime="${rt.now.getFullYear()}">Present</time>`:m`<time datetime="${this.endingDate.toISOString()}">${K(this.endingDate)}</time>`:this.date==="present"?m`<time datetime="${this.startingDate.toISOString()}">${K(this.startingDate)}</time> - Present`:m`<time datetime="${this.startingDate.toISOString()}">${K(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${K(this.endingDate)}</time>`}render(){return m`
      ${this.asset?m`<img class="media" src="${this.asset}" alt="" />`:c} ${this.renderDateRange()}
      <slot name="title" class="title"></slot>
      <slot class="content"></slot>
    `}};U([d()],R.prototype,"type",void 0);U([d()],R.prototype,"asset",void 0);U([d()],R.prototype,"date",void 0);U([d({attribute:"start-date"})],R.prototype,"startDate",void 0);U([d()],R.prototype,"url",void 0);R=rt=U([g("kd-life-event")],R);var se=function(o,t,e,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(s=(i<3?n(s):i>3?n(t,e,s):n(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},Lt=class extends _{render(){return m`<slot></slot>`}};Lt=se([g("kd-life-events")],Lt);})();
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
