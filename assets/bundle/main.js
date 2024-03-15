import{a as l,b as M,c as r,d as U,e as _,f as i,g as z,h as F,i as P}from"./chunks/chunk-MD3C3WXH.js";var n=f=>(a,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(f,a)}):customElements.define(f,a)};var J={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:_},L=(f=J,a,e)=>{let{kind:s,metadata:c}=e,m=globalThis.litPropertyMetadata.get(c);if(m===void 0&&globalThis.litPropertyMetadata.set(c,m=new Map),m.set(e.name,f),s==="accessor"){let{name:p}=e;return{set(h){let u=a.get.call(this);a.set.call(this,h),this.requestUpdate(p,u,f)},init(h){return h!==void 0&&this.P(p,void 0,f),h}}}if(s==="setter"){let{name:p}=e;return function(h){let u=this[p];a.call(this,h),this.requestUpdate(p,u,f)}}throw Error("Unsupported decorator location: "+s)};function t(f){return(a,e)=>typeof e=="object"?L(f,a,e):((s,c,m)=>{let p=c.hasOwnProperty(m);return c.constructor.createProperty(m,p?{...s,wrapped:!0}:s),p?Object.getOwnPropertyDescriptor(c,m):void 0})(f,a,e)}var g=(f,a,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof a!="object"&&Object.defineProperty(f,a,e),e);function O(f,a){return(e,s,c)=>{let m=p=>p.renderRoot?.querySelector(f)??null;if(a){let{get:p,set:h}=typeof s=="object"?e:c??(()=>{let u=Symbol();return{get(){return this[u]},set(Q){this[u]=Q}}})();return g(e,s,{get(){let u=p.call(this);return u===void 0&&(u=m(this),(u!==null||this.hasUpdated)&&h.call(this,u)),u}})}return g(e,s,{get(){return m(this)}})}}function H(f){return(a,e)=>{let{slot:s,selector:c}=f??{},m="slot"+(s?`[name=${s}]`:":not([name])");return g(a,e,{get(){let p=this.renderRoot?.querySelector(m),h=p?.assignedElements(f)??[];return c===void 0?h:h.filter(u=>u.matches(c))}})}}var R=f=>f??z;function A(f){return class extends f{static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}focus(a){this._control.focus(a)}blur(){this._control.blur()}click(){this._control.click()}}}var o=class extends F{constructor(){super(...arguments);this._disposables=[]}disconnectedCallback(){super.disconnectedCallback();for(let e of this._disposables)e.dispose()}fireEvent(e,s){let c;return s===void 0?c=new CustomEvent(e):c=new CustomEvent(e,{detail:s}),this.dispatchEvent(c)}};var B=r`
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
`;var b=class extends A(o){render(){return i`<a
      class="button"
      part="base"
      href="${R(this.href)}"
      target="${R(this.target)}"
      rel="${R(this.rel)}"
      ><slot></slot
    ></a>`}};b.styles=[B],l([O(".button",!0)],b.prototype,"_control",2),l([t()],b.prototype,"href",2),l([t()],b.prototype,"target",2),l([t()],b.prototype,"rel",2),b=l([n("kd-link-button")],b);var v=class extends o{updated(){this.src&&this.style.setProperty("--kd-phone-hero-background-image",`url(${this.src})`)}render(){return i`<div class="container"><slot class="content"></slot></div>`}};v.styles=r`
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
  `,l([t({type:String})],v.prototype,"src",2),v=l([n("kd-phone-hero")],v);var Y=new Map;function K(f){let a=Y.get(f);return a||(a=new Intl.DateTimeFormat(void 0,f),Y.set(f,a)),a}var ee=Object.freeze({year:"numeric",month:"long"});function j(f,a=ee){return K(a).format(f)}var Le=Object.freeze({numeric:"auto"});var $=1e3,C=$*60,N=C*60,E=N*24,Z=E*7,W=E*30,S=E*365,X=S*4,Ke=Object.freeze(new Map([["year",S],["years",S],["quarter",X],["quarters",X],["month",W],["months",W],["week",Z],["weeks",Z],["day",E],["days",E],["hour",N],["hours",N],["minute",C],["minutes",C],["second",$],["seconds",$]]));var ef=Object.freeze({localeMatcher:"best fit",numeric:"always",style:"narrow"});var d=class extends o{constructor(){super(...arguments);this.type="event";this.assetType="image"}get endingDate(){if(this.date==="present")return d.now;let e=new Date(this.date);if(e.toString()!=="Invalid Date")return e}get startingDate(){if(this.startDate===void 0)return;let e=new Date(this.startDate);if(e.toString()!=="Invalid Date")return e}renderDateRange(){return this.endingDate===void 0?z:this.startingDate===void 0?this.date==="present"?i`<time datetime="${d.now.getFullYear()}">Present</time>`:i`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${j(this.endingDate)}</time>
      </div>`:this.date==="present"?i`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${j(this.startingDate)}</time> - Present
      </div>`:i`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${j(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${j(this.endingDate)}</time>
    </div>`}renderMedia(){return this.asset===void 0?z:i`<div class="media-zone">
      <div class="media-container">
        <img class="media-cover" loading="lazy" src="${this.asset}" alt="" />
        <img class="media" loading="lazy" src="${this.asset}" alt="" />
      </div>
    </div>`}render(){return i`
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
    `}};d.now=new Date,d.styles=[P,r`
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
    `],l([t()],d.prototype,"type",2),l([t()],d.prototype,"asset",2),l([t({attribute:"asset-type"})],d.prototype,"assetType",2),l([t()],d.prototype,"date",2),l([t({attribute:"start-date"})],d.prototype,"startDate",2),l([t()],d.prototype,"url",2),d=l([n("kd-life-event")],d);var x=class extends o{render(){return i`<span class="timeline"></span><slot class="events"></slot>`}};x.styles=[r`
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
    `],l([H({selector:"kd-life-event"})],x.prototype,"lifeEventEls",2),x=l([n("kd-life-events")],x);function G(f,a,e){return f?a(f):e?.(f)}var k=class extends o{constructor(){super(...arguments);this.term="";this.definition="";this.type="tags"}get tags(){return this.definition.trim().length===0?[]:this.definition.split(/,(?![^(]*\))/).map(e=>e.trim())}render(){return i`
      <span role="term"><slot name="term">${this.term}</slot></span>
      <span role="definition"
        ><slot>
          ${G(this.type==="tags",()=>i`<span class="tags">${this.tags.map(e=>i`<kd-tag>${e}</kd-tag> `)}</span>`,()=>this.definition)}</slot
        ></span
      >
    `}};k.styles=[r`
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
    `],l([t()],k.prototype,"term",2),l([t()],k.prototype,"definition",2),l([t()],k.prototype,"type",2),k=l([n("kd-attribution")],k);var T=class extends o{render(){return i`<slot></slot>`}};T.styles=[r`
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
    `],T=l([n("kd-tag")],T);var I=class extends o{static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}focus(a){this._control.focus(a)}blur(){this._control.blur()}click(){this._control.click()}};var V=r`
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
`;var fe=Object.freeze({123:"\\f67f","alarm-fill":"\\f101",alarm:"\\f102","align-bottom":"\\f103","align-center":"\\f104","align-end":"\\f105","align-middle":"\\f106","align-start":"\\f107","align-top":"\\f108",alt:"\\f109","app-indicator":"\\f10a",app:"\\f10b","archive-fill":"\\f10c",archive:"\\f10d","arrow-90deg-down":"\\f10e","arrow-90deg-left":"\\f10f","arrow-90deg-right":"\\f110","arrow-90deg-up":"\\f111","arrow-bar-down":"\\f112","arrow-bar-left":"\\f113","arrow-bar-right":"\\f114","arrow-bar-up":"\\f115","arrow-clockwise":"\\f116","arrow-counterclockwise":"\\f117","arrow-down-circle-fill":"\\f118","arrow-down-circle":"\\f119","arrow-down-left-circle-fill":"\\f11a","arrow-down-left-circle":"\\f11b","arrow-down-left-square-fill":"\\f11c","arrow-down-left-square":"\\f11d","arrow-down-left":"\\f11e","arrow-down-right-circle-fill":"\\f11f","arrow-down-right-circle":"\\f120","arrow-down-right-square-fill":"\\f121","arrow-down-right-square":"\\f122","arrow-down-right":"\\f123","arrow-down-short":"\\f124","arrow-down-square-fill":"\\f125","arrow-down-square":"\\f126","arrow-down-up":"\\f127","arrow-down":"\\f128","arrow-left-circle-fill":"\\f129","arrow-left-circle":"\\f12a","arrow-left-right":"\\f12b","arrow-left-short":"\\f12c","arrow-left-square-fill":"\\f12d","arrow-left-square":"\\f12e","arrow-left":"\\f12f","arrow-repeat":"\\f130","arrow-return-left":"\\f131","arrow-return-right":"\\f132","arrow-right-circle-fill":"\\f133","arrow-right-circle":"\\f134","arrow-right-short":"\\f135","arrow-right-square-fill":"\\f136","arrow-right-square":"\\f137","arrow-right":"\\f138","arrow-up-circle-fill":"\\f139","arrow-up-circle":"\\f13a","arrow-up-left-circle-fill":"\\f13b","arrow-up-left-circle":"\\f13c","arrow-up-left-square-fill":"\\f13d","arrow-up-left-square":"\\f13e","arrow-up-left":"\\f13f","arrow-up-right-circle-fill":"\\f140","arrow-up-right-circle":"\\f141","arrow-up-right-square-fill":"\\f142","arrow-up-right-square":"\\f143","arrow-up-right":"\\f144","arrow-up-short":"\\f145","arrow-up-square-fill":"\\f146","arrow-up-square":"\\f147","arrow-up":"\\f148","arrows-angle-contract":"\\f149","arrows-angle-expand":"\\f14a","arrows-collapse":"\\f14b","arrows-expand":"\\f14c","arrows-fullscreen":"\\f14d","arrows-move":"\\f14e","aspect-ratio-fill":"\\f14f","aspect-ratio":"\\f150",asterisk:"\\f151",at:"\\f152","award-fill":"\\f153",award:"\\f154",back:"\\f155","backspace-fill":"\\f156","backspace-reverse-fill":"\\f157","backspace-reverse":"\\f158",backspace:"\\f159","badge-3d-fill":"\\f15a","badge-3d":"\\f15b","badge-4k-fill":"\\f15c","badge-4k":"\\f15d","badge-8k-fill":"\\f15e","badge-8k":"\\f15f","badge-ad-fill":"\\f160","badge-ad":"\\f161","badge-ar-fill":"\\f162","badge-ar":"\\f163","badge-cc-fill":"\\f164","badge-cc":"\\f165","badge-hd-fill":"\\f166","badge-hd":"\\f167","badge-tm-fill":"\\f168","badge-tm":"\\f169","badge-vo-fill":"\\f16a","badge-vo":"\\f16b","badge-vr-fill":"\\f16c","badge-vr":"\\f16d","badge-wc-fill":"\\f16e","badge-wc":"\\f16f","bag-check-fill":"\\f170","bag-check":"\\f171","bag-dash-fill":"\\f172","bag-dash":"\\f173","bag-fill":"\\f174","bag-plus-fill":"\\f175","bag-plus":"\\f176","bag-x-fill":"\\f177","bag-x":"\\f178",bag:"\\f179","bar-chart-fill":"\\f17a","bar-chart-line-fill":"\\f17b","bar-chart-line":"\\f17c","bar-chart-steps":"\\f17d","bar-chart":"\\f17e","basket-fill":"\\f17f",basket:"\\f180","basket2-fill":"\\f181",basket2:"\\f182","basket3-fill":"\\f183",basket3:"\\f184","battery-charging":"\\f185","battery-full":"\\f186","battery-half":"\\f187",battery:"\\f188","bell-fill":"\\f189",bell:"\\f18a",bezier:"\\f18b",bezier2:"\\f18c",bicycle:"\\f18d","binoculars-fill":"\\f18e",binoculars:"\\f18f","blockquote-left":"\\f190","blockquote-right":"\\f191","book-fill":"\\f192","book-half":"\\f193",book:"\\f194","bookmark-check-fill":"\\f195","bookmark-check":"\\f196","bookmark-dash-fill":"\\f197","bookmark-dash":"\\f198","bookmark-fill":"\\f199","bookmark-heart-fill":"\\f19a","bookmark-heart":"\\f19b","bookmark-plus-fill":"\\f19c","bookmark-plus":"\\f19d","bookmark-star-fill":"\\f19e","bookmark-star":"\\f19f","bookmark-x-fill":"\\f1a0","bookmark-x":"\\f1a1",bookmark:"\\f1a2","bookmarks-fill":"\\f1a3",bookmarks:"\\f1a4",bookshelf:"\\f1a5","bootstrap-fill":"\\f1a6","bootstrap-reboot":"\\f1a7",bootstrap:"\\f1a8","border-all":"\\f1a9","border-bottom":"\\f1aa","border-center":"\\f1ab","border-inner":"\\f1ac","border-left":"\\f1ad","border-middle":"\\f1ae","border-outer":"\\f1af","border-right":"\\f1b0","border-style":"\\f1b1","border-top":"\\f1b2","border-width":"\\f1b3",border:"\\f1b4","bounding-box-circles":"\\f1b5","bounding-box":"\\f1b6","box-arrow-down-left":"\\f1b7","box-arrow-down-right":"\\f1b8","box-arrow-down":"\\f1b9","box-arrow-in-down-left":"\\f1ba","box-arrow-in-down-right":"\\f1bb","box-arrow-in-down":"\\f1bc","box-arrow-in-left":"\\f1bd","box-arrow-in-right":"\\f1be","box-arrow-in-up-left":"\\f1bf","box-arrow-in-up-right":"\\f1c0","box-arrow-in-up":"\\f1c1","box-arrow-left":"\\f1c2","box-arrow-right":"\\f1c3","box-arrow-up-left":"\\f1c4","box-arrow-up-right":"\\f1c5","box-arrow-up":"\\f1c6","box-seam":"\\f1c7",box:"\\f1c8",braces:"\\f1c9",bricks:"\\f1ca","briefcase-fill":"\\f1cb",briefcase:"\\f1cc","brightness-alt-high-fill":"\\f1cd","brightness-alt-high":"\\f1ce","brightness-alt-low-fill":"\\f1cf","brightness-alt-low":"\\f1d0","brightness-high-fill":"\\f1d1","brightness-high":"\\f1d2","brightness-low-fill":"\\f1d3","brightness-low":"\\f1d4","broadcast-pin":"\\f1d5",broadcast:"\\f1d6","brush-fill":"\\f1d7",brush:"\\f1d8","bucket-fill":"\\f1d9",bucket:"\\f1da","bug-fill":"\\f1db",bug:"\\f1dc",building:"\\f1dd",bullseye:"\\f1de","calculator-fill":"\\f1df",calculator:"\\f1e0","calendar-check-fill":"\\f1e1","calendar-check":"\\f1e2","calendar-date-fill":"\\f1e3","calendar-date":"\\f1e4","calendar-day-fill":"\\f1e5","calendar-day":"\\f1e6","calendar-event-fill":"\\f1e7","calendar-event":"\\f1e8","calendar-fill":"\\f1e9","calendar-minus-fill":"\\f1ea","calendar-minus":"\\f1eb","calendar-month-fill":"\\f1ec","calendar-month":"\\f1ed","calendar-plus-fill":"\\f1ee","calendar-plus":"\\f1ef","calendar-range-fill":"\\f1f0","calendar-range":"\\f1f1","calendar-week-fill":"\\f1f2","calendar-week":"\\f1f3","calendar-x-fill":"\\f1f4","calendar-x":"\\f1f5",calendar:"\\f1f6","calendar2-check-fill":"\\f1f7","calendar2-check":"\\f1f8","calendar2-date-fill":"\\f1f9","calendar2-date":"\\f1fa","calendar2-day-fill":"\\f1fb","calendar2-day":"\\f1fc","calendar2-event-fill":"\\f1fd","calendar2-event":"\\f1fe","calendar2-fill":"\\f1ff","calendar2-minus-fill":"\\f200","calendar2-minus":"\\f201","calendar2-month-fill":"\\f202","calendar2-month":"\\f203","calendar2-plus-fill":"\\f204","calendar2-plus":"\\f205","calendar2-range-fill":"\\f206","calendar2-range":"\\f207","calendar2-week-fill":"\\f208","calendar2-week":"\\f209","calendar2-x-fill":"\\f20a","calendar2-x":"\\f20b",calendar2:"\\f20c","calendar3-event-fill":"\\f20d","calendar3-event":"\\f20e","calendar3-fill":"\\f20f","calendar3-range-fill":"\\f210","calendar3-range":"\\f211","calendar3-week-fill":"\\f212","calendar3-week":"\\f213",calendar3:"\\f214","calendar4-event":"\\f215","calendar4-range":"\\f216","calendar4-week":"\\f217",calendar4:"\\f218","camera-fill":"\\f219","camera-reels-fill":"\\f21a","camera-reels":"\\f21b","camera-video-fill":"\\f21c","camera-video-off-fill":"\\f21d","camera-video-off":"\\f21e","camera-video":"\\f21f",camera:"\\f220",camera2:"\\f221","capslock-fill":"\\f222",capslock:"\\f223","card-checklist":"\\f224","card-heading":"\\f225","card-image":"\\f226","card-list":"\\f227","card-text":"\\f228","caret-down-fill":"\\f229","caret-down-square-fill":"\\f22a","caret-down-square":"\\f22b","caret-down":"\\f22c","caret-left-fill":"\\f22d","caret-left-square-fill":"\\f22e","caret-left-square":"\\f22f","caret-left":"\\f230","caret-right-fill":"\\f231","caret-right-square-fill":"\\f232","caret-right-square":"\\f233","caret-right":"\\f234","caret-up-fill":"\\f235","caret-up-square-fill":"\\f236","caret-up-square":"\\f237","caret-up":"\\f238","cart-check-fill":"\\f239","cart-check":"\\f23a","cart-dash-fill":"\\f23b","cart-dash":"\\f23c","cart-fill":"\\f23d","cart-plus-fill":"\\f23e","cart-plus":"\\f23f","cart-x-fill":"\\f240","cart-x":"\\f241",cart:"\\f242",cart2:"\\f243",cart3:"\\f244",cart4:"\\f245","cash-stack":"\\f246",cash:"\\f247",cast:"\\f248","chat-dots-fill":"\\f249","chat-dots":"\\f24a","chat-fill":"\\f24b","chat-left-dots-fill":"\\f24c","chat-left-dots":"\\f24d","chat-left-fill":"\\f24e","chat-left-quote-fill":"\\f24f","chat-left-quote":"\\f250","chat-left-text-fill":"\\f251","chat-left-text":"\\f252","chat-left":"\\f253","chat-quote-fill":"\\f254","chat-quote":"\\f255","chat-right-dots-fill":"\\f256","chat-right-dots":"\\f257","chat-right-fill":"\\f258","chat-right-quote-fill":"\\f259","chat-right-quote":"\\f25a","chat-right-text-fill":"\\f25b","chat-right-text":"\\f25c","chat-right":"\\f25d","chat-square-dots-fill":"\\f25e","chat-square-dots":"\\f25f","chat-square-fill":"\\f260","chat-square-quote-fill":"\\f261","chat-square-quote":"\\f262","chat-square-text-fill":"\\f263","chat-square-text":"\\f264","chat-square":"\\f265","chat-text-fill":"\\f266","chat-text":"\\f267",chat:"\\f268","check-all":"\\f269","check-circle-fill":"\\f26a","check-circle":"\\f26b","check-square-fill":"\\f26c","check-square":"\\f26d",check:"\\f26e","check2-all":"\\f26f","check2-circle":"\\f270","check2-square":"\\f271",check2:"\\f272","chevron-bar-contract":"\\f273","chevron-bar-down":"\\f274","chevron-bar-expand":"\\f275","chevron-bar-left":"\\f276","chevron-bar-right":"\\f277","chevron-bar-up":"\\f278","chevron-compact-down":"\\f279","chevron-compact-left":"\\f27a","chevron-compact-right":"\\f27b","chevron-compact-up":"\\f27c","chevron-contract":"\\f27d","chevron-double-down":"\\f27e","chevron-double-left":"\\f27f","chevron-double-right":"\\f280","chevron-double-up":"\\f281","chevron-down":"\\f282","chevron-expand":"\\f283","chevron-left":"\\f284","chevron-right":"\\f285","chevron-up":"\\f286","circle-fill":"\\f287","circle-half":"\\f288","circle-square":"\\f289",circle:"\\f28a","clipboard-check":"\\f28b","clipboard-data":"\\f28c","clipboard-minus":"\\f28d","clipboard-plus":"\\f28e","clipboard-x":"\\f28f",clipboard:"\\f290","clock-fill":"\\f291","clock-history":"\\f292",clock:"\\f293","cloud-arrow-down-fill":"\\f294","cloud-arrow-down":"\\f295","cloud-arrow-up-fill":"\\f296","cloud-arrow-up":"\\f297","cloud-check-fill":"\\f298","cloud-check":"\\f299","cloud-download-fill":"\\f29a","cloud-download":"\\f29b","cloud-drizzle-fill":"\\f29c","cloud-drizzle":"\\f29d","cloud-fill":"\\f29e","cloud-fog-fill":"\\f29f","cloud-fog":"\\f2a0","cloud-fog2-fill":"\\f2a1","cloud-fog2":"\\f2a2","cloud-hail-fill":"\\f2a3","cloud-hail":"\\f2a4","cloud-haze-fill":"\\f2a6","cloud-haze":"\\f2a7","cloud-haze2-fill":"\\f2a8","cloud-lightning-fill":"\\f2a9","cloud-lightning-rain-fill":"\\f2aa","cloud-lightning-rain":"\\f2ab","cloud-lightning":"\\f2ac","cloud-minus-fill":"\\f2ad","cloud-minus":"\\f2ae","cloud-moon-fill":"\\f2af","cloud-moon":"\\f2b0","cloud-plus-fill":"\\f2b1","cloud-plus":"\\f2b2","cloud-rain-fill":"\\f2b3","cloud-rain-heavy-fill":"\\f2b4","cloud-rain-heavy":"\\f2b5","cloud-rain":"\\f2b6","cloud-slash-fill":"\\f2b7","cloud-slash":"\\f2b8","cloud-sleet-fill":"\\f2b9","cloud-sleet":"\\f2ba","cloud-snow-fill":"\\f2bb","cloud-snow":"\\f2bc","cloud-sun-fill":"\\f2bd","cloud-sun":"\\f2be","cloud-upload-fill":"\\f2bf","cloud-upload":"\\f2c0",cloud:"\\f2c1","clouds-fill":"\\f2c2",clouds:"\\f2c3","cloudy-fill":"\\f2c4",cloudy:"\\f2c5","code-slash":"\\f2c6","code-square":"\\f2c7",code:"\\f2c8","collection-fill":"\\f2c9","collection-play-fill":"\\f2ca","collection-play":"\\f2cb",collection:"\\f2cc","columns-gap":"\\f2cd",columns:"\\f2ce",command:"\\f2cf","compass-fill":"\\f2d0",compass:"\\f2d1","cone-striped":"\\f2d2",cone:"\\f2d3",controller:"\\f2d4","cpu-fill":"\\f2d5",cpu:"\\f2d6","credit-card-2-back-fill":"\\f2d7","credit-card-2-back":"\\f2d8","credit-card-2-front-fill":"\\f2d9","credit-card-2-front":"\\f2da","credit-card-fill":"\\f2db","credit-card":"\\f2dc",crop:"\\f2dd","cup-fill":"\\f2de","cup-straw":"\\f2df",cup:"\\f2e0","cursor-fill":"\\f2e1","cursor-text":"\\f2e2",cursor:"\\f2e3","dash-circle-dotted":"\\f2e4","dash-circle-fill":"\\f2e5","dash-circle":"\\f2e6","dash-square-dotted":"\\f2e7","dash-square-fill":"\\f2e8","dash-square":"\\f2e9",dash:"\\f2ea","diagram-2-fill":"\\f2eb","diagram-2":"\\f2ec","diagram-3-fill":"\\f2ed","diagram-3":"\\f2ee","diamond-fill":"\\f2ef","diamond-half":"\\f2f0",diamond:"\\f2f1","dice-1-fill":"\\f2f2","dice-1":"\\f2f3","dice-2-fill":"\\f2f4","dice-2":"\\f2f5","dice-3-fill":"\\f2f6","dice-3":"\\f2f7","dice-4-fill":"\\f2f8","dice-4":"\\f2f9","dice-5-fill":"\\f2fa","dice-5":"\\f2fb","dice-6-fill":"\\f2fc","dice-6":"\\f2fd","disc-fill":"\\f2fe",disc:"\\f2ff",discord:"\\f300","display-fill":"\\f301",display:"\\f302","distribute-horizontal":"\\f303","distribute-vertical":"\\f304","door-closed-fill":"\\f305","door-closed":"\\f306","door-open-fill":"\\f307","door-open":"\\f308",dot:"\\f309",download:"\\f30a","droplet-fill":"\\f30b","droplet-half":"\\f30c",droplet:"\\f30d",earbuds:"\\f30e","easel-fill":"\\f30f",easel:"\\f310","egg-fill":"\\f311","egg-fried":"\\f312",egg:"\\f313","eject-fill":"\\f314",eject:"\\f315","emoji-angry-fill":"\\f316","emoji-angry":"\\f317","emoji-dizzy-fill":"\\f318","emoji-dizzy":"\\f319","emoji-expressionless-fill":"\\f31a","emoji-expressionless":"\\f31b","emoji-frown-fill":"\\f31c","emoji-frown":"\\f31d","emoji-heart-eyes-fill":"\\f31e","emoji-heart-eyes":"\\f31f","emoji-laughing-fill":"\\f320","emoji-laughing":"\\f321","emoji-neutral-fill":"\\f322","emoji-neutral":"\\f323","emoji-smile-fill":"\\f324","emoji-smile-upside-down-fill":"\\f325","emoji-smile-upside-down":"\\f326","emoji-smile":"\\f327","emoji-sunglasses-fill":"\\f328","emoji-sunglasses":"\\f329","emoji-wink-fill":"\\f32a","emoji-wink":"\\f32b","envelope-fill":"\\f32c","envelope-open-fill":"\\f32d","envelope-open":"\\f32e",envelope:"\\f32f","eraser-fill":"\\f330",eraser:"\\f331","exclamation-circle-fill":"\\f332","exclamation-circle":"\\f333","exclamation-diamond-fill":"\\f334","exclamation-diamond":"\\f335","exclamation-octagon-fill":"\\f336","exclamation-octagon":"\\f337","exclamation-square-fill":"\\f338","exclamation-square":"\\f339","exclamation-triangle-fill":"\\f33a","exclamation-triangle":"\\f33b",exclamation:"\\f33c",exclude:"\\f33d","eye-fill":"\\f33e","eye-slash-fill":"\\f33f","eye-slash":"\\f340",eye:"\\f341",eyedropper:"\\f342",eyeglasses:"\\f343",facebook:"\\f344","file-arrow-down-fill":"\\f345","file-arrow-down":"\\f346","file-arrow-up-fill":"\\f347","file-arrow-up":"\\f348","file-bar-graph-fill":"\\f349","file-bar-graph":"\\f34a","file-binary-fill":"\\f34b","file-binary":"\\f34c","file-break-fill":"\\f34d","file-break":"\\f34e","file-check-fill":"\\f34f","file-check":"\\f350","file-code-fill":"\\f351","file-code":"\\f352","file-diff-fill":"\\f353","file-diff":"\\f354","file-earmark-arrow-down-fill":"\\f355","file-earmark-arrow-down":"\\f356","file-earmark-arrow-up-fill":"\\f357","file-earmark-arrow-up":"\\f358","file-earmark-bar-graph-fill":"\\f359","file-earmark-bar-graph":"\\f35a","file-earmark-binary-fill":"\\f35b","file-earmark-binary":"\\f35c","file-earmark-break-fill":"\\f35d","file-earmark-break":"\\f35e","file-earmark-check-fill":"\\f35f","file-earmark-check":"\\f360","file-earmark-code-fill":"\\f361","file-earmark-code":"\\f362","file-earmark-diff-fill":"\\f363","file-earmark-diff":"\\f364","file-earmark-easel-fill":"\\f365","file-earmark-easel":"\\f366","file-earmark-excel-fill":"\\f367","file-earmark-excel":"\\f368","file-earmark-fill":"\\f369","file-earmark-font-fill":"\\f36a","file-earmark-font":"\\f36b","file-earmark-image-fill":"\\f36c","file-earmark-image":"\\f36d","file-earmark-lock-fill":"\\f36e","file-earmark-lock":"\\f36f","file-earmark-lock2-fill":"\\f370","file-earmark-lock2":"\\f371","file-earmark-medical-fill":"\\f372","file-earmark-medical":"\\f373","file-earmark-minus-fill":"\\f374","file-earmark-minus":"\\f375","file-earmark-music-fill":"\\f376","file-earmark-music":"\\f377","file-earmark-person-fill":"\\f378","file-earmark-person":"\\f379","file-earmark-play-fill":"\\f37a","file-earmark-play":"\\f37b","file-earmark-plus-fill":"\\f37c","file-earmark-plus":"\\f37d","file-earmark-post-fill":"\\f37e","file-earmark-post":"\\f37f","file-earmark-ppt-fill":"\\f380","file-earmark-ppt":"\\f381","file-earmark-richtext-fill":"\\f382","file-earmark-richtext":"\\f383","file-earmark-ruled-fill":"\\f384","file-earmark-ruled":"\\f385","file-earmark-slides-fill":"\\f386","file-earmark-slides":"\\f387","file-earmark-spreadsheet-fill":"\\f388","file-earmark-spreadsheet":"\\f389","file-earmark-text-fill":"\\f38a","file-earmark-text":"\\f38b","file-earmark-word-fill":"\\f38c","file-earmark-word":"\\f38d","file-earmark-x-fill":"\\f38e","file-earmark-x":"\\f38f","file-earmark-zip-fill":"\\f390","file-earmark-zip":"\\f391","file-earmark":"\\f392","file-easel-fill":"\\f393","file-easel":"\\f394","file-excel-fill":"\\f395","file-excel":"\\f396","file-fill":"\\f397","file-font-fill":"\\f398","file-font":"\\f399","file-image-fill":"\\f39a","file-image":"\\f39b","file-lock-fill":"\\f39c","file-lock":"\\f39d","file-lock2-fill":"\\f39e","file-lock2":"\\f39f","file-medical-fill":"\\f3a0","file-medical":"\\f3a1","file-minus-fill":"\\f3a2","file-minus":"\\f3a3","file-music-fill":"\\f3a4","file-music":"\\f3a5","file-person-fill":"\\f3a6","file-person":"\\f3a7","file-play-fill":"\\f3a8","file-play":"\\f3a9","file-plus-fill":"\\f3aa","file-plus":"\\f3ab","file-post-fill":"\\f3ac","file-post":"\\f3ad","file-ppt-fill":"\\f3ae","file-ppt":"\\f3af","file-richtext-fill":"\\f3b0","file-richtext":"\\f3b1","file-ruled-fill":"\\f3b2","file-ruled":"\\f3b3","file-slides-fill":"\\f3b4","file-slides":"\\f3b5","file-spreadsheet-fill":"\\f3b6","file-spreadsheet":"\\f3b7","file-text-fill":"\\f3b8","file-text":"\\f3b9","file-word-fill":"\\f3ba","file-word":"\\f3bb","file-x-fill":"\\f3bc","file-x":"\\f3bd","file-zip-fill":"\\f3be","file-zip":"\\f3bf",file:"\\f3c0","files-alt":"\\f3c1",files:"\\f3c2",film:"\\f3c3","filter-circle-fill":"\\f3c4","filter-circle":"\\f3c5","filter-left":"\\f3c6","filter-right":"\\f3c7","filter-square-fill":"\\f3c8","filter-square":"\\f3c9",filter:"\\f3ca","flag-fill":"\\f3cb",flag:"\\f3cc",flower1:"\\f3cd",flower2:"\\f3ce",flower3:"\\f3cf","folder-check":"\\f3d0","folder-fill":"\\f3d1","folder-minus":"\\f3d2","folder-plus":"\\f3d3","folder-symlink-fill":"\\f3d4","folder-symlink":"\\f3d5","folder-x":"\\f3d6",folder:"\\f3d7","folder2-open":"\\f3d8",folder2:"\\f3d9",fonts:"\\f3da","forward-fill":"\\f3db",forward:"\\f3dc",front:"\\f3dd","fullscreen-exit":"\\f3de",fullscreen:"\\f3df","funnel-fill":"\\f3e0",funnel:"\\f3e1","gear-fill":"\\f3e2","gear-wide-connected":"\\f3e3","gear-wide":"\\f3e4",gear:"\\f3e5",gem:"\\f3e6","geo-alt-fill":"\\f3e7","geo-alt":"\\f3e8","geo-fill":"\\f3e9",geo:"\\f3ea","gift-fill":"\\f3eb",gift:"\\f3ec",github:"\\f3ed",globe:"\\f3ee",globe2:"\\f3ef",google:"\\f3f0","graph-down":"\\f3f1","graph-up":"\\f3f2","grid-1x2-fill":"\\f3f3","grid-1x2":"\\f3f4","grid-3x2-gap-fill":"\\f3f5","grid-3x2-gap":"\\f3f6","grid-3x2":"\\f3f7","grid-3x3-gap-fill":"\\f3f8","grid-3x3-gap":"\\f3f9","grid-3x3":"\\f3fa","grid-fill":"\\f3fb",grid:"\\f3fc","grip-horizontal":"\\f3fd","grip-vertical":"\\f3fe",hammer:"\\f3ff","hand-index-fill":"\\f400","hand-index-thumb-fill":"\\f401","hand-index-thumb":"\\f402","hand-index":"\\f403","hand-thumbs-down-fill":"\\f404","hand-thumbs-down":"\\f405","hand-thumbs-up-fill":"\\f406","hand-thumbs-up":"\\f407","handbag-fill":"\\f408",handbag:"\\f409",hash:"\\f40a","hdd-fill":"\\f40b","hdd-network-fill":"\\f40c","hdd-network":"\\f40d","hdd-rack-fill":"\\f40e","hdd-rack":"\\f40f","hdd-stack-fill":"\\f410","hdd-stack":"\\f411",hdd:"\\f412",headphones:"\\f413",headset:"\\f414","heart-fill":"\\f415","heart-half":"\\f416",heart:"\\f417","heptagon-fill":"\\f418","heptagon-half":"\\f419",heptagon:"\\f41a","hexagon-fill":"\\f41b","hexagon-half":"\\f41c",hexagon:"\\f41d","hourglass-bottom":"\\f41e","hourglass-split":"\\f41f","hourglass-top":"\\f420",hourglass:"\\f421","house-door-fill":"\\f422","house-door":"\\f423","house-fill":"\\f424",house:"\\f425",hr:"\\f426",hurricane:"\\f427","image-alt":"\\f428","image-fill":"\\f429",image:"\\f42a",images:"\\f42b","inbox-fill":"\\f42c",inbox:"\\f42d","inboxes-fill":"\\f42e",inboxes:"\\f42f","info-circle-fill":"\\f430","info-circle":"\\f431","info-square-fill":"\\f432","info-square":"\\f433",info:"\\f434","input-cursor-text":"\\f435","input-cursor":"\\f436",instagram:"\\f437",intersect:"\\f438","journal-album":"\\f439","journal-arrow-down":"\\f43a","journal-arrow-up":"\\f43b","journal-bookmark-fill":"\\f43c","journal-bookmark":"\\f43d","journal-check":"\\f43e","journal-code":"\\f43f","journal-medical":"\\f440","journal-minus":"\\f441","journal-plus":"\\f442","journal-richtext":"\\f443","journal-text":"\\f444","journal-x":"\\f445",journal:"\\f446",journals:"\\f447",joystick:"\\f448","justify-left":"\\f449","justify-right":"\\f44a",justify:"\\f44b","kanban-fill":"\\f44c",kanban:"\\f44d","key-fill":"\\f44e",key:"\\f44f","keyboard-fill":"\\f450",keyboard:"\\f451",ladder:"\\f452","lamp-fill":"\\f453",lamp:"\\f454","laptop-fill":"\\f455",laptop:"\\f456","layer-backward":"\\f457","layer-forward":"\\f458","layers-fill":"\\f459","layers-half":"\\f45a",layers:"\\f45b","layout-sidebar-inset-reverse":"\\f45c","layout-sidebar-inset":"\\f45d","layout-sidebar-reverse":"\\f45e","layout-sidebar":"\\f45f","layout-split":"\\f460","layout-text-sidebar-reverse":"\\f461","layout-text-sidebar":"\\f462","layout-text-window-reverse":"\\f463","layout-text-window":"\\f464","layout-three-columns":"\\f465","layout-wtf":"\\f466","life-preserver":"\\f467","lightbulb-fill":"\\f468","lightbulb-off-fill":"\\f469","lightbulb-off":"\\f46a",lightbulb:"\\f46b","lightning-charge-fill":"\\f46c","lightning-charge":"\\f46d","lightning-fill":"\\f46e",lightning:"\\f46f","link-45deg":"\\f470",link:"\\f471",linkedin:"\\f472","list-check":"\\f473","list-nested":"\\f474","list-ol":"\\f475","list-stars":"\\f476","list-task":"\\f477","list-ul":"\\f478",list:"\\f479","lock-fill":"\\f47a",lock:"\\f47b",mailbox:"\\f47c",mailbox2:"\\f47d","map-fill":"\\f47e",map:"\\f47f","markdown-fill":"\\f480",markdown:"\\f481",mask:"\\f482","megaphone-fill":"\\f483",megaphone:"\\f484","menu-app-fill":"\\f485","menu-app":"\\f486","menu-button-fill":"\\f487","menu-button-wide-fill":"\\f488","menu-button-wide":"\\f489","menu-button":"\\f48a","menu-down":"\\f48b","menu-up":"\\f48c","mic-fill":"\\f48d","mic-mute-fill":"\\f48e","mic-mute":"\\f48f",mic:"\\f490","minecart-loaded":"\\f491",minecart:"\\f492",moisture:"\\f493","moon-fill":"\\f494","moon-stars-fill":"\\f495","moon-stars":"\\f496",moon:"\\f497","mouse-fill":"\\f498",mouse:"\\f499","mouse2-fill":"\\f49a",mouse2:"\\f49b","mouse3-fill":"\\f49c",mouse3:"\\f49d","music-note-beamed":"\\f49e","music-note-list":"\\f49f","music-note":"\\f4a0","music-player-fill":"\\f4a1","music-player":"\\f4a2",newspaper:"\\f4a3","node-minus-fill":"\\f4a4","node-minus":"\\f4a5","node-plus-fill":"\\f4a6","node-plus":"\\f4a7","nut-fill":"\\f4a8",nut:"\\f4a9","octagon-fill":"\\f4aa","octagon-half":"\\f4ab",octagon:"\\f4ac",option:"\\f4ad",outlet:"\\f4ae","paint-bucket":"\\f4af","palette-fill":"\\f4b0",palette:"\\f4b1",palette2:"\\f4b2",paperclip:"\\f4b3",paragraph:"\\f4b4","patch-check-fill":"\\f4b5","patch-check":"\\f4b6","patch-exclamation-fill":"\\f4b7","patch-exclamation":"\\f4b8","patch-minus-fill":"\\f4b9","patch-minus":"\\f4ba","patch-plus-fill":"\\f4bb","patch-plus":"\\f4bc","patch-question-fill":"\\f4bd","patch-question":"\\f4be","pause-btn-fill":"\\f4bf","pause-btn":"\\f4c0","pause-circle-fill":"\\f4c1","pause-circle":"\\f4c2","pause-fill":"\\f4c3",pause:"\\f4c4","peace-fill":"\\f4c5",peace:"\\f4c6","pen-fill":"\\f4c7",pen:"\\f4c8","pencil-fill":"\\f4c9","pencil-square":"\\f4ca",pencil:"\\f4cb","pentagon-fill":"\\f4cc","pentagon-half":"\\f4cd",pentagon:"\\f4ce","people-fill":"\\f4cf",people:"\\f4d0",percent:"\\f4d1","person-badge-fill":"\\f4d2","person-badge":"\\f4d3","person-bounding-box":"\\f4d4","person-check-fill":"\\f4d5","person-check":"\\f4d6","person-circle":"\\f4d7","person-dash-fill":"\\f4d8","person-dash":"\\f4d9","person-fill":"\\f4da","person-lines-fill":"\\f4db","person-plus-fill":"\\f4dc","person-plus":"\\f4dd","person-square":"\\f4de","person-x-fill":"\\f4df","person-x":"\\f4e0",person:"\\f4e1","phone-fill":"\\f4e2","phone-landscape-fill":"\\f4e3","phone-landscape":"\\f4e4","phone-vibrate-fill":"\\f4e5","phone-vibrate":"\\f4e6",phone:"\\f4e7","pie-chart-fill":"\\f4e8","pie-chart":"\\f4e9","pin-angle-fill":"\\f4ea","pin-angle":"\\f4eb","pin-fill":"\\f4ec",pin:"\\f4ed","pip-fill":"\\f4ee",pip:"\\f4ef","play-btn-fill":"\\f4f0","play-btn":"\\f4f1","play-circle-fill":"\\f4f2","play-circle":"\\f4f3","play-fill":"\\f4f4",play:"\\f4f5","plug-fill":"\\f4f6",plug:"\\f4f7","plus-circle-dotted":"\\f4f8","plus-circle-fill":"\\f4f9","plus-circle":"\\f4fa","plus-square-dotted":"\\f4fb","plus-square-fill":"\\f4fc","plus-square":"\\f4fd",plus:"\\f4fe",power:"\\f4ff","printer-fill":"\\f500",printer:"\\f501","puzzle-fill":"\\f502",puzzle:"\\f503","question-circle-fill":"\\f504","question-circle":"\\f505","question-diamond-fill":"\\f506","question-diamond":"\\f507","question-octagon-fill":"\\f508","question-octagon":"\\f509","question-square-fill":"\\f50a","question-square":"\\f50b",question:"\\f50c",rainbow:"\\f50d","receipt-cutoff":"\\f50e",receipt:"\\f50f","reception-0":"\\f510","reception-1":"\\f511","reception-2":"\\f512","reception-3":"\\f513","reception-4":"\\f514","record-btn-fill":"\\f515","record-btn":"\\f516","record-circle-fill":"\\f517","record-circle":"\\f518","record-fill":"\\f519",record:"\\f51a","record2-fill":"\\f51b",record2:"\\f51c","reply-all-fill":"\\f51d","reply-all":"\\f51e","reply-fill":"\\f51f",reply:"\\f520","rss-fill":"\\f521",rss:"\\f522",rulers:"\\f523","save-fill":"\\f524",save:"\\f525","save2-fill":"\\f526",save2:"\\f527",scissors:"\\f528",screwdriver:"\\f529",search:"\\f52a","segmented-nav":"\\f52b",server:"\\f52c","share-fill":"\\f52d",share:"\\f52e","shield-check":"\\f52f","shield-exclamation":"\\f530","shield-fill-check":"\\f531","shield-fill-exclamation":"\\f532","shield-fill-minus":"\\f533","shield-fill-plus":"\\f534","shield-fill-x":"\\f535","shield-fill":"\\f536","shield-lock-fill":"\\f537","shield-lock":"\\f538","shield-minus":"\\f539","shield-plus":"\\f53a","shield-shaded":"\\f53b","shield-slash-fill":"\\f53c","shield-slash":"\\f53d","shield-x":"\\f53e",shield:"\\f53f","shift-fill":"\\f540",shift:"\\f541","shop-window":"\\f542",shop:"\\f543",shuffle:"\\f544","signpost-2-fill":"\\f545","signpost-2":"\\f546","signpost-fill":"\\f547","signpost-split-fill":"\\f548","signpost-split":"\\f549",signpost:"\\f54a","sim-fill":"\\f54b",sim:"\\f54c","skip-backward-btn-fill":"\\f54d","skip-backward-btn":"\\f54e","skip-backward-circle-fill":"\\f54f","skip-backward-circle":"\\f550","skip-backward-fill":"\\f551","skip-backward":"\\f552","skip-end-btn-fill":"\\f553","skip-end-btn":"\\f554","skip-end-circle-fill":"\\f555","skip-end-circle":"\\f556","skip-end-fill":"\\f557","skip-end":"\\f558","skip-forward-btn-fill":"\\f559","skip-forward-btn":"\\f55a","skip-forward-circle-fill":"\\f55b","skip-forward-circle":"\\f55c","skip-forward-fill":"\\f55d","skip-forward":"\\f55e","skip-start-btn-fill":"\\f55f","skip-start-btn":"\\f560","skip-start-circle-fill":"\\f561","skip-start-circle":"\\f562","skip-start-fill":"\\f563","skip-start":"\\f564",slack:"\\f565","slash-circle-fill":"\\f566","slash-circle":"\\f567","slash-square-fill":"\\f568","slash-square":"\\f569",slash:"\\f56a",sliders:"\\f56b",smartwatch:"\\f56c",snow:"\\f56d",snow2:"\\f56e",snow3:"\\f56f","sort-alpha-down-alt":"\\f570","sort-alpha-down":"\\f571","sort-alpha-up-alt":"\\f572","sort-alpha-up":"\\f573","sort-down-alt":"\\f574","sort-down":"\\f575","sort-numeric-down-alt":"\\f576","sort-numeric-down":"\\f577","sort-numeric-up-alt":"\\f578","sort-numeric-up":"\\f579","sort-up-alt":"\\f57a","sort-up":"\\f57b",soundwave:"\\f57c","speaker-fill":"\\f57d",speaker:"\\f57e",speedometer:"\\f57f",speedometer2:"\\f580",spellcheck:"\\f581","square-fill":"\\f582","square-half":"\\f583",square:"\\f584",stack:"\\f585","star-fill":"\\f586","star-half":"\\f587",star:"\\f588",stars:"\\f589","stickies-fill":"\\f58a",stickies:"\\f58b","sticky-fill":"\\f58c",sticky:"\\f58d","stop-btn-fill":"\\f58e","stop-btn":"\\f58f","stop-circle-fill":"\\f590","stop-circle":"\\f591","stop-fill":"\\f592",stop:"\\f593","stoplights-fill":"\\f594",stoplights:"\\f595","stopwatch-fill":"\\f596",stopwatch:"\\f597",subtract:"\\f598","suit-club-fill":"\\f599","suit-club":"\\f59a","suit-diamond-fill":"\\f59b","suit-diamond":"\\f59c","suit-heart-fill":"\\f59d","suit-heart":"\\f59e","suit-spade-fill":"\\f59f","suit-spade":"\\f5a0","sun-fill":"\\f5a1",sun:"\\f5a2",sunglasses:"\\f5a3","sunrise-fill":"\\f5a4",sunrise:"\\f5a5","sunset-fill":"\\f5a6",sunset:"\\f5a7","symmetry-horizontal":"\\f5a8","symmetry-vertical":"\\f5a9",table:"\\f5aa","tablet-fill":"\\f5ab","tablet-landscape-fill":"\\f5ac","tablet-landscape":"\\f5ad",tablet:"\\f5ae","tag-fill":"\\f5af",tag:"\\f5b0","tags-fill":"\\f5b1",tags:"\\f5b2",telegram:"\\f5b3","telephone-fill":"\\f5b4","telephone-forward-fill":"\\f5b5","telephone-forward":"\\f5b6","telephone-inbound-fill":"\\f5b7","telephone-inbound":"\\f5b8","telephone-minus-fill":"\\f5b9","telephone-minus":"\\f5ba","telephone-outbound-fill":"\\f5bb","telephone-outbound":"\\f5bc","telephone-plus-fill":"\\f5bd","telephone-plus":"\\f5be","telephone-x-fill":"\\f5bf","telephone-x":"\\f5c0",telephone:"\\f5c1","terminal-fill":"\\f5c2",terminal:"\\f5c3","text-center":"\\f5c4","text-indent-left":"\\f5c5","text-indent-right":"\\f5c6","text-left":"\\f5c7","text-paragraph":"\\f5c8","text-right":"\\f5c9","textarea-resize":"\\f5ca","textarea-t":"\\f5cb",textarea:"\\f5cc","thermometer-half":"\\f5cd","thermometer-high":"\\f5ce","thermometer-low":"\\f5cf","thermometer-snow":"\\f5d0","thermometer-sun":"\\f5d1",thermometer:"\\f5d2","three-dots-vertical":"\\f5d3","three-dots":"\\f5d4","toggle-off":"\\f5d5","toggle-on":"\\f5d6","toggle2-off":"\\f5d7","toggle2-on":"\\f5d8",toggles:"\\f5d9",toggles2:"\\f5da",tools:"\\f5db",tornado:"\\f5dc","trash-fill":"\\f5dd",trash:"\\f5de","trash2-fill":"\\f5df",trash2:"\\f5e0","tree-fill":"\\f5e1",tree:"\\f5e2","triangle-fill":"\\f5e3","triangle-half":"\\f5e4",triangle:"\\f5e5","trophy-fill":"\\f5e6",trophy:"\\f5e7","tropical-storm":"\\f5e8","truck-flatbed":"\\f5e9",truck:"\\f5ea",tsunami:"\\f5eb","tv-fill":"\\f5ec",tv:"\\f5ed",twitch:"\\f5ee",twitter:"\\f5ef","type-bold":"\\f5f0","type-h1":"\\f5f1","type-h2":"\\f5f2","type-h3":"\\f5f3","type-italic":"\\f5f4","type-strikethrough":"\\f5f5","type-underline":"\\f5f6",type:"\\f5f7","ui-checks-grid":"\\f5f8","ui-checks":"\\f5f9","ui-radios-grid":"\\f5fa","ui-radios":"\\f5fb","umbrella-fill":"\\f5fc",umbrella:"\\f5fd",union:"\\f5fe","unlock-fill":"\\f5ff",unlock:"\\f600","upc-scan":"\\f601",upc:"\\f602",upload:"\\f603","vector-pen":"\\f604","view-list":"\\f605","view-stacked":"\\f606","vinyl-fill":"\\f607",vinyl:"\\f608",voicemail:"\\f609","volume-down-fill":"\\f60a","volume-down":"\\f60b","volume-mute-fill":"\\f60c","volume-mute":"\\f60d","volume-off-fill":"\\f60e","volume-off":"\\f60f","volume-up-fill":"\\f610","volume-up":"\\f611",vr:"\\f612","wallet-fill":"\\f613",wallet:"\\f614",wallet2:"\\f615",watch:"\\f616",water:"\\f617",whatsapp:"\\f618","wifi-1":"\\f619","wifi-2":"\\f61a","wifi-off":"\\f61b",wifi:"\\f61c",wind:"\\f61d","window-dock":"\\f61e","window-sidebar":"\\f61f",window:"\\f620",wrench:"\\f621","x-circle-fill":"\\f622","x-circle":"\\f623","x-diamond-fill":"\\f624","x-diamond":"\\f625","x-octagon-fill":"\\f626","x-octagon":"\\f627","x-square-fill":"\\f628","x-square":"\\f629",x:"\\f62a",youtube:"\\f62b","zoom-in":"\\f62c","zoom-out":"\\f62d",bank:"\\f62e",bank2:"\\f62f","bell-slash-fill":"\\f630","bell-slash":"\\f631","cash-coin":"\\f632","check-lg":"\\f633",coin:"\\f634","currency-bitcoin":"\\f635","currency-dollar":"\\f636","currency-euro":"\\f637","currency-exchange":"\\f638","currency-pound":"\\f639","currency-yen":"\\f63a","dash-lg":"\\f63b","exclamation-lg":"\\f63c","file-earmark-pdf-fill":"\\f63d","file-earmark-pdf":"\\f63e","file-pdf-fill":"\\f63f","file-pdf":"\\f640","gender-ambiguous":"\\f641","gender-female":"\\f642","gender-male":"\\f643","gender-trans":"\\f644","headset-vr":"\\f645","info-lg":"\\f646",mastodon:"\\f647",messenger:"\\f648","piggy-bank-fill":"\\f649","piggy-bank":"\\f64a","pin-map-fill":"\\f64b","pin-map":"\\f64c","plus-lg":"\\f64d","question-lg":"\\f64e",recycle:"\\f64f",reddit:"\\f650","safe-fill":"\\f651","safe2-fill":"\\f652",safe2:"\\f653","sd-card-fill":"\\f654","sd-card":"\\f655",skype:"\\f656","slash-lg":"\\f657",translate:"\\f658","x-lg":"\\f659",safe:"\\f65a",apple:"\\f65b",microsoft:"\\f65d",windows:"\\f65e",behance:"\\f65c",dribbble:"\\f65f",line:"\\f660",medium:"\\f661",paypal:"\\f662",pinterest:"\\f663",signal:"\\f664",snapchat:"\\f665",spotify:"\\f666","stack-overflow":"\\f667",strava:"\\f668",wordpress:"\\f669",vimeo:"\\f66a",activity:"\\f66b","easel2-fill":"\\f66c",easel2:"\\f66d","easel3-fill":"\\f66e",easel3:"\\f66f",fan:"\\f670",fingerprint:"\\f671","graph-down-arrow":"\\f672","graph-up-arrow":"\\f673",hypnotize:"\\f674",magic:"\\f675","person-rolodex":"\\f676","person-video":"\\f677","person-video2":"\\f678","person-video3":"\\f679","person-workspace":"\\f67a",radioactive:"\\f67b","webcam-fill":"\\f67c",webcam:"\\f67d","yin-yang":"\\f67e","bandaid-fill":"\\f680",bandaid:"\\f681",bluetooth:"\\f682","body-text":"\\f683",boombox:"\\f684",boxes:"\\f685","dpad-fill":"\\f686",dpad:"\\f687","ear-fill":"\\f688",ear:"\\f689","envelope-check-fill":"\\f68b","envelope-check":"\\f68c","envelope-dash-fill":"\\f68e","envelope-dash":"\\f68f","envelope-exclamation-fill":"\\f691","envelope-exclamation":"\\f692","envelope-plus-fill":"\\f693","envelope-plus":"\\f694","envelope-slash-fill":"\\f696","envelope-slash":"\\f697","envelope-x-fill":"\\f699","envelope-x":"\\f69a","explicit-fill":"\\f69b",explicit:"\\f69c",git:"\\f69d",infinity:"\\f69e","list-columns-reverse":"\\f69f","list-columns":"\\f6a0",meta:"\\f6a1","nintendo-switch":"\\f6a4","pc-display-horizontal":"\\f6a5","pc-display":"\\f6a6","pc-horizontal":"\\f6a7",pc:"\\f6a8",playstation:"\\f6a9","plus-slash-minus":"\\f6aa","projector-fill":"\\f6ab",projector:"\\f6ac","qr-code-scan":"\\f6ad","qr-code":"\\f6ae",quora:"\\f6af",quote:"\\f6b0",robot:"\\f6b1","send-check-fill":"\\f6b2","send-check":"\\f6b3","send-dash-fill":"\\f6b4","send-dash":"\\f6b5","send-exclamation-fill":"\\f6b7","send-exclamation":"\\f6b8","send-fill":"\\f6b9","send-plus-fill":"\\f6ba","send-plus":"\\f6bb","send-slash-fill":"\\f6bc","send-slash":"\\f6bd","send-x-fill":"\\f6be","send-x":"\\f6bf",send:"\\f6c0",steam:"\\f6c1","terminal-dash":"\\f6c3","terminal-plus":"\\f6c4","terminal-split":"\\f6c5","ticket-detailed-fill":"\\f6c6","ticket-detailed":"\\f6c7","ticket-fill":"\\f6c8","ticket-perforated-fill":"\\f6c9","ticket-perforated":"\\f6ca",ticket:"\\f6cb",tiktok:"\\f6cc","window-dash":"\\f6cd","window-desktop":"\\f6ce","window-fullscreen":"\\f6cf","window-plus":"\\f6d0","window-split":"\\f6d1","window-stack":"\\f6d2","window-x":"\\f6d3",xbox:"\\f6d4",ethernet:"\\f6d5","hdmi-fill":"\\f6d6",hdmi:"\\f6d7","usb-c-fill":"\\f6d8","usb-c":"\\f6d9","usb-fill":"\\f6da","usb-plug-fill":"\\f6db","usb-plug":"\\f6dc","usb-symbol":"\\f6dd",usb:"\\f6de","boombox-fill":"\\f6df",displayport:"\\f6e1","gpu-card":"\\f6e2",memory:"\\f6e3","modem-fill":"\\f6e4",modem:"\\f6e5","motherboard-fill":"\\f6e6",motherboard:"\\f6e7","optical-audio-fill":"\\f6e8","optical-audio":"\\f6e9","pci-card":"\\f6ea","router-fill":"\\f6eb",router:"\\f6ec","thunderbolt-fill":"\\f6ef",thunderbolt:"\\f6f0","usb-drive-fill":"\\f6f1","usb-drive":"\\f6f2","usb-micro-fill":"\\f6f3","usb-micro":"\\f6f4","usb-mini-fill":"\\f6f5","usb-mini":"\\f6f6","cloud-haze2":"\\f6f7","device-hdd-fill":"\\f6f8","device-hdd":"\\f6f9","device-ssd-fill":"\\f6fa","device-ssd":"\\f6fb","displayport-fill":"\\f6fc","mortarboard-fill":"\\f6fd",mortarboard:"\\f6fe","terminal-x":"\\f6ff","arrow-through-heart-fill":"\\f700","arrow-through-heart":"\\f701","badge-sd-fill":"\\f702","badge-sd":"\\f703","bag-heart-fill":"\\f704","bag-heart":"\\f705","balloon-fill":"\\f706","balloon-heart-fill":"\\f707","balloon-heart":"\\f708",balloon:"\\f709","box2-fill":"\\f70a","box2-heart-fill":"\\f70b","box2-heart":"\\f70c",box2:"\\f70d","braces-asterisk":"\\f70e","calendar-heart-fill":"\\f70f","calendar-heart":"\\f710","calendar2-heart-fill":"\\f711","calendar2-heart":"\\f712","chat-heart-fill":"\\f713","chat-heart":"\\f714","chat-left-heart-fill":"\\f715","chat-left-heart":"\\f716","chat-right-heart-fill":"\\f717","chat-right-heart":"\\f718","chat-square-heart-fill":"\\f719","chat-square-heart":"\\f71a","clipboard-check-fill":"\\f71b","clipboard-data-fill":"\\f71c","clipboard-fill":"\\f71d","clipboard-heart-fill":"\\f71e","clipboard-heart":"\\f71f","clipboard-minus-fill":"\\f720","clipboard-plus-fill":"\\f721","clipboard-pulse":"\\f722","clipboard-x-fill":"\\f723","clipboard2-check-fill":"\\f724","clipboard2-check":"\\f725","clipboard2-data-fill":"\\f726","clipboard2-data":"\\f727","clipboard2-fill":"\\f728","clipboard2-heart-fill":"\\f729","clipboard2-heart":"\\f72a","clipboard2-minus-fill":"\\f72b","clipboard2-minus":"\\f72c","clipboard2-plus-fill":"\\f72d","clipboard2-plus":"\\f72e","clipboard2-pulse-fill":"\\f72f","clipboard2-pulse":"\\f730","clipboard2-x-fill":"\\f731","clipboard2-x":"\\f732",clipboard2:"\\f733","emoji-kiss-fill":"\\f734","emoji-kiss":"\\f735","envelope-heart-fill":"\\f736","envelope-heart":"\\f737","envelope-open-heart-fill":"\\f738","envelope-open-heart":"\\f739","envelope-paper-fill":"\\f73a","envelope-paper-heart-fill":"\\f73b","envelope-paper-heart":"\\f73c","envelope-paper":"\\f73d","filetype-aac":"\\f73e","filetype-ai":"\\f73f","filetype-bmp":"\\f740","filetype-cs":"\\f741","filetype-css":"\\f742","filetype-csv":"\\f743","filetype-doc":"\\f744","filetype-docx":"\\f745","filetype-exe":"\\f746","filetype-gif":"\\f747","filetype-heic":"\\f748","filetype-html":"\\f749","filetype-java":"\\f74a","filetype-jpg":"\\f74b","filetype-js":"\\f74c","filetype-jsx":"\\f74d","filetype-key":"\\f74e","filetype-m4p":"\\f74f","filetype-md":"\\f750","filetype-mdx":"\\f751","filetype-mov":"\\f752","filetype-mp3":"\\f753","filetype-mp4":"\\f754","filetype-otf":"\\f755","filetype-pdf":"\\f756","filetype-php":"\\f757","filetype-png":"\\f758","filetype-ppt":"\\f75a","filetype-psd":"\\f75b","filetype-py":"\\f75c","filetype-raw":"\\f75d","filetype-rb":"\\f75e","filetype-sass":"\\f75f","filetype-scss":"\\f760","filetype-sh":"\\f761","filetype-svg":"\\f762","filetype-tiff":"\\f763","filetype-tsx":"\\f764","filetype-ttf":"\\f765","filetype-txt":"\\f766","filetype-wav":"\\f767","filetype-woff":"\\f768","filetype-xls":"\\f76a","filetype-xml":"\\f76b","filetype-yml":"\\f76c","heart-arrow":"\\f76d","heart-pulse-fill":"\\f76e","heart-pulse":"\\f76f","heartbreak-fill":"\\f770",heartbreak:"\\f771",hearts:"\\f772","hospital-fill":"\\f773",hospital:"\\f774","house-heart-fill":"\\f775","house-heart":"\\f776",incognito:"\\f777","magnet-fill":"\\f778",magnet:"\\f779","person-heart":"\\f77a","person-hearts":"\\f77b","phone-flip":"\\f77c",plugin:"\\f77d","postage-fill":"\\f77e","postage-heart-fill":"\\f77f","postage-heart":"\\f780",postage:"\\f781","postcard-fill":"\\f782","postcard-heart-fill":"\\f783","postcard-heart":"\\f784",postcard:"\\f785","search-heart-fill":"\\f786","search-heart":"\\f787","sliders2-vertical":"\\f788",sliders2:"\\f789","trash3-fill":"\\f78a",trash3:"\\f78b",valentine:"\\f78c",valentine2:"\\f78d","wrench-adjustable-circle-fill":"\\f78e","wrench-adjustable-circle":"\\f78f","wrench-adjustable":"\\f790","filetype-json":"\\f791","filetype-pptx":"\\f792","filetype-xlsx":"\\f793","1-circle-fill":"\\f796","1-circle":"\\f797","1-square-fill":"\\f798","1-square":"\\f799","2-circle-fill":"\\f79c","2-circle":"\\f79d","2-square-fill":"\\f79e","2-square":"\\f79f","3-circle-fill":"\\f7a2","3-circle":"\\f7a3","3-square-fill":"\\f7a4","3-square":"\\f7a5","4-circle-fill":"\\f7a8","4-circle":"\\f7a9","4-square-fill":"\\f7aa","4-square":"\\f7ab","5-circle-fill":"\\f7ae","5-circle":"\\f7af","5-square-fill":"\\f7b0","5-square":"\\f7b1","6-circle-fill":"\\f7b4","6-circle":"\\f7b5","6-square-fill":"\\f7b6","6-square":"\\f7b7","7-circle-fill":"\\f7ba","7-circle":"\\f7bb","7-square-fill":"\\f7bc","7-square":"\\f7bd","8-circle-fill":"\\f7c0","8-circle":"\\f7c1","8-square-fill":"\\f7c2","8-square":"\\f7c3","9-circle-fill":"\\f7c6","9-circle":"\\f7c7","9-square-fill":"\\f7c8","9-square":"\\f7c9","airplane-engines-fill":"\\f7ca","airplane-engines":"\\f7cb","airplane-fill":"\\f7cc",airplane:"\\f7cd",alexa:"\\f7ce",alipay:"\\f7cf",android:"\\f7d0",android2:"\\f7d1","box-fill":"\\f7d2","box-seam-fill":"\\f7d3","browser-chrome":"\\f7d4","browser-edge":"\\f7d5","browser-firefox":"\\f7d6","browser-safari":"\\f7d7","c-circle-fill":"\\f7da","c-circle":"\\f7db","c-square-fill":"\\f7dc","c-square":"\\f7dd","capsule-pill":"\\f7de",capsule:"\\f7df","car-front-fill":"\\f7e0","car-front":"\\f7e1","cassette-fill":"\\f7e2",cassette:"\\f7e3","cc-circle-fill":"\\f7e6","cc-circle":"\\f7e7","cc-square-fill":"\\f7e8","cc-square":"\\f7e9","cup-hot-fill":"\\f7ea","cup-hot":"\\f7eb","currency-rupee":"\\f7ec",dropbox:"\\f7ed",escape:"\\f7ee","fast-forward-btn-fill":"\\f7ef","fast-forward-btn":"\\f7f0","fast-forward-circle-fill":"\\f7f1","fast-forward-circle":"\\f7f2","fast-forward-fill":"\\f7f3","fast-forward":"\\f7f4","filetype-sql":"\\f7f5",fire:"\\f7f6","google-play":"\\f7f7","h-circle-fill":"\\f7fa","h-circle":"\\f7fb","h-square-fill":"\\f7fc","h-square":"\\f7fd",indent:"\\f7fe","lungs-fill":"\\f7ff",lungs:"\\f800","microsoft-teams":"\\f801","p-circle-fill":"\\f804","p-circle":"\\f805","p-square-fill":"\\f806","p-square":"\\f807","pass-fill":"\\f808",pass:"\\f809",prescription:"\\f80a",prescription2:"\\f80b","r-circle-fill":"\\f80e","r-circle":"\\f80f","r-square-fill":"\\f810","r-square":"\\f811","repeat-1":"\\f812",repeat:"\\f813","rewind-btn-fill":"\\f814","rewind-btn":"\\f815","rewind-circle-fill":"\\f816","rewind-circle":"\\f817","rewind-fill":"\\f818",rewind:"\\f819","train-freight-front-fill":"\\f81a","train-freight-front":"\\f81b","train-front-fill":"\\f81c","train-front":"\\f81d","train-lightrail-front-fill":"\\f81e","train-lightrail-front":"\\f81f","truck-front-fill":"\\f820","truck-front":"\\f821",ubuntu:"\\f822",unindent:"\\f823",unity:"\\f824","universal-access-circle":"\\f825","universal-access":"\\f826",virus:"\\f827",virus2:"\\f828",wechat:"\\f829",yelp:"\\f82a","sign-stop-fill":"\\f82b","sign-stop-lights-fill":"\\f82c","sign-stop-lights":"\\f82d","sign-stop":"\\f82e","sign-turn-left-fill":"\\f82f","sign-turn-left":"\\f830","sign-turn-right-fill":"\\f831","sign-turn-right":"\\f832","sign-turn-slight-left-fill":"\\f833","sign-turn-slight-left":"\\f834","sign-turn-slight-right-fill":"\\f835","sign-turn-slight-right":"\\f836","sign-yield-fill":"\\f837","sign-yield":"\\f838","ev-station-fill":"\\f839","ev-station":"\\f83a","fuel-pump-diesel-fill":"\\f83b","fuel-pump-diesel":"\\f83c","fuel-pump-fill":"\\f83d","fuel-pump":"\\f83e","0-circle-fill":"\\f83f","0-circle":"\\f840","0-square-fill":"\\f841","0-square":"\\f842","rocket-fill":"\\f843","rocket-takeoff-fill":"\\f844","rocket-takeoff":"\\f845",rocket:"\\f846",stripe:"\\f847",subscript:"\\f848",superscript:"\\f849",trello:"\\f84a","envelope-at-fill":"\\f84b","envelope-at":"\\f84c",regex:"\\f84d","text-wrap":"\\f84e","sign-dead-end-fill":"\\f84f","sign-dead-end":"\\f850","sign-do-not-enter-fill":"\\f851","sign-do-not-enter":"\\f852","sign-intersection-fill":"\\f853","sign-intersection-side-fill":"\\f854","sign-intersection-side":"\\f855","sign-intersection-t-fill":"\\f856","sign-intersection-t":"\\f857","sign-intersection-y-fill":"\\f858","sign-intersection-y":"\\f859","sign-intersection":"\\f85a","sign-merge-left-fill":"\\f85b","sign-merge-left":"\\f85c","sign-merge-right-fill":"\\f85d","sign-merge-right":"\\f85e","sign-no-left-turn-fill":"\\f85f","sign-no-left-turn":"\\f860","sign-no-parking-fill":"\\f861","sign-no-parking":"\\f862","sign-no-right-turn-fill":"\\f863","sign-no-right-turn":"\\f864","sign-railroad-fill":"\\f865","sign-railroad":"\\f866","building-add":"\\f867","building-check":"\\f868","building-dash":"\\f869","building-down":"\\f86a","building-exclamation":"\\f86b","building-fill-add":"\\f86c","building-fill-check":"\\f86d","building-fill-dash":"\\f86e","building-fill-down":"\\f86f","building-fill-exclamation":"\\f870","building-fill-gear":"\\f871","building-fill-lock":"\\f872","building-fill-slash":"\\f873","building-fill-up":"\\f874","building-fill-x":"\\f875","building-fill":"\\f876","building-gear":"\\f877","building-lock":"\\f878","building-slash":"\\f879","building-up":"\\f87a","building-x":"\\f87b","buildings-fill":"\\f87c",buildings:"\\f87d","bus-front-fill":"\\f87e","bus-front":"\\f87f","ev-front-fill":"\\f880","ev-front":"\\f881","globe-americas":"\\f882","globe-asia-australia":"\\f883","globe-central-south-asia":"\\f884","globe-europe-africa":"\\f885","house-add-fill":"\\f886","house-add":"\\f887","house-check-fill":"\\f888","house-check":"\\f889","house-dash-fill":"\\f88a","house-dash":"\\f88b","house-down-fill":"\\f88c","house-down":"\\f88d","house-exclamation-fill":"\\f88e","house-exclamation":"\\f88f","house-gear-fill":"\\f890","house-gear":"\\f891","house-lock-fill":"\\f892","house-lock":"\\f893","house-slash-fill":"\\f894","house-slash":"\\f895","house-up-fill":"\\f896","house-up":"\\f897","house-x-fill":"\\f898","house-x":"\\f899","person-add":"\\f89a","person-down":"\\f89b","person-exclamation":"\\f89c","person-fill-add":"\\f89d","person-fill-check":"\\f89e","person-fill-dash":"\\f89f","person-fill-down":"\\f8a0","person-fill-exclamation":"\\f8a1","person-fill-gear":"\\f8a2","person-fill-lock":"\\f8a3","person-fill-slash":"\\f8a4","person-fill-up":"\\f8a5","person-fill-x":"\\f8a6","person-gear":"\\f8a7","person-lock":"\\f8a8","person-slash":"\\f8a9","person-up":"\\f8aa",scooter:"\\f8ab","taxi-front-fill":"\\f8ac","taxi-front":"\\f8ad",amd:"\\f8ae","database-add":"\\f8af","database-check":"\\f8b0","database-dash":"\\f8b1","database-down":"\\f8b2","database-exclamation":"\\f8b3","database-fill-add":"\\f8b4","database-fill-check":"\\f8b5","database-fill-dash":"\\f8b6","database-fill-down":"\\f8b7","database-fill-exclamation":"\\f8b8","database-fill-gear":"\\f8b9","database-fill-lock":"\\f8ba","database-fill-slash":"\\f8bb","database-fill-up":"\\f8bc","database-fill-x":"\\f8bd","database-fill":"\\f8be","database-gear":"\\f8bf","database-lock":"\\f8c0","database-slash":"\\f8c1","database-up":"\\f8c2","database-x":"\\f8c3",database:"\\f8c4","houses-fill":"\\f8c5",houses:"\\f8c6",nvidia:"\\f8c7","person-vcard-fill":"\\f8c8","person-vcard":"\\f8c9","sina-weibo":"\\f8ca","tencent-qq":"\\f8cb",wikipedia:"\\f8cc","alphabet-uppercase":"\\f2a5",alphabet:"\\f68a",amazon:"\\f68d","arrows-collapse-vertical":"\\f690","arrows-expand-vertical":"\\f695","arrows-vertical":"\\f698",arrows:"\\f6a2","ban-fill":"\\f6a3",ban:"\\f6b6",bing:"\\f6c2",cake:"\\f6e0",cake2:"\\f6ed",cookie:"\\f6ee",copy:"\\f759",crosshair:"\\f769",crosshair2:"\\f794","emoji-astonished-fill":"\\f795","emoji-astonished":"\\f79a","emoji-grimace-fill":"\\f79b","emoji-grimace":"\\f7a0","emoji-grin-fill":"\\f7a1","emoji-grin":"\\f7a6","emoji-surprise-fill":"\\f7a7","emoji-surprise":"\\f7ac","emoji-tear-fill":"\\f7ad","emoji-tear":"\\f7b2","envelope-arrow-down-fill":"\\f7b3","envelope-arrow-down":"\\f7b8","envelope-arrow-up-fill":"\\f7b9","envelope-arrow-up":"\\f7be",feather:"\\f7bf",feather2:"\\f7c4","floppy-fill":"\\f7c5",floppy:"\\f7d8","floppy2-fill":"\\f7d9",floppy2:"\\f7e4",gitlab:"\\f7e5",highlighter:"\\f7f8","marker-tip":"\\f802","nvme-fill":"\\f803",nvme:"\\f80c",opencollective:"\\f80d","pci-card-network":"\\f8cd","pci-card-sound":"\\f8ce",radar:"\\f8cf","send-arrow-down-fill":"\\f8d0","send-arrow-down":"\\f8d1","send-arrow-up-fill":"\\f8d2","send-arrow-up":"\\f8d3","sim-slash-fill":"\\f8d4","sim-slash":"\\f8d5",sourceforge:"\\f8d6",substack:"\\f8d7","threads-fill":"\\f8d8",threads:"\\f8d9",transparency:"\\f8da","twitter-x":"\\f8db","type-h4":"\\f8dc","type-h5":"\\f8dd","type-h6":"\\f8de","backpack-fill":"\\f8df",backpack:"\\f8e0","backpack2-fill":"\\f8e1",backpack2:"\\f8e2","backpack3-fill":"\\f8e3",backpack3:"\\f8e4","backpack4-fill":"\\f8e5",backpack4:"\\f8e6",brilliance:"\\f8e7","cake-fill":"\\f8e8","cake2-fill":"\\f8e9","duffle-fill":"\\f8ea",duffle:"\\f8eb",exposure:"\\f8ec","gender-neuter":"\\f8ed",highlights:"\\f8ee","luggage-fill":"\\f8ef",luggage:"\\f8f0","mailbox-flag":"\\f8f1","mailbox2-flag":"\\f8f2","noise-reduction":"\\f8f3","passport-fill":"\\f8f4",passport:"\\f8f5","person-arms-up":"\\f8f6","person-raised-hand":"\\f8f7","person-standing-dress":"\\f8f8","person-standing":"\\f8f9","person-walking":"\\f8fa","person-wheelchair":"\\f8fb",shadows:"\\f8fc","suitcase-fill":"\\f8fd","suitcase-lg-fill":"\\f8fe","suitcase-lg":"\\f8ff",suitcase:"\\f900","suitcase2-fill":"\\f901",suitcase2:"\\f902",vignette:"\\f903"}),y=class extends o{};y.styles=[V,r`
      :host {
        font-family: bootstrap-icons !important;
      }

      :host::before {
        vertical-align: -0.125em;
      }
    `,r`
      ${M(Object.entries(fe).map(([a,e])=>r`
              :host([icon='${M(a)}'])::before {
                content: '${M(e)}';
              }
            `).join(""))}
    `],l([t({type:String})],y.prototype,"icon",2),y=l([n("kd-bs-icon")],y);var w=class extends I{constructor(){super(...arguments);this._mode="light"}get mode(){return this._mode}set mode(e){let s=this._mode;this._mode=e,this.requestUpdate("mode",s)}get preferredMode(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}connectedCallback(){super.connectedCallback(),this.mode=this.preferredMode}updated(e){super.updated(e),e.has("mode")&&this.updateMode()}updateMode(){let e=`Switch to ${this.mode==="light"?"dark":"light"} mode`;this._control?.setAttribute("aria-label",e),this._control?.setAttribute("title",e),this.fireEvent("kd-mode-switcher-changed",{mode:this.mode}),document.documentElement.dataset.mode=this.mode}render(){return i`<button class="button" @click=${this.onClick.bind(this)}>
      <span class="light"><kd-bs-icon icon="sun"></kd-bs-icon></span>
      <span class="dark"><kd-bs-icon icon="moon"></kd-bs-icon></span>
      <span class="dot"></span>
    </button>`}onClick(){this.mode=this.mode==="light"?"dark":"light"}};w.styles=[r`
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
    `],l([O(".button",!0)],w.prototype,"_control",2),l([t({type:String,reflect:!0})],w.prototype,"mode",1),w=l([n("kd-mode-switcher")],w);var q=class extends o{connectedCallback(){super.connectedCallback(),this.role="listitem",this.tabIndex=0}update(a){super.update(a),a.has("accent")&&(this.accent?this.style.setProperty("--kd-ooh-logo-hover-background-color",this.accent):this.style.removeProperty("--kd-ooh-logo-hover-background-color"))}render(){return i`<slot></slot>`}};q.styles=[r`
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
    `],l([t()],q.prototype,"accent",2),q=l([n("kd-ooh-logo")],q);var D=class extends o{connectedCallback(){super.connectedCallback(),this.role="list"}render(){return i`<slot class="canvas"></slot>`}};D.styles=[r`
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
    `],D=l([n("kd-ooh-logos")],D);
/*! For license information please see main.js.LEGAL.txt */
