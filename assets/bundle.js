"use strict";(()=>{var K=globalThis,V=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),ft=new WeakMap,P=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(V&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ft.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ft.set(e,t))}return t}toString(){return this.cssText}},gt=o=>new P(typeof o=="string"?o:o+"",void 0,tt),f=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,r,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new P(e,o,tt)},et=(o,t)=>{if(V)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),r=K.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)}},W=V?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return gt(e)})(o):o;var{is:qt,defineProperty:Bt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Vt,getOwnPropertySymbols:Wt,getPrototypeOf:Zt}=Object,Z=globalThis,vt=Z.trustedTypes,Yt=vt?vt.emptyScript:"",Jt=Z.reactiveElementPolyfillSupport,U=(o,t)=>o,N={toAttribute(o,t){switch(t){case Boolean:o=o?Yt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Y=(o,t)=>!qt(o,t),yt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=yt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Bt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){let{get:r,set:s}=Kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){let l=r?.call(this);s.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,i=[...Vt(e),...Wt(e)];for(let r of i)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let r of i)e.unshift(W(r))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return et(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:N).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){let i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let s=i.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:N;this._$Em=r,this[r]=n.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??Y)(r?s:this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,s]of i)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],s)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[U("elementProperties")]=new Map,b[U("finalized")]=new Map,Jt?.({ReactiveElement:b}),(Z.reactiveElementVersions??=[]).push("2.0.1");var lt=globalThis,J=lt.trustedTypes,bt=J?J.createPolicy("lit-html",{createHTML:o=>o}):void 0,Et="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+_,Xt=`<${wt}>`,k=document,M=()=>k.createComment(""),z=o=>o===null||typeof o!="object"&&typeof o!="function",kt=Array.isArray,Qt=o=>kt(o)||typeof o?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,_t=/>/g,E=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,St=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Ot=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=Ot(1),he=Ot(2),T=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),xt=new WeakMap,w=k.createTreeWalker(k,129);function Rt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}var Gt=(o,t)=>{let e=o.length-1,i=[],r,s=t===2?"<svg>":"",n=I;for(let l=0;l<e;l++){let a=o[l],p,d,c=-1,y=0;for(;y<a.length&&(n.lastIndex=y,d=n.exec(a),d!==null);)y=n.lastIndex,n===I?d[1]==="!--"?n=$t:d[1]!==void 0?n=_t:d[2]!==void 0?(Tt.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=E):d[3]!==void 0&&(n=E):n===E?d[0]===">"?(n=r??I,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,p=d[1],n=d[3]===void 0?E:d[3]==='"'?St:At):n===St||n===At?n=E:n===$t||n===_t?n=I:(n=E,r=void 0);let $=n===E&&o[l+1].startsWith("/>")?" ":"";s+=n===I?a+Xt:c>=0?(i.push(p),a.slice(0,c)+Et+a.slice(c)+_+$):a+_+(c===-2?l:$)}return[Rt(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]},F=class o{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0,l=t.length-1,a=this.parts,[p,d]=Gt(t,e);if(this.el=o.createElement(p,i),w.currentNode=this.el.content,e===2){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=w.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let c of r.getAttributeNames())if(c.endsWith(Et)){let y=d[n++],$=r.getAttribute(c).split(_),B=/([.?@])?(.*)/.exec(y);a.push({type:1,index:s,name:B[2],strings:$,ctor:B[1]==="."?ot:B[1]==="?"?st:B[1]==="@"?nt:D}),r.removeAttribute(c)}else c.startsWith(_)&&(a.push({type:6,index:s}),r.removeAttribute(c));if(Tt.test(r.tagName)){let c=r.textContent.split(_),y=c.length-1;if(y>0){r.textContent=J?J.emptyScript:"";for(let $=0;$<y;$++)r.append(c[$],M()),w.nextNode(),a.push({type:2,index:++s});r.append(c[y],M())}}}else if(r.nodeType===8)if(r.data===wt)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(_,c+1))!==-1;)a.push({type:7,index:s}),c+=_.length-1}s++}}static createElement(t,e){let i=k.createElement("template");return i.innerHTML=t,i}};function R(o,t,e=o,i){if(t===T)return t;let r=i!==void 0?e._$Co?.[i]:e._$Cl,s=z(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(o),r._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=r:e._$Cl=r),r!==void 0&&(t=R(o,r._$AS(o,t.values),r,i)),t}var rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??k).importNode(e,!0);w.currentNode=r;let s=w.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new H(s,s.nextSibling,this,t):a.type===1?p=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(p=new at(s,this,t)),this._$AV.push(p),a=i[++l]}n!==a?.index&&(s=w.nextNode(),n++)}return w.currentNode=k,r}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},H=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),z(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==h&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=F.createElement(Rt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{let s=new rt(r,this),n=s.u(this.options);s.p(e),this.$(n),this._$AH=s}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new F(t)),e}T(t){kt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,r=0;for(let s of t)r===e.length?e.push(i=new o(this.k(M()),this.k(M()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,r){let s=this.strings,n=!1;if(s===void 0)t=R(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{let l=t,a,p;for(t=s[0],a=0;a<s.length-1;a++)p=R(this,l[i+a],e,a),p===T&&(p=this._$AH[a]),n||=!z(p)||p!==this._$AH[a],p===h?t=h:t!==h&&(t+=(p??"")+s[a+1]),this._$AH[a]=p}n&&!r&&this.O(t)}O(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ot=class extends D{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===h?void 0:t}},st=class extends D{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},nt=class extends D{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??h)===T)return;let i=this._$AH,r=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==h&&(i===h||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};var te=lt.litHtmlPolyfillSupport;te?.(F,H),(lt.litHtmlVersions??=[]).push("3.0.2");var Dt=(o,t,e)=>{let i=e?.renderBefore??t,r=i._$litPart$;if(r===void 0){let s=e?.renderBefore??null;i._$litPart$=r=new H(t.insertBefore(M(),s),s,void 0,e??{})}return r._$AI(o),r};var g=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};g._$litElement$=!0,g["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:g});var ee=globalThis.litElementPolyfillSupport;ee?.({LitElement:g});(globalThis.litElementVersions??=[]).push("4.0.1");var Ct=f`
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
`;function Pt(...o){let t=[];for(let e of o)e.styleSheet&&t.push(e.styleSheet);return t}var A=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var ie={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:Y},re=(o=ie,t,e)=>{let{kind:i,metadata:r}=e,s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(e.name,o),i==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.C(n,void 0,o),l}}}if(i==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+i)};function u(o){return(t,e)=>typeof e=="object"?re(o,t,e):((i,r,s)=>{let n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,s):void 0})(o,t,e)}var S=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);function Ut(o,t){return(e,i,r)=>{let s=n=>n.renderRoot?.querySelector(o)??null;if(t){let{get:n,set:l}=typeof i=="object"?e:r??(()=>{let a=Symbol();return{get(){return this[a]},set(p){this[a]=p}}})();return S(e,i,{get(){if(t){let a=n.call(this);return a===void 0&&(a=s(this),l.call(this,a)),a}return s(this)}})}return S(e,i,{get(){return s(this)}})}}function Nt(o){return(t,e)=>{let{slot:i,selector:r}=o??{},s="slot"+(i?`[name=${i}]`:":not([name])");return S(t,e,{get(){let n=this.renderRoot?.querySelector(s),l=n?.assignedElements(o)??[];return r===void 0?l:l.filter(a=>a.matches(r))}})}}var X=o=>o??h;var v=class extends g{fireEvent(t,e){let i;return e===void 0?i=new CustomEvent(t):i=new CustomEvent(t,{detail:e}),this.dispatchEvent(i)}};var Q=class extends v{static{this.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0}}focus(t){this._control.focus(t)}blur(){this._control.blur()}click(){this._control.click()}};var It=f`
  :host {
    display: contents;
  }

  .button {
    appearance: none;
    display: inline-block;
  }
`;var j=function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},C=class extends Q{static{this.styles=[It]}render(){return m`<a
      class="button"
      part="base"
      href="${X(this.href)}"
      target="${X(this.target)}"
      rel="${X(this.rel)}"
      ><slot></slot
    ></a>`}};j([Ut(".button",!0)],C.prototype,"_control",void 0);j([u()],C.prototype,"href",void 0);j([u()],C.prototype,"target",void 0);j([u()],C.prototype,"rel",void 0);C=j([A("kd-link-button")],C);var Mt=function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},ct=class extends v{static{this.styles=f`
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
  `}updated(){this.src&&this.style.setProperty("--kd-phone-hero-background-image",`url(${this.src})`)}render(){return m`<div class="container"><slot class="content"></slot></div>`}};Mt([u({type:String})],ct.prototype,"src",void 0);ct=Mt([A("kd-phone-hero")],ct);var zt=new Map;function oe(o){let t=zt.get(o);return t||(t=new Intl.DateTimeFormat(void 0,o),zt.set(o,t)),t}var se=Object.freeze({year:"numeric",month:"long"});function q(o,t=se){return oe(t).format(o)}var Ai=Object.freeze({numeric:"auto"});var ht=1e3,pt=ht*60,dt=pt*60,L=dt*24,Ft=L*7,Ht=L*30,ut=L*365,jt=ut*4,Si=Object.freeze(new Map([["year",ut],["years",ut],["quarter",jt],["quarters",jt],["month",Ht],["months",Ht],["week",Ft],["weeks",Ft],["day",L],["days",L],["hour",dt],["hours",dt],["minute",pt],["minutes",pt],["second",ht],["seconds",ht]]));var xi=Object.freeze({localeMatcher:"best fit",numeric:"always",style:"narrow"});var O=function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},G,x=class extends v{constructor(){super(...arguments),this.type="other",this.assetType="image"}static{G=this}static{this.now=new Date}static{this.styles=[f`
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
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
      }

      .date-range {
        line-height: 1;
      }

      .media {
        max-inline-size: 100%;
        block-size: auto;
      }

      .summary {
      }

      .title {
        display: block;
        line-height: 1;
      }

      .content {
        display: block;
      }

      .meta {
        display: block;
      }

      ::slotted(*) {
        margin-block-start: 0;
      }

      ::slotted(*:last-child) {
        margin-block-end: 0;
      }
    `]}get endingDate(){if(this.date==="present")return G.now;let t=new Date(this.date);if(t.toString()!=="Invalid Date")return t}get startingDate(){if(this.startDate===void 0)return;let t=new Date(this.startDate);if(t.toString()!=="Invalid Date")return t}renderDateRange(){return this.endingDate===void 0?h:this.startingDate===void 0?this.date==="present"?m`<time datetime="${G.now.getFullYear()}">Present</time>`:m`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${q(this.endingDate)}</time>
      </div>`:this.date==="present"?m`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${q(this.startingDate)}</time> - Present
      </div>`:m`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${q(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${q(this.endingDate)}</time>
    </div>`}render(){return m`
      <div class="timeline-zone">
        <span class="year2">${this.endingDate?.getFullYear()}</span>
        <span class="event-tag"></span>
      </div>
      <article class="event">
        ${this.asset?m`<img class="media" src="${this.asset}" alt="" />`:h}
        <div class="summary">
          ${this.renderDateRange()}
          <slot name="title" class="title"></slot>
          <slot class="content"></slot>
        </div>
        <slot name="meta" class="meta"></slot>
      </article>
    `}};O([u()],x.prototype,"type",void 0);O([u()],x.prototype,"asset",void 0);O([u({attribute:"asset-type"})],x.prototype,"assetType",void 0);O([u()],x.prototype,"date",void 0);O([u({attribute:"start-date"})],x.prototype,"startDate",void 0);O([u()],x.prototype,"url",void 0);x=G=O([A("kd-life-event")],x);var Lt=function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(s=(r<3?n(s):r>3?n(t,e,s):n(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},mt=class extends v{static{this.styles=[f`
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
        gap: var(--spacing-xl);
      }
    `]}render(){return m`<span class="timeline"></span><slot class="events"></slot>`}};Lt([Nt({selector:"kd-life-event"})],mt.prototype,"lifeEventEls",void 0);mt=Lt([A("kd-life-events")],mt);document.adoptedStyleSheets=[...Pt(Ct)];})();
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
