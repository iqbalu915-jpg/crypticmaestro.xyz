import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./arrow-up-right-BpVuVI5W.js";
import { n as i, t as a } from "./play-DweN3RHB.js";
import { t as o } from "./button-BFvZYHow.js";
var s = e(t(), 1);
function c(e) {
  return e.map((e) => e.id).join(`:`);
}
function l(e, t) {
  return { duration: e * 7, delay: (t + 1 - e) * 7 };
}
function u(e, t, n) {
  return (
    e > 1 &&
    Number.isFinite(t) &&
    t > 0 &&
    Number.isFinite(n) &&
    n > 0 &&
    (e - 1) * t > n
  );
}
var d = n();
function f({ items: e }) {
  let t = c(e),
    n = (0, s.useRef)(null),
    f = (0, s.useRef)(null),
    p = (0, s.useRef)(0),
    [m, h] = (0, s.useState)(!1),
    [g, _] = (0, s.useState)(!1),
    [v, y] = (0, s.useState)(!0),
    [b, x] = (0, s.useState)(!1);
  return (
    (0, s.useEffect)(() => {
      let t = n.current,
        r = f.current,
        i = r?.querySelector(`a`);
      if (
        !t ||
        !r ||
        !i ||
        typeof ResizeObserver > `u` ||
        typeof IntersectionObserver > `u` ||
        !CSS.supports(`translate`, `1px 0`) ||
        !CSS.supports(`overflow`, `clip`) ||
        !CSS.supports(`selector(:has(a:focus-visible))`)
      )
        return () => cancelAnimationFrame(p.current);
      let a = window.matchMedia(
          `(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)`
        ),
        o = () => {
          let t = i.offsetWidth + parseFloat(getComputedStyle(r).columnGap);
          h(a.matches && u(e.length, t, r.clientWidth));
        },
        s = () => y(!document.hidden),
        c = new ResizeObserver(o);
      c.observe(r), c.observe(i);
      let l = new IntersectionObserver(([e]) => _(e.isIntersecting), {
        threshold: 0,
      });
      return (
        l.observe(t),
        a.addEventListener(`change`, o),
        document.addEventListener(`visibilitychange`, s),
        o(),
        s(),
        () => {
          c.disconnect(),
            l.disconnect(),
            a.removeEventListener(`change`, o),
            document.removeEventListener(`visibilitychange`, s),
            cancelAnimationFrame(p.current);
        }
      );
    }, [e.length, t]),
    (0, d.jsxs)(`nav`, {
      ref: n,
      className: `story-ticker`,
      "aria-label": `Jump to a featured story`,
      "data-enhanced": m,
      "data-paused": b,
      "data-visible": g && v,
      style: { "--ticker-count": e.length },
      children: [
        (0, d.jsxs)(`div`, {
          className: `ticker-toolbar`,
          children: [
            (0, d.jsx)(`span`, {
              className: `ticker-browse-hint`,
              children: `Pick a story. Trace the call.`,
            }),
            (0, d.jsxs)(o, {
              variant: `ghost`,
              className: `ticker-toggle`,
              onClick: () => x((e) => !e),
              "aria-controls": `call-token-band`,
              "aria-label": b ? `Resume token ticker` : `Pause token ticker`,
              children: [
                b
                  ? (0, d.jsx)(a, { size: 14, "aria-hidden": `true` })
                  : (0, d.jsx)(i, { size: 14, "aria-hidden": `true` }),
                b ? `Resume ticker` : `Pause ticker`,
              ],
            }),
          ],
        }),
        (0, d.jsx)(
          `div`,
          {
            ref: f,
            id: `call-token-band`,
            className: `story-jump-list`,
            onFocus: (e) => {
              let t = e.target;
              !(t instanceof HTMLAnchorElement) ||
                !t.matches(`:focus-visible`) ||
                (cancelAnimationFrame(p.current),
                (p.current = requestAnimationFrame(() => {
                  t.scrollIntoView({
                    inline: `nearest`,
                    block: `nearest`,
                    behavior: `instant`,
                  });
                })));
            },
            children: e.map((t, n) => {
              let i = l(e.length, n);
              return (0, d.jsxs)(
                `a`,
                {
                  href: `#story-${t.id}`,
                  className:
                    t.status === `audited`
                      ? `jump-audited`
                      : t.status === `claim_discrepancy`
                      ? `jump-discrepancy`
                      : ``,
                  style: {
                    "--ticker-duration": `${i.duration}s`,
                    "--ticker-delay": `${i.delay}s`,
                  },
                  children: [
                    (0, d.jsxs)(`span`, {
                      className: `story-ticket-meta`,
                      children: [
                        (0, d.jsxs)(`span`, {
                          children: [`Story `, String(t.rank).padStart(2, `0`)],
                        }),
                        (0, d.jsx)(r, { size: 18, "aria-hidden": `true` }),
                      ],
                    }),
                    (0, d.jsx)(`strong`, {
                      className: `story-ticket-name`,
                      children: t.name,
                    }),
                    (0, d.jsxs)(`span`, {
                      className: `story-ticket-result`,
                      children: [
                        (0, d.jsxs)(`span`, {
                          className: `story-ticket-value`,
                          children: [
                            t.multiple,
                            (0, d.jsx)(`span`, { children: `x` }),
                          ],
                        }),
                        (0, d.jsx)(`span`, {
                          className: `story-ticket-label`,
                          children: `Reported in channel`,
                        }),
                      ],
                    }),
                    (0, d.jsxs)(`span`, {
                      className: `story-ticket-action`,
                      children: [
                        (0, d.jsx)(`span`, { children: `Explore story` }),
                        (0, d.jsx)(`span`, {
                          className: `story-ticket-status`,
                          children:
                            t.status === `audited`
                              ? `Separate price audit`
                              : t.status === `claim_discrepancy`
                              ? `Audit discrepancy`
                              : `Original call & update`,
                        }),
                      ],
                    }),
                  ],
                },
                t.id
              );
            }),
          },
          t
        ),
      ],
    })
  );
}
export { f as StoryTicker };
