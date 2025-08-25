import { resolveComponent as S, createElementBlock as M, openBlock as F, createElementVNode as o, createVNode as d, createTextVNode as D, withCtx as v, toRaw as Oe, computed as z, isRef as X, isReactive as ie, toRef as ne, hasInjectionContext as Ue, inject as $e, getCurrentInstance as Ve, ref as B, reactive as De, markRaw as K, effectScope as Ce, nextTick as ge, getCurrentScope as Pe, onScopeDispose as je, watch as Fe, toRefs as be, defineComponent as fe, onMounted as Ie, createCommentVNode as le, toDisplayString as q, unref as c, Fragment as Re, renderList as ze, createBlock as ue } from "vue";
import { formatDate as Le, SharedCard as se, formatCurrency as Te, SharedButton as ce } from "@monorepo/shared";
const re = (e, r) => {
  const l = e.__vccOpts || e;
  for (const [t, u] of r)
    l[t] = u;
  return l;
}, Be = {};
function Me(e, r) {
  const l = S("router-link"), t = S("router-view");
  return F(), M("div", null, [
    r[3] || (r[3] = o("h2", null, "Admin Layout", -1)),
    o("nav", null, [
      d(l, { to: "/admin" }, {
        default: v(() => [...r[0] || (r[0] = [
          D("Home", -1)
        ])]),
        _: 1
      }),
      r[2] || (r[2] = D(" | ", -1)),
      d(l, { to: "/admin/settings" }, {
        default: v(() => [...r[1] || (r[1] = [
          D("Settingsddd ddd", -1)
        ])]),
        _: 1
      })
    ]),
    d(t)
  ]);
}
const no = /* @__PURE__ */ re(Be, [["render", Me]]);
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ee;
const ae = (e) => ee = e, He = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function W(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var oe;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(oe || (oe = {}));
const te = typeof window < "u";
function Ae(e, r) {
  for (const l in r) {
    const t = r[l];
    if (!(l in e))
      continue;
    const u = e[l];
    W(u) && W(t) && !X(t) && !ie(t) ? e[l] = Ae(u, t) : e[l] = t;
  }
  return e;
}
const ke = () => {
};
function ye(e, r, l, t = ke) {
  e.push(r);
  const u = () => {
    const _ = e.indexOf(r);
    _ > -1 && (e.splice(_, 1), t());
  };
  return !l && Pe() && je(u), u;
}
function Z(e, ...r) {
  e.slice().forEach((l) => {
    l(...r);
  });
}
const Je = (e) => e(), Ee = Symbol(), de = Symbol();
function me(e, r) {
  e instanceof Map && r instanceof Map ? r.forEach((l, t) => e.set(t, l)) : e instanceof Set && r instanceof Set && r.forEach(e.add, e);
  for (const l in r) {
    if (!r.hasOwnProperty(l))
      continue;
    const t = r[l], u = e[l];
    W(u) && W(t) && e.hasOwnProperty(l) && !X(t) && !ie(t) ? e[l] = me(u, t) : e[l] = t;
  }
  return e;
}
const We = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Qe(e) {
  return !W(e) || !Object.prototype.hasOwnProperty.call(e, We);
}
const { assign: j } = Object;
function Ne(e) {
  return !!(X(e) && e.effect);
}
function qe(e, r, l, t) {
  const { state: u, actions: _, getters: p } = r, $ = l.state.value[e];
  let C;
  function N() {
    !$ && (process.env.NODE_ENV === "production" || !t) && (l.state.value[e] = u ? u() : {});
    const b = process.env.NODE_ENV !== "production" && t ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      be(B(u ? u() : {}).value)
    ) : be(l.state.value[e]);
    return j(b, _, Object.keys(p || {}).reduce((O, x) => (process.env.NODE_ENV !== "production" && x in b && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${x}" in store "${e}".`), O[x] = K(z(() => {
      ae(l);
      const w = l._s.get(e);
      return p[x].call(w, w);
    })), O), {}));
  }
  return C = ve(e, N, r, l, t, !0), C;
}
function ve(e, r, l = {}, t, u, _) {
  let p;
  const $ = j({ actions: {} }, l);
  if (process.env.NODE_ENV !== "production" && !t._e.active)
    throw new Error("Pinia destroyed");
  const C = { deep: !0 };
  process.env.NODE_ENV !== "production" && (C.onTrigger = (a) => {
    N ? w = a : N == !1 && !n._hotUpdating && (Array.isArray(w) ? w.push(a) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let N, b, O = [], x = [], w;
  const P = t.state.value[e];
  !_ && !P && (process.env.NODE_ENV === "production" || !u) && (t.state.value[e] = {});
  const L = B({});
  let R;
  function H(a) {
    let s;
    N = b = !1, process.env.NODE_ENV !== "production" && (w = []), typeof a == "function" ? (a(t.state.value[e]), s = {
      type: oe.patchFunction,
      storeId: e,
      events: w
    }) : (me(t.state.value[e], a), s = {
      type: oe.patchObject,
      payload: a,
      storeId: e,
      events: w
    });
    const f = R = Symbol();
    ge().then(() => {
      R === f && (N = !0);
    }), b = !0, Z(O, s, t.state.value[e]);
  }
  const E = _ ? function() {
    const { state: s } = l, f = s ? s() : {};
    this.$patch((i) => {
      j(i, f);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : ke
  );
  function I() {
    p.stop(), O = [], x = [], t._s.delete(e);
  }
  const T = (a, s = "") => {
    if (Ee in a)
      return a[de] = s, a;
    const f = function() {
      ae(t);
      const i = Array.from(arguments), h = [], U = [];
      function Q(V) {
        h.push(V);
      }
      function Y(V) {
        U.push(V);
      }
      Z(x, {
        args: i,
        name: f[de],
        store: n,
        after: Q,
        onError: Y
      });
      let J;
      try {
        J = a.apply(this && this.$id === e ? this : n, i);
      } catch (V) {
        throw Z(U, V), V;
      }
      return J instanceof Promise ? J.then((V) => (Z(h, V), V)).catch((V) => (Z(U, V), Promise.reject(V))) : (Z(h, J), J);
    };
    return f[Ee] = !0, f[de] = s, f;
  }, y = /* @__PURE__ */ K({
    actions: {},
    getters: {},
    state: [],
    hotState: L
  }), m = {
    _p: t,
    // _s: scope,
    $id: e,
    $onAction: ye.bind(null, x),
    $patch: H,
    $reset: E,
    $subscribe(a, s = {}) {
      const f = ye(O, a, s.detached, () => i()), i = p.run(() => Fe(() => t.state.value[e], (h) => {
        (s.flush === "sync" ? b : N) && a({
          storeId: e,
          type: oe.direct,
          events: w
        }, h);
      }, j({}, C, s)));
      return f;
    },
    $dispose: I
  }, n = De(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && te ? j(
    {
      _hmrPayload: y,
      _customProperties: K(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    m
    // must be added later
    // setupStore
  ) : m);
  t._s.set(e, n);
  const A = (t._a && t._a.runWithContext || Je)(() => t._e.run(() => (p = Ce()).run(() => r({ action: T }))));
  for (const a in A) {
    const s = A[a];
    if (X(s) && !Ne(s) || ie(s))
      process.env.NODE_ENV !== "production" && u ? L.value[a] = ne(A, a) : _ || (P && Qe(s) && (X(s) ? s.value = P[a] : me(s, P[a])), t.state.value[e][a] = s), process.env.NODE_ENV !== "production" && y.state.push(a);
    else if (typeof s == "function") {
      const f = process.env.NODE_ENV !== "production" && u ? s : T(s, a);
      A[a] = f, process.env.NODE_ENV !== "production" && (y.actions[a] = s), $.actions[a] = s;
    } else process.env.NODE_ENV !== "production" && Ne(s) && (y.getters[a] = _ ? (
      // @ts-expect-error
      l.getters[a]
    ) : s, te && (A._getters || // @ts-expect-error: same
    (A._getters = K([]))).push(a));
  }
  if (j(n, A), j(Oe(n), A), Object.defineProperty(n, "$state", {
    get: () => process.env.NODE_ENV !== "production" && u ? L.value : t.state.value[e],
    set: (a) => {
      if (process.env.NODE_ENV !== "production" && u)
        throw new Error("cannot set hotState");
      H((s) => {
        j(s, a);
      });
    }
  }), process.env.NODE_ENV !== "production" && (n._hotUpdate = K((a) => {
    n._hotUpdating = !0, a._hmrPayload.state.forEach((s) => {
      if (s in n.$state) {
        const f = a.$state[s], i = n.$state[s];
        typeof f == "object" && W(f) && W(i) ? Ae(f, i) : a.$state[s] = i;
      }
      n[s] = ne(a.$state, s);
    }), Object.keys(n.$state).forEach((s) => {
      s in a.$state || delete n[s];
    }), N = !1, b = !1, t.state.value[e] = ne(a._hmrPayload, "hotState"), b = !0, ge().then(() => {
      N = !0;
    });
    for (const s in a._hmrPayload.actions) {
      const f = a[s];
      n[s] = //
      T(f, s);
    }
    for (const s in a._hmrPayload.getters) {
      const f = a._hmrPayload.getters[s], i = _ ? (
        // special handling of options api
        z(() => (ae(t), f.call(n, n)))
      ) : f;
      n[s] = //
      i;
    }
    Object.keys(n._hmrPayload.getters).forEach((s) => {
      s in a._hmrPayload.getters || delete n[s];
    }), Object.keys(n._hmrPayload.actions).forEach((s) => {
      s in a._hmrPayload.actions || delete n[s];
    }), n._hmrPayload = a._hmrPayload, n._getters = a._getters, n._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && te) {
    const a = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((s) => {
      Object.defineProperty(n, s, j({ value: n[s] }, a));
    });
  }
  return t._p.forEach((a) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && te) {
      const s = p.run(() => a({
        store: n,
        app: t._a,
        pinia: t,
        options: $
      }));
      Object.keys(s || {}).forEach((f) => n._customProperties.add(f)), j(n, s);
    } else
      j(n, p.run(() => a({
        store: n,
        app: t._a,
        pinia: t,
        options: $
      })));
  }), process.env.NODE_ENV !== "production" && n.$state && typeof n.$state == "object" && typeof n.$state.constructor == "function" && !n.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${n.$id}".`), P && _ && l.hydrate && l.hydrate(n.$state, P), N = !0, b = !0, n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ye(e, r, l) {
  let t;
  const u = typeof r == "function";
  t = u ? l : r;
  function _(p, $) {
    const C = Ue();
    if (p = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && ee && ee._testing ? null : p) || (C ? $e(He, null) : null), p && ae(p), process.env.NODE_ENV !== "production" && !ee)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    p = ee, p._s.has(e) || (u ? ve(e, r, t, p) : qe(e, t, p), process.env.NODE_ENV !== "production" && (_._pinia = p));
    const N = p._s.get(e);
    if (process.env.NODE_ENV !== "production" && $) {
      const b = "__hot:" + e, O = u ? ve(b, r, t, p, !0) : qe(b, j({}, t), p, !0);
      $._hotUpdate(O), delete p.state.value[b], p._s.delete(b);
    }
    if (process.env.NODE_ENV !== "production" && te) {
      const b = Ve();
      if (b && b.proxy && // avoid adding stores that are just built for hot module replacement
      !$) {
        const O = b.proxy, x = "_pStores" in O ? O._pStores : O._pStores = {};
        x[e] = N;
      }
    }
    return N;
  }
  return _.$id = e, _;
}
function xe(e) {
  const r = Oe(e), l = {};
  for (const t in r) {
    const u = r[t];
    u.effect ? l[t] = // ...
    z({
      get: () => e[t],
      set(_) {
        e[t] = _;
      }
    }) : (X(u) || ie(u)) && (l[t] = // ---
    ne(e, t));
  }
  return l;
}
const Se = /* @__PURE__ */ Ye("admin", () => {
  const e = B([]), r = B(null), l = B({
    totalUsers: 0,
    activeUsers: 0,
    totalOrders: 0,
    revenue: 0
  }), t = B(!1), u = B(null), _ = B([]), p = z(() => e.value.length), $ = z(
    () => e.value.filter((m) => m.status === "active").length
  ), C = z(() => {
    const m = { admin: 0, moderator: 0, user: 0 };
    return e.value.forEach((n) => {
      m[n.role]++;
    }), m;
  }), N = z(() => r.value !== null), b = z(() => _.value.length > 0);
  async function O() {
    t.value = !0, u.value = null;
    try {
      await new Promise((m) => setTimeout(m, 1e3)), e.value = [
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
    } catch (m) {
      u.value = "Admin foydalanuvchilarni yuklashda xatolik", console.error(m);
    } finally {
      t.value = !1;
    }
  }
  async function x() {
    t.value = !0, u.value = null;
    try {
      await new Promise((m) => setTimeout(m, 800)), l.value = {
        totalUsers: 1250,
        activeUsers: 890,
        totalOrders: 3450,
        revenue: 125e3
      }, console.log("Admin stats fetched:", l.value);
    } catch (m) {
      u.value = "Statistikalarni yuklashda xatolik", console.error(m);
    } finally {
      t.value = !1;
    }
  }
  function w(m) {
    r.value = m, console.log("Current admin set:", m.name);
  }
  function P() {
    r.value = null, _.value = [], console.log("Admin logged out");
  }
  function L(m) {
    const n = {
      ...m,
      id: Math.max(...e.value.map((g) => g.id), 0) + 1
    };
    e.value.push(n), I(`Yangi foydalanuvchi qo'shildi: ${n.name}`), console.log("User added:", n);
  }
  function R(m, n) {
    const g = e.value.find((A) => A.id === m);
    g && (g.status = n, I(`${g.name} holati ${n} ga o'zgartirildi`), console.log("User status updated:", g));
  }
  function H(m, n) {
    const g = e.value.find((A) => A.id === m);
    g && (g.role = n, I(`${g.name} roli ${n} ga o'zgartirildi`), console.log("User role updated:", g));
  }
  function E(m) {
    const n = e.value.findIndex((g) => g.id === m);
    if (n > -1) {
      const g = e.value.splice(n, 1)[0];
      I(`${g.name} o'chirildi`), console.log("User removed:", g);
    }
  }
  function I(m) {
    _.value.unshift(m), setTimeout(() => {
      T(m);
    }, 5e3);
  }
  function T(m) {
    const n = _.value.indexOf(m);
    n > -1 && _.value.splice(n, 1);
  }
  function y() {
    _.value = [];
  }
  return {
    // State
    adminUsers: e,
    currentAdmin: r,
    stats: l,
    loading: t,
    error: u,
    notifications: _,
    // Getters
    totalAdminUsers: p,
    activeAdminUsers: $,
    adminsByRole: C,
    isLoggedIn: N,
    hasNotifications: b,
    // Actions
    fetchAdminUsers: O,
    fetchStats: x,
    setCurrentAdmin: w,
    logout: P,
    addUser: L,
    updateUserStatus: R,
    updateUserRole: H,
    removeUser: E,
    addNotification: I,
    removeNotification: T,
    clearAllNotifications: y
  };
}), Ze = { class: "admin-home q-pa-md" }, Xe = { class: "row q-gutter-md" }, Ge = { class: "col-12" }, Ke = { class: "text-caption q-mb-md" }, et = {
  key: 0,
  class: "q-mb-md"
}, tt = { class: "col-12" }, ot = { class: "row q-gutter-md" }, st = { class: "col-md-3 col-sm-6 col-12" }, nt = { class: "text-h3 text-primary" }, lt = { class: "col-md-3 col-sm-6 col-12" }, at = { class: "text-h3 text-positive" }, it = { class: "col-md-3 col-sm-6 col-12" }, rt = { class: "text-h3 text-info" }, ct = { class: "col-md-3 col-sm-6 col-12" }, dt = { class: "text-h3 text-orange" }, ut = { class: "col-12" }, mt = { class: "q-gutter-sm" }, vt = { class: "col-12" }, ft = { class: "text-h6 q-mb-md" }, _t = {
  key: 0,
  class: "text-negative q-mb-md"
}, pt = { class: "q-gutter-sm" }, ht = { class: "col-12" }, gt = { class: "row q-gutter-md" }, bt = { class: "col" }, yt = { class: "col" }, Et = { class: "col" }, Nt = /* @__PURE__ */ fe({
  __name: "AdminHome",
  setup(e) {
    const r = Se();
    z(() => (/* @__PURE__ */ new Date()).toLocaleDateString("uz-UZ", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }));
    const {
      adminUsers: l,
      stats: t,
      loading: u,
      error: _,
      notifications: p,
      totalAdminUsers: $,
      activeAdminUsers: C,
      adminsByRole: N,
      hasNotifications: b
    } = xe(r), {
      fetchAdminUsers: O,
      fetchStats: x,
      updateUserStatus: w,
      updateUserRole: P,
      removeUser: L,
      removeNotification: R,
      clearAllNotifications: H
    } = r, E = [
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
    ], I = [
      { label: "Admin", value: "admin" },
      { label: "Moderator", value: "moderator" },
      { label: "User", value: "user" }
    ];
    return Ie(() => {
      x(), O();
    }), (T, y) => {
      const m = S("q-btn"), n = S("q-banner"), g = S("q-chip"), A = S("q-td"), a = S("q-select"), s = S("q-table"), f = S("q-card-section"), i = S("q-card");
      return F(), M("div", Ze, [
        o("div", Xe, [
          o("div", Ge, [
            y[0] || (y[0] = o("h3", { class: "q-mb-md" }, "Admin Boshqaruv Paneli", -1)),
            o("p", Ke, "Bugungi sana: " + q(c(Le)(/* @__PURE__ */ new Date(), "long")), 1),
            c(b) ? (F(), M("div", et, [
              (F(!0), M(Re, null, ze(c(p), (h) => (F(), ue(n, {
                key: h,
                class: "bg-positive text-white q-mb-sm"
              }, {
                action: v(() => [
                  d(m, {
                    flat: "",
                    round: "",
                    icon: "close",
                    onClick: (U) => c(R)(h)
                  }, null, 8, ["onClick"])
                ]),
                default: v(() => [
                  D(q(h) + " ", 1)
                ]),
                _: 2
              }, 1024))), 128))
            ])) : le("", !0)
          ]),
          o("div", tt, [
            o("div", ot, [
              o("div", st, [
                d(c(se), {
                  variant: "elevated",
                  padding: "medium"
                }, {
                  default: v(() => [
                    y[1] || (y[1] = o("div", { class: "text-h6 text-primary" }, "Jami Foydalanuvchilar", -1)),
                    o("div", nt, q(c(t).totalUsers), 1)
                  ]),
                  _: 1
                })
              ]),
              o("div", lt, [
                d(c(se), {
                  variant: "elevated",
                  padding: "medium"
                }, {
                  default: v(() => [
                    y[2] || (y[2] = o("div", { class: "text-h6 text-positive" }, "Faol Foydalanuvchilar", -1)),
                    o("div", at, q(c(t).activeUsers), 1)
                  ]),
                  _: 1
                })
              ]),
              o("div", it, [
                d(c(se), {
                  variant: "elevated",
                  padding: "medium"
                }, {
                  default: v(() => [
                    y[3] || (y[3] = o("div", { class: "text-h6 text-info" }, "Jami Buyurtmalar", -1)),
                    o("div", rt, q(c(t).totalOrders), 1)
                  ]),
                  _: 1
                })
              ]),
              o("div", ct, [
                d(c(se), {
                  variant: "elevated",
                  padding: "medium"
                }, {
                  default: v(() => [
                    y[4] || (y[4] = o("div", { class: "text-h6 text-orange" }, "Daromad", -1)),
                    o("div", dt, q(c(Te)(c(t).revenue)), 1)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          o("div", ut, [
            o("div", mt, [
              d(c(ce), {
                label: "Statistikalarni yangilash",
                variant: "primary",
                icon: "refresh",
                loading: c(u),
                onClick: c(x)
              }, null, 8, ["loading", "onClick"]),
              d(c(ce), {
                label: "Foydalanuvchilarni yuklash",
                variant: "secondary",
                icon: "group",
                loading: c(u),
                onClick: c(O)
              }, null, 8, ["loading", "onClick"]),
              c(b) ? (F(), ue(c(ce), {
                key: 0,
                label: "Bildirishnomalarni tozalash",
                variant: "danger",
                icon: "clear_all",
                onClick: c(H)
              }, null, 8, ["onClick"])) : le("", !0)
            ])
          ]),
          o("div", vt, [
            d(i, null, {
              default: v(() => [
                d(f, null, {
                  default: v(() => [
                    o("div", ft, [
                      y[5] || (y[5] = D(" Admin Foydalanuvchilari ", -1)),
                      d(g, {
                        color: "primary",
                        "text-color": "white"
                      }, {
                        default: v(() => [
                          D(q(c($)) + " ta ", 1)
                        ]),
                        _: 1
                      })
                    ]),
                    c(_) ? (F(), M("div", _t, q(c(_)), 1)) : le("", !0),
                    d(s, {
                      rows: c(l),
                      columns: E,
                      "row-key": "id",
                      loading: c(u),
                      "binary-state-sort": ""
                    }, {
                      "body-cell-status": v((h) => [
                        d(A, { props: h }, {
                          default: v(() => [
                            d(g, {
                              color: h.value === "active" ? "positive" : "negative",
                              "text-color": "white"
                            }, {
                              default: v(() => [
                                D(q(h.value === "active" ? "Faol" : "Faol emas"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      "body-cell-role": v((h) => [
                        d(A, { props: h }, {
                          default: v(() => [
                            d(a, {
                              "model-value": h.value,
                              options: I,
                              "emit-value": "",
                              "map-options": "",
                              dense: "",
                              "onUpdate:modelValue": (U) => c(P)(h.row.id, U)
                            }, null, 8, ["model-value", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      "body-cell-actions": v((h) => [
                        d(A, { props: h }, {
                          default: v(() => [
                            o("div", pt, [
                              d(m, {
                                size: "sm",
                                color: h.row.status === "active" ? "negative" : "positive",
                                label: h.row.status === "active" ? "Faolsizlashtirish" : "Faollashtirish",
                                onClick: (U) => c(w)(h.row.id, h.row.status === "active" ? "inactive" : "active")
                              }, null, 8, ["color", "label", "onClick"]),
                              d(m, {
                                size: "sm",
                                color: "negative",
                                label: "O'chirish",
                                onClick: (U) => c(L)(h.row.id)
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
          o("div", ht, [
            d(i, null, {
              default: v(() => [
                d(f, null, {
                  default: v(() => [
                    y[6] || (y[6] = o("div", { class: "text-h6 q-mb-md" }, "Rollar bo'yicha statistika", -1)),
                    o("div", gt, [
                      o("div", bt, [
                        d(g, {
                          color: "red",
                          "text-color": "white",
                          size: "lg"
                        }, {
                          default: v(() => [
                            D(" Admin: " + q(c(N).admin), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      o("div", yt, [
                        d(g, {
                          color: "orange",
                          "text-color": "white",
                          size: "lg"
                        }, {
                          default: v(() => [
                            D(" Moderator: " + q(c(N).moderator), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      o("div", Et, [
                        d(g, {
                          color: "blue",
                          "text-color": "white",
                          size: "lg"
                        }, {
                          default: v(() => [
                            D(" User: " + q(c(N).user), 1)
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
}), qt = /* @__PURE__ */ re(Nt, [["__scopeId", "data-v-70ed52a3"]]), Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" })), At = { class: "admin-settings q-pa-md" }, kt = { class: "row q-gutter-md" }, xt = { class: "col-12 col-md-6" }, St = {
  key: 0,
  class: "q-gutter-md"
}, wt = { class: "q-mt-md" }, Ut = {
  key: 1,
  class: "text-center"
}, $t = { class: "col-12 col-md-6" }, Vt = { class: "q-mt-md" }, Dt = { class: "col-12" }, Ct = { class: "row q-gutter-md" }, Pt = { class: "col-12 col-sm-6 col-md-3" }, jt = { class: "stat-item" }, Ft = { class: "stat-value" }, It = { class: "col-12 col-sm-6 col-md-3" }, Rt = { class: "stat-item" }, zt = { class: "stat-value" }, Lt = { class: "col-12 col-sm-6 col-md-3" }, Tt = { class: "stat-item" }, Bt = { class: "stat-value" }, Mt = { class: "col-12 col-sm-6 col-md-3" }, Ht = { class: "stat-item" }, Jt = { class: "stat-value" }, Wt = { class: "col-12" }, Qt = { class: "q-gutter-sm" }, Yt = /* @__PURE__ */ fe({
  __name: "AdminSettings",
  setup(e) {
    const r = Se(), {
      currentAdmin: l,
      stats: t,
      loading: u,
      notifications: _,
      totalAdminUsers: p,
      activeAdminUsers: $,
      isLoggedIn: C,
      hasNotifications: N,
      adminUsers: b
    } = xe(r), {
      setCurrentAdmin: O,
      logout: x,
      addUser: w,
      fetchAdminUsers: P,
      fetchStats: L,
      addNotification: R,
      clearAllNotifications: H
    } = r, E = B({
      name: "",
      email: "",
      role: "user",
      status: "active"
    }), I = [
      { label: "Admin", value: "admin" },
      { label: "Moderator", value: "moderator" },
      { label: "User", value: "user" }
    ], T = [
      { label: "Faol", value: "active" },
      { label: "Faol emas", value: "inactive" }
    ], y = z(() => E.value.name.trim() && E.value.email.trim() && E.value.email.includes("@"));
    function m(f) {
      switch (f) {
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
    function n() {
      O({
        id: 999,
        name: "Demo Admin",
        email: "demo@admin.com",
        role: "admin",
        status: "active",
        lastLogin: /* @__PURE__ */ new Date()
      }), R("Demo admin sifatida tizimga kirildi");
    }
    function g() {
      y.value && (w({
        name: E.value.name,
        email: E.value.email,
        role: E.value.role,
        status: E.value.status
      }), A());
    }
    function A() {
      E.value = {
        name: "",
        email: "",
        role: "user",
        status: "active"
      };
    }
    function a() {
      L(), P(), R("Barcha ma'lumotlar yangilandi");
    }
    function s() {
      R("Bu test bildirishnomasi - " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
    }
    return (f, i) => {
      const h = S("q-chip"), U = S("q-btn"), Q = S("q-card-section"), Y = S("q-card"), J = S("q-input"), V = S("q-select"), we = S("q-form");
      return F(), M("div", At, [
        o("div", kt, [
          i[17] || (i[17] = o("div", { class: "col-12" }, [
            o("h3", { class: "q-mb-md" }, "Admin Sozlamalar")
          ], -1)),
          o("div", xt, [
            d(Y, null, {
              default: v(() => [
                d(Q, null, {
                  default: v(() => {
                    var k, _e, pe, he;
                    return [
                      i[9] || (i[9] = o("div", { class: "text-h6 q-mb-md" }, "Joriy Admin Ma'lumotlari", -1)),
                      c(C) ? (F(), M("div", St, [
                        o("div", null, [
                          i[4] || (i[4] = o("strong", null, "Ism:", -1)),
                          D(" " + q((k = c(l)) == null ? void 0 : k.name), 1)
                        ]),
                        o("div", null, [
                          i[5] || (i[5] = o("strong", null, "Email:", -1)),
                          D(" " + q((_e = c(l)) == null ? void 0 : _e.email), 1)
                        ]),
                        o("div", null, [
                          i[6] || (i[6] = o("strong", null, "Rol:", -1)),
                          d(h, {
                            color: m((pe = c(l)) == null ? void 0 : pe.role),
                            "text-color": "white"
                          }, {
                            default: v(() => {
                              var G;
                              return [
                                D(q((G = c(l)) == null ? void 0 : G.role), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        o("div", null, [
                          i[7] || (i[7] = o("strong", null, "Holat:", -1)),
                          d(h, {
                            color: ((he = c(l)) == null ? void 0 : he.status) === "active" ? "positive" : "negative",
                            "text-color": "white"
                          }, {
                            default: v(() => {
                              var G;
                              return [
                                D(q(((G = c(l)) == null ? void 0 : G.status) === "active" ? "Faol" : "Faol emas"), 1)
                              ];
                            }),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        o("div", wt, [
                          d(U, {
                            color: "negative",
                            label: "Chiqish",
                            onClick: c(x)
                          }, null, 8, ["onClick"])
                        ])
                      ])) : (F(), M("div", Ut, [
                        i[8] || (i[8] = o("div", { class: "q-mb-md" }, "Tizimga kirilmagan", -1)),
                        d(U, {
                          color: "primary",
                          label: "Admin sifatida kirish",
                          onClick: n
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
          o("div", $t, [
            d(Y, null, {
              default: v(() => [
                d(Q, null, {
                  default: v(() => [
                    i[10] || (i[10] = o("div", { class: "text-h6 q-mb-md" }, "Yangi Foydalanuvchi Qo'shish", -1)),
                    d(we, {
                      onSubmit: g,
                      class: "q-gutter-md"
                    }, {
                      default: v(() => [
                        d(J, {
                          modelValue: E.value.name,
                          "onUpdate:modelValue": i[0] || (i[0] = (k) => E.value.name = k),
                          label: "Ism",
                          required: "",
                          rules: [(k) => k && k.length > 0 || "Ism majburiy"]
                        }, null, 8, ["modelValue", "rules"]),
                        d(J, {
                          modelValue: E.value.email,
                          "onUpdate:modelValue": i[1] || (i[1] = (k) => E.value.email = k),
                          label: "Email",
                          type: "email",
                          required: "",
                          rules: [
                            (k) => k && k.length > 0 || "Email majburiy",
                            (k) => k.includes("@") || "Email formati noto'g'ri"
                          ]
                        }, null, 8, ["modelValue", "rules"]),
                        d(V, {
                          modelValue: E.value.role,
                          "onUpdate:modelValue": i[2] || (i[2] = (k) => E.value.role = k),
                          options: I,
                          label: "Rol",
                          "emit-value": "",
                          "map-options": "",
                          required: ""
                        }, null, 8, ["modelValue"]),
                        d(V, {
                          modelValue: E.value.status,
                          "onUpdate:modelValue": i[3] || (i[3] = (k) => E.value.status = k),
                          options: T,
                          label: "Holat",
                          "emit-value": "",
                          "map-options": "",
                          required: ""
                        }, null, 8, ["modelValue"]),
                        o("div", Vt, [
                          d(U, {
                            type: "submit",
                            color: "primary",
                            label: "Qo'shish",
                            disable: !y.value
                          }, null, 8, ["disable"]),
                          d(U, {
                            type: "button",
                            color: "grey",
                            label: "Tozalash",
                            class: "q-ml-sm",
                            onClick: A
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
          o("div", Dt, [
            d(Y, null, {
              default: v(() => [
                d(Q, null, {
                  default: v(() => [
                    i[15] || (i[15] = o("div", { class: "text-h6 q-mb-md" }, "Tizim Statistikalari", -1)),
                    o("div", Ct, [
                      o("div", Pt, [
                        o("div", jt, [
                          o("div", Ft, q(c(p)), 1),
                          i[11] || (i[11] = o("div", { class: "stat-label" }, "Jami Adminlar", -1))
                        ])
                      ]),
                      o("div", It, [
                        o("div", Rt, [
                          o("div", zt, q(c($)), 1),
                          i[12] || (i[12] = o("div", { class: "stat-label" }, "Faol Adminlar", -1))
                        ])
                      ]),
                      o("div", Lt, [
                        o("div", Tt, [
                          o("div", Bt, q(c(t).totalUsers), 1),
                          i[13] || (i[13] = o("div", { class: "stat-label" }, "Jami Foydalanuvchilar", -1))
                        ])
                      ]),
                      o("div", Mt, [
                        o("div", Ht, [
                          o("div", Jt, "$" + q(c(t).revenue.toLocaleString()), 1),
                          i[14] || (i[14] = o("div", { class: "stat-label" }, "Jami Daromad", -1))
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
          o("div", Wt, [
            d(Y, null, {
              default: v(() => [
                d(Q, null, {
                  default: v(() => [
                    i[16] || (i[16] = o("div", { class: "text-h6 q-mb-md" }, "Tizim Amalları", -1)),
                    o("div", Qt, [
                      d(U, {
                        color: "primary",
                        label: "Ma'lumotlarni yangilash",
                        onClick: a,
                        loading: c(u)
                      }, null, 8, ["loading"]),
                      d(U, {
                        color: "warning",
                        label: "Test bildirishnoma",
                        onClick: s
                      }),
                      c(N) ? (F(), ue(U, {
                        key: 0,
                        color: "negative",
                        label: "Barcha bildirishnomalarni tozalash",
                        onClick: c(H)
                      }, null, 8, ["onClick"])) : le("", !0)
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
}), Zt = /* @__PURE__ */ re(Yt, [["__scopeId", "data-v-af84f52d"]]), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), Gt = { class: "admin-users" }, Kt = /* @__PURE__ */ fe({
  __name: "AdminUsers",
  setup(e) {
    return (r, l) => (F(), M("div", Gt, [...l[0] || (l[0] = [
      o("h1", null, "Foydalanuvchilar boshqaruvi", -1),
      o("p", null, "Bu admin users sahifasi", -1)
    ])]));
  }
}), eo = /* @__PURE__ */ re(Kt, [["__scopeId", "data-v-7f79b8db"]]), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eo
}, Symbol.toStringTag, { value: "Module" }));
function lo() {
  return [
    {
      path: "",
      name: "admin-home",
      component: () => Promise.resolve().then(() => Ot)
    },
    {
      path: "settings",
      name: "admin-settings",
      component: () => Promise.resolve().then(() => Xt)
    },
    {
      path: "users",
      name: "admin-users",
      component: () => Promise.resolve().then(() => to)
    }
  ];
}
export {
  qt as AdminHome,
  no as AdminLayout,
  Zt as AdminSettings,
  eo as AdminUsers,
  lo as getAdminRoutes,
  Se as useAdminStore
};
