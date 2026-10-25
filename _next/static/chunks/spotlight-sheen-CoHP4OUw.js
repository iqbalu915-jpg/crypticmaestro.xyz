import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
var r = e(t(), 1);
function i(e) {
  let t = window.matchMedia(`(prefers-reduced-motion: reduce)`),
    n = e.closest(`.signal-row`);
  if (
    !n ||
    t.matches ||
    typeof IntersectionObserver > `u` ||
    typeof e.animate != `function`
  )
    return () => {};
  let r = window.matchMedia(`(hover: hover) and (pointer: fine)`),
    i,
    a = !1,
    o = !1,
    s = !1,
    c = () => {
      i?.cancel(), (i = void 0);
    },
    l = () => {
      if (i || !a || document.hidden || s || t.matches) return;
      let n = e.animate(
        [
          { transform: `translateX(0px)`, opacity: 1 },
          { transform: `translateX(560px)`, opacity: 1 },
        ],
        {
          duration: 2600,
          easing: `cubic-bezier(0.25, 0.1, 0.35, 1)`,
          iterations: 1,
        }
      );
      (i = n),
        (n.onfinish = n.oncancel =
          () => {
            i === n && (i = void 0);
          });
    },
    u = new IntersectionObserver(
      ([e]) => {
        (a = e.isIntersecting),
          a ? !o && !document.hidden && ((o = !0), l()) : c();
      },
      { threshold: 0.4 }
    );
  u.observe(n);
  let d = (e) => {
      e.pointerType === `mouse` && r.matches && l();
    },
    f = () => {
      document.hidden ? c() : a && !o && ((o = !0), l());
    },
    p = () => {
      t.matches && c();
    },
    m = () => {
      (s = !0), c();
    },
    h = () => {
      s = !1;
    };
  return (
    n.addEventListener(`pointerenter`, d),
    n.addEventListener(`focusin`, c),
    document.addEventListener(`visibilitychange`, f),
    t.addEventListener(`change`, p),
    window.addEventListener(`beforeprint`, m),
    window.addEventListener(`afterprint`, h),
    () => {
      c(),
        u.disconnect(),
        n.removeEventListener(`pointerenter`, d),
        n.removeEventListener(`focusin`, c),
        document.removeEventListener(`visibilitychange`, f),
        t.removeEventListener(`change`, p),
        window.removeEventListener(`beforeprint`, m),
        window.removeEventListener(`afterprint`, h);
    }
  );
}
var a = n();
function o({ path: e }) {
  let t = (0, r.useId)().replace(/:/g, ``),
    n = `spotlight-gold-${t}`,
    o = `spotlight-path-${t}`,
    s = (0, r.useRef)(null);
  return (
    (0, r.useEffect)(() => {
      let e = s.current;
      if (e) return i(e);
    }, [e]),
    (0, a.jsxs)(`g`, {
      className: `spotlight-sheen`,
      "aria-hidden": `true`,
      children: [
        (0, a.jsxs)(`defs`, {
          children: [
            (0, a.jsxs)(`linearGradient`, {
              id: n,
              x1: `0`,
              y1: `0`,
              x2: `1`,
              y2: `0`,
              children: [
                (0, a.jsx)(`stop`, {
                  offset: `0`,
                  stopColor: `var(--spotlight-gold)`,
                  stopOpacity: `0`,
                }),
                (0, a.jsx)(`stop`, {
                  offset: `0.28`,
                  stopColor: `var(--spotlight-gold)`,
                  stopOpacity: `0.35`,
                }),
                (0, a.jsx)(`stop`, {
                  offset: `0.44`,
                  stopColor: `var(--spotlight-champagne)`,
                  stopOpacity: `0.9`,
                }),
                (0, a.jsx)(`stop`, {
                  offset: `0.5`,
                  stopColor: `var(--spotlight-glint)`,
                }),
                (0, a.jsx)(`stop`, {
                  offset: `0.56`,
                  stopColor: `var(--spotlight-champagne)`,
                  stopOpacity: `0.9`,
                }),
                (0, a.jsx)(`stop`, {
                  offset: `0.72`,
                  stopColor: `var(--spotlight-gold)`,
                  stopOpacity: `0.35`,
                }),
                (0, a.jsx)(`stop`, {
                  offset: `1`,
                  stopColor: `var(--spotlight-gold)`,
                  stopOpacity: `0`,
                }),
              ],
            }),
            (0, a.jsx)(`mask`, {
              id: o,
              maskUnits: `userSpaceOnUse`,
              x: `-12`,
              y: `-12`,
              width: `424`,
              height: `74`,
              children: (0, a.jsx)(`path`, {
                d: e,
                fill: `none`,
                stroke: `white`,
                strokeWidth: `3.4`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
              }),
            }),
          ],
        }),
        (0, a.jsx)(`g`, {
          className: `spotlight-sheen-light`,
          children: (0, a.jsx)(`g`, {
            mask: `url(#${o})`,
            children: (0, a.jsx)(`rect`, {
              ref: s,
              className: `spotlight-sheen-band`,
              x: `-140`,
              y: `-12`,
              width: `140`,
              height: `74`,
              fill: `url(#${n})`,
            }),
          }),
        }),
      ],
    })
  );
}
export { o as SpotlightSheen };
