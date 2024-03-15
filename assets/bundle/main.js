import{a as t,b as i,c as U,d as S,e as c,f as z,g as M,h as P}from"./chunks/chunk-HJSB4PYJ.js";var s=e=>(n,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,n)}):customElements.define(e,n)};var Q={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:S},J=(e=Q,n,o)=>{let{kind:l,metadata:a}=o,p=globalThis.litPropertyMetadata.get(a);if(p===void 0&&globalThis.litPropertyMetadata.set(a,p=new Map),p.set(o.name,e),l==="accessor"){let{name:b}=o;return{set(u){let d=n.get.call(this);n.set.call(this,u),this.requestUpdate(b,d,e)},init(u){return u!==void 0&&this.P(b,void 0,e),u}}}if(l==="setter"){let{name:b}=o;return function(u){let d=this[b];n.call(this,u),this.requestUpdate(b,d,e)}}throw Error("Unsupported decorator location: "+l)};function f(e){return(n,o)=>typeof o=="object"?J(e,n,o):((l,a,p)=>{let b=a.hasOwnProperty(p);return a.constructor.createProperty(p,b?{...l,wrapped:!0}:l),b?Object.getOwnPropertyDescriptor(a,p):void 0})(e,n,o)}var g=(e,n,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(e,n,o),o);function F(e,n){return(o,l,a)=>{let p=b=>b.renderRoot?.querySelector(e)??null;if(n){let{get:b,set:u}=typeof l=="object"?o:a??(()=>{let d=Symbol();return{get(){return this[d]},set(G){this[d]=G}}})();return g(o,l,{get(){let d=b.call(this);return d===void 0&&(d=p(this),(d!==null||this.hasUpdated)&&u.call(this,d)),d}})}return g(o,l,{get(){return p(this)}})}}function _(e){return(n,o)=>{let{slot:l,selector:a}=e??{},p="slot"+(l?`[name=${l}]`:":not([name])");return g(n,o,{get(){let b=this.renderRoot?.querySelector(p),u=b?.assignedElements(e)??[];return a===void 0?u:u.filter(d=>d.matches(a))}})}}var R=e=>e??z;function H(e){return class extends e{static{this.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0}}focus(n){this._control.focus(n)}blur(){this._control.blur()}click(){this._control.click()}}}var r=class extends M{constructor(){super(...arguments);this._disposables=[]}disconnectedCallback(){super.disconnectedCallback();for(let o of this._disposables)o.dispose()}fireEvent(o,l){let a;return l===void 0?a=new CustomEvent(o):a=new CustomEvent(o,{detail:l}),this.dispatchEvent(a)}};var A=i`
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
`;var m=class extends H(r){render(){return c`<a
      class="button"
      part="base"
      href="${R(this.href)}"
      target="${R(this.target)}"
      rel="${R(this.rel)}"
      ><slot></slot
    ></a>`}};m.styles=[A],t([F(".button",!0)],m.prototype,"_control",2),t([f()],m.prototype,"href",2),t([f()],m.prototype,"target",2),t([f()],m.prototype,"rel",2),m=t([s("kd-link-button")],m);var v=class extends r{updated(){this.src&&this.style.setProperty("--kd-phone-hero-background-image",`url(${this.src})`)}render(){return c`<div class="container"><slot class="content"></slot></div>`}};v.styles=i`
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
      will-change: contents;
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
  `,t([f({type:String})],v.prototype,"src",2),v=t([s("kd-phone-hero")],v);var B=new Map;function L(e){let n=B.get(e);return n||(n=new Intl.DateTimeFormat(void 0,e),B.set(e,n)),n}var K=Object.freeze({year:"numeric",month:"long"});function j(e,n=K){return L(n).format(e)}var Jo=Object.freeze({numeric:"auto"});var I=1e3,$=I*60,C=$*60,E=C*24,Y=E*7,Z=E*30,N=E*365,V=N*4,Lo=Object.freeze(new Map([["year",N],["years",N],["quarter",V],["quarters",V],["month",Z],["months",Z],["week",Y],["weeks",Y],["day",E],["days",E],["hour",C],["hours",C],["minute",$],["minutes",$],["second",I],["seconds",I]]));var Ko=Object.freeze({localeMatcher:"best fit",numeric:"always",style:"narrow"});var h=class extends r{constructor(){super(...arguments);this.type="event";this.assetType="image"}get endingDate(){if(this.date==="present")return h.now;let o=new Date(this.date);if(o.toString()!=="Invalid Date")return o}get startingDate(){if(this.startDate===void 0)return;let o=new Date(this.startDate);if(o.toString()!=="Invalid Date")return o}renderDateRange(){return this.endingDate===void 0?z:this.startingDate===void 0?this.date==="present"?c`<time datetime="${h.now.getFullYear()}">Present</time>`:c`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${j(this.endingDate)}</time>
      </div>`:this.date==="present"?c`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${j(this.startingDate)}</time> - Present
      </div>`:c`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${j(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${j(this.endingDate)}</time>
    </div>`}renderMedia(){return this.asset===void 0?z:c`<div class="media-zone">
      <div class="media-container">
        <img class="media-cover" loading="lazy" src="${this.asset}" alt="" />
        <img class="media" loading="lazy" src="${this.asset}" alt="" />
      </div>
    </div>`}render(){return c`
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
    `}};h.now=new Date,h.styles=[P,i`
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
    `],t([f()],h.prototype,"type",2),t([f()],h.prototype,"asset",2),t([f({attribute:"asset-type"})],h.prototype,"assetType",2),t([f()],h.prototype,"date",2),t([f({attribute:"start-date"})],h.prototype,"startDate",2),t([f()],h.prototype,"url",2),h=t([s("kd-life-event")],h);var x=class extends r{render(){return c`<span class="timeline"></span><slot class="events"></slot>`}};x.styles=[i`
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
    `],t([_({selector:"kd-life-event"})],x.prototype,"lifeEventEls",2),x=t([s("kd-life-events")],x);function W(e,n,o){return e?n(e):o?.(e)}var k=class extends r{constructor(){super(...arguments);this.term="";this.definition="";this.type="tags"}get tags(){return this.definition.trim().length===0?[]:this.definition.split(/,(?![^(]*\))/).map(o=>o.trim())}render(){return c`
      <span role="term"><slot name="term">${this.term}</slot></span>
      <span role="definition"
        ><slot>
          ${W(this.type==="tags",()=>c`<span class="tags">${this.tags.map(o=>c`<kd-tag>${o}</kd-tag> `)}</span>`,()=>this.definition)}</slot
        ></span
      >
    `}};k.styles=[i`
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
    `],t([f()],k.prototype,"term",2),t([f()],k.prototype,"definition",2),t([f()],k.prototype,"type",2),k=t([s("kd-attribution")],k);var T=class extends r{render(){return c`<slot></slot>`}};T.styles=[i`
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
    `],T=t([s("kd-tag")],T);var O=class extends r{static{this.shadowRootOptions={...M.shadowRootOptions,delegatesFocus:!0}}focus(n){this._control.focus(n)}blur(){this._control.blur()}click(){this._control.click()}};var X=i`
  :host {
    display: inline-block;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;var y=class extends r{};y.styles=[X,i`
      :host {
        font-family: bootstrap-icons !important;
      }

      :host::before {
        vertical-align: -0.125em;
      }
    `,i`
      :host([icon='123'])::before {
        content: '\\f67f';
      }
      :host([icon='alarm-fill'])::before {
        content: '\\f101';
      }
      :host([icon='alarm'])::before {
        content: '\\f102';
      }
      :host([icon='align-bottom'])::before {
        content: '\\f103';
      }
      :host([icon='align-center'])::before {
        content: '\\f104';
      }
      :host([icon='align-end'])::before {
        content: '\\f105';
      }
      :host([icon='align-middle'])::before {
        content: '\\f106';
      }
      :host([icon='align-start'])::before {
        content: '\\f107';
      }
      :host([icon='align-top'])::before {
        content: '\\f108';
      }
      :host([icon='alt'])::before {
        content: '\\f109';
      }
      :host([icon='app-indicator'])::before {
        content: '\\f10a';
      }
      :host([icon='app'])::before {
        content: '\\f10b';
      }
      :host([icon='archive-fill'])::before {
        content: '\\f10c';
      }
      :host([icon='archive'])::before {
        content: '\\f10d';
      }
      :host([icon='arrow-90deg-down'])::before {
        content: '\\f10e';
      }
      :host([icon='arrow-90deg-left'])::before {
        content: '\\f10f';
      }
      :host([icon='arrow-90deg-right'])::before {
        content: '\\f110';
      }
      :host([icon='arrow-90deg-up'])::before {
        content: '\\f111';
      }
      :host([icon='arrow-bar-down'])::before {
        content: '\\f112';
      }
      :host([icon='arrow-bar-left'])::before {
        content: '\\f113';
      }
      :host([icon='arrow-bar-right'])::before {
        content: '\\f114';
      }
      :host([icon='arrow-bar-up'])::before {
        content: '\\f115';
      }
      :host([icon='arrow-clockwise'])::before {
        content: '\\f116';
      }
      :host([icon='arrow-counterclockwise'])::before {
        content: '\\f117';
      }
      :host([icon='arrow-down-circle-fill'])::before {
        content: '\\f118';
      }
      :host([icon='arrow-down-circle'])::before {
        content: '\\f119';
      }
      :host([icon='arrow-down-left-circle-fill'])::before {
        content: '\\f11a';
      }
      :host([icon='arrow-down-left-circle'])::before {
        content: '\\f11b';
      }
      :host([icon='arrow-down-left-square-fill'])::before {
        content: '\\f11c';
      }
      :host([icon='arrow-down-left-square'])::before {
        content: '\\f11d';
      }
      :host([icon='arrow-down-left'])::before {
        content: '\\f11e';
      }
      :host([icon='arrow-down-right-circle-fill'])::before {
        content: '\\f11f';
      }
      :host([icon='arrow-down-right-circle'])::before {
        content: '\\f120';
      }
      :host([icon='arrow-down-right-square-fill'])::before {
        content: '\\f121';
      }
      :host([icon='arrow-down-right-square'])::before {
        content: '\\f122';
      }
      :host([icon='arrow-down-right'])::before {
        content: '\\f123';
      }
      :host([icon='arrow-down-short'])::before {
        content: '\\f124';
      }
      :host([icon='arrow-down-square-fill'])::before {
        content: '\\f125';
      }
      :host([icon='arrow-down-square'])::before {
        content: '\\f126';
      }
      :host([icon='arrow-down-up'])::before {
        content: '\\f127';
      }
      :host([icon='arrow-down'])::before {
        content: '\\f128';
      }
      :host([icon='arrow-left-circle-fill'])::before {
        content: '\\f129';
      }
      :host([icon='arrow-left-circle'])::before {
        content: '\\f12a';
      }
      :host([icon='arrow-left-right'])::before {
        content: '\\f12b';
      }
      :host([icon='arrow-left-short'])::before {
        content: '\\f12c';
      }
      :host([icon='arrow-left-square-fill'])::before {
        content: '\\f12d';
      }
      :host([icon='arrow-left-square'])::before {
        content: '\\f12e';
      }
      :host([icon='arrow-left'])::before {
        content: '\\f12f';
      }
      :host([icon='arrow-repeat'])::before {
        content: '\\f130';
      }
      :host([icon='arrow-return-left'])::before {
        content: '\\f131';
      }
      :host([icon='arrow-return-right'])::before {
        content: '\\f132';
      }
      :host([icon='arrow-right-circle-fill'])::before {
        content: '\\f133';
      }
      :host([icon='arrow-right-circle'])::before {
        content: '\\f134';
      }
      :host([icon='arrow-right-short'])::before {
        content: '\\f135';
      }
      :host([icon='arrow-right-square-fill'])::before {
        content: '\\f136';
      }
      :host([icon='arrow-right-square'])::before {
        content: '\\f137';
      }
      :host([icon='arrow-right'])::before {
        content: '\\f138';
      }
      :host([icon='arrow-up-circle-fill'])::before {
        content: '\\f139';
      }
      :host([icon='arrow-up-circle'])::before {
        content: '\\f13a';
      }
      :host([icon='arrow-up-left-circle-fill'])::before {
        content: '\\f13b';
      }
      :host([icon='arrow-up-left-circle'])::before {
        content: '\\f13c';
      }
      :host([icon='arrow-up-left-square-fill'])::before {
        content: '\\f13d';
      }
      :host([icon='arrow-up-left-square'])::before {
        content: '\\f13e';
      }
      :host([icon='arrow-up-left'])::before {
        content: '\\f13f';
      }
      :host([icon='arrow-up-right-circle-fill'])::before {
        content: '\\f140';
      }
      :host([icon='arrow-up-right-circle'])::before {
        content: '\\f141';
      }
      :host([icon='arrow-up-right-square-fill'])::before {
        content: '\\f142';
      }
      :host([icon='arrow-up-right-square'])::before {
        content: '\\f143';
      }
      :host([icon='arrow-up-right'])::before {
        content: '\\f144';
      }
      :host([icon='arrow-up-short'])::before {
        content: '\\f145';
      }
      :host([icon='arrow-up-square-fill'])::before {
        content: '\\f146';
      }
      :host([icon='arrow-up-square'])::before {
        content: '\\f147';
      }
      :host([icon='arrow-up'])::before {
        content: '\\f148';
      }
      :host([icon='arrows-angle-contract'])::before {
        content: '\\f149';
      }
      :host([icon='arrows-angle-expand'])::before {
        content: '\\f14a';
      }
      :host([icon='arrows-collapse'])::before {
        content: '\\f14b';
      }
      :host([icon='arrows-expand'])::before {
        content: '\\f14c';
      }
      :host([icon='arrows-fullscreen'])::before {
        content: '\\f14d';
      }
      :host([icon='arrows-move'])::before {
        content: '\\f14e';
      }
      :host([icon='aspect-ratio-fill'])::before {
        content: '\\f14f';
      }
      :host([icon='aspect-ratio'])::before {
        content: '\\f150';
      }
      :host([icon='asterisk'])::before {
        content: '\\f151';
      }
      :host([icon='at'])::before {
        content: '\\f152';
      }
      :host([icon='award-fill'])::before {
        content: '\\f153';
      }
      :host([icon='award'])::before {
        content: '\\f154';
      }
      :host([icon='back'])::before {
        content: '\\f155';
      }
      :host([icon='backspace-fill'])::before {
        content: '\\f156';
      }
      :host([icon='backspace-reverse-fill'])::before {
        content: '\\f157';
      }
      :host([icon='backspace-reverse'])::before {
        content: '\\f158';
      }
      :host([icon='backspace'])::before {
        content: '\\f159';
      }
      :host([icon='badge-3d-fill'])::before {
        content: '\\f15a';
      }
      :host([icon='badge-3d'])::before {
        content: '\\f15b';
      }
      :host([icon='badge-4k-fill'])::before {
        content: '\\f15c';
      }
      :host([icon='badge-4k'])::before {
        content: '\\f15d';
      }
      :host([icon='badge-8k-fill'])::before {
        content: '\\f15e';
      }
      :host([icon='badge-8k'])::before {
        content: '\\f15f';
      }
      :host([icon='badge-ad-fill'])::before {
        content: '\\f160';
      }
      :host([icon='badge-ad'])::before {
        content: '\\f161';
      }
      :host([icon='badge-ar-fill'])::before {
        content: '\\f162';
      }
      :host([icon='badge-ar'])::before {
        content: '\\f163';
      }
      :host([icon='badge-cc-fill'])::before {
        content: '\\f164';
      }
      :host([icon='badge-cc'])::before {
        content: '\\f165';
      }
      :host([icon='badge-hd-fill'])::before {
        content: '\\f166';
      }
      :host([icon='badge-hd'])::before {
        content: '\\f167';
      }
      :host([icon='badge-tm-fill'])::before {
        content: '\\f168';
      }
      :host([icon='badge-tm'])::before {
        content: '\\f169';
      }
      :host([icon='badge-vo-fill'])::before {
        content: '\\f16a';
      }
      :host([icon='badge-vo'])::before {
        content: '\\f16b';
      }
      :host([icon='badge-vr-fill'])::before {
        content: '\\f16c';
      }
      :host([icon='badge-vr'])::before {
        content: '\\f16d';
      }
      :host([icon='badge-wc-fill'])::before {
        content: '\\f16e';
      }
      :host([icon='badge-wc'])::before {
        content: '\\f16f';
      }
      :host([icon='bag-check-fill'])::before {
        content: '\\f170';
      }
      :host([icon='bag-check'])::before {
        content: '\\f171';
      }
      :host([icon='bag-dash-fill'])::before {
        content: '\\f172';
      }
      :host([icon='bag-dash'])::before {
        content: '\\f173';
      }
      :host([icon='bag-fill'])::before {
        content: '\\f174';
      }
      :host([icon='bag-plus-fill'])::before {
        content: '\\f175';
      }
      :host([icon='bag-plus'])::before {
        content: '\\f176';
      }
      :host([icon='bag-x-fill'])::before {
        content: '\\f177';
      }
      :host([icon='bag-x'])::before {
        content: '\\f178';
      }
      :host([icon='bag'])::before {
        content: '\\f179';
      }
      :host([icon='bar-chart-fill'])::before {
        content: '\\f17a';
      }
      :host([icon='bar-chart-line-fill'])::before {
        content: '\\f17b';
      }
      :host([icon='bar-chart-line'])::before {
        content: '\\f17c';
      }
      :host([icon='bar-chart-steps'])::before {
        content: '\\f17d';
      }
      :host([icon='bar-chart'])::before {
        content: '\\f17e';
      }
      :host([icon='basket-fill'])::before {
        content: '\\f17f';
      }
      :host([icon='basket'])::before {
        content: '\\f180';
      }
      :host([icon='basket2-fill'])::before {
        content: '\\f181';
      }
      :host([icon='basket2'])::before {
        content: '\\f182';
      }
      :host([icon='basket3-fill'])::before {
        content: '\\f183';
      }
      :host([icon='basket3'])::before {
        content: '\\f184';
      }
      :host([icon='battery-charging'])::before {
        content: '\\f185';
      }
      :host([icon='battery-full'])::before {
        content: '\\f186';
      }
      :host([icon='battery-half'])::before {
        content: '\\f187';
      }
      :host([icon='battery'])::before {
        content: '\\f188';
      }
      :host([icon='bell-fill'])::before {
        content: '\\f189';
      }
      :host([icon='bell'])::before {
        content: '\\f18a';
      }
      :host([icon='bezier'])::before {
        content: '\\f18b';
      }
      :host([icon='bezier2'])::before {
        content: '\\f18c';
      }
      :host([icon='bicycle'])::before {
        content: '\\f18d';
      }
      :host([icon='binoculars-fill'])::before {
        content: '\\f18e';
      }
      :host([icon='binoculars'])::before {
        content: '\\f18f';
      }
      :host([icon='blockquote-left'])::before {
        content: '\\f190';
      }
      :host([icon='blockquote-right'])::before {
        content: '\\f191';
      }
      :host([icon='book-fill'])::before {
        content: '\\f192';
      }
      :host([icon='book-half'])::before {
        content: '\\f193';
      }
      :host([icon='book'])::before {
        content: '\\f194';
      }
      :host([icon='bookmark-check-fill'])::before {
        content: '\\f195';
      }
      :host([icon='bookmark-check'])::before {
        content: '\\f196';
      }
      :host([icon='bookmark-dash-fill'])::before {
        content: '\\f197';
      }
      :host([icon='bookmark-dash'])::before {
        content: '\\f198';
      }
      :host([icon='bookmark-fill'])::before {
        content: '\\f199';
      }
      :host([icon='bookmark-heart-fill'])::before {
        content: '\\f19a';
      }
      :host([icon='bookmark-heart'])::before {
        content: '\\f19b';
      }
      :host([icon='bookmark-plus-fill'])::before {
        content: '\\f19c';
      }
      :host([icon='bookmark-plus'])::before {
        content: '\\f19d';
      }
      :host([icon='bookmark-star-fill'])::before {
        content: '\\f19e';
      }
      :host([icon='bookmark-star'])::before {
        content: '\\f19f';
      }
      :host([icon='bookmark-x-fill'])::before {
        content: '\\f1a0';
      }
      :host([icon='bookmark-x'])::before {
        content: '\\f1a1';
      }
      :host([icon='bookmark'])::before {
        content: '\\f1a2';
      }
      :host([icon='bookmarks-fill'])::before {
        content: '\\f1a3';
      }
      :host([icon='bookmarks'])::before {
        content: '\\f1a4';
      }
      :host([icon='bookshelf'])::before {
        content: '\\f1a5';
      }
      :host([icon='bootstrap-fill'])::before {
        content: '\\f1a6';
      }
      :host([icon='bootstrap-reboot'])::before {
        content: '\\f1a7';
      }
      :host([icon='bootstrap'])::before {
        content: '\\f1a8';
      }
      :host([icon='border-all'])::before {
        content: '\\f1a9';
      }
      :host([icon='border-bottom'])::before {
        content: '\\f1aa';
      }
      :host([icon='border-center'])::before {
        content: '\\f1ab';
      }
      :host([icon='border-inner'])::before {
        content: '\\f1ac';
      }
      :host([icon='border-left'])::before {
        content: '\\f1ad';
      }
      :host([icon='border-middle'])::before {
        content: '\\f1ae';
      }
      :host([icon='border-outer'])::before {
        content: '\\f1af';
      }
      :host([icon='border-right'])::before {
        content: '\\f1b0';
      }
      :host([icon='border-style'])::before {
        content: '\\f1b1';
      }
      :host([icon='border-top'])::before {
        content: '\\f1b2';
      }
      :host([icon='border-width'])::before {
        content: '\\f1b3';
      }
      :host([icon='border'])::before {
        content: '\\f1b4';
      }
      :host([icon='bounding-box-circles'])::before {
        content: '\\f1b5';
      }
      :host([icon='bounding-box'])::before {
        content: '\\f1b6';
      }
      :host([icon='box-arrow-down-left'])::before {
        content: '\\f1b7';
      }
      :host([icon='box-arrow-down-right'])::before {
        content: '\\f1b8';
      }
      :host([icon='box-arrow-down'])::before {
        content: '\\f1b9';
      }
      :host([icon='box-arrow-in-down-left'])::before {
        content: '\\f1ba';
      }
      :host([icon='box-arrow-in-down-right'])::before {
        content: '\\f1bb';
      }
      :host([icon='box-arrow-in-down'])::before {
        content: '\\f1bc';
      }
      :host([icon='box-arrow-in-left'])::before {
        content: '\\f1bd';
      }
      :host([icon='box-arrow-in-right'])::before {
        content: '\\f1be';
      }
      :host([icon='box-arrow-in-up-left'])::before {
        content: '\\f1bf';
      }
      :host([icon='box-arrow-in-up-right'])::before {
        content: '\\f1c0';
      }
      :host([icon='box-arrow-in-up'])::before {
        content: '\\f1c1';
      }
      :host([icon='box-arrow-left'])::before {
        content: '\\f1c2';
      }
      :host([icon='box-arrow-right'])::before {
        content: '\\f1c3';
      }
      :host([icon='box-arrow-up-left'])::before {
        content: '\\f1c4';
      }
      :host([icon='box-arrow-up-right'])::before {
        content: '\\f1c5';
      }
      :host([icon='box-arrow-up'])::before {
        content: '\\f1c6';
      }
      :host([icon='box-seam'])::before {
        content: '\\f1c7';
      }
      :host([icon='box'])::before {
        content: '\\f1c8';
      }
      :host([icon='braces'])::before {
        content: '\\f1c9';
      }
      :host([icon='bricks'])::before {
        content: '\\f1ca';
      }
      :host([icon='briefcase-fill'])::before {
        content: '\\f1cb';
      }
      :host([icon='briefcase'])::before {
        content: '\\f1cc';
      }
      :host([icon='brightness-alt-high-fill'])::before {
        content: '\\f1cd';
      }
      :host([icon='brightness-alt-high'])::before {
        content: '\\f1ce';
      }
      :host([icon='brightness-alt-low-fill'])::before {
        content: '\\f1cf';
      }
      :host([icon='brightness-alt-low'])::before {
        content: '\\f1d0';
      }
      :host([icon='brightness-high-fill'])::before {
        content: '\\f1d1';
      }
      :host([icon='brightness-high'])::before {
        content: '\\f1d2';
      }
      :host([icon='brightness-low-fill'])::before {
        content: '\\f1d3';
      }
      :host([icon='brightness-low'])::before {
        content: '\\f1d4';
      }
      :host([icon='broadcast-pin'])::before {
        content: '\\f1d5';
      }
      :host([icon='broadcast'])::before {
        content: '\\f1d6';
      }
      :host([icon='brush-fill'])::before {
        content: '\\f1d7';
      }
      :host([icon='brush'])::before {
        content: '\\f1d8';
      }
      :host([icon='bucket-fill'])::before {
        content: '\\f1d9';
      }
      :host([icon='bucket'])::before {
        content: '\\f1da';
      }
      :host([icon='bug-fill'])::before {
        content: '\\f1db';
      }
      :host([icon='bug'])::before {
        content: '\\f1dc';
      }
      :host([icon='building'])::before {
        content: '\\f1dd';
      }
      :host([icon='bullseye'])::before {
        content: '\\f1de';
      }
      :host([icon='calculator-fill'])::before {
        content: '\\f1df';
      }
      :host([icon='calculator'])::before {
        content: '\\f1e0';
      }
      :host([icon='calendar-check-fill'])::before {
        content: '\\f1e1';
      }
      :host([icon='calendar-check'])::before {
        content: '\\f1e2';
      }
      :host([icon='calendar-date-fill'])::before {
        content: '\\f1e3';
      }
      :host([icon='calendar-date'])::before {
        content: '\\f1e4';
      }
      :host([icon='calendar-day-fill'])::before {
        content: '\\f1e5';
      }
      :host([icon='calendar-day'])::before {
        content: '\\f1e6';
      }
      :host([icon='calendar-event-fill'])::before {
        content: '\\f1e7';
      }
      :host([icon='calendar-event'])::before {
        content: '\\f1e8';
      }
      :host([icon='calendar-fill'])::before {
        content: '\\f1e9';
      }
      :host([icon='calendar-minus-fill'])::before {
        content: '\\f1ea';
      }
      :host([icon='calendar-minus'])::before {
        content: '\\f1eb';
      }
      :host([icon='calendar-month-fill'])::before {
        content: '\\f1ec';
      }
      :host([icon='calendar-month'])::before {
        content: '\\f1ed';
      }
      :host([icon='calendar-plus-fill'])::before {
        content: '\\f1ee';
      }
      :host([icon='calendar-plus'])::before {
        content: '\\f1ef';
      }
      :host([icon='calendar-range-fill'])::before {
        content: '\\f1f0';
      }
      :host([icon='calendar-range'])::before {
        content: '\\f1f1';
      }
      :host([icon='calendar-week-fill'])::before {
        content: '\\f1f2';
      }
      :host([icon='calendar-week'])::before {
        content: '\\f1f3';
      }
      :host([icon='calendar-x-fill'])::before {
        content: '\\f1f4';
      }
      :host([icon='calendar-x'])::before {
        content: '\\f1f5';
      }
      :host([icon='calendar'])::before {
        content: '\\f1f6';
      }
      :host([icon='calendar2-check-fill'])::before {
        content: '\\f1f7';
      }
      :host([icon='calendar2-check'])::before {
        content: '\\f1f8';
      }
      :host([icon='calendar2-date-fill'])::before {
        content: '\\f1f9';
      }
      :host([icon='calendar2-date'])::before {
        content: '\\f1fa';
      }
      :host([icon='calendar2-day-fill'])::before {
        content: '\\f1fb';
      }
      :host([icon='calendar2-day'])::before {
        content: '\\f1fc';
      }
      :host([icon='calendar2-event-fill'])::before {
        content: '\\f1fd';
      }
      :host([icon='calendar2-event'])::before {
        content: '\\f1fe';
      }
      :host([icon='calendar2-fill'])::before {
        content: '\\f1ff';
      }
      :host([icon='calendar2-minus-fill'])::before {
        content: '\\f200';
      }
      :host([icon='calendar2-minus'])::before {
        content: '\\f201';
      }
      :host([icon='calendar2-month-fill'])::before {
        content: '\\f202';
      }
      :host([icon='calendar2-month'])::before {
        content: '\\f203';
      }
      :host([icon='calendar2-plus-fill'])::before {
        content: '\\f204';
      }
      :host([icon='calendar2-plus'])::before {
        content: '\\f205';
      }
      :host([icon='calendar2-range-fill'])::before {
        content: '\\f206';
      }
      :host([icon='calendar2-range'])::before {
        content: '\\f207';
      }
      :host([icon='calendar2-week-fill'])::before {
        content: '\\f208';
      }
      :host([icon='calendar2-week'])::before {
        content: '\\f209';
      }
      :host([icon='calendar2-x-fill'])::before {
        content: '\\f20a';
      }
      :host([icon='calendar2-x'])::before {
        content: '\\f20b';
      }
      :host([icon='calendar2'])::before {
        content: '\\f20c';
      }
      :host([icon='calendar3-event-fill'])::before {
        content: '\\f20d';
      }
      :host([icon='calendar3-event'])::before {
        content: '\\f20e';
      }
      :host([icon='calendar3-fill'])::before {
        content: '\\f20f';
      }
      :host([icon='calendar3-range-fill'])::before {
        content: '\\f210';
      }
      :host([icon='calendar3-range'])::before {
        content: '\\f211';
      }
      :host([icon='calendar3-week-fill'])::before {
        content: '\\f212';
      }
      :host([icon='calendar3-week'])::before {
        content: '\\f213';
      }
      :host([icon='calendar3'])::before {
        content: '\\f214';
      }
      :host([icon='calendar4-event'])::before {
        content: '\\f215';
      }
      :host([icon='calendar4-range'])::before {
        content: '\\f216';
      }
      :host([icon='calendar4-week'])::before {
        content: '\\f217';
      }
      :host([icon='calendar4'])::before {
        content: '\\f218';
      }
      :host([icon='camera-fill'])::before {
        content: '\\f219';
      }
      :host([icon='camera-reels-fill'])::before {
        content: '\\f21a';
      }
      :host([icon='camera-reels'])::before {
        content: '\\f21b';
      }
      :host([icon='camera-video-fill'])::before {
        content: '\\f21c';
      }
      :host([icon='camera-video-off-fill'])::before {
        content: '\\f21d';
      }
      :host([icon='camera-video-off'])::before {
        content: '\\f21e';
      }
      :host([icon='camera-video'])::before {
        content: '\\f21f';
      }
      :host([icon='camera'])::before {
        content: '\\f220';
      }
      :host([icon='camera2'])::before {
        content: '\\f221';
      }
      :host([icon='capslock-fill'])::before {
        content: '\\f222';
      }
      :host([icon='capslock'])::before {
        content: '\\f223';
      }
      :host([icon='card-checklist'])::before {
        content: '\\f224';
      }
      :host([icon='card-heading'])::before {
        content: '\\f225';
      }
      :host([icon='card-image'])::before {
        content: '\\f226';
      }
      :host([icon='card-list'])::before {
        content: '\\f227';
      }
      :host([icon='card-text'])::before {
        content: '\\f228';
      }
      :host([icon='caret-down-fill'])::before {
        content: '\\f229';
      }
      :host([icon='caret-down-square-fill'])::before {
        content: '\\f22a';
      }
      :host([icon='caret-down-square'])::before {
        content: '\\f22b';
      }
      :host([icon='caret-down'])::before {
        content: '\\f22c';
      }
      :host([icon='caret-left-fill'])::before {
        content: '\\f22d';
      }
      :host([icon='caret-left-square-fill'])::before {
        content: '\\f22e';
      }
      :host([icon='caret-left-square'])::before {
        content: '\\f22f';
      }
      :host([icon='caret-left'])::before {
        content: '\\f230';
      }
      :host([icon='caret-right-fill'])::before {
        content: '\\f231';
      }
      :host([icon='caret-right-square-fill'])::before {
        content: '\\f232';
      }
      :host([icon='caret-right-square'])::before {
        content: '\\f233';
      }
      :host([icon='caret-right'])::before {
        content: '\\f234';
      }
      :host([icon='caret-up-fill'])::before {
        content: '\\f235';
      }
      :host([icon='caret-up-square-fill'])::before {
        content: '\\f236';
      }
      :host([icon='caret-up-square'])::before {
        content: '\\f237';
      }
      :host([icon='caret-up'])::before {
        content: '\\f238';
      }
      :host([icon='cart-check-fill'])::before {
        content: '\\f239';
      }
      :host([icon='cart-check'])::before {
        content: '\\f23a';
      }
      :host([icon='cart-dash-fill'])::before {
        content: '\\f23b';
      }
      :host([icon='cart-dash'])::before {
        content: '\\f23c';
      }
      :host([icon='cart-fill'])::before {
        content: '\\f23d';
      }
      :host([icon='cart-plus-fill'])::before {
        content: '\\f23e';
      }
      :host([icon='cart-plus'])::before {
        content: '\\f23f';
      }
      :host([icon='cart-x-fill'])::before {
        content: '\\f240';
      }
      :host([icon='cart-x'])::before {
        content: '\\f241';
      }
      :host([icon='cart'])::before {
        content: '\\f242';
      }
      :host([icon='cart2'])::before {
        content: '\\f243';
      }
      :host([icon='cart3'])::before {
        content: '\\f244';
      }
      :host([icon='cart4'])::before {
        content: '\\f245';
      }
      :host([icon='cash-stack'])::before {
        content: '\\f246';
      }
      :host([icon='cash'])::before {
        content: '\\f247';
      }
      :host([icon='cast'])::before {
        content: '\\f248';
      }
      :host([icon='chat-dots-fill'])::before {
        content: '\\f249';
      }
      :host([icon='chat-dots'])::before {
        content: '\\f24a';
      }
      :host([icon='chat-fill'])::before {
        content: '\\f24b';
      }
      :host([icon='chat-left-dots-fill'])::before {
        content: '\\f24c';
      }
      :host([icon='chat-left-dots'])::before {
        content: '\\f24d';
      }
      :host([icon='chat-left-fill'])::before {
        content: '\\f24e';
      }
      :host([icon='chat-left-quote-fill'])::before {
        content: '\\f24f';
      }
      :host([icon='chat-left-quote'])::before {
        content: '\\f250';
      }
      :host([icon='chat-left-text-fill'])::before {
        content: '\\f251';
      }
      :host([icon='chat-left-text'])::before {
        content: '\\f252';
      }
      :host([icon='chat-left'])::before {
        content: '\\f253';
      }
      :host([icon='chat-quote-fill'])::before {
        content: '\\f254';
      }
      :host([icon='chat-quote'])::before {
        content: '\\f255';
      }
      :host([icon='chat-right-dots-fill'])::before {
        content: '\\f256';
      }
      :host([icon='chat-right-dots'])::before {
        content: '\\f257';
      }
      :host([icon='chat-right-fill'])::before {
        content: '\\f258';
      }
      :host([icon='chat-right-quote-fill'])::before {
        content: '\\f259';
      }
      :host([icon='chat-right-quote'])::before {
        content: '\\f25a';
      }
      :host([icon='chat-right-text-fill'])::before {
        content: '\\f25b';
      }
      :host([icon='chat-right-text'])::before {
        content: '\\f25c';
      }
      :host([icon='chat-right'])::before {
        content: '\\f25d';
      }
      :host([icon='chat-square-dots-fill'])::before {
        content: '\\f25e';
      }
      :host([icon='chat-square-dots'])::before {
        content: '\\f25f';
      }
      :host([icon='chat-square-fill'])::before {
        content: '\\f260';
      }
      :host([icon='chat-square-quote-fill'])::before {
        content: '\\f261';
      }
      :host([icon='chat-square-quote'])::before {
        content: '\\f262';
      }
      :host([icon='chat-square-text-fill'])::before {
        content: '\\f263';
      }
      :host([icon='chat-square-text'])::before {
        content: '\\f264';
      }
      :host([icon='chat-square'])::before {
        content: '\\f265';
      }
      :host([icon='chat-text-fill'])::before {
        content: '\\f266';
      }
      :host([icon='chat-text'])::before {
        content: '\\f267';
      }
      :host([icon='chat'])::before {
        content: '\\f268';
      }
      :host([icon='check-all'])::before {
        content: '\\f269';
      }
      :host([icon='check-circle-fill'])::before {
        content: '\\f26a';
      }
      :host([icon='check-circle'])::before {
        content: '\\f26b';
      }
      :host([icon='check-square-fill'])::before {
        content: '\\f26c';
      }
      :host([icon='check-square'])::before {
        content: '\\f26d';
      }
      :host([icon='check'])::before {
        content: '\\f26e';
      }
      :host([icon='check2-all'])::before {
        content: '\\f26f';
      }
      :host([icon='check2-circle'])::before {
        content: '\\f270';
      }
      :host([icon='check2-square'])::before {
        content: '\\f271';
      }
      :host([icon='check2'])::before {
        content: '\\f272';
      }
      :host([icon='chevron-bar-contract'])::before {
        content: '\\f273';
      }
      :host([icon='chevron-bar-down'])::before {
        content: '\\f274';
      }
      :host([icon='chevron-bar-expand'])::before {
        content: '\\f275';
      }
      :host([icon='chevron-bar-left'])::before {
        content: '\\f276';
      }
      :host([icon='chevron-bar-right'])::before {
        content: '\\f277';
      }
      :host([icon='chevron-bar-up'])::before {
        content: '\\f278';
      }
      :host([icon='chevron-compact-down'])::before {
        content: '\\f279';
      }
      :host([icon='chevron-compact-left'])::before {
        content: '\\f27a';
      }
      :host([icon='chevron-compact-right'])::before {
        content: '\\f27b';
      }
      :host([icon='chevron-compact-up'])::before {
        content: '\\f27c';
      }
      :host([icon='chevron-contract'])::before {
        content: '\\f27d';
      }
      :host([icon='chevron-double-down'])::before {
        content: '\\f27e';
      }
      :host([icon='chevron-double-left'])::before {
        content: '\\f27f';
      }
      :host([icon='chevron-double-right'])::before {
        content: '\\f280';
      }
      :host([icon='chevron-double-up'])::before {
        content: '\\f281';
      }
      :host([icon='chevron-down'])::before {
        content: '\\f282';
      }
      :host([icon='chevron-expand'])::before {
        content: '\\f283';
      }
      :host([icon='chevron-left'])::before {
        content: '\\f284';
      }
      :host([icon='chevron-right'])::before {
        content: '\\f285';
      }
      :host([icon='chevron-up'])::before {
        content: '\\f286';
      }
      :host([icon='circle-fill'])::before {
        content: '\\f287';
      }
      :host([icon='circle-half'])::before {
        content: '\\f288';
      }
      :host([icon='circle-square'])::before {
        content: '\\f289';
      }
      :host([icon='circle'])::before {
        content: '\\f28a';
      }
      :host([icon='clipboard-check'])::before {
        content: '\\f28b';
      }
      :host([icon='clipboard-data'])::before {
        content: '\\f28c';
      }
      :host([icon='clipboard-minus'])::before {
        content: '\\f28d';
      }
      :host([icon='clipboard-plus'])::before {
        content: '\\f28e';
      }
      :host([icon='clipboard-x'])::before {
        content: '\\f28f';
      }
      :host([icon='clipboard'])::before {
        content: '\\f290';
      }
      :host([icon='clock-fill'])::before {
        content: '\\f291';
      }
      :host([icon='clock-history'])::before {
        content: '\\f292';
      }
      :host([icon='clock'])::before {
        content: '\\f293';
      }
      :host([icon='cloud-arrow-down-fill'])::before {
        content: '\\f294';
      }
      :host([icon='cloud-arrow-down'])::before {
        content: '\\f295';
      }
      :host([icon='cloud-arrow-up-fill'])::before {
        content: '\\f296';
      }
      :host([icon='cloud-arrow-up'])::before {
        content: '\\f297';
      }
      :host([icon='cloud-check-fill'])::before {
        content: '\\f298';
      }
      :host([icon='cloud-check'])::before {
        content: '\\f299';
      }
      :host([icon='cloud-download-fill'])::before {
        content: '\\f29a';
      }
      :host([icon='cloud-download'])::before {
        content: '\\f29b';
      }
      :host([icon='cloud-drizzle-fill'])::before {
        content: '\\f29c';
      }
      :host([icon='cloud-drizzle'])::before {
        content: '\\f29d';
      }
      :host([icon='cloud-fill'])::before {
        content: '\\f29e';
      }
      :host([icon='cloud-fog-fill'])::before {
        content: '\\f29f';
      }
      :host([icon='cloud-fog'])::before {
        content: '\\f2a0';
      }
      :host([icon='cloud-fog2-fill'])::before {
        content: '\\f2a1';
      }
      :host([icon='cloud-fog2'])::before {
        content: '\\f2a2';
      }
      :host([icon='cloud-hail-fill'])::before {
        content: '\\f2a3';
      }
      :host([icon='cloud-hail'])::before {
        content: '\\f2a4';
      }
      :host([icon='cloud-haze-fill'])::before {
        content: '\\f2a6';
      }
      :host([icon='cloud-haze'])::before {
        content: '\\f2a7';
      }
      :host([icon='cloud-haze2-fill'])::before {
        content: '\\f2a8';
      }
      :host([icon='cloud-lightning-fill'])::before {
        content: '\\f2a9';
      }
      :host([icon='cloud-lightning-rain-fill'])::before {
        content: '\\f2aa';
      }
      :host([icon='cloud-lightning-rain'])::before {
        content: '\\f2ab';
      }
      :host([icon='cloud-lightning'])::before {
        content: '\\f2ac';
      }
      :host([icon='cloud-minus-fill'])::before {
        content: '\\f2ad';
      }
      :host([icon='cloud-minus'])::before {
        content: '\\f2ae';
      }
      :host([icon='cloud-moon-fill'])::before {
        content: '\\f2af';
      }
      :host([icon='cloud-moon'])::before {
        content: '\\f2b0';
      }
      :host([icon='cloud-plus-fill'])::before {
        content: '\\f2b1';
      }
      :host([icon='cloud-plus'])::before {
        content: '\\f2b2';
      }
      :host([icon='cloud-rain-fill'])::before {
        content: '\\f2b3';
      }
      :host([icon='cloud-rain-heavy-fill'])::before {
        content: '\\f2b4';
      }
      :host([icon='cloud-rain-heavy'])::before {
        content: '\\f2b5';
      }
      :host([icon='cloud-rain'])::before {
        content: '\\f2b6';
      }
      :host([icon='cloud-slash-fill'])::before {
        content: '\\f2b7';
      }
      :host([icon='cloud-slash'])::before {
        content: '\\f2b8';
      }
      :host([icon='cloud-sleet-fill'])::before {
        content: '\\f2b9';
      }
      :host([icon='cloud-sleet'])::before {
        content: '\\f2ba';
      }
      :host([icon='cloud-snow-fill'])::before {
        content: '\\f2bb';
      }
      :host([icon='cloud-snow'])::before {
        content: '\\f2bc';
      }
      :host([icon='cloud-sun-fill'])::before {
        content: '\\f2bd';
      }
      :host([icon='cloud-sun'])::before {
        content: '\\f2be';
      }
      :host([icon='cloud-upload-fill'])::before {
        content: '\\f2bf';
      }
      :host([icon='cloud-upload'])::before {
        content: '\\f2c0';
      }
      :host([icon='cloud'])::before {
        content: '\\f2c1';
      }
      :host([icon='clouds-fill'])::before {
        content: '\\f2c2';
      }
      :host([icon='clouds'])::before {
        content: '\\f2c3';
      }
      :host([icon='cloudy-fill'])::before {
        content: '\\f2c4';
      }
      :host([icon='cloudy'])::before {
        content: '\\f2c5';
      }
      :host([icon='code-slash'])::before {
        content: '\\f2c6';
      }
      :host([icon='code-square'])::before {
        content: '\\f2c7';
      }
      :host([icon='code'])::before {
        content: '\\f2c8';
      }
      :host([icon='collection-fill'])::before {
        content: '\\f2c9';
      }
      :host([icon='collection-play-fill'])::before {
        content: '\\f2ca';
      }
      :host([icon='collection-play'])::before {
        content: '\\f2cb';
      }
      :host([icon='collection'])::before {
        content: '\\f2cc';
      }
      :host([icon='columns-gap'])::before {
        content: '\\f2cd';
      }
      :host([icon='columns'])::before {
        content: '\\f2ce';
      }
      :host([icon='command'])::before {
        content: '\\f2cf';
      }
      :host([icon='compass-fill'])::before {
        content: '\\f2d0';
      }
      :host([icon='compass'])::before {
        content: '\\f2d1';
      }
      :host([icon='cone-striped'])::before {
        content: '\\f2d2';
      }
      :host([icon='cone'])::before {
        content: '\\f2d3';
      }
      :host([icon='controller'])::before {
        content: '\\f2d4';
      }
      :host([icon='cpu-fill'])::before {
        content: '\\f2d5';
      }
      :host([icon='cpu'])::before {
        content: '\\f2d6';
      }
      :host([icon='credit-card-2-back-fill'])::before {
        content: '\\f2d7';
      }
      :host([icon='credit-card-2-back'])::before {
        content: '\\f2d8';
      }
      :host([icon='credit-card-2-front-fill'])::before {
        content: '\\f2d9';
      }
      :host([icon='credit-card-2-front'])::before {
        content: '\\f2da';
      }
      :host([icon='credit-card-fill'])::before {
        content: '\\f2db';
      }
      :host([icon='credit-card'])::before {
        content: '\\f2dc';
      }
      :host([icon='crop'])::before {
        content: '\\f2dd';
      }
      :host([icon='cup-fill'])::before {
        content: '\\f2de';
      }
      :host([icon='cup-straw'])::before {
        content: '\\f2df';
      }
      :host([icon='cup'])::before {
        content: '\\f2e0';
      }
      :host([icon='cursor-fill'])::before {
        content: '\\f2e1';
      }
      :host([icon='cursor-text'])::before {
        content: '\\f2e2';
      }
      :host([icon='cursor'])::before {
        content: '\\f2e3';
      }
      :host([icon='dash-circle-dotted'])::before {
        content: '\\f2e4';
      }
      :host([icon='dash-circle-fill'])::before {
        content: '\\f2e5';
      }
      :host([icon='dash-circle'])::before {
        content: '\\f2e6';
      }
      :host([icon='dash-square-dotted'])::before {
        content: '\\f2e7';
      }
      :host([icon='dash-square-fill'])::before {
        content: '\\f2e8';
      }
      :host([icon='dash-square'])::before {
        content: '\\f2e9';
      }
      :host([icon='dash'])::before {
        content: '\\f2ea';
      }
      :host([icon='diagram-2-fill'])::before {
        content: '\\f2eb';
      }
      :host([icon='diagram-2'])::before {
        content: '\\f2ec';
      }
      :host([icon='diagram-3-fill'])::before {
        content: '\\f2ed';
      }
      :host([icon='diagram-3'])::before {
        content: '\\f2ee';
      }
      :host([icon='diamond-fill'])::before {
        content: '\\f2ef';
      }
      :host([icon='diamond-half'])::before {
        content: '\\f2f0';
      }
      :host([icon='diamond'])::before {
        content: '\\f2f1';
      }
      :host([icon='dice-1-fill'])::before {
        content: '\\f2f2';
      }
      :host([icon='dice-1'])::before {
        content: '\\f2f3';
      }
      :host([icon='dice-2-fill'])::before {
        content: '\\f2f4';
      }
      :host([icon='dice-2'])::before {
        content: '\\f2f5';
      }
      :host([icon='dice-3-fill'])::before {
        content: '\\f2f6';
      }
      :host([icon='dice-3'])::before {
        content: '\\f2f7';
      }
      :host([icon='dice-4-fill'])::before {
        content: '\\f2f8';
      }
      :host([icon='dice-4'])::before {
        content: '\\f2f9';
      }
      :host([icon='dice-5-fill'])::before {
        content: '\\f2fa';
      }
      :host([icon='dice-5'])::before {
        content: '\\f2fb';
      }
      :host([icon='dice-6-fill'])::before {
        content: '\\f2fc';
      }
      :host([icon='dice-6'])::before {
        content: '\\f2fd';
      }
      :host([icon='disc-fill'])::before {
        content: '\\f2fe';
      }
      :host([icon='disc'])::before {
        content: '\\f2ff';
      }
      :host([icon='discord'])::before {
        content: '\\f300';
      }
      :host([icon='display-fill'])::before {
        content: '\\f301';
      }
      :host([icon='display'])::before {
        content: '\\f302';
      }
      :host([icon='distribute-horizontal'])::before {
        content: '\\f303';
      }
      :host([icon='distribute-vertical'])::before {
        content: '\\f304';
      }
      :host([icon='door-closed-fill'])::before {
        content: '\\f305';
      }
      :host([icon='door-closed'])::before {
        content: '\\f306';
      }
      :host([icon='door-open-fill'])::before {
        content: '\\f307';
      }
      :host([icon='door-open'])::before {
        content: '\\f308';
      }
      :host([icon='dot'])::before {
        content: '\\f309';
      }
      :host([icon='download'])::before {
        content: '\\f30a';
      }
      :host([icon='droplet-fill'])::before {
        content: '\\f30b';
      }
      :host([icon='droplet-half'])::before {
        content: '\\f30c';
      }
      :host([icon='droplet'])::before {
        content: '\\f30d';
      }
      :host([icon='earbuds'])::before {
        content: '\\f30e';
      }
      :host([icon='easel-fill'])::before {
        content: '\\f30f';
      }
      :host([icon='easel'])::before {
        content: '\\f310';
      }
      :host([icon='egg-fill'])::before {
        content: '\\f311';
      }
      :host([icon='egg-fried'])::before {
        content: '\\f312';
      }
      :host([icon='egg'])::before {
        content: '\\f313';
      }
      :host([icon='eject-fill'])::before {
        content: '\\f314';
      }
      :host([icon='eject'])::before {
        content: '\\f315';
      }
      :host([icon='emoji-angry-fill'])::before {
        content: '\\f316';
      }
      :host([icon='emoji-angry'])::before {
        content: '\\f317';
      }
      :host([icon='emoji-dizzy-fill'])::before {
        content: '\\f318';
      }
      :host([icon='emoji-dizzy'])::before {
        content: '\\f319';
      }
      :host([icon='emoji-expressionless-fill'])::before {
        content: '\\f31a';
      }
      :host([icon='emoji-expressionless'])::before {
        content: '\\f31b';
      }
      :host([icon='emoji-frown-fill'])::before {
        content: '\\f31c';
      }
      :host([icon='emoji-frown'])::before {
        content: '\\f31d';
      }
      :host([icon='emoji-heart-eyes-fill'])::before {
        content: '\\f31e';
      }
      :host([icon='emoji-heart-eyes'])::before {
        content: '\\f31f';
      }
      :host([icon='emoji-laughing-fill'])::before {
        content: '\\f320';
      }
      :host([icon='emoji-laughing'])::before {
        content: '\\f321';
      }
      :host([icon='emoji-neutral-fill'])::before {
        content: '\\f322';
      }
      :host([icon='emoji-neutral'])::before {
        content: '\\f323';
      }
      :host([icon='emoji-smile-fill'])::before {
        content: '\\f324';
      }
      :host([icon='emoji-smile-upside-down-fill'])::before {
        content: '\\f325';
      }
      :host([icon='emoji-smile-upside-down'])::before {
        content: '\\f326';
      }
      :host([icon='emoji-smile'])::before {
        content: '\\f327';
      }
      :host([icon='emoji-sunglasses-fill'])::before {
        content: '\\f328';
      }
      :host([icon='emoji-sunglasses'])::before {
        content: '\\f329';
      }
      :host([icon='emoji-wink-fill'])::before {
        content: '\\f32a';
      }
      :host([icon='emoji-wink'])::before {
        content: '\\f32b';
      }
      :host([icon='envelope-fill'])::before {
        content: '\\f32c';
      }
      :host([icon='envelope-open-fill'])::before {
        content: '\\f32d';
      }
      :host([icon='envelope-open'])::before {
        content: '\\f32e';
      }
      :host([icon='envelope'])::before {
        content: '\\f32f';
      }
      :host([icon='eraser-fill'])::before {
        content: '\\f330';
      }
      :host([icon='eraser'])::before {
        content: '\\f331';
      }
      :host([icon='exclamation-circle-fill'])::before {
        content: '\\f332';
      }
      :host([icon='exclamation-circle'])::before {
        content: '\\f333';
      }
      :host([icon='exclamation-diamond-fill'])::before {
        content: '\\f334';
      }
      :host([icon='exclamation-diamond'])::before {
        content: '\\f335';
      }
      :host([icon='exclamation-octagon-fill'])::before {
        content: '\\f336';
      }
      :host([icon='exclamation-octagon'])::before {
        content: '\\f337';
      }
      :host([icon='exclamation-square-fill'])::before {
        content: '\\f338';
      }
      :host([icon='exclamation-square'])::before {
        content: '\\f339';
      }
      :host([icon='exclamation-triangle-fill'])::before {
        content: '\\f33a';
      }
      :host([icon='exclamation-triangle'])::before {
        content: '\\f33b';
      }
      :host([icon='exclamation'])::before {
        content: '\\f33c';
      }
      :host([icon='exclude'])::before {
        content: '\\f33d';
      }
      :host([icon='eye-fill'])::before {
        content: '\\f33e';
      }
      :host([icon='eye-slash-fill'])::before {
        content: '\\f33f';
      }
      :host([icon='eye-slash'])::before {
        content: '\\f340';
      }
      :host([icon='eye'])::before {
        content: '\\f341';
      }
      :host([icon='eyedropper'])::before {
        content: '\\f342';
      }
      :host([icon='eyeglasses'])::before {
        content: '\\f343';
      }
      :host([icon='facebook'])::before {
        content: '\\f344';
      }
      :host([icon='file-arrow-down-fill'])::before {
        content: '\\f345';
      }
      :host([icon='file-arrow-down'])::before {
        content: '\\f346';
      }
      :host([icon='file-arrow-up-fill'])::before {
        content: '\\f347';
      }
      :host([icon='file-arrow-up'])::before {
        content: '\\f348';
      }
      :host([icon='file-bar-graph-fill'])::before {
        content: '\\f349';
      }
      :host([icon='file-bar-graph'])::before {
        content: '\\f34a';
      }
      :host([icon='file-binary-fill'])::before {
        content: '\\f34b';
      }
      :host([icon='file-binary'])::before {
        content: '\\f34c';
      }
      :host([icon='file-break-fill'])::before {
        content: '\\f34d';
      }
      :host([icon='file-break'])::before {
        content: '\\f34e';
      }
      :host([icon='file-check-fill'])::before {
        content: '\\f34f';
      }
      :host([icon='file-check'])::before {
        content: '\\f350';
      }
      :host([icon='file-code-fill'])::before {
        content: '\\f351';
      }
      :host([icon='file-code'])::before {
        content: '\\f352';
      }
      :host([icon='file-diff-fill'])::before {
        content: '\\f353';
      }
      :host([icon='file-diff'])::before {
        content: '\\f354';
      }
      :host([icon='file-earmark-arrow-down-fill'])::before {
        content: '\\f355';
      }
      :host([icon='file-earmark-arrow-down'])::before {
        content: '\\f356';
      }
      :host([icon='file-earmark-arrow-up-fill'])::before {
        content: '\\f357';
      }
      :host([icon='file-earmark-arrow-up'])::before {
        content: '\\f358';
      }
      :host([icon='file-earmark-bar-graph-fill'])::before {
        content: '\\f359';
      }
      :host([icon='file-earmark-bar-graph'])::before {
        content: '\\f35a';
      }
      :host([icon='file-earmark-binary-fill'])::before {
        content: '\\f35b';
      }
      :host([icon='file-earmark-binary'])::before {
        content: '\\f35c';
      }
      :host([icon='file-earmark-break-fill'])::before {
        content: '\\f35d';
      }
      :host([icon='file-earmark-break'])::before {
        content: '\\f35e';
      }
      :host([icon='file-earmark-check-fill'])::before {
        content: '\\f35f';
      }
      :host([icon='file-earmark-check'])::before {
        content: '\\f360';
      }
      :host([icon='file-earmark-code-fill'])::before {
        content: '\\f361';
      }
      :host([icon='file-earmark-code'])::before {
        content: '\\f362';
      }
      :host([icon='file-earmark-diff-fill'])::before {
        content: '\\f363';
      }
      :host([icon='file-earmark-diff'])::before {
        content: '\\f364';
      }
      :host([icon='file-earmark-easel-fill'])::before {
        content: '\\f365';
      }
      :host([icon='file-earmark-easel'])::before {
        content: '\\f366';
      }
      :host([icon='file-earmark-excel-fill'])::before {
        content: '\\f367';
      }
      :host([icon='file-earmark-excel'])::before {
        content: '\\f368';
      }
      :host([icon='file-earmark-fill'])::before {
        content: '\\f369';
      }
      :host([icon='file-earmark-font-fill'])::before {
        content: '\\f36a';
      }
      :host([icon='file-earmark-font'])::before {
        content: '\\f36b';
      }
      :host([icon='file-earmark-image-fill'])::before {
        content: '\\f36c';
      }
      :host([icon='file-earmark-image'])::before {
        content: '\\f36d';
      }
      :host([icon='file-earmark-lock-fill'])::before {
        content: '\\f36e';
      }
      :host([icon='file-earmark-lock'])::before {
        content: '\\f36f';
      }
      :host([icon='file-earmark-lock2-fill'])::before {
        content: '\\f370';
      }
      :host([icon='file-earmark-lock2'])::before {
        content: '\\f371';
      }
      :host([icon='file-earmark-medical-fill'])::before {
        content: '\\f372';
      }
      :host([icon='file-earmark-medical'])::before {
        content: '\\f373';
      }
      :host([icon='file-earmark-minus-fill'])::before {
        content: '\\f374';
      }
      :host([icon='file-earmark-minus'])::before {
        content: '\\f375';
      }
      :host([icon='file-earmark-music-fill'])::before {
        content: '\\f376';
      }
      :host([icon='file-earmark-music'])::before {
        content: '\\f377';
      }
      :host([icon='file-earmark-person-fill'])::before {
        content: '\\f378';
      }
      :host([icon='file-earmark-person'])::before {
        content: '\\f379';
      }
      :host([icon='file-earmark-play-fill'])::before {
        content: '\\f37a';
      }
      :host([icon='file-earmark-play'])::before {
        content: '\\f37b';
      }
      :host([icon='file-earmark-plus-fill'])::before {
        content: '\\f37c';
      }
      :host([icon='file-earmark-plus'])::before {
        content: '\\f37d';
      }
      :host([icon='file-earmark-post-fill'])::before {
        content: '\\f37e';
      }
      :host([icon='file-earmark-post'])::before {
        content: '\\f37f';
      }
      :host([icon='file-earmark-ppt-fill'])::before {
        content: '\\f380';
      }
      :host([icon='file-earmark-ppt'])::before {
        content: '\\f381';
      }
      :host([icon='file-earmark-richtext-fill'])::before {
        content: '\\f382';
      }
      :host([icon='file-earmark-richtext'])::before {
        content: '\\f383';
      }
      :host([icon='file-earmark-ruled-fill'])::before {
        content: '\\f384';
      }
      :host([icon='file-earmark-ruled'])::before {
        content: '\\f385';
      }
      :host([icon='file-earmark-slides-fill'])::before {
        content: '\\f386';
      }
      :host([icon='file-earmark-slides'])::before {
        content: '\\f387';
      }
      :host([icon='file-earmark-spreadsheet-fill'])::before {
        content: '\\f388';
      }
      :host([icon='file-earmark-spreadsheet'])::before {
        content: '\\f389';
      }
      :host([icon='file-earmark-text-fill'])::before {
        content: '\\f38a';
      }
      :host([icon='file-earmark-text'])::before {
        content: '\\f38b';
      }
      :host([icon='file-earmark-word-fill'])::before {
        content: '\\f38c';
      }
      :host([icon='file-earmark-word'])::before {
        content: '\\f38d';
      }
      :host([icon='file-earmark-x-fill'])::before {
        content: '\\f38e';
      }
      :host([icon='file-earmark-x'])::before {
        content: '\\f38f';
      }
      :host([icon='file-earmark-zip-fill'])::before {
        content: '\\f390';
      }
      :host([icon='file-earmark-zip'])::before {
        content: '\\f391';
      }
      :host([icon='file-earmark'])::before {
        content: '\\f392';
      }
      :host([icon='file-easel-fill'])::before {
        content: '\\f393';
      }
      :host([icon='file-easel'])::before {
        content: '\\f394';
      }
      :host([icon='file-excel-fill'])::before {
        content: '\\f395';
      }
      :host([icon='file-excel'])::before {
        content: '\\f396';
      }
      :host([icon='file-fill'])::before {
        content: '\\f397';
      }
      :host([icon='file-font-fill'])::before {
        content: '\\f398';
      }
      :host([icon='file-font'])::before {
        content: '\\f399';
      }
      :host([icon='file-image-fill'])::before {
        content: '\\f39a';
      }
      :host([icon='file-image'])::before {
        content: '\\f39b';
      }
      :host([icon='file-lock-fill'])::before {
        content: '\\f39c';
      }
      :host([icon='file-lock'])::before {
        content: '\\f39d';
      }
      :host([icon='file-lock2-fill'])::before {
        content: '\\f39e';
      }
      :host([icon='file-lock2'])::before {
        content: '\\f39f';
      }
      :host([icon='file-medical-fill'])::before {
        content: '\\f3a0';
      }
      :host([icon='file-medical'])::before {
        content: '\\f3a1';
      }
      :host([icon='file-minus-fill'])::before {
        content: '\\f3a2';
      }
      :host([icon='file-minus'])::before {
        content: '\\f3a3';
      }
      :host([icon='file-music-fill'])::before {
        content: '\\f3a4';
      }
      :host([icon='file-music'])::before {
        content: '\\f3a5';
      }
      :host([icon='file-person-fill'])::before {
        content: '\\f3a6';
      }
      :host([icon='file-person'])::before {
        content: '\\f3a7';
      }
      :host([icon='file-play-fill'])::before {
        content: '\\f3a8';
      }
      :host([icon='file-play'])::before {
        content: '\\f3a9';
      }
      :host([icon='file-plus-fill'])::before {
        content: '\\f3aa';
      }
      :host([icon='file-plus'])::before {
        content: '\\f3ab';
      }
      :host([icon='file-post-fill'])::before {
        content: '\\f3ac';
      }
      :host([icon='file-post'])::before {
        content: '\\f3ad';
      }
      :host([icon='file-ppt-fill'])::before {
        content: '\\f3ae';
      }
      :host([icon='file-ppt'])::before {
        content: '\\f3af';
      }
      :host([icon='file-richtext-fill'])::before {
        content: '\\f3b0';
      }
      :host([icon='file-richtext'])::before {
        content: '\\f3b1';
      }
      :host([icon='file-ruled-fill'])::before {
        content: '\\f3b2';
      }
      :host([icon='file-ruled'])::before {
        content: '\\f3b3';
      }
      :host([icon='file-slides-fill'])::before {
        content: '\\f3b4';
      }
      :host([icon='file-slides'])::before {
        content: '\\f3b5';
      }
      :host([icon='file-spreadsheet-fill'])::before {
        content: '\\f3b6';
      }
      :host([icon='file-spreadsheet'])::before {
        content: '\\f3b7';
      }
      :host([icon='file-text-fill'])::before {
        content: '\\f3b8';
      }
      :host([icon='file-text'])::before {
        content: '\\f3b9';
      }
      :host([icon='file-word-fill'])::before {
        content: '\\f3ba';
      }
      :host([icon='file-word'])::before {
        content: '\\f3bb';
      }
      :host([icon='file-x-fill'])::before {
        content: '\\f3bc';
      }
      :host([icon='file-x'])::before {
        content: '\\f3bd';
      }
      :host([icon='file-zip-fill'])::before {
        content: '\\f3be';
      }
      :host([icon='file-zip'])::before {
        content: '\\f3bf';
      }
      :host([icon='file'])::before {
        content: '\\f3c0';
      }
      :host([icon='files-alt'])::before {
        content: '\\f3c1';
      }
      :host([icon='files'])::before {
        content: '\\f3c2';
      }
      :host([icon='film'])::before {
        content: '\\f3c3';
      }
      :host([icon='filter-circle-fill'])::before {
        content: '\\f3c4';
      }
      :host([icon='filter-circle'])::before {
        content: '\\f3c5';
      }
      :host([icon='filter-left'])::before {
        content: '\\f3c6';
      }
      :host([icon='filter-right'])::before {
        content: '\\f3c7';
      }
      :host([icon='filter-square-fill'])::before {
        content: '\\f3c8';
      }
      :host([icon='filter-square'])::before {
        content: '\\f3c9';
      }
      :host([icon='filter'])::before {
        content: '\\f3ca';
      }
      :host([icon='flag-fill'])::before {
        content: '\\f3cb';
      }
      :host([icon='flag'])::before {
        content: '\\f3cc';
      }
      :host([icon='flower1'])::before {
        content: '\\f3cd';
      }
      :host([icon='flower2'])::before {
        content: '\\f3ce';
      }
      :host([icon='flower3'])::before {
        content: '\\f3cf';
      }
      :host([icon='folder-check'])::before {
        content: '\\f3d0';
      }
      :host([icon='folder-fill'])::before {
        content: '\\f3d1';
      }
      :host([icon='folder-minus'])::before {
        content: '\\f3d2';
      }
      :host([icon='folder-plus'])::before {
        content: '\\f3d3';
      }
      :host([icon='folder-symlink-fill'])::before {
        content: '\\f3d4';
      }
      :host([icon='folder-symlink'])::before {
        content: '\\f3d5';
      }
      :host([icon='folder-x'])::before {
        content: '\\f3d6';
      }
      :host([icon='folder'])::before {
        content: '\\f3d7';
      }
      :host([icon='folder2-open'])::before {
        content: '\\f3d8';
      }
      :host([icon='folder2'])::before {
        content: '\\f3d9';
      }
      :host([icon='fonts'])::before {
        content: '\\f3da';
      }
      :host([icon='forward-fill'])::before {
        content: '\\f3db';
      }
      :host([icon='forward'])::before {
        content: '\\f3dc';
      }
      :host([icon='front'])::before {
        content: '\\f3dd';
      }
      :host([icon='fullscreen-exit'])::before {
        content: '\\f3de';
      }
      :host([icon='fullscreen'])::before {
        content: '\\f3df';
      }
      :host([icon='funnel-fill'])::before {
        content: '\\f3e0';
      }
      :host([icon='funnel'])::before {
        content: '\\f3e1';
      }
      :host([icon='gear-fill'])::before {
        content: '\\f3e2';
      }
      :host([icon='gear-wide-connected'])::before {
        content: '\\f3e3';
      }
      :host([icon='gear-wide'])::before {
        content: '\\f3e4';
      }
      :host([icon='gear'])::before {
        content: '\\f3e5';
      }
      :host([icon='gem'])::before {
        content: '\\f3e6';
      }
      :host([icon='geo-alt-fill'])::before {
        content: '\\f3e7';
      }
      :host([icon='geo-alt'])::before {
        content: '\\f3e8';
      }
      :host([icon='geo-fill'])::before {
        content: '\\f3e9';
      }
      :host([icon='geo'])::before {
        content: '\\f3ea';
      }
      :host([icon='gift-fill'])::before {
        content: '\\f3eb';
      }
      :host([icon='gift'])::before {
        content: '\\f3ec';
      }
      :host([icon='github'])::before {
        content: '\\f3ed';
      }
      :host([icon='globe'])::before {
        content: '\\f3ee';
      }
      :host([icon='globe2'])::before {
        content: '\\f3ef';
      }
      :host([icon='google'])::before {
        content: '\\f3f0';
      }
      :host([icon='graph-down'])::before {
        content: '\\f3f1';
      }
      :host([icon='graph-up'])::before {
        content: '\\f3f2';
      }
      :host([icon='grid-1x2-fill'])::before {
        content: '\\f3f3';
      }
      :host([icon='grid-1x2'])::before {
        content: '\\f3f4';
      }
      :host([icon='grid-3x2-gap-fill'])::before {
        content: '\\f3f5';
      }
      :host([icon='grid-3x2-gap'])::before {
        content: '\\f3f6';
      }
      :host([icon='grid-3x2'])::before {
        content: '\\f3f7';
      }
      :host([icon='grid-3x3-gap-fill'])::before {
        content: '\\f3f8';
      }
      :host([icon='grid-3x3-gap'])::before {
        content: '\\f3f9';
      }
      :host([icon='grid-3x3'])::before {
        content: '\\f3fa';
      }
      :host([icon='grid-fill'])::before {
        content: '\\f3fb';
      }
      :host([icon='grid'])::before {
        content: '\\f3fc';
      }
      :host([icon='grip-horizontal'])::before {
        content: '\\f3fd';
      }
      :host([icon='grip-vertical'])::before {
        content: '\\f3fe';
      }
      :host([icon='hammer'])::before {
        content: '\\f3ff';
      }
      :host([icon='hand-index-fill'])::before {
        content: '\\f400';
      }
      :host([icon='hand-index-thumb-fill'])::before {
        content: '\\f401';
      }
      :host([icon='hand-index-thumb'])::before {
        content: '\\f402';
      }
      :host([icon='hand-index'])::before {
        content: '\\f403';
      }
      :host([icon='hand-thumbs-down-fill'])::before {
        content: '\\f404';
      }
      :host([icon='hand-thumbs-down'])::before {
        content: '\\f405';
      }
      :host([icon='hand-thumbs-up-fill'])::before {
        content: '\\f406';
      }
      :host([icon='hand-thumbs-up'])::before {
        content: '\\f407';
      }
      :host([icon='handbag-fill'])::before {
        content: '\\f408';
      }
      :host([icon='handbag'])::before {
        content: '\\f409';
      }
      :host([icon='hash'])::before {
        content: '\\f40a';
      }
      :host([icon='hdd-fill'])::before {
        content: '\\f40b';
      }
      :host([icon='hdd-network-fill'])::before {
        content: '\\f40c';
      }
      :host([icon='hdd-network'])::before {
        content: '\\f40d';
      }
      :host([icon='hdd-rack-fill'])::before {
        content: '\\f40e';
      }
      :host([icon='hdd-rack'])::before {
        content: '\\f40f';
      }
      :host([icon='hdd-stack-fill'])::before {
        content: '\\f410';
      }
      :host([icon='hdd-stack'])::before {
        content: '\\f411';
      }
      :host([icon='hdd'])::before {
        content: '\\f412';
      }
      :host([icon='headphones'])::before {
        content: '\\f413';
      }
      :host([icon='headset'])::before {
        content: '\\f414';
      }
      :host([icon='heart-fill'])::before {
        content: '\\f415';
      }
      :host([icon='heart-half'])::before {
        content: '\\f416';
      }
      :host([icon='heart'])::before {
        content: '\\f417';
      }
      :host([icon='heptagon-fill'])::before {
        content: '\\f418';
      }
      :host([icon='heptagon-half'])::before {
        content: '\\f419';
      }
      :host([icon='heptagon'])::before {
        content: '\\f41a';
      }
      :host([icon='hexagon-fill'])::before {
        content: '\\f41b';
      }
      :host([icon='hexagon-half'])::before {
        content: '\\f41c';
      }
      :host([icon='hexagon'])::before {
        content: '\\f41d';
      }
      :host([icon='hourglass-bottom'])::before {
        content: '\\f41e';
      }
      :host([icon='hourglass-split'])::before {
        content: '\\f41f';
      }
      :host([icon='hourglass-top'])::before {
        content: '\\f420';
      }
      :host([icon='hourglass'])::before {
        content: '\\f421';
      }
      :host([icon='house-door-fill'])::before {
        content: '\\f422';
      }
      :host([icon='house-door'])::before {
        content: '\\f423';
      }
      :host([icon='house-fill'])::before {
        content: '\\f424';
      }
      :host([icon='house'])::before {
        content: '\\f425';
      }
      :host([icon='hr'])::before {
        content: '\\f426';
      }
      :host([icon='hurricane'])::before {
        content: '\\f427';
      }
      :host([icon='image-alt'])::before {
        content: '\\f428';
      }
      :host([icon='image-fill'])::before {
        content: '\\f429';
      }
      :host([icon='image'])::before {
        content: '\\f42a';
      }
      :host([icon='images'])::before {
        content: '\\f42b';
      }
      :host([icon='inbox-fill'])::before {
        content: '\\f42c';
      }
      :host([icon='inbox'])::before {
        content: '\\f42d';
      }
      :host([icon='inboxes-fill'])::before {
        content: '\\f42e';
      }
      :host([icon='inboxes'])::before {
        content: '\\f42f';
      }
      :host([icon='info-circle-fill'])::before {
        content: '\\f430';
      }
      :host([icon='info-circle'])::before {
        content: '\\f431';
      }
      :host([icon='info-square-fill'])::before {
        content: '\\f432';
      }
      :host([icon='info-square'])::before {
        content: '\\f433';
      }
      :host([icon='info'])::before {
        content: '\\f434';
      }
      :host([icon='input-cursor-text'])::before {
        content: '\\f435';
      }
      :host([icon='input-cursor'])::before {
        content: '\\f436';
      }
      :host([icon='instagram'])::before {
        content: '\\f437';
      }
      :host([icon='intersect'])::before {
        content: '\\f438';
      }
      :host([icon='journal-album'])::before {
        content: '\\f439';
      }
      :host([icon='journal-arrow-down'])::before {
        content: '\\f43a';
      }
      :host([icon='journal-arrow-up'])::before {
        content: '\\f43b';
      }
      :host([icon='journal-bookmark-fill'])::before {
        content: '\\f43c';
      }
      :host([icon='journal-bookmark'])::before {
        content: '\\f43d';
      }
      :host([icon='journal-check'])::before {
        content: '\\f43e';
      }
      :host([icon='journal-code'])::before {
        content: '\\f43f';
      }
      :host([icon='journal-medical'])::before {
        content: '\\f440';
      }
      :host([icon='journal-minus'])::before {
        content: '\\f441';
      }
      :host([icon='journal-plus'])::before {
        content: '\\f442';
      }
      :host([icon='journal-richtext'])::before {
        content: '\\f443';
      }
      :host([icon='journal-text'])::before {
        content: '\\f444';
      }
      :host([icon='journal-x'])::before {
        content: '\\f445';
      }
      :host([icon='journal'])::before {
        content: '\\f446';
      }
      :host([icon='journals'])::before {
        content: '\\f447';
      }
      :host([icon='joystick'])::before {
        content: '\\f448';
      }
      :host([icon='justify-left'])::before {
        content: '\\f449';
      }
      :host([icon='justify-right'])::before {
        content: '\\f44a';
      }
      :host([icon='justify'])::before {
        content: '\\f44b';
      }
      :host([icon='kanban-fill'])::before {
        content: '\\f44c';
      }
      :host([icon='kanban'])::before {
        content: '\\f44d';
      }
      :host([icon='key-fill'])::before {
        content: '\\f44e';
      }
      :host([icon='key'])::before {
        content: '\\f44f';
      }
      :host([icon='keyboard-fill'])::before {
        content: '\\f450';
      }
      :host([icon='keyboard'])::before {
        content: '\\f451';
      }
      :host([icon='ladder'])::before {
        content: '\\f452';
      }
      :host([icon='lamp-fill'])::before {
        content: '\\f453';
      }
      :host([icon='lamp'])::before {
        content: '\\f454';
      }
      :host([icon='laptop-fill'])::before {
        content: '\\f455';
      }
      :host([icon='laptop'])::before {
        content: '\\f456';
      }
      :host([icon='layer-backward'])::before {
        content: '\\f457';
      }
      :host([icon='layer-forward'])::before {
        content: '\\f458';
      }
      :host([icon='layers-fill'])::before {
        content: '\\f459';
      }
      :host([icon='layers-half'])::before {
        content: '\\f45a';
      }
      :host([icon='layers'])::before {
        content: '\\f45b';
      }
      :host([icon='layout-sidebar-inset-reverse'])::before {
        content: '\\f45c';
      }
      :host([icon='layout-sidebar-inset'])::before {
        content: '\\f45d';
      }
      :host([icon='layout-sidebar-reverse'])::before {
        content: '\\f45e';
      }
      :host([icon='layout-sidebar'])::before {
        content: '\\f45f';
      }
      :host([icon='layout-split'])::before {
        content: '\\f460';
      }
      :host([icon='layout-text-sidebar-reverse'])::before {
        content: '\\f461';
      }
      :host([icon='layout-text-sidebar'])::before {
        content: '\\f462';
      }
      :host([icon='layout-text-window-reverse'])::before {
        content: '\\f463';
      }
      :host([icon='layout-text-window'])::before {
        content: '\\f464';
      }
      :host([icon='layout-three-columns'])::before {
        content: '\\f465';
      }
      :host([icon='layout-wtf'])::before {
        content: '\\f466';
      }
      :host([icon='life-preserver'])::before {
        content: '\\f467';
      }
      :host([icon='lightbulb-fill'])::before {
        content: '\\f468';
      }
      :host([icon='lightbulb-off-fill'])::before {
        content: '\\f469';
      }
      :host([icon='lightbulb-off'])::before {
        content: '\\f46a';
      }
      :host([icon='lightbulb'])::before {
        content: '\\f46b';
      }
      :host([icon='lightning-charge-fill'])::before {
        content: '\\f46c';
      }
      :host([icon='lightning-charge'])::before {
        content: '\\f46d';
      }
      :host([icon='lightning-fill'])::before {
        content: '\\f46e';
      }
      :host([icon='lightning'])::before {
        content: '\\f46f';
      }
      :host([icon='link-45deg'])::before {
        content: '\\f470';
      }
      :host([icon='link'])::before {
        content: '\\f471';
      }
      :host([icon='linkedin'])::before {
        content: '\\f472';
      }
      :host([icon='list-check'])::before {
        content: '\\f473';
      }
      :host([icon='list-nested'])::before {
        content: '\\f474';
      }
      :host([icon='list-ol'])::before {
        content: '\\f475';
      }
      :host([icon='list-stars'])::before {
        content: '\\f476';
      }
      :host([icon='list-task'])::before {
        content: '\\f477';
      }
      :host([icon='list-ul'])::before {
        content: '\\f478';
      }
      :host([icon='list'])::before {
        content: '\\f479';
      }
      :host([icon='lock-fill'])::before {
        content: '\\f47a';
      }
      :host([icon='lock'])::before {
        content: '\\f47b';
      }
      :host([icon='mailbox'])::before {
        content: '\\f47c';
      }
      :host([icon='mailbox2'])::before {
        content: '\\f47d';
      }
      :host([icon='map-fill'])::before {
        content: '\\f47e';
      }
      :host([icon='map'])::before {
        content: '\\f47f';
      }
      :host([icon='markdown-fill'])::before {
        content: '\\f480';
      }
      :host([icon='markdown'])::before {
        content: '\\f481';
      }
      :host([icon='mask'])::before {
        content: '\\f482';
      }
      :host([icon='megaphone-fill'])::before {
        content: '\\f483';
      }
      :host([icon='megaphone'])::before {
        content: '\\f484';
      }
      :host([icon='menu-app-fill'])::before {
        content: '\\f485';
      }
      :host([icon='menu-app'])::before {
        content: '\\f486';
      }
      :host([icon='menu-button-fill'])::before {
        content: '\\f487';
      }
      :host([icon='menu-button-wide-fill'])::before {
        content: '\\f488';
      }
      :host([icon='menu-button-wide'])::before {
        content: '\\f489';
      }
      :host([icon='menu-button'])::before {
        content: '\\f48a';
      }
      :host([icon='menu-down'])::before {
        content: '\\f48b';
      }
      :host([icon='menu-up'])::before {
        content: '\\f48c';
      }
      :host([icon='mic-fill'])::before {
        content: '\\f48d';
      }
      :host([icon='mic-mute-fill'])::before {
        content: '\\f48e';
      }
      :host([icon='mic-mute'])::before {
        content: '\\f48f';
      }
      :host([icon='mic'])::before {
        content: '\\f490';
      }
      :host([icon='minecart-loaded'])::before {
        content: '\\f491';
      }
      :host([icon='minecart'])::before {
        content: '\\f492';
      }
      :host([icon='moisture'])::before {
        content: '\\f493';
      }
      :host([icon='moon-fill'])::before {
        content: '\\f494';
      }
      :host([icon='moon-stars-fill'])::before {
        content: '\\f495';
      }
      :host([icon='moon-stars'])::before {
        content: '\\f496';
      }
      :host([icon='moon'])::before {
        content: '\\f497';
      }
      :host([icon='mouse-fill'])::before {
        content: '\\f498';
      }
      :host([icon='mouse'])::before {
        content: '\\f499';
      }
      :host([icon='mouse2-fill'])::before {
        content: '\\f49a';
      }
      :host([icon='mouse2'])::before {
        content: '\\f49b';
      }
      :host([icon='mouse3-fill'])::before {
        content: '\\f49c';
      }
      :host([icon='mouse3'])::before {
        content: '\\f49d';
      }
      :host([icon='music-note-beamed'])::before {
        content: '\\f49e';
      }
      :host([icon='music-note-list'])::before {
        content: '\\f49f';
      }
      :host([icon='music-note'])::before {
        content: '\\f4a0';
      }
      :host([icon='music-player-fill'])::before {
        content: '\\f4a1';
      }
      :host([icon='music-player'])::before {
        content: '\\f4a2';
      }
      :host([icon='newspaper'])::before {
        content: '\\f4a3';
      }
      :host([icon='node-minus-fill'])::before {
        content: '\\f4a4';
      }
      :host([icon='node-minus'])::before {
        content: '\\f4a5';
      }
      :host([icon='node-plus-fill'])::before {
        content: '\\f4a6';
      }
      :host([icon='node-plus'])::before {
        content: '\\f4a7';
      }
      :host([icon='nut-fill'])::before {
        content: '\\f4a8';
      }
      :host([icon='nut'])::before {
        content: '\\f4a9';
      }
      :host([icon='octagon-fill'])::before {
        content: '\\f4aa';
      }
      :host([icon='octagon-half'])::before {
        content: '\\f4ab';
      }
      :host([icon='octagon'])::before {
        content: '\\f4ac';
      }
      :host([icon='option'])::before {
        content: '\\f4ad';
      }
      :host([icon='outlet'])::before {
        content: '\\f4ae';
      }
      :host([icon='paint-bucket'])::before {
        content: '\\f4af';
      }
      :host([icon='palette-fill'])::before {
        content: '\\f4b0';
      }
      :host([icon='palette'])::before {
        content: '\\f4b1';
      }
      :host([icon='palette2'])::before {
        content: '\\f4b2';
      }
      :host([icon='paperclip'])::before {
        content: '\\f4b3';
      }
      :host([icon='paragraph'])::before {
        content: '\\f4b4';
      }
      :host([icon='patch-check-fill'])::before {
        content: '\\f4b5';
      }
      :host([icon='patch-check'])::before {
        content: '\\f4b6';
      }
      :host([icon='patch-exclamation-fill'])::before {
        content: '\\f4b7';
      }
      :host([icon='patch-exclamation'])::before {
        content: '\\f4b8';
      }
      :host([icon='patch-minus-fill'])::before {
        content: '\\f4b9';
      }
      :host([icon='patch-minus'])::before {
        content: '\\f4ba';
      }
      :host([icon='patch-plus-fill'])::before {
        content: '\\f4bb';
      }
      :host([icon='patch-plus'])::before {
        content: '\\f4bc';
      }
      :host([icon='patch-question-fill'])::before {
        content: '\\f4bd';
      }
      :host([icon='patch-question'])::before {
        content: '\\f4be';
      }
      :host([icon='pause-btn-fill'])::before {
        content: '\\f4bf';
      }
      :host([icon='pause-btn'])::before {
        content: '\\f4c0';
      }
      :host([icon='pause-circle-fill'])::before {
        content: '\\f4c1';
      }
      :host([icon='pause-circle'])::before {
        content: '\\f4c2';
      }
      :host([icon='pause-fill'])::before {
        content: '\\f4c3';
      }
      :host([icon='pause'])::before {
        content: '\\f4c4';
      }
      :host([icon='peace-fill'])::before {
        content: '\\f4c5';
      }
      :host([icon='peace'])::before {
        content: '\\f4c6';
      }
      :host([icon='pen-fill'])::before {
        content: '\\f4c7';
      }
      :host([icon='pen'])::before {
        content: '\\f4c8';
      }
      :host([icon='pencil-fill'])::before {
        content: '\\f4c9';
      }
      :host([icon='pencil-square'])::before {
        content: '\\f4ca';
      }
      :host([icon='pencil'])::before {
        content: '\\f4cb';
      }
      :host([icon='pentagon-fill'])::before {
        content: '\\f4cc';
      }
      :host([icon='pentagon-half'])::before {
        content: '\\f4cd';
      }
      :host([icon='pentagon'])::before {
        content: '\\f4ce';
      }
      :host([icon='people-fill'])::before {
        content: '\\f4cf';
      }
      :host([icon='people'])::before {
        content: '\\f4d0';
      }
      :host([icon='percent'])::before {
        content: '\\f4d1';
      }
      :host([icon='person-badge-fill'])::before {
        content: '\\f4d2';
      }
      :host([icon='person-badge'])::before {
        content: '\\f4d3';
      }
      :host([icon='person-bounding-box'])::before {
        content: '\\f4d4';
      }
      :host([icon='person-check-fill'])::before {
        content: '\\f4d5';
      }
      :host([icon='person-check'])::before {
        content: '\\f4d6';
      }
      :host([icon='person-circle'])::before {
        content: '\\f4d7';
      }
      :host([icon='person-dash-fill'])::before {
        content: '\\f4d8';
      }
      :host([icon='person-dash'])::before {
        content: '\\f4d9';
      }
      :host([icon='person-fill'])::before {
        content: '\\f4da';
      }
      :host([icon='person-lines-fill'])::before {
        content: '\\f4db';
      }
      :host([icon='person-plus-fill'])::before {
        content: '\\f4dc';
      }
      :host([icon='person-plus'])::before {
        content: '\\f4dd';
      }
      :host([icon='person-square'])::before {
        content: '\\f4de';
      }
      :host([icon='person-x-fill'])::before {
        content: '\\f4df';
      }
      :host([icon='person-x'])::before {
        content: '\\f4e0';
      }
      :host([icon='person'])::before {
        content: '\\f4e1';
      }
      :host([icon='phone-fill'])::before {
        content: '\\f4e2';
      }
      :host([icon='phone-landscape-fill'])::before {
        content: '\\f4e3';
      }
      :host([icon='phone-landscape'])::before {
        content: '\\f4e4';
      }
      :host([icon='phone-vibrate-fill'])::before {
        content: '\\f4e5';
      }
      :host([icon='phone-vibrate'])::before {
        content: '\\f4e6';
      }
      :host([icon='phone'])::before {
        content: '\\f4e7';
      }
      :host([icon='pie-chart-fill'])::before {
        content: '\\f4e8';
      }
      :host([icon='pie-chart'])::before {
        content: '\\f4e9';
      }
      :host([icon='pin-angle-fill'])::before {
        content: '\\f4ea';
      }
      :host([icon='pin-angle'])::before {
        content: '\\f4eb';
      }
      :host([icon='pin-fill'])::before {
        content: '\\f4ec';
      }
      :host([icon='pin'])::before {
        content: '\\f4ed';
      }
      :host([icon='pip-fill'])::before {
        content: '\\f4ee';
      }
      :host([icon='pip'])::before {
        content: '\\f4ef';
      }
      :host([icon='play-btn-fill'])::before {
        content: '\\f4f0';
      }
      :host([icon='play-btn'])::before {
        content: '\\f4f1';
      }
      :host([icon='play-circle-fill'])::before {
        content: '\\f4f2';
      }
      :host([icon='play-circle'])::before {
        content: '\\f4f3';
      }
      :host([icon='play-fill'])::before {
        content: '\\f4f4';
      }
      :host([icon='play'])::before {
        content: '\\f4f5';
      }
      :host([icon='plug-fill'])::before {
        content: '\\f4f6';
      }
      :host([icon='plug'])::before {
        content: '\\f4f7';
      }
      :host([icon='plus-circle-dotted'])::before {
        content: '\\f4f8';
      }
      :host([icon='plus-circle-fill'])::before {
        content: '\\f4f9';
      }
      :host([icon='plus-circle'])::before {
        content: '\\f4fa';
      }
      :host([icon='plus-square-dotted'])::before {
        content: '\\f4fb';
      }
      :host([icon='plus-square-fill'])::before {
        content: '\\f4fc';
      }
      :host([icon='plus-square'])::before {
        content: '\\f4fd';
      }
      :host([icon='plus'])::before {
        content: '\\f4fe';
      }
      :host([icon='power'])::before {
        content: '\\f4ff';
      }
      :host([icon='printer-fill'])::before {
        content: '\\f500';
      }
      :host([icon='printer'])::before {
        content: '\\f501';
      }
      :host([icon='puzzle-fill'])::before {
        content: '\\f502';
      }
      :host([icon='puzzle'])::before {
        content: '\\f503';
      }
      :host([icon='question-circle-fill'])::before {
        content: '\\f504';
      }
      :host([icon='question-circle'])::before {
        content: '\\f505';
      }
      :host([icon='question-diamond-fill'])::before {
        content: '\\f506';
      }
      :host([icon='question-diamond'])::before {
        content: '\\f507';
      }
      :host([icon='question-octagon-fill'])::before {
        content: '\\f508';
      }
      :host([icon='question-octagon'])::before {
        content: '\\f509';
      }
      :host([icon='question-square-fill'])::before {
        content: '\\f50a';
      }
      :host([icon='question-square'])::before {
        content: '\\f50b';
      }
      :host([icon='question'])::before {
        content: '\\f50c';
      }
      :host([icon='rainbow'])::before {
        content: '\\f50d';
      }
      :host([icon='receipt-cutoff'])::before {
        content: '\\f50e';
      }
      :host([icon='receipt'])::before {
        content: '\\f50f';
      }
      :host([icon='reception-0'])::before {
        content: '\\f510';
      }
      :host([icon='reception-1'])::before {
        content: '\\f511';
      }
      :host([icon='reception-2'])::before {
        content: '\\f512';
      }
      :host([icon='reception-3'])::before {
        content: '\\f513';
      }
      :host([icon='reception-4'])::before {
        content: '\\f514';
      }
      :host([icon='record-btn-fill'])::before {
        content: '\\f515';
      }
      :host([icon='record-btn'])::before {
        content: '\\f516';
      }
      :host([icon='record-circle-fill'])::before {
        content: '\\f517';
      }
      :host([icon='record-circle'])::before {
        content: '\\f518';
      }
      :host([icon='record-fill'])::before {
        content: '\\f519';
      }
      :host([icon='record'])::before {
        content: '\\f51a';
      }
      :host([icon='record2-fill'])::before {
        content: '\\f51b';
      }
      :host([icon='record2'])::before {
        content: '\\f51c';
      }
      :host([icon='reply-all-fill'])::before {
        content: '\\f51d';
      }
      :host([icon='reply-all'])::before {
        content: '\\f51e';
      }
      :host([icon='reply-fill'])::before {
        content: '\\f51f';
      }
      :host([icon='reply'])::before {
        content: '\\f520';
      }
      :host([icon='rss-fill'])::before {
        content: '\\f521';
      }
      :host([icon='rss'])::before {
        content: '\\f522';
      }
      :host([icon='rulers'])::before {
        content: '\\f523';
      }
      :host([icon='save-fill'])::before {
        content: '\\f524';
      }
      :host([icon='save'])::before {
        content: '\\f525';
      }
      :host([icon='save2-fill'])::before {
        content: '\\f526';
      }
      :host([icon='save2'])::before {
        content: '\\f527';
      }
      :host([icon='scissors'])::before {
        content: '\\f528';
      }
      :host([icon='screwdriver'])::before {
        content: '\\f529';
      }
      :host([icon='search'])::before {
        content: '\\f52a';
      }
      :host([icon='segmented-nav'])::before {
        content: '\\f52b';
      }
      :host([icon='server'])::before {
        content: '\\f52c';
      }
      :host([icon='share-fill'])::before {
        content: '\\f52d';
      }
      :host([icon='share'])::before {
        content: '\\f52e';
      }
      :host([icon='shield-check'])::before {
        content: '\\f52f';
      }
      :host([icon='shield-exclamation'])::before {
        content: '\\f530';
      }
      :host([icon='shield-fill-check'])::before {
        content: '\\f531';
      }
      :host([icon='shield-fill-exclamation'])::before {
        content: '\\f532';
      }
      :host([icon='shield-fill-minus'])::before {
        content: '\\f533';
      }
      :host([icon='shield-fill-plus'])::before {
        content: '\\f534';
      }
      :host([icon='shield-fill-x'])::before {
        content: '\\f535';
      }
      :host([icon='shield-fill'])::before {
        content: '\\f536';
      }
      :host([icon='shield-lock-fill'])::before {
        content: '\\f537';
      }
      :host([icon='shield-lock'])::before {
        content: '\\f538';
      }
      :host([icon='shield-minus'])::before {
        content: '\\f539';
      }
      :host([icon='shield-plus'])::before {
        content: '\\f53a';
      }
      :host([icon='shield-shaded'])::before {
        content: '\\f53b';
      }
      :host([icon='shield-slash-fill'])::before {
        content: '\\f53c';
      }
      :host([icon='shield-slash'])::before {
        content: '\\f53d';
      }
      :host([icon='shield-x'])::before {
        content: '\\f53e';
      }
      :host([icon='shield'])::before {
        content: '\\f53f';
      }
      :host([icon='shift-fill'])::before {
        content: '\\f540';
      }
      :host([icon='shift'])::before {
        content: '\\f541';
      }
      :host([icon='shop-window'])::before {
        content: '\\f542';
      }
      :host([icon='shop'])::before {
        content: '\\f543';
      }
      :host([icon='shuffle'])::before {
        content: '\\f544';
      }
      :host([icon='signpost-2-fill'])::before {
        content: '\\f545';
      }
      :host([icon='signpost-2'])::before {
        content: '\\f546';
      }
      :host([icon='signpost-fill'])::before {
        content: '\\f547';
      }
      :host([icon='signpost-split-fill'])::before {
        content: '\\f548';
      }
      :host([icon='signpost-split'])::before {
        content: '\\f549';
      }
      :host([icon='signpost'])::before {
        content: '\\f54a';
      }
      :host([icon='sim-fill'])::before {
        content: '\\f54b';
      }
      :host([icon='sim'])::before {
        content: '\\f54c';
      }
      :host([icon='skip-backward-btn-fill'])::before {
        content: '\\f54d';
      }
      :host([icon='skip-backward-btn'])::before {
        content: '\\f54e';
      }
      :host([icon='skip-backward-circle-fill'])::before {
        content: '\\f54f';
      }
      :host([icon='skip-backward-circle'])::before {
        content: '\\f550';
      }
      :host([icon='skip-backward-fill'])::before {
        content: '\\f551';
      }
      :host([icon='skip-backward'])::before {
        content: '\\f552';
      }
      :host([icon='skip-end-btn-fill'])::before {
        content: '\\f553';
      }
      :host([icon='skip-end-btn'])::before {
        content: '\\f554';
      }
      :host([icon='skip-end-circle-fill'])::before {
        content: '\\f555';
      }
      :host([icon='skip-end-circle'])::before {
        content: '\\f556';
      }
      :host([icon='skip-end-fill'])::before {
        content: '\\f557';
      }
      :host([icon='skip-end'])::before {
        content: '\\f558';
      }
      :host([icon='skip-forward-btn-fill'])::before {
        content: '\\f559';
      }
      :host([icon='skip-forward-btn'])::before {
        content: '\\f55a';
      }
      :host([icon='skip-forward-circle-fill'])::before {
        content: '\\f55b';
      }
      :host([icon='skip-forward-circle'])::before {
        content: '\\f55c';
      }
      :host([icon='skip-forward-fill'])::before {
        content: '\\f55d';
      }
      :host([icon='skip-forward'])::before {
        content: '\\f55e';
      }
      :host([icon='skip-start-btn-fill'])::before {
        content: '\\f55f';
      }
      :host([icon='skip-start-btn'])::before {
        content: '\\f560';
      }
      :host([icon='skip-start-circle-fill'])::before {
        content: '\\f561';
      }
      :host([icon='skip-start-circle'])::before {
        content: '\\f562';
      }
      :host([icon='skip-start-fill'])::before {
        content: '\\f563';
      }
      :host([icon='skip-start'])::before {
        content: '\\f564';
      }
      :host([icon='slack'])::before {
        content: '\\f565';
      }
      :host([icon='slash-circle-fill'])::before {
        content: '\\f566';
      }
      :host([icon='slash-circle'])::before {
        content: '\\f567';
      }
      :host([icon='slash-square-fill'])::before {
        content: '\\f568';
      }
      :host([icon='slash-square'])::before {
        content: '\\f569';
      }
      :host([icon='slash'])::before {
        content: '\\f56a';
      }
      :host([icon='sliders'])::before {
        content: '\\f56b';
      }
      :host([icon='smartwatch'])::before {
        content: '\\f56c';
      }
      :host([icon='snow'])::before {
        content: '\\f56d';
      }
      :host([icon='snow2'])::before {
        content: '\\f56e';
      }
      :host([icon='snow3'])::before {
        content: '\\f56f';
      }
      :host([icon='sort-alpha-down-alt'])::before {
        content: '\\f570';
      }
      :host([icon='sort-alpha-down'])::before {
        content: '\\f571';
      }
      :host([icon='sort-alpha-up-alt'])::before {
        content: '\\f572';
      }
      :host([icon='sort-alpha-up'])::before {
        content: '\\f573';
      }
      :host([icon='sort-down-alt'])::before {
        content: '\\f574';
      }
      :host([icon='sort-down'])::before {
        content: '\\f575';
      }
      :host([icon='sort-numeric-down-alt'])::before {
        content: '\\f576';
      }
      :host([icon='sort-numeric-down'])::before {
        content: '\\f577';
      }
      :host([icon='sort-numeric-up-alt'])::before {
        content: '\\f578';
      }
      :host([icon='sort-numeric-up'])::before {
        content: '\\f579';
      }
      :host([icon='sort-up-alt'])::before {
        content: '\\f57a';
      }
      :host([icon='sort-up'])::before {
        content: '\\f57b';
      }
      :host([icon='soundwave'])::before {
        content: '\\f57c';
      }
      :host([icon='speaker-fill'])::before {
        content: '\\f57d';
      }
      :host([icon='speaker'])::before {
        content: '\\f57e';
      }
      :host([icon='speedometer'])::before {
        content: '\\f57f';
      }
      :host([icon='speedometer2'])::before {
        content: '\\f580';
      }
      :host([icon='spellcheck'])::before {
        content: '\\f581';
      }
      :host([icon='square-fill'])::before {
        content: '\\f582';
      }
      :host([icon='square-half'])::before {
        content: '\\f583';
      }
      :host([icon='square'])::before {
        content: '\\f584';
      }
      :host([icon='stack'])::before {
        content: '\\f585';
      }
      :host([icon='star-fill'])::before {
        content: '\\f586';
      }
      :host([icon='star-half'])::before {
        content: '\\f587';
      }
      :host([icon='star'])::before {
        content: '\\f588';
      }
      :host([icon='stars'])::before {
        content: '\\f589';
      }
      :host([icon='stickies-fill'])::before {
        content: '\\f58a';
      }
      :host([icon='stickies'])::before {
        content: '\\f58b';
      }
      :host([icon='sticky-fill'])::before {
        content: '\\f58c';
      }
      :host([icon='sticky'])::before {
        content: '\\f58d';
      }
      :host([icon='stop-btn-fill'])::before {
        content: '\\f58e';
      }
      :host([icon='stop-btn'])::before {
        content: '\\f58f';
      }
      :host([icon='stop-circle-fill'])::before {
        content: '\\f590';
      }
      :host([icon='stop-circle'])::before {
        content: '\\f591';
      }
      :host([icon='stop-fill'])::before {
        content: '\\f592';
      }
      :host([icon='stop'])::before {
        content: '\\f593';
      }
      :host([icon='stoplights-fill'])::before {
        content: '\\f594';
      }
      :host([icon='stoplights'])::before {
        content: '\\f595';
      }
      :host([icon='stopwatch-fill'])::before {
        content: '\\f596';
      }
      :host([icon='stopwatch'])::before {
        content: '\\f597';
      }
      :host([icon='subtract'])::before {
        content: '\\f598';
      }
      :host([icon='suit-club-fill'])::before {
        content: '\\f599';
      }
      :host([icon='suit-club'])::before {
        content: '\\f59a';
      }
      :host([icon='suit-diamond-fill'])::before {
        content: '\\f59b';
      }
      :host([icon='suit-diamond'])::before {
        content: '\\f59c';
      }
      :host([icon='suit-heart-fill'])::before {
        content: '\\f59d';
      }
      :host([icon='suit-heart'])::before {
        content: '\\f59e';
      }
      :host([icon='suit-spade-fill'])::before {
        content: '\\f59f';
      }
      :host([icon='suit-spade'])::before {
        content: '\\f5a0';
      }
      :host([icon='sun-fill'])::before {
        content: '\\f5a1';
      }
      :host([icon='sun'])::before {
        content: '\\f5a2';
      }
      :host([icon='sunglasses'])::before {
        content: '\\f5a3';
      }
      :host([icon='sunrise-fill'])::before {
        content: '\\f5a4';
      }
      :host([icon='sunrise'])::before {
        content: '\\f5a5';
      }
      :host([icon='sunset-fill'])::before {
        content: '\\f5a6';
      }
      :host([icon='sunset'])::before {
        content: '\\f5a7';
      }
      :host([icon='symmetry-horizontal'])::before {
        content: '\\f5a8';
      }
      :host([icon='symmetry-vertical'])::before {
        content: '\\f5a9';
      }
      :host([icon='table'])::before {
        content: '\\f5aa';
      }
      :host([icon='tablet-fill'])::before {
        content: '\\f5ab';
      }
      :host([icon='tablet-landscape-fill'])::before {
        content: '\\f5ac';
      }
      :host([icon='tablet-landscape'])::before {
        content: '\\f5ad';
      }
      :host([icon='tablet'])::before {
        content: '\\f5ae';
      }
      :host([icon='tag-fill'])::before {
        content: '\\f5af';
      }
      :host([icon='tag'])::before {
        content: '\\f5b0';
      }
      :host([icon='tags-fill'])::before {
        content: '\\f5b1';
      }
      :host([icon='tags'])::before {
        content: '\\f5b2';
      }
      :host([icon='telegram'])::before {
        content: '\\f5b3';
      }
      :host([icon='telephone-fill'])::before {
        content: '\\f5b4';
      }
      :host([icon='telephone-forward-fill'])::before {
        content: '\\f5b5';
      }
      :host([icon='telephone-forward'])::before {
        content: '\\f5b6';
      }
      :host([icon='telephone-inbound-fill'])::before {
        content: '\\f5b7';
      }
      :host([icon='telephone-inbound'])::before {
        content: '\\f5b8';
      }
      :host([icon='telephone-minus-fill'])::before {
        content: '\\f5b9';
      }
      :host([icon='telephone-minus'])::before {
        content: '\\f5ba';
      }
      :host([icon='telephone-outbound-fill'])::before {
        content: '\\f5bb';
      }
      :host([icon='telephone-outbound'])::before {
        content: '\\f5bc';
      }
      :host([icon='telephone-plus-fill'])::before {
        content: '\\f5bd';
      }
      :host([icon='telephone-plus'])::before {
        content: '\\f5be';
      }
      :host([icon='telephone-x-fill'])::before {
        content: '\\f5bf';
      }
      :host([icon='telephone-x'])::before {
        content: '\\f5c0';
      }
      :host([icon='telephone'])::before {
        content: '\\f5c1';
      }
      :host([icon='terminal-fill'])::before {
        content: '\\f5c2';
      }
      :host([icon='terminal'])::before {
        content: '\\f5c3';
      }
      :host([icon='text-center'])::before {
        content: '\\f5c4';
      }
      :host([icon='text-indent-left'])::before {
        content: '\\f5c5';
      }
      :host([icon='text-indent-right'])::before {
        content: '\\f5c6';
      }
      :host([icon='text-left'])::before {
        content: '\\f5c7';
      }
      :host([icon='text-paragraph'])::before {
        content: '\\f5c8';
      }
      :host([icon='text-right'])::before {
        content: '\\f5c9';
      }
      :host([icon='textarea-resize'])::before {
        content: '\\f5ca';
      }
      :host([icon='textarea-t'])::before {
        content: '\\f5cb';
      }
      :host([icon='textarea'])::before {
        content: '\\f5cc';
      }
      :host([icon='thermometer-half'])::before {
        content: '\\f5cd';
      }
      :host([icon='thermometer-high'])::before {
        content: '\\f5ce';
      }
      :host([icon='thermometer-low'])::before {
        content: '\\f5cf';
      }
      :host([icon='thermometer-snow'])::before {
        content: '\\f5d0';
      }
      :host([icon='thermometer-sun'])::before {
        content: '\\f5d1';
      }
      :host([icon='thermometer'])::before {
        content: '\\f5d2';
      }
      :host([icon='three-dots-vertical'])::before {
        content: '\\f5d3';
      }
      :host([icon='three-dots'])::before {
        content: '\\f5d4';
      }
      :host([icon='toggle-off'])::before {
        content: '\\f5d5';
      }
      :host([icon='toggle-on'])::before {
        content: '\\f5d6';
      }
      :host([icon='toggle2-off'])::before {
        content: '\\f5d7';
      }
      :host([icon='toggle2-on'])::before {
        content: '\\f5d8';
      }
      :host([icon='toggles'])::before {
        content: '\\f5d9';
      }
      :host([icon='toggles2'])::before {
        content: '\\f5da';
      }
      :host([icon='tools'])::before {
        content: '\\f5db';
      }
      :host([icon='tornado'])::before {
        content: '\\f5dc';
      }
      :host([icon='trash-fill'])::before {
        content: '\\f5dd';
      }
      :host([icon='trash'])::before {
        content: '\\f5de';
      }
      :host([icon='trash2-fill'])::before {
        content: '\\f5df';
      }
      :host([icon='trash2'])::before {
        content: '\\f5e0';
      }
      :host([icon='tree-fill'])::before {
        content: '\\f5e1';
      }
      :host([icon='tree'])::before {
        content: '\\f5e2';
      }
      :host([icon='triangle-fill'])::before {
        content: '\\f5e3';
      }
      :host([icon='triangle-half'])::before {
        content: '\\f5e4';
      }
      :host([icon='triangle'])::before {
        content: '\\f5e5';
      }
      :host([icon='trophy-fill'])::before {
        content: '\\f5e6';
      }
      :host([icon='trophy'])::before {
        content: '\\f5e7';
      }
      :host([icon='tropical-storm'])::before {
        content: '\\f5e8';
      }
      :host([icon='truck-flatbed'])::before {
        content: '\\f5e9';
      }
      :host([icon='truck'])::before {
        content: '\\f5ea';
      }
      :host([icon='tsunami'])::before {
        content: '\\f5eb';
      }
      :host([icon='tv-fill'])::before {
        content: '\\f5ec';
      }
      :host([icon='tv'])::before {
        content: '\\f5ed';
      }
      :host([icon='twitch'])::before {
        content: '\\f5ee';
      }
      :host([icon='twitter'])::before {
        content: '\\f5ef';
      }
      :host([icon='type-bold'])::before {
        content: '\\f5f0';
      }
      :host([icon='type-h1'])::before {
        content: '\\f5f1';
      }
      :host([icon='type-h2'])::before {
        content: '\\f5f2';
      }
      :host([icon='type-h3'])::before {
        content: '\\f5f3';
      }
      :host([icon='type-italic'])::before {
        content: '\\f5f4';
      }
      :host([icon='type-strikethrough'])::before {
        content: '\\f5f5';
      }
      :host([icon='type-underline'])::before {
        content: '\\f5f6';
      }
      :host([icon='type'])::before {
        content: '\\f5f7';
      }
      :host([icon='ui-checks-grid'])::before {
        content: '\\f5f8';
      }
      :host([icon='ui-checks'])::before {
        content: '\\f5f9';
      }
      :host([icon='ui-radios-grid'])::before {
        content: '\\f5fa';
      }
      :host([icon='ui-radios'])::before {
        content: '\\f5fb';
      }
      :host([icon='umbrella-fill'])::before {
        content: '\\f5fc';
      }
      :host([icon='umbrella'])::before {
        content: '\\f5fd';
      }
      :host([icon='union'])::before {
        content: '\\f5fe';
      }
      :host([icon='unlock-fill'])::before {
        content: '\\f5ff';
      }
      :host([icon='unlock'])::before {
        content: '\\f600';
      }
      :host([icon='upc-scan'])::before {
        content: '\\f601';
      }
      :host([icon='upc'])::before {
        content: '\\f602';
      }
      :host([icon='upload'])::before {
        content: '\\f603';
      }
      :host([icon='vector-pen'])::before {
        content: '\\f604';
      }
      :host([icon='view-list'])::before {
        content: '\\f605';
      }
      :host([icon='view-stacked'])::before {
        content: '\\f606';
      }
      :host([icon='vinyl-fill'])::before {
        content: '\\f607';
      }
      :host([icon='vinyl'])::before {
        content: '\\f608';
      }
      :host([icon='voicemail'])::before {
        content: '\\f609';
      }
      :host([icon='volume-down-fill'])::before {
        content: '\\f60a';
      }
      :host([icon='volume-down'])::before {
        content: '\\f60b';
      }
      :host([icon='volume-mute-fill'])::before {
        content: '\\f60c';
      }
      :host([icon='volume-mute'])::before {
        content: '\\f60d';
      }
      :host([icon='volume-off-fill'])::before {
        content: '\\f60e';
      }
      :host([icon='volume-off'])::before {
        content: '\\f60f';
      }
      :host([icon='volume-up-fill'])::before {
        content: '\\f610';
      }
      :host([icon='volume-up'])::before {
        content: '\\f611';
      }
      :host([icon='vr'])::before {
        content: '\\f612';
      }
      :host([icon='wallet-fill'])::before {
        content: '\\f613';
      }
      :host([icon='wallet'])::before {
        content: '\\f614';
      }
      :host([icon='wallet2'])::before {
        content: '\\f615';
      }
      :host([icon='watch'])::before {
        content: '\\f616';
      }
      :host([icon='water'])::before {
        content: '\\f617';
      }
      :host([icon='whatsapp'])::before {
        content: '\\f618';
      }
      :host([icon='wifi-1'])::before {
        content: '\\f619';
      }
      :host([icon='wifi-2'])::before {
        content: '\\f61a';
      }
      :host([icon='wifi-off'])::before {
        content: '\\f61b';
      }
      :host([icon='wifi'])::before {
        content: '\\f61c';
      }
      :host([icon='wind'])::before {
        content: '\\f61d';
      }
      :host([icon='window-dock'])::before {
        content: '\\f61e';
      }
      :host([icon='window-sidebar'])::before {
        content: '\\f61f';
      }
      :host([icon='window'])::before {
        content: '\\f620';
      }
      :host([icon='wrench'])::before {
        content: '\\f621';
      }
      :host([icon='x-circle-fill'])::before {
        content: '\\f622';
      }
      :host([icon='x-circle'])::before {
        content: '\\f623';
      }
      :host([icon='x-diamond-fill'])::before {
        content: '\\f624';
      }
      :host([icon='x-diamond'])::before {
        content: '\\f625';
      }
      :host([icon='x-octagon-fill'])::before {
        content: '\\f626';
      }
      :host([icon='x-octagon'])::before {
        content: '\\f627';
      }
      :host([icon='x-square-fill'])::before {
        content: '\\f628';
      }
      :host([icon='x-square'])::before {
        content: '\\f629';
      }
      :host([icon='x'])::before {
        content: '\\f62a';
      }
      :host([icon='youtube'])::before {
        content: '\\f62b';
      }
      :host([icon='zoom-in'])::before {
        content: '\\f62c';
      }
      :host([icon='zoom-out'])::before {
        content: '\\f62d';
      }
      :host([icon='bank'])::before {
        content: '\\f62e';
      }
      :host([icon='bank2'])::before {
        content: '\\f62f';
      }
      :host([icon='bell-slash-fill'])::before {
        content: '\\f630';
      }
      :host([icon='bell-slash'])::before {
        content: '\\f631';
      }
      :host([icon='cash-coin'])::before {
        content: '\\f632';
      }
      :host([icon='check-lg'])::before {
        content: '\\f633';
      }
      :host([icon='coin'])::before {
        content: '\\f634';
      }
      :host([icon='currency-bitcoin'])::before {
        content: '\\f635';
      }
      :host([icon='currency-dollar'])::before {
        content: '\\f636';
      }
      :host([icon='currency-euro'])::before {
        content: '\\f637';
      }
      :host([icon='currency-exchange'])::before {
        content: '\\f638';
      }
      :host([icon='currency-pound'])::before {
        content: '\\f639';
      }
      :host([icon='currency-yen'])::before {
        content: '\\f63a';
      }
      :host([icon='dash-lg'])::before {
        content: '\\f63b';
      }
      :host([icon='exclamation-lg'])::before {
        content: '\\f63c';
      }
      :host([icon='file-earmark-pdf-fill'])::before {
        content: '\\f63d';
      }
      :host([icon='file-earmark-pdf'])::before {
        content: '\\f63e';
      }
      :host([icon='file-pdf-fill'])::before {
        content: '\\f63f';
      }
      :host([icon='file-pdf'])::before {
        content: '\\f640';
      }
      :host([icon='gender-ambiguous'])::before {
        content: '\\f641';
      }
      :host([icon='gender-female'])::before {
        content: '\\f642';
      }
      :host([icon='gender-male'])::before {
        content: '\\f643';
      }
      :host([icon='gender-trans'])::before {
        content: '\\f644';
      }
      :host([icon='headset-vr'])::before {
        content: '\\f645';
      }
      :host([icon='info-lg'])::before {
        content: '\\f646';
      }
      :host([icon='mastodon'])::before {
        content: '\\f647';
      }
      :host([icon='messenger'])::before {
        content: '\\f648';
      }
      :host([icon='piggy-bank-fill'])::before {
        content: '\\f649';
      }
      :host([icon='piggy-bank'])::before {
        content: '\\f64a';
      }
      :host([icon='pin-map-fill'])::before {
        content: '\\f64b';
      }
      :host([icon='pin-map'])::before {
        content: '\\f64c';
      }
      :host([icon='plus-lg'])::before {
        content: '\\f64d';
      }
      :host([icon='question-lg'])::before {
        content: '\\f64e';
      }
      :host([icon='recycle'])::before {
        content: '\\f64f';
      }
      :host([icon='reddit'])::before {
        content: '\\f650';
      }
      :host([icon='safe-fill'])::before {
        content: '\\f651';
      }
      :host([icon='safe2-fill'])::before {
        content: '\\f652';
      }
      :host([icon='safe2'])::before {
        content: '\\f653';
      }
      :host([icon='sd-card-fill'])::before {
        content: '\\f654';
      }
      :host([icon='sd-card'])::before {
        content: '\\f655';
      }
      :host([icon='skype'])::before {
        content: '\\f656';
      }
      :host([icon='slash-lg'])::before {
        content: '\\f657';
      }
      :host([icon='translate'])::before {
        content: '\\f658';
      }
      :host([icon='x-lg'])::before {
        content: '\\f659';
      }
      :host([icon='safe'])::before {
        content: '\\f65a';
      }
      :host([icon='apple'])::before {
        content: '\\f65b';
      }
      :host([icon='microsoft'])::before {
        content: '\\f65d';
      }
      :host([icon='windows'])::before {
        content: '\\f65e';
      }
      :host([icon='behance'])::before {
        content: '\\f65c';
      }
      :host([icon='dribbble'])::before {
        content: '\\f65f';
      }
      :host([icon='line'])::before {
        content: '\\f660';
      }
      :host([icon='medium'])::before {
        content: '\\f661';
      }
      :host([icon='paypal'])::before {
        content: '\\f662';
      }
      :host([icon='pinterest'])::before {
        content: '\\f663';
      }
      :host([icon='signal'])::before {
        content: '\\f664';
      }
      :host([icon='snapchat'])::before {
        content: '\\f665';
      }
      :host([icon='spotify'])::before {
        content: '\\f666';
      }
      :host([icon='stack-overflow'])::before {
        content: '\\f667';
      }
      :host([icon='strava'])::before {
        content: '\\f668';
      }
      :host([icon='wordpress'])::before {
        content: '\\f669';
      }
      :host([icon='vimeo'])::before {
        content: '\\f66a';
      }
      :host([icon='activity'])::before {
        content: '\\f66b';
      }
      :host([icon='easel2-fill'])::before {
        content: '\\f66c';
      }
      :host([icon='easel2'])::before {
        content: '\\f66d';
      }
      :host([icon='easel3-fill'])::before {
        content: '\\f66e';
      }
      :host([icon='easel3'])::before {
        content: '\\f66f';
      }
      :host([icon='fan'])::before {
        content: '\\f670';
      }
      :host([icon='fingerprint'])::before {
        content: '\\f671';
      }
      :host([icon='graph-down-arrow'])::before {
        content: '\\f672';
      }
      :host([icon='graph-up-arrow'])::before {
        content: '\\f673';
      }
      :host([icon='hypnotize'])::before {
        content: '\\f674';
      }
      :host([icon='magic'])::before {
        content: '\\f675';
      }
      :host([icon='person-rolodex'])::before {
        content: '\\f676';
      }
      :host([icon='person-video'])::before {
        content: '\\f677';
      }
      :host([icon='person-video2'])::before {
        content: '\\f678';
      }
      :host([icon='person-video3'])::before {
        content: '\\f679';
      }
      :host([icon='person-workspace'])::before {
        content: '\\f67a';
      }
      :host([icon='radioactive'])::before {
        content: '\\f67b';
      }
      :host([icon='webcam-fill'])::before {
        content: '\\f67c';
      }
      :host([icon='webcam'])::before {
        content: '\\f67d';
      }
      :host([icon='yin-yang'])::before {
        content: '\\f67e';
      }
      :host([icon='bandaid-fill'])::before {
        content: '\\f680';
      }
      :host([icon='bandaid'])::before {
        content: '\\f681';
      }
      :host([icon='bluetooth'])::before {
        content: '\\f682';
      }
      :host([icon='body-text'])::before {
        content: '\\f683';
      }
      :host([icon='boombox'])::before {
        content: '\\f684';
      }
      :host([icon='boxes'])::before {
        content: '\\f685';
      }
      :host([icon='dpad-fill'])::before {
        content: '\\f686';
      }
      :host([icon='dpad'])::before {
        content: '\\f687';
      }
      :host([icon='ear-fill'])::before {
        content: '\\f688';
      }
      :host([icon='ear'])::before {
        content: '\\f689';
      }
      :host([icon='envelope-check-fill'])::before {
        content: '\\f68b';
      }
      :host([icon='envelope-check'])::before {
        content: '\\f68c';
      }
      :host([icon='envelope-dash-fill'])::before {
        content: '\\f68e';
      }
      :host([icon='envelope-dash'])::before {
        content: '\\f68f';
      }
      :host([icon='envelope-exclamation-fill'])::before {
        content: '\\f691';
      }
      :host([icon='envelope-exclamation'])::before {
        content: '\\f692';
      }
      :host([icon='envelope-plus-fill'])::before {
        content: '\\f693';
      }
      :host([icon='envelope-plus'])::before {
        content: '\\f694';
      }
      :host([icon='envelope-slash-fill'])::before {
        content: '\\f696';
      }
      :host([icon='envelope-slash'])::before {
        content: '\\f697';
      }
      :host([icon='envelope-x-fill'])::before {
        content: '\\f699';
      }
      :host([icon='envelope-x'])::before {
        content: '\\f69a';
      }
      :host([icon='explicit-fill'])::before {
        content: '\\f69b';
      }
      :host([icon='explicit'])::before {
        content: '\\f69c';
      }
      :host([icon='git'])::before {
        content: '\\f69d';
      }
      :host([icon='infinity'])::before {
        content: '\\f69e';
      }
      :host([icon='list-columns-reverse'])::before {
        content: '\\f69f';
      }
      :host([icon='list-columns'])::before {
        content: '\\f6a0';
      }
      :host([icon='meta'])::before {
        content: '\\f6a1';
      }
      :host([icon='nintendo-switch'])::before {
        content: '\\f6a4';
      }
      :host([icon='pc-display-horizontal'])::before {
        content: '\\f6a5';
      }
      :host([icon='pc-display'])::before {
        content: '\\f6a6';
      }
      :host([icon='pc-horizontal'])::before {
        content: '\\f6a7';
      }
      :host([icon='pc'])::before {
        content: '\\f6a8';
      }
      :host([icon='playstation'])::before {
        content: '\\f6a9';
      }
      :host([icon='plus-slash-minus'])::before {
        content: '\\f6aa';
      }
      :host([icon='projector-fill'])::before {
        content: '\\f6ab';
      }
      :host([icon='projector'])::before {
        content: '\\f6ac';
      }
      :host([icon='qr-code-scan'])::before {
        content: '\\f6ad';
      }
      :host([icon='qr-code'])::before {
        content: '\\f6ae';
      }
      :host([icon='quora'])::before {
        content: '\\f6af';
      }
      :host([icon='quote'])::before {
        content: '\\f6b0';
      }
      :host([icon='robot'])::before {
        content: '\\f6b1';
      }
      :host([icon='send-check-fill'])::before {
        content: '\\f6b2';
      }
      :host([icon='send-check'])::before {
        content: '\\f6b3';
      }
      :host([icon='send-dash-fill'])::before {
        content: '\\f6b4';
      }
      :host([icon='send-dash'])::before {
        content: '\\f6b5';
      }
      :host([icon='send-exclamation-fill'])::before {
        content: '\\f6b7';
      }
      :host([icon='send-exclamation'])::before {
        content: '\\f6b8';
      }
      :host([icon='send-fill'])::before {
        content: '\\f6b9';
      }
      :host([icon='send-plus-fill'])::before {
        content: '\\f6ba';
      }
      :host([icon='send-plus'])::before {
        content: '\\f6bb';
      }
      :host([icon='send-slash-fill'])::before {
        content: '\\f6bc';
      }
      :host([icon='send-slash'])::before {
        content: '\\f6bd';
      }
      :host([icon='send-x-fill'])::before {
        content: '\\f6be';
      }
      :host([icon='send-x'])::before {
        content: '\\f6bf';
      }
      :host([icon='send'])::before {
        content: '\\f6c0';
      }
      :host([icon='steam'])::before {
        content: '\\f6c1';
      }
      :host([icon='terminal-dash'])::before {
        content: '\\f6c3';
      }
      :host([icon='terminal-plus'])::before {
        content: '\\f6c4';
      }
      :host([icon='terminal-split'])::before {
        content: '\\f6c5';
      }
      :host([icon='ticket-detailed-fill'])::before {
        content: '\\f6c6';
      }
      :host([icon='ticket-detailed'])::before {
        content: '\\f6c7';
      }
      :host([icon='ticket-fill'])::before {
        content: '\\f6c8';
      }
      :host([icon='ticket-perforated-fill'])::before {
        content: '\\f6c9';
      }
      :host([icon='ticket-perforated'])::before {
        content: '\\f6ca';
      }
      :host([icon='ticket'])::before {
        content: '\\f6cb';
      }
      :host([icon='tiktok'])::before {
        content: '\\f6cc';
      }
      :host([icon='window-dash'])::before {
        content: '\\f6cd';
      }
      :host([icon='window-desktop'])::before {
        content: '\\f6ce';
      }
      :host([icon='window-fullscreen'])::before {
        content: '\\f6cf';
      }
      :host([icon='window-plus'])::before {
        content: '\\f6d0';
      }
      :host([icon='window-split'])::before {
        content: '\\f6d1';
      }
      :host([icon='window-stack'])::before {
        content: '\\f6d2';
      }
      :host([icon='window-x'])::before {
        content: '\\f6d3';
      }
      :host([icon='xbox'])::before {
        content: '\\f6d4';
      }
      :host([icon='ethernet'])::before {
        content: '\\f6d5';
      }
      :host([icon='hdmi-fill'])::before {
        content: '\\f6d6';
      }
      :host([icon='hdmi'])::before {
        content: '\\f6d7';
      }
      :host([icon='usb-c-fill'])::before {
        content: '\\f6d8';
      }
      :host([icon='usb-c'])::before {
        content: '\\f6d9';
      }
      :host([icon='usb-fill'])::before {
        content: '\\f6da';
      }
      :host([icon='usb-plug-fill'])::before {
        content: '\\f6db';
      }
      :host([icon='usb-plug'])::before {
        content: '\\f6dc';
      }
      :host([icon='usb-symbol'])::before {
        content: '\\f6dd';
      }
      :host([icon='usb'])::before {
        content: '\\f6de';
      }
      :host([icon='boombox-fill'])::before {
        content: '\\f6df';
      }
      :host([icon='displayport'])::before {
        content: '\\f6e1';
      }
      :host([icon='gpu-card'])::before {
        content: '\\f6e2';
      }
      :host([icon='memory'])::before {
        content: '\\f6e3';
      }
      :host([icon='modem-fill'])::before {
        content: '\\f6e4';
      }
      :host([icon='modem'])::before {
        content: '\\f6e5';
      }
      :host([icon='motherboard-fill'])::before {
        content: '\\f6e6';
      }
      :host([icon='motherboard'])::before {
        content: '\\f6e7';
      }
      :host([icon='optical-audio-fill'])::before {
        content: '\\f6e8';
      }
      :host([icon='optical-audio'])::before {
        content: '\\f6e9';
      }
      :host([icon='pci-card'])::before {
        content: '\\f6ea';
      }
      :host([icon='router-fill'])::before {
        content: '\\f6eb';
      }
      :host([icon='router'])::before {
        content: '\\f6ec';
      }
      :host([icon='thunderbolt-fill'])::before {
        content: '\\f6ef';
      }
      :host([icon='thunderbolt'])::before {
        content: '\\f6f0';
      }
      :host([icon='usb-drive-fill'])::before {
        content: '\\f6f1';
      }
      :host([icon='usb-drive'])::before {
        content: '\\f6f2';
      }
      :host([icon='usb-micro-fill'])::before {
        content: '\\f6f3';
      }
      :host([icon='usb-micro'])::before {
        content: '\\f6f4';
      }
      :host([icon='usb-mini-fill'])::before {
        content: '\\f6f5';
      }
      :host([icon='usb-mini'])::before {
        content: '\\f6f6';
      }
      :host([icon='cloud-haze2'])::before {
        content: '\\f6f7';
      }
      :host([icon='device-hdd-fill'])::before {
        content: '\\f6f8';
      }
      :host([icon='device-hdd'])::before {
        content: '\\f6f9';
      }
      :host([icon='device-ssd-fill'])::before {
        content: '\\f6fa';
      }
      :host([icon='device-ssd'])::before {
        content: '\\f6fb';
      }
      :host([icon='displayport-fill'])::before {
        content: '\\f6fc';
      }
      :host([icon='mortarboard-fill'])::before {
        content: '\\f6fd';
      }
      :host([icon='mortarboard'])::before {
        content: '\\f6fe';
      }
      :host([icon='terminal-x'])::before {
        content: '\\f6ff';
      }
      :host([icon='arrow-through-heart-fill'])::before {
        content: '\\f700';
      }
      :host([icon='arrow-through-heart'])::before {
        content: '\\f701';
      }
      :host([icon='badge-sd-fill'])::before {
        content: '\\f702';
      }
      :host([icon='badge-sd'])::before {
        content: '\\f703';
      }
      :host([icon='bag-heart-fill'])::before {
        content: '\\f704';
      }
      :host([icon='bag-heart'])::before {
        content: '\\f705';
      }
      :host([icon='balloon-fill'])::before {
        content: '\\f706';
      }
      :host([icon='balloon-heart-fill'])::before {
        content: '\\f707';
      }
      :host([icon='balloon-heart'])::before {
        content: '\\f708';
      }
      :host([icon='balloon'])::before {
        content: '\\f709';
      }
      :host([icon='box2-fill'])::before {
        content: '\\f70a';
      }
      :host([icon='box2-heart-fill'])::before {
        content: '\\f70b';
      }
      :host([icon='box2-heart'])::before {
        content: '\\f70c';
      }
      :host([icon='box2'])::before {
        content: '\\f70d';
      }
      :host([icon='braces-asterisk'])::before {
        content: '\\f70e';
      }
      :host([icon='calendar-heart-fill'])::before {
        content: '\\f70f';
      }
      :host([icon='calendar-heart'])::before {
        content: '\\f710';
      }
      :host([icon='calendar2-heart-fill'])::before {
        content: '\\f711';
      }
      :host([icon='calendar2-heart'])::before {
        content: '\\f712';
      }
      :host([icon='chat-heart-fill'])::before {
        content: '\\f713';
      }
      :host([icon='chat-heart'])::before {
        content: '\\f714';
      }
      :host([icon='chat-left-heart-fill'])::before {
        content: '\\f715';
      }
      :host([icon='chat-left-heart'])::before {
        content: '\\f716';
      }
      :host([icon='chat-right-heart-fill'])::before {
        content: '\\f717';
      }
      :host([icon='chat-right-heart'])::before {
        content: '\\f718';
      }
      :host([icon='chat-square-heart-fill'])::before {
        content: '\\f719';
      }
      :host([icon='chat-square-heart'])::before {
        content: '\\f71a';
      }
      :host([icon='clipboard-check-fill'])::before {
        content: '\\f71b';
      }
      :host([icon='clipboard-data-fill'])::before {
        content: '\\f71c';
      }
      :host([icon='clipboard-fill'])::before {
        content: '\\f71d';
      }
      :host([icon='clipboard-heart-fill'])::before {
        content: '\\f71e';
      }
      :host([icon='clipboard-heart'])::before {
        content: '\\f71f';
      }
      :host([icon='clipboard-minus-fill'])::before {
        content: '\\f720';
      }
      :host([icon='clipboard-plus-fill'])::before {
        content: '\\f721';
      }
      :host([icon='clipboard-pulse'])::before {
        content: '\\f722';
      }
      :host([icon='clipboard-x-fill'])::before {
        content: '\\f723';
      }
      :host([icon='clipboard2-check-fill'])::before {
        content: '\\f724';
      }
      :host([icon='clipboard2-check'])::before {
        content: '\\f725';
      }
      :host([icon='clipboard2-data-fill'])::before {
        content: '\\f726';
      }
      :host([icon='clipboard2-data'])::before {
        content: '\\f727';
      }
      :host([icon='clipboard2-fill'])::before {
        content: '\\f728';
      }
      :host([icon='clipboard2-heart-fill'])::before {
        content: '\\f729';
      }
      :host([icon='clipboard2-heart'])::before {
        content: '\\f72a';
      }
      :host([icon='clipboard2-minus-fill'])::before {
        content: '\\f72b';
      }
      :host([icon='clipboard2-minus'])::before {
        content: '\\f72c';
      }
      :host([icon='clipboard2-plus-fill'])::before {
        content: '\\f72d';
      }
      :host([icon='clipboard2-plus'])::before {
        content: '\\f72e';
      }
      :host([icon='clipboard2-pulse-fill'])::before {
        content: '\\f72f';
      }
      :host([icon='clipboard2-pulse'])::before {
        content: '\\f730';
      }
      :host([icon='clipboard2-x-fill'])::before {
        content: '\\f731';
      }
      :host([icon='clipboard2-x'])::before {
        content: '\\f732';
      }
      :host([icon='clipboard2'])::before {
        content: '\\f733';
      }
      :host([icon='emoji-kiss-fill'])::before {
        content: '\\f734';
      }
      :host([icon='emoji-kiss'])::before {
        content: '\\f735';
      }
      :host([icon='envelope-heart-fill'])::before {
        content: '\\f736';
      }
      :host([icon='envelope-heart'])::before {
        content: '\\f737';
      }
      :host([icon='envelope-open-heart-fill'])::before {
        content: '\\f738';
      }
      :host([icon='envelope-open-heart'])::before {
        content: '\\f739';
      }
      :host([icon='envelope-paper-fill'])::before {
        content: '\\f73a';
      }
      :host([icon='envelope-paper-heart-fill'])::before {
        content: '\\f73b';
      }
      :host([icon='envelope-paper-heart'])::before {
        content: '\\f73c';
      }
      :host([icon='envelope-paper'])::before {
        content: '\\f73d';
      }
      :host([icon='filetype-aac'])::before {
        content: '\\f73e';
      }
      :host([icon='filetype-ai'])::before {
        content: '\\f73f';
      }
      :host([icon='filetype-bmp'])::before {
        content: '\\f740';
      }
      :host([icon='filetype-cs'])::before {
        content: '\\f741';
      }
      :host([icon='filetype-css'])::before {
        content: '\\f742';
      }
      :host([icon='filetype-csv'])::before {
        content: '\\f743';
      }
      :host([icon='filetype-doc'])::before {
        content: '\\f744';
      }
      :host([icon='filetype-docx'])::before {
        content: '\\f745';
      }
      :host([icon='filetype-exe'])::before {
        content: '\\f746';
      }
      :host([icon='filetype-gif'])::before {
        content: '\\f747';
      }
      :host([icon='filetype-heic'])::before {
        content: '\\f748';
      }
      :host([icon='filetype-html'])::before {
        content: '\\f749';
      }
      :host([icon='filetype-java'])::before {
        content: '\\f74a';
      }
      :host([icon='filetype-jpg'])::before {
        content: '\\f74b';
      }
      :host([icon='filetype-js'])::before {
        content: '\\f74c';
      }
      :host([icon='filetype-jsx'])::before {
        content: '\\f74d';
      }
      :host([icon='filetype-key'])::before {
        content: '\\f74e';
      }
      :host([icon='filetype-m4p'])::before {
        content: '\\f74f';
      }
      :host([icon='filetype-md'])::before {
        content: '\\f750';
      }
      :host([icon='filetype-mdx'])::before {
        content: '\\f751';
      }
      :host([icon='filetype-mov'])::before {
        content: '\\f752';
      }
      :host([icon='filetype-mp3'])::before {
        content: '\\f753';
      }
      :host([icon='filetype-mp4'])::before {
        content: '\\f754';
      }
      :host([icon='filetype-otf'])::before {
        content: '\\f755';
      }
      :host([icon='filetype-pdf'])::before {
        content: '\\f756';
      }
      :host([icon='filetype-php'])::before {
        content: '\\f757';
      }
      :host([icon='filetype-png'])::before {
        content: '\\f758';
      }
      :host([icon='filetype-ppt'])::before {
        content: '\\f75a';
      }
      :host([icon='filetype-psd'])::before {
        content: '\\f75b';
      }
      :host([icon='filetype-py'])::before {
        content: '\\f75c';
      }
      :host([icon='filetype-raw'])::before {
        content: '\\f75d';
      }
      :host([icon='filetype-rb'])::before {
        content: '\\f75e';
      }
      :host([icon='filetype-sass'])::before {
        content: '\\f75f';
      }
      :host([icon='filetype-scss'])::before {
        content: '\\f760';
      }
      :host([icon='filetype-sh'])::before {
        content: '\\f761';
      }
      :host([icon='filetype-svg'])::before {
        content: '\\f762';
      }
      :host([icon='filetype-tiff'])::before {
        content: '\\f763';
      }
      :host([icon='filetype-tsx'])::before {
        content: '\\f764';
      }
      :host([icon='filetype-ttf'])::before {
        content: '\\f765';
      }
      :host([icon='filetype-txt'])::before {
        content: '\\f766';
      }
      :host([icon='filetype-wav'])::before {
        content: '\\f767';
      }
      :host([icon='filetype-woff'])::before {
        content: '\\f768';
      }
      :host([icon='filetype-xls'])::before {
        content: '\\f76a';
      }
      :host([icon='filetype-xml'])::before {
        content: '\\f76b';
      }
      :host([icon='filetype-yml'])::before {
        content: '\\f76c';
      }
      :host([icon='heart-arrow'])::before {
        content: '\\f76d';
      }
      :host([icon='heart-pulse-fill'])::before {
        content: '\\f76e';
      }
      :host([icon='heart-pulse'])::before {
        content: '\\f76f';
      }
      :host([icon='heartbreak-fill'])::before {
        content: '\\f770';
      }
      :host([icon='heartbreak'])::before {
        content: '\\f771';
      }
      :host([icon='hearts'])::before {
        content: '\\f772';
      }
      :host([icon='hospital-fill'])::before {
        content: '\\f773';
      }
      :host([icon='hospital'])::before {
        content: '\\f774';
      }
      :host([icon='house-heart-fill'])::before {
        content: '\\f775';
      }
      :host([icon='house-heart'])::before {
        content: '\\f776';
      }
      :host([icon='incognito'])::before {
        content: '\\f777';
      }
      :host([icon='magnet-fill'])::before {
        content: '\\f778';
      }
      :host([icon='magnet'])::before {
        content: '\\f779';
      }
      :host([icon='person-heart'])::before {
        content: '\\f77a';
      }
      :host([icon='person-hearts'])::before {
        content: '\\f77b';
      }
      :host([icon='phone-flip'])::before {
        content: '\\f77c';
      }
      :host([icon='plugin'])::before {
        content: '\\f77d';
      }
      :host([icon='postage-fill'])::before {
        content: '\\f77e';
      }
      :host([icon='postage-heart-fill'])::before {
        content: '\\f77f';
      }
      :host([icon='postage-heart'])::before {
        content: '\\f780';
      }
      :host([icon='postage'])::before {
        content: '\\f781';
      }
      :host([icon='postcard-fill'])::before {
        content: '\\f782';
      }
      :host([icon='postcard-heart-fill'])::before {
        content: '\\f783';
      }
      :host([icon='postcard-heart'])::before {
        content: '\\f784';
      }
      :host([icon='postcard'])::before {
        content: '\\f785';
      }
      :host([icon='search-heart-fill'])::before {
        content: '\\f786';
      }
      :host([icon='search-heart'])::before {
        content: '\\f787';
      }
      :host([icon='sliders2-vertical'])::before {
        content: '\\f788';
      }
      :host([icon='sliders2'])::before {
        content: '\\f789';
      }
      :host([icon='trash3-fill'])::before {
        content: '\\f78a';
      }
      :host([icon='trash3'])::before {
        content: '\\f78b';
      }
      :host([icon='valentine'])::before {
        content: '\\f78c';
      }
      :host([icon='valentine2'])::before {
        content: '\\f78d';
      }
      :host([icon='wrench-adjustable-circle-fill'])::before {
        content: '\\f78e';
      }
      :host([icon='wrench-adjustable-circle'])::before {
        content: '\\f78f';
      }
      :host([icon='wrench-adjustable'])::before {
        content: '\\f790';
      }
      :host([icon='filetype-json'])::before {
        content: '\\f791';
      }
      :host([icon='filetype-pptx'])::before {
        content: '\\f792';
      }
      :host([icon='filetype-xlsx'])::before {
        content: '\\f793';
      }
      :host([icon='1-circle-fill'])::before {
        content: '\\f796';
      }
      :host([icon='1-circle'])::before {
        content: '\\f797';
      }
      :host([icon='1-square-fill'])::before {
        content: '\\f798';
      }
      :host([icon='1-square'])::before {
        content: '\\f799';
      }
      :host([icon='2-circle-fill'])::before {
        content: '\\f79c';
      }
      :host([icon='2-circle'])::before {
        content: '\\f79d';
      }
      :host([icon='2-square-fill'])::before {
        content: '\\f79e';
      }
      :host([icon='2-square'])::before {
        content: '\\f79f';
      }
      :host([icon='3-circle-fill'])::before {
        content: '\\f7a2';
      }
      :host([icon='3-circle'])::before {
        content: '\\f7a3';
      }
      :host([icon='3-square-fill'])::before {
        content: '\\f7a4';
      }
      :host([icon='3-square'])::before {
        content: '\\f7a5';
      }
      :host([icon='4-circle-fill'])::before {
        content: '\\f7a8';
      }
      :host([icon='4-circle'])::before {
        content: '\\f7a9';
      }
      :host([icon='4-square-fill'])::before {
        content: '\\f7aa';
      }
      :host([icon='4-square'])::before {
        content: '\\f7ab';
      }
      :host([icon='5-circle-fill'])::before {
        content: '\\f7ae';
      }
      :host([icon='5-circle'])::before {
        content: '\\f7af';
      }
      :host([icon='5-square-fill'])::before {
        content: '\\f7b0';
      }
      :host([icon='5-square'])::before {
        content: '\\f7b1';
      }
      :host([icon='6-circle-fill'])::before {
        content: '\\f7b4';
      }
      :host([icon='6-circle'])::before {
        content: '\\f7b5';
      }
      :host([icon='6-square-fill'])::before {
        content: '\\f7b6';
      }
      :host([icon='6-square'])::before {
        content: '\\f7b7';
      }
      :host([icon='7-circle-fill'])::before {
        content: '\\f7ba';
      }
      :host([icon='7-circle'])::before {
        content: '\\f7bb';
      }
      :host([icon='7-square-fill'])::before {
        content: '\\f7bc';
      }
      :host([icon='7-square'])::before {
        content: '\\f7bd';
      }
      :host([icon='8-circle-fill'])::before {
        content: '\\f7c0';
      }
      :host([icon='8-circle'])::before {
        content: '\\f7c1';
      }
      :host([icon='8-square-fill'])::before {
        content: '\\f7c2';
      }
      :host([icon='8-square'])::before {
        content: '\\f7c3';
      }
      :host([icon='9-circle-fill'])::before {
        content: '\\f7c6';
      }
      :host([icon='9-circle'])::before {
        content: '\\f7c7';
      }
      :host([icon='9-square-fill'])::before {
        content: '\\f7c8';
      }
      :host([icon='9-square'])::before {
        content: '\\f7c9';
      }
      :host([icon='airplane-engines-fill'])::before {
        content: '\\f7ca';
      }
      :host([icon='airplane-engines'])::before {
        content: '\\f7cb';
      }
      :host([icon='airplane-fill'])::before {
        content: '\\f7cc';
      }
      :host([icon='airplane'])::before {
        content: '\\f7cd';
      }
      :host([icon='alexa'])::before {
        content: '\\f7ce';
      }
      :host([icon='alipay'])::before {
        content: '\\f7cf';
      }
      :host([icon='android'])::before {
        content: '\\f7d0';
      }
      :host([icon='android2'])::before {
        content: '\\f7d1';
      }
      :host([icon='box-fill'])::before {
        content: '\\f7d2';
      }
      :host([icon='box-seam-fill'])::before {
        content: '\\f7d3';
      }
      :host([icon='browser-chrome'])::before {
        content: '\\f7d4';
      }
      :host([icon='browser-edge'])::before {
        content: '\\f7d5';
      }
      :host([icon='browser-firefox'])::before {
        content: '\\f7d6';
      }
      :host([icon='browser-safari'])::before {
        content: '\\f7d7';
      }
      :host([icon='c-circle-fill'])::before {
        content: '\\f7da';
      }
      :host([icon='c-circle'])::before {
        content: '\\f7db';
      }
      :host([icon='c-square-fill'])::before {
        content: '\\f7dc';
      }
      :host([icon='c-square'])::before {
        content: '\\f7dd';
      }
      :host([icon='capsule-pill'])::before {
        content: '\\f7de';
      }
      :host([icon='capsule'])::before {
        content: '\\f7df';
      }
      :host([icon='car-front-fill'])::before {
        content: '\\f7e0';
      }
      :host([icon='car-front'])::before {
        content: '\\f7e1';
      }
      :host([icon='cassette-fill'])::before {
        content: '\\f7e2';
      }
      :host([icon='cassette'])::before {
        content: '\\f7e3';
      }
      :host([icon='cc-circle-fill'])::before {
        content: '\\f7e6';
      }
      :host([icon='cc-circle'])::before {
        content: '\\f7e7';
      }
      :host([icon='cc-square-fill'])::before {
        content: '\\f7e8';
      }
      :host([icon='cc-square'])::before {
        content: '\\f7e9';
      }
      :host([icon='cup-hot-fill'])::before {
        content: '\\f7ea';
      }
      :host([icon='cup-hot'])::before {
        content: '\\f7eb';
      }
      :host([icon='currency-rupee'])::before {
        content: '\\f7ec';
      }
      :host([icon='dropbox'])::before {
        content: '\\f7ed';
      }
      :host([icon='escape'])::before {
        content: '\\f7ee';
      }
      :host([icon='fast-forward-btn-fill'])::before {
        content: '\\f7ef';
      }
      :host([icon='fast-forward-btn'])::before {
        content: '\\f7f0';
      }
      :host([icon='fast-forward-circle-fill'])::before {
        content: '\\f7f1';
      }
      :host([icon='fast-forward-circle'])::before {
        content: '\\f7f2';
      }
      :host([icon='fast-forward-fill'])::before {
        content: '\\f7f3';
      }
      :host([icon='fast-forward'])::before {
        content: '\\f7f4';
      }
      :host([icon='filetype-sql'])::before {
        content: '\\f7f5';
      }
      :host([icon='fire'])::before {
        content: '\\f7f6';
      }
      :host([icon='google-play'])::before {
        content: '\\f7f7';
      }
      :host([icon='h-circle-fill'])::before {
        content: '\\f7fa';
      }
      :host([icon='h-circle'])::before {
        content: '\\f7fb';
      }
      :host([icon='h-square-fill'])::before {
        content: '\\f7fc';
      }
      :host([icon='h-square'])::before {
        content: '\\f7fd';
      }
      :host([icon='indent'])::before {
        content: '\\f7fe';
      }
      :host([icon='lungs-fill'])::before {
        content: '\\f7ff';
      }
      :host([icon='lungs'])::before {
        content: '\\f800';
      }
      :host([icon='microsoft-teams'])::before {
        content: '\\f801';
      }
      :host([icon='p-circle-fill'])::before {
        content: '\\f804';
      }
      :host([icon='p-circle'])::before {
        content: '\\f805';
      }
      :host([icon='p-square-fill'])::before {
        content: '\\f806';
      }
      :host([icon='p-square'])::before {
        content: '\\f807';
      }
      :host([icon='pass-fill'])::before {
        content: '\\f808';
      }
      :host([icon='pass'])::before {
        content: '\\f809';
      }
      :host([icon='prescription'])::before {
        content: '\\f80a';
      }
      :host([icon='prescription2'])::before {
        content: '\\f80b';
      }
      :host([icon='r-circle-fill'])::before {
        content: '\\f80e';
      }
      :host([icon='r-circle'])::before {
        content: '\\f80f';
      }
      :host([icon='r-square-fill'])::before {
        content: '\\f810';
      }
      :host([icon='r-square'])::before {
        content: '\\f811';
      }
      :host([icon='repeat-1'])::before {
        content: '\\f812';
      }
      :host([icon='repeat'])::before {
        content: '\\f813';
      }
      :host([icon='rewind-btn-fill'])::before {
        content: '\\f814';
      }
      :host([icon='rewind-btn'])::before {
        content: '\\f815';
      }
      :host([icon='rewind-circle-fill'])::before {
        content: '\\f816';
      }
      :host([icon='rewind-circle'])::before {
        content: '\\f817';
      }
      :host([icon='rewind-fill'])::before {
        content: '\\f818';
      }
      :host([icon='rewind'])::before {
        content: '\\f819';
      }
      :host([icon='train-freight-front-fill'])::before {
        content: '\\f81a';
      }
      :host([icon='train-freight-front'])::before {
        content: '\\f81b';
      }
      :host([icon='train-front-fill'])::before {
        content: '\\f81c';
      }
      :host([icon='train-front'])::before {
        content: '\\f81d';
      }
      :host([icon='train-lightrail-front-fill'])::before {
        content: '\\f81e';
      }
      :host([icon='train-lightrail-front'])::before {
        content: '\\f81f';
      }
      :host([icon='truck-front-fill'])::before {
        content: '\\f820';
      }
      :host([icon='truck-front'])::before {
        content: '\\f821';
      }
      :host([icon='ubuntu'])::before {
        content: '\\f822';
      }
      :host([icon='unindent'])::before {
        content: '\\f823';
      }
      :host([icon='unity'])::before {
        content: '\\f824';
      }
      :host([icon='universal-access-circle'])::before {
        content: '\\f825';
      }
      :host([icon='universal-access'])::before {
        content: '\\f826';
      }
      :host([icon='virus'])::before {
        content: '\\f827';
      }
      :host([icon='virus2'])::before {
        content: '\\f828';
      }
      :host([icon='wechat'])::before {
        content: '\\f829';
      }
      :host([icon='yelp'])::before {
        content: '\\f82a';
      }
      :host([icon='sign-stop-fill'])::before {
        content: '\\f82b';
      }
      :host([icon='sign-stop-lights-fill'])::before {
        content: '\\f82c';
      }
      :host([icon='sign-stop-lights'])::before {
        content: '\\f82d';
      }
      :host([icon='sign-stop'])::before {
        content: '\\f82e';
      }
      :host([icon='sign-turn-left-fill'])::before {
        content: '\\f82f';
      }
      :host([icon='sign-turn-left'])::before {
        content: '\\f830';
      }
      :host([icon='sign-turn-right-fill'])::before {
        content: '\\f831';
      }
      :host([icon='sign-turn-right'])::before {
        content: '\\f832';
      }
      :host([icon='sign-turn-slight-left-fill'])::before {
        content: '\\f833';
      }
      :host([icon='sign-turn-slight-left'])::before {
        content: '\\f834';
      }
      :host([icon='sign-turn-slight-right-fill'])::before {
        content: '\\f835';
      }
      :host([icon='sign-turn-slight-right'])::before {
        content: '\\f836';
      }
      :host([icon='sign-yield-fill'])::before {
        content: '\\f837';
      }
      :host([icon='sign-yield'])::before {
        content: '\\f838';
      }
      :host([icon='ev-station-fill'])::before {
        content: '\\f839';
      }
      :host([icon='ev-station'])::before {
        content: '\\f83a';
      }
      :host([icon='fuel-pump-diesel-fill'])::before {
        content: '\\f83b';
      }
      :host([icon='fuel-pump-diesel'])::before {
        content: '\\f83c';
      }
      :host([icon='fuel-pump-fill'])::before {
        content: '\\f83d';
      }
      :host([icon='fuel-pump'])::before {
        content: '\\f83e';
      }
      :host([icon='0-circle-fill'])::before {
        content: '\\f83f';
      }
      :host([icon='0-circle'])::before {
        content: '\\f840';
      }
      :host([icon='0-square-fill'])::before {
        content: '\\f841';
      }
      :host([icon='0-square'])::before {
        content: '\\f842';
      }
      :host([icon='rocket-fill'])::before {
        content: '\\f843';
      }
      :host([icon='rocket-takeoff-fill'])::before {
        content: '\\f844';
      }
      :host([icon='rocket-takeoff'])::before {
        content: '\\f845';
      }
      :host([icon='rocket'])::before {
        content: '\\f846';
      }
      :host([icon='stripe'])::before {
        content: '\\f847';
      }
      :host([icon='subscript'])::before {
        content: '\\f848';
      }
      :host([icon='superscript'])::before {
        content: '\\f849';
      }
      :host([icon='trello'])::before {
        content: '\\f84a';
      }
      :host([icon='envelope-at-fill'])::before {
        content: '\\f84b';
      }
      :host([icon='envelope-at'])::before {
        content: '\\f84c';
      }
      :host([icon='regex'])::before {
        content: '\\f84d';
      }
      :host([icon='text-wrap'])::before {
        content: '\\f84e';
      }
      :host([icon='sign-dead-end-fill'])::before {
        content: '\\f84f';
      }
      :host([icon='sign-dead-end'])::before {
        content: '\\f850';
      }
      :host([icon='sign-do-not-enter-fill'])::before {
        content: '\\f851';
      }
      :host([icon='sign-do-not-enter'])::before {
        content: '\\f852';
      }
      :host([icon='sign-intersection-fill'])::before {
        content: '\\f853';
      }
      :host([icon='sign-intersection-side-fill'])::before {
        content: '\\f854';
      }
      :host([icon='sign-intersection-side'])::before {
        content: '\\f855';
      }
      :host([icon='sign-intersection-t-fill'])::before {
        content: '\\f856';
      }
      :host([icon='sign-intersection-t'])::before {
        content: '\\f857';
      }
      :host([icon='sign-intersection-y-fill'])::before {
        content: '\\f858';
      }
      :host([icon='sign-intersection-y'])::before {
        content: '\\f859';
      }
      :host([icon='sign-intersection'])::before {
        content: '\\f85a';
      }
      :host([icon='sign-merge-left-fill'])::before {
        content: '\\f85b';
      }
      :host([icon='sign-merge-left'])::before {
        content: '\\f85c';
      }
      :host([icon='sign-merge-right-fill'])::before {
        content: '\\f85d';
      }
      :host([icon='sign-merge-right'])::before {
        content: '\\f85e';
      }
      :host([icon='sign-no-left-turn-fill'])::before {
        content: '\\f85f';
      }
      :host([icon='sign-no-left-turn'])::before {
        content: '\\f860';
      }
      :host([icon='sign-no-parking-fill'])::before {
        content: '\\f861';
      }
      :host([icon='sign-no-parking'])::before {
        content: '\\f862';
      }
      :host([icon='sign-no-right-turn-fill'])::before {
        content: '\\f863';
      }
      :host([icon='sign-no-right-turn'])::before {
        content: '\\f864';
      }
      :host([icon='sign-railroad-fill'])::before {
        content: '\\f865';
      }
      :host([icon='sign-railroad'])::before {
        content: '\\f866';
      }
      :host([icon='building-add'])::before {
        content: '\\f867';
      }
      :host([icon='building-check'])::before {
        content: '\\f868';
      }
      :host([icon='building-dash'])::before {
        content: '\\f869';
      }
      :host([icon='building-down'])::before {
        content: '\\f86a';
      }
      :host([icon='building-exclamation'])::before {
        content: '\\f86b';
      }
      :host([icon='building-fill-add'])::before {
        content: '\\f86c';
      }
      :host([icon='building-fill-check'])::before {
        content: '\\f86d';
      }
      :host([icon='building-fill-dash'])::before {
        content: '\\f86e';
      }
      :host([icon='building-fill-down'])::before {
        content: '\\f86f';
      }
      :host([icon='building-fill-exclamation'])::before {
        content: '\\f870';
      }
      :host([icon='building-fill-gear'])::before {
        content: '\\f871';
      }
      :host([icon='building-fill-lock'])::before {
        content: '\\f872';
      }
      :host([icon='building-fill-slash'])::before {
        content: '\\f873';
      }
      :host([icon='building-fill-up'])::before {
        content: '\\f874';
      }
      :host([icon='building-fill-x'])::before {
        content: '\\f875';
      }
      :host([icon='building-fill'])::before {
        content: '\\f876';
      }
      :host([icon='building-gear'])::before {
        content: '\\f877';
      }
      :host([icon='building-lock'])::before {
        content: '\\f878';
      }
      :host([icon='building-slash'])::before {
        content: '\\f879';
      }
      :host([icon='building-up'])::before {
        content: '\\f87a';
      }
      :host([icon='building-x'])::before {
        content: '\\f87b';
      }
      :host([icon='buildings-fill'])::before {
        content: '\\f87c';
      }
      :host([icon='buildings'])::before {
        content: '\\f87d';
      }
      :host([icon='bus-front-fill'])::before {
        content: '\\f87e';
      }
      :host([icon='bus-front'])::before {
        content: '\\f87f';
      }
      :host([icon='ev-front-fill'])::before {
        content: '\\f880';
      }
      :host([icon='ev-front'])::before {
        content: '\\f881';
      }
      :host([icon='globe-americas'])::before {
        content: '\\f882';
      }
      :host([icon='globe-asia-australia'])::before {
        content: '\\f883';
      }
      :host([icon='globe-central-south-asia'])::before {
        content: '\\f884';
      }
      :host([icon='globe-europe-africa'])::before {
        content: '\\f885';
      }
      :host([icon='house-add-fill'])::before {
        content: '\\f886';
      }
      :host([icon='house-add'])::before {
        content: '\\f887';
      }
      :host([icon='house-check-fill'])::before {
        content: '\\f888';
      }
      :host([icon='house-check'])::before {
        content: '\\f889';
      }
      :host([icon='house-dash-fill'])::before {
        content: '\\f88a';
      }
      :host([icon='house-dash'])::before {
        content: '\\f88b';
      }
      :host([icon='house-down-fill'])::before {
        content: '\\f88c';
      }
      :host([icon='house-down'])::before {
        content: '\\f88d';
      }
      :host([icon='house-exclamation-fill'])::before {
        content: '\\f88e';
      }
      :host([icon='house-exclamation'])::before {
        content: '\\f88f';
      }
      :host([icon='house-gear-fill'])::before {
        content: '\\f890';
      }
      :host([icon='house-gear'])::before {
        content: '\\f891';
      }
      :host([icon='house-lock-fill'])::before {
        content: '\\f892';
      }
      :host([icon='house-lock'])::before {
        content: '\\f893';
      }
      :host([icon='house-slash-fill'])::before {
        content: '\\f894';
      }
      :host([icon='house-slash'])::before {
        content: '\\f895';
      }
      :host([icon='house-up-fill'])::before {
        content: '\\f896';
      }
      :host([icon='house-up'])::before {
        content: '\\f897';
      }
      :host([icon='house-x-fill'])::before {
        content: '\\f898';
      }
      :host([icon='house-x'])::before {
        content: '\\f899';
      }
      :host([icon='person-add'])::before {
        content: '\\f89a';
      }
      :host([icon='person-down'])::before {
        content: '\\f89b';
      }
      :host([icon='person-exclamation'])::before {
        content: '\\f89c';
      }
      :host([icon='person-fill-add'])::before {
        content: '\\f89d';
      }
      :host([icon='person-fill-check'])::before {
        content: '\\f89e';
      }
      :host([icon='person-fill-dash'])::before {
        content: '\\f89f';
      }
      :host([icon='person-fill-down'])::before {
        content: '\\f8a0';
      }
      :host([icon='person-fill-exclamation'])::before {
        content: '\\f8a1';
      }
      :host([icon='person-fill-gear'])::before {
        content: '\\f8a2';
      }
      :host([icon='person-fill-lock'])::before {
        content: '\\f8a3';
      }
      :host([icon='person-fill-slash'])::before {
        content: '\\f8a4';
      }
      :host([icon='person-fill-up'])::before {
        content: '\\f8a5';
      }
      :host([icon='person-fill-x'])::before {
        content: '\\f8a6';
      }
      :host([icon='person-gear'])::before {
        content: '\\f8a7';
      }
      :host([icon='person-lock'])::before {
        content: '\\f8a8';
      }
      :host([icon='person-slash'])::before {
        content: '\\f8a9';
      }
      :host([icon='person-up'])::before {
        content: '\\f8aa';
      }
      :host([icon='scooter'])::before {
        content: '\\f8ab';
      }
      :host([icon='taxi-front-fill'])::before {
        content: '\\f8ac';
      }
      :host([icon='taxi-front'])::before {
        content: '\\f8ad';
      }
      :host([icon='amd'])::before {
        content: '\\f8ae';
      }
      :host([icon='database-add'])::before {
        content: '\\f8af';
      }
      :host([icon='database-check'])::before {
        content: '\\f8b0';
      }
      :host([icon='database-dash'])::before {
        content: '\\f8b1';
      }
      :host([icon='database-down'])::before {
        content: '\\f8b2';
      }
      :host([icon='database-exclamation'])::before {
        content: '\\f8b3';
      }
      :host([icon='database-fill-add'])::before {
        content: '\\f8b4';
      }
      :host([icon='database-fill-check'])::before {
        content: '\\f8b5';
      }
      :host([icon='database-fill-dash'])::before {
        content: '\\f8b6';
      }
      :host([icon='database-fill-down'])::before {
        content: '\\f8b7';
      }
      :host([icon='database-fill-exclamation'])::before {
        content: '\\f8b8';
      }
      :host([icon='database-fill-gear'])::before {
        content: '\\f8b9';
      }
      :host([icon='database-fill-lock'])::before {
        content: '\\f8ba';
      }
      :host([icon='database-fill-slash'])::before {
        content: '\\f8bb';
      }
      :host([icon='database-fill-up'])::before {
        content: '\\f8bc';
      }
      :host([icon='database-fill-x'])::before {
        content: '\\f8bd';
      }
      :host([icon='database-fill'])::before {
        content: '\\f8be';
      }
      :host([icon='database-gear'])::before {
        content: '\\f8bf';
      }
      :host([icon='database-lock'])::before {
        content: '\\f8c0';
      }
      :host([icon='database-slash'])::before {
        content: '\\f8c1';
      }
      :host([icon='database-up'])::before {
        content: '\\f8c2';
      }
      :host([icon='database-x'])::before {
        content: '\\f8c3';
      }
      :host([icon='database'])::before {
        content: '\\f8c4';
      }
      :host([icon='houses-fill'])::before {
        content: '\\f8c5';
      }
      :host([icon='houses'])::before {
        content: '\\f8c6';
      }
      :host([icon='nvidia'])::before {
        content: '\\f8c7';
      }
      :host([icon='person-vcard-fill'])::before {
        content: '\\f8c8';
      }
      :host([icon='person-vcard'])::before {
        content: '\\f8c9';
      }
      :host([icon='sina-weibo'])::before {
        content: '\\f8ca';
      }
      :host([icon='tencent-qq'])::before {
        content: '\\f8cb';
      }
      :host([icon='wikipedia'])::before {
        content: '\\f8cc';
      }
      :host([icon='alphabet-uppercase'])::before {
        content: '\\f2a5';
      }
      :host([icon='alphabet'])::before {
        content: '\\f68a';
      }
      :host([icon='amazon'])::before {
        content: '\\f68d';
      }
      :host([icon='arrows-collapse-vertical'])::before {
        content: '\\f690';
      }
      :host([icon='arrows-expand-vertical'])::before {
        content: '\\f695';
      }
      :host([icon='arrows-vertical'])::before {
        content: '\\f698';
      }
      :host([icon='arrows'])::before {
        content: '\\f6a2';
      }
      :host([icon='ban-fill'])::before {
        content: '\\f6a3';
      }
      :host([icon='ban'])::before {
        content: '\\f6b6';
      }
      :host([icon='bing'])::before {
        content: '\\f6c2';
      }
      :host([icon='cake'])::before {
        content: '\\f6e0';
      }
      :host([icon='cake2'])::before {
        content: '\\f6ed';
      }
      :host([icon='cookie'])::before {
        content: '\\f6ee';
      }
      :host([icon='copy'])::before {
        content: '\\f759';
      }
      :host([icon='crosshair'])::before {
        content: '\\f769';
      }
      :host([icon='crosshair2'])::before {
        content: '\\f794';
      }
      :host([icon='emoji-astonished-fill'])::before {
        content: '\\f795';
      }
      :host([icon='emoji-astonished'])::before {
        content: '\\f79a';
      }
      :host([icon='emoji-grimace-fill'])::before {
        content: '\\f79b';
      }
      :host([icon='emoji-grimace'])::before {
        content: '\\f7a0';
      }
      :host([icon='emoji-grin-fill'])::before {
        content: '\\f7a1';
      }
      :host([icon='emoji-grin'])::before {
        content: '\\f7a6';
      }
      :host([icon='emoji-surprise-fill'])::before {
        content: '\\f7a7';
      }
      :host([icon='emoji-surprise'])::before {
        content: '\\f7ac';
      }
      :host([icon='emoji-tear-fill'])::before {
        content: '\\f7ad';
      }
      :host([icon='emoji-tear'])::before {
        content: '\\f7b2';
      }
      :host([icon='envelope-arrow-down-fill'])::before {
        content: '\\f7b3';
      }
      :host([icon='envelope-arrow-down'])::before {
        content: '\\f7b8';
      }
      :host([icon='envelope-arrow-up-fill'])::before {
        content: '\\f7b9';
      }
      :host([icon='envelope-arrow-up'])::before {
        content: '\\f7be';
      }
      :host([icon='feather'])::before {
        content: '\\f7bf';
      }
      :host([icon='feather2'])::before {
        content: '\\f7c4';
      }
      :host([icon='floppy-fill'])::before {
        content: '\\f7c5';
      }
      :host([icon='floppy'])::before {
        content: '\\f7d8';
      }
      :host([icon='floppy2-fill'])::before {
        content: '\\f7d9';
      }
      :host([icon='floppy2'])::before {
        content: '\\f7e4';
      }
      :host([icon='gitlab'])::before {
        content: '\\f7e5';
      }
      :host([icon='highlighter'])::before {
        content: '\\f7f8';
      }
      :host([icon='marker-tip'])::before {
        content: '\\f802';
      }
      :host([icon='nvme-fill'])::before {
        content: '\\f803';
      }
      :host([icon='nvme'])::before {
        content: '\\f80c';
      }
      :host([icon='opencollective'])::before {
        content: '\\f80d';
      }
      :host([icon='pci-card-network'])::before {
        content: '\\f8cd';
      }
      :host([icon='pci-card-sound'])::before {
        content: '\\f8ce';
      }
      :host([icon='radar'])::before {
        content: '\\f8cf';
      }
      :host([icon='send-arrow-down-fill'])::before {
        content: '\\f8d0';
      }
      :host([icon='send-arrow-down'])::before {
        content: '\\f8d1';
      }
      :host([icon='send-arrow-up-fill'])::before {
        content: '\\f8d2';
      }
      :host([icon='send-arrow-up'])::before {
        content: '\\f8d3';
      }
      :host([icon='sim-slash-fill'])::before {
        content: '\\f8d4';
      }
      :host([icon='sim-slash'])::before {
        content: '\\f8d5';
      }
      :host([icon='sourceforge'])::before {
        content: '\\f8d6';
      }
      :host([icon='substack'])::before {
        content: '\\f8d7';
      }
      :host([icon='threads-fill'])::before {
        content: '\\f8d8';
      }
      :host([icon='threads'])::before {
        content: '\\f8d9';
      }
      :host([icon='transparency'])::before {
        content: '\\f8da';
      }
      :host([icon='twitter-x'])::before {
        content: '\\f8db';
      }
      :host([icon='type-h4'])::before {
        content: '\\f8dc';
      }
      :host([icon='type-h5'])::before {
        content: '\\f8dd';
      }
      :host([icon='type-h6'])::before {
        content: '\\f8de';
      }
      :host([icon='backpack-fill'])::before {
        content: '\\f8df';
      }
      :host([icon='backpack'])::before {
        content: '\\f8e0';
      }
      :host([icon='backpack2-fill'])::before {
        content: '\\f8e1';
      }
      :host([icon='backpack2'])::before {
        content: '\\f8e2';
      }
      :host([icon='backpack3-fill'])::before {
        content: '\\f8e3';
      }
      :host([icon='backpack3'])::before {
        content: '\\f8e4';
      }
      :host([icon='backpack4-fill'])::before {
        content: '\\f8e5';
      }
      :host([icon='backpack4'])::before {
        content: '\\f8e6';
      }
      :host([icon='brilliance'])::before {
        content: '\\f8e7';
      }
      :host([icon='cake-fill'])::before {
        content: '\\f8e8';
      }
      :host([icon='cake2-fill'])::before {
        content: '\\f8e9';
      }
      :host([icon='duffle-fill'])::before {
        content: '\\f8ea';
      }
      :host([icon='duffle'])::before {
        content: '\\f8eb';
      }
      :host([icon='exposure'])::before {
        content: '\\f8ec';
      }
      :host([icon='gender-neuter'])::before {
        content: '\\f8ed';
      }
      :host([icon='highlights'])::before {
        content: '\\f8ee';
      }
      :host([icon='luggage-fill'])::before {
        content: '\\f8ef';
      }
      :host([icon='luggage'])::before {
        content: '\\f8f0';
      }
      :host([icon='mailbox-flag'])::before {
        content: '\\f8f1';
      }
      :host([icon='mailbox2-flag'])::before {
        content: '\\f8f2';
      }
      :host([icon='noise-reduction'])::before {
        content: '\\f8f3';
      }
      :host([icon='passport-fill'])::before {
        content: '\\f8f4';
      }
      :host([icon='passport'])::before {
        content: '\\f8f5';
      }
      :host([icon='person-arms-up'])::before {
        content: '\\f8f6';
      }
      :host([icon='person-raised-hand'])::before {
        content: '\\f8f7';
      }
      :host([icon='person-standing-dress'])::before {
        content: '\\f8f8';
      }
      :host([icon='person-standing'])::before {
        content: '\\f8f9';
      }
      :host([icon='person-walking'])::before {
        content: '\\f8fa';
      }
      :host([icon='person-wheelchair'])::before {
        content: '\\f8fb';
      }
      :host([icon='shadows'])::before {
        content: '\\f8fc';
      }
      :host([icon='suitcase-fill'])::before {
        content: '\\f8fd';
      }
      :host([icon='suitcase-lg-fill'])::before {
        content: '\\f8fe';
      }
      :host([icon='suitcase-lg'])::before {
        content: '\\f8ff';
      }
      :host([icon='suitcase'])::before {
        content: '\\f900';
      }
      :host([icon='suitcase2-fill'])::before {
        content: '\\f901';
      }
      :host([icon='suitcase2'])::before {
        content: '\\f902';
      }
      :host([icon='vignette'])::before {
        content: '\\f903';
      }
    `],t([f({type:String})],y.prototype,"icon",2),y=t([s("kd-bs-icon")],y);var w=class extends O{constructor(){super(...arguments);this._mode="light"}get mode(){return this._mode}set mode(o){let l=this._mode;this._mode=o,this.requestUpdate("mode",l)}get preferredMode(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}connectedCallback(){super.connectedCallback(),this.mode=this.preferredMode}updated(o){super.updated(o),o.has("mode")&&this.updateMode()}updateMode(){let o=`Switch to ${this.mode==="light"?"dark":"light"} mode`;this._control?.setAttribute("aria-label",o),this._control?.setAttribute("title",o),this.fireEvent("kd-mode-switcher-changed",{mode:this.mode}),document.documentElement.dataset.mode=this.mode}render(){return c`<button class="button" @click=${this.onClick.bind(this)}>
      <span class="light"><kd-bs-icon icon="sun"></kd-bs-icon></span>
      <span class="dark"><kd-bs-icon icon="moon"></kd-bs-icon></span>
      <span class="dot"></span>
    </button>`}onClick(){this.mode=this.mode==="light"?"dark":"light"}};w.styles=[i`
      :host {
        display: contents;
      }

      :host * {
        box-sizing: border-box;
      }

      .button {
        appearance: none;
        display: inline-flex;
        padding: 0; /* padding: var(--spacing-xs) var(--spacing-md); */
        color: var(--color-action-hover-background);
        background-color: transparent;
        border: 1px solid transparent;
        transition: background-color 0.2s ease;
        text-align: center;
        cursor: pointer;
      }

      .light,
      .dark {
        aspect-ratio: 1;
        inline-size: var(--size-1);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transition: color 0.2s ease;
      }

      .dark {
        margin-inline-start: calc(var(--spacing-xs) * -1);
      }

      :host([mode='light']) .light,
      :host([mode='dark']) .dark {
        z-index: 2;
        color: var(--color-primary-foreground);
      }

      .dot {
        position: absolute;
        inline-size: var(--size-1);
        aspect-ratio: 1;
        background-color: var(--color-action-hover-background);
        border-radius: 50%;
        transition: transform 0.2s ease;
      }

      :host([mode='dark']) .dot {
        transform: translateX(calc(var(--size-1) - var(--spacing-xs)));
      }
    `],t([F(".button",!0)],w.prototype,"_control",2),t([f({type:String,reflect:!0})],w.prototype,"mode",1),w=t([s("kd-mode-switcher")],w);var q=class extends r{connectedCallback(){super.connectedCallback(),this.role="listitem",this.tabIndex=0}update(n){super.update(n),n.has("accent")&&(this.accent?this.style.setProperty("--kd-ooh-logo-hover-background-color",this.accent):this.style.removeProperty("--kd-ooh-logo-hover-background-color"))}render(){return c`<slot></slot>`}};q.styles=[i`
      :host {
        --kd-ooh-logo-depth: 0;
        --kd-ooh-logo-multi: 1;
        --kd-ooh-logo-at: calc(var(--kd-ooh-logo-depth) * var(--kd-ooh-logo-multi));
        --kd-ooh-logo-scale: 0.92;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 16 / 9;
        padding: var(--spacing-md);
        background-color: var(--kd-ooh-logo-background-color, var(--color-secondary-background));
        transition:
          filter 0.3s ease,
          transform 0.3s ease,
          background-color 0.3s ease;
        /* }

      :host-context(kd-ooh-logos:hover, kd-ooh-logos:focus-within) { */
        /* filter: blur(var(--kd-ooh-logo-depth));
        transform: translateZ(calc(var(--kd-ooh-logo-depth) * -1)); */
        filter: blur(var(--kd-ooh-logo-at));
        transform: translateZ(calc(var(--kd-ooh-logo-at) * -1)) scale(var(--kd-ooh-logo-scale));
        z-index: 1;
      }

      :host(:hover) {
        --kd-ooh-logo-multi: 0.1;
        z-index: 2;
      }

      :host(:focus) {
        --kd-ooh-logo-multi: 0;
        --kd-ooh-logo-scale: 1;
        z-index: 3;
        background-color: var(--kd-ooh-logo-hover-background-color, var(--color-secondary-background));
      }

      ::slotted(img) {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `],t([f()],q.prototype,"accent",2),q=t([s("kd-ooh-logo")],q);var D=class extends r{connectedCallback(){super.connectedCallback(),this.role="list"}render(){return c`<slot class="canvas"></slot>`}};D.styles=[i`
      :host {
        display: block;
        /* padding: var(--size-5) var(--spacing-lg); */
        padding-block: var(--size-5);
      }

      .canvas {
        display: grid;
        gap: var(--spacing-xl);
        grid-template-columns: repeat(auto-fit, minmax(var(--size-9), 1fr));
        transition: gap 0.3s ease;
        perspective: 300px;
      }

      /* .canvas:focus-within,
      .canvas:hover {
        gap: var(--size-3);
      } */

      .canvas:focus-within::slotted(kd-ooh-logo),
      .canvas:hover::slotted(kd-ooh-logo) {
        --kd-ooh-logo-depth: 8px;
      }
    `],D=t([s("kd-ooh-logos")],D);
/*! For license information please see main.js.LEGAL.txt */
