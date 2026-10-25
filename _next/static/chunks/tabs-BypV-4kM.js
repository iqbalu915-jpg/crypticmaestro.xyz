import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import {
  D as r,
  E as i,
  I as a,
  M as o,
  N as s,
  O as c,
  P as l,
  a as u,
  i as d,
  j as f,
  o as p,
  r as m,
  t as h,
} from "./utils-CaPlbFnG.js";
import { t as g } from "./useControlled-WSUf9E34.js";
import {
  $ as _,
  Q as v,
  S as y,
  T as b,
  Z as x,
  a as S,
  at as C,
  b as w,
  c as T,
  d as E,
  ht as D,
  i as O,
  l as k,
  lt as A,
  mt as j,
  n as M,
  pt as N,
  r as P,
  s as F,
  st as I,
  t as L,
  u as R,
  v as z,
  w as B,
  x as V,
  y as H,
} from "./composite-DaIlOdtn.js";
import { t as U } from "./DirectionContext-C4QY2bQO.js";
import { t as W } from "./dist-2JElHGhB.js";
var G = e(t(), 1),
  K = G.createContext({
    register: () => {},
    unregister: () => {},
    subscribeMapChange: () => () => {},
    nextIndexRef: { current: 0 },
  });
function q() {
  return G.useContext(K);
}
var J = n();
function ee(e) {
  let { children: t, elementsRef: n, labelsRef: r, onMapChange: i } = e,
    o = s(i),
    [, c] = G.useState(!1),
    u = l(X).current,
    d = l(Y).current,
    f = G.useRef(0),
    p = G.useRef(!0),
    m = G.useRef([]),
    h = G.useRef(null),
    g = s(() => {
      p.current || ((p.current = !0), c((e) => !e));
    }),
    _ = s((e, t) => {
      d.set(e, t), g();
    }),
    v = s((e) => {
      d.delete(e), g();
    }),
    y = s((e) => {
      let t = new Map();
      return (
        (n.current.length = 0),
        r && (r.current.length = 0),
        e.forEach((e) => {
          t.set(e.element, {
            ...(e.registration.metadata ?? {}),
            index: e.index,
          }),
            (n.current[e.index] = e.element),
            r &&
              (r.current[e.index] =
                e.registration.label === void 0
                  ? e.registration.textRef?.current?.textContent ??
                    e.element.textContent
                  : e.registration.label);
        }),
        (f.current = n.current.length),
        t
      );
    });
  function b(e) {
    if (
      (h.current?.disconnect(),
      (h.current = null),
      typeof MutationObserver != `function` || e.length < 2)
    )
      return;
    let t = new MutationObserver((n) => {
      if (!re(n)) return;
      let r = null;
      for (let n of e)
        if (n.isConnected) {
          if (r && ie(r, n) > 0) {
            t.disconnect(), g();
            return;
          }
          r = n;
        }
    });
    h.current = t;
    let n = new Set();
    for (let t = 1; t < e.length; t += 1) {
      let r = ne(e[t - 1], e[t]);
      r && n.add(r);
    }
    n.forEach((e) => t.observe(e, { childList: !0 }));
  }
  let x = s(() => {
    let [e, t] = te(d),
      n = y(e);
    b(t), (m.current = e), (p.current = !1), u.forEach((e) => e(n)), o(n);
  });
  a(
    () => (
      p.current || y(m.current),
      () => {
        (n.current = []), r && (r.current = []);
      }
    ),
    [n, r, y]
  ),
    a(() => {
      p.current && x();
    }),
    a(
      () => () => {
        h.current?.disconnect(), (p.current = !0);
      },
      []
    );
  let S = s(
      (e) => (
        u.add(e),
        () => {
          u.delete(e);
        }
      )
    ),
    C = G.useMemo(
      () => ({
        register: _,
        unregister: v,
        subscribeMapChange: S,
        nextIndexRef: f,
      }),
      [_, v, S, f]
    );
  return (0, J.jsx)(K.Provider, { value: C, children: t });
}
function Y() {
  return new Map();
}
function X() {
  return new Set();
}
function te(e) {
  let t = new Set(),
    n = [],
    r = [];
  e.forEach((e, i) => {
    if (!i.isConnected) return;
    let a = e.index,
      o = { index: a ?? -1, element: i, registration: e };
    a === null ? r.push(o) : a >= 0 && (t.add(a), n.push(o));
  });
  let i = 0;
  return (
    r.sort((e, t) => ie(e.element, t.element)),
    r.forEach((e) => {
      for (; t.has(i); ) i += 1;
      (e.index = i), n.push(e), (i += 1);
    }),
    t.size > 0 && n.sort((e, t) => e.index - t.index),
    [n, r.map((e) => e.element)]
  );
}
function ne(e, t) {
  let n = e.parentElement;
  for (; n && !n.contains(t); ) n = n.parentElement;
  return n;
}
function re(e) {
  for (let t of e)
    for (let e = 0; e < t.removedNodes.length; e += 1)
      if (t.removedNodes[e].isConnected) return !0;
  return !1;
}
function ie(e, t) {
  return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1;
}
var ae = G.createContext(void 0);
function Z() {
  let e = G.useContext(ae);
  if (e === void 0) throw Error(o(64));
  return e;
}
var Q = { tabActivationDirection: (e) => ({ "data-activation-direction": e }) },
  oe = G.forwardRef(function (e, t) {
    let {
        className: n,
        defaultValue: r = 0,
        onValueChange: o,
        orientation: c = `horizontal`,
        render: l,
        value: u,
        style: d,
        ...f
      } = e,
      p = e.defaultValue !== void 0,
      m = G.useRef([]),
      [h, _] = G.useState(() => new Map()),
      [v, y] = g({ controlled: u, default: r, name: `Tabs`, state: `value` }),
      b = u !== void 0,
      [x, S] = G.useState(() => new Map()),
      C = G.useRef(void 0),
      w = G.useCallback((e) => $(x, e), [x]),
      [T, E] = G.useState(() => ({
        previousValue: v,
        tabActivationDirection: `none`,
      })),
      { previousValue: D, tabActivationDirection: O } = T,
      k = O,
      M = !1;
    D !== v &&
      ((k = se(D, v, c, x)), (M = D != null && v != null && w(v) == null));
    let P = M ? D : v,
      F = D !== P || O !== k;
    a(() => {
      F && E({ previousValue: P, tabActivationDirection: k });
    }, [P, F, k]);
    let L = s((e, t) => {
        (t.activationDirection = se(v, e, c, x)),
          o?.(e, t),
          !t.isCanceled && y(e);
      }),
      R = s((e, t) => {
        o?.(e, I(t, void 0, void 0, { activationDirection: `none` }));
      }),
      z = s(
        (e, t) => (
          _((n) => {
            let r = new Map(n);
            return r.set(e, t), r;
          }),
          () => {
            _((n) => {
              if (n.get(e) !== t) return n;
              let r = new Map(n);
              return r.delete(e), r;
            });
          }
        )
      ),
      B = G.useCallback((e) => h.get(e), [h]),
      V = G.useCallback(
        (e) => {
          for (let t of x.values()) if (e === t.value) return t.id;
        },
        [x]
      ),
      H = G.useMemo(
        () => ({
          getTabElementBySelectedValue: w,
          getTabIdByPanelValue: V,
          getTabPanelIdByValue: B,
          onValueChange: L,
          orientation: c,
          registerMountedTabPanel: z,
          setTabMap: S,
          tabActivationDirection: k,
          value: v,
        }),
        [w, V, B, L, c, z, S, k, v]
      ),
      U = G.useMemo(() => {
        for (let e of x.values()) if (e.value === v) return e;
      }, [x, v]),
      W = G.useMemo(() => {
        for (let e of x.values()) if (!e.disabled) return e.value;
      }, [x]),
      K = G.useRef(!p),
      q = G.useRef(r),
      Y = G.useRef(p),
      X = G.useRef(!1);
    a(() => {
      if (b) return;
      function e(e, t) {
        y(e),
          E({ previousValue: e, tabActivationDirection: `none` }),
          R(e, t),
          (K.current = !1);
      }
      if (x.size === 0) {
        X.current && v !== null && !C.current?.isConnected && e(null, j);
        return;
      }
      (X.current = !0), (C.current = x.keys().next().value);
      let t = U?.disabled,
        n = U == null && v !== null;
      if (
        (!t && v === q.current && (Y.current = !1),
        Y.current && t && v === q.current)
      )
        return;
      let r = K.current;
      if (t || n) {
        let n = W ?? null;
        if (v === n) {
          K.current = !1;
          return;
        }
        let i = j;
        r ? (i = N) : t && (i = A), e(n, i);
        return;
      }
      r && U != null && (R(v, N), (K.current = !1));
    }, [W, b, R, U, y, x, v]);
    let te = i(`div`, e, {
      state: { orientation: c, tabActivationDirection: k },
      ref: t,
      props: f,
      stateAttributesMapping: Q,
    });
    return (0,
    J.jsx)(ae.Provider, { value: H, children: (0, J.jsx)(ee, { elementsRef: m, children: te }) });
  });
function $(e, t) {
  for (let [n, r] of e.entries()) if (t === r.value) return n;
  return null;
}
function se(e, t, n, r) {
  if (e == null || t == null) return `none`;
  let [i, a, o] =
      n === `horizontal` ? [`left`, `left`, `right`] : [`top`, `up`, `down`],
    s = $(r, e),
    c = $(r, t);
  if (s == null || c == null)
    return s !== c &&
      (typeof e == `number` || typeof e == `string`) &&
      typeof e == typeof t
      ? t > e
        ? o
        : a
      : `none`;
  let l = s.getBoundingClientRect()[i],
    u = c.getBoundingClientRect()[i];
  return u < l ? a : u > l ? o : `none`;
}
var ce = `data-composite-item-active`;
function le(e = {}) {
  let { guess: t, label: n, metadata: r, textRef: i, index: o } = e,
    {
      register: s,
      unregister: c,
      subscribeMapChange: l,
      nextIndexRef: u,
    } = q(),
    d = G.useRef(-1),
    [f, p] = G.useState(
      o == null && t
        ? () => {
            if (d.current === -1) {
              let e = u.current;
              (u.current += 1), (d.current = e);
            }
            return d.current;
          }
        : -1
    ),
    m = o ?? f,
    h = G.useRef(null),
    g = G.useCallback(
      (e) => {
        let t = h.current;
        t && c(t),
          (h.current = e),
          e &&
            s(e, {
              metadata: r ?? null,
              index: o ?? null,
              label: n,
              textRef: i,
            });
      },
      [o, s, c, r, n, i]
    );
  return (
    a(() => {
      if (o == null)
        return l((e) => {
          let t = h.current ? e.get(h.current)?.index : null;
          t != null && p(t);
        });
    }, [o, l]),
    { ref: g, index: m }
  );
}
function ue(e = {}) {
  let {
      highlightItemOnHover: t,
      highlightedIndex: n,
      onHighlightedIndexChange: r,
    } = u(),
    { ref: i, index: a } = le(e),
    o = n === a,
    s = G.useRef(null),
    c = f(i, s);
  return {
    compositeProps: {
      tabIndex: o ? 0 : -1,
      onFocus() {
        r(a);
      },
      onMouseMove() {
        let e = s.current;
        if (!t || !e) return;
        let n = e.hasAttribute(`disabled`) || e.ariaDisabled === `true`;
        !o && !n && e.focus();
      },
    },
    compositeRef: c,
    index: a,
  };
}
var de = G.createContext(void 0);
function fe() {
  let e = G.useContext(de);
  if (e === void 0) throw Error(o(65));
  return e;
}
var pe = G.forwardRef(function (e, t) {
    let {
        className: n,
        disabled: r = !1,
        render: o,
        value: c,
        id: l,
        nativeButton: d = !0,
        style: f,
        ...h
      } = e,
      {
        value: g,
        getTabPanelIdByValue: _,
        onValueChange: y,
        orientation: b,
        tabActivationDirection: S,
      } = Z(),
      {
        activateOnFocus: w,
        registerTabResizeObserverElement: T,
        tabsListElement: E,
      } = fe(),
      { highlightedIndex: O, onHighlightedIndexChange: k } = u(),
      A = C(l),
      {
        compositeProps: j,
        compositeRef: M,
        index: N,
      } = ue({
        metadata: G.useMemo(
          () => ({ disabled: r, id: A, value: c }),
          [r, A, c]
        ),
      }),
      P = c === g,
      F = G.useRef(!1),
      L = G.useRef(null),
      R = s((e) => {
        L.current?.(), (L.current = e ? T(e) : null);
      });
    a(() => {
      if (F.current) {
        F.current = !1;
        return;
      }
      if (!(P && N > -1 && O !== N)) return;
      let e = E;
      if (e != null) {
        let t = x(p(e));
        if (t && v(e, t)) return;
      }
      r || k(N);
    }, [P, N, O, k, r, E]);
    let { getButtonProps: z, buttonRef: B } = m({
        disabled: r,
        native: d,
        focusableWhenDisabled: !0,
      }),
      V = _(c),
      H = G.useRef(!1),
      U = G.useRef(!1);
    function W(e) {
      y(c, I(D, e.nativeEvent, void 0, { activationDirection: `none` }));
    }
    function K(e) {
      P || r || W(e);
    }
    function q(e) {
      P || r || (w && (!H.current || U.current) && W(e));
    }
    function J(e) {
      if (P || r) return;
      (H.current = !0), (U.current = e.button === 0);
      let t = p(e.currentTarget);
      function n() {
        (H.current = !1),
          (U.current = !1),
          t.removeEventListener(`pointerup`, n),
          t.removeEventListener(`pointercancel`, n);
      }
      t.addEventListener(`pointerup`, n),
        t.addEventListener(`pointercancel`, n);
    }
    return i(`button`, e, {
      state: {
        disabled: r,
        active: P,
        orientation: b,
        tabActivationDirection: S,
      },
      ref: [t, B, M, R],
      props: [
        j,
        {
          role: `tab`,
          "aria-controls": V,
          "aria-selected": P,
          id: A,
          onClick: K,
          onFocus: q,
          onPointerDown: J,
          [ce]: P ? `` : void 0,
          onKeyDownCapture() {
            F.current = !0;
          },
        },
        h,
        z,
      ],
      stateAttributesMapping: Q,
    });
  }),
  me = { ...Q, ...z },
  he = G.forwardRef(function (e, t) {
    let {
        className: n,
        value: r,
        render: o,
        keepMounted: s = !1,
        style: c,
        ...l
      } = e,
      {
        value: u,
        getTabIdByPanelValue: d,
        orientation: f,
        tabActivationDirection: p,
        registerMountedTabPanel: m,
      } = Z(),
      h = C(),
      { ref: g, index: _ } = le(),
      v = r === u,
      { mounted: y, transitionStatus: b, setMounted: x } = R(v),
      S = !y,
      w = d(r),
      T = {
        hidden: S,
        orientation: f,
        tabActivationDirection: p,
        transitionStatus: b,
      },
      D = G.useRef(null),
      O = i(`div`, e, {
        state: T,
        ref: [t, g, D],
        props: [
          {
            "aria-labelledby": w,
            hidden: S,
            id: h,
            role: `tabpanel`,
            tabIndex: v ? 0 : -1,
            inert: H(!v),
            "data-index": _,
          },
          l,
        ],
        stateAttributesMapping: me,
      });
    return (
      E({
        open: v,
        ref: D,
        onComplete() {
          v || x(!1);
        },
      }),
      a(() => {
        if (!(h == null || (S && !s))) return m(r, h);
      }, [S, s, r, h, m]),
      s || y ? O : null
    );
  });
function ge(e) {
  return (
    e == null ||
    e.hasAttribute(`disabled`) ||
    e.getAttribute(`aria-disabled`) === `true`
  );
}
var _e = [];
function ve(e) {
  let {
      loopFocus: t = !0,
      orientation: n = `both`,
      grid: r,
      onLoop: i,
      direction: o,
      highlightedIndex: c,
      onHighlightedIndexChange: l,
      rootRef: u,
      enableHomeAndEndKeys: d = !1,
      stopEventPropagation: p,
      disabledIndices: m,
      modifierKeys: h = _e,
    } = e,
    [g, v] = G.useState(0),
    x = r != null,
    C = G.useRef(null),
    E = f(C, u),
    D = G.useRef([]),
    A = G.useRef(!1),
    j = c ?? g,
    N = s((e, t = !1) => {
      if (((l ?? v)(e), t)) {
        let t = D.current[e];
        k(C.current, t, o, n);
      }
    }),
    F = s((e) => {
      if (e.size === 0 || A.current) return;
      A.current = !0;
      let t = Array.from(e.keys()),
        r =
          t.find((e) => e?.hasAttribute(`data-composite-item-active`)) ?? null,
        i = r ? e.get(r)?.index ?? -1 : -1;
      if (i !== -1) N(i);
      else if (b(t, j, m)) {
        let e = w(t, { disabledIndices: m });
        B(t, e) || N(e);
      }
      k(C.current, r, o, n);
    });
  a(() => {
    if (m == null || c != null || !A.current) return;
    let e = D.current;
    if (b(e, j, m)) {
      let t = w(e, { disabledIndices: m });
      B(e, t) || N(t);
    }
  }, [m, c, j, D, N]);
  let I = s((e, t, n) => (i ? i(e, t, n, D) : n)),
    R = s((e) => {
      let a = e.key === `Home` || e.key === `End`;
      if (!S.has(e.key) || (!d && a) || ye(e, h) || !C.current) return;
      let s = o === `rtl`,
        c = s ? M : P,
        l = s ? P : M,
        u = n === `vertical` ? L : c,
        f = n === `vertical` ? O : l,
        g = _(e.nativeEvent);
      if (g != null && T(g) && !ge(g)) {
        let t = g.selectionStart,
          n = g.selectionEnd,
          r = g.value;
        if (
          t == null ||
          e.shiftKey ||
          t !== n ||
          (e.key !== f && t < r.length) ||
          (e.key !== u && t > 0)
        )
          return;
      }
      let v = j,
        b = y(D, m),
        E = V(D, m);
      r != null &&
        (v = r({
          disabledIndices: m,
          elementsRef: D,
          event: e,
          highlightedIndex: j,
          loopFocus: t,
          maxIndex: E,
          minIndex: b,
          onLoop: I,
          orientation: n,
          rtl: s,
        }));
      let k =
          (n !== `vertical` && e.key === c) ||
          (n !== `horizontal` && e.key === `ArrowDown`),
        A =
          (n !== `vertical` && e.key === l) ||
          (n !== `horizontal` && e.key === `ArrowUp`);
      d && (e.key === `Home` ? (v = b) : e.key === `End` && (v = E)),
        v === j &&
          (k || A) &&
          (t && v === E && k
            ? ((v = b), i && (v = i(e, j, v, D)))
            : t && v === b && A
            ? ((v = E), i && (v = i(e, j, v, D)))
            : (v = w(D.current, {
                startingIndex: v,
                decrement: A,
                disabledIndices: m,
              }))),
        v !== j &&
          !B(D.current, v) &&
          (p && e.stopPropagation(),
          (x || a || k || A) && e.preventDefault(),
          N(v, !0),
          queueMicrotask(() => {
            D.current[v]?.focus();
          }));
    });
  return {
    props: {
      ref: E,
      onFocus(e) {
        let t = C.current,
          n = _(e.nativeEvent);
        !t || n == null || !T(n) || n.setSelectionRange(0, n.value.length);
      },
      onKeyDown: R,
    },
    highlightedIndex: j,
    onHighlightedIndexChange: N,
    elementsRef: D,
    onMapChange: F,
    relayKeyboardEvent: R,
  };
}
function ye(e, t) {
  for (let n of F) if (!t.includes(n) && e.getModifierState(n)) return !0;
  return !1;
}
function be(e) {
  let {
      render: t,
      className: n,
      style: a,
      refs: o = r,
      props: s = r,
      state: l = c,
      stateAttributesMapping: u,
      highlightedIndex: f,
      onHighlightedIndexChange: p,
      orientation: m,
      grid: h,
      loopFocus: g,
      onLoop: _,
      enableHomeAndEndKeys: v,
      onMapChange: y,
      stopEventPropagation: b = !0,
      rootRef: x,
      disabledIndices: S,
      modifierKeys: C,
      highlightItemOnHover: w = !1,
      tag: T = `div`,
      ...E
    } = e,
    {
      props: D,
      highlightedIndex: O,
      onHighlightedIndexChange: k,
      elementsRef: A,
      onMapChange: j,
      relayKeyboardEvent: M,
    } = ve({
      grid: h,
      loopFocus: g,
      onLoop: _,
      orientation: m,
      highlightedIndex: f,
      onHighlightedIndexChange: p,
      rootRef: x,
      stopEventPropagation: b,
      enableHomeAndEndKeys: v,
      direction: U(),
      disabledIndices: S,
      modifierKeys: C,
    }),
    N = i(T, e, {
      state: l,
      ref: o,
      props: [D, ...s, E],
      stateAttributesMapping: u,
    }),
    P = G.useMemo(
      () => ({
        highlightedIndex: O,
        onHighlightedIndexChange: k,
        highlightItemOnHover: w,
        relayKeyboardEvent: M,
      }),
      [O, k, w, M]
    );
  return (0, J.jsx)(d.Provider, {
    value: P,
    children: (0, J.jsx)(ee, {
      elementsRef: A,
      onMapChange: (e) => {
        y?.(e), j(e);
      },
      children: N,
    }),
  });
}
var xe = G.forwardRef(function (e, t) {
  let {
      activateOnFocus: n = !1,
      className: i,
      loopFocus: o = !0,
      render: c,
      style: l,
      ...u
    } = e,
    { orientation: d, setTabMap: f, tabActivationDirection: p } = Z(),
    [m, h] = G.useState(0),
    [g, _] = G.useState(null),
    v = G.useRef(new Set()),
    y = G.useRef(new Set()),
    b = G.useRef(null);
  a(() => {
    if (typeof ResizeObserver > `u`) return;
    let e = new ResizeObserver(() => {
      v.current.forEach((e) => {
        e();
      });
    });
    return (
      (b.current = e),
      g && e.observe(g),
      y.current.forEach((t) => {
        e.observe(t);
      }),
      () => {
        e.disconnect(), (b.current = null);
      }
    );
  }, [g]);
  let x = s(
      (e) => (
        v.current.add(e),
        () => {
          v.current.delete(e);
        }
      )
    ),
    S = s(
      (e) => (
        y.current.add(e),
        b.current?.observe(e),
        () => {
          y.current.delete(e), b.current?.unobserve(e);
        }
      )
    ),
    C = { orientation: d, tabActivationDirection: p },
    w = {
      "aria-orientation": d === `vertical` ? `vertical` : void 0,
      role: `tablist`,
    },
    T = G.useMemo(
      () => ({
        activateOnFocus: n,
        registerIndicatorUpdateListener: x,
        registerTabResizeObserverElement: S,
        tabsListElement: g,
      }),
      [n, x, S, g]
    );
  return (0,
  J.jsx)(de.Provider, { value: T, children: (0, J.jsx)(be, { render: c, className: i, style: l, state: C, refs: [t, _], props: [w, u], stateAttributesMapping: Q, highlightedIndex: m, enableHomeAndEndKeys: !0, loopFocus: o, orientation: d, onHighlightedIndexChange: h, onMapChange: f, disabledIndices: r }) });
});
function Se({ className: e, orientation: t = `horizontal`, ...n }) {
  return (0, J.jsx)(oe, {
    "data-slot": `tabs`,
    "data-orientation": t,
    className: h(`group/tabs flex gap-2 data-horizontal:flex-col`, e),
    ...n,
  });
}
var Ce = W(
  `group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none`,
  {
    variants: {
      variant: { default: `bg-muted`, line: `gap-1 bg-transparent` },
    },
    defaultVariants: { variant: `default` },
  }
);
function we({ className: e, variant: t = `default`, ...n }) {
  return (0, J.jsx)(xe, {
    "data-slot": `tabs-list`,
    "data-variant": t,
    className: h(Ce({ variant: t }), e),
    ...n,
  });
}
function Te({ className: e, ...t }) {
  return (0, J.jsx)(pe, {
    "data-slot": `tabs-trigger`,
    className: h(
      `relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
      `group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent`,
      `data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground`,
      `after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100`,
      e
    ),
    ...t,
  });
}
function Ee({ className: e, ...t }) {
  return (0, J.jsx)(he, {
    "data-slot": `tabs-content`,
    className: h(`flex-1 text-sm outline-none`, e),
    ...t,
  });
}
export { Te as i, Ee as n, we as r, Se as t };
