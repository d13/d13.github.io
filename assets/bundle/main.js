import{a as o,b as g,c as M,d as E,e as m,f as x,g as w,h as N}from"./chunks/chunk-UASHANUO.js";var h=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var P={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:E},Y=(r=P,e,t)=>{let{kind:n,metadata:d}=t,l=globalThis.litPropertyMetadata.get(d);if(l===void 0&&globalThis.litPropertyMetadata.set(d,l=new Map),l.set(t.name,r),n==="accessor"){let{name:i}=t;return{set(p){let c=e.get.call(this);e.set.call(this,p),this.requestUpdate(i,c,r)},init(p){return p!==void 0&&this.C(i,void 0,r),p}}}if(n==="setter"){let{name:i}=t;return function(p){let c=this[i];e.call(this,p),this.requestUpdate(i,c,r)}}throw Error("Unsupported decorator location: "+n)};function s(r){return(e,t)=>typeof t=="object"?Y(r,e,t):((n,d,l)=>{let i=d.hasOwnProperty(l);return d.constructor.createProperty(l,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(d,l):void 0})(r,e,t)}var b=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);function S(r,e){return(t,n,d)=>{let l=i=>i.renderRoot?.querySelector(r)??null;if(e){let{get:i,set:p}=typeof n=="object"?t:d??(()=>{let c=Symbol();return{get(){return this[c]},set(H){this[c]=H}}})();return b(t,n,{get(){if(e){let c=i.call(this);return c===void 0&&(c=l(this),p.call(this,c)),c}return l(this)}})}return b(t,n,{get(){return l(this)}})}}function $(r){return(e,t)=>{let{slot:n,selector:d}=r??{},l="slot"+(n?`[name=${n}]`:":not([name])");return b(e,t,{get(){let i=this.renderRoot?.querySelector(l),p=i?.assignedElements(r)??[];return d===void 0?p:p.filter(c=>c.matches(d))}})}}var D=r=>r??x;var u=class extends w{fireEvent(e,t){let n;return t===void 0?n=new CustomEvent(e):n=new CustomEvent(e,{detail:t}),this.dispatchEvent(n)}};var O=class extends u{static{this.shadowRootOptions={...w.shadowRootOptions,delegatesFocus:!0}}focus(e){this._control.focus(e)}blur(){this._control.blur()}click(){this._control.click()}};var q=g`
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
`;var f=class extends O{render(){return m`<a
      class="button"
      part="base"
      href="${D(this.href)}"
      target="${D(this.target)}"
      rel="${D(this.rel)}"
      ><slot></slot
    ></a>`}};f.styles=[q],o([S(".button",!0)],f.prototype,"_control",2),o([s()],f.prototype,"href",2),o([s()],f.prototype,"target",2),o([s()],f.prototype,"rel",2),f=o([h("kd-link-button")],f);var v=class extends u{updated(){this.src&&this.style.setProperty("--kd-phone-hero-background-image",`url(${this.src})`)}render(){return m`<div class="container"><slot class="content"></slot></div>`}};v.styles=g`
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
  `,o([s({type:String})],v.prototype,"src",2),v=o([h("kd-phone-hero")],v);var U=new Map;function _(r){let e=U.get(r);return e||(e=new Intl.DateTimeFormat(void 0,r),U.set(r,e)),e}var V=Object.freeze({year:"numeric",month:"long"});function T(r,e=V){return _(e).format(r)}var Pe=Object.freeze({numeric:"auto"});var F=1e3,z=F*60,I=z*60,k=I*24,j=k*7,A=k*30,R=k*365,C=R*4,Ye=Object.freeze(new Map([["year",R],["years",R],["quarter",C],["quarters",C],["month",A],["months",A],["week",j],["weeks",j],["day",k],["days",k],["hour",I],["hours",I],["minute",z],["minutes",z],["second",F],["seconds",F]]));var _e=Object.freeze({localeMatcher:"best fit",numeric:"always",style:"narrow"});var a=class extends u{constructor(){super(...arguments);this.type="event";this.assetType="image"}get endingDate(){if(this.date==="present")return a.now;let t=new Date(this.date);if(t.toString()!=="Invalid Date")return t}get startingDate(){if(this.startDate===void 0)return;let t=new Date(this.startDate);if(t.toString()!=="Invalid Date")return t}renderDateRange(){return this.endingDate===void 0?x:this.startingDate===void 0?this.date==="present"?m`<time datetime="${a.now.getFullYear()}">Present</time>`:m`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${T(this.endingDate)}</time>
      </div>`:this.date==="present"?m`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${T(this.startingDate)}</time> - Present
      </div>`:m`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${T(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${T(this.endingDate)}</time>
    </div>`}renderMedia(){return this.asset===void 0?x:m`<div class="media-zone">
      <div class="media-container">
        <img class="media-cover" src="${this.asset}" alt="" />
        <img class="media" src="${this.asset}" alt="" />
      </div>
    </div>`}render(){return m`
      <div class="timeline-zone">
        <span class="year2"><span class="h-sr-only">${this.type} in year </span>${this.endingDate?.getFullYear()}</span>
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
    `}};a.now=new Date,a.styles=[N,g`
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
    `],o([s()],a.prototype,"type",2),o([s()],a.prototype,"asset",2),o([s({attribute:"asset-type"})],a.prototype,"assetType",2),o([s()],a.prototype,"date",2),o([s({attribute:"start-date"})],a.prototype,"startDate",2),o([s()],a.prototype,"url",2),a=o([h("kd-life-event")],a);var y=class extends u{render(){return m`<span class="timeline"></span><slot class="events"></slot>`}};y.styles=[g`
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
    `],o([$({selector:"kd-life-event"})],y.prototype,"lifeEventEls",2),y=o([h("kd-life-events")],y);
/*! For license information please see main.js.LEGAL.txt */
