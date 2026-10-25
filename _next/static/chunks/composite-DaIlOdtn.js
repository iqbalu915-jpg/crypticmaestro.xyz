import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, n } from "./framework-D_rUT4EX.js";
import {
  A as r,
  D as i,
  F as a,
  I as o,
  N as s,
  O as c,
  P as ee,
  S as te,
  s as ne,
  v as l,
} from "./utils-CaPlbFnG.js";
var re = `none`,
  ie = `trigger-press`,
  ae = `trigger-hover`,
  oe = `outside-press`,
  se = `close-press`,
  ce = `focus-out`,
  le = `escape-key`,
  ue = `disabled`,
  de = `missing`,
  fe = `initial`,
  pe = `imperative-action`;
function me(e, t, n, r) {
  let i = !1,
    a = !1,
    o = r ?? c;
  return {
    reason: e,
    event: t ?? new Event(`base-ui`),
    cancel() {
      i = !0;
    },
    allowPropagation() {
      a = !0;
    },
    get isCanceled() {
      return i;
    },
    get isPropagationAllowed() {
      return a;
    },
    trigger: n,
    ...o,
  };
}
var u = e(t(), 1),
  d = 0;
function he(e, t = `mui`) {
  let [n, r] = u.useState(e),
    i = e || n;
  return (
    u.useEffect(() => {
      n ?? ((d += 1), r(`${t}-${d}`));
    }, [n, t]),
    i
  );
}
var f = a.useId;
function p(e, t) {
  if (f !== void 0) {
    let n = f();
    return e ?? (t ? `${t}-${n}` : n);
  }
  return he(e, t);
}
function ge(e) {
  return p(e, `base-ui`);
}
function m() {
  return typeof navigator > `u`
    ? { userAgent: ``, platform: ``, maxTouchPoints: 0 }
    : {
        userAgent: navigator.userAgent,
        platform: navigator.platform ?? ``,
        maxTouchPoints: navigator.maxTouchPoints ?? 0,
      };
}
var { userAgent: _e, platform: ve, maxTouchPoints: ye } = m(),
  h = _e.toLowerCase(),
  g = ve.toLowerCase(),
  _ = /^i(os$|p)/.test(g) || (g === `macintel` && ye > 1),
  v = `android`,
  y = g === v || h.includes(v),
  be = !_ && g.startsWith(`mac`);
g.startsWith(`win`), !y && /^(linux|chrome os)/.test(g);
var xe = be || _,
  Se = /jsdom|happydom/.test(h),
  Ce = `data-base-ui-focusable`,
  we = `input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`;
function Te(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; ) t = t.shadowRoot.activeElement;
  return t;
}
function Ee(e, t) {
  if (!e || !t) return !1;
  let n = t.getRootNode?.();
  if (e.contains(t)) return !0;
  if (n && te(n)) {
    let n = t;
    for (; n; ) {
      if (e === n) return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function De(e) {
  return `composedPath` in e ? e.composedPath()[0] : e.target;
}
function Oe(e) {
  e.preventDefault(), e.stopPropagation();
}
function ke(e) {
  return `nativeEvent` in e;
}
function b(e) {
  return e.pointerType === `` && e.isTrusted
    ? !0
    : y && e.pointerType
    ? e.type === `click` && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
function x(e) {
  return Se
    ? !1
    : (!y && e.width === 0 && e.height === 0) ||
        (y &&
          e.width === 1 &&
          e.height === 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === `mouse`) ||
        (e.width < 1 &&
          e.height < 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === `touch`);
}
function S(e, t) {
  let n = [`mouse`, `pen`];
  return t || n.push(``, void 0), n.includes(e);
}
function C(e) {
  let t = e.type;
  return t === `click` || t === `mousedown` || t === `keydown` || t === `keyup`;
}
var w = Math.min,
  T = Math.max,
  Ae = Math.round,
  je = Math.floor,
  Me = (e) => ({ x: e, y: e }),
  Ne = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Pe(e, t, n) {
  return T(e, w(t, n));
}
function Fe(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function E(e) {
  return e.split(`-`)[0];
}
function D(e) {
  return e.split(`-`)[1];
}
function O(e) {
  return e === `x` ? `y` : `x`;
}
function k(e) {
  return e === `y` ? `height` : `width`;
}
function A(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function j(e) {
  return O(A(e));
}
function Ie(e, t, n) {
  n === void 0 && (n = !1);
  let r = D(e),
    i = j(e),
    a = k(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
        ? `bottom`
        : `top`;
  return t.reference[a] > t.floating[a] && (o = I(o)), [o, I(o)];
}
function Le(e) {
  let t = I(e);
  return [M(e), t, M(t)];
}
function M(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var N = [`left`, `right`],
  P = [`right`, `left`],
  Re = [`top`, `bottom`],
  ze = [`bottom`, `top`];
function F(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? P : N) : t ? N : P;
    case `left`:
    case `right`:
      return t ? Re : ze;
    default:
      return [];
  }
}
function Be(e, t, n, r) {
  let i = D(e),
    a = F(E(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(M)))), a
  );
}
function I(e) {
  let t = E(e);
  return Ne[t] + e.slice(t.length);
}
function Ve(e) {
  return {
    top: e.top ?? 0,
    right: e.right ?? 0,
    bottom: e.bottom ?? 0,
    left: e.left ?? 0,
  };
}
function He(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : Ve(e);
}
function Ue(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function We(e, t) {
  return t < 0 || t >= e.length;
}
function Ge(e, t) {
  return L(e.current, { disabledIndices: t });
}
function Ke(e, t) {
  return L(e.current, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: t,
  });
}
function L(
  e,
  {
    startingIndex: t = -1,
    decrement: n = !1,
    disabledIndices: r,
    amount: i = 1,
  } = {}
) {
  let a = t;
  do a += n ? -i : i;
  while (a >= 0 && a <= e.length - 1 && R(e, a, r));
  return a;
}
function R(e, t, n) {
  if (typeof n == `function` ? n(t) : n?.includes(t) ?? !1) return !0;
  let r = e[t];
  return r
    ? !z(r) || r.matches(`:disabled`)
      ? !0
      : !n &&
        (r.hasAttribute(`disabled`) ||
          r.getAttribute(`aria-disabled`) === `true`)
    : !1;
}
function qe(e) {
  return e.visibility === `hidden` || e.visibility === `collapse`;
}
function z(e, t = e ? ne(e) : null) {
  return !e || !e.isConnected || !t || qe(t)
    ? !1
    : typeof e.checkVisibility == `function`
    ? e.checkVisibility()
    : t.display !== `none` && t.display !== `contents`;
}
function Je(e) {
  return r(19) ? e : e ? `true` : void 0;
}
var Ye = (function (e) {
    return (
      (e.startingStyle = `data-starting-style`),
      (e.endingStyle = `data-ending-style`),
      e
    );
  })({}),
  Xe = { "data-starting-style": `` },
  Ze = { "data-ending-style": `` },
  Qe = {
    transitionStatus(e) {
      return e === `starting` ? Xe : e === `ending` ? Ze : null;
    },
  },
  $e = e(n(), 1);
function B(e) {
  u.useEffect(e, i);
}
var V = null;
globalThis.requestAnimationFrame;
var H = new (class {
    callbacks = [];
    callbacksCount = 0;
    nextId = 1;
    startId = 1;
    isScheduled = !1;
    tick = (e) => {
      this.isScheduled = !1;
      let t = this.callbacks,
        n = this.callbacksCount;
      if (
        ((this.callbacks = []),
        (this.callbacksCount = 0),
        (this.startId = this.nextId),
        n > 0)
      )
        for (let n = 0; n < t.length; n += 1) t[n]?.(e);
    };
    request(e) {
      let t = this.nextId;
      return (
        (this.nextId += 1),
        this.callbacks.push(e),
        (this.callbacksCount += 1),
        (this.isScheduled ||= (requestAnimationFrame(this.tick), !0)),
        t
      );
    }
    cancel(e) {
      let t = e - this.startId;
      t < 0 ||
        t >= this.callbacks.length ||
        ((this.callbacks[t] = null), --this.callbacksCount);
    }
  })(),
  U = class e {
    static create() {
      return new e();
    }
    static request(e) {
      return H.request(e);
    }
    static cancel(e) {
      return H.cancel(e);
    }
    currentId = V;
    request(e) {
      this.cancel(),
        (this.currentId = H.request(() => {
          (this.currentId = V), e();
        }));
    }
    cancel = () => {
      this.currentId !== V && (H.cancel(this.currentId), (this.currentId = V));
    };
    disposeEffect = () => this.cancel;
  };
function W() {
  let e = ee(U.create).current;
  return B(e.disposeEffect), e;
}
function G(e) {
  return e == null ? e : `current` in e ? e.current : e;
}
function K(e, t = !1) {
  let n = W();
  return s((r, i = null) => {
    n.cancel();
    let a = G(e);
    if (a == null) return;
    let o = a,
      s = () => {
        $e.flushSync(r);
      };
    if (
      typeof o.getAnimations != `function` ||
      globalThis.BASE_UI_ANIMATIONS_DISABLED
    ) {
      r();
      return;
    }
    function c() {
      Promise.all(o.getAnimations().map((e) => e.finished)).then(
        () => {
          i?.aborted || s();
        },
        () => {
          if (!i?.aborted) {
            if (
              o
                .getAnimations()
                .some((e) => e.pending || e.playState !== `finished`)
            ) {
              c();
              return;
            }
            s();
          }
        }
      );
    }
    if (t) {
      let e = `data-starting-style`;
      if (!o.hasAttribute(e)) {
        n.request(c);
        return;
      }
      let t = new MutationObserver(() => {
        o.hasAttribute(e) || (t.disconnect(), c());
      });
      t.observe(o, { attributes: !0, attributeFilter: [e] }),
        i?.addEventListener(`abort`, () => t.disconnect(), { once: !0 });
      return;
    }
    n.request(c);
  });
}
function et(e) {
  let { enabled: t = !0, open: n, ref: r, onComplete: i } = e,
    a = s(i),
    o = K(r, n);
  u.useEffect(() => {
    if (!t) return;
    let e = new AbortController();
    return (
      o(a, e.signal),
      () => {
        e.abort();
      }
    );
  }, [t, n, a, o]);
}
function tt(e, t = !1, n = !1) {
  let [r, i] = u.useState(e && t ? `idle` : void 0),
    [a, s] = u.useState(e);
  return (
    e && !a && (s(!0), i(`starting`)),
    !e && a && r !== `ending` && !n && i(`ending`),
    !e && !a && r === `ending` && i(void 0),
    o(() => {
      if (!e && a && r !== `ending` && n) {
        let e = U.request(() => {
          i(`ending`);
        });
        return () => {
          U.cancel(e);
        };
      }
    }, [e, a, r, n]),
    o(() => {
      if (!e || t) return;
      let n = U.request(() => {
        i(void 0);
      });
      return () => {
        U.cancel(n);
      };
    }, [t, e]),
    o(() => {
      if (!e || !t) return;
      e && a && r !== `idle` && i(`starting`);
      let n = U.request(() => {
        i(`idle`);
      });
      return () => {
        U.cancel(n);
      };
    }, [t, e, a, r]),
    { mounted: a, setMounted: s, transitionStatus: r }
  );
}
var q = `ArrowUp`,
  J = `ArrowDown`,
  Y = `ArrowLeft`,
  X = `ArrowRight`,
  Z = `Home`,
  nt = new Set([q, J, Y, X, Z, `End`]),
  rt = [`Shift`, `Control`, `Alt`, `Meta`];
function it(e) {
  return l(e) && e.tagName === `INPUT`;
}
function at(e) {
  return !!(
    (it(e) && e.selectionStart != null) ||
    (l(e) && e.tagName === `TEXTAREA`)
  );
}
function ot(e, t, n, r) {
  if (!e || !t || !t.scrollTo) return;
  let i = e.scrollLeft,
    a = e.scrollTop,
    o = e.clientWidth < e.scrollWidth,
    s = e.clientHeight < e.scrollHeight;
  if (o && r !== `vertical`) {
    let r = Q(e, t, `left`),
      a = $(e),
      o = $(t);
    n === `ltr` &&
      (r + t.offsetWidth + o.scrollMarginRight >
      e.scrollLeft + e.clientWidth - a.scrollPaddingRight
        ? (i =
            r +
            t.offsetWidth +
            o.scrollMarginRight -
            e.clientWidth +
            a.scrollPaddingRight)
        : r - o.scrollMarginLeft < e.scrollLeft + a.scrollPaddingLeft &&
          (i = r - o.scrollMarginLeft - a.scrollPaddingLeft)),
      n === `rtl` &&
        (r - o.scrollMarginLeft < e.scrollLeft + a.scrollPaddingLeft
          ? (i = r - o.scrollMarginLeft - a.scrollPaddingLeft)
          : r + t.offsetWidth + o.scrollMarginRight >
              e.scrollLeft + e.clientWidth - a.scrollPaddingRight &&
            (i =
              r +
              t.offsetWidth +
              o.scrollMarginRight -
              e.clientWidth +
              a.scrollPaddingRight));
  }
  if (s && r !== `horizontal`) {
    let n = Q(e, t, `top`),
      r = $(e),
      i = $(t);
    n - i.scrollMarginTop < e.scrollTop + r.scrollPaddingTop
      ? (a = n - i.scrollMarginTop - r.scrollPaddingTop)
      : n + t.offsetHeight + i.scrollMarginBottom >
          e.scrollTop + e.clientHeight - r.scrollPaddingBottom &&
        (a =
          n +
          t.offsetHeight +
          i.scrollMarginBottom -
          e.clientHeight +
          r.scrollPaddingBottom);
  }
  e.scrollTo({ left: i, top: a, behavior: `auto` });
}
function Q(e, t, n) {
  let r = n === `left` ? `offsetLeft` : `offsetTop`,
    i = 0;
  for (; t.offsetParent && ((i += t[r]), t.offsetParent !== e); )
    t = t.offsetParent;
  return i;
}
function $(e) {
  let t = getComputedStyle(e);
  return {
    scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
    scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
    scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
    scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
    scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
    scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
    scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
    scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0,
  };
}
export {
  De as $,
  D as A,
  A as B,
  z as C,
  Me as D,
  Pe as E,
  O as F,
  C as G,
  w as H,
  Be as I,
  b as J,
  S as K,
  I as L,
  Ie as M,
  k as N,
  Fe as O,
  Le as P,
  Ee as Q,
  He as R,
  Ge as S,
  R as T,
  Ue as U,
  T as V,
  Ae as W,
  Oe as X,
  x as Y,
  Te as Z,
  Ye as _,
  ae as _t,
  nt as a,
  ge as at,
  L as b,
  at as c,
  se as ct,
  et as d,
  ce as dt,
  Ce as et,
  K as f,
  pe as ft,
  B as g,
  oe as gt,
  W as h,
  re as ht,
  q as i,
  h as it,
  j,
  je as k,
  ot as l,
  ue as lt,
  U as m,
  de as mt,
  Y as n,
  xe as nt,
  Z as o,
  p as ot,
  G as p,
  fe as pt,
  ke as q,
  X as r,
  _ as rt,
  rt as s,
  me as st,
  J as t,
  we as tt,
  tt as u,
  le as ut,
  Qe as v,
  ie as vt,
  We as w,
  Ke as x,
  Je as y,
  E as z,
};
