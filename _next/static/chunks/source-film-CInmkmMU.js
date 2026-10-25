import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./image-CekQzb8N.js";
import { L as i } from "./utils-CaPlbFnG.js";
import { t as a } from "./arrow-up-right-BpVuVI5W.js";
import { t as o } from "./button-BFvZYHow.js";
import { t as s } from "./feed-examples-DLDXzc0f.js";
var c = i(`arrow-down`, [
    [`path`, { d: `M12 5v14`, key: `s699le` }],
    [`path`, { d: `m19 12-7 7-7-7`, key: `1idqje` }],
  ]),
  l = i(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  u = i(`file-text`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
    [`path`, { d: `M16 13H8`, key: `t4e002` }],
    [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
  ]),
  d = e(t(), 1);
function f(e) {
  let t = Math.max(0, Math.min(1, Number.isFinite(e) ? e : 0));
  return {
    chapter: t < 0.34 ? 0 : t < 0.78 ? 1 : 2,
    reveal: Math.max(0, Math.min(1, (t - 0.18) / 0.32)),
    context: Math.max(0, Math.min(1, (t - 0.72) / 0.2)),
  };
}
var p = n(),
  m = [
    {
      label: `The call`,
      title: `Before the update.`,
      date: `4 Sep 2026 · 19:58 UTC`,
      copy: `Artificial Neko, introduced in cryptic_maestro. The original post is where this story begins.`,
    },
    {
      label: `The update`,
      title: `Then came 20x.`,
      date: `5 Sep 2026 · 17:50 UTC`,
      copy: `The channel reported 20x the following day. That is the post’s claim—not an independently verified return.`,
    },
    {
      label: `The source`,
      title: `Both posts. In context.`,
      date: `21h 51m between posts`,
      copy: `One original call and its linked follow-up. The timestamps show when they were published, not when a trade could have reached 20x.`,
    },
  ];
function h({ children: e }) {
  let t = (0, d.useRef)(null),
    n = (0, d.useRef)(null),
    [i, h] = (0, d.useState)(!1),
    [g, _] = (0, d.useState)(0),
    v = f(g),
    y = s.lioncall;
  (0, d.useEffect)(() => {
    let e = matchMedia(
        `(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)`
      ),
      n = t.current;
    if (!n) return;
    let r = 0,
      i = () => {
        if (((r = 0), !e.matches || document.hidden)) return;
        let t = n.getBoundingClientRect(),
          i =
            parseFloat(
              getComputedStyle(n).getPropertyValue(`--header-offset`)
            ) || 108,
          a = n.querySelector(`.source-film-stage`),
          o = n.offsetHeight - (a?.offsetHeight ?? 640);
        t.bottom < 0 ||
          t.top > innerHeight ||
          _(Math.max(0, Math.min(1, (i - t.top) / Math.max(1, o))));
      },
      a = () => {
        r ||= requestAnimationFrame(i);
      },
      o = () => {
        h(e.matches), a();
      };
    return (
      o(),
      e.addEventListener(`change`, o),
      window.addEventListener(`scroll`, a, { passive: !0 }),
      window.addEventListener(`resize`, a, { passive: !0 }),
      () => {
        cancelAnimationFrame(r),
          e.removeEventListener(`change`, o),
          window.removeEventListener(`scroll`, a),
          window.removeEventListener(`resize`, a);
      }
    );
  }, []);
  let b = (e) => {
    _(e / 2);
    let n = t.current;
    if (!n || !i) return;
    let r = n.querySelector(`.source-film-stage`),
      a =
        parseFloat(getComputedStyle(n).getPropertyValue(`--header-offset`)) ||
        108;
    window.scrollTo({
      top:
        scrollY +
        n.getBoundingClientRect().top -
        a +
        ((n.offsetHeight - (r?.offsetHeight ?? 640)) * e) / 2,
      behavior: `instant`,
    });
  };
  return (0, p.jsxs)(p.Fragment, {
    children: [
      (0, p.jsx)(`div`, {
        className: `source-film-track`,
        ref: t,
        "data-enhanced": i,
        children: (0, p.jsxs)(`div`, {
          className: `source-film-stage`,
          "data-chapter": v.chapter,
          style: {
            "--film-reveal": `${v.reveal * 100}%`,
            "--film-context": v.context,
          },
          children: [
            (0, p.jsxs)(`div`, {
              className: `source-film-edition`,
              children: [
                (0, p.jsx)(`span`, { children: `Inside a Maestro call.` }),
                (0, p.jsx)(`span`, { children: `01 / NEKO` }),
              ],
            }),
            (0, p.jsxs)(`div`, {
              className: `source-film-layout`,
              children: [
                (0, p.jsxs)(`div`, {
                  className: `source-film-copy`,
                  children: [
                    (0, p.jsx)(`p`, {
                      className: `section-kicker`,
                      children: `Original call → Channel update`,
                    }),
                    (0, p.jsx)(`div`, {
                      className: `source-film-titles`,
                      children: m.map((e, t) =>
                        (0, p.jsxs)(
                          `div`,
                          {
                            className: `source-film-caption`,
                            "data-active": v.chapter === t,
                            "aria-hidden": v.chapter !== t,
                            inert: v.chapter !== t,
                            children: [
                              (0, p.jsx)(`h2`, {
                                id: t === 0 ? `feed-title` : void 0,
                                children: e.title,
                              }),
                              (0, p.jsx)(`span`, {
                                className: `source-film-date`,
                                children: e.date,
                              }),
                              (0, p.jsx)(`p`, { children: e.copy }),
                            ],
                          },
                          e.label
                        )
                      ),
                    }),
                    (0, p.jsxs)(o, {
                      variant: `ghost`,
                      className: `source-film-read`,
                      onClick: () => {
                        n.current &&
                          ((n.current.open = !0),
                          n.current.scrollIntoView({
                            block: `start`,
                            behavior: matchMedia(
                              `(prefers-reduced-motion: reduce)`
                            ).matches
                              ? `instant`
                              : `smooth`,
                          }),
                          n.current
                            .querySelector(`summary`)
                            ?.focus({ preventScroll: !0 }));
                      },
                      children: [
                        (0, p.jsx)(u, { size: 18 }),
                        ` Read both complete posts`,
                        ` `,
                        (0, p.jsx)(c, { size: 17 }),
                      ],
                    }),
                    (0, p.jsx)(`p`, {
                      className: `source-film-qualification`,
                      children: `20x reported by cryptic_maestro. Not independently verified.`,
                    }),
                  ],
                }),
                (0, p.jsxs)(`div`, {
                  className: `source-film-visual`,
                  "aria-label": `Original media from the call and its follow-up`,
                  children: [
                    (0, p.jsxs)(`div`, {
                      className: `source-film-media source-film-call`,
                      children: [
                        (0, p.jsx)(r, {
                          src: y[0].image,
                          alt: y[0].imageDescription,
                          width: 600,
                          height: 600,
                          loading: `lazy`,
                          sizes: `(max-width: 899px) 90vw, 50vw`,
                        }),
                        (0, p.jsx)(`span`, {
                          children: `01 · The original call`,
                        }),
                      ],
                    }),
                    (0, p.jsxs)(`div`, {
                      className: `source-film-media source-film-update`,
                      children: [
                        (0, p.jsx)(r, {
                          src: y[1].image,
                          alt: y[1].imageDescription,
                          width: 600,
                          height: 600,
                          loading: `lazy`,
                          sizes: `(max-width: 899px) 90vw, 50vw`,
                        }),
                        (0, p.jsx)(`span`, {
                          children: `02 · The channel’s follow-up`,
                        }),
                      ],
                    }),
                    (0, p.jsxs)(`div`, {
                      className: `source-film-receipt`,
                      "data-visible": v.chapter === 2,
                      "aria-hidden": v.chapter !== 2,
                      inert: v.chapter !== 2,
                      children: [
                        (0, p.jsxs)(`span`, {
                          children: [
                            (0, p.jsx)(l, { size: 16 }),
                            ` Original sources, linked.`,
                          ],
                        }),
                        y.map((e, t) =>
                          (0, p.jsxs)(
                            `a`,
                            {
                              href: e.url,
                              target: `_blank`,
                              rel: `noreferrer`,
                              children: [
                                t === 0
                                  ? `Read the call`
                                  : `Read the 20x update`,
                                ` `,
                                (0, p.jsx)(a, { size: 16 }),
                              ],
                            },
                            e.id
                          )
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, p.jsxs)(`nav`, {
              className: `source-film-chapters`,
              "aria-label": `Call sequence chapters`,
              children: [
                m.map((e, t) =>
                  (0, p.jsxs)(
                    o,
                    {
                      variant: `ghost`,
                      "aria-pressed": v.chapter === t,
                      onClick: () => b(t),
                      children: [
                        (0, p.jsxs)(`span`, { children: [`0`, t + 1] }),
                        e.label,
                        (0, p.jsx)(`i`, { "aria-hidden": `true` }),
                      ],
                    },
                    e.label
                  )
                ),
                (0, p.jsx)(`small`, {
                  children: i
                    ? `Scroll to follow the posts`
                    : `Choose a chapter`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, p.jsxs)(`details`, {
        ref: n,
        className: `source-film-originals`,
        children: [
          (0, p.jsxs)(`summary`, {
            children: [
              (0, p.jsx)(`span`, { children: `The complete original posts` }),
              (0, p.jsxs)(`span`, {
                children: [`Call + follow-up `, (0, p.jsx)(c, { size: 18 })],
              }),
            ],
          }),
          (0, p.jsx)(`p`, {
            children: `Original Telegram words, media and timestamps, unchanged. Loading these posts connects to Telegram.`,
          }),
          e,
        ],
      }),
    ],
  });
}
export { h as SourceFilm };
