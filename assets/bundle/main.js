import{a as o,b as p,c as $,d as N,e as n,f as k,g as O,h as S}from"./chunks/chunk-UASHANUO.js";var u=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var _={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:N},B=(r=_,t,e)=>{let{kind:a,metadata:f}=e,m=globalThis.litPropertyMetadata.get(f);if(m===void 0&&globalThis.litPropertyMetadata.set(f,m=new Map),m.set(e.name,r),a==="accessor"){let{name:l}=e;return{set(g){let d=t.get.call(this);t.set.call(this,g),this.requestUpdate(l,d,r)},init(g){return g!==void 0&&this.C(l,void 0,r),g}}}if(a==="setter"){let{name:l}=e;return function(g){let d=this[l];t.call(this,g),this.requestUpdate(l,d,r)}}throw Error("Unsupported decorator location: "+a)};function i(r){return(t,e)=>typeof e=="object"?B(r,t,e):((a,f,m)=>{let l=f.hasOwnProperty(m);return f.constructor.createProperty(m,l?{...a,wrapped:!0}:a),l?Object.getOwnPropertyDescriptor(f,m):void 0})(r,t,e)}var b=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function q(r,t){return(e,a,f)=>{let m=l=>l.renderRoot?.querySelector(r)??null;if(t){let{get:l,set:g}=typeof a=="object"?e:f??(()=>{let d=Symbol();return{get(){return this[d]},set(Y){this[d]=Y}}})();return b(e,a,{get(){if(t){let d=l.call(this);return d===void 0&&(d=m(this),g.call(this,d)),d}return m(this)}})}return b(e,a,{get(){return m(this)}})}}function U(r){return(t,e)=>{let{slot:a,selector:f}=r??{},m="slot"+(a?`[name=${a}]`:":not([name])");return b(t,e,{get(){let l=this.renderRoot?.querySelector(m),g=l?.assignedElements(r)??[];return f===void 0?g:g.filter(d=>d.matches(f))}})}}var z=r=>r??k;var c=class extends O{fireEvent(t,e){let a;return e===void 0?a=new CustomEvent(t):a=new CustomEvent(t,{detail:e}),this.dispatchEvent(a)}};var F=class extends c{static{this.shadowRootOptions={...O.shadowRootOptions,delegatesFocus:!0}}focus(t){this._control.focus(t)}blur(){this._control.blur()}click(){this._control.click()}};var j=p`
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
`;var h=class extends F{render(){return n`<a
      class="button"
      part="base"
      href="${z(this.href)}"
      target="${z(this.target)}"
      rel="${z(this.rel)}"
      ><slot></slot
    ></a>`}};h.styles=[j],o([q(".button",!0)],h.prototype,"_control",2),o([i()],h.prototype,"href",2),o([i()],h.prototype,"target",2),o([i()],h.prototype,"rel",2),h=o([u("kd-link-button")],h);var y=class extends c{updated(){this.src&&this.style.setProperty("--kd-phone-hero-background-image",`url(${this.src})`)}render(){return n`<div class="container"><slot class="content"></slot></div>`}};y.styles=p`
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
  `,o([i({type:String})],y.prototype,"src",2),y=o([u("kd-phone-hero")],y);var C=new Map;function V(r){let t=C.get(r);return t||(t=new Intl.DateTimeFormat(void 0,r),C.set(r,t)),t}var X=Object.freeze({year:"numeric",month:"long"});function D(r,t=X){return V(t).format(r)}var _e=Object.freeze({numeric:"auto"});var I=1e3,R=I*60,M=R*60,w=M*24,H=w*7,A=w*30,E=w*365,P=E*4,Be=Object.freeze(new Map([["year",E],["years",E],["quarter",P],["quarters",P],["month",A],["months",A],["week",H],["weeks",H],["day",w],["days",w],["hour",M],["hours",M],["minute",R],["minutes",R],["second",I],["seconds",I]]));var Ve=Object.freeze({localeMatcher:"best fit",numeric:"always",style:"narrow"});var s=class extends c{constructor(){super(...arguments);this.type="event";this.assetType="image"}get endingDate(){if(this.date==="present")return s.now;let e=new Date(this.date);if(e.toString()!=="Invalid Date")return e}get startingDate(){if(this.startDate===void 0)return;let e=new Date(this.startDate);if(e.toString()!=="Invalid Date")return e}renderDateRange(){return this.endingDate===void 0?k:this.startingDate===void 0?this.date==="present"?n`<time datetime="${s.now.getFullYear()}">Present</time>`:n`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${D(this.endingDate)}</time>
      </div>`:this.date==="present"?n`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${D(this.startingDate)}</time> - Present
      </div>`:n`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${D(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${D(this.endingDate)}</time>
    </div>`}renderMedia(){return this.asset===void 0?k:n`<div class="media-zone">
      <div class="media-container">
        <img class="media-cover" loading="lazy" src="${this.asset}" alt="" />
        <img class="media" loading="lazy" src="${this.asset}" alt="" />
      </div>
    </div>`}render(){return n`
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
    `}};s.now=new Date,s.styles=[S,p`
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
    `],o([i()],s.prototype,"type",2),o([i()],s.prototype,"asset",2),o([i({attribute:"asset-type"})],s.prototype,"assetType",2),o([i()],s.prototype,"date",2),o([i({attribute:"start-date"})],s.prototype,"startDate",2),o([i()],s.prototype,"url",2),s=o([u("kd-life-event")],s);var x=class extends c{render(){return n`<span class="timeline"></span><slot class="events"></slot>`}};x.styles=[p`
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
    `],o([U({selector:"kd-life-event"})],x.prototype,"lifeEventEls",2),x=o([u("kd-life-events")],x);var v=class extends c{constructor(){super(...arguments);this.term="";this.definition=""}get tags(){return this.definition.trim().length===0?[]:this.definition.split(",").map(e=>e.trim())}render(){return n`
      <span role="term"><slot name="term">${this.term}</slot></span>
      <span role="definition"
        ><slot><span class="tags">${this.tags.map(e=>n`<kd-tag>${e}</kd-tag> `)}</span></slot></span
      >
    `}};v.styles=[p`
      :host {
        display: flex;
        flex-direction: row;
        align-items: top;
        gap: var(--spacing-md);
        margin-block-end: var(--spacing-sm);
      }

      [role='term'] {
        /* min-inline-size: var(--size-8); */
        display: block;
        /* font-weight: bold; */
        /* font-size: var(--type-body-sm-size); */
        /* line-height: 1.25; */
        text-transform: uppercase;
        opacity: 0.6;
      }

      [role='definition'] {
        display: block;
        font-weight: bold;
      }

      .tags {
        display: inline-flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm) var(--spacing-xs);
      }
    `],o([i()],v.prototype,"term",2),o([i()],v.prototype,"definition",2),v=o([u("kd-attribution")],v);var T=class extends c{render(){return n`<slot></slot>`}};T.styles=[p`
      :host {
        display: inline-block;
        padding: var(--spacing-xs) var(--spacing-lg);
        font-size: var(--type-body-sm-size);
        text-transform: uppercase;
        border-radius: var(--roundness-sm);
        background-color: var(--color-tag-background);
        color: var(--color-tag-foreground);
        letter-spacing: 0.075em;
        vertical-align: middle;
      }

      :host {
        margin-inline-end: var(--spacing-xs);
      }
    `],T=o([u("kd-tag")],T);
/*! For license information please see main.js.LEGAL.txt */
