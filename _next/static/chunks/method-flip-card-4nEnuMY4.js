import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { L as r } from "./utils-CaPlbFnG.js";
import { t as i } from "./rotate-ccw-CllOuoeu.js";
import { t as a } from "./rotate-cw-BkqOar3L.js";
import { t as o } from "./button-BFvZYHow.js";
var s = r(`calendar-days`, [
    [`path`, { d: `M8 2v3`, key: `1ioesn` }],
    [`path`, { d: `M16 2v3`, key: `otl347` }],
    [
      `rect`,
      { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2`, key: `h1oib` },
    ],
    [`path`, { d: `M3 9h18`, key: `1pudct` }],
    [`path`, { d: `M8 13h.01`, key: `1sbv64` }],
    [`path`, { d: `M12 13h.01`, key: `y0uutt` }],
    [`path`, { d: `M16 13h.01`, key: `wip0gl` }],
    [`path`, { d: `M8 17h.01`, key: `p3bg7i` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
    [`path`, { d: `M16 17h.01`, key: `ql8jdd` }],
  ]),
  c = r(`chart-column`, [
    [`path`, { d: `M3 3v16a2 2 0 0 0 2 2h16`, key: `c24i48` }],
    [`path`, { d: `M18 17V9`, key: `2bz60n` }],
    [`path`, { d: `M13 17V5`, key: `1frdt8` }],
    [`path`, { d: `M8 17v-3`, key: `17ska0` }],
  ]),
  l = r(`fingerprint-pattern`, [
    [`path`, { d: `M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4`, key: `1nerag` }],
    [`path`, { d: `M14 13.12c0 2.38 0 6.38-1 8.88`, key: `o46ks0` }],
    [`path`, { d: `M17.29 21.02c.12-.6.43-2.3.5-3.02`, key: `ptglia` }],
    [`path`, { d: `M2 12a10 10 0 0 1 18-6`, key: `ydlgp0` }],
    [`path`, { d: `M2 16h.01`, key: `1gqxmh` }],
    [`path`, { d: `M21.8 16c.2-2 .131-5.354 0-6`, key: `drycrb` }],
    [`path`, { d: `M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2`, key: `1tidbn` }],
    [`path`, { d: `M8.65 22c.21-.66.45-1.32.57-2`, key: `13wd9y` }],
    [`path`, { d: `M9 6.8a6 6 0 0 1 9 5.2v2`, key: `1fr1j5` }],
  ]),
  u = r(`gauge`, [
    [`path`, { d: `m12 14 4-4`, key: `9kzdfg` }],
    [`path`, { d: `M3.34 19a10 10 0 1 1 17.32 0`, key: `19p75a` }],
  ]),
  d = r(`messages-square`, [
    [
      `path`,
      {
        d: `M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z`,
        key: `1n2ejm`,
      },
    ],
    [
      `path`,
      {
        d: `M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1`,
        key: `1qfcsi`,
      },
    ],
  ]),
  f = r(`shield-question-mark`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3`, key: `mhlwft` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  p = e(t(), 1),
  m = n(),
  h = () => () => {},
  g = () => !0,
  _ = () => !1,
  v = { source: l, update: d, audit: f, post: s, entry: u, peak: c };
function y({ label: e, title: t, description: n, kind: r }) {
  let [s, c] = (0, p.useState)(!1),
    l = (0, p.useSyncExternalStore)(h, g, _),
    u = (0, p.useId)(),
    d = v[r];
  return (0, m.jsxs)(`article`, {
    className: `method-flip-card`,
    "data-ready": l,
    "data-flipped": s,
    "aria-labelledby": `${u}-title`,
    children: [
      (0, m.jsxs)(`div`, {
        className: `method-flip-stage`,
        children: [
          (0, m.jsxs)(`div`, {
            className: `method-flip-face method-flip-front`,
            "aria-hidden": l && s,
            inert: l && s,
            children: [
              (0, m.jsxs)(`div`, {
                className: `method-flip-heading`,
                children: [
                  (0, m.jsx)(`span`, { children: e }),
                  (0, m.jsx)(d, {
                    size: 32,
                    strokeWidth: 1.25,
                    "aria-hidden": `true`,
                  }),
                ],
              }),
              (0, m.jsx)(`h3`, { id: `${u}-title`, children: t }),
            ],
          }),
          (0, m.jsxs)(`div`, {
            className: `method-flip-face method-flip-back`,
            id: `${u}-details`,
            "aria-hidden": l && !s,
            inert: l && !s,
            children: [
              (0, m.jsx)(`span`, {
                className: `method-flip-label`,
                children: e,
              }),
              (0, m.jsx)(`p`, { children: n }),
            ],
          }),
        ],
      }),
      (0, m.jsx)(o, {
        className: `method-flip-toggle`,
        type: `button`,
        variant: `ghost`,
        disabled: !l,
        "aria-expanded": s,
        "aria-controls": `${u}-details`,
        "aria-label": `${s ? `Back to front` : `View details`}: ${e}`,
        onClick: () => c((e) => !e),
        onKeyDown: (e) => {
          e.key === `Escape` && s && (e.preventDefault(), c(!1));
        },
        children: (0, m.jsxs)(`span`, {
          className: `method-flip-control-label`,
          children: [
            (0, m.jsx)(`span`, {
              children: s ? `Back to front` : `View details`,
            }),
            s
              ? (0, m.jsx)(i, { size: 18, "aria-hidden": `true` })
              : (0, m.jsx)(a, { size: 18, "aria-hidden": `true` }),
          ],
        }),
      }),
    ],
  });
}
export { y as MethodFlipCard };
