import { r as e, t } from "./rolldown-runtime-C60lm6uB.js";
import { i as n, n as r, r as i } from "./framework-D_rUT4EX.js";
import {
  A as a,
  E as o,
  I as s,
  L as c,
  N as l,
  O as u,
  P as d,
  S as f,
  _ as p,
  b as m,
  d as h,
  h as g,
  j as _,
  k as v,
  m as y,
  o as b,
  s as x,
  v as S,
  x as C,
  y as w,
} from "./utils-CaPlbFnG.js";
import {
  $ as T,
  C as ee,
  G as E,
  J as te,
  K as D,
  Q as O,
  X as ne,
  Y as k,
  Z as A,
  _ as j,
  d as M,
  dt as re,
  et as N,
  g as P,
  gt as ie,
  h as ae,
  ht as F,
  it as I,
  m as L,
  nt as R,
  ot as z,
  p as B,
  q as V,
  rt as H,
  st as U,
  tt as oe,
  u as se,
  ut as ce,
  v as le,
  vt as W,
} from "./composite-DaIlOdtn.js";
var ue = c(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  de = typeof CSS < `u` && !!CSS.supports?.(`-webkit-backdrop-filter:none`);
!de && I.includes(`firefox`), !de && I.includes(`chrom`);
var fe = R,
  G = e(n(), 1),
  K = i();
function pe(e, t) {
  if (!p(e)) return !1;
  let n = e;
  if (t.hasElement(n)) return !n.hasAttribute(`data-trigger-disabled`);
  for (let [, e] of t.entries())
    if (O(e, n)) return !e.hasAttribute(`data-trigger-disabled`);
  return !1;
}
function q(e, t) {
  if (t == null) return !1;
  if (`composedPath` in e) return e.composedPath().includes(t);
  let n = e;
  return n.target != null && t.contains(n.target);
}
function me(e) {
  return e.matches(`html,body`);
}
function he(e) {
  return (
    S(e) &&
    e.matches(
      `input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`
    )
  );
}
function ge(e) {
  return (
    e?.closest(
      `button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${oe}`
    ) != null
  );
}
function _e(e) {
  return e ? e.getAttribute(`role`) === `combobox` && he(e) : !1;
}
function ve(e) {
  return e
    ? e.hasAttribute(`data-base-ui-focusable`)
      ? e
      : e.querySelector(`[data-base-ui-focusable]`) || e
    : null;
}
function ye(e, t, n = !0) {
  return e
    .filter((e) => e.parentId === t)
    .flatMap((t) => [...(!n || t.context?.open ? [t] : []), ...ye(e, t.id, n)]);
}
function be(e, t) {
  let n = [],
    r = e.find((e) => e.id === t)?.parentId;
  for (; r; ) {
    let t = e.find((e) => e.id === r);
    (r = t?.parentId), t && (n = n.concat(t));
  }
  return n;
}
var J = `a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;
function Y(e) {
  let t = e.assignedSlot;
  if (t) return t;
  if (e.parentElement) return e.parentElement;
  let n = e.getRootNode();
  return f(n) ? n.host : null;
}
function X(e) {
  for (let t of Array.from(e.children)) if (h(t) === `summary`) return t;
  return null;
}
function xe(e, t) {
  let n = X(t);
  return !!n && (e === n || O(n, e));
}
function Se(e) {
  let t = e ? h(e) : ``;
  return (
    e != null &&
    e.matches(J) &&
    (t !== `summary` ||
      (e.parentElement != null &&
        h(e.parentElement) === `details` &&
        X(e.parentElement) === e)) &&
    (t !== `details` || X(e) == null) &&
    (t !== `input` || e.type !== `hidden`)
  );
}
function Ce(e) {
  if (!Se(e) || !e.isConnected || e.matches(`:disabled`)) return !1;
  for (let t = e; t; t = Y(t)) {
    let n = t !== e,
      r = h(t) === `slot`;
    if (
      t.hasAttribute(`inert`) ||
      (n && h(t) === `details` && !t.open && !xe(e, t)) ||
      t.hasAttribute(`hidden`) ||
      (!r && !we(t, n))
    )
      return !1;
  }
  return !0;
}
function we(e, t) {
  let n = x(e);
  return t ? n.display !== `none` : ee(e, n);
}
function Te(e) {
  let t = e.tabIndex;
  if (t < 0) {
    let t = h(e);
    if (
      t === `details` ||
      t === `audio` ||
      t === `video` ||
      (S(e) && e.isContentEditable)
    )
      return 0;
  }
  return t;
}
function Ee(e) {
  if (h(e) !== `input`) return null;
  let t = e;
  return t.type === `radio` && t.name !== `` ? t : null;
}
function De(e, t) {
  let n = Ee(e);
  if (!n) return !0;
  let r = t.find((e) => {
    let t = Ee(e);
    return t?.name === n.name && t.form === n.form && t.checked;
  });
  return r
    ? r === n
    : t.find((e) => {
        let t = Ee(e);
        return t?.name === n.name && t.form === n.form;
      }) === n;
}
function Oe(e) {
  if (S(e) && h(e) === `slot`) {
    let t = e.assignedElements({ flatten: !0 });
    if (t.length > 0) return t;
  }
  return S(e) && e.shadowRoot
    ? Array.from(e.shadowRoot.children)
    : Array.from(e.children);
}
function ke(e, t) {
  Oe(e).forEach((e) => {
    Se(e) && t.push(e), ke(e, t);
  });
}
function Ae(e, t, n) {
  Oe(e).forEach((e) => {
    S(e) && e.matches(t) && n.push(e), Ae(e, t, n);
  });
}
function je(e) {
  return Ce(e) && Te(e) >= 0;
}
function Me(e) {
  let t = [];
  return ke(e, t), t.filter(Ce);
}
function Ne(e) {
  let t = Me(e);
  return t.filter((e) => Te(e) >= 0 && De(e, t));
}
function Pe(e, t) {
  let n = Ne(e),
    r = n.length;
  if (r === 0) return;
  let i = A(b(e)),
    a = n.indexOf(i);
  return n[a === -1 ? (t === 1 ? 0 : r - 1) : a + t];
}
function Fe(e) {
  return Pe(b(e).body, 1) || e;
}
function Ie(e) {
  return Pe(b(e).body, -1) || e;
}
function Le(e, t) {
  if (!e) return null;
  let n = Ne(b(e).body),
    r = n.length;
  if (r === 0) return null;
  let i = n.indexOf(e);
  return i === -1 ? null : n[(i + t + r) % r];
}
function Re(e) {
  return Le(e, 1);
}
function ze(e) {
  return Le(e, -1);
}
function Be(e, t) {
  let n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !O(n, r);
}
function Ve(e) {
  Ne(e).forEach((e) => {
    (e.dataset.tabindex = e.getAttribute(`tabindex`) || ``),
      e.setAttribute(`tabindex`, `-1`);
  });
}
function He(e) {
  let t = [];
  Ae(e, `[data-tabindex]`, t),
    t.forEach((e) => {
      let t = e.dataset.tabindex;
      delete e.dataset.tabindex,
        t ? e.setAttribute(`tabindex`, t) : e.removeAttribute(`tabindex`);
    });
}
var Ue = t((e) => {
    var t = n();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = t.useState,
      o = t.useEffect,
      s = t.useLayoutEffect,
      c = t.useDebugValue;
    function l(e, t) {
      var n = t(),
        r = a({ inst: { value: n, getSnapshot: t } }),
        i = r[0].inst,
        l = r[1];
      return (
        s(
          function () {
            (i.value = n), (i.getSnapshot = t), u(i) && l({ inst: i });
          },
          [e, n, t]
        ),
        o(
          function () {
            return (
              u(i) && l({ inst: i }),
              e(function () {
                u(i) && l({ inst: i });
              })
            );
          },
          [e]
        ),
        c(n),
        n
      );
    }
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !i(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      window.document === void 0 || window.document.createElement === void 0
        ? d
        : l;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  We = t((e, t) => {
    t.exports = Ue();
  });
(function (e) {
  return (
    (e.open = `data-open`),
    (e.closed = `data-closed`),
    (e[(e.startingStyle = j.startingStyle)] = `startingStyle`),
    (e[(e.endingStyle = j.endingStyle)] = `endingStyle`),
    (e.anchorHidden = `data-anchor-hidden`),
    (e.side = `data-side`),
    (e.align = `data-align`),
    e
  );
})({});
var Ge = { "data-popup-open": `` },
  Ke = { "data-popup-open": ``, "data-pressed": `` },
  qe = { "data-open": `` },
  Je = { "data-closed": `` },
  Ye = { "data-anchor-hidden": `` },
  Xe = {
    open(e) {
      return e ? Ge : null;
    },
  },
  Ze = {
    open(e) {
      return e ? Ke : null;
    },
  },
  Qe = {
    open(e) {
      return e ? qe : Je;
    },
    anchorHidden(e) {
      return e ? Ye : null;
    },
  },
  $e = { ...Qe, ...le },
  et = 0,
  tt = class e {
    static create() {
      return new e();
    }
    currentId = et;
    start(e, t) {
      this.clear(),
        (this.currentId = setTimeout(() => {
          (this.currentId = et), t();
        }, e));
    }
    isStarted() {
      return this.currentId !== et;
    }
    clear = () => {
      this.currentId !== et &&
        (clearTimeout(this.currentId), (this.currentId = et));
    };
    disposeEffect = () => this.clear;
  };
function nt() {
  let e = d(tt.create).current;
  return P(e.disposeEffect), e;
}
function Z(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function Q(...e) {
  return () => {
    for (let t = 0; t < e.length; t += 1) {
      let n = e[t];
      n && n();
    }
  };
}
function rt(e) {
  let t = d(it, e).current;
  return (t.next = e), s(t.effect), t;
}
function it(e) {
  let t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    },
  };
  return t;
}
var at = {
    clipPath: `inset(50%)`,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1,
  },
  ot = { ...at, position: `fixed`, top: 0, left: 0 };
({ ...at });
var st = G.forwardRef(function (e, t) {
  let [n, r] = G.useState();
  s(() => {
    fe && de && r(`button`);
  }, []);
  let i = { tabIndex: 0, role: n };
  return (0,
  K.jsx)(`span`, { ...e, ref: t, style: ot, "aria-hidden": n ? void 0 : !0, ...i, "data-base-ui-focus-guard": `` });
});
function ct(e) {
  return `data-base-ui-${e}`;
}
var lt = 0;
function ut(e, t = {}) {
  let { preventScroll: n = !1, sync: r = !1, shouldFocus: i } = t;
  cancelAnimationFrame(lt);
  function a() {
    (i && !i()) || e?.focus({ preventScroll: n });
  }
  if (r) return a(), v;
  let o = requestAnimationFrame(a);
  return (
    (lt = o),
    () => {
      lt === o && (cancelAnimationFrame(o), (lt = 0));
    }
  );
}
var dt = { inert: new WeakMap(), "aria-hidden": new WeakMap() },
  ft = `data-base-ui-inert`,
  pt = { inert: new WeakSet(), "aria-hidden": new WeakSet() },
  mt = new WeakMap(),
  ht = 0;
function gt(e) {
  return pt[e];
}
function _t(e) {
  return e ? (f(e) ? e.host : _t(e.parentNode)) : null;
}
var vt = (e, t) =>
    t
      .map((t) => {
        if (e.contains(t)) return t;
        let n = _t(t);
        return e.contains(n) ? n : null;
      })
      .filter((e) => e != null),
  yt = (e) => {
    let t = new Set();
    return (
      e.forEach((e) => {
        let n = e;
        for (; n && !t.has(n); ) t.add(n), (n = n.parentNode);
      }),
      t
    );
  },
  bt = (e, t, n) => {
    let r = [],
      i = (e) => {
        !e ||
          n.has(e) ||
          Array.from(e.children).forEach((e) => {
            h(e) !== `script` && (t.has(e) ? i(e) : r.push(e));
          });
      };
    return i(e), r;
  };
function xt(e, t, n, r, { mark: i = !0 }) {
  let a = null;
  r ? (a = `inert`) : n && (a = `aria-hidden`);
  let o = null,
    s = null,
    c = vt(t, e),
    l = i ? bt(t, yt(c), new Set(c)) : [],
    u = [],
    d = [];
  if (a) {
    let e = dt[a],
      n = gt(a);
    (s = n), (o = e);
    let r = vt(t, Array.from(t.querySelectorAll(`[aria-live]`))),
      i = c.concat(r);
    bt(t, yt(i), new Set(i)).forEach((t) => {
      let r = t.getAttribute(a),
        i = r !== null && r !== `false`,
        o = (e.get(t) || 0) + 1;
      e.set(t, o),
        u.push(t),
        o === 1 && i && n.add(t),
        i || t.setAttribute(a, a === `inert` ? `` : `true`);
    });
  }
  return (
    i &&
      l.forEach((e) => {
        let t = (mt.get(e) || 0) + 1;
        mt.set(e, t), d.push(e), t === 1 && e.setAttribute(ft, ``);
      }),
    (ht += 1),
    () => {
      o &&
        u.forEach((e) => {
          let t = (o.get(e) || 0) - 1;
          o.set(e, t),
            t || (!s?.has(e) && a && e.removeAttribute(a), s?.delete(e));
        }),
        i &&
          d.forEach((e) => {
            let t = (mt.get(e) || 0) - 1;
            mt.set(e, t), t || e.removeAttribute(ft);
          }),
        --ht,
        ht ||
          ((dt.inert = new WeakMap()),
          (dt[`aria-hidden`] = new WeakMap()),
          (pt.inert = new WeakSet()),
          (pt[`aria-hidden`] = new WeakSet()),
          (mt = new WeakMap()));
    }
  );
}
function St(e, t = {}) {
  let { ariaHidden: n = !1, inert: r = !1, mark: i = !0 } = t,
    a = b(e[0]).body;
  return xt(e, a, n, r, { mark: i });
}
var Ct = e(r(), 1),
  wt = { style: { transition: `none` } },
  Tt = `data-base-ui-click-trigger`,
  Et = { fallbackAxisSide: `end` },
  Dt = { clipPath: `inset(50%)`, position: `fixed`, top: 0, left: 0 },
  Ot = G.createContext(null),
  kt = () => G.useContext(Ot),
  At = ct(`portal`);
function jt(e = {}) {
  let { ref: t, container: n, componentProps: r = u, elementProps: i } = e,
    a = z(),
    c = kt()?.portalNode,
    [d, f] = G.useState(null),
    [p, h] = G.useState(null),
    g = l((e) => {
      e !== null && h(e);
    }),
    _ = G.useRef(null);
  s(() => {
    if (n === null) {
      _.current && ((_.current = null), h(null), f(null));
      return;
    }
    let e = (n && (m(n) ? n : n.current)) ?? c ?? document.body;
    if (e == null) {
      _.current && ((_.current = null), h(null), f(null));
      return;
    }
    _.current !== e && ((_.current = e), h(null), f(e));
  }, [n, c]);
  let v = o(`div`, r, { ref: [t, g], props: [{ id: a, [At]: `` }, i] }),
    y = d && v ? Ct.createPortal(v, d) : null;
  return {
    node: p,
    nodeId: G.isValidElement(v) ? v.props.id : void 0,
    subtree: y,
  };
}
var Mt = G.forwardRef(function (e, t) {
  let {
      render: n,
      className: r,
      style: i,
      children: a,
      container: o,
      ...c
    } = e,
    {
      node: l,
      nodeId: u,
      subtree: d,
    } = jt({ container: o, ref: t, componentProps: e, elementProps: c }),
    f = G.useRef(null),
    p = G.useRef(null),
    m = G.useRef(null),
    h = G.useRef(null),
    [g, _] = G.useState(null),
    v = G.useRef(!1),
    y = g?.modal,
    b = g?.open,
    x = !!g && !g.modal && g.open && !!l;
  G.useEffect(() => {
    if (!l || y) return;
    function e(e) {
      l &&
        e.relatedTarget &&
        Be(e) &&
        (e.type === `focusin`
          ? (v.current &&= (He(l), !1))
          : (Ve(l), (v.current = !0)));
    }
    return Q(Z(l, `focusin`, e, !0), Z(l, `focusout`, e, !0));
  }, [l, y]),
    s(() => {
      !l || b !== !0 || !v.current || (He(l), (v.current = !1));
    }, [b, l]);
  let S = G.useMemo(
    () => ({
      beforeOutsideRef: f,
      afterOutsideRef: p,
      beforeInsideRef: m,
      afterInsideRef: h,
      portalNode: l,
      setFocusManagerState: _,
    }),
    [l]
  );
  return (0, K.jsxs)(G.Fragment, {
    children: [
      d,
      (0, K.jsxs)(Ot.Provider, {
        value: S,
        children: [
          x &&
            l &&
            (0, K.jsx)(st, {
              "data-type": `outside`,
              ref: f,
              onFocus: (e) => {
                Be(e, l)
                  ? m.current?.focus()
                  : Ie(g ? g.domReference : null)?.focus();
              },
            }),
          x && l && (0, K.jsx)(`span`, { "aria-owns": u, style: Dt }),
          l && Ct.createPortal(a, l),
          x &&
            l &&
            (0, K.jsx)(st, {
              "data-type": `outside`,
              ref: p,
              onFocus: (e) => {
                Be(e, l)
                  ? h.current?.focus()
                  : (Fe(g ? g.domReference : null)?.focus(),
                    g?.closeOnFocusOut &&
                      g?.onOpenChange(!1, U(`focus-out`, e.nativeEvent)));
              },
            }),
        ],
      }),
    ],
  });
});
function Nt() {
  let e = new Map();
  return {
    emit(t, n) {
      e.get(t)?.forEach((e) => e(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, new Set()), e.get(t).add(n);
    },
    off(t, n) {
      e.get(t)?.delete(n);
    },
  };
}
var Pt = class {
    nodesRef = { current: [] };
    events = Nt();
    addNode(e) {
      this.nodesRef.current.push(e);
    }
    removeNode(e) {
      let t = this.nodesRef.current.findIndex((t) => t === e);
      t !== -1 && this.nodesRef.current.splice(t, 1);
    }
  },
  Ft = G.createContext(null),
  It = G.createContext(null),
  Lt = () => G.useContext(Ft)?.id || null,
  Rt = (e) => {
    let t = G.useContext(It);
    return e ?? t;
  };
function zt(e) {
  let t = z(),
    n = Rt(e),
    r = Lt();
  return (
    s(() => {
      if (!t) return;
      let e = { id: t, parentId: r };
      return (
        n?.addNode(e),
        () => {
          n?.removeNode(e);
        }
      );
    }, [n, t, r]),
    t
  );
}
function Bt(e) {
  let { children: t, id: n } = e,
    r = Lt();
  return (0, K.jsx)(Ft.Provider, {
    value: G.useMemo(() => ({ id: n, parentId: r }), [n, r]),
    children: t,
  });
}
function Vt(e) {
  let { children: t, externalTree: n } = e,
    r = d(() => n ?? new Pt()).current;
  return (0, K.jsx)(It.Provider, { value: r, children: t });
}
function Ht(e, t) {
  let n = g(T(e));
  return e instanceof n.KeyboardEvent
    ? `keyboard`
    : e instanceof n.FocusEvent
    ? t || `keyboard`
    : `pointerType` in e
    ? e.pointerType || `keyboard`
    : `touches` in e
    ? `touch`
    : e instanceof n.MouseEvent
    ? t || (e.detail === 0 ? `keyboard` : `mouse`)
    : ``;
}
var Ut = 20,
  $ = [];
function Wt() {
  $ = $.filter((e) => e.deref()?.isConnected);
}
function Gt(e) {
  Wt(),
    e &&
      h(e) !== `body` &&
      ($.push(new WeakRef(e)), $.length > Ut && ($ = $.slice(-Ut)));
}
function Kt() {
  return Wt(), $[$.length - 1]?.deref();
}
function qt(e) {
  return e ? (je(e) ? e : Ne(e)[0] || e) : null;
}
function Jt(e) {
  if (
    (e.hasAttribute(`tabindex`) && !e.hasAttribute(`data-tabindex`)) ||
    !e.getAttribute(`role`)?.includes(`dialog`)
  )
    return;
  let t = Me(e).filter((e) => {
      let t = e.getAttribute(`data-tabindex`) || ``;
      return je(e) || (e.hasAttribute(`data-tabindex`) && !t.startsWith(`-`));
    }),
    n = e.getAttribute(`tabindex`);
  t.length === 0
    ? n !== `0` &&
      (e.setAttribute(`tabindex`, `0`), e.setAttribute(`data-tabindex`, `0`))
    : (n !== `-1` ||
        (e.hasAttribute(`data-tabindex`) &&
          e.getAttribute(`data-tabindex`) !== `-1`)) &&
      (e.setAttribute(`tabindex`, `-1`), e.setAttribute(`data-tabindex`, `-1`));
}
function Yt(e) {
  let {
      context: t,
      children: n,
      disabled: r = !1,
      initialFocus: i = !0,
      returnFocus: a = !0,
      restoreFocus: o = !1,
      modal: c = !0,
      closeOnFocusOut: u = !0,
      openInteractionType: d = ``,
      nextFocusableElement: f,
      previousFocusableElement: p,
      beforeContentFocusGuardRef: m,
      externalTree: g,
      getInsideElements: v,
    } = e,
    y = `rootStore` in t ? t.rootStore : t,
    x = y.useState(`open`),
    C = y.useState(`domReferenceElement`),
    w = y.useState(`floatingElement`),
    { events: E, dataRef: D } = y.context,
    j = l(() => D.current.floatingContext?.nodeId),
    M = i === !1,
    N = _e(C) && M,
    P = rt(i),
    ie = rt(a),
    F = rt(d),
    I = rt(x),
    L = Rt(g),
    R = kt(),
    z = G.useRef(!1),
    V = G.useRef(!1),
    H = G.useRef(!1),
    oe = G.useRef(null),
    se = G.useRef(``),
    ce = G.useRef(``),
    le = G.useRef(null),
    W = G.useRef(null),
    ue = _(le, m, R?.beforeInsideRef),
    fe = _(W, R?.afterInsideRef),
    pe = nt(),
    q = nt(),
    me = ae(),
    ge = R != null,
    J = ve(w),
    Y = l((e = J) => (e ? Ne(e) : [])),
    X = l(() => v?.().filter((e) => e != null) ?? []);
  G.useEffect(() => {
    if (r || !c) return;
    function e(e) {
      e.key === `Tab` && O(J, A(b(J))) && Y().length === 0 && !N && ne(e);
    }
    return Z(b(J), `keydown`, e);
  }, [r, J, c, N, Y]),
    G.useEffect(() => {
      if (r || !x) return;
      let e = b(J);
      function t() {
        H.current = !1;
      }
      function n(e) {
        let t = T(e),
          n = X();
        (H.current = !(
          O(w, t) ||
          O(C, t) ||
          O(R?.portalNode, t) ||
          n.some((e) => e === t || O(e, t))
        )),
          (ce.current = e.pointerType || `keyboard`),
          t?.closest(`[data-base-ui-click-trigger]`) &&
            ((V.current = !0),
            q.start(0, () => {
              V.current = !1;
            }));
      }
      function i() {
        ce.current = `keyboard`;
      }
      return Q(
        Z(e, `pointerdown`, n, !0),
        Z(e, `pointerup`, t, !0),
        Z(e, `pointercancel`, t, !0),
        Z(e, `keydown`, i, !0),
        t
      );
    }, [r, w, C, J, x, R, q, X]),
    G.useEffect(() => {
      if (r || !u) return;
      let e = b(J);
      function t() {
        (V.current = !0),
          q.start(0, () => {
            V.current = !1;
          });
      }
      function n(e) {
        let t = T(e);
        je(t) && (oe.current = t);
      }
      function i(t) {
        let n = t.relatedTarget,
          r = t.currentTarget,
          i = T(t);
        c && n == null && i != null && O(w, i) && Gt(i),
          queueMicrotask(() => {
            let a = j(),
              s = y.context.triggerElements,
              l = X(),
              u =
                n?.hasAttribute(ct(`focus-guard`)) &&
                [
                  le.current,
                  W.current,
                  R?.beforeInsideRef.current,
                  R?.afterInsideRef.current,
                  R?.beforeOutsideRef.current,
                  R?.afterOutsideRef.current,
                  B(p),
                  B(f),
                ].includes(n),
              d = !(
                O(C, n) ||
                O(w, n) ||
                O(n, w) ||
                O(R?.portalNode, n) ||
                l.some((e) => e === n || O(e, n)) ||
                s.hasMatchingElement((e) => O(e, n)) ||
                u ||
                (L &&
                  (ye(L.nodesRef.current, a).find(
                    (e) =>
                      O(e.context?.elements.floating, n) ||
                      O(e.context?.elements.domReference, n)
                  ) ||
                    be(L.nodesRef.current, a).find(
                      (e) =>
                        [
                          e.context?.elements.floating,
                          ve(e.context?.elements.floating),
                        ].includes(n) || e.context?.elements.domReference === n
                    )))
              );
            if (
              (r === C && J && Jt(J), o && r !== C && !ee(i) && A(e) === e.body)
            ) {
              if (S(J) && (J.focus(), o === `popup`)) {
                me.request(() => {
                  J.focus();
                });
                return;
              }
              let e = Y(),
                t = oe.current,
                n = (t && e.includes(t) ? t : null) || e[e.length - 1] || J;
              S(n) && n.focus();
            }
            if (D.current.insideReactTree) {
              D.current.insideReactTree = !1;
              return;
            }
            (N || !c) &&
              n &&
              d &&
              !V.current &&
              (N || n !== Kt()) &&
              ((z.current = !0), y.setOpen(!1, U(re, t)));
          });
      }
      function a() {
        H.current ||
          ((D.current.insideReactTree = !0),
          pe.start(0, () => {
            D.current.insideReactTree = !1;
          }));
      }
      let s = S(C) ? C : null;
      if (!(!w && !s))
        return Q(
          s && Z(s, `focusout`, i),
          s && Z(s, `pointerdown`, t),
          w && Z(w, `focusin`, n),
          w && Z(w, `focusout`, i),
          w && R && Z(w, `focusout`, a, !0)
        );
    }, [r, C, w, J, c, L, R, y, u, o, Y, N, j, D, pe, q, me, f, p, X]),
    G.useEffect(() => {
      if (r || !w || !x) return;
      let e = Array.from(
          R?.portalNode?.querySelectorAll(`[${ct(`portal`)}]`) || []
        ),
        t = (L ? be(L.nodesRef.current, j()) : []).find((e) =>
          _e(e.context?.elements.domReference || null)
        )?.context?.elements.domReference,
        n = St(
          [
            w,
            ...e,
            le.current,
            W.current,
            R?.beforeOutsideRef.current,
            R?.afterOutsideRef.current,
            ...X(),
            t,
            B(p),
            B(f),
            N ? C : null,
          ].filter((e) => e != null),
          { ariaHidden: c || N, mark: !1 }
        ),
        i = St([w, ...e].filter((e) => e != null));
      return () => {
        i(), n();
      };
    }, [x, r, C, w, c, R, N, L, j, f, p, X]),
    s(() => {
      if (!x || r || !S(J)) return;
      (se.current = ``), (ce.current = ``);
      let e = b(J),
        t = A(e);
      queueMicrotask(() => {
        let n = P.current,
          r = typeof n == `function` ? n(F.current || ``) : n;
        if (r === void 0 || r === !1 || O(J, t)) return;
        let i = null,
          a = () => ((i ??= Y(J)), i[0] || J),
          o;
        (o = r === !0 || r === null ? a() : B(r)), (o ||= a());
        let s = O(J, A(e));
        ut(o, {
          preventScroll: o === J,
          shouldFocus() {
            if (!I.current) return !1;
            if (s) return !0;
            let t = A(e);
            return !(t !== o && O(J, t));
          },
        });
      });
    }, [r, x, J, Y, P, F, I]),
    s(() => {
      if (r || !J) return;
      let e = b(J),
        t = A(e),
        n = F.current == null;
      Gt(t);
      function i(e) {
        if (
          (e.open || (se.current = Ht(e.nativeEvent, ce.current)),
          e.reason === `trigger-hover` &&
            e.nativeEvent.type === `mouseleave` &&
            (z.current = !0),
          e.reason === `outside-press`)
        )
          if (e.nested) z.current = !1;
          else if (te(e.nativeEvent) || k(e.nativeEvent)) z.current = !1;
          else {
            let e = !1;
            b(J)
              .createElement(`div`)
              .focus({
                get preventScroll() {
                  return (e = !0), !1;
                },
              }),
              e ? (z.current = !1) : (z.current = !0);
          }
      }
      E.on(`openchange`, i);
      function a(e) {
        let r = ie.current,
          i = typeof r == `function` ? r(e) : r;
        if (i === void 0 || i === !1) return null;
        i === null && (i = !0);
        let a = C?.isConnected ? C : null,
          o = t?.isConnected && h(t) !== `body` ? t : null,
          s = n ? o || a : a || o;
        return (
          (s ||= Kt() || null), typeof i == `boolean` ? s : B(i) || s || null
        );
      }
      return () => {
        E.off(`openchange`, i);
        let t = A(e),
          n = X(),
          r =
            O(w, t) ||
            n.some((e) => e === t || O(e, t)) ||
            (L &&
              ye(L.nodesRef.current, j(), !1).some((e) =>
                O(e.context?.elements.floating, t)
              )),
          o = ie.current,
          s = se.current,
          c = a(s);
        queueMicrotask(() => {
          let n = qt(c),
            i = typeof o != `boolean`;
          if (
            o &&
            !z.current &&
            S(n) &&
            (!(!i && n !== t && t !== e.body) || r)
          ) {
            let e = { preventScroll: !0 };
            s === `keyboard` && (e.focusVisible = !0), n.focus(e);
          }
          z.current = !1;
        });
      };
    }, [r, w, J, ie, F, E, L, C, j, X]),
    s(() => {
      if (!de || x || !w) return;
      let e = A(b(w));
      !S(e) || !he(e) || (O(w, e) && e.blur());
    }, [x, w]),
    s(() => {
      if (!(r || !R))
        return (
          R.setFocusManagerState({
            modal: c,
            closeOnFocusOut: u,
            open: x,
            onOpenChange: y.setOpen,
            domReference: C,
          }),
          () => {
            R.setFocusManagerState(null);
          }
        );
    }, [r, R, c, x, y, u, C]),
    s(() => {
      if (!(r || !J))
        return (
          Jt(J),
          () => {
            queueMicrotask(Wt);
          }
        );
    }, [r, J]);
  let xe = !r && (c ? !N : !0) && (ge || c);
  return (0, K.jsxs)(G.Fragment, {
    children: [
      xe &&
        (0, K.jsx)(st, {
          "data-type": `inside`,
          ref: ue,
          onFocus: (e) => {
            if (c) {
              let e = Y();
              ut(e[e.length - 1]);
            } else
              R?.portalNode &&
                ((z.current = !1),
                Be(e, R.portalNode)
                  ? Fe(C)?.focus()
                  : B(p ?? R.beforeOutsideRef)?.focus());
          },
        }),
      n,
      xe &&
        (0, K.jsx)(st, {
          "data-type": `inside`,
          ref: fe,
          onFocus: (e) => {
            c
              ? ut(Y()[0])
              : R?.portalNode &&
                (u && (z.current = !0),
                Be(e, R.portalNode)
                  ? Ie(C)?.focus()
                  : B(f ?? R.afterOutsideRef)?.focus());
          },
        }),
    ],
  });
}
function Xt(e, t = {}) {
  let {
      enabled: n = !0,
      event: r = `click`,
      toggle: i = !0,
      ignoreMouse: a = !1,
      stickIfOpen: o = !0,
      touchOpenDelay: s = 0,
      reason: c = W,
    } = t,
    l = `rootStore` in e ? e.rootStore : e,
    d = l.context.dataRef,
    f = G.useRef(void 0),
    p = ae(),
    m = nt(),
    h = G.useMemo(() => {
      function e(e, t, n, r) {
        let i = U(c, t, n);
        e && r === `touch` && s > 0
          ? m.start(s, () => {
              l.setOpen(!0, i);
            })
          : l.setOpen(e, i);
      }
      function t(e, t, n) {
        let r = d.current.openEvent,
          a = l.select(`domReferenceElement`) !== t;
        return (e && a) || !e || !i ? !0 : r && o ? !n(r.type) : !1;
      }
      return {
        onPointerDown(e) {
          f.current =
            D(e.pointerType, !0) && k(e.nativeEvent)
              ? `virtual`
              : e.pointerType;
        },
        onMouseDown(n) {
          let i = f.current,
            o = n.nativeEvent,
            s = l.select(`open`);
          if (n.button !== 0 || r === `click` || (D(i, !0) && a)) return;
          let c = t(
              s,
              n.currentTarget,
              (e) => e === `click` || e === `mousedown`
            ),
            u = T(o);
          if (he(u)) {
            e(c, o, u, i);
            return;
          }
          let d = n.currentTarget;
          p.request(() => {
            e(c, o, d, i);
          });
        },
        onClick(n) {
          if (r === `mousedown-only`) return;
          let i = f.current;
          if (r === `mousedown` && i) {
            f.current = void 0;
            return;
          }
          (D(i, !0) && a) ||
            e(
              t(
                l.select(`open`),
                n.currentTarget,
                (e) =>
                  e === `click` ||
                  e === `mousedown` ||
                  e === `keydown` ||
                  e === `keyup`
              ),
              n.nativeEvent,
              n.currentTarget,
              i
            );
        },
        onKeyDown() {
          f.current = void 0;
        },
      };
    }, [d, r, a, c, l, o, i, p, m, s]);
  return G.useMemo(() => (n ? { reference: h } : u), [n, h]);
}
function Zt() {
  return !1;
}
function Qt(e) {
  return {
    escapeKey: typeof e == `boolean` ? e : e?.escapeKey ?? !1,
    outsidePress: typeof e == `boolean` ? e : e?.outsidePress ?? !0,
  };
}
function $t(e, t = {}) {
  let {
      enabled: n = !0,
      escapeKey: r = !0,
      outsidePress: i = !0,
      outsidePressEvent: a = `sloppy`,
      referencePress: o = Zt,
      bubbles: s,
      externalTree: c,
    } = t,
    u = `rootStore` in e ? e.rootStore : e,
    d = u.useState(`open`),
    m = u.useState(`floatingElement`),
    { dataRef: h } = u.context,
    g = Rt(c),
    _ = l(typeof i == `function` ? i : () => !1),
    v = typeof i == `function` ? _ : i,
    C = v !== !1,
    ee = l(() => a),
    { escapeKey: E, outsidePress: te } = Qt(s),
    D = G.useRef(!1),
    ne = G.useRef(!1),
    k = G.useRef(!1),
    A = G.useRef(!1),
    j = G.useRef(``),
    M = G.useRef(null),
    re = nt(),
    N = nt(),
    P = l(() => {
      N.clear(), (h.current.insideReactTree = !1);
    }),
    ae = l((e) => {
      let t = h.current.floatingContext?.nodeId;
      return (g ? ye(g.nodesRef.current, t) : []).some(
        (t) => t.context?.open && !t.context.dataRef.current[e]
      );
    }),
    F = l(
      (e) =>
        q(e, u.select(`floatingElement`)) ||
        q(e, u.select(`domReferenceElement`))
    ),
    I = l((e) => {
      o() && u.setOpen(!1, U(W, e.nativeEvent));
    }),
    L = l((e) => {
      if (
        !d ||
        !n ||
        !r ||
        e.key !== `Escape` ||
        A.current ||
        (!E && ae(`__escapeKeyBubbles`))
      )
        return;
      let t = U(ce, V(e) ? e.nativeEvent : e);
      u.setOpen(!1, t),
        t.isCanceled || e.preventDefault(),
        !E && !t.isPropagationAllowed && e.stopPropagation();
    }),
    R = l(() => {
      (h.current.insideReactTree = !0), N.start(0, P);
    }),
    z = l((e) => {
      if (!d || !n || e.button !== 0) return;
      let t = T(e.nativeEvent);
      O(u.select(`floatingElement`), t) &&
        (D.current || ((D.current = !0), (ne.current = !1)));
    }),
    B = l((e) => {
      !d ||
        !n ||
        ((e.defaultPrevented || e.nativeEvent.defaultPrevented) &&
          D.current &&
          (ne.current = !0));
    });
  G.useEffect(() => {
    if (!d || !n) return P;
    (h.current.__escapeKeyBubbles = E), (h.current.__outsidePressBubbles = te);
    let e = new tt(),
      t = new tt();
    function i() {
      e.clear(), (A.current = !0);
    }
    function a() {
      e.start(de ? 5 : 0, () => {
        A.current = !1;
      });
    }
    function o() {
      (k.current = !0),
        t.start(0, () => {
          k.current = !1;
        });
    }
    function s() {
      (D.current = !1), (ne.current = !1);
    }
    function c() {
      let e = j.current,
        t = e === `pen` || !e ? `mouse` : e,
        n = ee(),
        r = typeof n == `function` ? n() : n;
      return typeof r == `string` ? r : r[t];
    }
    function l(e) {
      let t = c();
      return (
        (t === `intentional` && e.type !== `click`) ||
        (t === `sloppy` && e.type === `click`)
      );
    }
    function _(e) {
      let t = h.current.floatingContext?.nodeId,
        n =
          g &&
          ye(g.nodesRef.current, t).some((t) =>
            q(e, t.context?.elements.floating)
          );
      return F(e) || n;
    }
    function N(e) {
      if (l(e)) {
        e.type !== `click` && !F(e) && (t.clear(), (k.current = !1)), P();
        return;
      }
      if (h.current.insideReactTree) {
        P();
        return;
      }
      let n = T(e),
        r = `[${ct(`inert`)}]`,
        i = p(n) ? n.getRootNode() : null,
        a = Array.from(
          (f(i) ? i : b(u.select(`floatingElement`))).querySelectorAll(r)
        ),
        o = u.context.triggerElements;
      if (n && (o.hasElement(n) || o.hasMatchingElement((e) => O(e, n))))
        return;
      let s = p(n) ? n : null;
      for (; s && !w(s); ) {
        let e = y(s);
        if (w(e) || !p(e)) break;
        s = e;
      }
      if (
        !(
          a.length &&
          p(n) &&
          !me(n) &&
          !O(n, u.select(`floatingElement`)) &&
          a.every((e) => !O(s, e))
        )
      ) {
        if (S(n) && !(`touches` in e)) {
          let t = w(n),
            r = x(n),
            i = /auto|scroll/,
            a = t || i.test(r.overflowX),
            o = t || i.test(r.overflowY),
            s = a && n.clientWidth > 0 && n.scrollWidth > n.clientWidth,
            c = o && n.clientHeight > 0 && n.scrollHeight > n.clientHeight,
            l = r.direction === `rtl`,
            u =
              c &&
              (l
                ? e.offsetX <= n.offsetWidth - n.clientWidth
                : e.offsetX > n.clientWidth),
            d = s && e.offsetY > n.clientHeight;
          if (u || d) return;
        }
        if (!_(e)) {
          if (c() === `intentional` && k.current) {
            t.clear(), (k.current = !1);
            return;
          }
          (typeof v == `function` && !v(e)) ||
            ae(`__outsidePressBubbles`) ||
            (u.setOpen(!1, U(ie, e)), P());
        }
      }
    }
    function I(e) {
      c() !== `sloppy` ||
        e.pointerType === `touch` ||
        !u.select(`open`) ||
        !n ||
        F(e) ||
        N(e);
    }
    function R(e) {
      if (c() !== `sloppy` || !u.select(`open`) || !n || F(e)) return;
      let t = e.touches[0];
      t &&
        ((M.current = {
          startTime: Date.now(),
          startX: t.clientX,
          startY: t.clientY,
          dismissOnTouchEnd: !1,
          dismissOnMouseDown: !0,
        }),
        re.start(1e3, () => {
          M.current &&
            ((M.current.dismissOnTouchEnd = !1),
            (M.current.dismissOnMouseDown = !1));
        }));
    }
    function z(e, t) {
      let n = T(e);
      if (!n) return;
      let r = Z(n, e.type, () => {
        t(e), r();
      });
    }
    function B(e) {
      (j.current = `touch`), z(e, R);
    }
    function V(e) {
      re.clear(),
        e.type === `pointerdown` && (j.current = e.pointerType),
        !(
          e.type === `mousedown` &&
          M.current &&
          !M.current.dismissOnMouseDown
        ) &&
          z(e, (e) => {
            e.type === `pointerdown` ? I(e) : N(e);
          });
    }
    function H(e) {
      if (!D.current) return;
      let n = ne.current;
      if ((s(), c() === `intentional`)) {
        if (e.type === `pointercancel`) {
          n && o();
          return;
        }
        if (!_(e)) {
          if (n) {
            o();
            return;
          }
          (typeof v == `function` && !v(e)) ||
            (t.clear(), (k.current = !0), P());
        }
      }
    }
    function oe(e) {
      if (c() !== `sloppy` || !M.current || F(e)) return;
      let t = e.touches[0];
      if (!t) return;
      let n = Math.abs(t.clientX - M.current.startX),
        r = Math.abs(t.clientY - M.current.startY),
        i = Math.sqrt(n * n + r * r);
      i > 5 && (M.current.dismissOnTouchEnd = !0),
        i > 10 && (N(e), re.clear(), (M.current = null));
    }
    function se(e) {
      z(e, oe);
    }
    function ce(e) {
      c() !== `sloppy` ||
        !M.current ||
        F(e) ||
        (M.current.dismissOnTouchEnd && N(e), re.clear(), (M.current = null));
    }
    function le(e) {
      z(e, ce);
    }
    let W = b(m),
      ue = Q(
        r &&
          Q(
            Z(W, `keydown`, L),
            Z(W, `compositionstart`, i),
            Z(W, `compositionend`, a)
          ),
        C &&
          Q(
            Z(W, `click`, V, !0),
            Z(W, `pointerdown`, V, !0),
            Z(W, `pointerup`, H, !0),
            Z(W, `pointercancel`, H, !0),
            Z(W, `mousedown`, V, !0),
            Z(W, `mouseup`, H, !0),
            Z(W, `touchstart`, B, !0),
            Z(W, `touchmove`, se, !0),
            Z(W, `touchend`, le, !0)
          )
      );
    return () => {
      ue(), e.clear(), t.clear(), s(), (k.current = !1), P();
    };
  }, [h, m, r, C, v, d, n, E, te, L, P, ee, ae, F, g, u, re]);
  let H = G.useMemo(
      () => ({ onKeyDown: L, onPointerDown: I, onClick: I }),
      [L, I]
    ),
    oe = G.useMemo(
      () => ({
        onKeyDown: L,
        onPointerDown: B,
        onMouseDown: B,
        onClickCapture: R,
        onMouseDownCapture(e) {
          R(), z(e);
        },
        onPointerDownCapture(e) {
          R(), z(e);
        },
        onMouseUpCapture: R,
        onTouchEndCapture: R,
        onTouchMoveCapture: R,
      }),
      [L, R, z, B]
    );
  return G.useMemo(
    () => (n ? { reference: H, floating: oe, trigger: H } : {}),
    [n, H, oe]
  );
}
var en = t((e) => {
    var t = n(),
      r = We();
    function i(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var a = typeof Object.is == `function` ? Object.is : i,
      o = r.useSyncExternalStore,
      s = t.useRef,
      c = t.useEffect,
      l = t.useMemo,
      u = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var d = s(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = l(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), i !== void 0 && f.hasValue)) {
                var t = f.value;
                if (i(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), a(s, e))) return t;
            var n = r(e);
            return i !== void 0 && i(t, n) ? ((s = e), t) : ((s = e), (c = n));
          }
          var o = !1,
            s,
            c,
            l = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            l === null
              ? void 0
              : function () {
                  return e(l());
                },
          ];
        },
        [t, n, r, i]
      );
      var p = o(e, d[0], d[1]);
      return (
        c(
          function () {
            (f.hasValue = !0), (f.value = p);
          },
          [p]
        ),
        u(p),
        p
      );
    };
  }),
  tn = t((e, t) => {
    t.exports = en();
  }),
  nn = We(),
  rn = tn(),
  an = [],
  on = void 0;
function sn() {
  return on;
}
function cn(e) {
  an.push(e);
}
var ln = a(19) ? fn : pn;
function un(e, t, n, r, i) {
  return ln(e, t, n, r, i);
}
function dn(e, t, n, r, i) {
  let a = G.useCallback(() => t(e.getSnapshot(), n, r, i), [e, t, n, r, i]);
  return (0, nn.useSyncExternalStore)(e.subscribe, a, a);
}
cn({
  before(e) {
    (e.syncIndex = 0),
      e.didInitialize ||
        ((e.syncTick = 1),
        (e.syncHooks = []),
        (e.didChangeStore = !0),
        (e.getSnapshot = () => {
          let t = !1;
          for (let n = 0; n < e.syncHooks.length; n += 1) {
            let r = e.syncHooks[n],
              i = r.selector(r.store.state, r.a1, r.a2, r.a3);
            Object.is(r.value, i) || ((t = !0), (r.value = i));
          }
          return t && (e.syncTick += 1), e.syncTick;
        }));
  },
  after(e) {
    e.syncHooks.length > 0 &&
      (e.didChangeStore &&
        ((e.didChangeStore = !1),
        (e.subscribe = (t) => {
          let n = new Set();
          for (let t of e.syncHooks) n.add(t.store);
          let r = [];
          for (let e of n) r.push(e.subscribe(t));
          return () => {
            for (let e of r) e();
          };
        })),
      (0, nn.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
  },
});
function fn(e, t, n, r, i) {
  let a = sn();
  if (!a) return dn(e, t, n, r, i);
  let o = a.syncIndex;
  a.syncIndex += 1;
  let s;
  return (
    a.didInitialize
      ? ((s = a.syncHooks[o]),
        (s.store !== e ||
          s.selector !== t ||
          !Object.is(s.a1, n) ||
          !Object.is(s.a2, r) ||
          !Object.is(s.a3, i)) &&
          (s.store !== e && (a.didChangeStore = !0),
          (s.store = e),
          (s.selector = t),
          (s.a1 = n),
          (s.a2 = r),
          (s.a3 = i),
          (s.value = t(e.getSnapshot(), n, r, i))))
      : ((s = {
          store: e,
          selector: t,
          a1: n,
          a2: r,
          a3: i,
          value: t(e.getSnapshot(), n, r, i),
        }),
        a.syncHooks.push(s)),
    s.value
  );
}
function pn(e, t, n, r, i) {
  return (0, rn.useSyncExternalStoreWithSelector)(
    e.subscribe,
    e.getSnapshot,
    e.getSnapshot,
    (e) => t(e, n, r, i)
  );
}
var mn = class {
    constructor(e) {
      (this.state = e), (this.listeners = new Set()), (this.updateTick = 0);
    }
    subscribe = (e) => (
      this.listeners.add(e),
      () => {
        this.listeners.delete(e);
      }
    );
    getSnapshot = () => this.state;
    setState(e) {
      if (this.state === e) return;
      (this.state = e), (this.updateTick += 1);
      let t = this.updateTick;
      for (let n of this.listeners) {
        if (t !== this.updateTick) return;
        n(e);
      }
    }
    update(e) {
      for (let t in e)
        if (!Object.is(this.state[t], e[t])) {
          this.setState({ ...this.state, ...e });
          return;
        }
    }
    set(e, t) {
      Object.is(this.state[e], t) || this.setState({ ...this.state, [e]: t });
    }
    notifyAll() {
      let e = { ...this.state };
      this.setState(e);
    }
    use(e, t, n, r) {
      return un(this, e, t, n, r);
    }
  },
  hn = class extends mn {
    constructor(e, t = {}, n) {
      super(e), (this.context = t), (this.selectors = n);
    }
    useSyncedValue(e, t) {
      G.useDebugValue(e);
      let n = this;
      s(() => {
        n.state[e] !== t && n.set(e, t);
      }, [n, e, t]);
    }
    useSyncedValueWithCleanup(e, t) {
      let n = this;
      s(
        () => (
          n.state[e] !== t && n.set(e, t),
          () => {
            n.set(e, void 0);
          }
        ),
        [n, e, t]
      );
    }
    useSyncedValues(e) {
      let t = this;
      s(() => {
        t.update(e);
      }, [t, ...Object.values(e)]);
    }
    useControlledProp(e, t) {
      G.useDebugValue(e);
      let n = this,
        r = t !== void 0;
      s(() => {
        r && !Object.is(n.state[e], t) && n.setState({ ...n.state, [e]: t });
      }, [n, e, t, r]);
    }
    select(e, t, n, r) {
      let i = this.selectors[e];
      return i(this.state, t, n, r);
    }
    useState(e, t, n, r) {
      return G.useDebugValue(e), un(this, this.selectors[e], t, n, r);
    }
    useContextCallback(e, t) {
      G.useDebugValue(e);
      let n = l(t ?? v);
      this.context[e] = n;
    }
    useStateSetter(e) {
      let t = G.useRef(void 0);
      return (
        t.current === void 0 &&
          (t.current = (t) => {
            this.set(e, t);
          }),
        t.current
      );
    }
    observe(e, t) {
      let n;
      n = typeof e == `function` ? e : this.selectors[e];
      let r = n(this.state);
      return (
        t(r, r, this),
        this.subscribe((e) => {
          let i = n(e);
          if (!Object.is(r, i)) {
            let e = r;
            (r = i), t(i, e, this);
          }
        })
      );
    }
  },
  gn = {
    open: (e) => e.open,
    transitionStatus: (e) => e.transitionStatus,
    domReferenceElement: (e) => e.domReferenceElement,
    referenceElement: (e) => e.positionReference ?? e.referenceElement,
    floatingElement: (e) => e.floatingElement,
    floatingId: (e) => e.floatingId,
  },
  _n = class extends hn {
    constructor(e) {
      let {
        syncOnly: t,
        nested: n,
        onOpenChange: r,
        triggerElements: i,
        ...a
      } = e;
      super(
        {
          ...a,
          positionReference: a.referenceElement,
          domReferenceElement: a.referenceElement,
        },
        {
          onOpenChange: r,
          dataRef: { current: {} },
          events: Nt(),
          nested: n,
          triggerElements: i,
        },
        gn
      ),
        (this.syncOnly = t);
    }
    syncOpenEvent = (e, t) => {
      (!e || !this.state.open || (t != null && E(t))) &&
        (this.context.dataRef.current.openEvent = e ? t : void 0);
    };
    dispatchOpenChange = (e, t) => {
      this.syncOpenEvent(e, t.event);
      let n = {
        open: e,
        reason: t.reason,
        nativeEvent: t.event,
        nested: this.context.nested,
        triggerElement: t.trigger,
      };
      this.context.events.emit(`openchange`, n);
    };
    setOpen = (e, t) => {
      if (this.syncOnly) {
        this.context.onOpenChange?.(e, t);
        return;
      }
      this.dispatchOpenChange(e, t), this.context.onOpenChange?.(e, t);
    };
  };
function vn(e) {
  let {
      popupStore: t,
      treatPopupAsFloatingElement: n = !1,
      floatingRootContext: r,
      floatingId: i,
      nested: a,
      onOpenChange: o,
    } = e,
    c = t.useState(`open`),
    l = t.useState(`activeTriggerElement`),
    u = t.useState(n ? `popupElement` : `positionerElement`),
    d = t.context.triggerElements,
    f = o,
    m = G.useRef(null);
  r === void 0 &&
    m.current === null &&
    (m.current = new _n({
      open: c,
      transitionStatus: void 0,
      referenceElement: l,
      floatingElement: u,
      triggerElements: d,
      onOpenChange: f,
      floatingId: i,
      syncOnly: !0,
      nested: a,
    }));
  let h = r ?? m.current;
  return (
    t.useSyncedValue(`floatingId`, i),
    s(() => {
      let e = {
        open: c,
        floatingId: i,
        referenceElement: l,
        floatingElement: u,
      };
      p(l) && (e.domReferenceElement = l),
        h.state.positionReference === h.state.referenceElement &&
          (e.positionReference = l),
        h.update(e);
    }, [c, i, l, u, h]),
    (h.context.onOpenChange = f),
    (h.context.nested = a),
    h
  );
}
var yn = { tabIndex: -1, [N]: `` };
function bn(e) {
  return (t) => (t === `touch` ? e.current : !0);
}
function xn(e, t = !1) {
  let n = z(),
    r = Lt() != null,
    i = d(() => e(n, r)).current;
  return (
    vn({
      popupStore: i,
      treatPopupAsFloatingElement: t,
      floatingRootContext: i.state.floatingRootContext,
      floatingId: n,
      nested: r,
      onOpenChange: i.setOpen,
    }),
    i
  );
}
function Sn({ handle: e, store: t }) {
  return s(() => e.attachStore(t), [e, t]), null;
}
function Cn(e, t) {
  let n = G.useRef(null),
    r = G.useRef(null);
  return G.useCallback(
    (i) => {
      if (e === void 0) return;
      let a = !1;
      if (n.current !== null) {
        let e = n.current,
          i = r.current,
          o = t.context.triggerElements.getById(e);
        i && o === i && (t.context.triggerElements.delete(e), (a = !0)),
          (n.current = null),
          (r.current = null);
      }
      if (
        (i !== null &&
          ((n.current = e),
          (r.current = i),
          t.context.triggerElements.add(e, i),
          (a = !0)),
        a)
      ) {
        let e = t.context.triggerElements.size;
        t.select(`open`) &&
          t.state.triggerCount !== e &&
          t.set(`triggerCount`, e);
      }
    },
    [t, e]
  );
}
function wn(e, t, n, r = !1) {
  t
    ? (e.preventUnmountingOnClose = !1)
    : r && (e.preventUnmountingOnClose = !0);
  let i = n?.id ?? null;
  (i || t) && ((e.activeTriggerId = i), (e.activeTriggerElement = n ?? null));
}
function Tn(e) {
  let t = !1;
  return (
    (e.preventUnmountOnClose = () => {
      t = !0;
    }),
    () => t
  );
}
function En(e, t, n, r) {
  let i = n.useState(`isMountedByTrigger`, e),
    a = Cn(e, n),
    o = l((t) => {
      let i = n.select(`open`),
        a = n.select(`activeTriggerId`);
      if (a === e) {
        n.update({ activeTriggerElement: t, ...(i ? r : null) });
        return;
      }
      a == null &&
        i &&
        n.update({ activeTriggerId: e, activeTriggerElement: t, ...r });
    }),
    c = G.useCallback(
      (e) => {
        a(e), e && o(e);
      },
      [a, o]
    );
  return (
    s(() => {
      i && n.update({ activeTriggerElement: t.current, ...r });
    }, [i, n, t, ...Object.values(r)]),
    { registerTrigger: c, isMountedByThisTrigger: i }
  );
}
function Dn(e, t = {}) {
  let { closeOnActiveTriggerUnmount: n = !1 } = t,
    r = G.useRef(null),
    i = e.useState(`open`);
  s(() => {
    if (!i) {
      (r.current = null),
        e.state.triggerCount !== 0 && e.set(`triggerCount`, 0);
      return;
    }
    let t = e.context.triggerElements.size,
      a = {};
    e.state.triggerCount !== t && (a.triggerCount = t);
    let o = e.select(`activeTriggerId`),
      s = null;
    if (o) {
      let t = e.context.triggerElements.getById(o);
      if (t)
        (r.current = o),
          t !== e.state.activeTriggerElement && (a.activeTriggerElement = t);
      else {
        for (let [t, n] of e.context.triggerElements.entries())
          if (n === e.state.activeTriggerElement) {
            (a.activeTriggerId = t),
              (a.activeTriggerElement = n),
              (r.current = t);
            break;
          }
        a.activeTriggerId === void 0 &&
          (r.current === o ? (s = o) : (r.current = null));
      }
    } else r.current = null;
    if (!s && !o && t === 1) {
      let t = e.context.triggerElements.entries().next();
      if (!t.done) {
        let [e, n] = t.value;
        (a.activeTriggerId = e), (a.activeTriggerElement = n), (r.current = e);
      }
    }
    (a.triggerCount !== void 0 ||
      a.activeTriggerId !== void 0 ||
      a.activeTriggerElement !== void 0) &&
      e.update(a),
      s &&
        n &&
        queueMicrotask(() => {
          if (
            e.select(`open`) &&
            e.select(`activeTriggerId`) === s &&
            !e.context.triggerElements.getById(s)
          ) {
            let t = U(F);
            e.setOpen(!1, t),
              t.isCanceled ||
                e.update({ activeTriggerId: null, activeTriggerElement: null });
          }
        });
  }, [
    i,
    e,
    e.useState(`triggerCount`),
    e.useState(`activeTriggerId`),
    e.useState(`activeTriggerElement`),
    n,
  ]);
}
function On(e, t, n) {
  let { mounted: r, setMounted: i, transitionStatus: a } = se(e),
    o = t.useState(`preventUnmountingOnClose`),
    s = e ? !1 : o;
  t.useSyncedValues({
    mounted: r,
    transitionStatus: a,
    preventUnmountingOnClose: s,
  });
  let c = l(() => {
    i(!1),
      t.update({
        activeTriggerId: null,
        activeTriggerElement: null,
        mounted: !1,
        preventUnmountingOnClose: !1,
      }),
      n?.(),
      t.context.onOpenChangeComplete?.(!1);
  });
  return (
    M({
      enabled: r && !e && !s,
      open: e,
      ref: t.context.popupRef,
      onComplete() {
        e || c();
      },
    }),
    { forceUnmount: c, transitionStatus: a }
  );
}
function kn(e, t) {
  e.useSyncedValues(t),
    s(
      () => () => {
        e.update({
          activeTriggerProps: u,
          inactiveTriggerProps: u,
          popupProps: u,
        });
      },
      [e]
    );
}
function An(e, t) {
  s(() => {
    !t && e.state.openMethod !== null && e.set(`openMethod`, null);
  }, [t, e]),
    s(
      () => () => {
        e.state.openMethod !== null && e.set(`openMethod`, null);
      },
      [e]
    );
}
var jn = class {
  constructor() {
    this.idMap = new Map();
  }
  add(e, t) {
    this.idMap.set(e, t);
  }
  delete(e) {
    this.idMap.delete(e);
  }
  hasElement(e) {
    for (let t of this.idMap.values()) if (t === e) return !0;
    return !1;
  }
  hasMatchingElement(e) {
    for (let t of this.idMap.values()) if (e(t)) return !0;
    return !1;
  }
  getById(e) {
    return this.idMap.get(e);
  }
  entries() {
    return this.idMap.entries();
  }
  elements() {
    return this.idMap.values();
  }
  get size() {
    return this.idMap.size;
  }
};
function Mn() {
  return new _n({
    open: !1,
    transitionStatus: void 0,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new jn(),
    floatingId: void 0,
    syncOnly: !1,
    nested: !1,
    onOpenChange: void 0,
  });
}
function Nn() {
  return {
    open: !1,
    openProp: void 0,
    mounted: !1,
    transitionStatus: void 0,
    floatingRootContext: Mn(),
    floatingId: void 0,
    triggerCount: 0,
    preventUnmountingOnClose: !1,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    triggerIdProp: void 0,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: u,
    inactiveTriggerProps: u,
    popupProps: u,
  };
}
function Pn(e, t, n = !1) {
  return new _n({
    open: !1,
    transitionStatus: void 0,
    floatingElement: null,
    referenceElement: null,
    triggerElements: e,
    floatingId: t,
    syncOnly: !0,
    nested: n,
    onOpenChange: void 0,
  });
}
var Fn = (e) => e.triggerIdProp ?? e.activeTriggerId,
  In = (e) => e.openProp ?? e.open,
  Ln = (e) => (e.popupElement?.id ?? e.floatingId) || void 0;
function Rn(e, t) {
  return t !== void 0 && In(e) && Fn(e) === t;
}
function zn(e, t) {
  return Rn(e, t)
    ? !0
    : t !== void 0 && In(e) && Fn(e) == null && e.triggerCount === 1;
}
var Bn = {
  open: In,
  mounted: (e) => e.mounted,
  transitionStatus: (e) => e.transitionStatus,
  floatingRootContext: (e) => e.floatingRootContext,
  triggerCount: (e) => e.triggerCount,
  preventUnmountingOnClose: (e) => e.preventUnmountingOnClose,
  payload: (e) => e.payload,
  activeTriggerId: Fn,
  activeTriggerElement: (e) => (e.mounted ? e.activeTriggerElement : null),
  popupId: Ln,
  isTriggerActive: (e, t) => t !== void 0 && Fn(e) === t,
  isOpenedByTrigger: (e, t) => Rn(e, t),
  isMountedByTrigger: (e, t) => t !== void 0 && Fn(e) === t && e.mounted,
  triggerProps: (e, t) => (t ? e.activeTriggerProps : e.inactiveTriggerProps),
  triggerPopupId: (e, t) => (zn(e, t) ? Ln(e) : void 0),
  popupProps: (e) => e.popupProps,
  popupElement: (e) => e.popupElement,
  positionerElement: (e) => e.positionerElement,
};
function Vn(e) {
  return (0, nn.useSyncExternalStore)(
    G.useCallback((t) => (e === void 0 ? v : e.subscribeStore(t)), [e]),
    G.useCallback(() => (e === void 0 ? void 0 : e.store), [e]),
    () => e?.serverStore
  );
}
var Hn = G.forwardRef(function (e, t) {
    let { cutout: n, ...r } = e,
      i;
    if (n) {
      let e = n.getBoundingClientRect();
      i = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`;
    }
    return (0,
    K.jsx)(`div`, { ref: t, role: `presentation`, "data-base-ui-inert": ``, ...r, style: { position: `fixed`, inset: 0, userSelect: `none`, WebkitUserSelect: `none`, clipPath: i } });
  }),
  Un = {},
  Wn = {},
  Gn = ``;
function Kn(e, t) {
  return C(e) ? e : t;
}
function qn(e, t, n) {
  return /hidden|clip/.test(e.getComputedStyle(Kn(t, n)).overflowY);
}
function Jn(e) {
  if (typeof document > `u`) return !1;
  let t = b(e);
  return g(t).innerWidth - t.documentElement.clientWidth > 0;
}
function Yn(e) {
  if (
    !(
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`scrollbar-gutter`, `stable`)
    ) ||
    typeof document > `u`
  )
    return !1;
  let t = b(e),
    n = t.documentElement,
    r = t.body,
    i = Kn(n, r),
    a = i.style.overflowY,
    o = n.style.scrollbarGutter;
  (n.style.scrollbarGutter = `stable`), (i.style.overflowY = `scroll`);
  let s = i.offsetWidth;
  i.style.overflowY = `hidden`;
  let c = i.offsetWidth;
  return (i.style.overflowY = a), (n.style.scrollbarGutter = o), s === c;
}
function Xn(e) {
  let t = b(e),
    n = t.documentElement,
    r = t.body,
    i = Kn(n, r),
    a = { overflowY: i.style.overflowY, overflowX: i.style.overflowX };
  return (
    Object.assign(i.style, { overflowY: `hidden`, overflowX: `hidden` }),
    () => {
      Object.assign(i.style, a);
    }
  );
}
function Zn(e) {
  let t = b(e),
    n = t.documentElement,
    r = t.body,
    i = g(n),
    a = 0,
    o = 0,
    s = !1,
    c = L.create();
  if (de && (i.visualViewport?.scale ?? 1) !== 1) return () => {};
  function l() {
    let t = i.getComputedStyle(n),
      c = i.getComputedStyle(r),
      l = (t.scrollbarGutter || ``).includes(`both-edges`)
        ? `stable both-edges`
        : `stable`;
    (a = n.scrollTop),
      (o = n.scrollLeft),
      (Un = {
        scrollbarGutter: n.style.scrollbarGutter,
        overflowY: n.style.overflowY,
        overflowX: n.style.overflowX,
      }),
      (Gn = n.style.scrollBehavior),
      (Wn = {
        position: r.style.position,
        height: r.style.height,
        width: r.style.width,
        boxSizing: r.style.boxSizing,
        overflowY: r.style.overflowY,
        overflowX: r.style.overflowX,
        scrollBehavior: r.style.scrollBehavior,
      });
    let u = n.scrollHeight > n.clientHeight,
      d = n.scrollWidth > n.clientWidth,
      f = t.overflowY === `scroll` || c.overflowY === `scroll`,
      p = t.overflowX === `scroll` || c.overflowX === `scroll`,
      m = Math.max(0, i.innerWidth - r.clientWidth),
      h = Math.max(0, i.innerHeight - r.clientHeight),
      g = parseFloat(c.marginTop) + parseFloat(c.marginBottom),
      _ = parseFloat(c.marginLeft) + parseFloat(c.marginRight),
      v = Kn(n, r);
    if (((s = Yn(e)), s)) {
      (n.style.scrollbarGutter = l),
        (v.style.overflowY = `hidden`),
        (v.style.overflowX = `hidden`);
      return;
    }
    Object.assign(n.style, {
      scrollbarGutter: l,
      overflowY: `hidden`,
      overflowX: `hidden`,
    }),
      (u || f) && (n.style.overflowY = `scroll`),
      (d || p) && (n.style.overflowX = `scroll`),
      Object.assign(r.style, {
        position: `relative`,
        height: g || h ? `calc(100dvh - ${g + h}px)` : `100dvh`,
        width: _ || m ? `calc(100vw - ${_ + m}px)` : `100vw`,
        boxSizing: `border-box`,
        overflowY: `hidden`,
        overflowX: `hidden`,
        scrollBehavior: `unset`,
      }),
      (r.scrollTop = a),
      (r.scrollLeft = o),
      n.setAttribute(`data-base-ui-scroll-locked`, ``),
      (n.style.scrollBehavior = `unset`);
  }
  function u() {
    Object.assign(n.style, Un),
      Object.assign(r.style, Wn),
      s ||
        ((n.scrollTop = a),
        (n.scrollLeft = o),
        n.removeAttribute(`data-base-ui-scroll-locked`),
        (n.style.scrollBehavior = Gn));
  }
  function d() {
    u(), c.request(l);
  }
  l();
  let f = Z(i, `resize`, d);
  return () => {
    c.cancel(), u(), typeof i.removeEventListener == `function` && f();
  };
}
var Qn = new (class {
  lockCount = 0;
  restore = null;
  timeoutLock = tt.create();
  timeoutUnlock = tt.create();
  acquire(e) {
    return (
      (this.lockCount += 1),
      this.lockCount === 1 &&
        this.restore === null &&
        this.timeoutLock.start(0, () => this.lock(e)),
      this.release
    );
  }
  release = () => {
    --this.lockCount,
      this.lockCount === 0 &&
        this.restore &&
        this.timeoutUnlock.start(0, this.unlock);
  };
  unlock = () => {
    this.lockCount === 0 &&
      this.restore &&
      (this.restore?.(), (this.restore = null));
  };
  lock(e) {
    if (this.lockCount === 0 || this.restore !== null) return;
    let t = b(e),
      n = t.documentElement,
      r = t.body,
      i = g(n);
    if (qn(i, n, r)) {
      let t = new i.MutationObserver(() => {
          qn(i, n, r) || (t.disconnect(), (this.restore = null), this.lock(e));
        }),
        a = { attributes: !0 };
      t.observe(n, a), t.observe(r, a), (this.restore = () => t.disconnect());
      return;
    }
    let a = H || !Jn(e);
    this.restore = a ? Xn(e) : Zn(e);
  }
})();
function $n(e = !0, t = null) {
  s(() => {
    if (e) return Qn.acquire(t);
  }, [e, t]);
}
function er(e) {
  let t = G.useRef(``),
    n = G.useCallback(
      (n) => {
        n.defaultPrevented ||
          ((t.current = n.pointerType), e(n, n.pointerType));
      },
      [e]
    );
  return {
    onClick: G.useCallback(
      (n) => {
        if (n.detail === 0) {
          e(n, `keyboard`);
          return;
        }
        `pointerType` in n ? e(n, n.pointerType) : e(n, t.current),
          (t.current = ``);
      },
      [e]
    ),
    onPointerDown: n,
  };
}
function tr(e, t) {
  let { onClick: n, onPointerDown: r } = er(
    l((n, r) => {
      (typeof e == `function` ? e() : e) || t(r || (H ? `touch` : ``));
    })
  );
  return G.useMemo(() => ({ onClick: n, onPointerDown: r }), [n, r]);
}
export {
  Tt as A,
  $e as B,
  Yt as C,
  Lt as D,
  zt as E,
  Q as F,
  ze as G,
  Xe as H,
  Z as I,
  ge as J,
  Be as K,
  tt as L,
  Et as M,
  st as N,
  Rt as O,
  rt as P,
  nt as R,
  Xt as S,
  Vt as T,
  Fe as U,
  Ze as V,
  Re as W,
  ue as X,
  pe as Y,
  xn as _,
  Nn as a,
  hn as b,
  jn as c,
  Tn as d,
  bn as f,
  kn as g,
  On as h,
  Vn as i,
  wt as j,
  Mt as k,
  yn as l,
  Dn as m,
  $n as n,
  Pn as o,
  wn as p,
  ye as q,
  Hn as r,
  Bn as s,
  tr as t,
  Sn as u,
  An as v,
  Bt as w,
  $t as x,
  En as y,
  Qe as z,
};
