"use strict";(()=>{var Ht=Object.defineProperty;var Ft=Object.getOwnPropertyDescriptor;var p=(o,t,e,r)=>{for(var i=r>1?void 0:r?Ft(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&Ht(t,e,i),i};var Z=globalThis,Y=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),mt=new WeakMap,N=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Y&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&mt.set(e,t))}return t}toString(){return this.cssText}},ut=o=>new N(typeof o=="string"?o:o+"",void 0,tt),b=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new N(e,o,tt)},et=(o,t)=>{if(Y)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=Z.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}},L=Y?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return ut(e)})(o):o;var{is:jt,defineProperty:qt,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:Vt,getOwnPropertySymbols:Wt,getPrototypeOf:Zt}=Object,J=globalThis,ft=J.trustedTypes,Yt=ft?ft.emptyScript:"",Lt=J.reactiveElementPolyfillSupport,P=(o,t)=>o,z={toAttribute(o,t){switch(t){case Boolean:o=o?Yt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},X=(o,t)=>!jt(o,t),gt={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&qt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:s}=Bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i?.call(this)},set(n){let l=i?.call(this);s.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gt}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;let t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){let e=this.properties,r=[...Vt(e),...Wt(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(L(i))}else t!==void 0&&e.push(L(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return et(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:z).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:z;this._$Em=i,this[i]=n.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??X)(i?s:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[P("elementProperties")]=new Map,_[P("finalized")]=new Map,Lt?.({ReactiveElement:_}),(J.reactiveElementVersions??=[]).push("2.0.1");var lt=globalThis,Q=lt.trustedTypes,bt=Q?Q.createPolicy("lit-html",{createHTML:o=>o}):void 0,xt="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,St="?"+S,Jt=`<${St}>`,C=document,H=()=>C.createComment(""),F=o=>o===null||typeof o!="object"&&typeof o!="function",wt=Array.isArray,Xt=o=>wt(o)||typeof o?.[Symbol.iterator]=="function",rt=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,yt=/>/g,k=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,_t=/"/g,Et=/^(?:script|style|textarea|title)$/i,kt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=kt(1),ce=kt(2),O=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),At=new WeakMap,T=C.createTreeWalker(C,129);function Tt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}var Qt=(o,t)=>{let e=o.length-1,r=[],i,s=t===2?"<svg>":"",n=I;for(let l=0;l<e;l++){let a=o[l],d,m,c=-1,$=0;for(;$<a.length&&(n.lastIndex=$,m=n.exec(a),m!==null);)$=n.lastIndex,n===I?m[1]==="!--"?n=vt:m[1]!==void 0?n=yt:m[2]!==void 0?(Et.test(m[2])&&(i=RegExp("</"+m[2],"g")),n=k):m[3]!==void 0&&(n=k):n===k?m[0]===">"?(n=i??I,c=-1):m[1]===void 0?c=-2:(c=n.lastIndex-m[2].length,d=m[1],n=m[3]===void 0?k:m[3]==='"'?_t:$t):n===_t||n===$t?n=k:n===vt||n===yt?n=I:(n=k,i=void 0);let x=n===k&&o[l+1].startsWith("/>")?" ":"";s+=n===I?a+Jt:c>=0?(r.push(d),a.slice(0,c)+xt+a.slice(c)+S+x):a+S+(c===-2?l:x)}return[Tt(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),r]},j=class o{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,n=0,l=t.length-1,a=this.parts,[d,m]=Qt(t,e);if(this.el=o.createElement(d,r),T.currentNode=this.el.content,e===2){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=T.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(xt)){let $=m[n++],x=i.getAttribute(c).split(S),W=/([.?@])?(.*)/.exec($);a.push({type:1,index:s,name:W[2],strings:x,ctor:W[1]==="."?ot:W[1]==="?"?st:W[1]==="@"?nt:R}),i.removeAttribute(c)}else c.startsWith(S)&&(a.push({type:6,index:s}),i.removeAttribute(c));if(Et.test(i.tagName)){let c=i.textContent.split(S),$=c.length-1;if($>0){i.textContent=Q?Q.emptyScript:"";for(let x=0;x<$;x++)i.append(c[x],H()),T.nextNode(),a.push({type:2,index:++s});i.append(c[$],H())}}}else if(i.nodeType===8)if(i.data===St)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(S,c+1))!==-1;)a.push({type:7,index:s}),c+=S.length-1}s++}}static createElement(t,e){let r=C.createElement("template");return r.innerHTML=t,r}};function D(o,t,e=o,r){if(t===O)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,s=F(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=D(o,i._$AS(o,t.values),i,r)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??C).importNode(e,!0);T.currentNode=i;let s=T.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new q(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new at(s,this,t)),this._$AV.push(d),a=r[++l]}n!==a?.index&&(s=T.nextNode(),n++)}return T.currentNode=C,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},q=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),F(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Xt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==h&&F(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=j.createElement(Tt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new it(i,this),n=s.u(this.options);s.p(e),this.$(n),this._$AH=s}}_$AC(t){let e=At.get(t.strings);return e===void 0&&At.set(t.strings,e=new j(t)),e}T(t){wt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let s of t)i===e.length?e.push(r=new o(this.k(H()),this.k(H()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},R=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,e=this,r,i){let s=this.strings,n=!1;if(s===void 0)t=D(this,t,e,0),n=!F(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{let l=t,a,d;for(t=s[0],a=0;a<s.length-1;a++)d=D(this,l[r+a],e,a),d===O&&(d=this._$AH[a]),n||=!F(d)||d!==this._$AH[a],d===h?t=h:t!==h&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}n&&!i&&this.O(t)}O(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ot=class extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===h?void 0:t}},st=class extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},nt=class extends R{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??h)===O)return;let r=this._$AH,i=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==h&&(r===h||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var Gt=lt.litHtmlPolyfillSupport;Gt?.(j,q),(lt.litHtmlVersions??=[]).push("3.0.2");var Ct=(o,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let s=e?.renderBefore??null;r._$litPart$=i=new q(t.insertBefore(H(),s),s,void 0,e??{})}return i._$AI(o),i};var v=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};v._$litElement$=!0,v["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:v});var Kt=globalThis.litElementPolyfillSupport;Kt?.({LitElement:v});(globalThis.litElementVersions??=[]).push("4.0.1");var Ot=b`
  .h-sr-only,
  .h-sr-only-focusable:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .h-block {
    display: block;
  }

  .h-type-tight {
    line-height: 1;
  }
`;function Dt(...o){let t=[];for(let e of o)e.styleSheet&&t.push(e.styleSheet);return t}var w=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var te={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:X},ee=(o=te,t,e)=>{let{kind:r,metadata:i}=e,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(e.name,o),r==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.C(n,void 0,o),l}}}if(r==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+r)};function f(o){return(t,e)=>typeof e=="object"?ee(o,t,e):((r,i,s)=>{let n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(o,t,e)}var E=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);function Rt(o,t){return(e,r,i)=>{let s=n=>n.renderRoot?.querySelector(o)??null;if(t){let{get:n,set:l}=typeof r=="object"?e:i??(()=>{let a=Symbol();return{get(){return this[a]},set(d){this[a]=d}}})();return E(e,r,{get(){if(t){let a=n.call(this);return a===void 0&&(a=s(this),l.call(this,a)),a}return s(this)}})}return E(e,r,{get(){return s(this)}})}}function Mt(o){return(t,e)=>{let{slot:r,selector:i}=o??{},s="slot"+(r?`[name=${r}]`:":not([name])");return E(t,e,{get(){let n=this.renderRoot?.querySelector(s),l=n?.assignedElements(o)??[];return i===void 0?l:l.filter(a=>a.matches(i))}})}}var G=o=>o??h;var y=class extends v{fireEvent(t,e){let r;return e===void 0?r=new CustomEvent(t):r=new CustomEvent(t,{detail:e}),this.dispatchEvent(r)}};var K=class extends y{static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}focus(t){this._control.focus(t)}blur(){this._control.blur()}click(){this._control.click()}};var Ut=b`
  :host {
    display: contents;
  }

  .button {
    box-sizing: border-box;
    appearance: none;
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-md);
    color: var(--color-action-foreground);
    background-color: var(--color-action-background);
    border: 1px solid transparent;
    transition: background-color 0.2s ease;
    text-align: center;
  }

  .button:hover {
    color: var(--color-action-hover-foreground);
    background-color: var(--color-action-hover-background);
  }

  .button:focus {
    outline: 1px solid var(--color-focus-foreground);
    outline-offset: 1px;
  }
`;var A=class extends K{render(){return g`<a
      class="button"
      part="base"
      href="${G(this.href)}"
      target="${G(this.target)}"
      rel="${G(this.rel)}"
      ><slot></slot
    ></a>`}};A.styles=[Ut],p([Rt(".button",!0)],A.prototype,"_control",2),p([f()],A.prototype,"href",2),p([f()],A.prototype,"target",2),p([f()],A.prototype,"rel",2),A=p([w("kd-link-button")],A);var M=class extends y{updated(){this.src&&this.style.setProperty("--kd-phone-hero-background-image",`url(${this.src})`)}render(){return g`<div class="container"><slot class="content"></slot></div>`}};M.styles=b`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
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
  `,p([f({type:String})],M.prototype,"src",2),M=p([w("kd-phone-hero")],M);var Nt=new Map;function re(o){let t=Nt.get(o);return t||(t=new Intl.DateTimeFormat(void 0,o),Nt.set(o,t)),t}var ie=Object.freeze({year:"numeric",month:"long"});function V(o,t=ie){return re(t).format(o)}var _r=Object.freeze({numeric:"auto"});var ct=1e3,ht=ct*60,dt=ht*60,B=dt*24,Pt=B*7,zt=B*30,pt=B*365,It=pt*4,Ar=Object.freeze(new Map([["year",pt],["years",pt],["quarter",It],["quarters",It],["month",zt],["months",zt],["week",Pt],["weeks",Pt],["day",B],["days",B],["hour",dt],["hours",dt],["minute",ht],["minutes",ht],["second",ct],["seconds",ct]]));var xr=Object.freeze({localeMatcher:"best fit",numeric:"always",style:"narrow"});var u=class extends y{constructor(){super(...arguments);this.type="other";this.assetType="image"}get endingDate(){if(this.date==="present")return u.now;let e=new Date(this.date);if(e.toString()!=="Invalid Date")return e}get startingDate(){if(this.startDate===void 0)return;let e=new Date(this.startDate);if(e.toString()!=="Invalid Date")return e}renderDateRange(){return this.endingDate===void 0?h:this.startingDate===void 0?this.date==="present"?g`<time datetime="${u.now.getFullYear()}">Present</time>`:g`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${V(this.endingDate)}</time>
      </div>`:this.date==="present"?g`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${V(this.startingDate)}</time> - Present
      </div>`:g`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${V(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${V(this.endingDate)}</time>
    </div>`}renderMedia(){return this.asset===void 0?h:g`<div class="media-zone">
      <div class="media-container">
        <img class="media-cover" src="${this.asset}" alt="" />
        <img class="media" src="${this.asset}" alt="" />
      </div>
    </div>`}render(){return g`
      <div class="timeline-zone">
        <span class="year2">${this.endingDate?.getFullYear()}</span>
        <span class="event-tag"></span>
      </div>
      <article class="event">
        ${this.renderMedia()}
        <div class="summary">
          ${this.renderDateRange()}
          <slot name="title" class="title"></slot>
          <slot class="content"></slot>
        </div>
        <slot name="meta" class="meta"></slot>
      </article>
    `}};u.now=new Date,u.styles=[b`
      :host {
        contain: content;
        display: flex;
        flex-direction: row;
        gap: var(--spacing-xl);
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .timeline-zone {
        flex: 0 0 var(--size-5);
        position: relative;
      }

      /*
      .event-tag {
        position: absolute;
        display: inline-block;
        inset-block-start: 50%;
        inset-inline-start: 50%;
        transform: translate(-50%, -50%);
        block-size: var(--size-2);
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: var(--color-raw-blue-30);
        border: 4px solid var(--color-primary-background);
      }
      */

      .year2 {
        position: sticky;
        inset-block-start: var(--size-5);
        display: flex;
        align-items: center;
        font-family: var(--font-family-heading);
        font-size: var(--size--1);
        line-height: 1;
        font-weight: bold;
        width: max-content;
        padding-inline: var(--spacing-md);
        aspect-ratio: 1;
        margin-inline: auto;
        /* margin-inline-start: var(--size-3); */
        margin-block: var(--size-1);
        /* transform: translateX(-50%) rotateZ(-45deg); */
        transform: rotateZ(-45deg);
        color: var(--color-primary-background);
        /* background-color: var(--color-primary-background); */
        z-index: var(--elevation-inline);
      }

      .year2::after {
        position: absolute;
        inset-block-end: 0;
        inset-inline-end: 0;
        display: inline-block;
        content: '';
        block-size: 100%;
        aspect-ratio: 1;
        clip-path: polygon(20% 0%, 100% 0px, 100% 80%, 80% 100%, 0px 100%, 0% 20%);
        z-index: -1;

        background:
          linear-gradient(45deg, var(--color-raw-blue-50) 50%, transparent 0) 0 20px,
          linear-gradient(135deg, transparent 50%, var(--color-raw-blue-30) 0) 0 30px,
          var(--color-raw-blue-20);
        opacity: 0.2;
      }

      .year2::before {
        position: absolute;
        inset-block-end: 0;
        inset-inline-end: 0;
        display: inline-block;
        content: '';
        block-size: 100%;
        aspect-ratio: 1;
        clip-path: polygon(20% 0%, 100% 0px, 100% 80%, 80% 100%, 0px 100%, 0% 20%);
        z-index: -2;

        background: linear-gradient(0, var(--color-raw-blue-30) 0, var(--color-raw-blue-60) 100%);
      }

      .event {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
      }

      @media (min-width: 800px) {
        .event {
          display: grid;
          grid-template-columns: 3fr 4fr;
          grid-template-rows: auto;
          grid-template-areas:
            'summary media'
            'meta meta';
          gap: var(--spacing-lg) var(--spacing-xl);
        }
      }

      .date-range {
        line-height: 1;
      }

      .media-zone {
        grid-area: media;
      }

      .media-container {
        position: relative;
        overflow: hidden;
      }

      .media {
        max-inline-size: 100%;
        block-size: auto;
        vertical-align: middle;
      }

      @media (min-width: 800px) {
        .media {
          width: 100%;
          aspect-ratio: 16 / 9;
          /* height: 100%; */
          object-fit: contain;
          object-position: center;
        }
      }

      .media-cover {
        position: absolute;
        width: 100%;
        aspect-ratio: 16 / 9;
        /* height: 100%; */
        object-fit: cover;
        object-position: center;
        z-index: var(--elevation-behind);
        filter: blur(16px) saturate(50%);
        opacity: 0.2;
      }

      @media (max-width: 799px) {
        .media-cover {
          display: none;
        }
      }

      .summary {
        grid-area: summary;
        display: block;
      }

      .title {
        display: block;
        line-height: 1;
      }

      .content {
        display: block;
      }

      .meta {
        grid-area: meta;
        display: block;
      }

      ::slotted(*) {
        margin-block-start: 0;
      }

      ::slotted(*:last-child) {
        margin-block-end: 0;
      }
    `],p([f()],u.prototype,"type",2),p([f()],u.prototype,"asset",2),p([f({attribute:"asset-type"})],u.prototype,"assetType",2),p([f()],u.prototype,"date",2),p([f({attribute:"start-date"})],u.prototype,"startDate",2),p([f()],u.prototype,"url",2),u=p([w("kd-life-event")],u);var U=class extends y{render(){return g`<span class="timeline"></span><slot class="events"></slot>`}};U.styles=[b`
      :host {
        display: block;
        position: relative;
        padding-block: var(--size-5);
      }

      .timeline {
        display: block;
        position: absolute;
        inline-size: 2px;
        background-color: var(--color-raw-blue-30);
        inset-block: var(--size-7);
        inset-inline-start: calc(var(--size-5) / 2);
        transform: translateX(-50%);
      }

      .timeline::before,
      .timeline::after {
        content: '';
        display: block;
        position: absolute;
        inset-inline-start: 1px;
        inline-size: var(--size--1);
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: var(--color-raw-blue-30);
      }

      .timeline::before {
        inset-block-start: 0;
        transform: translate(-50%, -50%);
      }

      .timeline::after {
        inset-block-end: 0;
        transform: translate(-50%, 50%);
      }

      .events {
        display: flex;
        flex-direction: column;
        gap: var(--size-5);
      }
    `],p([Mt({selector:"kd-life-event"})],U.prototype,"lifeEventEls",2),U=p([w("kd-life-events")],U);document.adoptedStyleSheets=[...Dt(Ot)];})();
/*! Bundled license information:

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

@lit/reactive-element/decorators/custom-element.js:
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

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
