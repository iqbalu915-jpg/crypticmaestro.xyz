import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { L as r } from "./utils-CaPlbFnG.js";
import { t as i } from "./arrow-up-right-BpVuVI5W.js";
import { i as a, n as o, r as s, t as c } from "./tabs-BypV-4kM.js";
import { t as l } from "./button-BFvZYHow.js";
import { i as u, n as d, t as f } from "./story-format-fSYHdjty.js";
var p = r(`book-open`, [
    [`path`, { d: `M12 5v16`, key: `1f6ucr` }],
    [
      `path`,
      {
        d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,
        key: `1fyvmf`,
      },
    ],
  ]),
  m = r(`minus`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }]]),
  h = e(t(), 1),
  g = n();
function _(e) {
  return (0, g.jsx)(v, { ...e }, `${e.token}:${e.call.url}:${e.update.url}`);
}
function v({ token: e, call: t, update: n, children: r }) {
  let [_, v] = (0, h.useState)(`call`),
    [y, b] = (0, h.useState)(!1),
    x = (0, h.useId)(),
    S = [
      { ...t, id: `call` },
      { ...n, id: `update` },
    ];
  return (0, g.jsxs)(`section`, {
    className: `story-post-reader`,
    "aria-label": `Original posts for ${e}`,
    children: [
      (0, g.jsxs)(`div`, {
        className: `story-post-heading`,
        children: [
          (0, g.jsx)(`span`, { children: `From the source` }),
          (0, g.jsx)(`span`, { children: `cryptic_maestro / Telegram` }),
        ],
      }),
      (0, g.jsxs)(c, {
        value: _,
        onValueChange: (e) => v(String(e)),
        children: [
          (0, g.jsx)(s, {
            variant: `line`,
            className: `story-post-tabs`,
            "aria-label": `Choose a source post`,
            children: S.map((e) =>
              (0, g.jsx)(
                a,
                { value: e.id, className: `story-post-tab`, children: e.label },
                e.id
              )
            ),
          }),
          S.map((t) =>
            (0, g.jsx)(
              o,
              {
                value: t.id,
                className: `story-post-panel`,
                children:
                  _ === t.id &&
                  (0, g.jsxs)(g.Fragment, {
                    children: [
                      (0, g.jsxs)(`div`, {
                        className: `story-post-toolbar`,
                        children: [
                          (0, g.jsxs)(`time`, {
                            dateTime: t.postedAt,
                            children: [
                              f(t.postedAt),
                              (0, g.jsx)(`span`, { children: d(t.postedAt) }),
                            ],
                          }),
                          (0, g.jsxs)(l, {
                            variant: `outline`,
                            className: `story-post-toggle`,
                            "aria-expanded": y,
                            "aria-controls": `${x}-${t.id}`,
                            onClick: () => b((e) => !e),
                            children: [
                              y
                                ? (0, g.jsx)(m, { "aria-hidden": `true` })
                                : (0, g.jsx)(p, { "aria-hidden": `true` }),
                              y ? `Hide full post` : `Load full post`,
                            ],
                          }),
                        ],
                      }),
                      t.note &&
                        (0, g.jsx)(`p`, {
                          className: `story-post-note`,
                          children: t.note,
                        }),
                      (0, g.jsx)(`div`, {
                        id: `${x}-${t.id}`,
                        className: `story-post-content`,
                        children: y
                          ? (0, g.jsx)(`div`, {
                              className: `story-post-document`,
                              children: (0, g.jsx)(u, {
                                url: t.url,
                                title: `${e} · ${t.label} on Telegram`,
                                loadOnMount: !0,
                              }),
                            })
                          : (0, g.jsxs)(`div`, {
                              className: `story-post-intro`,
                              children: [
                                t.id === `call` && r,
                                (0, g.jsxs)(`div`, {
                                  className: `story-post-context`,
                                  children: [
                                    (0, g.jsx)(`p`, {
                                      children:
                                        t.id === `call`
                                          ? t.label === `Original call`
                                            ? `Read the call as it was posted.`
                                            : `Read the matched source post.`
                                          : `Read the reported milestone in its original context.`,
                                    }),
                                    (0, g.jsx)(`span`, {
                                      children: `Full text, media and timestamp. Loading connects to Telegram.`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
              },
              t.id
            )
          ),
        ],
      }),
      (0, g.jsx)(`div`, {
        className: `story-post-links`,
        "aria-label": `Open sources on Telegram`,
        children: S.map((e) =>
          (0, g.jsxs)(
            `a`,
            {
              href: e.url,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: [
                e.label,
                ` on Telegram`,
                ` `,
                (0, g.jsx)(i, { size: 16, "aria-hidden": `true` }),
              ],
            },
            e.id
          )
        ),
      }),
    ],
  });
}
export { _ as StoryPostReader };
