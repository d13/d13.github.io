import{a as c,c as a}from"./chunk-WYTIZRCL.js";function E(...t){let e=[];for(let n of t)n.styleSheet&&e.push(n.styleSheet);return e}var m={};c(m,{a11yStyles:()=>v,linkStyles:()=>u});var u=a`
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
`,v=a`
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
`;function p(t,e,n,i=!0){let l=t===window,o=document.readyState,s=n?e.bind(n):e;if(o==="loading"||o==="interactive"&&l){let r=l?"load":"DOMContentLoaded";t.addEventListener(r,s,{once:!0})}else i&&s()}function L(t){let e=0,n=null;function i(l=!1){let o=window.pageYOffset||document.documentElement.scrollTop;if(!l){let d=o>e?"down":"up";Math.abs(o-e)>5&&(document.body.dataset.scrollDirection=d),e=o}n??=document.getElementById(t);let r=(n?.getBoundingClientRect().top??0)<1?"true":"false";document.body.dataset.pastHero=r}p(document,()=>{i(!0)}),document.addEventListener("scroll",()=>{i()},{passive:!0})}export{E as a,m as b,L as c};
