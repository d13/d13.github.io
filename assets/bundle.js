new EventSource('/esbuild').addEventListener('change', () => location.reload());
"use strict";
(() => {
  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t4, e6, o7) {
      if (this._$cssResult$ = true, o7 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e6;
    }
    get styleSheet() {
      let t4 = this.o;
      const s4 = this.t;
      if (e && void 0 === t4) {
        const e6 = void 0 !== s4 && 1 === s4.length;
        e6 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var i = (t4, ...e6) => {
    const o7 = 1 === t4.length ? t4[0] : e6.reduce((e7, s4, o8) => e7 + ((t5) => {
      if (true === t5._$cssResult$)
        return t5.cssText;
      if ("number" == typeof t5)
        return t5;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t4[o8 + 1], t4[0]);
    return new n(o7, t4, s);
  };
  var S = (s4, o7) => {
    if (e)
      s4.adoptedStyleSheets = o7.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
    else
      for (const e6 of o7) {
        const o8 = document.createElement("style"), n5 = t.litNonce;
        void 0 !== n5 && o8.setAttribute("nonce", n5), o8.textContent = e6.cssText, s4.appendChild(o8);
      }
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e6 = "";
    for (const s4 of t5.cssRules)
      e6 += s4.cssText;
    return r(e6);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t4, s4) => t4;
  var u = { toAttribute(t4, s4) {
    switch (s4) {
      case Boolean:
        t4 = t4 ? l : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, s4) {
    let i4 = t4;
    switch (s4) {
      case Boolean:
        i4 = null !== t4;
        break;
      case Number:
        i4 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          i4 = JSON.parse(t4);
        } catch (t5) {
          i4 = null;
        }
    }
    return i4;
  } };
  var f = (t4, s4) => !i2(t4, s4);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t4) {
      this._$Ei(), (this.l ??= []).push(t4);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t4, s4 = y) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.elementProperties.set(t4, s4), !s4.noAccessor) {
        const i4 = Symbol(), r6 = this.getPropertyDescriptor(t4, i4, s4);
        void 0 !== r6 && e2(this.prototype, t4, r6);
      }
    }
    static getPropertyDescriptor(t4, s4, i4) {
      const { get: e6, set: h3 } = r2(this.prototype, t4) ?? { get() {
        return this[s4];
      }, set(t5) {
        this[s4] = t5;
      } };
      return { get() {
        return e6?.call(this);
      }, set(s5) {
        const r6 = e6?.call(this);
        h3.call(this, s5), this.requestUpdate(t4, r6, i4);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties")))
        return;
      const t4 = n2(this);
      t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t5 = this.properties, s4 = [...h(t5), ...o2(t5)];
        for (const i4 of s4)
          this.createProperty(i4, t5[i4]);
      }
      const t4 = this[Symbol.metadata];
      if (null !== t4) {
        const s4 = litPropertyMetadata.get(t4);
        if (void 0 !== s4)
          for (const [t5, i4] of s4)
            this.elementProperties.set(t5, i4);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t5, s4] of this.elementProperties) {
        const i4 = this._$Eu(t5, s4);
        void 0 !== i4 && this._$Eh.set(i4, t5);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i4 = [];
      if (Array.isArray(s4)) {
        const e6 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e6)
          i4.unshift(c(s5));
      } else
        void 0 !== s4 && i4.push(c(s4));
      return i4;
    }
    static _$Eu(t4, s4) {
      const i4 = s4.attribute;
      return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$Eg = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
    }
    addController(t4) {
      (this._$ES ??= []).push(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
    }
    removeController(t4) {
      this._$ES?.splice(this._$ES.indexOf(t4) >>> 0, 1);
    }
    _$E_() {
      const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i4 of s4.keys())
        this.hasOwnProperty(i4) && (t4.set(i4, this[i4]), delete this[i4]);
      t4.size > 0 && (this._$Ep = t4);
    }
    createRenderRoot() {
      const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t4, this.constructor.elementStyles), t4;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$ES?.forEach((t4) => t4.hostConnected?.());
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      this._$ES?.forEach((t4) => t4.hostDisconnected?.());
    }
    attributeChangedCallback(t4, s4, i4) {
      this._$AK(t4, i4);
    }
    _$EO(t4, s4) {
      const i4 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i4);
      if (void 0 !== e6 && true === i4.reflect) {
        const r6 = (void 0 !== i4.converter?.toAttribute ? i4.converter : u).toAttribute(s4, i4.type);
        this._$Em = t4, null == r6 ? this.removeAttribute(e6) : this.setAttribute(e6, r6), this._$Em = null;
      }
    }
    _$AK(t4, s4) {
      const i4 = this.constructor, e6 = i4._$Eh.get(t4);
      if (void 0 !== e6 && this._$Em !== e6) {
        const t5 = i4.getPropertyOptions(e6), r6 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
        this._$Em = e6, this[e6] = r6.fromAttribute(s4, t5.type), this._$Em = null;
      }
    }
    requestUpdate(t4, s4, i4, e6 = false, r6) {
      if (void 0 !== t4) {
        if (i4 ??= this.constructor.getPropertyOptions(t4), !(i4.hasChanged ?? f)(e6 ? r6 : this[t4], s4))
          return;
        this.C(t4, s4, i4);
      }
      false === this.isUpdatePending && (this._$Eg = this._$EP());
    }
    C(t4, s4, i4) {
      this._$AL.has(t4) || this._$AL.set(t4, s4), true === i4.reflect && this._$Em !== t4 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t4);
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$Eg;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this._$Ep) {
          for (const [t6, s5] of this._$Ep)
            this[t6] = s5;
          this._$Ep = void 0;
        }
        const t5 = this.constructor.elementProperties;
        if (t5.size > 0)
          for (const [s5, i4] of t5)
            true !== i4.wrapped || this._$AL.has(s5) || void 0 === this[s5] || this.C(s5, this[s5], i4);
      }
      let t4 = false;
      const s4 = this._$AL;
      try {
        t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$ES?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$ET();
      } catch (s5) {
        throw t4 = false, this._$ET(), s5;
      }
      t4 && this._$AE(s4);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      this._$ES?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$ET() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Eg;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$Ej &&= this._$Ej.forEach((t5) => this._$EO(t5, this[t5])), this._$ET();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.1");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var a2 = Array.isArray;
  var u2 = (t4) => a2(t4) || "function" == typeof t4?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t4) => (i4, ...s4) => ({ _$litType$: t4, strings: i4, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var E = r3.createTreeWalker(r3, 129);
  function C(t4, i4) {
    if (!Array.isArray(t4) || !t4.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i4) : i4;
  }
  var P = (t4, i4) => {
    const s4 = t4.length - 1, o7 = [];
    let r6, l3 = 2 === i4 ? "<svg>" : "", c4 = f2;
    for (let i5 = 0; i5 < s4; i5++) {
      const s5 = t4[i5];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); )
        y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r6 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r6 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r6 = void 0);
      const x2 = c4 === m && t4[i5 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o7.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i5 : x2);
    }
    return [C(t4, l3 + (t4[s4] || "<?>") + (2 === i4 ? "</svg>" : "")), o7];
  };
  var V = class _V {
    constructor({ strings: t4, _$litType$: s4 }, n5) {
      let r6;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = P(t4, s4);
      if (this.el = _V.createElement(f3, n5), E.currentNode = this.el.content, 2 === s4) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (r6 = E.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes())
            for (const t5 of r6.getAttributeNames())
              if (t5.endsWith(e3)) {
                const i4 = v2[a3++], s5 = r6.getAttribute(t5).split(h2), e6 = /([.?@])?(.*)/.exec(i4);
                d3.push({ type: 1, index: c4, name: e6[2], strings: s5, ctor: "." === e6[1] ? k : "?" === e6[1] ? H : "@" === e6[1] ? I : R }), r6.removeAttribute(t5);
              } else
                t5.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r6.removeAttribute(t5));
          if ($.test(r6.tagName)) {
            const t5 = r6.textContent.split(h2), s5 = t5.length - 1;
            if (s5 > 0) {
              r6.textContent = i3 ? i3.emptyScript : "";
              for (let i4 = 0; i4 < s5; i4++)
                r6.append(t5[i4], l2()), E.nextNode(), d3.push({ type: 2, index: ++c4 });
              r6.append(t5[s5], l2());
            }
          }
        } else if (8 === r6.nodeType)
          if (r6.data === o3)
            d3.push({ type: 2, index: c4 });
          else {
            let t5 = -1;
            for (; -1 !== (t5 = r6.data.indexOf(h2, t5 + 1)); )
              d3.push({ type: 7, index: c4 }), t5 += h2.length - 1;
          }
        c4++;
      }
    }
    static createElement(t4, i4) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t4, s4;
    }
  };
  function N(t4, i4, s4 = t4, e6) {
    if (i4 === w)
      return i4;
    let h3 = void 0 !== e6 ? s4._$Co?.[e6] : s4._$Cl;
    const o7 = c3(i4) ? void 0 : i4._$litDirective$;
    return h3?.constructor !== o7 && (h3?._$AO?.(false), void 0 === o7 ? h3 = void 0 : (h3 = new o7(t4), h3._$AT(t4, s4, e6)), void 0 !== e6 ? (s4._$Co ??= [])[e6] = h3 : s4._$Cl = h3), void 0 !== h3 && (i4 = N(t4, h3._$AS(t4, i4.values), h3, e6)), i4;
  }
  var S2 = class {
    constructor(t4, i4) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      const { el: { content: i4 }, parts: s4 } = this._$AD, e6 = (t4?.creationScope ?? r3).importNode(i4, true);
      E.currentNode = e6;
      let h3 = E.nextNode(), o7 = 0, n5 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o7 === l3.index) {
          let i5;
          2 === l3.type ? i5 = new M(h3, h3.nextSibling, this, t4) : 1 === l3.type ? i5 = new l3.ctor(h3, l3.name, l3.strings, this, t4) : 6 === l3.type && (i5 = new L(h3, this, t4)), this._$AV.push(i5), l3 = s4[++n5];
        }
        o7 !== l3?.index && (h3 = E.nextNode(), o7++);
      }
      return E.currentNode = r3, e6;
    }
    p(t4) {
      let i4 = 0;
      for (const s4 of this._$AV)
        void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i4), i4 += s4.strings.length - 2) : s4._$AI(t4[i4])), i4++;
    }
  };
  var M = class _M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t4, i4, s4, e6) {
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t4, this._$AB = i4, this._$AM = s4, this.options = e6, this._$Cv = e6?.isConnected ?? true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i4 = this._$AM;
      return void 0 !== i4 && 11 === t4?.nodeType && (t4 = i4.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i4 = this) {
      t4 = N(this, t4, i4), c3(t4) ? t4 === T || null == t4 || "" === t4 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t4 !== this._$AH && t4 !== w && this._(t4) : void 0 !== t4._$litType$ ? this.g(t4) : void 0 !== t4.nodeType ? this.$(t4) : u2(t4) ? this.T(t4) : this._(t4);
    }
    k(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    $(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.k(t4));
    }
    _(t4) {
      this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t4 : this.$(r3.createTextNode(t4)), this._$AH = t4;
    }
    g(t4) {
      const { values: i4, _$litType$: s4 } = t4, e6 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = V.createElement(C(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e6)
        this._$AH.p(i4);
      else {
        const t5 = new S2(e6, this), s5 = t5.u(this.options);
        t5.p(i4), this.$(s5), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i4 = A.get(t4.strings);
      return void 0 === i4 && A.set(t4.strings, i4 = new V(t4)), i4;
    }
    T(t4) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s4, e6 = 0;
      for (const h3 of t4)
        e6 === i4.length ? i4.push(s4 = new _M(this.k(l2()), this.k(l2()), this, this.options)) : s4 = i4[e6], s4._$AI(h3), e6++;
      e6 < i4.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i4.length = e6);
    }
    _$AR(t4 = this._$AA.nextSibling, i4) {
      for (this._$AP?.(false, true, i4); t4 && t4 !== this._$AB; ) {
        const i5 = t4.nextSibling;
        t4.remove(), t4 = i5;
      }
    }
    setConnected(t4) {
      void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
    }
  };
  var R = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i4, s4, e6, h3) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t4, this.name = i4, this._$AM = e6, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = T;
    }
    _$AI(t4, i4 = this, s4, e6) {
      const h3 = this.strings;
      let o7 = false;
      if (void 0 === h3)
        t4 = N(this, t4, i4, 0), o7 = !c3(t4) || t4 !== this._$AH && t4 !== w, o7 && (this._$AH = t4);
      else {
        const e7 = t4;
        let n5, r6;
        for (t4 = h3[0], n5 = 0; n5 < h3.length - 1; n5++)
          r6 = N(this, e7[s4 + n5], i4, n5), r6 === w && (r6 = this._$AH[n5]), o7 ||= !c3(r6) || r6 !== this._$AH[n5], r6 === T ? t4 = T : t4 !== T && (t4 += (r6 ?? "") + h3[n5 + 1]), this._$AH[n5] = r6;
      }
      o7 && !e6 && this.O(t4);
    }
    O(t4) {
      t4 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  };
  var k = class extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    O(t4) {
      this.element[this.name] = t4 === T ? void 0 : t4;
    }
  };
  var H = class extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    O(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== T);
    }
  };
  var I = class extends R {
    constructor(t4, i4, s4, e6, h3) {
      super(t4, i4, s4, e6, h3), this.type = 5;
    }
    _$AI(t4, i4 = this) {
      if ((t4 = N(this, t4, i4, 0) ?? T) === w)
        return;
      const s4 = this._$AH, e6 = t4 === T && s4 !== T || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== T && (s4 === T || e6);
      e6 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var L = class {
    constructor(t4, i4, s4) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      N(this, t4);
    }
  };
  var Z = t2.litHtmlPolyfillSupport;
  Z?.(V, M), (t2.litHtmlVersions ??= []).push("3.0.2");
  var j = (t4, i4, s4) => {
    const e6 = s4?.renderBefore ?? i4;
    let h3 = e6._$litPart$;
    if (void 0 === h3) {
      const t5 = s4?.renderBefore ?? null;
      e6._$litPart$ = h3 = new M(i4.insertBefore(l2(), t5), t5, void 0, s4 ?? {});
    }
    return h3._$AI(t4), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t4 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t4.firstChild, t4;
    }
    update(t4) {
      const i4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = j(i4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return w;
    }
  };
  s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
  var r4 = globalThis.litElementPolyfillSupport;
  r4?.({ LitElement: s3 });
  (globalThis.litElementVersions ??= []).push("4.0.1");

  // src/styles/shared.css.ts
  var sharedStyles = i`
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
`;

  // src/utils/stylesheets.ts
  function litToStyleSheet(...cssResults) {
    const styleSheets = [];
    for (const cssResult of cssResults) {
      if (!cssResult.styleSheet) {
        continue;
      }
      styleSheets.push(cssResult.styleSheet);
    }
    return styleSheets;
  }

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t3 = (t4) => (e6, o7) => {
    void 0 !== o7 ? o7.addInitializer(() => {
      customElements.define(t4, e6);
    }) : customElements.define(t4, e6);
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var o4 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r5 = (t4 = o4, e6, r6) => {
    const { kind: n5, metadata: i4 } = r6;
    let s4 = globalThis.litPropertyMetadata.get(i4);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i4, s4 = /* @__PURE__ */ new Map()), s4.set(r6.name, t4), "accessor" === n5) {
      const { name: o7 } = r6;
      return { set(r7) {
        const n6 = e6.get.call(this);
        e6.set.call(this, r7), this.requestUpdate(o7, n6, t4);
      }, init(e7) {
        return void 0 !== e7 && this.C(o7, void 0, t4), e7;
      } };
    }
    if ("setter" === n5) {
      const { name: o7 } = r6;
      return function(r7) {
        const n6 = this[o7];
        e6.call(this, r7), this.requestUpdate(o7, n6, t4);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t4) {
    return (e6, o7) => "object" == typeof o7 ? r5(t4, e6, o7) : ((t5, e7, o8) => {
      const r6 = e7.hasOwnProperty(o8);
      return e7.constructor.createProperty(o8, r6 ? { ...t5, wrapped: true } : t5), r6 ? Object.getOwnPropertyDescriptor(e7, o8) : void 0;
    })(t4, e6, o7);
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e4 = (e6, t4, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t4 && Object.defineProperty(e6, t4, c4), c4);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e5(e6, r6) {
    return (n5, s4, i4) => {
      const o7 = (t4) => t4.renderRoot?.querySelector(e6) ?? null;
      if (r6) {
        const { get: e7, set: u3 } = "object" == typeof s4 ? n5 : i4 ?? (() => {
          const t4 = Symbol();
          return { get() {
            return this[t4];
          }, set(e8) {
            this[t4] = e8;
          } };
        })();
        return e4(n5, s4, { get() {
          if (r6) {
            let t4 = e7.call(this);
            return void 0 === t4 && (t4 = o7(this), u3.call(this, t4)), t4;
          }
          return o7(this);
        } });
      }
      return e4(n5, s4, { get() {
        return o7(this);
      } });
    };
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  function o5(o7) {
    return (e6, n5) => {
      const { slot: r6, selector: s4 } = o7 ?? {}, c4 = "slot" + (r6 ? `[name=${r6}]` : ":not([name])");
      return e4(e6, n5, { get() {
        const t4 = this.renderRoot?.querySelector(c4), e7 = t4?.assignedElements(o7) ?? [];
        return void 0 === s4 ? e7 : e7.filter((t5) => t5.matches(s4));
      } });
    };
  }

  // node_modules/lit-html/directives/if-defined.js
  var o6 = (o7) => o7 ?? T;

  // src/components/base/base-element.ts
  var KdBaseElement = class extends s3 {
    fireEvent(name, detail) {
      this.dispatchEvent(new CustomEvent(name, { detail }));
    }
  };

  // src/components/button/button.css.ts
  var buttonBase = i`
  :host {
    display: contents;
  }

  .button {
    appearance: none;
    display: inline-block;
  }
`;

  // src/components/button/link-button.ts
  var __decorate = function(decorators, target, key, desc) {
    var c4 = arguments.length, r6 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r6 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i4 = decorators.length - 1; i4 >= 0; i4--)
        if (d3 = decorators[i4])
          r6 = (c4 < 3 ? d3(r6) : c4 > 3 ? d3(target, key, r6) : d3(target, key)) || r6;
    return c4 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
  };
  var KdLinkButton = class KdLinkButton2 extends KdBaseElement {
    static {
      this.shadowRootOptions = {
        ...s3.shadowRootOptions,
        delegatesFocus: true
      };
    }
    static {
      this.styles = [buttonBase];
    }
    focus(options) {
      this._buttonEl.focus(options);
    }
    blur() {
      this._buttonEl.blur();
    }
    click() {
      this._buttonEl.click();
    }
    render() {
      return x`<a
      class="button"
      part="base"
      href="${o6(this.href)}"
      target="${o6(this.target)}"
      rel="${o6(this.rel)}"
      ><slot></slot
    ></a>`;
    }
  };
  __decorate([
    e5(".button", true)
  ], KdLinkButton.prototype, "_buttonEl", void 0);
  __decorate([
    n4()
  ], KdLinkButton.prototype, "href", void 0);
  __decorate([
    n4()
  ], KdLinkButton.prototype, "target", void 0);
  __decorate([
    n4()
  ], KdLinkButton.prototype, "rel", void 0);
  KdLinkButton = __decorate([
    t3("kd-link-button")
  ], KdLinkButton);

  // src/components/phone-hero/index.ts
  var __decorate2 = function(decorators, target, key, desc) {
    var c4 = arguments.length, r6 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r6 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i4 = decorators.length - 1; i4 >= 0; i4--)
        if (d3 = decorators[i4])
          r6 = (c4 < 3 ? d3(r6) : c4 > 3 ? d3(target, key, r6) : d3(target, key)) || r6;
    return c4 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
  };
  var KdPhoneHero = class KdPhoneHero2 extends KdBaseElement {
    static {
      this.styles = i`
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
  `;
    }
    updated() {
      if (this.src) {
        this.style.setProperty("--kd-phone-hero-background-image", `url(${this.src})`);
      }
    }
    render() {
      return x`<div class="container"><slot class="content"></slot></div>`;
    }
  };
  __decorate2([
    n4({ type: String })
  ], KdPhoneHero.prototype, "src", void 0);
  KdPhoneHero = __decorate2([
    t3("kd-phone-hero")
  ], KdPhoneHero);

  // src/system/date.ts
  var dateTimeFormats = /* @__PURE__ */ new Map();
  function getDateTimeFormat(options) {
    let dateTimeFormat = dateTimeFormats.get(options);
    if (!dateTimeFormat) {
      dateTimeFormat = new Intl.DateTimeFormat(void 0, options);
      dateTimeFormats.set(options, dateTimeFormat);
    }
    return dateTimeFormat;
  }
  var defaultDateTimeFormatOptions = Object.freeze({
    year: "numeric",
    month: "long"
  });
  function formatDate(date, options = defaultDateTimeFormatOptions) {
    return getDateTimeFormat(options).format(date);
  }
  var defaultRelativeTimeFormatOptions = Object.freeze({
    numeric: "auto"
  });
  var TIME_SECOND = 1e3;
  var TIME_MINUTE = TIME_SECOND * 60;
  var TIME_HOUR = TIME_MINUTE * 60;
  var TIME_DAY = TIME_HOUR * 24;
  var TIME_WEEK = TIME_DAY * 7;
  var TIME_MONTH = TIME_DAY * 30;
  var TIME_YEAR = TIME_DAY * 365;
  var TIME_QUARTER = TIME_YEAR * 4;
  var relativeTimeFormatUnits = Object.freeze(
    /* @__PURE__ */ new Map([
      ["year", TIME_YEAR],
      ["years", TIME_YEAR],
      ["quarter", TIME_QUARTER],
      ["quarters", TIME_QUARTER],
      ["month", TIME_MONTH],
      ["months", TIME_MONTH],
      ["week", TIME_WEEK],
      ["weeks", TIME_WEEK],
      ["day", TIME_DAY],
      ["days", TIME_DAY],
      ["hour", TIME_HOUR],
      ["hours", TIME_HOUR],
      ["minute", TIME_MINUTE],
      ["minutes", TIME_MINUTE],
      ["second", TIME_SECOND],
      ["seconds", TIME_SECOND]
    ])
  );
  var defaultDateFromOptions = Object.freeze({
    localeMatcher: "best fit",
    numeric: "always",
    style: "narrow"
  });

  // src/components/life-events/life-event.ts
  var __decorate3 = function(decorators, target, key, desc) {
    var c4 = arguments.length, r6 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r6 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i4 = decorators.length - 1; i4 >= 0; i4--)
        if (d3 = decorators[i4])
          r6 = (c4 < 3 ? d3(r6) : c4 > 3 ? d3(target, key, r6) : d3(target, key)) || r6;
    return c4 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
  };
  var KdLifeEvent_1;
  var KdLifeEvent = class KdLifeEvent2 extends KdBaseElement {
    constructor() {
      super(...arguments);
      this.type = "other";
      this.assetType = "image";
    }
    static {
      KdLifeEvent_1 = this;
    }
    static {
      this.now = /* @__PURE__ */ new Date();
    }
    static {
      this.styles = [
        i`
      :host {
        contain: content;
        display: flex;
        flex-direction: row;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .event-tag {
        flex: 0 0 var(--size-5);
      }

      .year {
        position: relative;
        display: inline-block;
        font-size: var(--size--1);
        line-height: 1;
        font-weight: bold;
        transform: translateX(-50%);
        padding-inline: var(--spacing-lg) var(--spacing-xs);
        padding-block: var(--spacing-xs);
        margin-inline-start: var(--size-2);
        background: var(--color-primary-background);
        border: 2px solid var(--color-primary-foreground);
      }

      /* make an arrow before .year */
      .year::before,
      .year::after {
        position: absolute;
        inset-block: 50%;
        inset-inline-start: var(--spacing-xs);
        transform: translateY(-50%);
        display: inline-block;
        content: '';
        block-size: var(--type-small-size);
        aspect-ratio: 2/3;
        clip-path: polygon(100% 50%, 0 0, 0 100%);
        /* vertical-align: text-bottom; */
      }

      .year::before {
        background: var(--color-raw-blue-50);
      }
      .year::after {
        background: var(--color-raw-red-40);
        transform: translateX(50%) translateY(-50%);
      }

      .year2 {
        position: relative;
        display: flex;
        align-items: center;
        font-family: var(--font-family-heading);
        font-size: var(--size--1);
        line-height: 1;
        font-weight: bold;
        width: max-content;
        padding-inline: var(--spacing-md);
        aspect-ratio: 1;
        margin-inline-start: var(--size-3);
        margin-block-start: var(--size-1);
        transform: translateX(-50%) rotateZ(-45deg);
        color: var(--color-primary-background);
        background-color: var(--color-primary-background);
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
      }

      .date-range {
      }

      .media {
        max-inline-size: 100%;
        block-size: auto;
      }

      .summary {
      }

      .title {
        display: block;
      }

      .content {
        display: block;
      }
    `
      ];
    }
    get endingDate() {
      if (this.date === "present")
        return KdLifeEvent_1.now;
      const date = new Date(this.date);
      if (date.toString() === "Invalid Date")
        return void 0;
      return date;
    }
    get startingDate() {
      if (this.startDate === void 0)
        return void 0;
      const date = new Date(this.startDate);
      if (date.toString() === "Invalid Date")
        return void 0;
      return date;
    }
    renderDateRange() {
      if (this.endingDate === void 0)
        return T;
      if (this.startingDate === void 0) {
        if (this.date === "present")
          return x`<time datetime="${KdLifeEvent_1.now.getFullYear()}">Present</time>`;
        return x`<div class="date-range">
        <time datetime="${this.endingDate.toISOString()}">${formatDate(this.endingDate)}</time>
      </div>`;
      }
      if (this.date === "present") {
        return x`<div class="date-range">
        <time datetime="${this.startingDate.toISOString()}">${formatDate(this.startingDate)}</time> - Present
      </div>`;
      }
      return x`<div class="date-range">
      <time datetime="${this.startingDate.toISOString()}">${formatDate(this.startingDate)}</time> -
      <time datetime="${this.endingDate.toISOString()}">${formatDate(this.endingDate)}</time>
    </div>`;
    }
    render() {
      return x`
      <div class="event-tag">
        <span class="year2">${this.endingDate?.getFullYear()}</span>
      </div>
      <article class="event">
        ${this.asset ? x`<img class="media" src="${this.asset}" alt="" />` : T}
        <div class="summary">
          ${this.renderDateRange()}
          <slot name="title" class="title"></slot>
          <slot class="content"></slot>
        </div>
        <div class="meta"></div>
      </article>
    `;
    }
  };
  __decorate3([
    n4()
  ], KdLifeEvent.prototype, "type", void 0);
  __decorate3([
    n4()
  ], KdLifeEvent.prototype, "asset", void 0);
  __decorate3([
    n4({ attribute: "asset-type" })
  ], KdLifeEvent.prototype, "assetType", void 0);
  __decorate3([
    n4()
  ], KdLifeEvent.prototype, "date", void 0);
  __decorate3([
    n4({ attribute: "start-date" })
  ], KdLifeEvent.prototype, "startDate", void 0);
  __decorate3([
    n4()
  ], KdLifeEvent.prototype, "url", void 0);
  KdLifeEvent = KdLifeEvent_1 = __decorate3([
    t3("kd-life-event")
  ], KdLifeEvent);

  // src/components/life-events/life-events.ts
  var __decorate4 = function(decorators, target, key, desc) {
    var c4 = arguments.length, r6 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r6 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i4 = decorators.length - 1; i4 >= 0; i4--)
        if (d3 = decorators[i4])
          r6 = (c4 < 3 ? d3(r6) : c4 > 3 ? d3(target, key, r6) : d3(target, key)) || r6;
    return c4 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
  };
  var KdLifeEvents = class KdLifeEvents2 extends KdBaseElement {
    static {
      this.styles = [
        i`
      :host {
        display: block;
        position: relative;
        padding-block: var(--spacing-xl);
      }

      .timeline {
        display: block;
        position: absolute;
        block-size: 100%;
        inline-size: 2px;
        background-color: var(--color-raw-blue-30);
        inset-block-start: 0;
        inset-inline-start: var(--size-3);
      }

      .events {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
      }
    `
      ];
    }
    render() {
      return x`<span class="timeline"></span><slot class="events"></slot>`;
    }
  };
  __decorate4([
    o5({ selector: "kd-life-event" })
  ], KdLifeEvents.prototype, "lifeEventEls", void 0);
  KdLifeEvents = __decorate4([
    t3("kd-life-events")
  ], KdLifeEvents);

  // src/main.ts
  document.adoptedStyleSheets = [...litToStyleSheet(sharedStyles)];
})();
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
//# sourceMappingURL=bundle.js.map
