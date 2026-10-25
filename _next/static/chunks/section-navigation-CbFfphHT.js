import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
var r = e(t(), 1),
  i = n();
function a({ jungle: e }) {
  let [t, n] = (0, r.useState)(`top`),
    [a, o] = (0, r.useState)(null),
    [s, c] = (0, r.useState)(null),
    l = (0, r.useRef)(null),
    u = e ? `jungle-archive` : `archive`,
    d = s ?? a ?? t;
  return (
    (0, r.useEffect)(() => {
      let e = l.current;
      if (!e) return;
      let t = 0,
        n = () => {
          t = 0;
          let n = e.querySelector(`a[href="#${d}"]`);
          n &&
            (e.style.setProperty(`--nav-marker-x`, `${n.offsetLeft}px`),
            e.style.setProperty(`--nav-marker-y`, `${n.offsetTop}px`),
            e.style.setProperty(`--nav-marker-width`, `${n.offsetWidth}px`),
            e.style.setProperty(`--nav-marker-height`, `${n.offsetHeight}px`),
            (e.dataset.indicatorReady = `true`));
        },
        r = () => {
          t ||= requestAnimationFrame(n);
        },
        i = typeof ResizeObserver == `function` ? new ResizeObserver(r) : null;
      return (
        i?.observe(e),
        e.querySelectorAll(`a`).forEach((e) => i?.observe(e)),
        window.addEventListener(`resize`, r),
        r(),
        () => {
          i?.disconnect(),
            window.removeEventListener(`resize`, r),
            cancelAnimationFrame(t);
        }
      );
    }, [d, u]),
    (0, r.useEffect)(() => {
      let e = l.current?.closest(`header`),
        t = e?.closest(`main`);
      if (!e || !t) return;
      let r = [`top`, `stories`, u, `methodik`],
        i = 0,
        a = e.getBoundingClientRect().height,
        o = () => {
          i = 0;
          let o = `top`;
          for (let e of r) {
            let n = t.querySelector(`#${e}`);
            !n ||
              n.getClientRects().length === 0 ||
              (n.getBoundingClientRect().top <= a + 70 && (o = n.id));
          }
          n(o), (e.dataset.scrolled = String(window.scrollY > 40));
        },
        s = () => {
          i ||= requestAnimationFrame(o);
        },
        c = () => {
          (a = e.getBoundingClientRect().height),
            t.style.setProperty(`--header-offset`, `${a + 24}px`),
            s();
        },
        d = typeof ResizeObserver == `function` ? new ResizeObserver(c) : null;
      return (
        d?.observe(e),
        d?.observe(t),
        c(),
        window.addEventListener(`resize`, c),
        window.addEventListener(`scroll`, s, { passive: !0 }),
        window.addEventListener(`hashchange`, s),
        () => {
          d?.disconnect(),
            cancelAnimationFrame(i),
            window.removeEventListener(`scroll`, s),
            window.removeEventListener(`hashchange`, s),
            window.removeEventListener(`resize`, c),
            t.style.removeProperty(`--header-offset`),
            delete e.dataset.scrolled;
        }
      );
    }, [u]),
    (0, i.jsxs)(`nav`, {
      className: `main-nav`,
      "aria-label": `Page navigation`,
      ref: l,
      "data-highlighted": d,
      onPointerOver: (e) => {
        if (e.pointerType !== `mouse`) return;
        let t = e.target.closest(`a`);
        o(t ? t.hash.slice(1) : null);
      },
      onPointerLeave: () => o(null),
      onFocusCapture: (e) => {
        let t = e.target.closest(`a`);
        o(null), t?.matches(`:focus-visible`) ? c(t.hash.slice(1)) : c(null);
      },
      onBlurCapture: (e) => {
        e.currentTarget.contains(e.relatedTarget) || c(null);
      },
      children: [
        (0, i.jsx)(`span`, {
          className: `nav-marker`,
          "aria-hidden": `true`,
          children: (0, i.jsx)(`span`, {}),
        }),
        (0, i.jsx)(`a`, {
          href: `#top`,
          "aria-current": t === `top` ? `location` : void 0,
          children: `Home`,
        }),
        (0, i.jsx)(`a`, {
          href: `#stories`,
          "aria-current": t === `stories` ? `location` : void 0,
          children: `Stories`,
        }),
        (0, i.jsxs)(`a`, {
          href: `#${u}`,
          "aria-current": t === u ? `location` : void 0,
          children: [
            (0, i.jsx)(`span`, {
              className: `nav-full-label`,
              children: e ? `Source archive` : `10x archive`,
            }),
            (0, i.jsx)(`span`, {
              className: `nav-short-label`,
              "aria-hidden": `true`,
              children: e ? `Sources` : `Archive`,
            }),
          ],
        }),
        (0, i.jsxs)(`a`, {
          href: `#methodik`,
          "aria-current": t === `methodik` ? `location` : void 0,
          children: [
            (0, i.jsx)(`span`, {
              className: `nav-full-label`,
              children: `Sources & checks`,
            }),
            (0, i.jsx)(`span`, {
              className: `nav-short-label`,
              "aria-hidden": `true`,
              children: `Checks`,
            }),
          ],
        }),
      ],
    })
  );
}
export { a as SectionNavigation };
