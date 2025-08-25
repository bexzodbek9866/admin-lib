import { resolveComponent as j, createElementBlock as H, openBlock as I, createElementVNode as e, createVNode as u, createTextVNode as J, withCtx as h, inject as Vt, defineComponent as mt, ref as P, unref as _, toDisplayString as D, Fragment as qt, renderList as Ut, toRaw as At, computed as z, isRef as K, isReactive as lt, toRef as nt, hasInjectionContext as Pt, getCurrentInstance as $t, reactive as xt, markRaw as tt, effectScope as Ct, nextTick as _t, getCurrentScope as jt, onScopeDispose as zt, watch as It, toRefs as ht, createBlock as Rt, createCommentVNode as Ft } from "vue";
import { BaseCard as B, BaseButton as rt } from "@apps/shared";
const it = (t, i) => {
  const s = t.__vccOpts || t;
  for (const [o, c] of i)
    s[o] = c;
  return s;
}, Lt = {};
function Tt(t, i) {
  const s = j("router-link"), o = j("router-view");
  return I(), H("div", null, [
    i[3] || (i[3] = e("h2", null, "Admin Layout", -1)),
    e("nav", null, [
      u(s, { to: "/admin" }, {
        default: h(() => [...i[0] || (i[0] = [
          J("Home", -1)
        ])]),
        _: 1
      }),
      i[2] || (i[2] = J(" | ", -1)),
      u(s, { to: "/admin/settings" }, {
        default: h(() => [...i[1] || (i[1] = [
          J("Settingsddd ddd", -1)
        ])]),
        _: 1
      })
    ]),
    u(o)
  ]);
}
const He = /* @__PURE__ */ it(Lt, [["render", Tt]]);
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
var bt;
(function(t) {
  t.pop = "pop", t.push = "push";
})(bt || (bt = {}));
var gt;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = "";
})(gt || (gt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var yt;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
})(yt || (yt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Bt = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Ht() {
  return Vt(Bt);
}
const Mt = { class: "admin-home" }, Jt = { class: "dashboard-cards" }, Wt = { class: "card-number" }, Yt = { class: "card-number" }, Qt = { class: "card-number" }, Xt = { class: "card-number" }, Zt = { class: "activity-list" }, Kt = { class: "activity-content" }, Gt = { class: "quick-actions" }, te = { class: "actions-grid" }, ee = /* @__PURE__ */ mt({
  __name: "AdminHome",
  setup(t) {
    const i = Ht(), s = P({
      totalUsers: 1250,
      activeSessions: 89,
      totalOrders: 3456,
      totalRevenue: 125e3
    }), o = P([
      {
        id: 1,
        title: "Yangi foydalanuvchi qo'shildi",
        description: "Ahmad Karimov tizimga ro'yxatdan o'tdi",
        date: /* @__PURE__ */ new Date()
      },
      {
        id: 2,
        title: "Buyurtma yaratildi",
        description: "Yangi buyurtma #1234 yaratildi",
        date: /* @__PURE__ */ new Date()
      }
    ]), c = (m) => new Intl.DateTimeFormat("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(m), v = () => {
      alert("Hisobotlar sahifasi hali tayyorlanmoqda!");
    };
    return (m, f) => (I(), H("div", Mt, [
      f[7] || (f[7] = e("div", { class: "welcome-section" }, [
        e("h1", null, "Admin Panelga Xush Kelibsiz!"),
        e("p", null, "Bu yerda siz tizimni to'liq boshqarishingiz mumkin")
      ], -1)),
      e("div", Jt, [
        u(_(B), {
          title: "Umumiy Foydalanuvchilar",
          subtitle: "Ro'yxatdan o'tgan foydalanuvchilar",
          class: "stats-card"
        }, {
          default: h(() => [
            e("div", Wt, D(s.value.totalUsers), 1)
          ]),
          _: 1
        }),
        u(_(B), {
          title: "Faol Sessiyalar",
          subtitle: "Hozirda faol sessiyalar",
          class: "stats-card"
        }, {
          default: h(() => [
            e("div", Yt, D(s.value.activeSessions), 1)
          ]),
          _: 1
        }),
        u(_(B), {
          title: "Jami Buyurtmalar",
          subtitle: "Barcha buyurtmalar soni",
          class: "stats-card"
        }, {
          default: h(() => [
            e("div", Qt, D(s.value.totalOrders), 1)
          ]),
          _: 1
        }),
        u(_(B), {
          title: "Daromad",
          subtitle: "Jami daromad miqdori",
          class: "stats-card"
        }, {
          default: h(() => [
            e("div", Xt, " $" + D(s.value.totalRevenue), 1)
          ]),
          _: 1
        })
      ]),
      u(_(B), {
        title: "So'nggi Tizim Faoliyati",
        class: "recent-activity-card"
      }, {
        default: h(() => [
          e("div", Zt, [
            (I(!0), H(qt, null, Ut(o.value, (E) => (I(), H("div", {
              key: E.id,
              class: "activity-item"
            }, [
              f[2] || (f[2] = e("div", { class: "activity-icon" }, " ⚡ ", -1)),
              e("div", Kt, [
                e("h4", null, D(E.title), 1),
                e("p", null, D(E.description), 1),
                e("small", null, D(c(E.date)), 1)
              ])
            ]))), 128))
          ])
        ]),
        _: 1
      }),
      e("div", Gt, [
        f[6] || (f[6] = e("h2", null, "Tezkor Boshqaruv", -1)),
        e("div", te, [
          u(_(B), { class: "action-card-wrapper" }, {
            actions: h(() => [
              u(_(rt), {
                class: "full-width",
                color: "primary",
                label: "Foydalanuvchilarni Ko'rish",
                onClick: f[0] || (f[0] = (E) => _(i).push("/admin/users"))
              })
            ]),
            default: h(() => [
              f[3] || (f[3] = e("div", { class: "action-content" }, [
                e("div", { class: "action-icon" }, " 👥 "),
                e("h3", null, "Foydalanuvchilar"),
                e("p", null, "Foydalanuvchilarni boshqarish")
              ], -1))
            ]),
            _: 1
          }),
          u(_(B), { class: "action-card-wrapper" }, {
            actions: h(() => [
              u(_(rt), {
                class: "full-width",
                color: "secondary",
                label: "Sozlamalarni Ochish",
                onClick: f[1] || (f[1] = (E) => _(i).push("/admin/settings"))
              })
            ]),
            default: h(() => [
              f[4] || (f[4] = e("div", { class: "action-content" }, [
                e("div", { class: "action-icon" }, " ⚙️ "),
                e("h3", null, "Sozlamalar"),
                e("p", null, "Tizim sozlamalarini o'zgartirish")
              ], -1))
            ]),
            _: 1
          }),
          u(_(B), { class: "action-card-wrapper" }, {
            actions: h(() => [
              u(_(rt), {
                class: "full-width",
                color: "accent",
                label: "Hisobotlarni Ko'rish",
                onClick: v
              })
            ]),
            default: h(() => [
              f[5] || (f[5] = e("div", { class: "action-content" }, [
                e("div", { class: "action-icon" }, " 📊 "),
                e("h3", null, "Hisobotlar"),
                e("p", null, "Statistika va hisobotlar")
              ], -1))
            ]),
            _: 1
          })
        ])
      ])
    ]));
  }
}), oe = /* @__PURE__ */ it(ee, [["__scopeId", "data-v-6e4419e8"]]), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let et;
const at = (t) => et = t, ne = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function W(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var st;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(st || (st = {}));
const ot = typeof window < "u";
function Dt(t, i) {
  for (const s in i) {
    const o = i[s];
    if (!(s in t))
      continue;
    const c = t[s];
    W(c) && W(o) && !K(o) && !lt(o) ? t[s] = Dt(c, o) : t[s] = o;
  }
  return t;
}
const wt = () => {
};
function Et(t, i, s, o = wt) {
  t.push(i);
  const c = () => {
    const v = t.indexOf(i);
    v > -1 && (t.splice(v, 1), o());
  };
  return !s && jt() && zt(c), c;
}
function Z(t, ...i) {
  t.slice().forEach((s) => {
    s(...i);
  });
}
const ae = (t) => t(), Nt = Symbol(), ct = Symbol();
function ut(t, i) {
  t instanceof Map && i instanceof Map ? i.forEach((s, o) => t.set(o, s)) : t instanceof Set && i instanceof Set && i.forEach(t.add, t);
  for (const s in i) {
    if (!i.hasOwnProperty(s))
      continue;
    const o = i[s], c = t[s];
    W(c) && W(o) && t.hasOwnProperty(s) && !K(o) && !lt(o) ? t[s] = ut(c, o) : t[s] = o;
  }
  return t;
}
const le = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function ie(t) {
  return !W(t) || !Object.prototype.hasOwnProperty.call(t, le);
}
const { assign: q } = Object;
function Ot(t) {
  return !!(K(t) && t.effect);
}
function St(t, i, s, o) {
  const { state: c, actions: v, getters: m } = i, f = s.state.value[t];
  let E;
  function O() {
    !f && (process.env.NODE_ENV === "production" || !o) && (s.state.value[t] = c ? c() : {});
    const b = process.env.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      ht(P(c ? c() : {}).value)
    ) : ht(s.state.value[t]);
    return q(b, v, Object.keys(m || {}).reduce((S, w) => (process.env.NODE_ENV !== "production" && w in b && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${w}" in store "${t}".`), S[w] = tt(z(() => {
      at(s);
      const k = s._s.get(t);
      return m[w].call(k, k);
    })), S), {}));
  }
  return E = dt(t, O, i, s, o, !0), E;
}
function dt(t, i, s = {}, o, c, v) {
  let m;
  const f = q({ actions: {} }, s);
  if (process.env.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const E = { deep: !0 };
  process.env.NODE_ENV !== "production" && (E.onTrigger = (l) => {
    O ? k = l : O == !1 && !a._hotUpdating && (Array.isArray(k) ? k.push(l) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let O, b, S = [], w = [], k;
  const $ = o.state.value[t];
  !v && !$ && (process.env.NODE_ENV === "production" || !c) && (o.state.value[t] = {});
  const M = P({});
  let R;
  function Y(l) {
    let n;
    O = b = !1, process.env.NODE_ENV !== "production" && (k = []), typeof l == "function" ? (l(o.state.value[t]), n = {
      type: st.patchFunction,
      storeId: t,
      events: k
    }) : (ut(o.state.value[t], l), n = {
      type: st.patchObject,
      payload: l,
      storeId: t,
      events: k
    });
    const p = R = Symbol();
    _t().then(() => {
      R === p && (O = !0);
    }), b = !0, Z(S, n, o.state.value[t]);
  }
  const g = v ? function() {
    const { state: n } = s, p = n ? n() : {};
    this.$patch((r) => {
      q(r, p);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`);
    } : wt
  );
  function x() {
    m.stop(), S = [], w = [], o._s.delete(t);
  }
  const F = (l, n = "") => {
    if (Nt in l)
      return l[ct] = n, l;
    const p = function() {
      at(o);
      const r = Array.from(arguments), L = [], U = [];
      function Q(A) {
        L.push(A);
      }
      function X(A) {
        U.push(A);
      }
      Z(w, {
        args: r,
        name: p[ct],
        store: a,
        after: Q,
        onError: X
      });
      let T;
      try {
        T = l.apply(this && this.$id === t ? this : a, r);
      } catch (A) {
        throw Z(U, A), A;
      }
      return T instanceof Promise ? T.then((A) => (Z(L, A), A)).catch((A) => (Z(U, A), Promise.reject(A))) : (Z(L, T), T);
    };
    return p[Nt] = !0, p[ct] = n, p;
  }, C = /* @__PURE__ */ tt({
    actions: {},
    getters: {},
    state: [],
    hotState: M
  }), d = {
    _p: o,
    // _s: scope,
    $id: t,
    $onAction: Et.bind(null, w),
    $patch: Y,
    $reset: g,
    $subscribe(l, n = {}) {
      const p = Et(S, l, n.detached, () => r()), r = m.run(() => It(() => o.state.value[t], (L) => {
        (n.flush === "sync" ? b : O) && l({
          storeId: t,
          type: st.direct,
          events: k
        }, L);
      }, q({}, E, n)));
      return p;
    },
    $dispose: x
  }, a = xt(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ot ? q(
    {
      _hmrPayload: C,
      _customProperties: tt(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    d
    // must be added later
    // setupStore
  ) : d);
  o._s.set(t, a);
  const V = (o._a && o._a.runWithContext || ae)(() => o._e.run(() => (m = Ct()).run(() => i({ action: F }))));
  for (const l in V) {
    const n = V[l];
    if (K(n) && !Ot(n) || lt(n))
      process.env.NODE_ENV !== "production" && c ? M.value[l] = nt(V, l) : v || ($ && ie(n) && (K(n) ? n.value = $[l] : ut(n, $[l])), o.state.value[t][l] = n), process.env.NODE_ENV !== "production" && C.state.push(l);
    else if (typeof n == "function") {
      const p = process.env.NODE_ENV !== "production" && c ? n : F(n, l);
      V[l] = p, process.env.NODE_ENV !== "production" && (C.actions[l] = n), f.actions[l] = n;
    } else process.env.NODE_ENV !== "production" && Ot(n) && (C.getters[l] = v ? (
      // @ts-expect-error
      s.getters[l]
    ) : n, ot && (V._getters || // @ts-expect-error: same
    (V._getters = tt([]))).push(l));
  }
  if (q(a, V), q(At(a), V), Object.defineProperty(a, "$state", {
    get: () => process.env.NODE_ENV !== "production" && c ? M.value : o.state.value[t],
    set: (l) => {
      if (process.env.NODE_ENV !== "production" && c)
        throw new Error("cannot set hotState");
      Y((n) => {
        q(n, l);
      });
    }
  }), process.env.NODE_ENV !== "production" && (a._hotUpdate = tt((l) => {
    a._hotUpdating = !0, l._hmrPayload.state.forEach((n) => {
      if (n in a.$state) {
        const p = l.$state[n], r = a.$state[n];
        typeof p == "object" && W(p) && W(r) ? Dt(p, r) : l.$state[n] = r;
      }
      a[n] = nt(l.$state, n);
    }), Object.keys(a.$state).forEach((n) => {
      n in l.$state || delete a[n];
    }), O = !1, b = !1, o.state.value[t] = nt(l._hmrPayload, "hotState"), b = !0, _t().then(() => {
      O = !0;
    });
    for (const n in l._hmrPayload.actions) {
      const p = l[n];
      a[n] = //
      F(p, n);
    }
    for (const n in l._hmrPayload.getters) {
      const p = l._hmrPayload.getters[n], r = v ? (
        // special handling of options api
        z(() => (at(o), p.call(a, a)))
      ) : p;
      a[n] = //
      r;
    }
    Object.keys(a._hmrPayload.getters).forEach((n) => {
      n in l._hmrPayload.getters || delete a[n];
    }), Object.keys(a._hmrPayload.actions).forEach((n) => {
      n in l._hmrPayload.actions || delete a[n];
    }), a._hmrPayload = l._hmrPayload, a._getters = l._getters, a._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ot) {
    const l = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((n) => {
      Object.defineProperty(a, n, q({ value: a[n] }, l));
    });
  }
  return o._p.forEach((l) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ot) {
      const n = m.run(() => l({
        store: a,
        app: o._a,
        pinia: o,
        options: f
      }));
      Object.keys(n || {}).forEach((p) => a._customProperties.add(p)), q(a, n);
    } else
      q(a, m.run(() => l({
        store: a,
        app: o._a,
        pinia: o,
        options: f
      })));
  }), process.env.NODE_ENV !== "production" && a.$state && typeof a.$state == "object" && typeof a.$state.constructor == "function" && !a.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${a.$id}".`), $ && v && s.hydrate && s.hydrate(a.$state, $), O = !0, b = !0, a;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function re(t, i, s) {
  let o;
  const c = typeof i == "function";
  o = c ? s : i;
  function v(m, f) {
    const E = Pt();
    if (m = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && et && et._testing ? null : m) || (E ? Vt(ne, null) : null), m && at(m), process.env.NODE_ENV !== "production" && !et)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    m = et, m._s.has(t) || (c ? dt(t, i, o, m) : St(t, o, m), process.env.NODE_ENV !== "production" && (v._pinia = m));
    const O = m._s.get(t);
    if (process.env.NODE_ENV !== "production" && f) {
      const b = "__hot:" + t, S = c ? dt(b, i, o, m, !0) : St(b, q({}, o), m, !0);
      f._hotUpdate(S), delete m.state.value[b], m._s.delete(b);
    }
    if (process.env.NODE_ENV !== "production" && ot) {
      const b = $t();
      if (b && b.proxy && // avoid adding stores that are just built for hot module replacement
      !f) {
        const S = b.proxy, w = "_pStores" in S ? S._pStores : S._pStores = {};
        w[t] = O;
      }
    }
    return O;
  }
  return v.$id = t, v;
}
function ce(t) {
  const i = At(t), s = {};
  for (const o in i) {
    const c = i[o];
    c.effect ? s[o] = // ...
    z({
      get: () => t[o],
      set(v) {
        t[o] = v;
      }
    }) : (K(c) || lt(c)) && (s[o] = // ---
    nt(t, o));
  }
  return s;
}
const ue = /* @__PURE__ */ re("admin", () => {
  const t = P([]), i = P(null), s = P({
    totalUsers: 0,
    activeUsers: 0,
    totalOrders: 0,
    revenue: 0
  }), o = P(!1), c = P(null), v = P([]), m = z(() => t.value.length), f = z(
    () => t.value.filter((d) => d.status === "active").length
  ), E = z(() => {
    const d = { admin: 0, moderator: 0, user: 0 };
    return t.value.forEach((a) => {
      d[a.role]++;
    }), d;
  }), O = z(() => i.value !== null), b = z(() => v.value.length > 0);
  async function S() {
    o.value = !0, c.value = null;
    try {
      await new Promise((d) => setTimeout(d, 1e3)), t.value = [
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
      ], console.log("Admin users fetched:", t.value.length);
    } catch (d) {
      c.value = "Admin foydalanuvchilarni yuklashda xatolik", console.error(d);
    } finally {
      o.value = !1;
    }
  }
  async function w() {
    o.value = !0, c.value = null;
    try {
      await new Promise((d) => setTimeout(d, 800)), s.value = {
        totalUsers: 1250,
        activeUsers: 890,
        totalOrders: 3450,
        revenue: 125e3
      }, console.log("Admin stats fetched:", s.value);
    } catch (d) {
      c.value = "Statistikalarni yuklashda xatolik", console.error(d);
    } finally {
      o.value = !1;
    }
  }
  function k(d) {
    i.value = d, console.log("Current admin set:", d.name);
  }
  function $() {
    i.value = null, v.value = [], console.log("Admin logged out");
  }
  function M(d) {
    const a = {
      ...d,
      id: Math.max(...t.value.map((y) => y.id), 0) + 1
    };
    t.value.push(a), x(`Yangi foydalanuvchi qo'shildi: ${a.name}`), console.log("User added:", a);
  }
  function R(d, a) {
    const y = t.value.find((V) => V.id === d);
    y && (y.status = a, x(`${y.name} holati ${a} ga o'zgartirildi`), console.log("User status updated:", y));
  }
  function Y(d, a) {
    const y = t.value.find((V) => V.id === d);
    y && (y.role = a, x(`${y.name} roli ${a} ga o'zgartirildi`), console.log("User role updated:", y));
  }
  function g(d) {
    const a = t.value.findIndex((y) => y.id === d);
    if (a > -1) {
      const y = t.value.splice(a, 1)[0];
      x(`${y.name} o'chirildi`), console.log("User removed:", y);
    }
  }
  function x(d) {
    v.value.unshift(d), setTimeout(() => {
      F(d);
    }, 5e3);
  }
  function F(d) {
    const a = v.value.indexOf(d);
    a > -1 && v.value.splice(a, 1);
  }
  function C() {
    v.value = [];
  }
  return {
    // State
    adminUsers: t,
    currentAdmin: i,
    stats: s,
    loading: o,
    error: c,
    notifications: v,
    // Getters
    totalAdminUsers: m,
    activeAdminUsers: f,
    adminsByRole: E,
    isLoggedIn: O,
    hasNotifications: b,
    // Actions
    fetchAdminUsers: S,
    fetchStats: w,
    setCurrentAdmin: k,
    logout: $,
    addUser: M,
    updateUserStatus: R,
    updateUserRole: Y,
    removeUser: g,
    addNotification: x,
    removeNotification: F,
    clearAllNotifications: C
  };
}), de = { class: "admin-settings q-pa-md" }, me = { class: "row q-gutter-md" }, fe = { class: "col-12 col-md-6" }, ve = {
  key: 0,
  class: "q-gutter-md"
}, pe = { class: "q-mt-md" }, _e = {
  key: 1,
  class: "text-center"
}, he = { class: "col-12 col-md-6" }, be = { class: "q-mt-md" }, ge = { class: "col-12" }, ye = { class: "row q-gutter-md" }, Ee = { class: "col-12 col-sm-6 col-md-3" }, Ne = { class: "stat-item" }, Oe = { class: "stat-value" }, Se = { class: "col-12 col-sm-6 col-md-3" }, Ve = { class: "stat-item" }, Ae = { class: "stat-value" }, De = { class: "col-12 col-sm-6 col-md-3" }, we = { class: "stat-item" }, ke = { class: "stat-value" }, qe = { class: "col-12 col-sm-6 col-md-3" }, Ue = { class: "stat-item" }, Pe = { class: "stat-value" }, $e = { class: "col-12" }, xe = { class: "q-gutter-sm" }, Ce = /* @__PURE__ */ mt({
  __name: "AdminSettings",
  setup(t) {
    const i = ue(), {
      currentAdmin: s,
      stats: o,
      loading: c,
      notifications: v,
      totalAdminUsers: m,
      activeAdminUsers: f,
      isLoggedIn: E,
      hasNotifications: O,
      adminUsers: b
    } = ce(i), {
      setCurrentAdmin: S,
      logout: w,
      addUser: k,
      fetchAdminUsers: $,
      fetchStats: M,
      addNotification: R,
      clearAllNotifications: Y
    } = i, g = P({
      name: "",
      email: "",
      role: "user",
      status: "active"
    }), x = [
      { label: "Admin", value: "admin" },
      { label: "Moderator", value: "moderator" },
      { label: "User", value: "user" }
    ], F = [
      { label: "Faol", value: "active" },
      { label: "Faol emas", value: "inactive" }
    ], C = z(() => g.value.name.trim() && g.value.email.trim() && g.value.email.includes("@"));
    function d(p) {
      switch (p) {
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
    function a() {
      S({
        id: 999,
        name: "Demo Admin",
        email: "demo@admin.com",
        role: "admin",
        status: "active",
        lastLogin: /* @__PURE__ */ new Date()
      }), R("Demo admin sifatida tizimga kirildi");
    }
    function y() {
      C.value && (k({
        name: g.value.name,
        email: g.value.email,
        role: g.value.role,
        status: g.value.status
      }), V());
    }
    function V() {
      g.value = {
        name: "",
        email: "",
        role: "user",
        status: "active"
      };
    }
    function l() {
      M(), $(), R("Barcha ma'lumotlar yangilandi");
    }
    function n() {
      R("Bu test bildirishnomasi - " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
    }
    return (p, r) => {
      const L = j("q-chip"), U = j("q-btn"), Q = j("q-card-section"), X = j("q-card"), T = j("q-input"), A = j("q-select"), kt = j("q-form");
      return I(), H("div", de, [
        e("div", me, [
          r[17] || (r[17] = e("div", { class: "col-12" }, [
            e("h3", { class: "q-mb-md" }, "Admin Sozlamalar")
          ], -1)),
          e("div", fe, [
            u(X, null, {
              default: h(() => [
                u(Q, null, {
                  default: h(() => {
                    var N, ft, vt, pt;
                    return [
                      r[9] || (r[9] = e("div", { class: "text-h6 q-mb-md" }, "Joriy Admin Ma'lumotlari", -1)),
                      _(E) ? (I(), H("div", ve, [
                        e("div", null, [
                          r[4] || (r[4] = e("strong", null, "Ism:", -1)),
                          J(" " + D((N = _(s)) == null ? void 0 : N.name), 1)
                        ]),
                        e("div", null, [
                          r[5] || (r[5] = e("strong", null, "Email:", -1)),
                          J(" " + D((ft = _(s)) == null ? void 0 : ft.email), 1)
                        ]),
                        e("div", null, [
                          r[6] || (r[6] = e("strong", null, "Rol:", -1)),
                          u(L, {
                            color: d((vt = _(s)) == null ? void 0 : vt.role),
                            "text-color": "white"
                          }, {
                            default: h(() => {
                              var G;
                              return [
                                J(D((G = _(s)) == null ? void 0 : G.role), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        e("div", null, [
                          r[7] || (r[7] = e("strong", null, "Holat:", -1)),
                          u(L, {
                            color: ((pt = _(s)) == null ? void 0 : pt.status) === "active" ? "positive" : "negative",
                            "text-color": "white"
                          }, {
                            default: h(() => {
                              var G;
                              return [
                                J(D(((G = _(s)) == null ? void 0 : G.status) === "active" ? "Faol" : "Faol emas"), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        e("div", pe, [
                          u(U, {
                            color: "negative",
                            label: "Chiqish",
                            onClick: _(w)
                          }, null, 8, ["onClick"])
                        ])
                      ])) : (I(), H("div", _e, [
                        r[8] || (r[8] = e("div", { class: "q-mb-md" }, "Tizimga kirilmagan", -1)),
                        u(U, {
                          color: "primary",
                          label: "Admin sifatida kirish",
                          onClick: a
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
          e("div", he, [
            u(X, null, {
              default: h(() => [
                u(Q, null, {
                  default: h(() => [
                    r[10] || (r[10] = e("div", { class: "text-h6 q-mb-md" }, "Yangi Foydalanuvchi Qo'shish", -1)),
                    u(kt, {
                      onSubmit: y,
                      class: "q-gutter-md"
                    }, {
                      default: h(() => [
                        u(T, {
                          modelValue: g.value.name,
                          "onUpdate:modelValue": r[0] || (r[0] = (N) => g.value.name = N),
                          label: "Ism",
                          required: "",
                          rules: [(N) => N && N.length > 0 || "Ism majburiy"]
                        }, null, 8, ["modelValue", "rules"]),
                        u(T, {
                          modelValue: g.value.email,
                          "onUpdate:modelValue": r[1] || (r[1] = (N) => g.value.email = N),
                          label: "Email",
                          type: "email",
                          required: "",
                          rules: [
                            (N) => N && N.length > 0 || "Email majburiy",
                            (N) => N.includes("@") || "Email formati noto'g'ri"
                          ]
                        }, null, 8, ["modelValue", "rules"]),
                        u(A, {
                          modelValue: g.value.role,
                          "onUpdate:modelValue": r[2] || (r[2] = (N) => g.value.role = N),
                          options: x,
                          label: "Rol",
                          "emit-value": "",
                          "map-options": "",
                          required: ""
                        }, null, 8, ["modelValue"]),
                        u(A, {
                          modelValue: g.value.status,
                          "onUpdate:modelValue": r[3] || (r[3] = (N) => g.value.status = N),
                          options: F,
                          label: "Holat",
                          "emit-value": "",
                          "map-options": "",
                          required: ""
                        }, null, 8, ["modelValue"]),
                        e("div", be, [
                          u(U, {
                            type: "submit",
                            color: "primary",
                            label: "Qo'shish",
                            disable: !C.value
                          }, null, 8, ["disable"]),
                          u(U, {
                            type: "button",
                            color: "grey",
                            label: "Tozalash",
                            class: "q-ml-sm",
                            onClick: V
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
          e("div", ge, [
            u(X, null, {
              default: h(() => [
                u(Q, null, {
                  default: h(() => [
                    r[15] || (r[15] = e("div", { class: "text-h6 q-mb-md" }, "Tizim Statistikalari", -1)),
                    e("div", ye, [
                      e("div", Ee, [
                        e("div", Ne, [
                          e("div", Oe, D(_(m)), 1),
                          r[11] || (r[11] = e("div", { class: "stat-label" }, "Jami Adminlar", -1))
                        ])
                      ]),
                      e("div", Se, [
                        e("div", Ve, [
                          e("div", Ae, D(_(f)), 1),
                          r[12] || (r[12] = e("div", { class: "stat-label" }, "Faol Adminlar", -1))
                        ])
                      ]),
                      e("div", De, [
                        e("div", we, [
                          e("div", ke, D(_(o).totalUsers), 1),
                          r[13] || (r[13] = e("div", { class: "stat-label" }, "Jami Foydalanuvchilar", -1))
                        ])
                      ]),
                      e("div", qe, [
                        e("div", Ue, [
                          e("div", Pe, "$" + D(_(o).revenue.toLocaleString()), 1),
                          r[14] || (r[14] = e("div", { class: "stat-label" }, "Jami Daromad", -1))
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
          e("div", $e, [
            u(X, null, {
              default: h(() => [
                u(Q, null, {
                  default: h(() => [
                    r[16] || (r[16] = e("div", { class: "text-h6 q-mb-md" }, "Tizim Amalları", -1)),
                    e("div", xe, [
                      u(U, {
                        color: "primary",
                        label: "Ma'lumotlarni yangilash",
                        onClick: l,
                        loading: _(c)
                      }, null, 8, ["loading"]),
                      u(U, {
                        color: "warning",
                        label: "Test bildirishnoma",
                        onClick: n
                      }),
                      _(O) ? (I(), Rt(U, {
                        key: 0,
                        color: "negative",
                        label: "Barcha bildirishnomalarni tozalash",
                        onClick: _(Y)
                      }, null, 8, ["onClick"])) : Ft("", !0)
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
}), je = /* @__PURE__ */ it(Ce, [["__scopeId", "data-v-af84f52d"]]), ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: je
}, Symbol.toStringTag, { value: "Module" })), Ie = { class: "admin-users" }, Re = /* @__PURE__ */ mt({
  __name: "AdminUsers",
  setup(t) {
    return (i, s) => (I(), H("div", Ie, [...s[0] || (s[0] = [
      e("h1", null, "Foydalanuvchilar boshqaruvi", -1),
      e("p", null, "Bu admin users sahifasi", -1)
    ])]));
  }
}), Fe = /* @__PURE__ */ it(Re, [["__scopeId", "data-v-7f79b8db"]]), Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" }));
function Me() {
  return [
    {
      path: "",
      name: "admin-home",
      component: () => Promise.resolve().then(() => se)
    },
    {
      path: "settings",
      name: "admin-settings",
      component: () => Promise.resolve().then(() => ze)
    },
    {
      path: "users",
      name: "admin-users",
      component: () => Promise.resolve().then(() => Le)
    }
  ];
}
export {
  oe as AdminHome,
  He as AdminLayout,
  je as AdminSettings,
  Fe as AdminUsers,
  Me as getAdminRoutes,
  ue as useAdminStore
};
