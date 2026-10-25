import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { E as r, I as i, M as a, r as o, t as s } from "./utils-CaPlbFnG.js";
import {
  A as c,
  B as l,
  C as u,
  H as d,
  S as f,
  X as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  f as v,
  g as y,
  h as b,
  i as x,
  k as S,
  l as C,
  m as w,
  n as T,
  o as E,
  p as D,
  r as O,
  s as k,
  t as A,
  u as j,
  v as M,
  x as N,
  y as P,
  z as F,
} from "./useOpenInteractionType-BAWykS4S.js";
import {
  $ as I,
  Q as L,
  a as R,
  at as z,
  ct as ee,
  d as te,
  ft as ne,
  st as B,
  v as V,
  y as H,
} from "./composite-DaIlOdtn.js";
import { t as U } from "./button-BFvZYHow.js";
var W = e(t(), 1),
  G = W.createContext(void 0);
function K(e) {
  let t = W.useContext(G);
  if (!e && t === void 0) throw Error(a(27));
  return t;
}
var q = W.forwardRef(function (e, t) {
    let { render: n, className: i, style: a, forceRender: o = !1, ...s } = e,
      c = K(),
      u = c.useState(`open`),
      d = c.useState(`nested`),
      f = c.useState(`mounted`);
    return r(`div`, e, {
      state: { open: u, transitionStatus: c.useState(`transitionStatus`) },
      ref: [c.context.backdropRef, t],
      stateAttributesMapping: l,
      props: [
        {
          role: `presentation`,
          hidden: !f,
          style: { userSelect: `none`, WebkitUserSelect: `none` },
        },
        s,
      ],
      enabled: o || !d,
    });
  }),
  J = W.forwardRef(function (e, t) {
    let {
        render: n,
        className: i,
        style: a,
        disabled: s = !1,
        nativeButton: c = !0,
        ...l
      } = e,
      u = K(),
      d = u.useState(`open`),
      { getButtonProps: f, buttonRef: p } = o({ disabled: s, native: c }),
      m = { disabled: s };
    function h(e) {
      d && u.setOpen(!1, B(ee, e.nativeEvent));
    }
    return r(`button`, e, {
      state: m,
      ref: [t, p],
      props: [{ onClick: h }, l, f],
    });
  }),
  Y = W.forwardRef(function (e, t) {
    let { render: n, className: i, style: a, id: o, ...s } = e,
      c = K(),
      l = z(o);
    return (
      c.useSyncedValueWithCleanup(`descriptionElementId`, l),
      r(`p`, e, { ref: t, props: [{ id: l }, s] })
    );
  }),
  X = W.createContext(void 0);
function Z() {
  let e = W.useContext(X);
  if (e === void 0) throw Error(a(26));
  return e;
}
var re = {
    ...F,
    ...V,
    nestedDialogOpen(e) {
      return e ? { "data-nested-dialog-open": `` } : null;
    },
  },
  Q = n(),
  ie = W.forwardRef(function (e, t) {
    let {
        render: n,
        className: i,
        style: a,
        finalFocus: o,
        initialFocus: s,
        ...c
      } = e,
      l = K(),
      d = l.useState(`descriptionElementId`),
      f = l.useState(`disablePointerDismissal`),
      p = l.useState(`floatingRootContext`),
      m = l.useState(`popupProps`),
      h = l.useState(`modal`),
      g = l.useState(`mounted`),
      _ = l.useState(`nested`),
      y = l.useState(`nestedOpenDialogCount`),
      b = l.useState(`open`),
      x = l.useState(`openMethod`),
      S = l.useState(`titleElementId`),
      w = l.useState(`transitionStatus`),
      T = l.useState(`role`),
      E = p.useState(`floatingId`);
    Z(),
      te({
        open: b,
        ref: l.context.popupRef,
        onComplete() {
          b && l.context.onOpenChangeComplete?.(!0);
        },
      });
    let D = s === void 0 ? v(l.context.popupRef) : s,
      O = y > 0,
      k = l.useStateSetter(`popupElement`),
      A = r(`div`, e, {
        state: { open: b, nested: _, transitionStatus: w, nestedDialogOpen: O },
        props: [
          m,
          {
            id: E,
            "aria-labelledby": S,
            "aria-describedby": d,
            role: T,
            ...C,
            hidden: !g,
            onKeyDown(e) {
              R.has(e.key) && e.stopPropagation();
            },
            style: { "--nested-dialogs": y },
          },
          c,
        ],
        ref: [t, l.context.popupRef, k],
        stateAttributesMapping: re,
      });
    return (0,
    Q.jsx)(u, { context: p, openInteractionType: x, disabled: !g, closeOnFocusOut: !f, initialFocus: D, returnFocus: o, modal: h !== !1, restoreFocus: `popup`, children: A });
  }),
  ae = W.forwardRef(function (e, t) {
    let { keepMounted: n = !1, ...r } = e,
      i = K(),
      a = i.useState(`mounted`),
      o = i.useState(`modal`),
      s = i.useState(`open`);
    return a || n
      ? (0, Q.jsx)(X.Provider, {
          value: n,
          children: (0, Q.jsxs)(S, {
            ref: t,
            ...r,
            children: [
              a &&
                o === !0 &&
                (0, Q.jsx)(O, {
                  ref: i.context.internalBackdropRef,
                  inert: H(!s),
                }),
              e.children,
            ],
          }),
        })
      : null;
  });
function oe({ store: e, parentContext: t, isDrawer: n }) {
  let r = e.useState(`open`),
    a = e.useState(`disablePointerDismissal`),
    o = e.useState(`modal`),
    s = e.useState(`popupElement`),
    c = e.useState(`floatingRootContext`),
    [l, u] = W.useState(0),
    [d, f] = W.useState(0),
    p = l === 0,
    m = N(c, {
      outsidePressEvent() {
        return e.context.internalBackdropRef.current ||
          e.context.backdropRef.current
          ? `intentional`
          : {
              mouse: o === `trap-focus` ? `sloppy` : `intentional`,
              touch: `sloppy`,
            };
      },
      outsidePress(t) {
        if (
          !e.context.outsidePressEnabledRef.current ||
          (`button` in t && t.button !== 0)
        )
          return !1;
        if (`touches` in t) {
          if (t.type === `touchend`) {
            if (t.changedTouches.length !== 1 || t.touches.length !== 0)
              return !1;
          } else if (t.touches.length !== 1) return !1;
        }
        let n = I(t);
        if (p && !a) {
          if (o) {
            let t = e.context.internalBackdropRef.current,
              r = e.context.backdropRef.current;
            return t || r
              ? t === n ||
                  r === n ||
                  (L(n, s) && !n?.hasAttribute(`data-base-ui-portal`))
              : !0;
          }
          return !0;
        }
        return !1;
      },
      escapeKey: p,
    });
  return (
    T(r && o === !0, s),
    e.useContextCallback(`onNestedDialogOpen`, (e, t) => {
      u(e), f(t);
    }),
    i(
      () => (
        t?.onNestedDialogOpen &&
          (r
            ? t.onNestedDialogOpen(l + 1, d + +!!n)
            : t.onNestedDialogOpen(0, 0)),
        () => {
          t?.onNestedDialogOpen && r && t.onNestedDialogOpen(0, 0);
        }
      ),
      [n, r, l, d, t]
    ),
    y(e, {
      activeTriggerProps: m.reference,
      inactiveTriggerProps: m.trigger,
      popupProps: m.floating,
      nestedOpenDialogCount: l,
      nestedOpenDrawerCount: d,
    }),
    null
  );
}
var se = {
    ...k,
    modal: (e) => e.modal,
    nested: (e) => e.nested,
    nestedOpenDialogCount: (e) => e.nestedOpenDialogCount,
    nestedOpenDrawerCount: (e) => e.nestedOpenDrawerCount,
    disablePointerDismissal: (e) => e.disablePointerDismissal,
    openMethod: (e) => e.openMethod,
    descriptionElementId: (e) => e.descriptionElementId,
    titleElementId: (e) => e.titleElementId,
    viewportElement: (e) => e.viewportElement,
    role: (e) => e.role,
  },
  ce = class extends g {
    constructor(e, t, n) {
      let r = new _(),
        i = le(e, r, t, n);
      super(i, ue(r), se);
    }
    setOpen = (e, t) => {
      if (
        ((t.preventUnmountOnClose = () => {
          this.set(`preventUnmountingOnClose`, !0);
        }),
        !e &&
          t.trigger == null &&
          this.state.activeTriggerId != null &&
          (t.trigger = this.state.activeTriggerElement ?? void 0),
        this.context.onOpenChange?.(e, t),
        t.isCanceled)
      )
        return;
      this.state.floatingRootContext.dispatchOpenChange(e, t);
      let n = { open: e };
      D(n, e, t.trigger), this.update(n);
    };
  };
function le(e, t, n, r = !1) {
  let i = {
    ...h(),
    modal: !0,
    disablePointerDismissal: !1,
    viewportElement: null,
    descriptionElementId: void 0,
    titleElementId: void 0,
    openMethod: null,
    nested: !1,
    nestedOpenDialogCount: 0,
    nestedOpenDrawerCount: 0,
    role: `dialog`,
    ...e,
  };
  return (i.floatingRootContext = E(t, n, r)), i;
}
function ue(e) {
  return {
    popupRef: W.createRef(),
    backdropRef: W.createRef(),
    internalBackdropRef: W.createRef(),
    outsidePressEnabledRef: { current: !0 },
    triggerElements: e,
    onOpenChange: void 0,
    onOpenChangeComplete: void 0,
  };
}
function de(e, t) {
  let {
      children: n,
      open: r,
      defaultOpen: i = !1,
      onOpenChange: a,
      onOpenChangeComplete: o,
      disablePointerDismissal: s = !1,
      modal: c = !0,
      actionsRef: l,
      handle: u,
      triggerId: d,
      defaultTriggerId: f = null,
    } = t,
    p = e === `drawer`,
    h = e === `alert-dialog`,
    g = h ? !0 : c,
    _ = h || s,
    v = h ? `alertdialog` : `dialog`,
    y = K(!0),
    x = { modal: g, disablePointerDismissal: _, nested: y != null, role: v },
    S = m(
      (e, t) =>
        new ce(
          { open: i, openProp: r, activeTriggerId: f, triggerIdProp: d, ...x },
          e,
          t
        ),
      !0
    );
  S.useControlledProp(`openProp`, r),
    S.useControlledProp(`triggerIdProp`, d),
    S.useSyncedValues(x),
    S.useContextCallback(`onOpenChange`, a),
    S.useContextCallback(`onOpenChangeComplete`, o);
  let C = S.useState(`open`),
    T = S.useState(`mounted`),
    E = S.useState(`payload`);
  M(S, C), w(S);
  let { forceUnmount: D } = b(C, S);
  W.useImperativeHandle(
    l,
    () => ({ unmount: D, close: () => S.setOpen(!1, B(ne)) }),
    [D, S]
  );
  let O = C || T;
  return (0, Q.jsxs)(G.Provider, {
    value: S,
    children: [
      u && (0, Q.jsx)(j, { handle: u, store: S }),
      O && (0, Q.jsx)(oe, { store: S, parentContext: y?.context, isDrawer: p }),
      typeof n == `function` ? n({ payload: E }) : n,
    ],
  });
}
function fe(e) {
  return de(`dialog`, e);
}
var pe = W.forwardRef(function (e, t) {
    let { render: n, className: i, style: a, id: o, ...s } = e,
      c = K(),
      l = z(o);
    return (
      c.useSyncedValueWithCleanup(`titleElementId`, l),
      r(`h2`, e, { ref: t, props: [{ id: l }, s] })
    );
  }),
  $ = W.forwardRef(function (e, t) {
    let {
        render: n,
        className: i,
        style: s,
        disabled: l = !1,
        nativeButton: u = !0,
        id: p,
        payload: m,
        handle: h,
        ...g
      } = e,
      _ = K(!0),
      v = x(h) ?? _;
    if (!v) throw Error(a(79));
    let y = z(p),
      b = v.useState(`floatingRootContext`),
      S = v.useState(`isOpenedByTrigger`, y),
      C = v.useState(`triggerPopupId`, y),
      w = W.useRef(null),
      { registerTrigger: T, isMountedByThisTrigger: E } = P(y, w, v, {
        payload: m,
      }),
      { getButtonProps: D, buttonRef: O } = o({ disabled: l, native: u }),
      k = f(b),
      j = A(
        () => v.select(`open`),
        (e) => {
          v.set(`openMethod`, e);
        }
      ),
      M = { disabled: l, open: S },
      N = v.useState(`triggerProps`, E);
    return r(`button`, e, {
      state: M,
      ref: [O, t, T, w],
      props: [
        k.reference,
        N,
        j,
        {
          [c]: ``,
          id: y,
          "aria-haspopup": `dialog`,
          "aria-expanded": S,
          "aria-controls": C,
        },
        g,
        D,
      ],
      stateAttributesMapping: d,
    });
  });
function me({ ...e }) {
  return (0, Q.jsx)(fe, { "data-slot": `dialog`, ...e });
}
function he({ ...e }) {
  return (0, Q.jsx)($, { "data-slot": `dialog-trigger`, ...e });
}
function ge({ ...e }) {
  return (0, Q.jsx)(ae, { "data-slot": `dialog-portal`, ...e });
}
function _e({ className: e, ...t }) {
  return (0, Q.jsx)(q, {
    "data-slot": `dialog-overlay`,
    className: s(
      `fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0`,
      e
    ),
    ...t,
  });
}
function ve({ className: e, children: t, showCloseButton: n = !0, ...r }) {
  return (0, Q.jsxs)(ge, {
    children: [
      (0, Q.jsx)(_e, {}),
      (0, Q.jsxs)(ie, {
        "data-slot": `dialog-content`,
        className: s(
          `fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,
          e
        ),
        ...r,
        children: [
          t,
          n &&
            (0, Q.jsxs)(J, {
              "data-slot": `dialog-close`,
              render: (0, Q.jsx)(U, {
                variant: `ghost`,
                className: `absolute top-2 right-2`,
                size: `icon-sm`,
              }),
              children: [
                (0, Q.jsx)(p, {}),
                (0, Q.jsx)(`span`, { className: `sr-only`, children: `Close` }),
              ],
            }),
        ],
      }),
    ],
  });
}
function ye({ className: e, ...t }) {
  return (0, Q.jsx)(pe, {
    "data-slot": `dialog-title`,
    className: s(`font-heading text-base leading-none font-medium`, e),
    ...t,
  });
}
function be({ className: e, ...t }) {
  return (0, Q.jsx)(Y, {
    "data-slot": `dialog-description`,
    className: s(
      `text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground`,
      e
    ),
    ...t,
  });
}
export { he as a, ye as i, ve as n, be as r, me as t };
