import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, n, r } from "./framework-D_rUT4EX.js";
import { t as i } from "./index-DrB47sXm.js";
import { t as a } from "./image-CekQzb8N.js";
import {
  C as o,
  E as s,
  I as c,
  L as l,
  M as u,
  N as d,
  O as f,
  P as p,
  T as m,
  _ as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  l as x,
  m as S,
  o as C,
  p as w,
  r as T,
  s as E,
  t as D,
  u as O,
  v as k,
  w as A,
  x as j,
  y as M,
} from "./utils-CaPlbFnG.js";
import { t as N } from "./arrow-up-right-BpVuVI5W.js";
import { t as P } from "./rotate-cw-BkqOar3L.js";
import {
  A as ee,
  B as te,
  C as F,
  D as ne,
  E as re,
  F as I,
  G as ie,
  H as L,
  I as R,
  J as ae,
  K as oe,
  L as se,
  M as ce,
  N as z,
  O as le,
  P as B,
  R as ue,
  S as de,
  T as fe,
  U as pe,
  V as me,
  W as he,
  X as ge,
  Y as _e,
  _ as ve,
  a as ye,
  b as be,
  c as xe,
  d as Se,
  f as Ce,
  g as we,
  h as Te,
  i as Ee,
  j as V,
  k as De,
  l as Oe,
  m as ke,
  n as Ae,
  o as je,
  p as Me,
  q as H,
  r as Ne,
  s as Pe,
  t as Fe,
  u as Ie,
  v as Le,
  w as Re,
  x as ze,
  y as Be,
  z as Ve,
} from "./useOpenInteractionType-BAWykS4S.js";
import {
  $ as He,
  A as Ue,
  B as U,
  D as W,
  E as We,
  F as Ge,
  H as Ke,
  I as qe,
  K as Je,
  L as Ye,
  M as Xe,
  N as Ze,
  O as G,
  P as Qe,
  Q as K,
  R as $e,
  U as et,
  V as q,
  W as tt,
  _t as J,
  a as nt,
  at as rt,
  d as it,
  dt as at,
  f as ot,
  ft as st,
  g as ct,
  j as lt,
  k as ut,
  st as Y,
  y as dt,
  z as X,
} from "./composite-DaIlOdtn.js";
import { t as ft } from "./DirectionContext-C4QY2bQO.js";
import { t as pt } from "./channel-links-Copatm9u.js";
var mt = l(`loader-circle`, [
    [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
  ]),
  ht = l(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]);
function gt(e, t) {
  return t != null && !Je(t) ? 0 : typeof e == `function` ? e() : e;
}
function _t(e, t, n) {
  let r = gt(e, n);
  return typeof r == `number` ? r : r?.[t];
}
function vt(e) {
  return typeof e == `function` ? e() : e;
}
function yt(e, t) {
  return t || e === `click` || e === `mousedown`;
}
function bt(e) {
  return e?.includes(`mouse`) && e !== `mousedown`;
}
function xt(e, t, n) {
  let { reference: r, floating: i } = e,
    a = U(t),
    o = lt(t),
    s = Ze(o),
    c = X(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  let m = Ue(t);
  return m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function St(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = G(t, e),
    p = $e(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = et(
      await i.getClippingRect({
        element:
          (await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      })
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = et(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var Ct = 50,
  wt = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: St },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = xt(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      (u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < Ct &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = xt(l, f, c))),
          (n = -1));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  Tt = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = G(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = X(r),
            _ = U(o),
            v = X(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [Ye(o)] : Qe(o)),
            x = p !== `none`;
          !d && x && b.push(...qe(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = Xe(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== U(t)) ||
                T.every((e) =>
                  U(e.placement) === _ ? e.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1]
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = U(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
                  break;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  },
  Et = new Set([`left`, `top`]);
async function Dt(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = X(n),
    s = Ue(n),
    c = U(n) === `y`,
    l = Et.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = G(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var Ot = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await Dt(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  kt = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = G(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = U(i),
            p = Ge(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              We(
                t + d[e === `y` ? `top` : `left`],
                t,
                t - d[e === `y` ? `bottom` : `right`]
              );
          o && (m = g(p, m)), s && (h = g(f, h));
          let _ = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ..._,
            data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  },
  At = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = G(e, t),
            u = { x: n, y: r },
            d = U(i),
            f = Ge(d),
            p = u[f],
            m = u[d],
            h = G(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: h.mainAxis ?? 0, crossAxis: h.crossAxis ?? 0 };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = Et.has(X(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  jt = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: i, elements: a } = t,
            { apply: o = () => {}, ...s } = G(e, t),
            c = await i.detectOverflow(t, s),
            l = X(n),
            u = Ue(n),
            d = U(n) === `y`,
            { width: f, height: p } = r.floating,
            m,
            h;
          l === `top` || l === `bottom`
            ? ((m = l),
              (h =
                u ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((h = l), (m = u === `end` ? `top` : `bottom`));
          let g = p - c.top - c.bottom,
            _ = f - c.left - c.right,
            v = Ke(p - c[m], g),
            y = Ke(f - c[h], _),
            b = t.middlewareData.shift,
            x = !b,
            S = v,
            C = y;
          b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x &&
              !u &&
              (d
                ? (C = f - 2 * q(c.left, c.right))
                : (S = p - 2 * q(c.top, c.bottom))),
            await o({ ...t, availableWidth: C, availableHeight: S });
          let w = await i.getDimensions(a.floating);
          return f !== w.width || p !== w.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Mt(e) {
  let t = E(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = k(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = tt(n) !== a || tt(r) !== o;
  return s && ((n = a), (r = o)), { width: n, height: r, $: s };
}
function Nt(e) {
  return h(e) ? e : e.contextElement;
}
function Pt(e) {
  let t = Nt(e);
  if (!k(t)) return W(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Mt(t),
    o = (a ? tt(n.width) : n.width) / r,
    s = (a ? tt(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var Ft = W(0);
function It(e) {
  let t = b(e);
  return !m() || !t.visualViewport
    ? Ft
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Lt(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === b(e);
}
function Rt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  let i = e.getBoundingClientRect(),
    a = Nt(e),
    o = W(1);
  t && (r ? h(r) && (o = Pt(r)) : (o = Pt(e)));
  let s = Lt(a, n, r) ? It(a) : W(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = b(a),
      t = h(r) ? b(r) : r,
      n = e,
      i = O(n);
    for (; i && t !== n; ) {
      let e = Pt(i),
        t = i.getBoundingClientRect(),
        r = E(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      (c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = b(i)),
        (i = O(n));
    }
  }
  return et({ width: u, height: d, x: c, y: l });
}
function zt(e, t) {
  let n = v(e).scrollLeft;
  return t ? t.left + n : Rt(x(e)).left + n;
}
function Bt(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - zt(e, n), y: n.top + t.scrollTop };
}
function Vt(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = x(r),
    s = t ? A(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = W(1),
    u = W(0),
    d = k(r);
  if ((d || !a) && ((_(r) !== `body` || j(o)) && (c = v(r)), d)) {
    let e = Rt(r);
    (l = Pt(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
  }
  let f = o && !d && !a ? Bt(o, c) : W(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function Ht(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Ut(e) {
  let t = v(e),
    n = e.ownerDocument.body,
    r = q(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = q(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + zt(e),
    o = -t.scrollTop;
  return (
    E(n).direction === `rtl` && (a += q(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var Wt = 25;
function Gt(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = b(e),
    a = x(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    let e = !m() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)));
  }
  if (zt(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o =
        getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
    o <= Wt && (s -= o);
  }
  return { width: s, height: c, x: l, y: u };
}
function Kt(e, t) {
  let n = Rt(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Pt(e);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function qt(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = Gt(e, n, t);
  else if (t === `document`) r = Ut(x(e));
  else if (h(t)) r = Kt(t, n);
  else {
    let n = It(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return et(r);
}
function Jt(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = w(e, [], !1).filter((e) => h(e) && _(e) !== `body`),
    i = null,
    a = E(e).position === `fixed`,
    o = a ? S(e) : e;
  for (; h(o) && !M(o); ) {
    let e = E(o),
      t = y(o),
      n = i ? i.position : a ? `fixed` : ``;
    !t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = S(o));
  }
  return t.set(e, r), r;
}
function Yt(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? A(t)
          ? []
          : Jt(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = qt(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = qt(t, a[e], i);
    (s = q(n.top, s)),
      (c = Ke(n.right, c)),
      (l = Ke(n.bottom, l)),
      (u = q(n.left, u));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function Xt(e) {
  let { width: t, height: n } = Mt(e);
  return { width: t, height: n };
}
function Zt(e, t, n) {
  let r = k(t),
    i = x(t),
    a = n === `fixed`,
    o = Rt(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = W(0);
  if ((r || !a) && ((_(t) !== `body` || j(i)) && (s = v(t)), r)) {
    let e = Rt(t, !0, a, t);
    (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
  }
  !r && i && (c.x = zt(i));
  let l = i && !r && !a ? Bt(i, s) : W(0);
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  };
}
function Qt(e) {
  return E(e).position === `static`;
}
function $t(e, t) {
  if (!k(e) || E(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return x(e) === n && (n = n.ownerDocument.body), n;
}
function en(e, t) {
  let n = b(e);
  if (A(e)) return n;
  if (!k(e)) {
    let t = S(e);
    for (; t && !M(t); ) {
      if (h(t) && !Qt(t)) return t;
      t = S(t);
    }
    return n;
  }
  let r = $t(e, t);
  for (; r && o(r) && Qt(r); ) r = $t(r, t);
  return r && M(r) && Qt(r) && !y(r) ? n : r || g(e) || n;
}
var tn = async function (e) {
  let t = this.getOffsetParent || en,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Zt(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function nn(e) {
  return E(e).direction === `rtl`;
}
var rn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vt,
  getDocumentElement: x,
  getClippingRect: Yt,
  getOffsetParent: en,
  getElementRects: tn,
  getClientRects: Ht,
  getDimensions: Xt,
  getScale: Pt,
  isElement: h,
  isRTL: nn,
};
function an(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function on(e, t, n) {
  let r = null,
    i,
    a = x(e);
  function o() {
    var e;
    clearTimeout(i), (e = r) == null || e.disconnect(), (r = null);
  }
  function s(n, c) {
    n === void 0 && (n = !1), c === void 0 && (c = 1), o();
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((n || t(), !f || !p)) return;
    let m = ut(d),
      h = ut(a.clientWidth - (u + f)),
      g = ut(a.clientHeight - (d + p)),
      _ = ut(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: q(0, Ke(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!an(l, e.getBoundingClientRect())) return s();
      if (n !== c) {
        if (!y) return s();
        n
          ? s(!1, n)
          : (i = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, v);
    }
    r.observe(e);
  }
  let c = b(e),
    l = () => s(n);
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      c.removeEventListener(`resize`, l), o();
    }
  );
}
function sn(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = Nt(e),
    u = i || a ? [...(l ? w(l) : []), ...(t ? w(t) : [])] : [];
  u.forEach((e) => {
    i && e.addEventListener(`scroll`, n), a && e.addEventListener(`resize`, n);
  });
  let d = l && s ? on(l, n, a) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n();
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? Rt(e) : null;
  c && g();
  function g() {
    let t = Rt(e);
    h && !an(h, t) && n(), (h = t), (m = requestAnimationFrame(g));
  }
  return (
    n(),
    () => {
      var e;
      u.forEach((e) => {
        i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n);
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m);
    }
  );
}
var cn = Ot,
  ln = kt,
  un = Tt,
  dn = jt,
  fn = At,
  pn = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...rn, ...i.platform, _c: r };
    return wt(e, t, { ...i, platform: a });
  },
  Z = e(t(), 1),
  mn = e(n(), 1),
  hn = typeof document < `u` ? Z.useLayoutEffect : function () {};
function gn(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!gn(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !gn(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _n(e) {
  return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vn(e, t) {
  let n = _n(e);
  return Math.round(t * n) / n;
}
function yn(e) {
  let t = Z.useRef(e);
  return (
    hn(() => {
      t.current = e;
    }),
    t
  );
}
function bn(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = Z.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = Z.useState(r);
  gn(f, r) || p(r);
  let [m, h] = Z.useState(null),
    [g, _] = Z.useState(null),
    v = Z.useCallback((e) => {
      e !== S.current && ((S.current = e), h(e));
    }, []),
    y = Z.useCallback((e) => {
      e !== C.current && ((C.current = e), _(e));
    }, []),
    b = a || m,
    x = o || g,
    S = Z.useRef(null),
    C = Z.useRef(null),
    w = Z.useRef(u),
    T = c != null,
    E = yn(c),
    D = yn(i),
    O = yn(l),
    k = Z.useCallback(() => {
      if (!S.current || !C.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      D.current && (e.platform = D.current),
        pn(S.current, C.current, e).then((e) => {
          let t = { ...e, isPositioned: O.current !== !1 };
          A.current &&
            !gn(w.current, t) &&
            ((w.current = t),
            mn.flushSync(() => {
              d(t);
            }));
        });
    }, [f, t, n, D, O]);
  hn(() => {
    l === !1 &&
      w.current.isPositioned &&
      ((w.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let A = Z.useRef(!1);
  hn(
    () => (
      (A.current = !0),
      () => {
        A.current = !1;
      }
    ),
    []
  ),
    hn(() => {
      if ((b && (S.current = b), x && (C.current = x), b && x)) {
        if (E.current) return E.current(b, x, k);
        k();
      }
    }, [b, x, k, E, T]);
  let j = Z.useMemo(
      () => ({ reference: S, floating: C, setReference: v, setFloating: y }),
      [v, y]
    ),
    M = Z.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    N = Z.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!M.floating) return e;
      let t = vn(M.floating, u.x),
        r = vn(M.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(_n(M.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, M.floating, u.x, u.y]);
  return Z.useMemo(
    () => ({ ...u, update: k, refs: j, elements: M, floatingStyles: N }),
    [u, k, j, M, N]
  );
}
var xn = (e, t) => {
    let n = cn(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Sn = (e, t) => {
    let n = ln(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Cn = (e, t) => ({ fn: fn(e).fn, options: [e, t] }),
  wn = (e, t) => {
    let n = un(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Tn = (e, t) => {
    let n = dn(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  };
function En(e) {
  return Dn(e, e.rootContext);
}
function Dn(e, t) {
  let { nodeId: n, externalTree: r } = e,
    i = t.useState(`referenceElement`),
    a = t.useState(`floatingElement`),
    o = t.useState(`domReferenceElement`),
    s = t.useState(`open`),
    l = t.useState(`floatingId`),
    [u, d] = Z.useState(null),
    [f, p] = Z.useState(void 0),
    [m, g] = Z.useState(void 0),
    _ = Z.useRef(null),
    v = le(r),
    y = Z.useMemo(
      () => ({ reference: i, floating: a, domReference: o }),
      [i, a, o]
    ),
    b = bn({ ...e, elements: { ...y, ...(u && { reference: u }) } }),
    x = h(f) ? f : null,
    S = m === void 0 ? t.state.floatingElement : m;
  t.useSyncedValue(`referenceElement`, f ?? null),
    t.useSyncedValue(`domReferenceElement`, f === void 0 ? o : x),
    t.useSyncedValue(`floatingElement`, S);
  let C = Z.useCallback(
      (e) => {
        let t = h(e)
          ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e,
            }
          : e;
        d(t), b.refs.setReference(t);
      },
      [b.refs]
    ),
    w = Z.useCallback(
      (e) => {
        (h(e) || e === null) && ((_.current = e), p(e)),
          (h(b.refs.reference.current) ||
            b.refs.reference.current === null ||
            (e !== null && !h(e))) &&
            b.refs.setReference(e);
      },
      [b.refs, p]
    ),
    T = Z.useCallback(
      (e) => {
        g(e), b.refs.setFloating(e);
      },
      [b.refs]
    ),
    E = Z.useMemo(
      () => ({
        ...b.refs,
        setReference: w,
        setFloating: T,
        setPositionReference: C,
        domReference: _,
      }),
      [b.refs, w, T, C]
    ),
    D = Z.useMemo(() => ({ ...b.elements, domReference: o }), [b.elements, o]),
    O = Z.useMemo(
      () => ({
        ...b,
        dataRef: t.context.dataRef,
        open: s,
        onOpenChange: t.setOpen,
        events: t.context.events,
        floatingId: l,
        refs: E,
        elements: D,
        nodeId: n,
        rootStore: t,
      }),
      [b, E, D, n, t, s, l]
    );
  return (
    c(() => {
      o && (_.current = o);
    }, [o]),
    c(() => {
      t.context.dataRef.current.floatingContext = O;
      let e = v?.nodesRef.current.find((e) => e.id === n);
      e && (e.context = O);
    }),
    Z.useMemo(
      () => ({ ...b, context: O, refs: E, elements: D, rootStore: t }),
      [b, E, D, O, t]
    )
  );
}
var On = class e {
    constructor() {
      (this.pointerType = void 0),
        (this.interactedInside = !1),
        (this.handler = void 0),
        (this.blockMouseMove = !0),
        (this.performedPointerEventsMutation = !1),
        (this.pointerEventsScopeElement = null),
        (this.pointerEventsReferenceElement = null),
        (this.pointerEventsFloatingElement = null),
        (this.restTimeoutPending = !1),
        (this.openChangeTimeout = new se()),
        (this.restTimeout = new se()),
        (this.handleCloseOptions = void 0);
    }
    static create() {
      return new e();
    }
    dispose = () => {
      this.openChangeTimeout.clear(), this.restTimeout.clear();
    };
    disposeEffect = () => this.dispose;
  },
  kn = new WeakMap();
function An(e) {
  if (!e.performedPointerEventsMutation) return;
  let t = e.pointerEventsScopeElement;
  t &&
    kn.get(t) === e &&
    (e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),
    e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),
    e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),
    kn.delete(t)),
    (e.performedPointerEventsMutation = !1),
    (e.pointerEventsScopeElement = null),
    (e.pointerEventsReferenceElement = null),
    (e.pointerEventsFloatingElement = null);
}
function jn(e, t) {
  let { scopeElement: n, referenceElement: r, floatingElement: i } = t,
    a = kn.get(n);
  a && a !== e && An(a),
    An(e),
    (e.performedPointerEventsMutation = !0),
    (e.pointerEventsScopeElement = n),
    (e.pointerEventsReferenceElement = r),
    (e.pointerEventsFloatingElement = i),
    kn.set(n, e),
    (n.style.pointerEvents = `none`),
    (r.style.pointerEvents = `auto`),
    (i.style.pointerEvents = `auto`);
}
function Mn(e) {
  let t = e.context.dataRef.current,
    n = p(() => t.hoverInteractionState ?? On.create()).current;
  return (
    (t.hoverInteractionState ||= n),
    ct(t.hoverInteractionState.disposeEffect),
    t.hoverInteractionState
  );
}
function Nn(e, t = {}) {
  let { enabled: n = !0, closeDelay: r = 0, nodeId: i } = t,
    a = `rootStore` in e ? e.rootStore : e,
    o = a.useState(`open`),
    s = a.useState(`floatingElement`),
    l = a.useState(`domReferenceElement`),
    { dataRef: u } = a.context,
    f = le(),
    p = ne(),
    m = Mn(a),
    g = ue(),
    _ = d(() => yt(u.current.openEvent?.type, m.interactedInside)),
    v = d(() => bt(u.current.openEvent?.type)),
    y = d(() => {
      An(m);
    });
  c(() => {
    o ||
      ((m.pointerType = void 0),
      (m.restTimeoutPending = !1),
      (m.interactedInside = !1),
      y());
  }, [o, m, y]),
    Z.useEffect(() => y, [y]),
    c(() => {
      if (
        n &&
        o &&
        m.handleCloseOptions?.blockPointerEvents &&
        v() &&
        h(l) &&
        s
      ) {
        let e = l,
          t = s,
          n = C(s),
          r = f?.nodesRef.current.find((e) => e.id === p)?.context?.elements
            .floating;
        r && (r.style.pointerEvents = ``);
        let i =
            m.pointerEventsScopeElement === t
              ? null
              : m.pointerEventsScopeElement,
          a = r === t ? null : r;
        return (
          jn(m, {
            scopeElement:
              m.handleCloseOptions?.getScope?.() ??
              i ??
              a ??
              e.closest(`[data-rootownerid]`) ??
              n.body,
            referenceElement: e,
            floatingElement: t,
          }),
          () => {
            y();
          }
        );
      }
    }, [n, o, l, s, m, v, f, p, y]),
    Z.useEffect(() => {
      if (!n) return;
      function e() {
        return !!(f && p && H(f.nodesRef.current, p).length > 0);
      }
      function t(e) {
        let t = _t(r, `close`, m.pointerType),
          n = () => {
            a.setOpen(!1, Y(J, e)), f?.events.emit(`floating.closed`, e);
          };
        t
          ? m.openChangeTimeout.start(t, n)
          : (m.openChangeTimeout.clear(), n());
      }
      function o(e) {
        let t = He(e);
        if (!ae(t)) {
          m.interactedInside = !1;
          return;
        }
        m.interactedInside = t?.closest(`[aria-haspopup]`) != null;
      }
      function c() {
        m.openChangeTimeout.clear(),
          g.clear(),
          f?.events.off(`floating.closed`, d),
          y();
      }
      function l(n) {
        if (e() && f) {
          f.events.on(`floating.closed`, d);
          return;
        }
        if (_e(n.relatedTarget, a.context.triggerElements)) return;
        let r = u.current.floatingContext?.nodeId ?? i,
          o = n.relatedTarget;
        if (
          !(
            f &&
            r &&
            h(o) &&
            H(f.nodesRef.current, r, !1).some((e) =>
              K(e.context?.elements.floating, o)
            )
          )
        ) {
          if (m.handler) {
            m.handler(n);
            return;
          }
          y(), v() && !_() && t(n);
        }
      }
      function d(t) {
        !f ||
          !p ||
          e() ||
          g.start(0, () => {
            f.events.off(`floating.closed`, d),
              a.setOpen(!1, Y(J, t)),
              f.events.emit(`floating.closed`, t);
          });
      }
      let b = s;
      return I(
        b && R(b, `mouseenter`, c),
        b && R(b, `mouseleave`, l),
        b && R(b, `pointerdown`, o, !0),
        () => {
          f?.events.off(`floating.closed`, d);
        }
      );
    }, [n, s, a, u, r, i, v, _, y, m, f, p, g]);
}
var Pn = { current: null };
function Fn(e, t = {}) {
  let {
      enabled: n = !0,
      delay: r = 0,
      handleClose: i = null,
      mouseOnly: a = !1,
      restMs: o = 0,
      move: s = !0,
      triggerElementRef: c = Pn,
      externalTree: l,
      isActiveTrigger: u = !0,
      getHandleCloseContext: f,
      isClosing: p,
      shouldOpen: m,
      guardStaleOpen: g = !1,
    } = t,
    _ = `rootStore` in e ? e.rootStore : e,
    { dataRef: v, events: y } = _.context,
    b = le(l),
    x = Mn(_),
    S = Z.useRef(!1),
    w = B(i),
    T = B(r),
    E = B(o),
    D = B(n),
    O = B(m),
    k = B(p),
    A = d(() => yt(v.current.openEvent?.type, x.interactedInside)),
    j = d(() => O.current?.() !== !1),
    M = d((e, t, n) => {
      let r = _.context.triggerElements;
      if (r.hasElement(t)) return !e || !K(e, t);
      if (!h(n)) return !1;
      let i = n;
      return r.hasMatchingElement((e) => K(e, i)) && (!e || !K(e, i));
    }),
    N = d(() => {
      x.handler &&=
        (C(_.select(`domReferenceElement`)).removeEventListener(
          `mousemove`,
          x.handler
        ),
        void 0);
    }),
    P = d(() => {
      An(x);
    });
  return (
    u && (x.handleCloseOptions = w.current?.__options),
    Z.useEffect(() => N, [N]),
    Z.useEffect(() => {
      if (!n) return;
      function e(e) {
        e.open
          ? (S.current = !1)
          : ((S.current = e.reason === J),
            N(),
            x.openChangeTimeout.clear(),
            x.restTimeout.clear(),
            (x.blockMouseMove = !0),
            (x.restTimeoutPending = !1));
      }
      return (
        y.on(`openchange`, e),
        () => {
          y.off(`openchange`, e);
        }
      );
    }, [n, y, x, N]),
    Z.useEffect(() => {
      if (!n) return;
      function e(e, t = !0) {
        let n = _t(T.current, `close`, x.pointerType);
        n
          ? x.openChangeTimeout.start(n, () => {
              _.setOpen(!1, Y(J, e)), b?.events.emit(`floating.closed`, e);
            })
          : t &&
            (x.openChangeTimeout.clear(),
            _.setOpen(!1, Y(J, e)),
            b?.events.emit(`floating.closed`, e));
      }
      let t = c.current ?? (u ? _.select(`domReferenceElement`) : null);
      if (!h(t)) return;
      function r(e) {
        if (
          (x.openChangeTimeout.clear(),
          (x.blockMouseMove = !1),
          a && !Je(x.pointerType))
        )
          return;
        let t = vt(E.current),
          n = _t(T.current, `open`, x.pointerType),
          r = He(e),
          i = e.currentTarget ?? null,
          o = _.select(`domReferenceElement`),
          s = i;
        if (h(r) && !_.context.triggerElements.hasElement(r)) {
          for (let e of _.context.triggerElements.elements())
            if (K(e, r)) {
              s = e;
              break;
            }
        }
        h(i) &&
          h(o) &&
          !_.context.triggerElements.hasElement(i) &&
          K(i, o) &&
          (s = o);
        let c = s == null ? !1 : M(o, s, r),
          l = _.select(`open`),
          u = k.current?.() ?? _.select(`transitionStatus`) === `ending`,
          d = !l && u && S.current,
          f = !c && h(s) && h(o) && K(o, s) && d,
          p = t > 0 && !n,
          m = (c && (l || d)) || f,
          g = !l || c;
        if (m) {
          j() && _.setOpen(!0, Y(J, e, s));
          return;
        }
        p ||
          (n
            ? x.openChangeTimeout.start(n, () => {
                g && j() && _.setOpen(!0, Y(J, e, s));
              })
            : g && j() && _.setOpen(!0, Y(J, e, s)));
      }
      function i(t) {
        if (A()) {
          P();
          return;
        }
        N();
        let n = C(_.select(`domReferenceElement`));
        x.restTimeout.clear(), (x.restTimeoutPending = !1);
        let r = v.current.floatingContext ?? f?.();
        if (!_e(t.relatedTarget, _.context.triggerElements)) {
          if (w.current && r) {
            _.select(`open`) || x.openChangeTimeout.clear();
            let i = c.current;
            (x.handler = w.current({
              ...r,
              tree: b,
              x: t.clientX,
              y: t.clientY,
              onClose() {
                P(),
                  N(),
                  D.current &&
                    !A() &&
                    i === _.select(`domReferenceElement`) &&
                    e(t, !0);
              },
            })),
              n.addEventListener(`mousemove`, x.handler),
              x.handler(t);
            return;
          }
          (x.pointerType !== `touch` ||
            !K(_.select(`floatingElement`), t.relatedTarget)) &&
            e(t);
        }
      }
      function o(e) {
        K(t, e.relatedTarget) ||
          (x.openChangeTimeout.clear(),
          x.restTimeout.clear(),
          (x.restTimeoutPending = !1));
      }
      let l = g ? R(t, `mouseout`, o) : void 0;
      return s
        ? I(
            R(t, `mousemove`, r, { once: !0 }),
            R(t, `mouseenter`, r),
            R(t, `mouseleave`, i),
            l
          )
        : I(R(t, `mouseenter`, r), R(t, `mouseleave`, i), l);
    }, [N, P, v, T, _, n, w, x, u, M, A, a, s, E, c, b, D, f, k, j, g]),
    Z.useMemo(() => {
      if (!n) return;
      function e(e) {
        x.pointerType = e.pointerType;
      }
      return {
        onPointerDown: e,
        onPointerEnter: e,
        onMouseMove(e) {
          let { nativeEvent: t } = e,
            n = e.currentTarget,
            r = _.select(`domReferenceElement`),
            i = _.select(`open`),
            o = M(r, n, e.target);
          if (a && !Je(x.pointerType)) return;
          if (i && o && x.handleCloseOptions?.blockPointerEvents) {
            let e = _.select(`floatingElement`);
            e &&
              jn(x, {
                scopeElement:
                  x.handleCloseOptions?.getScope?.() ?? n.ownerDocument.body,
                referenceElement: n,
                floatingElement: e,
              });
          }
          let s = vt(E.current);
          if (
            (i && !o) ||
            s === 0 ||
            (!o &&
              x.restTimeoutPending &&
              e.movementX ** 2 + e.movementY ** 2 < 2)
          )
            return;
          x.restTimeout.clear();
          function c() {
            if (((x.restTimeoutPending = !1), A())) return;
            let e = _.select(`open`);
            !x.blockMouseMove && (!e || o) && j() && _.setOpen(!0, Y(J, t, n));
          }
          x.pointerType === `touch`
            ? mn.flushSync(() => {
                c();
              })
            : o && i
            ? c()
            : ((x.restTimeoutPending = !0), x.restTimeout.start(s, c));
        },
      };
    }, [n, x, A, M, a, _, E, j])
  );
}
var In = 0.1,
  Ln = In * In,
  Q = 0.5;
function Rn(e, t, n, r, i, a) {
  return r >= t != a >= t && e <= ((i - n) * (t - r)) / (a - r) + n;
}
function zn(e, t, n, r, i, a, o, s, c, l) {
  let u = !1;
  return (
    Rn(e, t, n, r, i, a) && (u = !u),
    Rn(e, t, i, a, o, s) && (u = !u),
    Rn(e, t, o, s, c, l) && (u = !u),
    Rn(e, t, c, l, n, r) && (u = !u),
    u
  );
}
function Bn(e, t, n) {
  return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height;
}
function Vn(e, t, n, r, i, a) {
  return (
    e >= Math.min(n, i) &&
    e <= Math.max(n, i) &&
    t >= Math.min(r, a) &&
    t <= Math.max(r, a)
  );
}
function Hn(e = {}) {
  let { blockPointerEvents: t = !1 } = e,
    n = new se(),
    r = ({
      x: e,
      y: t,
      placement: r,
      elements: i,
      onClose: a,
      nodeId: o,
      tree: s,
    }) => {
      let c = r?.split(`-`)[0],
        l = !1,
        u = null,
        d = null,
        f = typeof performance < `u` ? performance.now() : 0;
      function p(e, t) {
        let n = performance.now(),
          r = n - f;
        if (u === null || d === null || r === 0)
          return (u = e), (d = t), (f = n), !1;
        let i = e - u,
          a = t - d,
          o = i * i + a * a,
          s = r * r * Ln;
        return (u = e), (d = t), (f = n), o < s;
      }
      function m() {
        n.clear(), a();
      }
      return function (r) {
        n.clear();
        let a = i.domReference,
          u = i.floating;
        if (!a || !u || c == null || e == null || t == null) return;
        let { clientX: d, clientY: f } = r,
          g = He(r),
          _ = r.type === `mouseleave`,
          v = K(u, g),
          y = K(a, g);
        if (v && ((l = !0), !_)) return;
        if (y && ((l = !1), !_)) {
          l = !0;
          return;
        }
        if (_ && h(r.relatedTarget) && K(u, r.relatedTarget)) return;
        function b() {
          return !!(s && H(s.nodesRef.current, o).length > 0);
        }
        function x() {
          b() || m();
        }
        if (b()) return;
        let S = a.getBoundingClientRect(),
          C = u.getBoundingClientRect(),
          w = e > C.right - C.width / 2,
          T = t > C.bottom - C.height / 2,
          E = C.width > S.width,
          D = C.height > S.height,
          O = (E ? S : C).left,
          k = (E ? S : C).right,
          A = (D ? S : C).top,
          j = (D ? S : C).bottom;
        if (
          (c === `top` && t >= S.bottom - 1) ||
          (c === `bottom` && t <= S.top + 1) ||
          (c === `left` && e >= S.right - 1) ||
          (c === `right` && e <= S.left + 1)
        ) {
          x();
          return;
        }
        let M = !1;
        switch (c) {
          case `top`:
            M = Vn(d, f, O, S.top + 1, k, C.bottom - 1);
            break;
          case `bottom`:
            M = Vn(d, f, O, C.top + 1, k, S.bottom - 1);
            break;
          case `left`:
            M = Vn(d, f, C.right - 1, j, S.left + 1, A);
            break;
          case `right`:
            M = Vn(d, f, S.right - 1, j, C.left + 1, A);
            break;
          default:
        }
        if (M) return;
        if (l && !Bn(d, f, S)) {
          x();
          return;
        }
        if (!_ && p(d, f)) {
          x();
          return;
        }
        let N = !1;
        switch (c) {
          case `top`: {
            let n = E ? Q / 2 : Q * 4,
              r = E || w ? e + n : e - n,
              i = E ? e - n : w ? e + n : e - n,
              a = t + Q + 1,
              o = w || E ? C.bottom - Q : C.top,
              s = w ? (E ? C.bottom - Q : C.top) : C.bottom - Q;
            N = zn(d, f, r, a, i, a, C.left, o, C.right, s);
            break;
          }
          case `bottom`: {
            let n = E ? Q / 2 : Q * 4,
              r = E || w ? e + n : e - n,
              i = E ? e - n : w ? e + n : e - n,
              a = t - Q,
              o = w || E ? C.top + Q : C.bottom,
              s = w ? (E ? C.top + Q : C.bottom) : C.top + Q;
            N = zn(d, f, r, a, i, a, C.left, o, C.right, s);
            break;
          }
          case `left`: {
            let n = D ? Q / 2 : Q * 4,
              r = D || T ? t + n : t - n,
              i = D ? t - n : T ? t + n : t - n,
              a = e + Q + 1,
              o = T || D ? C.right - Q : C.left,
              s = T ? (D ? C.right - Q : C.left) : C.right - Q;
            N = zn(d, f, o, C.top, s, C.bottom, a, r, a, i);
            break;
          }
          case `right`: {
            let n = D ? Q / 2 : Q * 4,
              r = D || T ? t + n : t - n,
              i = D ? t - n : T ? t + n : t - n,
              a = e - Q,
              o = T || D ? C.left + Q : C.right,
              s = T ? (D ? C.left + Q : C.right) : C.left + Q;
            N = zn(d, f, a, r, a, i, o, C.top, s, C.bottom);
            break;
          }
          default:
        }
        N ? l || n.start(40, x) : x();
      };
    };
  return (r.__options = { ...e, blockPointerEvents: t }), r;
}
var Un = Z.createContext(void 0);
function Wn(e) {
  let t = Z.useContext(Un);
  if (t === void 0 && !e) throw Error(u(47));
  return t;
}
var Gn = {
    ...Pe,
    disabled: (e) => e.disabled,
    instantType: (e) => e.instantType,
    openMethod: (e) => e.openMethod,
    openChangeReason: (e) => e.openChangeReason,
    modal: (e) => e.modal,
    focusManagerModal: (e) => e.focusManagerModal,
    stickIfOpen: (e) => e.stickIfOpen,
    titleElementId: (e) => e.titleElementId,
    descriptionElementId: (e) => e.descriptionElementId,
    openOnHover: (e) => e.openOnHover,
    closeDelay: (e) => e.closeDelay,
    adaptiveOrigin: (e) => e.adaptiveOrigin,
  },
  Kn = class extends be {
    constructor(e, t, n) {
      let r = new xe();
      super(qn(e, r, t, n), Jn(r), Gn);
    }
    setOpen = (e, t) => {
      let n = t.reason === J,
        r = t.reason === `trigger-press` && t.event.detail === 0,
        i = !e && (t.reason === `escape-key` || t.reason == null),
        a = Se(t),
        o = this.select(`activeTriggerId`);
      if (
        (!e &&
          t.reason === `close-press` &&
          t.trigger == null &&
          o != null &&
          (t.trigger =
            this.context.triggerElements.getById(o) ??
            this.select(`activeTriggerElement`) ??
            void 0),
        this.context.onOpenChange?.(e, t),
        t.isCanceled)
      )
        return;
      this.state.floatingRootContext.dispatchOpenChange(e, t);
      let s = () => {
        let n = { open: e, openChangeReason: t.reason };
        Me(n, e, t.trigger, a()), this.update(n);
      };
      n
        ? (this.set(`stickIfOpen`, !0),
          this.context.stickIfOpenTimeout.start(500, () => {
            this.set(`stickIfOpen`, !1);
          }),
          mn.flushSync(s))
        : s();
      let c;
      r
        ? (c = `click`)
        : i
        ? (c = `dismiss`)
        : t.reason === `focus-out` && (c = `focus`),
        this.set(`instantType`, c);
    };
  };
function qn(e, t, n, r = !1) {
  let i = {
    ...ye(),
    disabled: !1,
    modal: !1,
    focusManagerModal: !1,
    instantType: void 0,
    openMethod: null,
    openChangeReason: null,
    titleElementId: void 0,
    descriptionElementId: void 0,
    stickIfOpen: !0,
    openOnHover: !1,
    closeDelay: 0,
    adaptiveOrigin: void 0,
    ...e,
  };
  return (
    i.open && e?.mounted === void 0 && (i.mounted = !0),
    (i.floatingRootContext = je(t, n, r)),
    i
  );
}
function Jn(e) {
  return {
    popupRef: Z.createRef(),
    onOpenChange: void 0,
    onOpenChangeComplete: void 0,
    triggerFocusTargetRef: Z.createRef(),
    beforeContentFocusGuardRef: Z.createRef(),
    stickIfOpenTimeout: new se(),
    triggerElements: e,
  };
}
var $ = r();
function Yn({ props: e }) {
  let {
      children: t,
      open: n,
      defaultOpen: r = !1,
      onOpenChange: i,
      onOpenChangeComplete: a,
      modal: o = !1,
      handle: s,
      triggerId: c,
      defaultTriggerId: l = null,
    } = e,
    u = Zn(s, {
      modal: o,
      open: r,
      openProp: n,
      activeTriggerId: l,
      triggerIdProp: c,
    });
  u.useControlledProp(`openProp`, n), u.useControlledProp(`triggerIdProp`, c);
  let d = u.useState(`open`),
    f = u.useState(`mounted`),
    p = u.useState(`payload`);
  u.useContextCallback(`onOpenChange`, i),
    u.useContextCallback(`onOpenChangeComplete`, a),
    Le(u, d),
    ke(u);
  let { forceUnmount: m } = Te(d, u, () => {
    u.update({ stickIfOpen: !0, openChangeReason: null });
  });
  u.useSyncedValues({ modal: o }),
    Z.useEffect(() => {
      d || u.context.stickIfOpenTimeout.clear();
    }, [u, d]),
    Z.useImperativeHandle(
      e.actionsRef,
      () => ({ unmount: m, close: () => u.setOpen(!1, Y(st)) }),
      [m, u]
    );
  let h = d || f;
  return (0, $.jsxs)(Un.Provider, {
    value: u,
    children: [
      s && (0, $.jsx)(Ie, { handle: s, store: u }),
      h && (0, $.jsx)(Qn, { store: u, modal: o }),
      typeof t == `function` ? t({ payload: p }) : t,
    ],
  });
}
function Xn(e) {
  return Wn(!0)
    ? (0, $.jsx)(Yn, { props: e })
    : (0, $.jsx)(fe, { children: (0, $.jsx)(Yn, { props: e }) });
}
function Zn(e, t) {
  let n = ve((e, n) => new Kn(t, e, n));
  return (
    Z.useEffect(() => n.context.stickIfOpenTimeout.disposeEffect(), [n]), n
  );
}
function Qn({ store: e, modal: t }) {
  let n = ze(e.useState(`floatingRootContext`), {
      outsidePressEvent: {
        mouse: t === `trap-focus` ? `sloppy` : `intentional`,
        touch: `sloppy`,
      },
    }),
    r = n.reference,
    i = n.floating;
  return (
    we(e, { activeTriggerProps: r, inactiveTriggerProps: r, popupProps: i }),
    null
  );
}
function $n(e, t) {
  let n = Z.useRef(null);
  function r(t) {
    mn.flushSync(() => {
      e.setOpen(!1, Y(at, t.nativeEvent, t.currentTarget));
    }),
      ie(n.current)?.focus();
  }
  function i(n) {
    let r = e.select(`positionerElement`);
    if (r && oe(n, r)) e.context.beforeContentFocusGuardRef.current?.focus();
    else {
      mn.flushSync(() => {
        e.setOpen(!1, Y(at, n.nativeEvent, n.currentTarget));
      });
      let i = he(e.context.triggerFocusTargetRef.current || t.current);
      for (; i !== null && K(r, i); ) {
        let e = i;
        if (((i = pe(i)), i === e)) break;
      }
      i?.focus();
    }
  }
  return {
    preFocusGuardRef: n,
    handlePreFocusGuardFocus: r,
    handleFocusTargetFocus: i,
  };
}
var er = Z.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        disabled: a = !1,
        nativeButton: o = !0,
        handle: c,
        payload: l,
        openOnHover: d = !1,
        delay: f = 300,
        closeDelay: p = 0,
        id: m,
        ...h
      } = e,
      g = Wn(!0),
      _ = Ee(c) ?? g;
    if (!_) throw Error(u(74));
    let v = rt(m),
      y = _.useState(`isTriggerActive`, v),
      b = _.useState(`floatingRootContext`),
      x = _.useState(`isOpenedByTrigger`, v),
      S = _.useState(`triggerPopupId`, v),
      C = Z.useRef(null),
      { registerTrigger: w, isMountedByThisTrigger: E } = Be(v, C, _, {
        payload: l,
        disabled: a,
        openOnHover: d,
        closeDelay: p,
      }),
      D = _.useState(`openChangeReason`),
      O = _.useState(`stickIfOpen`),
      k = _.useState(`openMethod`),
      A = _.useState(`focusManagerModal`),
      j = Fn(b, {
        enabled: !a && d && (k !== `touch` || D !== `trigger-press`),
        mouseOnly: !0,
        move: !1,
        handleClose: Hn(),
        restMs: f,
        delay: { close: p },
        triggerElementRef: C,
        isActiveTrigger: y,
        isClosing: () => _.select(`transitionStatus`) === `ending`,
      }),
      M = de(b, { stickIfOpen: O }),
      N = Fe(
        () => _.select(`open`),
        (e) => {
          _.set(`openMethod`, e);
        }
      ),
      P = _.useState(`triggerProps`, E),
      { getButtonProps: te, buttonRef: F } = T({ disabled: a, native: o }),
      ne = {
        open(e) {
          return e && D === `trigger-press` ? me.open(e) : L.open(e);
        },
      },
      {
        preFocusGuardRef: re,
        handlePreFocusGuardFocus: I,
        handleFocusTargetFocus: ie,
      } = $n(_, C),
      R = s(`button`, e, {
        state: { disabled: a, open: x },
        ref: [F, t, w, C],
        props: [
          M.reference,
          j,
          P,
          N,
          {
            [ee]: ``,
            id: v,
            "aria-haspopup": `dialog`,
            "aria-expanded": x,
            "aria-controls": S,
          },
          h,
          te,
        ],
        stateAttributesMapping: ne,
      }),
      ae = (0, $.jsx)(Z.Fragment, { children: R }, v);
    return E && !A
      ? (0, $.jsxs)(Z.Fragment, {
          children: [
            (0, $.jsx)(z, { ref: re, onFocus: I }),
            ae,
            (0, $.jsx)(z, {
              ref: _.context.triggerFocusTargetRef,
              onFocus: ie,
            }),
          ],
        })
      : ae;
  }),
  tr = Z.createContext(void 0);
function nr() {
  let e = Z.useContext(tr);
  if (e === void 0) throw Error(u(45));
  return e;
}
var rr = Z.forwardRef(function (e, t) {
    let { keepMounted: n = !1, ...r } = e;
    return Wn().useState(`mounted`) || n
      ? (0, $.jsx)(tr.Provider, {
          value: n,
          children: (0, $.jsx)(De, { ref: t, ...r }),
        })
      : null;
  }),
  ir = Z.createContext(void 0);
function ar() {
  let e = Z.useContext(ir);
  if (!e) throw Error(u(46));
  return e;
}
var or = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: c,
        } = t,
        {
          element: l,
          padding: u = 0,
          offsetParent: d = `real`,
        } = G(e, t) || {};
      if (l == null) return {};
      let f = $e(u),
        p = { x: n, y: r },
        m = lt(i),
        h = Ze(m),
        g = await o.getDimensions(l),
        _ = m === `y`,
        v = _ ? `top` : `left`,
        y = _ ? `bottom` : `right`,
        b = _ ? `clientHeight` : `clientWidth`,
        x = a.reference[h] + a.reference[m] - p[m] - a.floating[h],
        S = p[m] - a.reference[m],
        C = d === `real` ? await o.getOffsetParent?.(l) : s.floating,
        w = s.floating[b] || a.floating[h];
      (!w || !(await o.isElement?.(C))) && (w = s.floating[b] || a.floating[h]);
      let T = x / 2 - S / 2,
        E = w / 2 - g[h] / 2 - 1,
        D = Math.min(f[v], E),
        O = Math.min(f[y], E),
        k = D,
        A = w - g[h] - O,
        j = w / 2 - g[h] / 2 + T,
        M = We(k, j, A),
        N =
          !c.arrow &&
          Ue(i) != null &&
          j !== M &&
          a.reference[h] / 2 - (j < k ? D : O) - g[h] / 2 < 0,
        P = N ? (j < k ? j - k : j - A) : 0;
      return {
        [m]: p[m] + P,
        data: {
          [m]: M,
          centerOffset: j - M - P,
          ...(N && { alignmentOffset: P }),
        },
        reset: N,
      };
    },
  }),
  sr = (e, t) => ({ ...or(e), options: [e, t] }),
  cr = {
    name: `hide`,
    async fn(e) {
      let { width: t, height: n, x: r, y: i } = e.rects.reference,
        a = t === 0 && n === 0 && r === 0 && i === 0,
        o = await e.platform.detectOverflow(e, { elementContext: `reference` });
      return {
        data: {
          referenceHidden:
            o.top - n >= 0 ||
            o.right - t >= 0 ||
            o.bottom - n >= 0 ||
            o.left - t >= 0 ||
            a,
        },
      };
    },
  },
  lr = { sideX: `left`, sideY: `top` },
  ur = `--available-width`,
  dr = `--available-height`;
function fr(e, t, n) {
  let r = e === `inline-start` || e === `inline-end`;
  return {
    top: `top`,
    right: r ? (n ? `inline-start` : `inline-end`) : `right`,
    bottom: `bottom`,
    left: r ? (n ? `inline-end` : `inline-start`) : `left`,
  }[t];
}
function pr(e, t, n) {
  let { rects: r, placement: i } = e;
  return {
    side: fr(t, X(i), n),
    align: Ue(i) || `center`,
    anchor: { width: r.reference.width, height: r.reference.height },
    positioner: { width: r.floating.width, height: r.floating.height },
  };
}
function mr(e) {
  return hr(e, En);
}
function hr(e, t) {
  let {
      anchor: n,
      positionMethod: r = `absolute`,
      side: i = `bottom`,
      sideOffset: a = 0,
      align: o = `center`,
      alignOffset: s = 0,
      collisionBoundary: l,
      collisionPadding: u = 5,
      sticky: f = !1,
      arrowPadding: p = 5,
      disableAnchorTracking: m = !1,
      inline: h,
      keepMounted: g = !1,
      floatingRootContext: _,
      mounted: v,
      collisionAvoidance: y,
      shift: x,
      nodeId: S,
      adaptiveOrigin: w,
      lazyFlip: T = !1,
      externalTree: E,
    } = e,
    [D, O] = Z.useState(null);
  !v && D !== null && O(null);
  let k = y.side || `flip`,
    A = y.align || `flip`,
    j = y.fallbackAxisSide || `end`,
    M = x?.crossAxis ?? !1,
    N = x?.rootBoundary,
    P = typeof n == `function` ? n : void 0,
    ee = d(P),
    te = P ? ee : n,
    F = B(n),
    ne = B(v),
    re = ft() === `rtl`,
    I =
      D ||
      {
        top: `top`,
        right: `right`,
        bottom: `bottom`,
        left: `left`,
        "inline-end": re ? `left` : `right`,
        "inline-start": re ? `right` : `left`,
      }[i],
    ie = o === `center` ? I : `${I}-${o}`,
    L = u;
  typeof L == `number`
    ? (L = { top: L, right: L, bottom: L, left: L })
    : (L &&= {
        top: L.top || 0,
        right: L.right || 0,
        bottom: L.bottom || 0,
        left: L.left || 0,
      });
  let R = +(i === `bottom`),
    ae = +(i === `top`),
    oe = +(i === `right`),
    se = +(i === `left`),
    ce = {
      boundary: l === `clipping-ancestors` ? `clippingAncestors` : l,
      padding: L,
    },
    z = Z.useRef(null),
    le = B(a),
    ue = B(s),
    de = typeof a == `function` ? 0 : a,
    fe = typeof s == `function` ? 0 : s,
    pe = [];
  h && pe.push(h),
    pe.push(
      xn(
        (e) => {
          let t = pr(e, i, re),
            n = typeof le.current == `function` ? le.current(t) : le.current,
            r = typeof ue.current == `function` ? ue.current(t) : ue.current;
          return { mainAxis: n, crossAxis: r, alignmentAxis: r };
        },
        [de, fe, re, i]
      )
    );
  let me = A === `none` && k !== `shift`,
    he = !me && (f || M || k === `shift`),
    ge =
      k === `none`
        ? null
        : wn({
            ...ce,
            padding: {
              top: L.top + 1 + R,
              right: L.right + 1 + se,
              bottom: L.bottom + 1 + ae,
              left: L.left + 1 + oe,
            },
            mainAxis: !M && k === `flip`,
            crossAxis: A === `flip` ? `alignment` : !1,
            fallbackAxisSideDirection: j,
          }),
    _e = me
      ? null
      : Sn(
          {
            ...ce,
            rootBoundary: N,
            mainAxis: A !== `none`,
            crossAxis: he,
            limiter:
              f || M
                ? void 0
                : Cn((e) => {
                    if (!z.current) return {};
                    let { width: t, height: n } =
                        z.current.getBoundingClientRect(),
                      r = U(X(e.placement)),
                      i = r === `y` ? t : n,
                      a = r === `y` ? L.left + L.right : L.top + L.bottom;
                    return { offset: i / 2 + a / 2 };
                  }),
          },
          [ce, f, M, N, L, A]
        );
  k === `shift` || A === `shift` || o === `center`
    ? pe.push(_e, ge)
    : pe.push(ge, _e),
    pe.push(
      Tn({
        ...ce,
        apply({
          elements: { floating: e },
          availableWidth: t,
          availableHeight: n,
          rects: r,
        }) {
          if (!ne.current) return;
          let i = e.style;
          i.setProperty(ur, `${t}px`), i.setProperty(dr, `${n}px`);
          let a = b(e).devicePixelRatio || 1,
            { x: o, y: s, width: c, height: l } = r.reference,
            u = (Math.round((o + c) * a) - Math.round(o * a)) / a,
            d = (Math.round((s + l) * a) - Math.round(s * a)) / a;
          i.setProperty(`--anchor-width`, `${u}px`),
            i.setProperty(`--anchor-height`, `${d}px`);
        },
      }),
      sr(
        (e) => ({
          element: z.current || C(e.elements.floating).createElement(`div`),
          padding: p,
          offsetParent: `floating`,
        }),
        [p]
      ),
      {
        name: `transformOrigin`,
        fn(e) {
          let {
              elements: t,
              middlewareData: n,
              placement: r,
              rects: o,
              y: s,
            } = e,
            c = X(r),
            l = U(c),
            u = z.current,
            d = n.arrow?.x || 0,
            f = n.arrow?.y || 0,
            p = u?.clientWidth || 0,
            m = u?.clientHeight || 0,
            h = d + p / 2,
            g = f + m / 2,
            _ = Math.abs(n.shift?.y || 0),
            v = o.reference.height / 2,
            y = typeof a == `function` ? a(pr(e, i, re)) : a,
            b = _ > y,
            x = {
              top: `${h}px calc(100% + ${y}px)`,
              bottom: `${h}px ${-y}px`,
              left: `calc(100% + ${y}px) ${g}px`,
              right: `${-y}px ${g}px`,
            }[c],
            S = `${h}px ${o.reference.y + v - s}px`;
          return (
            t.floating.style.setProperty(
              `--transform-origin`,
              he && l === `y` && b ? S : x
            ),
            {}
          );
        },
      },
      cr,
      w
    ),
    c(() => {
      !v &&
        _ &&
        _.update({
          referenceElement: null,
          floatingElement: null,
          domReferenceElement: null,
          positionReference: null,
        });
    }, [v, _]);
  let ve = Z.useMemo(
      () => ({
        elementResize: !m && typeof ResizeObserver < `u`,
        layoutShift: !m && typeof IntersectionObserver < `u`,
      }),
      [m]
    ),
    {
      refs: ye,
      elements: be,
      x: xe,
      y: Se,
      middlewareData: Ce,
      update: we,
      placement: Te,
      context: Ee,
      isPositioned: V,
      floatingStyles: De,
    } = t({
      rootContext: _,
      open: g ? v : void 0,
      placement: ie,
      middleware: pe,
      strategy: r,
      whileElementsMounted: g ? void 0 : (...e) => sn(...e, ve),
      nodeId: S,
      externalTree: E,
    }),
    { sideX: Oe, sideY: ke } = Ce.adaptiveOrigin || lr,
    Ae = V ? r : `fixed`,
    je = Z.useMemo(() => {
      let e;
      return (
        (e = V
          ? w
            ? { position: Ae, [Oe]: xe, [ke]: Se }
            : { ...De, position: Ae }
          : { position: Ae, top: 0, left: 0 }),
        (e[ur] = `100vw`),
        (e[dr] = `100vh`),
        V || (e.opacity = 0),
        e
      );
    }, [w, Ae, Oe, xe, ke, Se, De, V]),
    Me = Z.useRef(null);
  c(() => {
    if (!v) return;
    let e = F.current,
      t = typeof e == `function` ? e() : e,
      n = (gr(t) ? t.current : t) || null;
    n !== Me.current && (ye.setPositionReference(n), (Me.current = n));
  }, [v, ye, te, F]),
    Z.useEffect(() => {
      if (!v) return;
      let e = F.current;
      typeof e != `function` &&
        gr(e) &&
        e.current !== Me.current &&
        (ye.setPositionReference(e.current), (Me.current = e.current));
    }, [v, ye, te, F]),
    Z.useEffect(() => {
      if (g && v && be.reference && be.floating)
        return sn(be.reference, be.floating, we, ve);
    }, [g, v, be, we, ve]);
  let H = X(Te),
    Ne = fr(i, H, re),
    Pe = Ue(Te) || `center`,
    Fe = !!Ce.hide?.referenceHidden;
  c(() => {
    T && v && V && H !== I && O(H);
  }, [T, v, V, H, I]);
  let Ie = Z.useMemo(
      () => ({ position: `absolute`, top: Ce.arrow?.y, left: Ce.arrow?.x }),
      [Ce.arrow]
    ),
    Le = Ce.arrow?.centerOffset !== 0;
  return Z.useMemo(
    () => ({
      positionerStyles: je,
      arrowStyles: Ie,
      arrowRef: z,
      arrowUncentered: Le,
      side: Ne,
      align: Pe,
      physicalSide: H,
      anchorHidden: Fe,
      refs: ye,
      context: Ee,
      isPositioned: V,
      update: we,
    }),
    [je, Ie, z, Le, Ne, Pe, H, Fe, ye, Ee, V, we]
  );
}
function gr(e) {
  return e != null && `current` in e;
}
function _r(e) {
  return e === `starting` ? V : f;
}
function vr(
  e,
  t,
  {
    styles: n,
    transitionStatus: r,
    props: i,
    refs: a,
    hidden: o,
    inert: c = !1,
  }
) {
  let l = { ...n };
  return (
    c && (l.pointerEvents = `none`),
    s(`div`, e, {
      state: t,
      ref: a,
      props: [{ role: `presentation`, hidden: o, style: l }, _r(r), i],
      stateAttributesMapping: Ve,
    })
  );
}
var yr = 20;
function br(e, t, n, r) {
  let [i, a] = Z.useState(!1);
  c(() => {
    if (!e || !t || n == null) {
      a(!1);
      return;
    }
    let r = C(n).documentElement.clientWidth,
      i = n.offsetWidth;
    a(r > 0 && i > 0 && i >= r - yr);
  }, [e, t, n]),
    Ae(e && (!t || i), r);
}
var xr = Z.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        anchor: a,
        positionMethod: o,
        side: s,
        align: l,
        sideOffset: u,
        alignOffset: d,
        collisionBoundary: f = `clipping-ancestors`,
        collisionPadding: p,
        arrowPadding: m,
        sticky: h,
        disableAnchorTracking: g = !1,
        collisionAvoidance: _ = ce,
        ...v
      } = e,
      y = Wn(),
      b = nr(),
      x = re(),
      S = y.useState(`floatingRootContext`),
      C = y.useState(`mounted`),
      w = y.useState(`open`),
      T = y.useState(`openChangeReason`),
      E = y.useState(`activeTriggerElement`),
      D = y.useState(`modal`),
      O = y.useState(`openMethod`),
      k = y.useState(`positionerElement`),
      A = y.useState(`instantType`),
      j = y.useState(`transitionStatus`),
      M = y.useState(`adaptiveOrigin`),
      N = Z.useRef(null),
      P = ot(k),
      ee = mr({
        anchor: a,
        floatingRootContext: S,
        positionMethod: o,
        mounted: C,
        side: s,
        sideOffset: u,
        align: l,
        alignOffset: d,
        arrowPadding: m,
        collisionBoundary: f,
        collisionPadding: p,
        sticky: h,
        disableAnchorTracking: g,
        keepMounted: b,
        nodeId: x,
        collisionAvoidance: _,
        adaptiveOrigin: M,
      }),
      te = S.useState(`domReferenceElement`);
    c(() => {
      let e = te,
        t = N.current;
      if ((e && (N.current = e), t && e && e !== t)) {
        y.set(`instantType`, void 0);
        let e = new AbortController();
        return (
          P(() => {
            y.set(`instantType`, `trigger-change`);
          }, e.signal),
          () => {
            e.abort();
          }
        );
      }
    }, [te, P, y]);
    let F = D === !0 && T !== `trigger-hover`;
    br(w && F, O === `touch`, k, E);
    let ne = y.useStateSetter(`positionerElement`),
      I = vr(
        e,
        {
          open: w,
          side: ee.side,
          align: ee.align,
          anchorHidden: ee.anchorHidden,
          instant: A,
        },
        {
          styles: ee.positionerStyles,
          transitionStatus: j,
          props: v,
          refs: [t, ne],
          hidden: !C,
          inert: !w,
        }
      );
    return (0,
    $.jsxs)(ir.Provider, { value: ee, children: [C && F && (0, $.jsx)(Ne, { inert: dt(!w), cutout: E }), (0, $.jsx)(Re, { id: x, children: I })] });
  }),
  Sr = Z.createContext(void 0);
function Cr(e) {
  let t = Z.useContext(Sr);
  if (t === void 0 && !e) throw Error(u(69));
  return t;
}
var wr = Z.createContext(void 0);
function Tr() {
  let [e, t] = Z.useState(0),
    n = d(
      () => (
        t((e) => e + 1),
        () => {
          t((e) => Math.max(0, e - 1));
        }
      )
    );
  return {
    context: Z.useMemo(() => ({ register: n }), [n]),
    hasClosePart: e > 0,
  };
}
var Er = Z.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        initialFocus: a,
        finalFocus: o,
        ...c
      } = e,
      l = Wn(),
      u = ar(),
      d = Cr(!0) != null,
      { context: f, hasClosePart: p } = Tr(),
      m = l.useState(`open`),
      h = l.useState(`openMethod`),
      g = l.useState(`instantType`),
      _ = l.useState(`transitionStatus`),
      v = l.useState(`popupProps`),
      y = l.useState(`titleElementId`),
      b = l.useState(`descriptionElementId`),
      x = l.useState(`modal`),
      S = l.useState(`mounted`),
      C = l.useState(`openChangeReason`),
      w = l.useState(`activeTriggerElement`),
      T = l.useState(`floatingRootContext`),
      E = T.useState(`floatingId`),
      D = l.useState(`disabled`),
      O = l.useState(`openOnHover`),
      A = l.useState(`closeDelay`);
    it({
      open: m,
      ref: l.context.popupRef,
      onComplete() {
        m && l.context.onOpenChangeComplete?.(!0);
      },
    }),
      Nn(T, { enabled: O && !D, closeDelay: A });
    let j = a === void 0 ? Ce(l.context.popupRef) : a,
      M = x !== !1 && p;
    l.useSyncedValue(`focusManagerModal`, M);
    let N = l.useStateSetter(`popupElement`),
      P = s(`div`, e, {
        state: {
          open: m,
          side: u.side,
          align: u.align,
          instant: g,
          transitionStatus: _,
        },
        ref: [t, l.context.popupRef, N],
        props: [
          v,
          {
            id: E,
            role: `dialog`,
            ...Oe,
            "aria-labelledby": y,
            "aria-describedby": b,
            onKeyDown(e) {
              d && nt.has(e.key) && e.stopPropagation();
            },
          },
          _r(_),
          c,
        ],
        stateAttributesMapping: te,
      });
    return (0,
    $.jsx)(F, { context: T, openInteractionType: h, modal: M, disabled: !S || C === `trigger-hover`, initialFocus: j, returnFocus: o, restoreFocus: `popup`, previousFocusableElement: k(w) ? w : void 0, nextFocusableElement: l.context.triggerFocusTargetRef, beforeContentFocusGuardRef: l.context.beforeContentFocusGuardRef, children: (0, $.jsx)(wr.Provider, { value: f, children: P }) });
  }),
  Dr = Z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      o = Wn(),
      c = rt(a.id);
    return (
      o.useSyncedValueWithCleanup(`titleElementId`, c),
      s(`h2`, e, { ref: t, props: [{ id: c }, a] })
    );
  }),
  Or = Z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      o = Wn(),
      c = rt(a.id);
    return (
      o.useSyncedValueWithCleanup(`descriptionElementId`, c),
      s(`p`, e, { ref: t, props: [{ id: c }, a] })
    );
  });
function kr({ ...e }) {
  return (0, $.jsx)(Xn, { "data-slot": `popover`, ...e });
}
function Ar({ ...e }) {
  return (0, $.jsx)(er, { "data-slot": `popover-trigger`, ...e });
}
function jr({
  className: e,
  align: t = `center`,
  alignOffset: n = 0,
  side: r = `bottom`,
  sideOffset: i = 4,
  ...a
}) {
  return (0, $.jsx)(rr, {
    children: (0, $.jsx)(xr, {
      align: t,
      alignOffset: n,
      side: r,
      sideOffset: i,
      className: `isolate z-50`,
      children: (0, $.jsx)(Er, {
        "data-slot": `popover-content`,
        className: D(
          `bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 z-50 w-72 origin-(--transform-origin) outline-hidden`,
          e
        ),
        ...a,
      }),
    }),
  });
}
function Mr({ className: e, ...t }) {
  return (0, $.jsx)(Dr, {
    "data-slot": `popover-title`,
    className: D(`font-medium`, e),
    ...t,
  });
}
function Nr({ className: e, ...t }) {
  return (0, $.jsx)(Or, {
    "data-slot": `popover-description`,
    className: D(`text-muted-foreground`, e),
    ...t,
  });
}
var Pr = `https://embed.helpcrunch.com/sdk.js`,
  Fr = {
    organization: `mbb`,
    appId: `7b097156-c365-4f3e-8b3f-39db8aa2cef2`,
    showWidget: !1,
    openWidget: !1,
    loadImmediately: !0,
  },
  Ir = { phase: `closed` },
  Lr = {
    lioncall: { color: `#004a95`, logo: `/brand/cryptic-maestro-logo.png?v=1` },
    jungle: { color: `#123d30`, logo: `/lionjungle-logo.jpg` },
  };
function Rr(e, t) {
  let n = Ir,
    r = `lioncall`,
    i = !1,
    a = !1,
    o = !1,
    s = 0,
    c,
    l = new Set(),
    u = (e, t) => {
      (n.phase === e && n.recovery === t) ||
        ((n = { phase: e, ...(t ? { recovery: t } : {}) }),
        l.forEach((e) => e()));
    },
    d = () => {
      c !== void 0 && e.clearTimeout(c), (c = void 0);
    },
    f = (t, ...n) => {
      e.HelpCrunch?.(t, ...n);
    },
    p = () => {
      f(`setWidgetColor`, Lr[r].color),
        f(`setWidgetLogo`, `${e.location.origin}${Lr[r].logo}`);
    },
    m = () => {
      d(),
        (o = !1),
        a && f(`closeChat`),
        u(`error`, i && !a ? `reload` : `retry`);
    },
    h = () => {
      if (i) return;
      i = !0;
      let c = ++s;
      if (
        ((e.helpcrunchSettings = {
          ...Fr,
          widgetColor: Lr[r].color,
          widgetLogo: `${e.location.origin}${Lr[r].logo}`,
        }),
        !e.HelpCrunch)
      ) {
        let t = [],
          n = (e, ...n) => {
            t.push([e, ...n]);
          };
        (n.q = t), (e.HelpCrunch = n);
      }
      let l = e.HelpCrunch;
      if (
        (f(`onReady`, () => {
          s === c &&
            ((a = !0),
            f(`hideChatWidget`),
            f(`setLocalization`, `en`),
            f(`muteNotificationSound`, !0),
            p(),
            o ? f(`openChat`) : n.phase === `error` && u(`error`, `retry`));
        }),
        f(`onChatOpen`, () => {
          if (s === c) {
            if (!o) {
              f(`closeChat`);
              return;
            }
            d(), u(`open`);
          }
        }),
        f(`onChatClose`, () => {
          s === c && o && ((o = !1), d(), u(`closed`));
        }),
        f(`onError`, () => {
          s === c && o && n.phase === `loading` && m();
        }),
        t.querySelector(`script[src="https://embed.helpcrunch.com/sdk.js"]`))
      )
        return;
      let h = t.createElement(`script`);
      (h.src = Pr),
        (h.async = !0),
        (h.type = `text/javascript`),
        h.addEventListener(
          `error`,
          () => {
            s === c &&
              (h.remove(),
              (i = !1),
              (a = !1),
              e.HelpCrunch === l && l.q && delete e.HelpCrunch,
              o && m());
          },
          { once: !0 }
        ),
        t.head.appendChild(h);
    };
  return {
    getSnapshot: () => n,
    subscribe(e) {
      return (
        l.add(e),
        () => {
          l.delete(e);
        }
      );
    },
    setChannel(e) {
      (r = e), a && p();
    },
    open() {
      if (!o) {
        (o = !0), u(`loading`), d(), (c = e.setTimeout(m, 15e3));
        try {
          h(), a && f(`openChat`);
        } catch {
          m();
        }
      }
    },
    close() {
      (o = !1), d(), u(`closed`), a && f(`closeChat`);
    },
  };
}
function zr() {
  return (window.lionSupportClient ??= Rr(window, document));
}
function Br() {
  let e = i()?.startsWith(`/jungle`) ? `jungle` : `lioncall`,
    t =
      e === `jungle`
        ? `/lionjungle-logo.jpg`
        : `/brand/cryptic-maestro-logo.png?v=1`,
    [n, r] = (0, Z.useState)(Ir),
    o = (0, Z.useRef)(null),
    s = (0, Z.useRef)(!1),
    c = n.phase === `loading` || n.phase === `error`,
    l = c || n.phase === `open`;
  return (
    (0, Z.useEffect)(() => {
      let e = zr(),
        t = () => {
          r(e.getSnapshot());
        };
      return t(), e.subscribe(t);
    }, []),
    (0, Z.useEffect)(() => {
      zr().setChannel(e);
    }, [e]),
    (0, Z.useEffect)(() => {
      s.current && n.phase === `closed` && o.current?.focus(),
        (s.current = n.phase === `open`);
    }, [n.phase]),
    (0, Z.useEffect)(() => {
      if (n.phase !== `open`) return;
      let e = (e) => {
        e.key === `Escape` && zr().close();
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [n.phase]),
    (0, $.jsx)(`div`, {
      className: `lion-support`,
      "data-channel": e,
      "data-chat-state": n.phase,
      children: (0, $.jsxs)(kr, {
        open: c,
        onOpenChange: (e) => {
          let t = zr();
          !e || n.phase === `open` ? t.close() : t.open();
        },
        children: [
          (0, $.jsxs)(Ar, {
            ref: o,
            className: `lion-support-launcher`,
            "aria-label": l
              ? `Close support chat`
              : `Open Maestro support chat`,
            "aria-expanded": l,
            title: l ? `Close support chat` : `Chat with the Maestro team`,
            children: [
              (0, $.jsxs)(`span`, {
                className: `lion-support-medallion`,
                "aria-hidden": `true`,
                children: [
                  (0, $.jsx)(a, { src: t, alt: ``, width: 60, height: 60 }),
                  (0, $.jsx)(`span`, {
                    className: `lion-support-close`,
                    children: (0, $.jsx)(ge, { size: 23 }),
                  }),
                ],
              }),
              (0, $.jsxs)(`span`, {
                className: `lion-support-label`,
                "aria-hidden": `true`,
                children: [
                  (0, $.jsx)(`span`, { children: `Maestro support` }),
                  (0, $.jsx)(`small`, {
                    children:
                      n.phase === `loading`
                        ? `Connecting…`
                        : l
                        ? `Close chat`
                        : `Let’s talk`,
                  }),
                ],
              }),
              (0, $.jsx)(ht, {
                className: `lion-support-chat-icon`,
                size: 19,
                "aria-hidden": `true`,
              }),
            ],
          }),
          (0, $.jsxs)(jr, {
            className: `lion-support-panel`,
            "data-channel": e,
            side: `top`,
            align: `end`,
            sideOffset: 14,
            initialFocus: !1,
            finalFocus: n.phase === `open` ? !1 : o,
            children: [
              (0, $.jsxs)(`div`, {
                className: `lion-support-panel-top`,
                children: [
                  (0, $.jsx)(a, { src: t, alt: ``, width: 48, height: 48 }),
                  (0, $.jsxs)(`span`, {
                    children: [
                      `The Maestro team`,
                      (0, $.jsx)(`small`, { children: `Bookings & support` }),
                    ],
                  }),
                  (0, $.jsx)(`button`, {
                    type: `button`,
                    className: `lion-support-dismiss`,
                    "aria-label": `Dismiss support panel`,
                    onClick: () => zr().close(),
                    children: (0, $.jsx)(ge, { size: 20 }),
                  }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `lion-support-panel-body`,
                children: [
                  (0, $.jsx)(Mr, {
                    children:
                      n.phase === `error`
                        ? `Let’s try another way.`
                        : `You’re in the right place.`,
                  }),
                  (0, $.jsx)(Nr, {
                    children:
                      n.phase === `error`
                        ? n.recovery === `reload`
                          ? `The chat couldn’t finish loading. Reload this page, or reach our team on Telegram.`
                          : `The chat couldn’t connect. Try again, or reach our team on Telegram.`
                        : `A question about calls, a booking, or something else? Our team is here to help.`,
                  }),
                  (0, $.jsx)(`output`, {
                    className: `lion-support-connection`,
                    "aria-live": `polite`,
                    children:
                      n.phase === `loading`
                        ? (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(mt, {
                                size: 19,
                                className: `lion-support-spinner`,
                                "aria-hidden": `true`,
                              }),
                              ` Opening your chat…`,
                            ],
                          })
                        : `Chat connection unavailable`,
                  }),
                  n.phase === `error` &&
                    (0, $.jsxs)(`button`, {
                      className: `lion-support-retry`,
                      type: `button`,
                      onClick: () =>
                        n.recovery === `reload`
                          ? window.location.reload()
                          : zr().open(),
                      children: [
                        (0, $.jsx)(P, { size: 17, "aria-hidden": `true` }),
                        ` `,
                        n.recovery === `reload` ? `Reload page` : `Try again`,
                      ],
                    }),
                  (0, $.jsxs)(`a`, {
                    className: `lion-support-telegram`,
                    href: pt.bookingBot,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    children: [
                      (0, $.jsxs)(`span`, {
                        children: [
                          `Prefer Telegram?`,
                          (0, $.jsx)(`strong`, {
                            children: `@CrypticMaestrooo`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(N, { size: 21, "aria-hidden": `true` }),
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`p`, {
                className: `lion-support-privacy`,
                children: `Chat is powered by HelpCrunch and connects when you open it.`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
export { Br as SupportChat };
