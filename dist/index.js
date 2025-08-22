/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ze = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ds = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ie = () => {
}, ps = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), de = Object.assign, hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _s = Object.prototype.hasOwnProperty, rt = (e, t) => _s.call(e, t), A = Array.isArray, Ee = (e) => vt(e) === "[object Map]", gn = (e) => vt(e) === "[object Set]", U = (e) => typeof e == "function", ie = (e) => typeof e == "string", Oe = (e) => typeof e == "symbol", H = (e) => e !== null && typeof e == "object", ms = (e) => (H(e) || U(e)) && U(e.then) && U(e.catch), bn = Object.prototype.toString, vt = (e) => bn.call(e), yn = (e) => vt(e).slice(8, -1), En = (e) => vt(e) === "[object Object]", Ut = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, vs = /-(\w)/g, lt = jt(
  (e) => e.replace(vs, (t, n) => n ? n.toUpperCase() : "")
), Ke = jt((e) => e.charAt(0).toUpperCase() + e.slice(1)), gs = jt(
  (e) => e ? `on${Ke(e)}` : ""
), be = (e, t) => !Object.is(e, t), bs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
};
let sn;
const gt = () => sn || (sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ie(s) ? ws(s) : Ft(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ie(e) || H(e))
    return e;
}
const ys = /;(?![^(]*\))/g, Es = /:([^]+)/, Ns = /\/\*[^]*?\*\//g;
function ws(e) {
  const t = {};
  return e.replace(Ns, "").split(ys).forEach((n) => {
    if (n) {
      const s = n.split(Es);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Mt(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const s = Mt(e[n]);
      s && (t += s + " ");
    }
  else if (H(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Nn = (e) => !!(e && e.__v_isRef === !0), T = (e) => ie(e) ? e : e == null ? "" : A(e) || H(e) && (e.toString === bn || !U(e.toString)) ? Nn(e) ? T(e.value) : JSON.stringify(e, wn, 2) : String(e), wn = (e, t) => Nn(t) ? wn(e, t.value) : Ee(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Nt(s, i) + " =>"] = o, n),
    {}
  )
} : gn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Nt(n))
} : Oe(t) ? Nt(t) : H(t) && !A(t) && !En(t) ? String(t) : t, Nt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Oe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function X(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let W;
class Ss {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = W, !t && W && (this.index = (W.scopes || (W.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = W;
      try {
        return W = this, t();
      } finally {
        W = n;
      }
    } else process.env.NODE_ENV !== "production" && X("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = W, W = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (W = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Os(e) {
  return new Ss(e);
}
function Sn() {
  return W;
}
function xs(e, t = !1) {
  W ? W.cleanups.push(e) : process.env.NODE_ENV !== "production" && !t && X(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let V;
const wt = /* @__PURE__ */ new WeakSet();
class Ds {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, W && W.active && W.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, wt.has(this) && (wt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, on(this), Dn(this);
    const t = V, n = oe;
    V = this, oe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && V !== this && X(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Vn(this), V = t, oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Wt(t);
      this.deps = this.depsTail = void 0, on(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ct(this) && this.run();
  }
  get dirty() {
    return Ct(this);
  }
}
let On = 0, He, Le;
function xn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Le, Le = e;
    return;
  }
  e.next = He, He = e;
}
function Ht() {
  On++;
}
function Lt() {
  if (--On > 0)
    return;
  if (Le) {
    let t = Le;
    for (Le = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; He; ) {
    let t = He;
    for (He = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Dn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vn(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Wt(s), Vs(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ct(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Rn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Be) || (e.globalVersion = Be, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ct(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = V, s = oe;
  V = e, oe = !0;
  try {
    Dn(e);
    const o = e.fn(e._value);
    (t.version === 0 || be(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    V = n, oe = s, Vn(e), e.flags &= -3;
  }
}
function Wt(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Wt(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vs(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let oe = !0;
const Cn = [];
function $e() {
  Cn.push(oe), oe = !1;
}
function Te() {
  const e = Cn.pop();
  oe = e === void 0 ? !0 : e;
}
function on(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = V;
    V = void 0;
    try {
      t();
    } finally {
      V = n;
    }
  }
}
let Be = 0;
class Rs {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zt {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!V || !oe || V === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== V)
      n = this.activeLink = new Rs(V, this), V.deps ? (n.prevDep = V.depsTail, V.depsTail.nextDep = n, V.depsTail = n) : V.deps = V.depsTail = n, An(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = V.depsTail, n.nextDep = void 0, V.depsTail.nextDep = n, V.depsTail = n, V.deps === n && (V.deps = s);
    }
    return process.env.NODE_ENV !== "production" && V.onTrack && V.onTrack(
      de(
        {
          effect: V
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Be++, this.notify(t);
  }
  notify(t) {
    Ht();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            de(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Lt();
    }
  }
}
function An(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        An(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ct = /* @__PURE__ */ new WeakMap(), Ne = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), At = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Je = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function G(e, t, n) {
  if (oe && V) {
    let s = ct.get(e);
    s || ct.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new zt()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function _e(e, t, n, s, o, i) {
  const r = ct.get(e);
  if (!r) {
    Be++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: i
    }) : a.trigger());
  };
  if (Ht(), t === "clear")
    r.forEach(l);
  else {
    const a = A(e), h = a && Ut(n);
    if (a && n === "length") {
      const f = Number(s);
      r.forEach((c, d) => {
        (d === "length" || d === Je || !Oe(d) && d >= f) && l(c);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), h && l(r.get(Je)), t) {
        case "add":
          a ? h && l(r.get("length")) : (l(r.get(Ne)), Ee(e) && l(r.get(At)));
          break;
        case "delete":
          a || (l(r.get(Ne)), Ee(e) && l(r.get(At)));
          break;
        case "set":
          Ee(e) && l(r.get(Ne));
          break;
      }
  }
  Lt();
}
function Cs(e, t) {
  const n = ct.get(e);
  return n && n.get(t);
}
function Re(e) {
  const t = S(e);
  return t === e ? t : (G(t, "iterate", Je), Y(e) ? t : t.map(M));
}
function bt(e) {
  return G(e = S(e), "iterate", Je), e;
}
const As = {
  __proto__: null,
  [Symbol.iterator]() {
    return St(this, Symbol.iterator, M);
  },
  concat(...e) {
    return Re(this).concat(
      ...e.map((t) => A(t) ? Re(t) : t)
    );
  },
  entries() {
    return St(this, "entries", (e) => (e[1] = M(e[1]), e));
  },
  every(e, t) {
    return ae(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ae(this, "filter", e, t, (n) => n.map(M), arguments);
  },
  find(e, t) {
    return ae(this, "find", e, t, M, arguments);
  },
  findIndex(e, t) {
    return ae(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ae(this, "findLast", e, t, M, arguments);
  },
  findLastIndex(e, t) {
    return ae(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ae(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ot(this, "includes", e);
  },
  indexOf(...e) {
    return Ot(this, "indexOf", e);
  },
  join(e) {
    return Re(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ot(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ae(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return qe(this, "pop");
  },
  push(...e) {
    return qe(this, "push", e);
  },
  reduce(e, ...t) {
    return rn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return rn(this, "reduceRight", e, t);
  },
  shift() {
    return qe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ae(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return qe(this, "splice", e);
  },
  toReversed() {
    return Re(this).toReversed();
  },
  toSorted(e) {
    return Re(this).toSorted(e);
  },
  toSpliced(...e) {
    return Re(this).toSpliced(...e);
  },
  unshift(...e) {
    return qe(this, "unshift", e);
  },
  values() {
    return St(this, "values", M);
  }
};
function St(e, t, n) {
  const s = bt(e), o = s[t]();
  return s !== e && !Y(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const Is = Array.prototype;
function ae(e, t, n, s, o, i) {
  const r = bt(e), l = r !== e && !Y(e), a = r[t];
  if (a !== Is[t]) {
    const c = a.apply(e, i);
    return l ? M(c) : c;
  }
  let h = n;
  r !== e && (l ? h = function(c, d) {
    return n.call(this, M(c), d, e);
  } : n.length > 2 && (h = function(c, d) {
    return n.call(this, c, d, e);
  }));
  const f = a.call(r, h, s);
  return l && o ? o(f) : f;
}
function rn(e, t, n, s) {
  const o = bt(e);
  let i = n;
  return o !== e && (Y(e) ? n.length > 3 && (i = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : i = function(r, l, a) {
    return n.call(this, r, M(l), a, e);
  }), o[t](i, ...s);
}
function Ot(e, t, n) {
  const s = S(e);
  G(s, "iterate", Je);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ye(n[0]) ? (n[0] = S(n[0]), s[t](...n)) : o;
}
function qe(e, t, n = []) {
  $e(), Ht();
  const s = S(e)[t].apply(e, n);
  return Lt(), Te(), s;
}
const ks = /* @__PURE__ */ fs("__proto__,__v_isRef,__isVue"), In = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Oe)
);
function $s(e) {
  Oe(e) || (e = String(e));
  const t = S(this);
  return G(t, "has", e), t.hasOwnProperty(e);
}
class kn {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? Ws : Pn : i ? Ls : Tn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = A(t);
    if (!o) {
      let a;
      if (r && (a = As[n]))
        return a;
      if (n === "hasOwnProperty")
        return $s;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $(t) ? t : s
    );
    return (Oe(n) ? In.has(n) : ks(n)) || (o || G(t, "get", n), i) ? l : $(l) ? r && Ut(n) ? l : l.value : H(l) ? o ? qn(l) : Kt(l) : l;
  }
}
class Ts extends kn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = ce(i);
      if (!Y(s) && !ce(s) && (i = S(i), s = S(s)), !A(t) && $(i) && !$(s))
        return a ? (process.env.NODE_ENV !== "production" && X(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (i.value = s, !0);
    }
    const r = A(t) && Ut(n) ? Number(n) < t.length : rt(t, n), l = Reflect.set(
      t,
      n,
      s,
      $(t) ? t : o
    );
    return t === S(o) && (r ? be(s, i) && _e(t, "set", n, s, i) : _e(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = rt(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && _e(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Oe(n) || !In.has(n)) && G(t, "has", n), s;
  }
  ownKeys(t) {
    return G(
      t,
      "iterate",
      A(t) ? "length" : Ne
    ), Reflect.ownKeys(t);
  }
}
class Ps extends kn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && X(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && X(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const qs = /* @__PURE__ */ new Ts(), Us = /* @__PURE__ */ new Ps(), It = (e) => e, Ze = (e) => Reflect.getPrototypeOf(e);
function js(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = S(o), r = Ee(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, h = o[e](...s), f = n ? It : t ? at : M;
    return !t && G(
      i,
      "iterate",
      a ? At : Ne
    ), {
      // iterator protocol
      next() {
        const { value: c, done: d } = h.next();
        return d ? { value: c, done: d } : {
          value: l ? [f(c[0]), f(c[1])] : f(c),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function et(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      X(
        `${Ke(e)} operation ${n}failed: target is readonly.`,
        S(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fs(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = S(i), l = S(o);
      e || (be(o, l) && G(r, "get", o), G(r, "get", l));
      const { has: a } = Ze(r), h = t ? It : e ? at : M;
      if (a.call(r, o))
        return h(i.get(o));
      if (a.call(r, l))
        return h(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && G(S(o), "iterate", Ne), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = S(i), l = S(o);
      return e || (be(o, l) && G(r, "has", o), G(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = S(l), h = t ? It : e ? at : M;
      return !e && G(a, "iterate", Ne), l.forEach((f, c) => o.call(i, h(f), h(c), r));
    }
  };
  return de(
    n,
    e ? {
      add: et("add"),
      set: et("set"),
      delete: et("delete"),
      clear: et("clear")
    } : {
      add(o) {
        !t && !Y(o) && !ce(o) && (o = S(o));
        const i = S(this);
        return Ze(i).has.call(i, o) || (i.add(o), _e(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !Y(i) && !ce(i) && (i = S(i));
        const r = S(this), { has: l, get: a } = Ze(r);
        let h = l.call(r, o);
        h ? process.env.NODE_ENV !== "production" && ln(r, l, o) : (o = S(o), h = l.call(r, o));
        const f = a.call(r, o);
        return r.set(o, i), h ? be(i, f) && _e(r, "set", o, i, f) : _e(r, "add", o, i), this;
      },
      delete(o) {
        const i = S(this), { has: r, get: l } = Ze(i);
        let a = r.call(i, o);
        a ? process.env.NODE_ENV !== "production" && ln(i, r, o) : (o = S(o), a = r.call(i, o));
        const h = l ? l.call(i, o) : void 0, f = i.delete(o);
        return a && _e(i, "delete", o, void 0, h), f;
      },
      clear() {
        const o = S(this), i = o.size !== 0, r = process.env.NODE_ENV !== "production" ? Ee(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && _e(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = js(o, e, t);
  }), n;
}
function $n(e, t) {
  const n = Fs(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    rt(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Ms = {
  get: /* @__PURE__ */ $n(!1, !1)
}, Hs = {
  get: /* @__PURE__ */ $n(!0, !1)
};
function ln(e, t, n) {
  const s = S(n);
  if (s !== n && t.call(e, s)) {
    const o = yn(e);
    X(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Tn = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap();
function zs(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ks(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zs(yn(e));
}
function Kt(e) {
  return ce(e) ? e : Un(
    e,
    !1,
    qs,
    Ms,
    Tn
  );
}
function qn(e) {
  return Un(
    e,
    !0,
    Us,
    Hs,
    Pn
  );
}
function Un(e, t, n, s, o) {
  if (!H(e))
    return process.env.NODE_ENV !== "production" && X(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Ks(e);
  if (i === 0)
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function le(e) {
  return ce(e) ? le(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ce(e) {
  return !!(e && e.__v_isReadonly);
}
function Y(e) {
  return !!(e && e.__v_isShallow);
}
function Ye(e) {
  return e ? !!e.__v_raw : !1;
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function Ue(e) {
  return !rt(e, "__v_skip") && Object.isExtensible(e) && bs(e, "__v_skip", !0), e;
}
const M = (e) => H(e) ? Kt(e) : e, at = (e) => H(e) ? qn(e) : e;
function $(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function re(e) {
  return Bs(e, !1);
}
function Bs(e, t) {
  return $(e) ? e : new Js(e, t);
}
class Js {
  constructor(t, n) {
    this.dep = new zt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : S(t), this._value = n ? t : M(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Y(t) || ce(t);
    t = s ? t : S(t), be(t, n) && (this._rawValue = t, this._value = s ? t : M(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function N(e) {
  return $(e) ? e.value : e;
}
function cn(e) {
  process.env.NODE_ENV !== "production" && !Ye(e) && X("toRefs() expects a reactive object but received a plain one.");
  const t = A(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = jn(e, n);
  return t;
}
class Ys {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Cs(S(this._object), this._key);
  }
}
class Gs {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function nt(e, t, n) {
  return $(e) ? e : U(e) ? new Gs(e) : H(e) && arguments.length > 1 ? jn(e, t, n) : re(e);
}
function jn(e, t, n) {
  const s = e[t];
  return $(s) ? s : new Ys(e, t, n);
}
class Qs {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Be - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return xn(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Rn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && X("Write operation failed: computed value is readonly");
  }
}
function Xs(e, t, n = !1) {
  let s, o;
  U(e) ? s = e : (s = e.get, o = e.set);
  const i = new Qs(s, o, n);
  return process.env.NODE_ENV, i;
}
const tt = {}, ut = /* @__PURE__ */ new WeakMap();
let ye;
function Zs(e, t = !1, n = ye) {
  if (n) {
    let s = ut.get(n);
    s || ut.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && X(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function eo(e, t, n = ze) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, h = (v) => {
    (n.onWarn || X)(
      "Invalid watch source: ",
      v,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (v) => o ? v : Y(v) || o === !1 || o === 0 ? me(v, 1) : me(v);
  let c, d, g, O, I = !1, z = !1;
  if ($(e) ? (d = () => e.value, I = Y(e)) : le(e) ? (d = () => f(e), I = !0) : A(e) ? (z = !0, I = e.some((v) => le(v) || Y(v)), d = () => e.map((v) => {
    if ($(v))
      return v.value;
    if (le(v))
      return f(v);
    if (U(v))
      return a ? a(v, 2) : v();
    process.env.NODE_ENV !== "production" && h(v);
  })) : U(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (g) {
      $e();
      try {
        g();
      } finally {
        Te();
      }
    }
    const v = ye;
    ye = c;
    try {
      return a ? a(e, 3, [O]) : e(O);
    } finally {
      ye = v;
    }
  } : (d = Ie, process.env.NODE_ENV !== "production" && h(e)), t && o) {
    const v = d, y = o === !0 ? 1 / 0 : o;
    d = () => me(v(), y);
  }
  const Z = Sn(), R = () => {
    c.stop(), Z && Z.active && hs(Z.effects, c);
  };
  if (i && t) {
    const v = t;
    t = (...y) => {
      v(...y), R();
    };
  }
  let P = z ? new Array(e.length).fill(tt) : tt;
  const K = (v) => {
    if (!(!(c.flags & 1) || !c.dirty && !v))
      if (t) {
        const y = c.run();
        if (o || I || (z ? y.some((_, x) => be(_, P[x])) : be(y, P))) {
          g && g();
          const _ = ye;
          ye = c;
          try {
            const x = [
              y,
              // pass undefined as the old value when it's changed for the first time
              P === tt ? void 0 : z && P[0] === tt ? [] : P,
              O
            ];
            P = y, a ? a(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            ye = _;
          }
        }
      } else
        c.run();
  };
  return l && l(K), c = new Ds(d), c.scheduler = r ? () => r(K, !1) : K, O = (v) => Zs(v, !1, c), g = c.onStop = () => {
    const v = ut.get(c);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const y of v) y();
      ut.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? K(!0) : P = c.run() : r ? r(K.bind(null, !0), !0) : c.run(), R.pause = c.pause.bind(c), R.resume = c.resume.bind(c), R.stop = R, R;
}
function me(e, t = 1 / 0, n) {
  if (t <= 0 || !H(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, $(e))
    me(e.value, t, n);
  else if (A(e))
    for (let s = 0; s < e.length; s++)
      me(e[s], t, n);
  else if (gn(e) || Ee(e))
    e.forEach((s) => {
      me(s, t, n);
    });
  else if (En(e)) {
    for (const s in e)
      me(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && me(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const we = [];
function to(e) {
  we.push(e);
}
function no() {
  we.pop();
}
let xt = !1;
function q(e, ...t) {
  if (xt) return;
  xt = !0, $e();
  const n = we.length ? we[we.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = so();
  if (s)
    yt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${os(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...oo(o)), console.warn(...i);
  }
  Te(), xt = !1;
}
function so() {
  let e = we[we.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function oo(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...io(n));
  }), t;
}
function io({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${os(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...ro(e.props), i] : [o + i];
}
function ro(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Fn(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Fn(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : $(t) ? (t = Fn(e, S(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : U(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = S(t), n ? t : [`${e}=`, t]);
}
const Bt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function yt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Yt(o, t, n);
  }
}
function Jt(e, t, n, s) {
  if (U(e)) {
    const o = yt(e, t, n, s);
    return o && ms(o) && o.catch((i) => {
      Yt(i, t, n);
    }), o;
  }
  if (A(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Jt(e[i], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && q(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Yt(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ze;
  if (t) {
    let l = t.parent;
    const a = t.proxy, h = process.env.NODE_ENV !== "production" ? Bt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, a, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      $e(), yt(i, null, 10, [
        e,
        a,
        h
      ]), Te();
      return;
    }
  }
  lo(e, n, o, s, r);
}
function lo(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = Bt[t];
    if (n && to(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && no(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const te = [];
let ue = -1;
const ke = [];
let he = null, Ae = 0;
const Mn = /* @__PURE__ */ Promise.resolve();
let ft = null;
const co = 100;
function an(e) {
  const t = ft || Mn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ao(e) {
  let t = ue + 1, n = te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = te[s], i = Ge(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Hn(e) {
  if (!(e.flags & 1)) {
    const t = Ge(e), n = te[te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ge(n) ? te.push(e) : te.splice(ao(t), 0, e), e.flags |= 1, Ln();
  }
}
function Ln() {
  ft || (ft = Mn.then(zn));
}
function Wn(e) {
  A(e) ? ke.push(...e) : he && e.id === -1 ? he.splice(Ae + 1, 0, e) : e.flags & 1 || (ke.push(e), e.flags |= 1), Ln();
}
function uo(e) {
  if (ke.length) {
    const t = [...new Set(ke)].sort(
      (n, s) => Ge(n) - Ge(s)
    );
    if (ke.length = 0, he) {
      he.push(...t);
      return;
    }
    for (he = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ae = 0; Ae < he.length; Ae++) {
      const n = he[Ae];
      process.env.NODE_ENV !== "production" && Kn(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    he = null, Ae = 0;
  }
}
const Ge = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zn(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Kn(e, n) : Ie;
  try {
    for (ue = 0; ue < te.length; ue++) {
      const n = te[ue];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), yt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; ue < te.length; ue++) {
      const n = te[ue];
      n && (n.flags &= -2);
    }
    ue = -1, te.length = 0, uo(e), ft = null, (te.length || ke.length) && zn(e);
  }
}
function Kn(e, t) {
  const n = e.get(t) || 0;
  if (n > co) {
    const s = t.i, o = s && Xt(s.type);
    return Yt(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Dt = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (gt().__VUE_HMR_RUNTIME__ = {
  createRecord: Vt(fo),
  rerender: Vt(po),
  reload: Vt(ho)
});
const dt = /* @__PURE__ */ new Map();
function fo(e, t) {
  return dt.has(e) ? !1 : (dt.set(e, {
    initialDef: pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pt(e) {
  return is(e) ? e.__vccOpts : e;
}
function po(e, t) {
  const n = dt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, pt(s.type).render = t), s.renderCache = [], s.job.flags & 8 || s.update();
  }));
}
function ho(e, t) {
  const n = dt.get(e);
  if (!n) return;
  t = pt(t), un(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = pt(i.type);
    let l = Dt.get(r);
    l || (r !== n.initialDef && un(r, t), Dt.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Hn(() => {
      i.parent.update(), l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  Wn(() => {
    Dt.clear();
  });
}
function un(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Vt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ve, je = [], kt = !1;
function _o(e, ...t) {
  ve ? ve.emit(e, ...t) : kt || je.push({ event: e, args: t });
}
function Bn(e, t) {
  var n, s;
  ve = e, ve ? (ve.enabled = !0, je.forEach(({ event: o, args: i }) => ve.emit(o, ...i)), je = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Bn(i, t);
  }), setTimeout(() => {
    ve || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, kt = !0, je = []);
  }, 3e3)) : (kt = !0, je = []);
}
const mo = /* @__PURE__ */ vo(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vo(e) {
  return (t) => {
    _o(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let se = null, Jn = null;
function fn(e) {
  const t = se;
  return se = e, Jn = e && e.type.__scopeId || null, t;
}
function w(e, t = se, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && pn(-1);
    const i = fn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      fn(i), s._d && pn(1);
    }
    return process.env.NODE_ENV !== "production" && mo(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
const go = (e) => e.__isTeleport;
function Yn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gn(e, t) {
  return U(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
gt().requestIdleCallback;
gt().cancelIdleCallback;
function bo(e, t, n = xe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      $e();
      const l = Ho(n), a = Jt(t, n, e, r);
      return l(), Te(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const o = gs(Bt[e].replace(/ hook$/, ""));
    q(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const yo = (e) => (t, n = xe) => {
  (!Xe || e === "sp") && bo(e, (...s) => t(...s), n);
}, Eo = yo("m"), No = "components";
function F(e, t) {
  return So(No, e, !0, t) || e;
}
const wo = Symbol.for("v-ndc");
function So(e, t, n = !0, s = !1) {
  const o = se || xe;
  if (o) {
    const i = o.type;
    {
      const l = Xt(
        i,
        !1
      );
      if (l && (l === t || l === lt(t) || l === Ke(lt(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      dn(o[e] || i[e], t) || // global registration
      dn(o.appContext[e], t)
    );
    return !r && s ? i : (process.env.NODE_ENV !== "production" && n && !r && q(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else process.env.NODE_ENV !== "production" && q(
    `resolve${Ke(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function dn(e, t) {
  return e && (e[t] || e[lt(t)] || e[Ke(lt(t))]);
}
function Oo(e, t, n, s) {
  let o;
  const i = n, r = A(e);
  if (r || ie(e)) {
    const l = r && le(e);
    let a = !1, h = !1;
    l && (a = !Y(e), h = ce(e), e = bt(e)), o = new Array(e.length);
    for (let f = 0, c = e.length; f < c; f++)
      o[f] = t(
        a ? h ? at(M(e[f])) : M(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && q(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i);
  } else if (H(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, h = l.length; a < h; a++) {
        const f = l[a];
        o[a] = t(e[f], f, a, i);
      }
    }
  else
    o = [];
  return o;
}
const xo = {};
process.env.NODE_ENV !== "production" && (xo.ownKeys = (e) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
let Qn = null;
function Xn(e, t, n = !1) {
  const s = Et();
  if (s || Qn) {
    let o = s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && q(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && q("inject() can only be used inside setup() or functional components.");
}
function Do() {
  return !!(Et() || Qn);
}
const Vo = {}, Zn = (e) => Object.getPrototypeOf(e) === Vo, Ro = To, Co = Symbol.for("v-scx"), Ao = () => {
  {
    const e = Xn(Co);
    return e || process.env.NODE_ENV !== "production" && q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Io(e, t, n) {
  return process.env.NODE_ENV !== "production" && !U(t) && q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ko(e, t, n);
}
function ko(e, t, n = ze) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && q(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = q);
  const a = t && s || !t && i !== "post";
  let h;
  if (Xe) {
    if (i === "sync") {
      const g = Ao();
      h = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Ie, g.resume = Ie, g.pause = Ie, g;
    }
  }
  const f = xe;
  l.call = (g, O, I) => Jt(g, f, O, I);
  let c = !1;
  i === "post" ? l.scheduler = (g) => {
    Ro(g, f && f.suspense);
  } : i !== "sync" && (c = !0, l.scheduler = (g, O) => {
    O ? g() : Hn(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), c && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const d = eo(e, t, l);
  return Xe && (h ? h.push(d) : a && d()), d;
}
const $o = (e) => e.__isSuspense;
function To(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : Wn(e);
}
const Gt = Symbol.for("v-fgt"), Po = Symbol.for("v-txt"), $t = Symbol.for("v-cmt"), st = [];
let Q = null;
function ne(e = !1) {
  st.push(Q = e ? null : []);
}
function qo() {
  st.pop(), Q = st[st.length - 1] || null;
}
let Qe = 1;
function pn(e, t = !1) {
  Qe += e, e < 0 && Q && t && (Q.hasOnce = !0);
}
function es(e) {
  return e.dynamicChildren = Qe > 0 ? Q || ds : null, qo(), Qe > 0 && Q && Q.push(e), e;
}
function ge(e, t, n, s, o, i) {
  return es(
    u(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function ht(e, t, n, s, o) {
  return es(
    b(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Uo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const jo = (...e) => ns(
  ...e
), ts = ({ key: e }) => e ?? null, ot = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || $(e) || U(e) ? { i: se, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, o = null, i = e === Gt ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ts(t),
    ref: t && ot(t),
    scopeId: Jn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: se
  };
  return l ? (Qt(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && q("VNode created with invalid key (NaN). VNode type:", a.type), Qe > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Q && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Q.push(a), a;
}
const b = process.env.NODE_ENV !== "production" ? jo : ns;
function ns(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === wo) && (process.env.NODE_ENV !== "production" && !e && q(`Invalid vnode type when creating vnode: ${e}.`), e = $t), Uo(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Qt(l, n), Qe > 0 && !i && Q && (l.shapeFlag & 6 ? Q[Q.indexOf(e)] = l : Q.push(l)), l.patchFlag = -2, l;
  }
  if (is(e) && (e = e.__vccOpts), t) {
    t = Fo(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = Mt(l)), H(a) && (Ye(a) && !A(a) && (a = de({}, a)), t.style = Ft(a));
  }
  const r = ie(e) ? 1 : $o(e) ? 128 : go(e) ? 64 : H(e) ? 4 : U(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && Ye(e) && (e = S(e), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), u(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function Fo(e) {
  return e ? Ye(e) || Zn(e) ? de({}, e) : e : null;
}
function _t(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, h = t ? Mo(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && ts(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? A(i) ? i.concat(ot(t)) : [i, ot(t)] : ot(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && A(l) ? l.map(ss) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Gt ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Yn(
    f,
    a.clone(f)
  ), f;
}
function ss(e) {
  const t = _t(e);
  return A(e.children) && (t.children = e.children.map(ss)), t;
}
function J(e = " ", t = 0) {
  return b(Po, null, e, t);
}
function it(e = "", t = !1) {
  return t ? (ne(), ht($t, null, e)) : b($t, null, e);
}
function Qt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Qt(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Zn(t) ? t._ctx = se : o === 3 && se && (se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else U(t) ? (t = { default: t, _ctx: se }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [J(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Mt([t.class, s.class]));
      else if (o === "style")
        t.style = Ft([t.style, s.style]);
      else if (ps(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(A(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
let xe = null;
const Et = () => xe || se;
let Tt;
{
  const e = gt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  Tt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => xe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Xe = n
  );
}
const Ho = (e) => {
  const t = xe;
  return Tt(e), e.scope.on(), () => {
    e.scope.off(), Tt(t);
  };
};
let Xe = !1;
process.env.NODE_ENV;
const Lo = /(?:^|[-_])(\w)/g, Wo = (e) => e.replace(Lo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Xt(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function os(e, t, n = !1) {
  let s = Xt(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? Wo(s) : n ? "App" : "Anonymous";
}
function is(e) {
  return U(e) && "__vccOpts" in e;
}
const fe = (e, t) => {
  const n = Xs(e, t, Xe);
  if (process.env.NODE_ENV !== "production") {
    const s = Et();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function zo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!H(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if ($(c)) {
        $e();
        const d = c.value;
        return Te(), [
          "div",
          {},
          ["span", e, f(c)],
          "<",
          l(d),
          ">"
        ];
      } else {
        if (le(c))
          return [
            "div",
            {},
            ["span", e, Y(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${ce(c) ? " (readonly)" : ""}`
          ];
        if (ce(c))
          return [
            "div",
            {},
            ["span", e, Y(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const d = [];
    c.type.props && c.props && d.push(r("props", S(c.props))), c.setupState !== ze && d.push(r("setup", c.setupState)), c.data !== ze && d.push(r("data", S(c.data)));
    const g = a(c, "computed");
    g && d.push(r("computed", g));
    const O = a(c, "inject");
    return O && d.push(r("injected", O)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), d;
  }
  function r(c, d) {
    return d = de({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((g) => [
          "div",
          {},
          ["span", s, g + ": "],
          l(d[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, d = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : H(c) ? ["object", { object: d ? S(c) : c }] : ["span", n, String(c)];
  }
  function a(c, d) {
    const g = c.type;
    if (U(g))
      return;
    const O = {};
    for (const I in c.ctx)
      h(g, I, d) && (O[I] = c.ctx[I]);
    return O;
  }
  function h(c, d, g) {
    const O = c[g];
    if (A(O) && O.includes(d) || H(O) && d in O || c.extends && h(c.extends, d, g) || c.mixins && c.mixins.some((I) => h(I, d, g)))
      return !0;
  }
  function f(c) {
    return Y(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ko() {
  zo();
}
process.env.NODE_ENV !== "production" && Ko();
const Zt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Bo = {};
function Jo(e, t) {
  const n = F("router-link"), s = F("router-view");
  return ne(), ge("div", null, [
    t[3] || (t[3] = u("h2", null, "Admin Layout", -1)),
    u("nav", null, [
      b(n, { to: "/admin" }, {
        default: w(() => [...t[0] || (t[0] = [
          J("Home", -1)
        ])]),
        _: 1
      }),
      t[2] || (t[2] = J(" | ", -1)),
      b(n, { to: "/admin/settings" }, {
        default: w(() => [...t[1] || (t[1] = [
          J("Settingsddd ddd", -1)
        ])]),
        _: 1
      })
    ]),
    b(s)
  ]);
}
const Qi = /* @__PURE__ */ Zt(Bo, [["render", Jo]]);
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Fe;
const mt = (e) => Fe = e, Yo = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Se(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var We;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(We || (We = {}));
const Me = typeof window < "u";
function rs(e, t) {
  for (const n in t) {
    const s = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Se(o) && Se(s) && !$(s) && !le(s) ? e[n] = rs(o, s) : e[n] = s;
  }
  return e;
}
const ls = () => {
};
function hn(e, t, n, s = ls) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), s());
  };
  return !n && Sn() && xs(o), o;
}
function Ce(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Go = (e) => e(), _n = Symbol(), Rt = Symbol();
function Pt(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, s) => e.set(s, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const s = t[n], o = e[n];
    Se(o) && Se(s) && e.hasOwnProperty(n) && !$(s) && !le(s) ? e[n] = Pt(o, s) : e[n] = s;
  }
  return e;
}
const Qo = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Xo(e) {
  return !Se(e) || !Object.prototype.hasOwnProperty.call(e, Qo);
}
const { assign: ee } = Object;
function mn(e) {
  return !!($(e) && e.effect);
}
function vn(e, t, n, s) {
  const { state: o, actions: i, getters: r } = t, l = n.state.value[e];
  let a;
  function h() {
    !l && (process.env.NODE_ENV === "production" || !s) && (n.state.value[e] = o ? o() : {});
    const f = process.env.NODE_ENV !== "production" && s ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      cn(re(o ? o() : {}).value)
    ) : cn(n.state.value[e]);
    return ee(f, i, Object.keys(r || {}).reduce((c, d) => (process.env.NODE_ENV !== "production" && d in f && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${e}".`), c[d] = Ue(fe(() => {
      mt(n);
      const g = n._s.get(e);
      return r[d].call(g, g);
    })), c), {}));
  }
  return a = qt(e, h, t, n, s, !0), a;
}
function qt(e, t, n = {}, s, o, i) {
  let r;
  const l = ee({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !s._e.active)
    throw new Error("Pinia destroyed");
  const a = { deep: !0 };
  process.env.NODE_ENV !== "production" && (a.onTrigger = (m) => {
    h ? g = m : h == !1 && !_._hotUpdating && (Array.isArray(g) ? g.push(m) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let h, f, c = [], d = [], g;
  const O = s.state.value[e];
  !i && !O && (process.env.NODE_ENV === "production" || !o) && (s.state.value[e] = {});
  const I = re({});
  let z;
  function Z(m) {
    let p;
    h = f = !1, process.env.NODE_ENV !== "production" && (g = []), typeof m == "function" ? (m(s.state.value[e]), p = {
      type: We.patchFunction,
      storeId: e,
      events: g
    }) : (Pt(s.state.value[e], m), p = {
      type: We.patchObject,
      payload: m,
      storeId: e,
      events: g
    });
    const D = z = Symbol();
    an().then(() => {
      z === D && (h = !0);
    }), f = !0, Ce(c, p, s.state.value[e]);
  }
  const R = i ? function() {
    const { state: p } = n, D = p ? p() : {};
    this.$patch((E) => {
      ee(E, D);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : ls
  );
  function P() {
    r.stop(), c = [], d = [], s._s.delete(e);
  }
  const K = (m, p = "") => {
    if (_n in m)
      return m[Rt] = p, m;
    const D = function() {
      mt(s);
      const E = Array.from(arguments), C = [], L = [];
      function De(B) {
        C.push(B);
      }
      function Ve(B) {
        L.push(B);
      }
      Ce(d, {
        args: E,
        name: D[Rt],
        store: _,
        after: De,
        onError: Ve
      });
      let pe;
      try {
        pe = m.apply(this && this.$id === e ? this : _, E);
      } catch (B) {
        throw Ce(L, B), B;
      }
      return pe instanceof Promise ? pe.then((B) => (Ce(C, B), B)).catch((B) => (Ce(L, B), Promise.reject(B))) : (Ce(C, pe), pe);
    };
    return D[_n] = !0, D[Rt] = p, D;
  }, v = /* @__PURE__ */ Ue({
    actions: {},
    getters: {},
    state: [],
    hotState: I
  }), y = {
    _p: s,
    // _s: scope,
    $id: e,
    $onAction: hn.bind(null, d),
    $patch: Z,
    $reset: R,
    $subscribe(m, p = {}) {
      const D = hn(c, m, p.detached, () => E()), E = r.run(() => Io(() => s.state.value[e], (C) => {
        (p.flush === "sync" ? f : h) && m({
          storeId: e,
          type: We.direct,
          events: g
        }, C);
      }, ee({}, a, p)));
      return D;
    },
    $dispose: P
  }, _ = Kt(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Me ? ee(
    {
      _hmrPayload: v,
      _customProperties: Ue(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    y
    // must be added later
    // setupStore
  ) : y);
  s._s.set(e, _);
  const k = (s._a && s._a.runWithContext || Go)(() => s._e.run(() => (r = Os()).run(() => t({ action: K }))));
  for (const m in k) {
    const p = k[m];
    if ($(p) && !mn(p) || le(p))
      process.env.NODE_ENV !== "production" && o ? I.value[m] = nt(k, m) : i || (O && Xo(p) && ($(p) ? p.value = O[m] : Pt(p, O[m])), s.state.value[e][m] = p), process.env.NODE_ENV !== "production" && v.state.push(m);
    else if (typeof p == "function") {
      const D = process.env.NODE_ENV !== "production" && o ? p : K(p, m);
      k[m] = D, process.env.NODE_ENV !== "production" && (v.actions[m] = p), l.actions[m] = p;
    } else process.env.NODE_ENV !== "production" && mn(p) && (v.getters[m] = i ? (
      // @ts-expect-error
      n.getters[m]
    ) : p, Me && (k._getters || // @ts-expect-error: same
    (k._getters = Ue([]))).push(m));
  }
  if (ee(_, k), ee(S(_), k), Object.defineProperty(_, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? I.value : s.state.value[e],
    set: (m) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      Z((p) => {
        ee(p, m);
      });
    }
  }), process.env.NODE_ENV !== "production" && (_._hotUpdate = Ue((m) => {
    _._hotUpdating = !0, m._hmrPayload.state.forEach((p) => {
      if (p in _.$state) {
        const D = m.$state[p], E = _.$state[p];
        typeof D == "object" && Se(D) && Se(E) ? rs(D, E) : m.$state[p] = E;
      }
      _[p] = nt(m.$state, p);
    }), Object.keys(_.$state).forEach((p) => {
      p in m.$state || delete _[p];
    }), h = !1, f = !1, s.state.value[e] = nt(m._hmrPayload, "hotState"), f = !0, an().then(() => {
      h = !0;
    });
    for (const p in m._hmrPayload.actions) {
      const D = m[p];
      _[p] = //
      K(D, p);
    }
    for (const p in m._hmrPayload.getters) {
      const D = m._hmrPayload.getters[p], E = i ? (
        // special handling of options api
        fe(() => (mt(s), D.call(_, _)))
      ) : D;
      _[p] = //
      E;
    }
    Object.keys(_._hmrPayload.getters).forEach((p) => {
      p in m._hmrPayload.getters || delete _[p];
    }), Object.keys(_._hmrPayload.actions).forEach((p) => {
      p in m._hmrPayload.actions || delete _[p];
    }), _._hmrPayload = m._hmrPayload, _._getters = m._getters, _._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Me) {
    const m = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
      Object.defineProperty(_, p, ee({ value: _[p] }, m));
    });
  }
  return s._p.forEach((m) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Me) {
      const p = r.run(() => m({
        store: _,
        app: s._a,
        pinia: s,
        options: l
      }));
      Object.keys(p || {}).forEach((D) => _._customProperties.add(D)), ee(_, p);
    } else
      ee(_, r.run(() => m({
        store: _,
        app: s._a,
        pinia: s,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && _.$state && typeof _.$state == "object" && typeof _.$state.constructor == "function" && !_.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${_.$id}".`), O && i && n.hydrate && n.hydrate(_.$state, O), h = !0, f = !0, _;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zo(e, t, n) {
  let s;
  const o = typeof t == "function";
  s = o ? n : t;
  function i(r, l) {
    const a = Do();
    if (r = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Fe && Fe._testing ? null : r) || (a ? Xn(Yo, null) : null), r && mt(r), process.env.NODE_ENV !== "production" && !Fe)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    r = Fe, r._s.has(e) || (o ? qt(e, t, s, r) : vn(e, s, r), process.env.NODE_ENV !== "production" && (i._pinia = r));
    const h = r._s.get(e);
    if (process.env.NODE_ENV !== "production" && l) {
      const f = "__hot:" + e, c = o ? qt(f, t, s, r, !0) : vn(f, ee({}, s), r, !0);
      l._hotUpdate(c), delete r.state.value[f], r._s.delete(f);
    }
    if (process.env.NODE_ENV !== "production" && Me) {
      const f = Et();
      if (f && f.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const c = f.proxy, d = "_pStores" in c ? c._pStores : c._pStores = {};
        d[e] = h;
      }
    }
    return h;
  }
  return i.$id = e, i;
}
function cs(e) {
  const t = S(e), n = {};
  for (const s in t) {
    const o = t[s];
    o.effect ? n[s] = // ...
    fe({
      get: () => e[s],
      set(i) {
        e[s] = i;
      }
    }) : ($(o) || le(o)) && (n[s] = // ---
    nt(e, s));
  }
  return n;
}
const as = /* @__PURE__ */ Zo("admin", () => {
  const e = re([]), t = re(null), n = re({
    totalUsers: 0,
    activeUsers: 0,
    totalOrders: 0,
    revenue: 0
  }), s = re(!1), o = re(null), i = re([]), r = fe(() => e.value.length), l = fe(
    () => e.value.filter((y) => y.status === "active").length
  ), a = fe(() => {
    const y = { admin: 0, moderator: 0, user: 0 };
    return e.value.forEach((_) => {
      y[_.role]++;
    }), y;
  }), h = fe(() => t.value !== null), f = fe(() => i.value.length > 0);
  async function c() {
    s.value = !0, o.value = null;
    try {
      await new Promise((y) => setTimeout(y, 1e3)), e.value = [
        {
          id: 1,
          name: "Super Admin",
          email: "admin@company.com",
          role: "admin",
          status: "active",
          lastLogin: /* @__PURE__ */ new Date()
        },
        {
          id: 2,
          name: "Moderator Ali",
          email: "ali@company.com",
          role: "moderator",
          status: "active",
          lastLogin: new Date(Date.now() - 1440 * 60 * 1e3)
        },
        {
          id: 3,
          name: "John Smith",
          email: "john@company.com",
          role: "user",
          status: "inactive"
        }
      ], console.log("Admin users fetched:", e.value.length);
    } catch (y) {
      o.value = "Admin foydalanuvchilarni yuklashda xatolik", console.error(y);
    } finally {
      s.value = !1;
    }
  }
  async function d() {
    s.value = !0, o.value = null;
    try {
      await new Promise((y) => setTimeout(y, 800)), n.value = {
        totalUsers: 1250,
        activeUsers: 890,
        totalOrders: 3450,
        revenue: 125e3
      }, console.log("Admin stats fetched:", n.value);
    } catch (y) {
      o.value = "Statistikalarni yuklashda xatolik", console.error(y);
    } finally {
      s.value = !1;
    }
  }
  function g(y) {
    t.value = y, console.log("Current admin set:", y.name);
  }
  function O() {
    t.value = null, i.value = [], console.log("Admin logged out");
  }
  function I(y) {
    const _ = {
      ...y,
      id: Math.max(...e.value.map((x) => x.id), 0) + 1
    };
    e.value.push(_), P(`Yangi foydalanuvchi qo'shildi: ${_.name}`), console.log("User added:", _);
  }
  function z(y, _) {
    const x = e.value.find((k) => k.id === y);
    x && (x.status = _, P(`${x.name} holati ${_} ga o'zgartirildi`), console.log("User status updated:", x));
  }
  function Z(y, _) {
    const x = e.value.find((k) => k.id === y);
    x && (x.role = _, P(`${x.name} roli ${_} ga o'zgartirildi`), console.log("User role updated:", x));
  }
  function R(y) {
    const _ = e.value.findIndex((x) => x.id === y);
    if (_ > -1) {
      const x = e.value.splice(_, 1)[0];
      P(`${x.name} o'chirildi`), console.log("User removed:", x);
    }
  }
  function P(y) {
    i.value.unshift(y), setTimeout(() => {
      K(y);
    }, 5e3);
  }
  function K(y) {
    const _ = i.value.indexOf(y);
    _ > -1 && i.value.splice(_, 1);
  }
  function v() {
    i.value = [];
  }
  return {
    // State
    adminUsers: e,
    currentAdmin: t,
    stats: n,
    loading: s,
    error: o,
    notifications: i,
    // Getters
    totalAdminUsers: r,
    activeAdminUsers: l,
    adminsByRole: a,
    isLoggedIn: h,
    hasNotifications: f,
    // Actions
    fetchAdminUsers: c,
    fetchStats: d,
    setCurrentAdmin: g,
    logout: O,
    addUser: I,
    updateUserStatus: z,
    updateUserRole: Z,
    removeUser: R,
    addNotification: P,
    removeNotification: K,
    clearAllNotifications: v
  };
}), ei = { class: "admin-home q-pa-md" }, ti = { class: "row q-gutter-md" }, ni = { class: "col-12" }, si = {
  key: 0,
  class: "q-mb-md"
}, oi = { class: "col-12" }, ii = { class: "row q-gutter-md" }, ri = { class: "col-md-3 col-sm-6 col-12" }, li = { class: "text-h3" }, ci = { class: "col-md-3 col-sm-6 col-12" }, ai = { class: "text-h3" }, ui = { class: "col-md-3 col-sm-6 col-12" }, fi = { class: "text-h3" }, di = { class: "col-md-3 col-sm-6 col-12" }, pi = { class: "text-h3" }, hi = { class: "col-12" }, _i = { class: "q-gutter-sm" }, mi = { class: "col-12" }, vi = { class: "text-h6 q-mb-md" }, gi = {
  key: 0,
  class: "text-negative q-mb-md"
}, bi = { class: "q-gutter-sm" }, yi = { class: "col-12" }, Ei = { class: "row q-gutter-md" }, Ni = { class: "col" }, wi = { class: "col" }, Si = { class: "col" }, Oi = /* @__PURE__ */ Gn({
  __name: "AdminHome",
  setup(e) {
    const t = as(), {
      adminUsers: n,
      stats: s,
      loading: o,
      error: i,
      notifications: r,
      totalAdminUsers: l,
      activeAdminUsers: a,
      adminsByRole: h,
      hasNotifications: f
    } = cs(t), {
      fetchAdminUsers: c,
      fetchStats: d,
      updateUserStatus: g,
      updateUserRole: O,
      removeUser: I,
      removeNotification: z,
      clearAllNotifications: Z
    } = t, R = [
      {
        name: "id",
        label: "ID",
        field: "id",
        align: "left",
        sortable: !0
      },
      {
        name: "name",
        label: "Ism",
        field: "name",
        align: "left",
        sortable: !0
      },
      {
        name: "email",
        label: "Email",
        field: "email",
        align: "left",
        sortable: !0
      },
      {
        name: "role",
        label: "Rol",
        field: "role",
        align: "center"
      },
      {
        name: "status",
        label: "Holat",
        field: "status",
        align: "center"
      },
      {
        name: "actions",
        label: "Amallar",
        field: "actions",
        align: "center"
      }
    ], P = [
      { label: "Admin", value: "admin" },
      { label: "Moderator", value: "moderator" },
      { label: "User", value: "user" }
    ];
    return Eo(() => {
      d(), c();
    }), (K, v) => {
      const y = F("q-btn"), _ = F("q-banner"), x = F("q-card-section"), k = F("q-card"), m = F("q-chip"), p = F("q-td"), D = F("q-select"), E = F("q-table");
      return ne(), ge("div", ei, [
        u("div", ti, [
          u("div", ni, [
            v[0] || (v[0] = u("h3", { class: "q-mb-md" }, "Admin Boshqaruv Paneli", -1)),
            N(f) ? (ne(), ge("div", si, [
              (ne(!0), ge(Gt, null, Oo(N(r), (C) => (ne(), ht(_, {
                key: C,
                class: "bg-positive text-white q-mb-sm"
              }, {
                action: w(() => [
                  b(y, {
                    flat: "",
                    round: "",
                    icon: "close",
                    onClick: (L) => N(z)(C)
                  }, null, 8, ["onClick"])
                ]),
                default: w(() => [
                  J(T(C) + " ", 1)
                ]),
                _: 2
              }, 1024))), 128))
            ])) : it("", !0)
          ]),
          u("div", oi, [
            u("div", ii, [
              u("div", ri, [
                b(k, { class: "bg-primary text-white" }, {
                  default: w(() => [
                    b(x, null, {
                      default: w(() => [
                        v[1] || (v[1] = u("div", { class: "text-h6" }, "Jami Foydalanuvchilar", -1)),
                        u("div", li, T(N(s).totalUsers), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              u("div", ci, [
                b(k, { class: "bg-positive text-white" }, {
                  default: w(() => [
                    b(x, null, {
                      default: w(() => [
                        v[2] || (v[2] = u("div", { class: "text-h6" }, "Faol Foydalanuvchilar", -1)),
                        u("div", ai, T(N(s).activeUsers), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              u("div", ui, [
                b(k, { class: "bg-info text-white" }, {
                  default: w(() => [
                    b(x, null, {
                      default: w(() => [
                        v[3] || (v[3] = u("div", { class: "text-h6" }, "Jami Buyurtmalar", -1)),
                        u("div", fi, T(N(s).totalOrders), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              u("div", di, [
                b(k, { class: "bg-orange text-white" }, {
                  default: w(() => [
                    b(x, null, {
                      default: w(() => [
                        v[4] || (v[4] = u("div", { class: "text-h6" }, "Daromad", -1)),
                        u("div", pi, "$" + T(N(s).revenue.toLocaleString()), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          u("div", hi, [
            u("div", _i, [
              b(y, {
                color: "primary",
                label: "Statistikalarni yangilash",
                onClick: N(d),
                loading: N(o)
              }, null, 8, ["onClick", "loading"]),
              b(y, {
                color: "secondary",
                label: "Foydalanuvchilarni yuklash",
                onClick: N(c),
                loading: N(o)
              }, null, 8, ["onClick", "loading"]),
              N(f) ? (ne(), ht(y, {
                key: 0,
                color: "negative",
                label: "Bildirishnomalarni tozalash",
                onClick: N(Z)
              }, null, 8, ["onClick"])) : it("", !0)
            ])
          ]),
          u("div", mi, [
            b(k, null, {
              default: w(() => [
                b(x, null, {
                  default: w(() => [
                    u("div", vi, [
                      v[5] || (v[5] = J(" Admin Foydalanuvchilari ", -1)),
                      b(m, {
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: w(() => [
                          J(T(N(l)) + " ta ", 1)
                        ]),
                        _: 1
                      })
                    ]),
                    N(i) ? (ne(), ge("div", gi, T(N(i)), 1)) : it("", !0),
                    b(E, {
                      rows: N(n),
                      columns: R,
                      "row-key": "id",
                      loading: N(o),
                      "binary-state-sort": ""
                    }, {
                      "body-cell-status": w((C) => [
                        b(p, { props: C }, {
                          default: w(() => [
                            b(m, {
                              color: C.value === "active" ? "positive" : "negative",
                              "text-color": "white"
                            }, {
                              default: w(() => [
                                J(T(C.value === "active" ? "Faol" : "Faol emas"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      "body-cell-role": w((C) => [
                        b(p, { props: C }, {
                          default: w(() => [
                            b(D, {
                              "model-value": C.value,
                              options: P,
                              "emit-value": "",
                              "map-options": "",
                              dense: "",
                              "onUpdate:modelValue": (L) => N(O)(C.row.id, L)
                            }, null, 8, ["model-value", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      "body-cell-actions": w((C) => [
                        b(p, { props: C }, {
                          default: w(() => [
                            u("div", bi, [
                              b(y, {
                                size: "sm",
                                color: C.row.status === "active" ? "negative" : "positive",
                                label: C.row.status === "active" ? "Faolsizlashtirish" : "Faollashtirish",
                                onClick: (L) => N(g)(C.row.id, C.row.status === "active" ? "inactive" : "active")
                              }, null, 8, ["color", "label", "onClick"]),
                              b(y, {
                                size: "sm",
                                color: "negative",
                                label: "O'chirish",
                                onClick: (L) => N(I)(C.row.id)
                              }, null, 8, ["onClick"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      _: 1
                    }, 8, ["rows", "loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          u("div", yi, [
            b(k, null, {
              default: w(() => [
                b(x, null, {
                  default: w(() => [
                    v[6] || (v[6] = u("div", { class: "text-h6 q-mb-md" }, "Rollar bo'yicha statistika", -1)),
                    u("div", Ei, [
                      u("div", Ni, [
                        b(m, {
                          color: "red",
                          "text-color": "white",
                          size: "lg"
                        }, {
                          default: w(() => [
                            J(" Admin: " + T(N(h).admin), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      u("div", wi, [
                        b(m, {
                          color: "orange",
                          "text-color": "white",
                          size: "lg"
                        }, {
                          default: w(() => [
                            J(" Moderator: " + T(N(h).moderator), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      u("div", Si, [
                        b(m, {
                          color: "blue",
                          "text-color": "white",
                          size: "lg"
                        }, {
                          default: w(() => [
                            J(" User: " + T(N(h).user), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), Xi = /* @__PURE__ */ Zt(Oi, [["__scopeId", "data-v-8545491d"]]), xi = { class: "admin-settings q-pa-md" }, Di = { class: "row q-gutter-md" }, Vi = { class: "col-12 col-md-6" }, Ri = {
  key: 0,
  class: "q-gutter-md"
}, Ci = { class: "q-mt-md" }, Ai = {
  key: 1,
  class: "text-center"
}, Ii = { class: "col-12 col-md-6" }, ki = { class: "q-mt-md" }, $i = { class: "col-12" }, Ti = { class: "row q-gutter-md" }, Pi = { class: "col-12 col-sm-6 col-md-3" }, qi = { class: "stat-item" }, Ui = { class: "stat-value" }, ji = { class: "col-12 col-sm-6 col-md-3" }, Fi = { class: "stat-item" }, Mi = { class: "stat-value" }, Hi = { class: "col-12 col-sm-6 col-md-3" }, Li = { class: "stat-item" }, Wi = { class: "stat-value" }, zi = { class: "col-12 col-sm-6 col-md-3" }, Ki = { class: "stat-item" }, Bi = { class: "stat-value" }, Ji = { class: "col-12" }, Yi = { class: "q-gutter-sm" }, Gi = /* @__PURE__ */ Gn({
  __name: "AdminSettings",
  setup(e) {
    const t = as(), {
      currentAdmin: n,
      stats: s,
      loading: o,
      notifications: i,
      totalAdminUsers: r,
      activeAdminUsers: l,
      isLoggedIn: a,
      hasNotifications: h,
      adminUsers: f
    } = cs(t), {
      setCurrentAdmin: c,
      logout: d,
      addUser: g,
      fetchAdminUsers: O,
      fetchStats: I,
      addNotification: z,
      clearAllNotifications: Z
    } = t, R = re({
      name: "",
      email: "",
      role: "user",
      status: "active"
    }), P = [
      { label: "Admin", value: "admin" },
      { label: "Moderator", value: "moderator" },
      { label: "User", value: "user" }
    ], K = [
      { label: "Faol", value: "active" },
      { label: "Faol emas", value: "inactive" }
    ], v = fe(() => R.value.name.trim() && R.value.email.trim() && R.value.email.includes("@"));
    function y(D) {
      switch (D) {
        case "admin":
          return "red";
        case "moderator":
          return "orange";
        case "user":
          return "blue";
        default:
          return "grey";
      }
    }
    function _() {
      c({
        id: 999,
        name: "Demo Admin",
        email: "demo@admin.com",
        role: "admin",
        status: "active",
        lastLogin: /* @__PURE__ */ new Date()
      }), z("Demo admin sifatida tizimga kirildi");
    }
    function x() {
      v.value && (g({
        name: R.value.name,
        email: R.value.email,
        role: R.value.role,
        status: R.value.status
      }), k());
    }
    function k() {
      R.value = {
        name: "",
        email: "",
        role: "user",
        status: "active"
      };
    }
    function m() {
      I(), O(), z("Barcha ma'lumotlar yangilandi");
    }
    function p() {
      z("Bu test bildirishnomasi - " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
    }
    return (D, E) => {
      const C = F("q-chip"), L = F("q-btn"), De = F("q-card-section"), Ve = F("q-card"), pe = F("q-input"), B = F("q-select"), us = F("q-form");
      return ne(), ge("div", xi, [
        u("div", Di, [
          E[17] || (E[17] = u("div", { class: "col-12" }, [
            u("h3", { class: "q-mb-md" }, "Admin Sozlamalar")
          ], -1)),
          u("div", Vi, [
            b(Ve, null, {
              default: w(() => [
                b(De, null, {
                  default: w(() => {
                    var j, en, tn, nn;
                    return [
                      E[9] || (E[9] = u("div", { class: "text-h6 q-mb-md" }, "Joriy Admin Ma'lumotlari", -1)),
                      N(a) ? (ne(), ge("div", Ri, [
                        u("div", null, [
                          E[4] || (E[4] = u("strong", null, "Ism:", -1)),
                          J(" " + T((j = N(n)) == null ? void 0 : j.name), 1)
                        ]),
                        u("div", null, [
                          E[5] || (E[5] = u("strong", null, "Email:", -1)),
                          J(" " + T((en = N(n)) == null ? void 0 : en.email), 1)
                        ]),
                        u("div", null, [
                          E[6] || (E[6] = u("strong", null, "Rol:", -1)),
                          b(C, {
                            color: y((tn = N(n)) == null ? void 0 : tn.role),
                            "text-color": "white"
                          }, {
                            default: w(() => {
                              var Pe;
                              return [
                                J(T((Pe = N(n)) == null ? void 0 : Pe.role), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        u("div", null, [
                          E[7] || (E[7] = u("strong", null, "Holat:", -1)),
                          b(C, {
                            color: ((nn = N(n)) == null ? void 0 : nn.status) === "active" ? "positive" : "negative",
                            "text-color": "white"
                          }, {
                            default: w(() => {
                              var Pe;
                              return [
                                J(T(((Pe = N(n)) == null ? void 0 : Pe.status) === "active" ? "Faol" : "Faol emas"), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        u("div", Ci, [
                          b(L, {
                            color: "negative",
                            label: "Chiqish",
                            onClick: N(d)
                          }, null, 8, ["onClick"])
                        ])
                      ])) : (ne(), ge("div", Ai, [
                        E[8] || (E[8] = u("div", { class: "q-mb-md" }, "Tizimga kirilmagan", -1)),
                        b(L, {
                          color: "primary",
                          label: "Admin sifatida kirish",
                          onClick: _
                        })
                      ]))
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          u("div", Ii, [
            b(Ve, null, {
              default: w(() => [
                b(De, null, {
                  default: w(() => [
                    E[10] || (E[10] = u("div", { class: "text-h6 q-mb-md" }, "Yangi Foydalanuvchi Qo'shish", -1)),
                    b(us, {
                      onSubmit: x,
                      class: "q-gutter-md"
                    }, {
                      default: w(() => [
                        b(pe, {
                          modelValue: R.value.name,
                          "onUpdate:modelValue": E[0] || (E[0] = (j) => R.value.name = j),
                          label: "Ism",
                          required: "",
                          rules: [(j) => j && j.length > 0 || "Ism majburiy"]
                        }, null, 8, ["modelValue", "rules"]),
                        b(pe, {
                          modelValue: R.value.email,
                          "onUpdate:modelValue": E[1] || (E[1] = (j) => R.value.email = j),
                          label: "Email",
                          type: "email",
                          required: "",
                          rules: [
                            (j) => j && j.length > 0 || "Email majburiy",
                            (j) => j.includes("@") || "Email formati noto'g'ri"
                          ]
                        }, null, 8, ["modelValue", "rules"]),
                        b(B, {
                          modelValue: R.value.role,
                          "onUpdate:modelValue": E[2] || (E[2] = (j) => R.value.role = j),
                          options: P,
                          label: "Rol",
                          "emit-value": "",
                          "map-options": "",
                          required: ""
                        }, null, 8, ["modelValue"]),
                        b(B, {
                          modelValue: R.value.status,
                          "onUpdate:modelValue": E[3] || (E[3] = (j) => R.value.status = j),
                          options: K,
                          label: "Holat",
                          "emit-value": "",
                          "map-options": "",
                          required: ""
                        }, null, 8, ["modelValue"]),
                        u("div", ki, [
                          b(L, {
                            type: "submit",
                            color: "primary",
                            label: "Qo'shish",
                            disable: !v.value
                          }, null, 8, ["disable"]),
                          b(L, {
                            type: "button",
                            color: "grey",
                            label: "Tozalash",
                            class: "q-ml-sm",
                            onClick: k
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          u("div", $i, [
            b(Ve, null, {
              default: w(() => [
                b(De, null, {
                  default: w(() => [
                    E[15] || (E[15] = u("div", { class: "text-h6 q-mb-md" }, "Tizim Statistikalari", -1)),
                    u("div", Ti, [
                      u("div", Pi, [
                        u("div", qi, [
                          u("div", Ui, T(N(r)), 1),
                          E[11] || (E[11] = u("div", { class: "stat-label" }, "Jami Adminlar", -1))
                        ])
                      ]),
                      u("div", ji, [
                        u("div", Fi, [
                          u("div", Mi, T(N(l)), 1),
                          E[12] || (E[12] = u("div", { class: "stat-label" }, "Faol Adminlar", -1))
                        ])
                      ]),
                      u("div", Hi, [
                        u("div", Li, [
                          u("div", Wi, T(N(s).totalUsers), 1),
                          E[13] || (E[13] = u("div", { class: "stat-label" }, "Jami Foydalanuvchilar", -1))
                        ])
                      ]),
                      u("div", zi, [
                        u("div", Ki, [
                          u("div", Bi, "$" + T(N(s).revenue.toLocaleString()), 1),
                          E[14] || (E[14] = u("div", { class: "stat-label" }, "Jami Daromad", -1))
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          u("div", Ji, [
            b(Ve, null, {
              default: w(() => [
                b(De, null, {
                  default: w(() => [
                    E[16] || (E[16] = u("div", { class: "text-h6 q-mb-md" }, "Tizim Amalları", -1)),
                    u("div", Yi, [
                      b(L, {
                        color: "primary",
                        label: "Ma'lumotlarni yangilash",
                        onClick: m,
                        loading: N(o)
                      }, null, 8, ["loading"]),
                      b(L, {
                        color: "warning",
                        label: "Test bildirishnoma",
                        onClick: p
                      }),
                      N(h) ? (ne(), ht(L, {
                        key: 0,
                        color: "negative",
                        label: "Barcha bildirishnomalarni tozalash",
                        onClick: N(Z)
                      }, null, 8, ["onClick"])) : it("", !0)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
}), Zi = /* @__PURE__ */ Zt(Gi, [["__scopeId", "data-v-af84f52d"]]);
export {
  Xi as AdminHome,
  Qi as AdminLayout,
  Zi as AdminSettings,
  as as useAdminStore
};
