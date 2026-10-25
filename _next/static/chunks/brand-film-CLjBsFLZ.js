import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { n as r, t as i } from "./play-DweN3RHB.js";
import { t as a } from "./rotate-ccw-CllOuoeu.js";
import { t as o } from "./button-BFvZYHow.js";
var s = e(t(), 1);
function c(e, t, n) {
  return !e && !t && n;
}
var l = n();
function u({ channel: e, children: t }) {
  let n = (0, s.useRef)(null),
    [u, d] = (0, s.useState)(!1),
    [f, p] = (0, s.useState)(!1),
    [m, h] = (0, s.useState)(!1),
    [g, _] = (0, s.useState)(!1);
  return (
    (0, s.useEffect)(() => {
      let e = matchMedia(`(prefers-reduced-motion: reduce)`),
        t = navigator.connection,
        n = () =>
          _(
            c(
              e.matches,
              t?.saveData === !0,
              typeof IntersectionObserver == `function`
            )
          );
      return (
        n(),
        e.addEventListener(`change`, n),
        t?.addEventListener(`change`, n),
        () => {
          e.removeEventListener(`change`, n),
            t?.removeEventListener(`change`, n);
        }
      );
    }, []),
    (0, s.useEffect)(() => {
      let e = n.current;
      if (!e || !g || m) return;
      let t = !1,
        r = !0,
        i = () => {
          t && !document.hidden && !u && !f
            ? e.play().catch((e) => {
                r &&
                  !(e instanceof DOMException && e.name === `AbortError`) &&
                  d(!0);
              })
            : e.pause();
        },
        a = new IntersectionObserver(
          ([e]) => {
            (t = e.isIntersecting), i();
          },
          { threshold: 0.15 }
        );
      return (
        a.observe(e),
        document.addEventListener(`visibilitychange`, i),
        () => {
          (r = !1),
            e.pause(),
            a.disconnect(),
            document.removeEventListener(`visibilitychange`, i);
        }
      );
    }, [g, u, f, m]),
    (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsxs)(`div`, {
          className: `cinematic-art`,
          "aria-hidden": `true`,
          children: [
            t,
            g &&
              !m &&
              (0, l.jsx)(`video`, {
                ref: n,
                className: `brand-film`,
                src: `/brand/${e}-film.mp4`,
                muted: !0,
                playsInline: !0,
                preload: `none`,
                "aria-hidden": `true`,
                onEnded: () => p(!0),
                onError: () => h(!0),
                onLoadedData: (e) => {
                  e.currentTarget.dataset.ready = `true`;
                },
              }),
            (0, l.jsx)(`div`, { className: `cinematic-shade` }),
          ],
        }),
        g &&
          !m &&
          (0, l.jsxs)(o, {
            variant: `ghost`,
            className: `brand-film-control`,
            "aria-label": f
              ? `Replay lion film`
              : u
              ? `Play lion film`
              : `Pause lion film`,
            onClick: () => {
              f && n.current
                ? ((n.current.currentTime = 0), p(!1), d(!1))
                : d(!u);
            },
            children: [
              f
                ? (0, l.jsx)(a, { size: 14 })
                : u
                ? (0, l.jsx)(i, { size: 14 })
                : (0, l.jsx)(r, { size: 14 }),
              (0, l.jsx)(`span`, {
                children: f ? `Replay film` : u ? `Play film` : `Pause film`,
              }),
            ],
          }),
      ],
    })
  );
}
export { u as BrandFilm };
