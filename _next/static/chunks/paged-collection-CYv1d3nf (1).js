import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, n, r } from "./framework-D_rUT4EX.js";
import {
  E as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  _ as d,
  k as f,
  o as p,
  t as m,
} from "./utils-CaPlbFnG.js";
import { t as h } from "./arrow-left-D6wix-Qx.js";
import { t as g } from "./arrow-right-BEtrTvYA.js";
import { X as _ } from "./useOpenInteractionType-BAWykS4S.js";
import { t as v } from "./useControlled-WSUf9E34.js";
import { Z as y, at as b, ht as x, st as S } from "./composite-DaIlOdtn.js";
import { t as C } from "./button-BFvZYHow.js";
import { i as w, n as T, r as E, t as D } from "./dialog-GtuMoOPd.js";
var O = o(`bookmark`, [
    [
      `path`,
      {
        d: `M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,
        key: `oz39mx`,
      },
    ],
  ]),
  k = o(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  A = o(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  j = o(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  M = e(n(), 1),
  N = e(t(), 1),
  P = r();
function F({ className: e, ...t }) {
  return (0, P.jsx)(`nav`, {
    role: `navigation`,
    "aria-label": `pagination`,
    "data-slot": `pagination`,
    className: m(`mx-auto flex w-full justify-center`, e),
    ...t,
  });
}
function I({ className: e, ...t }) {
  return (0, P.jsx)(`ul`, {
    "data-slot": `pagination-content`,
    className: m(`gap-0.5 flex items-center`, e),
    ...t,
  });
}
function L({ ...e }) {
  return (0, P.jsx)(`li`, { "data-slot": `pagination-item`, ...e });
}
function R({ className: e, isActive: t, size: n = `icon`, ...r }) {
  return (0, P.jsx)(C, {
    role: `link`,
    variant: t ? `outline` : `ghost`,
    size: n,
    className: m(e),
    nativeButton: !1,
    render: (0, P.jsx)(`a`, {
      "aria-current": t ? `page` : void 0,
      "data-slot": `pagination-link`,
      "data-active": t,
      ...r,
    }),
  });
}
function z(e, t) {
  return Math.floor(e / t);
}
function B(e) {
  try {
    return decodeURIComponent(e.replace(/^#/, ``));
  } catch {
    return ``;
  }
}
var V = { query: ``, chain: ``, minMultiple: 0, year: ``, savedOnly: !1 };
function H(e) {
  return e.replace(/^archive-call-/, `story-`);
}
function ee(e, t, n) {
  let r = t.query.trim().replace(/^\$/, ``),
    i = r.toLocaleLowerCase(`en-GB`),
    a = new Set(n);
  return e.flatMap((e, n) => {
    let o =
        !r ||
        [e.name, e.symbol ?? ``].some((e) =>
          e.toLocaleLowerCase(`en-GB`).includes(i)
        ),
      s = e.contractAddress ?? ``,
      c = !!(
        s &&
        (s.startsWith(`0x`)
          ? s.toLowerCase().includes(r.toLowerCase())
          : s.includes(r))
      );
    return (!o && !c) ||
      (t.chain && e.chain !== t.chain) ||
      e.reportedMultiple < t.minMultiple ||
      (t.year && e.calledAt?.slice(0, 4) !== t.year) ||
      (t.savedOnly && !a.has(H(e.id)))
      ? []
      : [n];
  });
}
function U(e) {
  return !!(e.query || e.chain || e.minMultiple || e.year || e.savedOnly);
}
function W(e, t, n) {
  let r = e.indexOf(t);
  return r >= 0
    ? e[r + n] ?? null
    : n === 1
    ? e.find((e) => e > t) ?? null
    : e.findLast((e) => e < t) ?? null;
}
function te(e, t, n) {
  return n > 700 || n < 0 || Math.abs(e) < 70 || Math.abs(e) < Math.abs(t) * 1.7
    ? 0
    : e < 0
    ? 1
    : -1;
}
var G = `lion.saved-stories.v1`,
  K = `lion:saved-stories`,
  q = /^(?:story|jungle-story)-\d{1,12}$/;
function ne(e) {
  if (!e || e.length > 32e3) return [];
  try {
    let t = JSON.parse(e);
    return Array.isArray(t)
      ? [...new Set(t.filter((e) => typeof e == `string` && q.test(e)))].slice(
          0,
          500
        )
      : [];
  } catch {
    return [];
  }
}
function re(e, t) {
  return q.test(t)
    ? e.includes(t)
      ? e.filter((e) => e !== t)
      : [...e, t].slice(-500)
    : [...e];
}
function ie() {
  let e = [],
    t = !0,
    n = () => ({ ids: [...e], persistent: t }),
    r = (r) => {
      if (t)
        try {
          e = ne(r());
        } catch {
          t = !1;
        }
      return n();
    };
  return {
    read: r,
    toggle(i, a, o) {
      if ((r(a), (e = re(e, i)), t))
        try {
          o(JSON.stringify(e));
        } catch {
          t = !1;
        }
      return n();
    },
  };
}
var J = ie(),
  Y = () => localStorage.getItem(G);
function X() {
  let [e, t] = (0, N.useState)([]),
    [n, r] = (0, N.useState)(!0);
  return (
    (0, N.useEffect)(() => {
      let e = () => {
          let e = J.read(Y);
          t(e.ids), r(e.persistent);
        },
        n = (t) => {
          (t.key === `lion.saved-stories.v1` || t.key === null) && e();
        },
        i = () => e();
      return (
        e(),
        window.addEventListener(`storage`, n),
        window.addEventListener(K, i),
        () => {
          window.removeEventListener(`storage`, n),
            window.removeEventListener(K, i);
        }
      );
    }, []),
    {
      ids: e,
      toggle: (e) => {
        let n = J.toggle(e, Y, (e) => localStorage.setItem(G, e));
        t(n.ids), r(n.persistent), window.dispatchEvent(new CustomEvent(K));
      },
      persistent: n,
    }
  );
}
function Z(e) {
  if (!(e instanceof HTMLElement)) return;
  let t = getComputedStyle(e);
  return {
    bounds: e.getBoundingClientRect(),
    text: e.textContent ?? ``,
    font: t.font,
    color: t.color,
    spacing: t.letterSpacing,
  };
}
function Q(e, t = !1) {
  let n = e.querySelector(`.chapter-performance`) ?? e;
  return {
    bounds: e.getBoundingClientRect(),
    background: t
      ? getComputedStyle(e).backgroundColor
      : getComputedStyle(n).getPropertyValue(`--story-panel-end`).trim() ||
        `#073665`,
    name: Z(
      e.querySelector(t ? `.story-ticket-name, strong` : `.chapter-header h3`)
    ),
    result: Z(
      e.querySelector(
        t
          ? `.story-ticket-value, small`
          : `.case-multiple strong, .jungle-case-multiple strong`
      )
    ),
  };
}
async function $(e, t, n = !1, r) {
  if (
    r?.aborted ||
    matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
    typeof Element.prototype.animate != `function`
  )
    return;
  let i = document.createElement(`div`);
  (i.className = `story-morph-layer`),
    i.setAttribute(`aria-hidden`, `true`),
    document.body.appendChild(i);
  let a = [],
    o = {
      duration: n ? 360 : 580,
      easing: `cubic-bezier(.22,.8,.22,1)`,
      fill: `both`,
    },
    s = (e) => ({
      left: `${e.left}px`,
      top: `${e.top}px`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    c = document.createElement(`div`);
  (c.className = `story-morph-surface`),
    i.appendChild(c),
    a.push(
      c.animate(
        [
          {
            ...s(e.bounds),
            backgroundColor: e.background,
            borderRadius: n ? `24px` : `20px`,
            opacity: 0.98,
          },
          {
            ...s(t.bounds),
            backgroundColor: t.background,
            borderRadius: n ? `20px` : `24px`,
            opacity: n ? 0.85 : 1,
          },
        ],
        o
      )
    );
  for (let n of [`name`, `result`]) {
    let r = e[n],
      c = t[n];
    if (!r || !c) continue;
    let l = document.createElement(`span`);
    (l.className = `story-morph-type`),
      (l.textContent = n === `result` ? c.text : r.text),
      (l.style.font = r.font),
      (l.style.letterSpacing = r.spacing),
      i.appendChild(l),
      a.push(
        l.animate(
          [
            { ...s(r.bounds), color: r.color, font: r.font },
            { ...s(c.bounds), color: c.color, font: c.font },
          ],
          o
        )
      );
  }
  let l = () => a.forEach((e) => e.finish()),
    u = () => a.forEach((e) => e.cancel());
  r?.addEventListener(`abort`, u, { once: !0 });
  let d = matchMedia(`(prefers-reduced-motion: reduce)`);
  d.addEventListener(`change`, l, { once: !0 }),
    window.addEventListener(`pagehide`, l, { once: !0 });
  try {
    await Promise.all(a.map((e) => e.finished.catch(() => {})));
  } finally {
    a.forEach((e) => e.cancel()),
      i.remove(),
      r?.removeEventListener(`abort`, u),
      d.removeEventListener(`change`, l),
      window.removeEventListener(`pagehide`, l);
  }
}
function ae() {
  return new Promise((e) => {
    let t = () => {
      window.removeEventListener(`popstate`, t), e();
    };
    window.addEventListener(`popstate`, t, { once: !0 }),
      window.setTimeout(t, 250),
      history.back();
  });
}
function oe({
  items: e,
  itemIds: t,
  itemLabels: n,
  scope: r,
  onSelection: i,
  visibleIndices: a,
}) {
  let [o, s] = (0, N.useState)(null),
    c = (0, N.useRef)(null),
    l = (0, N.useRef)(null),
    u = (0, N.useRef)(null),
    d = (0, N.useRef)(null),
    f = (0, N.useRef)(!1),
    p = (0, N.useRef)(0),
    m = (0, N.useRef)(!1),
    v = (0, N.useRef)(``),
    y = (0, N.useRef)(!0),
    b = (0, N.useRef)(null),
    x = t[0]?.startsWith(`jungle-`),
    S = X(),
    k = (0, N.useRef)(null),
    A = (0, N.useRef)(null),
    j = (0, N.useRef)(null),
    F = o === null ? null : W(a, o, -1),
    I = o === null ? null : W(a, o, 1),
    L = (e) => {
      e === null ||
        f.current ||
        !a.includes(e) ||
        (b.current?.abort(),
        d.current && delete d.current.dataset.morphing,
        (c.current = e),
        history.replaceState(
          { ...history.state, lionStoryReader: `#${t[e]}` },
          ``,
          `#${t[e]}`
        ),
        (0, M.flushSync)(() => {
          i(e), s(e);
        }),
        d.current?.scrollTo({ top: 0, behavior: `instant` }),
        j.current?.scrollTo({ top: 0, behavior: `instant` }),
        j.current?.focus({ preventScroll: !0 }));
    },
    R = (0, N.useCallback)(
      async (e = !1) => {
        if (c.current === null || f.current) return;
        (f.current = !0), b.current?.abort();
        let t = new AbortController();
        b.current = t;
        let n = d.current,
          r = l.current;
        if (n && r?.isConnected && c.current === k.current) {
          let e = Q(n),
            i = Q(r, !0);
          i.bounds.bottom > 0 &&
            i.bounds.top < innerHeight &&
            ((n.dataset.morphing = `true`), await $(e, i, !0, t.signal));
        }
        if (!y.current || t.signal.aborted) return;
        let a = r?.closest(`.story-ticker`);
        a && delete a.dataset.storyOpen,
          !e && m.current && ((m.current = !1), await ae()),
          y.current &&
            ((c.current = null),
            (0, M.flushSync)(() => {
              s(null), i(null);
            }),
            (f.current = !1),
            requestAnimationFrame(() => {
              y.current &&
                (window.scrollTo({ top: p.current, behavior: `instant` }),
                r?.focus({ preventScroll: !0 }),
                requestAnimationFrame(() => {
                  delete document.documentElement.dataset.storyReaderActive;
                }));
            }));
      },
      [i]
    );
  (0, N.useEffect)(() => {
    let e = (e) => {
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          c.current !== null
        )
          return;
        let n = e.target?.closest(`.story-jump-list a[href]`);
        if (!n || n.target === `_blank`) return;
        let a = new URL(n.href);
        if (
          a.origin !== location.origin ||
          a.pathname !== location.pathname ||
          a.search !== location.search
        )
          return;
        let o = t.indexOf(B(a.hash));
        if (o < 0 || !r.current) return;
        e.preventDefault(), (l.current = n), (u.current = Q(n, !0));
        let d = n.closest(`.story-ticker`);
        d && (d.dataset.storyOpen = `true`),
          (p.current = scrollY),
          (v.current = location.hash),
          (document.documentElement.dataset.storyReaderActive = `true`),
          history.pushState(
            { ...history.state, lionStoryReader: a.hash },
            ``,
            a.hash
          ),
          (m.current = !0),
          (c.current = o),
          (k.current = o),
          (0, M.flushSync)(() => {
            i(o), s(o);
          });
      },
      n = () => {
        c.current === null || f.current || ((m.current = !1), R(!0));
      };
    return (
      document.addEventListener(`click`, e, !0),
      window.addEventListener(`popstate`, n),
      () => {
        document.removeEventListener(`click`, e, !0),
          window.removeEventListener(`popstate`, n);
        let t = l.current?.closest(`.story-ticker`);
        t && delete t.dataset.storyOpen,
          c.current === null &&
            delete document.documentElement.dataset.storyReaderActive;
      }
    );
  }, [t, r, i, R]),
    (0, N.useEffect)(() => {
      y.current = !0;
      let e = () => {
        c.current !== null &&
          (b.current?.abort(),
          history.replaceState(
            history.state,
            ``,
            `${location.pathname}${location.search}${v.current}`
          ),
          (m.current = !1),
          (c.current = null),
          (f.current = !1),
          delete document.documentElement.dataset.storyReaderActive,
          (0, M.flushSync)(() => {
            s(null), i(null);
          }));
      };
      return (
        window.addEventListener(`beforeprint`, e),
        () => {
          (y.current = !1),
            b.current?.abort(),
            delete document.documentElement.dataset.storyReaderActive,
            window.removeEventListener(`beforeprint`, e);
        }
      );
    }, [i]);
  let z = (0, N.useCallback)((e) => {
    d.current = e;
    let t = u.current;
    !e ||
      !t ||
      ((u.current = null),
      (e.dataset.morphing = `true`),
      requestAnimationFrame(async () => {
        if (!y.current || !e.isConnected || f.current) return;
        b.current?.abort();
        let n = new AbortController();
        b.current = n;
        try {
          await $(t, Q(e), !1, n.signal);
        } finally {
          b.current === n && !f.current && delete e.dataset.morphing;
        }
      }));
  }, []);
  return (0, P.jsx)(D, {
    open: o !== null,
    onOpenChange: (e) => {
      e || R();
    },
    children: (0, P.jsxs)(T, {
      ref: z,
      showCloseButton: !1,
      className: `site-shell experience-theme story-reader${
        x ? ` jungle-theme` : ``
      }`,
      finalFocus: () => l.current,
      children: [
        (0, P.jsxs)(`div`, {
          className: `story-reader-bar`,
          children: [
            (0, P.jsxs)(C, {
              variant: `ghost`,
              onClick: () => void R(),
              children: [(0, P.jsx)(h, { size: 17 }), ` Back to stories`],
            }),
            (0, P.jsxs)(`span`, {
              children: [
                x ? `MaestroLounge` : `cryptic_maestro`,
                ` / Story file`,
              ],
            }),
            (0, P.jsx)(C, {
              variant: `ghost`,
              size: `icon`,
              "aria-label": `Close story`,
              onClick: () => void R(),
              children: (0, P.jsx)(_, { size: 20 }),
            }),
          ],
        }),
        (0, P.jsx)(w, {
          className: `sr-only`,
          children: o === null ? `Story` : n[o],
        }),
        (0, P.jsx)(E, {
          className: `sr-only`,
          children: `Original posts, reported milestones and source qualifications. Press Escape to return to the story collection.`,
        }),
        (0, P.jsx)(`div`, {
          className: `story-reader-body`,
          ref: j,
          tabIndex: -1,
          onTouchStart: (e) => {
            let t = e.target;
            if (
              e.touches.length !== 1 ||
              t.closest(
                `a, button, input, select, textarea, iframe, [role="slider"], .milestone-bars`
              )
            ) {
              A.current = null;
              return;
            }
            let n = e.touches[0];
            A.current = { x: n.clientX, y: n.clientY, at: performance.now() };
          },
          onTouchCancel: () => {
            A.current = null;
          },
          onTouchEnd: (e) => {
            let t = A.current;
            if (
              ((A.current = null),
              !t || e.changedTouches.length !== 1 || e.touches.length)
            )
              return;
            let n = e.changedTouches[0],
              r = te(
                n.clientX - t.x,
                n.clientY - t.y,
                performance.now() - t.at
              );
            r && L(r === 1 ? I : F);
          },
          children: o === null ? null : e[o],
        }),
        o !== null &&
          (0, P.jsxs)(`nav`, {
            className: `story-reader-dock`,
            "aria-label": `Explore adjacent stories`,
            children: [
              (0, P.jsxs)(C, {
                variant: `ghost`,
                disabled: F === null,
                onClick: () => L(F),
                children: [
                  (0, P.jsx)(h, { size: 19 }),
                  (0, P.jsxs)(`span`, {
                    children: [
                      (0, P.jsx)(`small`, { children: `Previous story` }),
                      F === null ? `Start of selection` : n[F].split(` · `)[0],
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `reader-save-group`,
                children: [
                  (0, P.jsxs)(C, {
                    variant: `ghost`,
                    "aria-pressed": S.ids.includes(H(t[o])),
                    onClick: () => S.toggle(H(t[o])),
                    children: [
                      (0, P.jsx)(O, {
                        size: 19,
                        fill: S.ids.includes(H(t[o])) ? `currentColor` : `none`,
                      }),
                      S.ids.includes(H(t[o])) ? `Saved` : `Save story`,
                    ],
                  }),
                  (0, P.jsx)(`small`, {
                    "aria-live": `polite`,
                    children: S.persistent
                      ? `This browser only`
                      : `Saved for this visit only`,
                  }),
                ],
              }),
              (0, P.jsxs)(C, {
                variant: `ghost`,
                disabled: I === null,
                onClick: () => L(I),
                children: [
                  (0, P.jsxs)(`span`, {
                    children: [
                      (0, P.jsx)(`small`, { children: `Next story` }),
                      I === null ? `End of selection` : n[I].split(` · `)[0],
                    ],
                  }),
                  (0, P.jsx)(g, { size: 19 }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
var se = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1,
  },
  ce = {
    disabled: !1,
    valid: null,
    touched: !1,
    dirty: !1,
    filled: !1,
    focused: !1,
  },
  le = {
    valid(e) {
      return e === null
        ? null
        : e
        ? { "data-valid": `` }
        : { "data-invalid": `` };
    },
  },
  ue = {
    invalid: void 0,
    name: void 0,
    validityData: {
      state: se,
      errors: [],
      error: ``,
      value: ``,
      initialValue: null,
    },
    setValidityData: f,
    disabled: void 0,
    setTouched: f,
    setDirty: f,
    setFilled: f,
    setFocused: f,
    validationMode: `onSubmit`,
    shouldValidateOnChange: () => !1,
    state: ce,
    registerFieldControl: f,
    validation: {
      getValidationProps: (e, t = l) => t,
      inputRef: { current: null },
      registeredInputs: new Map(),
      registerInput: f,
      getInputControl: () => null,
      commit: async () => {},
      change: f,
    },
  },
  de = N.createContext(ue);
function fe(e = !0) {
  let t = N.useContext(de);
  if (t.setValidityData === f && !e) throw Error(s(28));
  return t;
}
var pe = N.createContext({
  elementRef: { current: null },
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: f,
  validationMode: `onSubmit`,
  submitAttemptedRef: { current: !1 },
});
function me() {
  return N.useContext(pe);
}
var he = N.createContext({
  controlId: void 0,
  registerControlId: f,
  labelId: void 0,
  setLabelId: f,
  messageIds: [],
  setMessageIds: f,
  getDescriptionProps: (e) => e,
});
function ge() {
  return N.useContext(he);
}
function _e(e = {}) {
  let { id: t, implicit: n = !1, controlRef: r } = e,
    { controlId: i, registerControlId: o } = ge(),
    s = b(t),
    l = n ? i : void 0,
    p = u(() => Symbol()),
    m = N.useRef(!1),
    h = N.useRef(t != null),
    g = c(() => {
      !m.current || o === f || ((m.current = !1), o(p.current, void 0));
    });
  return (
    a(() => {
      if (o === f) return;
      let e;
      if (n) {
        let n = r?.current;
        e = d(n) && n.closest(`label`) != null ? t ?? null : l ?? s;
      } else if (t != null) (h.current = !0), (e = t);
      else if (h.current) e = s;
      else {
        g();
        return;
      }
      if (e === void 0) {
        g();
        return;
      }
      (m.current = !0), o(p.current, e);
    }, [t, r, l, o, n, s, p, g]),
    N.useEffect(() => g, [g]),
    i ?? s
  );
}
function ve(e, t, n, r, i = !0, o) {
  let { registerFieldControl: s } = fe(),
    c = u(() => Symbol());
  a(() => {
    let a = c.current;
    if (!i) {
      s(a, void 0);
      return;
    }
    s(a, { controlRef: e, getValue: r, id: t, name: o, value: n });
  }, [e, i, r, t, o, s, c, n]),
    a(() => {
      let e = c.current;
      return () => {
        s(e, void 0);
      };
    }, [s, c]);
}
var ye = N.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        id: o,
        name: s,
        value: l,
        disabled: u = !1,
        onValueChange: d,
        defaultValue: f,
        autoFocus: m = !1,
        style: h,
        ...g
      } = e,
      {
        state: _,
        name: b,
        disabled: C,
        setTouched: w,
        setDirty: T,
        validityData: E,
        setFocused: D,
        setFilled: O,
        validationMode: k,
        validation: A,
      } = fe(),
      { clearErrors: j } = me(),
      M = C || u,
      P = b ?? s,
      F = { ..._, disabled: M },
      { labelId: I } = ge(),
      L = _e({ id: o });
    a(() => {
      let e = l != null;
      A.inputRef.current?.value || (e && l !== ``)
        ? O(!0)
        : e && l === `` && O(!1);
    }, [A.inputRef, O, l]);
    let R = N.useRef(null);
    a(() => {
      m && R.current === y(p(R.current)) && D(!0);
    }, [m, D]);
    let [z] = v({
        controlled: l,
        default: f,
        name: `FieldControl`,
        state: `value`,
      }),
      B = l !== void 0,
      V = B ? z : void 0,
      H = c(() => A.inputRef.current?.value);
    return (
      ve(A.inputRef, L, V, H, !M, s),
      i(`input`, e, {
        ref: [t, R],
        state: F,
        props: [
          {
            id: L,
            disabled: M,
            name: P,
            ref: A.inputRef,
            "aria-labelledby": I,
            autoFocus: m,
            ...(B ? { value: V } : { defaultValue: f }),
            onChange(e) {
              let t = e.currentTarget.value;
              d?.(t, S(x, e.nativeEvent)),
                T(t !== (E.initialValue ?? ``)),
                O(t !== ``),
                e.nativeEvent.defaultPrevented || (j(P), A.change(t));
            },
            onFocus() {
              D(!0);
            },
            onBlur(e) {
              w(!0), D(!1), k === `onBlur` && A.commit(e.currentTarget.value);
            },
            onKeyDown(e) {
              e.currentTarget.tagName === `INPUT` &&
                e.key === `Enter` &&
                (w(!0), A.commit(e.currentTarget.value));
            },
          },
          g,
          (e) => A.getValidationProps(M, e),
        ],
        stateAttributesMapping: le,
      })
    );
  }),
  be = N.forwardRef(function (e, t) {
    return (0, P.jsx)(ye, { ref: t, ...e });
  });
function xe({ className: e, type: t, ...n }) {
  return (0, P.jsx)(be, {
    type: t,
    "data-slot": `input`,
    className: m(
      `h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,
      e
    ),
    ...n,
  });
}
function Se({
  id: e,
  entries: t,
  filters: n,
  onChange: r,
  count: i,
  savedCount: a,
}) {
  let o = [...new Set(t.map((e) => e.chain))].sort(),
    s = [
      ...new Set(
        t.flatMap((e) => (e.calledAt ? [e.calledAt.slice(0, 4)] : []))
      ),
    ]
      .sort()
      .reverse(),
    c = (e, t) => r({ ...n, [e]: t });
  return (0, P.jsxs)(`search`, {
    className: `collection-discovery`,
    "aria-label": `Search this collection`,
    children: [
      (0, P.jsxs)(`label`, {
        className: `discovery-search`,
        htmlFor: `${e}-search`,
        children: [
          (0, P.jsx)(j, { size: 20, "aria-hidden": `true` }),
          (0, P.jsx)(`span`, {
            className: `sr-only`,
            children: `Search token name or contract`,
          }),
          (0, P.jsx)(xe, {
            id: `${e}-search`,
            type: `search`,
            value: n.query,
            placeholder: `Find a token. Trace its story.`,
            maxLength: 140,
            "aria-controls": `${e}-items`,
            onChange: (e) => c(`query`, e.target.value),
          }),
        ],
      }),
      (0, P.jsxs)(`div`, {
        className: `discovery-filters`,
        children: [
          (0, P.jsxs)(`label`, {
            children: [
              (0, P.jsx)(`span`, { children: `Chain` }),
              (0, P.jsxs)(`select`, {
                value: n.chain,
                onChange: (e) => c(`chain`, e.target.value),
                children: [
                  (0, P.jsx)(`option`, { value: ``, children: `All chains` }),
                  o.map((e) => (0, P.jsx)(`option`, { children: e }, e)),
                ],
              }),
            ],
          }),
          (0, P.jsxs)(`label`, {
            children: [
              (0, P.jsx)(`span`, { children: `Channel report` }),
              (0, P.jsxs)(`select`, {
                value: n.minMultiple,
                onChange: (e) => c(`minMultiple`, Number(e.target.value)),
                children: [
                  (0, P.jsx)(`option`, { value: 0, children: `All multiples` }),
                  [10, 25, 50, 100, 250].map((e) =>
                    (0, P.jsxs)(
                      `option`,
                      { value: e, children: [e, `x or more`] },
                      e
                    )
                  ),
                ],
              }),
            ],
          }),
          (0, P.jsxs)(`label`, {
            children: [
              (0, P.jsx)(`span`, { children: `Call year` }),
              (0, P.jsxs)(`select`, {
                value: n.year,
                onChange: (e) => c(`year`, e.target.value),
                children: [
                  (0, P.jsx)(`option`, { value: ``, children: `All years` }),
                  s.map((e) => (0, P.jsx)(`option`, { children: e }, e)),
                ],
              }),
            ],
          }),
          (0, P.jsxs)(C, {
            variant: `ghost`,
            className: `discovery-saved`,
            "aria-pressed": n.savedOnly,
            onClick: () => c(`savedOnly`, !n.savedOnly),
            children: [
              (0, P.jsx)(O, {
                size: 17,
                fill: n.savedOnly ? `currentColor` : `none`,
              }),
              ` `,
              `Saved`,
              a ? ` (${a})` : ``,
            ],
          }),
          U(n) &&
            (0, P.jsxs)(C, {
              variant: `ghost`,
              onClick: () => r({ ...V }),
              children: [(0, P.jsx)(_, { size: 16 }), ` Reset`],
            }),
        ],
      }),
      (0, P.jsxs)(`div`, {
        className: `discovery-caption`,
        children: [
          (0, P.jsxs)(`output`, {
            "aria-live": `polite`,
            children: [i, ` `, i === 1 ? `match` : `matches`],
          }),
          (0, P.jsx)(`span`, {
            children: n.savedOnly
              ? `Saved in this browser only.`
              : `Multiples are channel reports. Price audits are separate.`,
          }),
        ],
      }),
    ],
  });
}
function Ce({
  id: e,
  label: t,
  itemIds: n,
  itemLabels: r,
  pageSize: i,
  entries: a,
  children: o,
}) {
  let [s, c] = (0, N.useState)(0),
    [l, u] = (0, N.useState)(!1),
    [d, f] = (0, N.useState)(null),
    [p, m] = (0, N.useState)({ ...V }),
    h = X(),
    g = (0, N.useRef)(null),
    _ = (0, N.useRef)(0),
    v = N.Children.toArray(o),
    y = a ? ee(a, p, h.ids) : v.map((e, t) => t),
    b = (0, N.useRef)(y);
  (0, N.useLayoutEffect)(() => {
    b.current = y;
  }, [y]);
  let x = Math.max(1, Math.ceil(y.length / i)),
    S = Math.min(s, x - 1),
    w = l ? 0 : S * i,
    T = l ? y.length : Math.min(w + i, y.length),
    E = new Set(l ? y : y.slice(w, T)),
    D = y.length ? w + 1 : 0,
    j = (e) => {
      m(e), c(0), (_.current = 0);
    };
  (0, N.useEffect)(() => {
    let e = g.current;
    if (!e) return;
    let t = 0,
      r = (t) => {
        let n = document.getElementById(B(t)),
          r = n?.closest(`[data-collection-index]`);
        return !n || !r || !e.contains(r)
          ? null
          : { target: n, index: Number(r.dataset.collectionIndex) };
      },
      a = (t) => {
        let n = t.parentElement;
        for (; n && n !== e; )
          n instanceof HTMLDetailsElement && (n.open = !0),
            (n = n.parentElement);
      },
      o = (e, n) => {
        let o = r(e),
          s = o ? b.current.indexOf(o.index) : 0;
        o &&
          s < 0 &&
          ((s = o.index),
          n ? (0, M.flushSync)(() => m({ ...V })) : m({ ...V }));
        let l = o ? z(s, i) : 0;
        _.current !== l &&
          ((_.current = l), n ? (0, M.flushSync)(() => c(l)) : c(l)),
          o &&
            (a(o.target),
            cancelAnimationFrame(t),
            (t = requestAnimationFrame(() => {
              o.target.scrollIntoView({ block: `start`, behavior: `instant` }),
                o.target.hasAttribute(`tabindex`) || (o.target.tabIndex = -1),
                o.target.focus({ preventScroll: !0 });
            })));
      },
      s = () => {
        document.documentElement.dataset.storyReaderActive ||
          o(window.location.hash, !0);
      },
      l = (e) => {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
          return;
        let t = e.target?.closest(`.story-jump-list a[href]`);
        if (!t || t.target === `_blank`) return;
        let r = new URL(t.href);
        if (
          r.origin !== location.origin ||
          r.pathname !== location.pathname ||
          r.search !== location.search
        )
          return;
        let i = n.indexOf(B(r.hash));
        i >= 0 &&
          !b.current.includes(i) &&
          ((0, M.flushSync)(() => {
            m({ ...V }), c(0);
          }),
          (_.current = 0));
      },
      u = (e) => {
        if (
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          e.defaultPrevented
        )
          return;
        let t = e.target?.closest(`a[href]`);
        if (!t || t.target === `_blank`) return;
        let n = new URL(t.href, window.location.href);
        n.origin !== window.location.origin ||
          n.pathname !== window.location.pathname ||
          n.search !== window.location.search ||
          (r(n.hash)
            ? (e.preventDefault(),
              o(n.hash, !0),
              window.location.hash !== n.hash &&
                (window.location.hash = n.hash))
            : o(n.hash, !0));
      };
    return (
      o(window.location.hash, !1),
      document.addEventListener(`click`, u),
      document.addEventListener(`click`, l, !0),
      window.addEventListener(`hashchange`, s),
      () => {
        cancelAnimationFrame(t),
          document.removeEventListener(`click`, u),
          document.removeEventListener(`click`, l, !0),
          window.removeEventListener(`hashchange`, s);
      }
    );
  }, [i, n]);
  let U = (e) => {
      let t = z(Math.max(0, y.indexOf(e)), i);
      (_.current = t), (0, M.flushSync)(() => c(t));
      let r = document.getElementById(n[e]);
      window.location.hash === `#${n[e]}`
        ? r &&
          (r.scrollIntoView({ block: `start`, behavior: `instant` }),
          (r.tabIndex = -1),
          r.focus({ preventScroll: !0 }))
        : window.location.assign(`#${n[e]}`);
    },
    W = (r) =>
      (0, P.jsx)(F, {
        className: `collection-pagination`,
        "aria-label": `${t}: pages${r === `bottom` ? ` (bottom)` : ``}`,
        children: (0, P.jsxs)(I, {
          children: [
            (0, P.jsx)(L, {
              children:
                S > 0 && !l
                  ? (0, P.jsx)(R, {
                      href: `#${n[y[(S - 1) * i]]}`,
                      className: `collection-arrow`,
                      "aria-label": `Previous page`,
                      "aria-controls": `${e}-items`,
                      children: (0, P.jsx)(k, {
                        size: 18,
                        "aria-hidden": `true`,
                      }),
                    })
                  : (0, P.jsx)(C, {
                      className: `collection-arrow`,
                      variant: `ghost`,
                      disabled: !0,
                      "aria-label": `Previous page`,
                      children: (0, P.jsx)(k, {
                        size: 18,
                        "aria-hidden": `true`,
                      }),
                    }),
            }),
            (0, P.jsx)(L, {
              children: (0, P.jsx)(`span`, {
                className: `collection-page-count`,
                children: l ? `All` : `${S + 1} / ${x}`,
              }),
            }),
            (0, P.jsx)(L, {
              children:
                S + 1 < x && !l
                  ? (0, P.jsx)(R, {
                      href: `#${n[y[(S + 1) * i]]}`,
                      className: `collection-arrow`,
                      "aria-label": `Next page`,
                      "aria-controls": `${e}-items`,
                      children: (0, P.jsx)(A, {
                        size: 18,
                        "aria-hidden": `true`,
                      }),
                    })
                  : (0, P.jsx)(C, {
                      className: `collection-arrow`,
                      variant: `ghost`,
                      disabled: !0,
                      "aria-label": `Next page`,
                      children: (0, P.jsx)(A, {
                        size: 18,
                        "aria-hidden": `true`,
                      }),
                    }),
            }),
          ],
        }),
      });
  return (0, P.jsxs)(`div`, {
    className: `paged-collection`,
    id: e,
    ref: g,
    children: [
      (0, P.jsx)(`noscript`, {
        children: (0, P.jsx)(`style`, {
          children: `@layer base { .site-shell .collection-item[hidden] { display: block !important; } } .collection-controls, .collection-discovery, .collection-save { display: none !important; }`,
        }),
      }),
      a &&
        (0, P.jsx)(Se, {
          id: e,
          entries: a,
          filters: p,
          onChange: j,
          count: y.length,
          savedCount: a.filter((e) => h.ids.includes(H(e.id))).length,
        }),
      (0, P.jsxs)(`div`, {
        className: `collection-controls collection-toolbar`,
        children: [
          (0, P.jsxs)(`div`, {
            className: `collection-summary`,
            children: [
              (0, P.jsxs)(`output`, {
                className: `collection-range`,
                "aria-live": `polite`,
                "aria-atomic": `true`,
                children: [
                  t,
                  ` `,
                  D,
                  `–`,
                  T,
                  ` `,
                  (0, P.jsxs)(`span`, { children: [`of `, y.length] }),
                ],
              }),
              (0, P.jsx)(C, {
                variant: `ghost`,
                className: `collection-show-all`,
                onClick: () => {
                  u(!l);
                },
                "aria-expanded": l,
                "aria-controls": `${e}-items`,
                children: l ? `Show pages` : `Show all`,
              }),
            ],
          }),
          (0, P.jsxs)(`label`, {
            className: `collection-token-picker`,
            children: [
              (0, P.jsx)(`span`, { children: `Jump to a token` }),
              (0, P.jsxs)(`select`, {
                "aria-controls": `${e}-items`,
                value: ``,
                onChange: (e) => U(Number(e.target.value)),
                children: [
                  (0, P.jsx)(`option`, {
                    value: ``,
                    disabled: !0,
                    children: `Choose a token`,
                  }),
                  y.map((e) =>
                    (0, P.jsx)(`option`, { value: e, children: r[e] }, n[e])
                  ),
                ],
              }),
            ],
          }),
          W(`top`),
        ],
      }),
      (0, P.jsxs)(`div`, {
        className: `collection-items`,
        id: `${e}-items`,
        children: [
          y.length === 0 &&
            (0, P.jsxs)(`div`, {
              className: `collection-empty`,
              children: [
                (0, P.jsx)(`h3`, { children: `No stories match yet.` }),
                (0, P.jsx)(`p`, {
                  children: p.savedOnly
                    ? `Save a story with its bookmark, or broaden your filters.`
                    : `Try a different name, paste the contract exactly, or clear a filter.`,
                }),
                (0, P.jsx)(C, {
                  variant: `outline`,
                  onClick: () => j({ ...V }),
                  children: `Clear filters`,
                }),
              ],
            }),
          v.map((e, t) =>
            (0, P.jsxs)(
              `div`,
              {
                className: `collection-item`,
                "data-collection-index": t,
                hidden: !E.has(t),
                children: [
                  a &&
                    E.has(t) &&
                    (0, P.jsxs)(C, {
                      variant: `ghost`,
                      className: `collection-save`,
                      "aria-pressed": h.ids.includes(H(n[t])),
                      "aria-label": `${
                        h.ids.includes(H(n[t])) ? `Unsave` : `Save`
                      } ${a[t].symbol || a[t].name}`,
                      onClick: () => h.toggle(H(n[t])),
                      children: [
                        (0, P.jsx)(O, {
                          size: 17,
                          fill: h.ids.includes(H(n[t]))
                            ? `currentColor`
                            : `none`,
                        }),
                        h.ids.includes(H(n[t])) ? `Saved` : `Save story`,
                      ],
                    }),
                  d === t ? null : e,
                ],
              },
              n[t]
            )
          ),
        ],
      }),
      (0, P.jsxs)(`div`, {
        className: `collection-controls collection-bottom`,
        children: [
          (0, P.jsxs)(`span`, {
            children: [t, ` `, D, `–`, T, ` of `, y.length],
          }),
          W(`bottom`),
        ],
      }),
      (0, P.jsx)(oe, {
        items: v,
        itemIds: n,
        itemLabels: r,
        scope: g,
        onSelection: f,
        visibleIndices: y,
      }),
    ],
  });
}
export { Ce as PagedCollection };
