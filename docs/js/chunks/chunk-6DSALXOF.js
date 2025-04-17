import{c as $,f as A,h as b,i as k,j as w}from"./chunk-WYTIZRCL.js";function*E(e,r,t=1){let l=r===void 0?0:e;r??=e;for(let o=l;t>0?o<r:r<o;o+=t)yield o}var M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},P=e=>(...r)=>({_$litDirective$:e,values:r}),y=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,l){this._$Ct=r,this._$AM=t,this._$Ci=l}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}};var{I:H}=k;var B=()=>document.createComment(""),g=(e,r,t)=>{let l=e._$AA.parentNode,o=r===void 0?e._$AB:r._$AA;if(t===void 0){let d=l.insertBefore(B(),o),s=l.insertBefore(B(),o);t=new H(d,s,e,e.options)}else{let d=t._$AB.nextSibling,s=t._$AM,f=s!==e;if(f){let n;t._$AQ?.(e),t._$AM=e,t._$AP!==void 0&&(n=e._$AU)!==s._$AU&&t._$AP(n)}if(d!==o||f){let n=t._$AA;for(;n!==d;){let h=n.nextSibling;l.insertBefore(n,o),n=h}}}return t},v=(e,r,t=e)=>(e._$AI(r,t),e),U={},D=(e,r=U)=>e._$AH=r,R=e=>e._$AH,_=e=>{e._$AP?.(!1,!0);let r=e._$AA,t=e._$AB.nextSibling;for(;r!==t;){let l=r.nextSibling;r.remove(),r=l}};var z=(e,r,t)=>{let l=new Map;for(let o=r;o<=t;o++)l.set(e[o],o);return l},L=P(class extends y{constructor(e){if(super(e),e.type!==M.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,r,t){let l;t===void 0?t=r:r!==void 0&&(l=r);let o=[],d=[],s=0;for(let f of e)o[s]=l?l(f,s):s,d[s]=t(f,s),s++;return{values:d,keys:o}}render(e,r,t){return this.dt(e,r,t).values}update(e,[r,t,l]){let o=R(e),{values:d,keys:s}=this.dt(r,t,l);if(!Array.isArray(o))return this.ut=s,d;let f=this.ut??=[],n=[],h,T,a=0,m=o.length-1,i=0,c=d.length-1;for(;a<=m&&i<=c;)if(o[a]===null)a++;else if(o[m]===null)m--;else if(f[a]===s[i])n[i]=v(o[a],d[i]),a++,i++;else if(f[m]===s[c])n[c]=v(o[m],d[c]),m--,c--;else if(f[a]===s[c])n[c]=v(o[a],d[c]),g(e,n[c+1],o[a]),a++,c--;else if(f[m]===s[i])n[i]=v(o[m],d[i]),g(e,o[a],o[m]),m--,i++;else if(h===void 0&&(h=z(s,i,c),T=z(f,a,m)),h.has(f[a]))if(h.has(f[m])){let u=T.get(s[i]),x=u!==void 0?o[u]:null;if(x===null){let C=g(e,o[a]);v(C,d[i]),n[i]=C}else n[i]=v(x,d[i]),g(e,o[a],x),o[u]=null;i++}else _(o[m]),m--;else _(o[a]),a++;for(;i<=c;){let u=g(e,n[c+1]);v(u,d[i]),n[i++]=u}for(;a<=m;){let u=o[a++];u!==null&&_(u)}return this.ut=s,D(e,n),b}});var V=Array.from(E(-6,7,1)),p=V.length,S=class extends w{static{this.styles=[$`
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
        grid-template-columns: repeat(${p}, 1fr);
        grid-template-rows: repeat(${p}, 1fr);
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
    `,...V.map((r,t)=>$`
          .hero-image:has(.x${t}:hover) {
            --d-hero-image-mouse-offset-x: ${r};
          }
          .hero-image:has(.y${t}:hover) {
            --d-hero-image-mouse-offset-y: ${r};
          }
        `),$`
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
    `]}render(){return A`<div class="hero-image">
      ${this.renderMedia()}${this.renderMouseGrid()}
    </div>`}renderMouseGrid(){return A`<div class="mouse-grid">
      ${L(Array.from({length:p**2}),(r,t)=>A`<div
            class="x${t%p} y${Math.floor(t/p)}"
          ></div>`)}
    </div>`}};export{S as a};
